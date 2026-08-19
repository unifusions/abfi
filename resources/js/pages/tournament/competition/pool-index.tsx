
import { dashboard } from "@/routes";
import tournaments from "@/routes/tournaments";
import pools from "@/routes/tournaments/competition/pools";

import EmptyPool from "./empty-pool";

import GenerateFixture from "./generate-fixtures";
import PoolBuilder from "./pool-builder";
import FinalFixture from "./final-fixture";
import IdcardIssuance from "./id-card-issuer";
import MatchResultUpdate from "./match-result-update";
import { usePage } from "@inertiajs/react";
import KnockoutFixtures from "./knockout-fixtures";



export default function PoolIndex({
    tournament, competition,pool_fixture,
    approvedRosters, competition_for, category, pools, pools_roster,
    avg_roster, unassignedRosters, fixtures, locked_fixtures,
    poolStageCompleted, knockout_fixtures
}: { tournament: any, competition: any, approvedRosters: any, competition_for: string, category: string }) {

// return (
//     <>{JSON.stringify(tournament)}</>
// )
    if (!competition.pools_generated_at) {
        return <EmptyPool
            tournament={tournament} competition={competition} category={category}
            rosters={approvedRosters} />
    }

    if (!competition.pools_locked_at) {
        return <PoolBuilder
            pools={pools} avg_roster={avg_roster}
            pools_roster={pools_roster}
            competition={competition} category={category} tournament={tournament}
            unassignedRosters={unassignedRosters} approvedRosters={approvedRosters}
        />
    }
    if (!competition.fixture_generated_at) {
        return <GenerateFixture
            pools={pools}
        />
    }

    if (!competition.fixture_locked_at) {
        return <FinalFixture
            fixtures={fixtures} />

    }

    // if (!competition.id_card_generated_at)
    //     return <IdcardIssuance />

    if (!poolStageCompleted) {
        return <MatchResultUpdate
           tournament = {tournament}  competition = {competition} pool_fixture={pool_fixture}
            fixtures={fixtures} />
    }

    if (knockout_fixtures) { return <KnockoutFixtures 
        tournament={tournament}
        competition={competition}
        fixtures={knockout_fixtures} /> }

    return (
        <>Default Index</>
    )




}

PoolIndex.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard()
        }
        ,
        {
            title: 'Tournaments',
            href: tournaments.index.url()
        },


    ],
};