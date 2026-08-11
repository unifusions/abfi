import LinkButton from "@/components/ext/link-button";
import PageHeader from "@/components/ext/page-header";
import ActiveTournament from "@/components/ext/tournament/active-tournament";
import TournamentDraft from "@/components/ext/tournament/tournament-draft";
import TournamentList from "@/components/ext/tournament/tournament-list";
import TournamentStatCard from "@/components/ext/tournament/tournament-stats-card";
import UpcomingTournament from "@/components/ext/tournament/upcoming-tournament";
import { useAuthorization } from "@/hooks/use-authorization";
import usePermission from "@/hooks/use-permissions";

import { dashboard } from "@/routes";
import { create, index } from "@/routes/tournaments";
import { Search, Plus } from "lucide-react";

export default function TournamentIndex({ tournaments, activeNow, completedMTD, activeTournament }) {
    const { can } = useAuthorization();


    return (
        <>

            <PageHeader title="Tournaments" >

                {can('tournament.create') &&
                    <div className="flex flex-wrap items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                        {/* <div class="flex flex-col gap-1">
                    <label class="text-[10px] font-bold text-on-surface-variant uppercase ml-1">Season</label>
                    <select class="bg-surface-container-lowest border-none rounded-lg text-sm font-semibold pr-10 focus:ring-2 focus:ring-primary/20">
                        <option>2024 Fall League</option>
                        <option>2024 Summer Series</option>
                        <option>2025 Spring Classic</option>
                    </select>
                </div>

         
                <div class="flex flex-col gap-1">
                    <label class="text-[10px] font-bold text-on-surface-variant uppercase ml-1">State</label>
                    <select class="bg-surface-container-lowest border-none rounded-lg text-sm font-semibold pr-10 focus:ring-2 focus:ring-primary/20">
                        <option>All States</option>
                        <option>California</option>
                        <option>Florida</option>
                        <option>Texas</option>
                    </select>
                </div> */}
                        <div className="flex flex-col gap-1">
                            <LinkButton href={create()} icon={Plus}> New Tournament </LinkButton>
                        </div>
                    </div>
                }

            </PageHeader>




            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

                {activeTournament?.data && <div className="row-span-3">
                    <ActiveTournament tournament={activeTournament?.data} />    </div>}



                <TournamentStatCard
                    label="Active Now"
                    value={activeNow}
                    description=""

                />

                <TournamentStatCard
                    label="Verified Rosters"
                    value="672"
                    description=""

                />

                <TournamentStatCard
                    label="Completed (MTD)"
                    value={completedMTD}
                    description="Tournaments"

                />









            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* <ActiveTournament /> */}

                {/* <UpcomingTournament /> */}


                {/* <TournamentDraft /> */}
            </div>

            <TournamentList tournaments={tournaments} />




        </>
    )
}

TournamentIndex.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard()
        }
        ,
        {
            title: 'Tournaments',
            href: index(),
        },
    ],
};
