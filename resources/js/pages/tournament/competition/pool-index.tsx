import PageHeader from "@/components/ext/page-header";
import CompetitionPool from "@/components/ext/tournament/competition-pool";
import { dashboard } from "@/routes";
import tournaments, { index } from "@/routes/tournaments";
import pools from "@/routes/tournaments/competition/pools";
import { ArrowRight, CheckCircle, ClockArrowUp, Search, Shuffle, Verified } from "lucide-react";



export default function PoolIndex() {
    return (
        <>
            {/* <!-- Header & Breadcrumbs Section --> */}
            <PageHeader title="Pool Generator" subText="Strategically assign 16 state
                            representative teams into competitive brackets. Use manual drag-and-drop or our algorithmic
                            balance engine.">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">

                    <div class="flex gap-3">
                        <div class="inline-flex rounded-lg overflow-hidden border border-outline-variant">
                            <button class="px-4 py-2 bg-primary text-white font-bold text-label-md">Men</button>
                            <button
                                class="px-4 py-2 bg-surface text-on-surface-variant hover:bg-surface-container font-medium text-label-md">Women</button>
                        </div>
                    </div>
                </div>
            </PageHeader>
          
            <div class="grid grid-cols-12 gap-8 items-start">
                {/* <!-- Left Sidebar: Team Selection Pool --> */}
                <section
                    class="col-span-12 lg:col-span-3 bg-surface-container-lowest rounded-xl shadow-sm h-[calc(100vh-320px)] flex flex-col border-l-4 border-secondary overflow-hidden">
                    <div class="p-4 border-b border-surface-container">
                        <h3 class="font-headline font-bold text-primary flex items-center gap-2">
                            <ClockArrowUp className="text-secondary" />

                            Unassigned Teams (0)
                        </h3>
                        <div class="mt-3 relative">

                            <Search className=" absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" />

                            <input
                                class="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-md text-body-sm focus:ring-2 focus:ring-primary/20"
                                placeholder="Search Rosters..." type="text" />
                        </div>
                    </div>
                    <div class="p-4 overflow-y-auto space-y-2 flex-grow">
                        {/* <!-- Teams would appear here if not assigned --> */}
                        <div class="py-12 flex flex-col items-center justify-center text-center opacity-30">
                            <CheckCircle className="h-20 w-20 mb-2" />

                            <p class="text-label-md font-bold">All 16 Teams Assigned</p>
                            <p class="text-[10px] uppercase tracking-tighter">Use the drag feature to move between pools</p>
                        </div>
                    </div>
                    <div class="p-4 bg-surface-container-low">
                        <button
                            class="w-full bg-primary text-white py-3 rounded-lg font-bold text-label-md flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-all">

                            <Shuffle />

                            Auto-Balance Pools
                        </button>
                    </div>
                </section>
                {/* <!-- Main Grid: Multi-Pool Layout --> */}
                <section className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {/* <!-- Pool Card A --> */}

                    <CompetitionPool pool="A" teams={["Telengana", "Pondicherry", "Delhi", "Chandigarh"]} />
                    <CompetitionPool pool="B" teams={["Uttar Pradesh", "Uttarakhand", "Tamil Nadu", "Rajasthan"]} />
                    <CompetitionPool pool="C" teams={["Punjab", "Maharashtra", "Madhya Pradesh", "Kerala"]} />
                    <CompetitionPool pool="D" teams={["Jammu and Kashmir", "Haryana", "Gujarat", "Chhattisgarh"]} />






                </section>
            </div>
            {/* <!-- Summary Statistics Footer Panel --> */}
            <section class="mt-12 bg-primary text-on-primary rounded-2xl overflow-hidden shadow-2xl relative">
                <div class="absolute inset-0 opacity-10 pointer-events-none">
                    <div class="absolute top-0 left-0 w-full h-full"
                    // style="background-image: radial-gradient(circle at 2px 2px, #fff 1px, transparent 0); background-size: 40px 40px;"
                    >
                    </div>
                </div>
                <div class="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 gap-8 text-white">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-12 flex-grow">
                        <div>
                            <p class="text-label-sm font-label uppercase tracking-widest opacity-60">Total Teams Assigned
                            </p>
                            <h5 class="font-display text-4xl font-black mt-1">16<span class="text-xl opacity-40">/16</span>
                            </h5>
                            <div class="w-full bg-on-primary/20 h-1 rounded-full mt-3">
                                <div class="w-full bg-secondary h-full rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p class="text-label-sm font-label uppercase tracking-widest opacity-60">Avg. Teams / Pool</p>
                            <h5 class="font-display text-4xl font-black mt-1">4.0</h5>
                            <p class="text-label-xs mt-3 uppercase font-bold text-primary-fixed">Perfect Distribution</p>
                        </div>
                        <div class="hidden md:block">
                            <p class="text-label-sm font-label uppercase tracking-widest opacity-60">Competition Phase</p>
                            <h5 class="font-display text-2xl font-bold mt-1">GROUP STAGE</h5>
                            <p class="text-label-xs mt-5 uppercase font-bold text-primary-fixed flex items-center gap-1">

                                <Verified />

                                Registry Synchronized
                            </p>
                        </div>
                    </div>
                    <div class="flex-shrink-0 w-full md:w-auto">
                        <button
                            class="w-full md:w-auto bg-secondary text-white px-8 py-5 rounded-xl font-headline font-bold text-lg flex items-center justify-center gap-4 hover:bg-secondary/90 transition-all shadow-[0_8px_24px_rgba(184,10,46,0.3)] active:scale-95 group">
                            Finalize Pools &amp; Proceed to Fixtures
                            <ArrowRight className="group-hover:translate-x-1 transition-all" />

                        </button>
                    </div>
                </div>
            </section>

        </>
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
        {
            title: 'Name Tournaments',
            href: tournaments.show.url({ tournament: 1 })
        },
        {
            title: 'Pool Generator',
            href: pools.index
        }
    ],
};