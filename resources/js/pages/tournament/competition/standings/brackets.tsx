import QuarterFinalSkeleton from "./skeleton/quarter-final-skeleton";
import SemifinalSkeleton from "./skeleton/semi-final-skeleton";

export default function Brackets({ quarter_finals, semi_finals }) {
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

                <div className="flex-1 flex flex-col justify-around gap-12 min-w-[300px]">
                    <h4
                        className="text-center font-black text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">
                        Quarterfinals</h4>

                    {quarter_finals ? quarter_finals.map((qf, index) =>
                        <div className="bracket-connector space-y-1">
                            <div
                                className="bg-surface-container-highest border-l-4 border-primary p-3 rounded-r shadow-sm">
                                <div className="flex justify-between items-center mb-1">
                                    <span
                                        className="text-[9px] font-black text-on-surface-variant uppercase tracking-tighter">
                                        {qf?.home_roster?.organization?.name}
                                    </span>
                                    <span className="text-[9px] font-bold text-secondary">QF {qf.match_number}</span>
                                </div>

                                <p className="text-sm font-bold text-primary">{qf?.home_roster?.name}</p>
                            </div>
                            <div
                                className="bg-surface-container-low border-l-4 border-secondary p-3 rounded-r opacity-80">
                                <div className="flex justify-between items-center mb-1">
                                    <span
                                        className="text-[9px] font-black text-on-surface-variant uppercase tracking-tighter">
                                        {qf?.away_roster?.organization?.name}
                                    </span>
                                </div>

                                <p className="text-sm font-bold text-on-surface">{qf?.away_roster?.name}</p>
                            </div>
                        </div>

                    )
                        : <QuarterFinalSkeleton />}







                </div>
                <div
                    className="flex-1 flex flex-col justify-around gap-24 min-w-[300px] px-8 border-l border-outline-variant/30">

                    {

                        semi_finals ? semi_finals.map((sf, index) => {
                            let i = 1 + index; 
                            const qfHomeIndex = index * 2 + 1;
                            const qfAwayIndex = index * 2 + 2;
                            return (<div className="space-y-1">
                                <div
                                    className="bg-primary/5 border border-primary/20 p-4 rounded-lg border-dashed flex flex-col items-center justify-center py-6">
                                    <span
                                        className="text-[8px] font-black text-primary/60 uppercase tracking-widest mb-1">Winner
                                        QF {qfHomeIndex}</span>
                                    <p class="text-xs font-black text-primary uppercase">{sf.home_roster?.name}</p>
                                </div>
                                <div
                                    className="bg-primary/5 border border-primary/20 p-4 rounded-lg border-dashed flex flex-col items-center justify-center py-6">
                                    <span
                                        className="text-[8px] font-black text-primary/60 uppercase tracking-widest mb-1">Winner
                                        QF {qfAwayIndex}</span>
                                    <p className="text-xs font-black text-primary uppercase">{sf.away_roster?.name}</p>
                                </div>
                                <div className="text-center mt-2">
                                    <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">Semi-final {index + 1} Matchup</span>
                                </div>
                            </div>)
                        }
                        ) : <SemifinalSkeleton />
                    }

                </div>
                <div
                    class="flex-1 flex flex-col justify-center min-w-[350px] px-8 border-l border-outline-variant/30 relative">
                    <h4
                        class="text-center font-black text-[10px] uppercase tracking-widest text-on-surface-variant mb-8">
                        Championship Final</h4>
                    <div class="relative bg-primary p-8 rounded-2xl shadow-2xl overflow-hidden group">
                        <div
                            class="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                            <span class="material-symbols-outlined text-[100px]"
                                data-icon="trophy">emoji_events</span>
                        </div>
                        <div class="relative z-10 space-y-6">
                            <div class="flex flex-col items-center gap-2">
                                <span
                                    class="text-[10px] font-black text-on-primary/60 uppercase tracking-[0.3em]">Winner
                                    SF 1</span>
                                <div
                                    class="w-full h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center border-dashed">
                                    <p class="text-sm font-black text-on-primary/40 uppercase">Finalist #1</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-center gap-4">
                                <div class="h-px flex-1 bg-on-primary/20"></div>
                                <span class="text-2xl font-black text-secondary drop-shadow-lg italic">VS</span>
                                <div class="h-px flex-1 bg-on-primary/20"></div>
                            </div>
                            <div class="flex flex-col items-center gap-2">
                                <span
                                    class="text-[10px] font-black text-on-primary/60 uppercase tracking-[0.3em]">Winner
                                    SF 2</span>
                                <div
                                    class="w-full h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center border-dashed">
                                    <p class="text-sm font-black text-on-primary/40 uppercase">Finalist #2</p>
                                </div>
                            </div>
                            <div class="pt-4 border-t border-white/10 text-center">
                                <p
                                    class="text-[10px] font-bold text-secondary-fixed uppercase tracking-widest mb-1">
                                    August 15, 2024 • 07:00 PM</p>
                                <p class="text-xs font-medium text-on-primary/80">Diamond Stadium, Main Field</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}