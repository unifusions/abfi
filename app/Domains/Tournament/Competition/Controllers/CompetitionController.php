<?php


namespace App\Domains\Tournament\Competition\Controllers;

use App\Domains\Tournament\Competition\Certificate\Services\CompetitionCertificateService;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStageEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureStatusEnum;
use App\Domains\Tournament\Competition\Engine\Fixture\Enums\FixtureTypeEnum;
use App\Domains\Tournament\Competition\Engine\Pool\Resources\PoolStandingResource;
use App\Domains\Tournament\Competition\Enums\CompetitionPhaseEnum;
use App\Domains\Tournament\Competition\Models\TournamentCompetition;
use App\Domains\Tournament\Competition\Resources\FixtureResource;
use App\Domains\Tournament\Competition\Resources\LockedFixtureListResource;
use App\Domains\Tournament\Competition\Services\CompetitionCompletion;
use App\Domains\Tournament\Models\Tournament;

use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Domains\Tournament\Roster\Models\Roster;
use App\Http\Controllers\Controller;

class CompetitionController extends Controller
{

    public function __construct(protected CompetitionCertificateService $service)
    {
    }
    public function builder(Tournament $tournament, TournamentCompetition $competition)
    {
        $competition->load(['pools.rosters.organization']);
        $approvedRosters = $competition->rosters()
            ->where('status', RosterStatusEnum::APPROVED)
            ->with([
                'organization.state',
            ])

            ->get();

        $assignedRosterIds = $competition->pools
            ->flatMap(fn($pool) => $pool->rosters)
            ->pluck('id');

        $unassignedRosters = $approvedRosters
            ->whereNotIn('id', $assignedRosterIds)
            ->values();

        if ($competition->fixturesGenerated()) {

            $competition->load([
                'fixtures',
                'fixtures.pool',
                'fixtures.homeRoster.organization.state',
                'fixtures.awayRoster.organization.state',
            ]);
            $competition->fixtures;
        }
        return inertia(
            'tournament/competition/pool-index',
            [
                'tournament' => $tournament,
                'category' => $tournament->category->code,
                'competition' => $competition,
                'pools' => $competition->pools()->with('rosters.organization.state')->get(),
                'approvedRosters' => $approvedRosters,
                'unassignedRosters' => $unassignedRosters,
                'pools_roster' => $competition->pools()->withCount('rosters')->get()->sum('rosters_count'),
                'avg_roster' => $competition->pools()->withCount('rosters')->get()->avg('rosters_count'),
                'pool_fixture' => $competition->pools()->with([
                    'fixtures.homeRoster.organization.state',
                    'fixtures.awayRoster.organization.state',
                ])->get()->groupBy('name'),
                'fixtures' => $competition->fixturesGenerated()
                    ? $competition->fixtures()->where('fixture_type', FixtureTypeEnum::POOL)->with([
                        'pool',
                        'homeRoster.organization.state',
                        'awayRoster.organization.state',
                    ])->orderBy('pool_id')
                        ->orderBy('round')
                        ->orderBy('match_number')
                        ->get()
                    : collect(),

                'locked_fixtures' => $competition->fixturesGenerated() ?
                    LockedFixtureListResource::collection($competition->fixtures()
                        ->where('status', FixtureStatusEnum::SCHEDULED)

                        ->orderBy('round')
                        ->get())
                    : collect()


            ]
        );
    }
    public function fixtures(
        Tournament $tournament,
        TournamentCompetition $competition,
    ) {

        return inertia(
            'tournament/competition/pool-index',
            [
                'tournament' => $tournament,
                'competition' => $competition,
                'poolStageCompleted' => app(CompetitionCompletion::class)
                    ->isPoolStageCompleted($competition),

                'fixtures' => $competition?->fixtures
                    ->sortBy([
                        ['pool.code', 'asc'],
                        ['round', 'asc'],
                        ['match_number', 'asc'],
                    ])
                    ->values(),
                'knockout_fixtures' => $competition->fixtures()->with([
                    'homeRoster.organization.state',
                    'awayRoster.organization.state'
                ])
                    ->where('fixture_type', FixtureTypeEnum::KNOCKOUT)
                    ->orderBy('stage')
                    ->orderBy('match_number')

                    ->get(),
            ]
        );
    }

    public function standings(Tournament $tournament, TournamentCompetition $competition)
    {

        return inertia(
            'tournament/competition/standings/standings-index',
            [
                'pools' => PoolStandingResource::collection($competition->pools),
                'poolStageCompleted' => app(CompetitionCompletion::class)
                    ->isPoolStageCompleted($competition),
                'standings' => $competition->standings()->where('fixture_type', FixtureTypeEnum::POOL)->with('pool')->get()->groupBy('tournament_pool_id'),
                'quarter_finals' => $competition->fixtures()
                    ->where('fixture_type', FixtureTypeEnum::KNOCKOUT->value)
                    ->where('stage', FixtureStageEnum::QUARTER_FINAL)
                    ->with([
                        'homeRoster.organization.state',
                        'awayRoster.organization.state',
                    ])
                    ->orderBy('match_number')
                    ->get(),
                'semi_finals' => $competition->fixtures()
                    ->where('fixture_type', FixtureTypeEnum::KNOCKOUT->value)
                    ->where('stage', FixtureStageEnum::SEMI_FINAL)
                    ->with([
                        'homeRoster.organization.state',
                        'awayRoster.organization.state',
                    ])
                    ->orderBy('match_number')
                    ->get(),

                'finals' => $competition->fixtures()
                    ->where('fixture_type', FixtureTypeEnum::KNOCKOUT->value)
                    ->where('stage', FixtureStageEnum::FINAL)
                    ->with([
                        'homeRoster.organization.state',
                        'awayRoster.organization.state',
                    ])
                    ->orderBy('match_number')
                    ->get(),
            ]
        );
    }

    public function certificates(Tournament $tournament, TournamentCompetition $competition)
    {
        $poolRosterIds = $competition->fixtures()
            ->where('fixture_type', FixtureTypeEnum::POOL)
            ->where('status', FixtureStatusEnum::COMPLETED)
            ->get()
            ->flatMap(fn($fixture) => [
                $fixture->home_roster_id,
                $fixture->away_roster_id,
            ])
            ->filter()
            ->unique();

        /*
         * QF losers receive participant certificates.
         */
        $qfLosers = $competition->fixtures()
            ->where('stage', FixtureStageEnum::QUARTER_FINAL)
            ->where('status', FixtureStatusEnum::COMPLETED)
            ->get()
            ->map(
                fn($fixture) =>
                $fixture->home_roster_id === $fixture->winner_roster_id
                ? $fixture->away_roster_id
                : $fixture->home_roster_id
            )
            ->filter()
            ->unique();

        /*
         * SF losers receive 3rd-place certificates,
         * therefore they must NOT receive participant certificates.
         */
        $sfLosers = $competition->fixtures()
            ->where('stage', FixtureStageEnum::SEMI_FINAL)
            ->where('status', FixtureStatusEnum::COMPLETED)
            ->get()
            ->map(
                fn($fixture) =>
                $fixture->home_roster_id === $fixture->winner_roster_id
                ? $fixture->away_roster_id
                : $fixture->home_roster_id
            )
            ->filter()
            ->unique();

        /*
         * Finalists receive Winner / Runner-up certificates,
         * therefore they must NOT receive participant certificates.
         */
        $finalists = $competition->fixtures()
            ->where('stage', FixtureStageEnum::FINAL)
            ->where('status', FixtureStatusEnum::COMPLETED)
            ->get()
            ->flatMap(fn($fixture) => [
                $fixture->home_roster_id,
                $fixture->away_roster_id,
            ])
            ->filter()
            ->unique();

        /*
         * Pool participants who progressed to QF are initially
         * included in $poolRosterIds.
         *
         * Remove SF losers and finalists.
         *
         * Then add QF losers back explicitly.
         */
        $excludedRosterIds = $sfLosers
            ->merge($finalists)
            ->unique();

        $participantRosterIds = $poolRosterIds
            ->reject(
                fn($id) => $excludedRosterIds->contains($id)
            )
            ->merge($qfLosers)
            ->unique()
            ->values();

        $players = Roster::query()
            ->whereIn('id', $participantRosterIds)
            ->withCount('players')
            ->get()
            ->sum('players_count');

        $participatingRosters = Roster::query()->with(['organization.state', 'certificates'])
        ->withCount(['players', 'officials'])->whereIn('id', $participantRosterIds)->get();

        return inertia(
            'tournament/competition/certificates/certificate-index',
            [
                'tournament' => $tournament,
                'competition' => $competition,
                'certificates' => $competition->certificates,
                'participant_players' => $players,
                'winning_players' => $this->service->getFinalResults($competition),
                'participating_rosters' => $participatingRosters
            ]
        );
    }

    public function certificatesForRoster(Tournament $tournament, TournamentCompetition $competition, Roster $roster)
    {

        return inertia('tournament/competition/certificates/certificate-roster', [
            'tournament' => $tournament,
            'competition' => $competition,
            'roster' => $roster,
            'certificates' => $roster->certificates
        ]);

    }
    public function closeRegistration(Tournament $tournament, TournamentCompetition $competition)
    {
        $competition->phase = CompetitionPhaseEnum::REGISTRATION_CLOSED;
        $competition->save();
        return back()->with([
            'success' => 'Competition registration has been closed successfully'
        ]);
    }
    public function completeCompetition(Tournament $tournament, TournamentCompetition $competition)
    {
        $competition->phase = CompetitionPhaseEnum::COMPLETED;
        $competition->save();
        return back()->with([
            'success' => 'Competition has been completed successfully'
        ]);
    }
}