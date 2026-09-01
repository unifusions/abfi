import LinkButton from "@/components/ext/link-button";
import PageHeader from "@/components/ext/page-header";
import ActiveTournament from "@/components/ext/tournament/active-tournament";

import TournamentList from "@/components/ext/tournament/tournament-list";
import TournamentStatCard from "@/components/ext/tournament/tournament-stats-card";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";

import { useAuthorization } from "@/hooks/use-authorization";


import { dashboard } from "@/routes";
import { create, index } from "@/routes/tournaments";
import { Search, Plus } from "lucide-react";

export default function TournamentIndex({ tournaments, activeNow, completedMTD, activeTournament, totalTeams }) {
    const { can } = useAuthorization();

    useSetBreadcrumbs([
        {title : 'Dashboard', href: dashboard().url},
        {title : 'Tournaments', href:index().url }
    ])

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

            <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-6">
                {activeTournament?.data && <div className=" ">
                    <ActiveTournament tournament={activeTournament?.data} />    </div>}

                <div className="md:col-span-3">

                    <div className="grid  sm:grid-cols-1   md:grid-cols-3 gap-6 mb-6">





                        <TournamentStatCard
                            label="Active Now"
                            value={activeNow}
                            description=""

                        />

                        <TournamentStatCard
                            label="Verified Rosters"
                            value={totalTeams}
                            description=""

                        />

                        <TournamentStatCard
                            label="Completed "
                            value={completedMTD}


                        />


                        <div className="md:col-span-3">
                            <TournamentList tournaments={tournaments} />
                        </div>






                    </div>
                </div>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* <ActiveTournament /> */}

                {/* <UpcomingTournament /> */}


                {/* <TournamentDraft /> */}
            </div>






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
