import PageHeader from "@/components/ext/page-header";
import ActiveTournament from "@/components/ext/tournament/active-tournament";
import TournamentDraft from "@/components/ext/tournament/tournament-draft";
import TournamentList from "@/components/ext/tournament/tournament-list";
import UpcomingTournament from "@/components/ext/tournament/upcoming-tournament";
import { dashboard } from "@/routes";
import { index } from "@/routes/tournaments";
import { Search } from "lucide-react";

export default function TournamentIndex() {
    return (
        <>

            <PageHeader title="Tournaments" >    <div class="flex flex-wrap items-center gap-4 bg-surface-container-low p-4 rounded-xl">
                <div class="flex flex-col gap-1">
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
                </div>
                <div class="flex flex-col gap-1">
                    <label class="text-[10px] font-bold text-on-surface-variant uppercase ml-1">Search</label>
                    <div class="relative">
                        <Search className="h-5 absolute left-2 top-1/2 -translate-y-1/2 " />

                        <input class=" border-none rounded-lg text-sm font-semibold pl-10 focus:ring-2 focus:ring-primary/20" placeholder="Tournament Name..." type="text" />
                    </div>
                </div>
            </div></PageHeader>




            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div class="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm">
                    <p class="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1">Active Now</p>
                    <h3 class="font-headline text-4xl font-black text-on-surface">12</h3>
                    <p class="text-primary-fixed-dim text-[10px] mt-2">+2 from last week</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-secondary shadow-sm">
                    <p class="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1">Registration Open</p>
                    <h3 class="font-headline text-4xl font-black text-on-surface">08</h3>
                    <p class="text-on-secondary-fixed-variant text-[10px] mt-2">Closing in 48h</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary shadow-sm">
                    <p class="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1">Total Teams</p>
                    <h3 class="font-headline text-4xl font-black text-on-surface">432</h3>
                    <p class="text-primary-fixed-dim text-[10px] mt-2">Verified Registries</p>
                </div>
                <div class="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-outline shadow-sm">
                    <p class="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1">Completed (MTD)</p>
                    <h3 class="font-headline text-4xl font-black text-on-surface">24</h3>
                    <p class="text-on-surface-variant text-[10px] mt-2">Archived Records</p>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <ActiveTournament />

                <UpcomingTournament />


                <TournamentDraft />
            </div>

            <TournamentList />




        </>
    )
}

TournamentIndex.layout = {
    breadcrumbs: [
        {title : 'Dashboard',
            href:dashboard()
        }
        ,
        {
            title: 'Tournaments',
            href: index(),
        },
    ],
};
