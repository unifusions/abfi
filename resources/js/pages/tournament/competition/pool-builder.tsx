import PageHeader from "@/components/ext/page-header";
import { CheckCircle, ClockArrowUp, Search } from "lucide-react";
import UnassignedRosterCard from "./unassigned-roster-card";
import CompetitionPool from "@/components/ext/tournament/competition-pool";
import PoolLock from "./pool-lock";

export default function PoolBuilder(
    {
        pools,  pools_roster, avg_roster,
        competition, category, tournament, unassignedRosters, approvedRosters
    }
) {
    return (
        <>
         {/* <!-- Header & Breadcrumbs Section --> */}
            <PageHeader title={`Pool Generator for ${competition.name} ${category} `} subText={tournament.name}
            >


            </PageHeader>

            <div className="grid grid-cols-12 gap-8 items-start">
                {/* <!-- Left Sidebar: Team Selection Pool --> */}
                <section
                    className="col-span-12 lg:col-span-3 bg-zinc-50  h-[calc(100vh-320px)] flex flex-col border-l-4 border-secondary overflow-hidden">
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

                        {
                            unassignedRosters.length === 0 ? (

                                <div className="py-12 flex flex-col items-center justify-center text-center opacity-30">
                                    <CheckCircle className="h-20 w-20 mb-2" />

                                    <p className="text-label-md font-bold">All {approvedRosters.length} Rosters Assigned</p>
                                    <p className="text-[10px] uppercase tracking-tighter">Use the drag feature to move between pools</p>
                                </div>) : unassignedRosters.map((roster: any) => (
                                    <UnassignedRosterCard pools={pools} roster={roster} key={roster.id} onClick ={() => addToPool(roster.id) }/>
                                ))}
                    </div>
                 
                    {/* <div className="p-4 bg-surface-container-low">
                        <button
                            className="w-full bg-primary text-white py-3 rounded-lg font-bold text-label-md flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-all">

                            <Shuffle />

                            Auto-Balance Pools
                        </button>
                    </div> */}
                </section>

                <section className="col-span-12 lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {/* <!-- Pool Card A --> */}

                    {pools.map((pool: any) => (
                        <CompetitionPool key={pool.id} pool={pool.name} teams={pool.rosters} />
                    ))}






                    <section className="mt-12 bg-primary  relative  xl:col-span-4">
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-full"
                            // style="background-image: radial-gradient(circle at 2px 2px, #fff 1px, transparent 0); background-size: 40px 40px;"
                            >
                            </div>
                        </div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 gap-8 text-white">
                            <div className="grid grid-cols-2 gap-12 flex-grow">
                                <div>
                                    <p className="text-label-sm font-label uppercase tracking-widest opacity-60">Total Teams Assigned
                                    </p>
                                    <h5 className="font-display text-4xl font-black mt-1">{pools_roster}<span className="text-xl opacity-40">/{approvedRosters.length}</span>
                                    </h5>

                                </div>
                                <div>
                                    <p className="text-label-sm font-label uppercase tracking-widest opacity-60">Avg. Teams / Pool</p>
                                    <h5 className="font-display text-4xl font-black mt-1">{avg_roster}</h5>

                                </div>

                            </div>
                            <div className="flex-shrink-0 w-full md:w-auto">
                               <PoolLock />
                            </div>
                        </div>
                    </section>

                </section>


            </div>
            {/* <!-- Summary Statistics Footer Panel --> */}
        </>
    )
}