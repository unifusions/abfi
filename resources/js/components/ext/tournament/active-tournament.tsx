import { Button } from "@/components/ui/button";
import { show } from "@/routes/tournaments";
import { Link } from "@inertiajs/react";
import { ArrowRight, Calendar, Contact, Flag, FlagTriangleRight, LayoutDashboard, MapPin } from "lucide-react";

type Props = {
    tournament:
    {
        id: string,

        name: string
        starts_at: string
        ends_at: string
        organization: string
        venue: string
    }

}
export default function ActiveTournament({ tournament }: Props) {

    const { competitions } = tournament;
    const names = competitions?.map((c) => c?.name)
    const totalPools = competitions?.reduce((accumulator, c) => {
        return accumulator + c?.pool_count
    }, 0)

    const players = competitions?.reduce((accumulator, c) => {
        return accumulator + c?.players_count
    }, 0)

    const officials = competitions?.reduce((accumulator, c) => {
        return accumulator + c?.officials_count
    }, 0)


    return (


        <Link
            href={show(tournament?.id)} className="space-y-8  ">
            {/* <pre>
                {JSON.stringify(competitions, null, 2)}

            </pre> */}
            <div
                className="bg-surface-container-lowest  shadow-sm border border-outline-variant/20 overflow-hidden">
                <div
                    className="bg-primary text-on-primary px-8 py-5 flex flex-wrap items-center justify-between gap-4 border-b border-primary-container">
                    <div className="flex items-center gap-3">
                        <span
                            className="px-3 py-1 bg-secondary text-on-secondary rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                            Active Tournament
                        </span>
                        <span className="text-xs text-on-primary-container font-medium">Calendar Window:   {tournament?.starts_at} - {tournament?.ends_at}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="text-on-primary/70" />

                        <span className="text-xs text-on-primary font-semibold">  {tournament?.venue}</span>
                    </div>
                </div>
                <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                            <div>
                                <div
                                    className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase mb-1">
                                    <span>Official Championship</span>
                                    {/* <span>•</span> */}
                                    {/* <span>Season 2024/25</span> */}
                                </div>
                                <h2 className="font-headline text-3xl font-black text-primary tracking-tight">
                                    {tournament?.name}
                                </h2>
                                {/* <p className="text-on-surface-variant text-sm mt-1 max-w-2xl">Sanctioned tier-1 national
                                    competition under Federation Charter. Currently conducting Round-Robin Group Stages
                                    across 4 regional pools.</p> */}
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                                <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/10">
                                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">Pools &amp;
                                        Groups</p>
                                    <p className="text-xl font-black text-primary mt-0.5">
                                        {totalPools} Pools </p>
                                    <p className="text-[10px] text-on-surface-variant">{names?.join(' & ')}</p>
                                </div>
                                <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/10">
                                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">Rosters Verified
                                    </p>
                                    <p className="text-xl font-black text-primary mt-0.5">{players} Athletes</p>
                                    <p className="text-[10px] text-primary font-semibold"></p>
                                </div>

                                <div className="p-3 bg-surface-container-low rounded-lg border border-outline-variant/10">
                                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">Roster
                                        Officials</p>
                                    <p className="text-xl font-black text-primary mt-0.5">{officials} Registered</p>
                                    <p className="text-[10px] text-on-surface-variant">Managers & Coaches</p>
                                </div>

                            </div>
                            
                            {/* <div className="flex flex-wrap items-center gap-3 pt-2">
                               
                                <button
                                    className="bg-surface-container-high hover:bg-surface-variant text-primary px-4 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 transition-colors">
                                    <span className="material-symbols-outlined text-base">table_chart</span>
                                    Pool Standings &amp; Fixtures
                                </button>
                                <button
                                    className="bg-surface-container-high hover:bg-surface-variant text-primary px-4 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 transition-colors">
                                    <span className="material-symbols-outlined text-base">verified_user</span>
                                    State Rosters &amp; IDs
                                </button>
                                <button
                                    className="bg-surface-container-high hover:bg-surface-variant text-primary px-4 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 transition-colors">
                                    <span className="material-symbols-outlined text-base">scoreboard</span>
                                    Live Score Entry
                                </button>
                            </div> */}
                        </div>
                        <div
                            className="lg:col-span-4  ">
                          
                          <div>
                                <Button
                                size="xl"
                                    // className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-primary-container shadow-sm transition-all">
                                        >
                                        <LayoutDashboard />
                               
                                   Go to Championship Control Center <ArrowRight />
                                </Button>
                                </div>
                          
                            {/* <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">Active In-Play
                                    Summary</span>
                                <span className="material-symbols-outlined text-secondary text-sm">sports_baseball</span>
                            </div>
                            <div className="space-y-3">
                                <div
                                    className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 shadow-sm">
                                    <div className="flex justify-between items-center text-xs mb-1">
                                        <span className="font-bold text-primary">Pool B: Maharashtra vs Delhi</span>
                                        <span
                                            className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded">Inning
                                            7</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant font-medium">Diamond 1 • Live Score: 6 - 4
                                    </p>
                                </div>
                                <div
                                    className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/10 shadow-sm">
                                    <div className="flex justify-between items-center text-xs mb-1">
                                        <span className="font-bold text-primary">Pool A: Punjab vs Kerala</span>
                                        <span
                                            className="text-[10px] font-bold text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">15:30
                                            IST</span>
                                    </div>
                                    <p className="text-xs text-on-surface-variant font-medium">Diamond 2 • Scheduled Today
                                    </p>
                                </div>
                            </div>
                            <div
                                className="pt-2 border-t border-outline-variant/20 flex justify-between items-center text-xs">
                                <span className="text-on-surface-variant font-medium">Disciplinary Cases</span>
                                <span className="font-bold text-primary">0 Inquiries</span>
                            </div>*/}
                        </div> 
                    </div>
{/* 
                    <div className="mt-8 pt-6 border-t border-outline-variant/20">
                        <div className="flex items-center justify-between mb-4">
                            <h3
                                className="text-xs font-black tracking-wider uppercase text-primary font-label flex items-center gap-2">
                                
                                <FlagTriangleRight className="text-secondary" />

                                Active Tournament Lifecycle Phase
                            </h3>
                            <span className="text-xs text-on-surface-variant font-medium">Phase 5 of 6 (Live Tournament
                                Execution)</span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                            <div
                                className="p-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg flex flex-col justify-between opacity-80">
                                <div
                                    className="flex items-center justify-between text-[10px] font-bold text-on-surface-variant mb-1">
                                    <span>STEP 1</span>
                                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                                </div>
                                <p className="text-xs font-bold text-primary">Sanctioning &amp; Charter</p>
                                <p className="text-[10px] text-on-surface-variant mt-1">Completed Aug 15</p>
                            </div>
                            <div
                                className="p-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg flex flex-col justify-between opacity-80">
                                <div
                                    className="flex items-center justify-between text-[10px] font-bold text-on-surface-variant mb-1">
                                    <span>STEP 2</span>
                                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                                </div>
                                <p className="text-xs font-bold text-primary">State Registration</p>
                                <p className="text-[10px] text-on-surface-variant mt-1">Closed Sep 30</p>
                            </div>
                            <div
                                className="p-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg flex flex-col justify-between opacity-80">
                                <div
                                    className="flex items-center justify-between text-[10px] font-bold text-on-surface-variant mb-1">
                                    <span>STEP 3</span>
                                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                                </div>
                                <p className="text-xs font-bold text-primary">Roster Verification</p>
                                <p className="text-[10px] text-on-surface-variant mt-1">28 States Cleared</p>
                            </div>
                            <div
                                className="p-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg flex flex-col justify-between opacity-80">
                                <div
                                    className="flex items-center justify-between text-[10px] font-bold text-on-surface-variant mb-1">
                                    <span>STEP 4</span>
                                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                                </div>
                                <p className="text-xs font-bold text-primary">Pool Draw &amp; Fixtures</p>
                                <p className="text-[10px] text-on-surface-variant mt-1">Finalized Oct 20</p>
                            </div>
                            <div
                                className="p-3 bg-secondary-fixed text-on-secondary-fixed-variant border-2 border-secondary rounded-lg flex flex-col justify-between shadow-sm relative">
                                <div
                                    className="flex items-center justify-between text-[10px] font-black text-secondary mb-1">
                                    <span>CURRENT STEP 5</span>
                                    <span className="material-symbols-outlined text-sm text-secondary">play_circle</span>
                                </div>
                                <p className="text-xs font-black text-primary">Tournament In-Play</p>
                                <p className="text-[10px] font-bold text-secondary mt-1">Pool Stage In-Progress</p>
                            </div>
                            <div
                                className="p-3 bg-surface-container-low border border-dashed border-outline-variant/40 rounded-lg flex flex-col justify-between text-on-surface-variant">
                                <div
                                    className="flex items-center justify-between text-[10px] font-bold text-on-surface-variant mb-1">
                                    <span>STEP 6</span>
                                    <span className="material-symbols-outlined text-sm text-outline">hourglass_empty</span>
                                </div>
                                <p className="text-xs font-bold text-on-surface-variant">Results &amp; Certificates</p>
                                <p className="text-[10px] text-on-surface-variant mt-1">Post Nov 05 Closing</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>



        </Link>


    )
}