import PageHeader from "@/components/ext/page-header";
import CompetitionPool from "@/components/ext/tournament/competition-pool";
import { dashboard } from "@/routes";
import tournaments, { index } from "@/routes/tournaments";
import pools from "@/routes/tournaments/competition/pools";
import { ArrowRight, CheckCircle, ClockArrowUp, Search, Shuffle, Verified } from "lucide-react";
import EmptyPool from "./empty-pool";



export default function PoolIndex({
    tournament, competition, approvedRosters, competition_for, category, pools
}: { tournament: any, competition: any, approvedRosters: any, competition_for: string, category: string }) {
   
    if(!competition.pools_generated_at) {
        return <EmptyPool 
        tournament={tournament} competition={competition} category={category} 
        rosters={approvedRosters} />
    }
    return (
        <>
            {/* <!-- Header & Breadcrumbs Section --> */}
            <PageHeader title={`Pool Generator for ${competition.name} ${category} `} subText={tournament.name}
            >


            </PageHeader>

            <div className="grid grid-cols-12 gap-8 items-start">
                {/* <!-- Left Sidebar: Team Selection Pool --> */}
                <section
                    className="col-span-12 lg:col-span-3 bg-surface-container-lowest rounded-xl shadow-sm h-[calc(100vh-320px)] flex flex-col border-l-4 border-secondary overflow-hidden">
                    <div className="p-4 border-b border-surface-container">
                        <h3 className="font-headline font-bold text-primary flex items-center gap-2">
                            <ClockArrowUp className="text-secondary" />

                            Unassigned Teams (0)
                        </h3>
                        <div className="mt-3 relative">

                            <Search className=" absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" />

                            <input
                                className="w-full pl-10 pr-4 py-2   border-none rounded-md text-body-sm focus:ring-2 focus:ring-primary/20"
                                placeholder="Search Rosters..." type="text" />
                        </div>
                    </div>
                    <div className="p-4 overflow-y-auto space-y-2 flex-grow">
                        {/* <!-- Teams would appear here if not assigned --> */}
                        <div>dsd</div>
                        <div className="py-12 flex flex-col items-center justify-center text-center opacity-30">
                            <CheckCircle className="h-20 w-20 mb-2" />

                            <p className="text-label-md font-bold">All 16 Teams Assigned</p>
                            <p className="text-[10px] uppercase tracking-tighter">Use the drag feature to move between pools</p>
                        </div>
                    </div>
                    <div className="p-4 bg-surface-container-low">
                        <button
                            className="w-full bg-primary text-white py-3 rounded-lg font-bold text-label-md flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-all">

                            <Shuffle />

                            Auto-Balance Pools
                        </button>
                    </div>
                </section>
                {/* <!-- Main Grid: Multi-Pool Layout --> */}
                <section className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {/* <!-- Pool Card A --> */}
 
 {pools.map((pool: any) => (
    <CompetitionPool key={pool.id} pool={pool.name} teams={pool.rosters} />
))}
                






                </section>
            </div>
            {/* <!-- Summary Statistics Footer Panel --> */}
            <section className="mt-12 bg-primary text-on-primary rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full"
                    // style="background-image: radial-gradient(circle at 2px 2px, #fff 1px, transparent 0); background-size: 40px 40px;"
                    >
                    </div>
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 gap-8 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-grow">
                        <div>
                            <p className="text-label-sm font-label uppercase tracking-widest opacity-60">Total Teams Assigned
                            </p>
                            <h5 className="font-display text-4xl font-black mt-1">16<span className="text-xl opacity-40">/16</span>
                            </h5>
                            <div className="w-full bg-on-primary/20 h-1 rounded-full mt-3">
                                <div className="w-full bg-secondary h-full rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <p className="text-label-sm font-label uppercase tracking-widest opacity-60">Avg. Teams / Pool</p>
                            <h5 className="font-display text-4xl font-black mt-1">4.0</h5>
                            <p className="text-label-xs mt-3 uppercase font-bold text-primary-fixed">Perfect Distribution</p>
                        </div>
                        <div className="hidden md:block">
                            <p className="text-label-sm font-label uppercase tracking-widest opacity-60">Competition Phase</p>
                            <h5 className="font-display text-2xl font-bold mt-1">GROUP STAGE</h5>

                        </div>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-auto">
                        <button
                            className="w-full md:w-auto bg-secondary text-white px-8 py-5 rounded-xl font-headline font-bold text-lg flex items-center justify-center gap-4 hover:bg-secondary/90 transition-all shadow-[0_8px_24px_rgba(184,10,46,0.3)] active:scale-95 group">
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
            title: 'Pool Generator',
            href: pools.index
        }
    ],
};