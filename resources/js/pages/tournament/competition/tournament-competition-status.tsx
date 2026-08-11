import { builder, standings } from "@/routes/tournaments/competition";
import { Link, usePage } from "@inertiajs/react";


export default function TournamentCompetitionStatus({ competitions, approvedRosters }) {

    const { tournament } = usePage().props;
    return (
        <>
            {competitions.map((competition: any) => {

                if (competition.fixture_locked_at) {
                    return (
                        <Link href={standings({ tournament: tournament?.id, competition: competition.id }).url}
                            className="group bg-zinc-50 border border-outline-variant/20 p-4 flex flex-col
                 gap-3 w-48 hover:bg-accent-secondary hover:text-white transition-all">
                            <div>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{competition?.name}</p>
                                <p className="text-sm font-bold text-primary group-hover:text-white">{approvedRosters[competition.competition_type]?.length ?? 0} Teams Finalized</p>
                            </div>
                            <div
                                className="w-full py-2 bg-primary text-white text-center uppercase text-xs font-bold hover:opacity-90 transition-opacity">
                                View Standings
                            </div>
                        </Link>
                    )
                }
                return (<Link href={builder({ tournament: tournament?.id, competition: competition.id }).url}
                    className="group bg-zinc-50 border border-outline-variant/20 p-4 flex flex-col
                 gap-3 w-48 hover:bg-accent-secondary hover:text-white transition-all

                ">
                    <div>

                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{competition?.name}</p>
                        <p className="text-sm font-bold text-primary group-hover:text-white">{approvedRosters[competition.competition_type]?.length ?? 0} Teams Finalized</p>
                    </div>
                    <div
                        className="w-full py-2 bg-primary text-white text-center uppercase text-xs font-bold hover:opacity-90 transition-opacity">
                        {competition.pools_generated_at ?
                            competition.pools_locked_at ?
                                competition.fixture_generated_at ?
                                    competition.fixture_locked_at ?
                                        competition.idcard_generated_at && 'Issue ID Cards'
                                        : 'Lock Fixture'
                                    : 'Generate Fixtures'
                                : 'Lock Pools'
                            : 'Generate Pools'}

                    </div>
                </Link>)
            })}
        </>
    )
}