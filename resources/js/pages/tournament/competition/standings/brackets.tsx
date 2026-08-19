import { cn } from "@/lib/utils";
import FinalSkeleton from "./skeleton/final-skeleton";
import QuarterFinalSkeleton from "./skeleton/quarter-final-skeleton";
import SemifinalSkeleton from "./skeleton/semi-final-skeleton";

export default function Brackets({ quarter_finals, semi_finals, finals }) {
    return (

        <section className="mb-24">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-1.5 h-8 bg-secondary rounded-full"></div>
                <h3 className="font-headline text-2xl font-black text-primary uppercase tracking-tight">The Road to the
                    Championship</h3>
                <span
                    className="px-2 py-1 bg-primary text-white rounded text-[10px] font-bold uppercase ml-2 tracking-widest shadow-sm">Final
                    Bracket</span>
            </div>
            <div
                className="flex flex-col lg:flex-row items-stretch justify-between gap-0 relative overflow-x-auto pb-8 no-scrollbar">

                <div className="flex-1 flex flex-col justify-around gap-8 min-w-[300px] px-4">
                    <h4
                        className="text-center font-black text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">
                        Quarterfinals</h4>

                    {quarter_finals ? quarter_finals.map((qf, index) => {

                        const isScheduled = qf.status === 'scheduled';
                        const homeWinner = qf.home_roster_id === qf.winner_roster_id && !isScheduled
                        const awayWinner = qf.away_roster_id === qf.winner_roster_id && !isScheduled
                        return (<div>
                            <span className="text-[9px] font-bold text-secondary uppercase">Quarter Final  {qf.match_number}</span>
                            <div className=" border-l-4 border-primary  space-y-1 shadow-sm ">

                                <div
                                    className={cn("p-3 ", {
                                        "border-b": isScheduled,
                                        'bg-zinc-100 text-zinc-400': awayWinner

                                    })}>
                                    <div className="flex justify-between items-center mb-1">
                                        <span
                                            className="text-[9px] font-black text-on-surface-variant uppercase tracking-tighter">
                                            {qf?.home_roster?.organization?.name}
                                        </span>

                                    </div>

                                    <p className="text-sm font-bold capitalize">{qf?.home_roster?.name}</p>
                                </div>
                                <div
                                    className={cn("   p-3 ", { 'bg-zinc-100 text-zinc-400': homeWinner })}>
                                    <div className="flex justify-between items-center mb-1 ">
                                        <span
                                            className="text-[9px] font-black  uppercase tracking-tighter">
                                            {qf?.away_roster?.organization?.name}
                                        </span>
                                    </div>

                                    <p className="text-sm font-bold capitalize">{qf?.away_roster?.name}</p>
                                </div>
                            </div>
                        </div>)
                    }

                    )
                        : <QuarterFinalSkeleton />}







                </div>
                <div
                    className="flex-1 flex flex-col justify-around   min-w-[300px] px-8 border-l border-outline-variant/30">
                    <h4
                        class="text-center font-black text-[10px] uppercase tracking-widest  mb-4">
                        Semifinals</h4>
                    {

                        semi_finals ? semi_finals.map((sf, index) => {
                            let i = 1 + index;
                            const qfHomeIndex = index * 2 + 1;
                            const qfAwayIndex = index * 2 + 2;
                            const isScheduled = sf.status === 'scheduled';
                            const isHomeWinner = sf.home_roster.id === sf.winner_roster_id && !isScheduled;
                            const isAwayWinner = sf.away_roster.id === sf.winner_roster_id && !isScheduled;
                            return (
                                <div className="space-y-1">
                                    <div className="text-center mt-2">
                                        <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">Semi-final {index + 1} Matchup</span>
                                    </div>

                                    <div
                                        className={cn("bg-primary/5 border border-primary/20 p-4 rounded-lg border-dashed flex flex-col items-center justify-center py-6",
                                            {
                                                "bg-zinc-100 border-zinc-200": isAwayWinner,
                                                "bg-emerald-50 border-emerald-500": isHomeWinner
                                            }
                                        )}>
                                        <span
                                            className="text-[8px] font-black text-primary/60 uppercase tracking-widest mb-1">Winner
                                            QF {qfHomeIndex}</span>
                                        <p class="text-xs font-black text-primary uppercase">{sf.home_roster?.name}</p>
                                    </div>

                                    <div
                                        className={cn("bg-primary/5 border border-primary/20 p-4 rounded-lg border-dashed flex flex-col items-center justify-center py-6",
                                            { "bg-zinc-100 border-zinc-200": isHomeWinner }
                                        )}>
                                        <span
                                            className="text-[8px] font-black text-primary/60 uppercase tracking-widest mb-1">Winner
                                            QF {qfAwayIndex}</span>
                                        <p className="text-xs font-black text-primary uppercase">{sf.away_roster?.name}</p>
                                    </div>


                                </div>)
                        }
                        ) : <SemifinalSkeleton />
                    }

                </div>

                <div
                    className="flex-1 flex flex-col justify-center min-w-[350px] px-8 border-l border-outline-variant/30 relative">
                    <h4
                        className="text-center font-black text-[10px] uppercase tracking-widest text-on-surface-variant mb-8">
                        Championship Final</h4>

                    {
                        finals ? finals.map((final) =>  
                           {
                            
                            const isScheduled = final.status === "scheduled";
                             const isHomeWinner = final.home_roster.id === final.winner_roster_id && !isScheduled;
                            const isAwayWinner = final.away_roster.id === final.winner_roster_id && !isScheduled;
                            return ( <div className="relative bg-primary p-8 shadow-2xl overflow-hidden group">
                                <div className="relative z-10 space-y-6">
                                    <div className="flex flex-col items-center gap-2">
                                        <span
                                            className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">Winner
                                            SF 1</span>
                                        <div
                                            className="w-full h-12 bg-white/10 border border-white/20 flex items-center justify-center border-dashed">
                                            <p className={cn("text-sm font-black text-white uppercase", {
                                                "text-white/30" : isAwayWinner
                                            })}>{final.home_roster?.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="h-px flex-1 bg-primary/20"></div>
                                        <span className="text-2xl font-black text-secondary drop-shadow-lg italic">VS</span>
                                        <div className="h-px flex-1 bg-primary/20"></div>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <span
                                            className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">Winner
                                            SF 2</span>
                                        <div
                                            className="w-full h-12 bg-white/10  border border-white/20 flex items-center justify-center border-dashed">
                                            <p className={cn("text-sm font-black text-white uppercase ",
                                                {"text-white/30 text-3xl" : isHomeWinner}
                                            )}>{final.away_roster?.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> )} ) : <FinalSkeleton />
                    }
                </div>
            </div>
        </section>

    )
}