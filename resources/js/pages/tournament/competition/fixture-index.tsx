import MatchFixtureItem from "@/components/ext/tournament/match-fixture-item";
import fixtures from "@/routes/tournaments/competition/fixtures";
import { Bolt, FileDown, Lock, Trophy, Zap } from "lucide-react";



export default function FixtureIndex() {


    const MATCHFIXTURES = [
        {
            "Pool A": [
                {
                    home: "Maharashtra",
                    away: "Delhi",
                    order: 1
                },
                {
                    home: "Tamil Nadu",
                    away: "Karnataka",
                    order: 2
                }, {
                    home: "Maharashtra",
                    away: "Tamil Nadu",
                    order: 3
                }, {
                    home: "Delhi",
                    away: "Karnataka",
                    order: 4
                }, {
                    home: "Maharashtra",
                    away: "Karnataka",
                    order: 5
                }, {
                    home: "Delhi",
                    away: "Tamil Nadu",
                    order: 6
                }
            ]
        },

        {
            "Pool B": [
                {
                    home: "Haryana",
                    away: "Punjab",
                    order: 1
                },
                {
                    home: "Uttar Pradesh  ",
                    away: "West Bengal",
                    order: 2
                }, {
                    home: "Haryana",
                    away: "Uttar Pradesh",
                    order: 3
                }, {
                    home: "Punjab",
                    away: "West Bengal",
                    order: 4
                }, {
                    home: "Haryana",
                    away: "West Bengal",
                    order: 5
                }, {
                    home: "Punjab",
                    away: "Uttar Pradesh",
                    order: 6
                }
            ]
        },

        {
            "Pool C": [
                {
                    home: "Kerala",
                    away: "Telangana",
                    order: 1
                },
                {
                    home: "Gujarat    ",
                    away: "Rajasthan",
                    order: 2
                }, {
                    home: "Telangana",
                    away: "Rajasthan",
                    order: 3
                }, {
                    home: "Kerala",
                    away: "Gujarat",
                    order: 4
                }, {
                    home: "Telangana",
                    away: "Gujarat",
                    order: 5
                }, {
                    home: "Kerala",
                    away: "Rajasthan",
                    order: 6
                }
            ]
        },
        {
            "Pool D": [
                {
                    home: "Odisha",
                    away: "Bihar",
                    order: 1
                },
                {
                    home: "Jharkhand",
                    away: "Madhya Pradesh",
                    order: 2
                }, {
                    home: "Odisha",
                    away: "Jharkhand",
                    order: 3
                }, {
                    home: "Bihar",
                    away: "Madhya Pradesh",
                    order: 4
                }, {
                    home: "Odisha",
                    away: "Madhya Pradesh",
                    order: 5
                }, {
                    home: "Bihar",
                    away: "Jharkhand",
                    order: 6
                }
            ]
        },


    ]

    return (
        <>



            {/* <!-- Header Section --> */}


            <header
                class="bg-surface-container-lowest flex justify-between items-center w-full px-8 py-6 sticky top-0 z-40 shadow-sm">
                <div class="space-y-1">
                    <div class="flex items-center gap-2 mb-2">
                        <span
                            class="px-2 py-0.5 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-sm">Official
                            Record</span>
                        <span class="text-on-surface-variant text-sm font-medium">Metro Youth Invitational • Summer
                            2024</span>
                    </div>
                    <h2 class="font-headline text-4xl font-black text-primary tracking-tight">Fixture Generator: <span
                        class="text-secondary">National State Championship</span></h2>
                </div>
                <div class="flex items-center gap-4">
                    <button
                        class="flex items-center gap-2 px-4 py-2 text-primary border border-primary/20 rounded-md font-bold text-sm hover:bg-surface-container-high transition-all">
                        <FileDown />
                        Export Schedule (PDF)
                    </button>

                    <button
                        class="flex items-center gap-2 px-4 py-2 text-primary border border-primary/20 rounded-md font-bold text-sm hover:bg-surface-container-high transition-all">
                        <Zap className="h-5" />

                        Auto-Generate
                    </button>

                    <button
                        class="flex items-center flex-nowrap gap-2 px-6 py-2 bg-primary text-white rounded-md font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">
                        <Lock />  Finalize & Lock Fixture
                    </button>
                </div>
            </header>
            {/* <!-- Content Area --> */}
            <div class=" py-8 flex flex-col gap-10">
                {/* <!-- Pool Structure Grid --> */}
                <section class="flex flex-col gap-6">
                    <div class="flex justify-between items-end border-l-4 border-secondary pl-4">
                        <div>
                            <h2 class="text-headline-xs font-headline font-bold text-primary">Pool Play Stages</h2>
                            <p class="text-body-md text-on-surface-variant">Round Robin Fixtures (6 Teams per Pool)</p>
                        </div>
                        <div class="flex items-center gap-2 text-label-md text-on-surface-variant">
                            <span class="material-symbols-outlined text-sm">info</span>
                            Top 2 from each pool advance to Quarterfinals
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                        {MATCHFIXTURES.map((fixtures) => {
                            const [poolName, matches] = Object.entries(fixtures)[0];


                            return (<>
                                {/* <!-- Pool A --> */}
                                <div
                                    class=" rounded-xl overflow-hidden flex flex-col   shadow-sm border border-outline-variant/10 group hover:border-primary/30 transition-colors">
                                    <div class="bg-primary p-4 flex justify-between items-center">
                                        <h3 class="text-white font-headline font-bold">{poolName}</h3>
                                        <span class="text-[10px] text-white/80 px-2 py-0.5 rounded   font-bold">{matches.length} &nbsp;
                                            MATCHES</span>
                                    </div>
                                    <div class="pool-scroll overflow-y-auto flex-1 p-3 flex flex-col gap-2">
                                        {/* <!-- Match Template --> */}

                                        {matches.map((match) => <MatchFixtureItem
                                            order={match.order}
                                            home={match.home}
                                            away={match.away}
                                        />)}






                                    </div>
                                </div>



                            </>)
                        }
                        )}
                    </div>
                </section>
                {/* <!-- Bracket Section --> */}
                <section class="flex flex-col gap-4 mt-4 mb-16">
                    <div class="border-l-4 border-secondary pl-4">
                        <h2 class="text-headline-xs font-headline font-bold text-primary">Road to Championship</h2>
                        <p class="text-body-md text-on-surface-variant">Knockout Stage Bracket Visualization</p>
                    </div>
                    {/* <!-- The Bracket System --> */}
                    <div class="relative flex justify-between items-stretch gap-0 min-h-[600px] overflow-x-auto pb-10">
                        {/* <!-- Round 1: Quarterfinals --> */}
                        <div class="flex flex-col justify-around gap-9 w-64 z-10">
                            <div
                                class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center mb-2 border-b border-outline-variant/20 pb-2">
                                Quarterfinals (Jun 20)</div>
                            {/* <!-- QF 1 --> */}
                            <div class="flex flex-col gap-1 relative group">
                                <div
                                    class="bg-surface-container-lowest p-3 rounded border border-outline-variant shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                                    <div
                                        class="flex justify-between items-center py-1 border-b border-outline-variant/10 mb-1">
                                        <span class="text-xs font-bold text-primary">Winner Pool A</span>
                                        <span class="text-[10px] font-mono text-outline italic">---</span>
                                    </div>
                                    <div class="flex justify-between items-center py-1">
                                        <span class="text-xs font-bold text-on-surface-variant">Runner-up Pool B</span>
                                        <span class="text-[10px] font-mono text-outline italic">---</span>
                                    </div>
                                    <div class="absolute -right-4 top-1/2 w-4 border-t-2 border-outline-variant"></div>
                                </div>
                                {/* <div class="text-[9px] font-bold text-primary mt-1 flex items-center gap-1"><span
                                    class="material-symbols-outlined text-[10px]">stadium</span> DIAMOND 1 • 09:00</div> */}
                            </div>
                            {/* <!-- QF 2 --> */}
                            <div class="flex flex-col gap-1 relative group">
                                <div
                                    class="bg-surface-container-lowest p-3 rounded border border-outline-variant shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                                    <div
                                        class="flex justify-between items-center py-1 border-b border-outline-variant/10 mb-1">
                                        <span class="text-xs font-bold text-primary">Winner Pool C</span>
                                        <span class="text-[10px] font-mono text-outline italic">---</span>
                                    </div>
                                    <div class="flex justify-between items-center py-1">
                                        <span class="text-xs font-bold text-on-surface-variant">Runner-up Pool D</span>
                                        <span class="text-[10px] font-mono text-outline italic">---</span>
                                    </div>
                                    <div class="absolute -right-4 top-1/2 w-4 border-t-2 border-outline-variant"></div>
                                </div>
                                {/* <div class="text-[9px] font-bold text-primary mt-1 flex items-center gap-1"><span
                                    class="material-symbols-outlined text-[10px]">stadium</span> DIAMOND 2 • 09:00</div> */}
                            </div>
                            {/* <!-- QF 3 --> */}
                            <div class="flex flex-col gap-1 relative group">
                                <div
                                    class="bg-surface-container-lowest p-3 rounded border border-outline-variant shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                                    <div
                                        class="flex justify-between items-center py-1 border-b border-outline-variant/10 mb-1">
                                        <span class="text-xs font-bold text-primary">Winner Pool B</span>
                                        <span class="text-[10px] font-mono text-outline italic">---</span>
                                    </div>
                                    <div class="flex justify-between items-center py-1">
                                        <span class="text-xs font-bold text-on-surface-variant">Runner-up Pool A</span>
                                        <span class="text-[10px] font-mono text-outline italic">---</span>
                                    </div>
                                    <div class="absolute -right-4 top-1/2 w-4 border-t-2 border-outline-variant"></div>
                                </div>
                                {/* <div class="text-[9px] font-bold text-primary mt-1 flex items-center gap-1"><span
                                    class="material-symbols-outlined text-[10px]">stadium</span> DIAMOND 1 • 13:00</div> */}
                            </div>
                            {/* <!-- QF 4 --> */}
                            <div class="flex flex-col gap-1 relative group">
                                <div
                                    class="bg-surface-container-lowest p-3 rounded border border-outline-variant shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                                    <div
                                        class="flex justify-between items-center py-1 border-b border-outline-variant/10 mb-1">
                                        <span class="text-xs font-bold text-primary">Winner Pool D</span>
                                        <span class="text-[10px] font-mono text-outline italic">---</span>
                                    </div>
                                    <div class="flex justify-between items-center py-1">
                                        <span class="text-xs font-bold text-on-surface-variant">Runner-up Pool C</span>
                                        <span class="text-[10px] font-mono text-outline italic">---</span>
                                    </div>
                                    <div class="absolute -right-4 top-1/2 w-4 border-t-2 border-outline-variant"></div>
                                </div>
                                {/* <div class="text-[9px] font-bold text-primary mt-1 flex items-center gap-1"><span
                                    class="material-symbols-outlined text-[10px]">stadium</span> DIAMOND 2 • 13:00</div> */}
                            </div>
                        </div>
                        {/* <!-- Connection Lines 1 to 2 --> */}
                        <div class="w-6 flex flex-col justify-around py-20 pointer-events-none">
                            <div class="h-1/2 border-r-2 border-outline-variant border-t-2 border-b-2 mt-20 mb-20"></div>
                            <div class="h-1/2 border-r-2 border-outline-variant border-t-2 border-b-2 mb-20 mt-20"></div>
                        </div>
                        {/* <!-- Round 2: Semifinals --> */}
                        <div class="flex flex-col justify-around w-64 z-10 px-4">
                            <div
                                class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center mb-2 border-b border-outline-variant/20 pb-2">
                                Semifinals (Jun 21)</div>
                            <div class="flex flex-col gap-1 relative">
                                <div class="absolute -left-4 top-1/2 w-4 border-t-2 border-outline-variant"></div>
                                <div
                                    class="bg-surface-container-lowest p-4 rounded border-2 border-dashed border-outline-variant opacity-60">
                                    <div class="text-xs text-on-surface-variant font-bold text-center italic">Winner QF 1 /
                                        QF 2</div>
                                </div>
                                <div class="text-[9px] font-bold text-primary mt-1 text-center">MAIN STADIUM • 10:00</div>
                                <div class="absolute -right-4 top-1/2 w-4 border-t-2 border-outline-variant"></div>
                            </div>
                            <div class="flex flex-col gap-1 relative">
                                <div class="absolute -left-4 top-1/2 w-4 border-t-2 border-outline-variant"></div>
                                <div
                                    class="bg-surface-container-lowest p-4 rounded border-2 border-dashed border-outline-variant opacity-60">
                                    <div class="text-xs text-on-surface-variant font-bold text-center italic">Winner QF 3 /
                                        QF 4</div>
                                </div>
                                <div class="text-[9px] font-bold text-primary mt-1 text-center">MAIN STADIUM • 14:00</div>
                                <div class="absolute -right-4 top-1/2 w-4 border-t-2 border-outline-variant"></div>
                            </div>
                        </div>
                        {/* <!-- Connection Lines 2 to 3 --> */}
                        <div class="w-6 flex flex-col justify-center pointer-events-none">
                            <div class="h-[140px] border-r-2 border-outline-variant border-t-2 border-b-2"></div>
                        </div>
                        {/* <!-- Final --> */}
                        <div class="flex flex-col justify-center w-80 z-10 pl-4">
                            <div
                                class="text-[10px] font-bold text-secondary uppercase tracking-widest text-center mb-4 border-b border-secondary/20 pb-2 flex items-center justify-center gap-2">
                                <Trophy />Championship Final (Jun
                                23)
                            </div>
                            <div class="relative scale-110">
                                <div class="absolute -left-4 top-1/2 w-4 border-t-2 border-outline-variant"></div>
                                <div
                                    class="bg-primary p-6 rounded-xl shadow-2xl border-4 border-secondary/20 overflow-hidden relative">
                                    {/* <!-- Background subtle athlete image --> */}
                                    <div class="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain pointer-events-none"
                                        
                                     
                                    >
                                    </div>
                                    <div class="relative z-10 flex flex-col gap-4">
                                        <div class="flex flex-col items-center">
                                            <span class="text-[10px] text-white font-bold uppercase">Grand
                                                Finalist 1</span>
                                            <div class="h-[1px] w-full bg-on-primary/10 my-1"></div>
                                            <span class="text-[10px] text-white  font-bold uppercase">Grand
                                                Finalist 2</span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}