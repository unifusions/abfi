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
        { title: 'Dashboard', href: dashboard().url },
        { title: 'Tournaments', href: index().url }
    ])

    return (
        <>

            <PageHeader title="Tournaments" >

                {can('tournament.create') &&
                    <div className="flex flex-wrap items-center gap-4   p-4 rounded-xl">
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

            <section >

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                    <div class="col-span-2 bg-surface-container-lowest p-5  border-l-4 border-secondary shadow-sm">
                        <p class="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider mb-1">Current Active
                            Event</p>
                        <h3 class="font-headline text-2xl font-black text-primary">{activeTournament?.data?.name}</h3>
                        <div class="flex items-center gap-1.5 mt-2">
                            <span class="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            <p class="text-secondary text-xs font-bold">Active</p>
                        </div>
                    </div>

                    <TournamentStatCard
                        label="Rosters"
                        value={totalTeams}
                        description="100 % Verified Rosters"

                    />

                    <TournamentStatCard
                        label="Completed "
                        value={completedMTD}


                    />


                    {/* 
                <div class="bg-surface-container-lowest p-5 rounded-xl border-l-4 border-primary shadow-sm">
                    <p class="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider mb-1">Participating
                        State Teams</p>
                    <h3 class="font-headline text-3xl font-black text-primary">28 / 28</h3>
                    <p class="text-on-surface-variant text-[11px] mt-2">100% Rosters Verified</p>
                </div>
                <div class="bg-surface-container-lowest p-5 rounded-xl border-l-4 border-primary shadow-sm">
                    <p class="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider mb-1">Matches Finalized
                    </p>
                    <h3 class="font-headline text-3xl font-black text-primary">42 <span
                        class="text-base font-medium text-on-surface-variant">/ 56</span></h3>
                    <div class="w-full bg-surface-container rounded-full h-1.5 mt-2.5 overflow-hidden">
                        <div class="bg-primary h-full rounded-full"  ></div>
                    </div>
                </div>
                <div class="bg-surface-container-lowest p-5 rounded-xl border-l-4 border-outline shadow-sm">
                    <p class="text-on-surface-variant text-[11px] font-bold uppercase tracking-wider mb-1">Days Remaining in
                        Window</p>
                    <h3 class="font-headline text-3xl font-black text-primary">3 <span
                        class="text-base font-medium text-on-surface-variant">Days</span></h3>
                    <p class="text-on-surface-variant text-[11px] mt-2">Finals: Nov 05, 2024</p>
                </div> */}
                </div>
                <>
                    {activeTournament?.data &&
                        <div className="mt-6"><ActiveTournament tournament={activeTournament?.data} /></div>
                    }
                </>


                <TournamentList tournaments={tournaments} />
            </section>







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
