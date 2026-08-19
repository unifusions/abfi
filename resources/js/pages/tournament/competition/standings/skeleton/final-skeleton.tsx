export default function FinalSkeleton() {
    return (
        <>
             
                <div className="relative bg-primary p-8 shadow-2xl overflow-hidden group">
                    <div className="relative z-10 space-y-6">
                        <div className="flex flex-col items-center gap-2">
                            <span
                                className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">Winner
                                SF 1</span>
                            <div
                                className="w-full h-12 bg-white/10 border border-white/20 flex items-center justify-center border-dashed">
                                <p className="text-sm font-black text-white/40 uppercase">Finalist #1</p>
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
                                <p className="text-sm font-black text-white/40 uppercase">Finalist #2</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}