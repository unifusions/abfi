import { stateColors } from "@/lib/stateColors";
import { cn } from "@/lib/utils";
import { Grip, GripVertical, Move } from "lucide-react";

export default function CompetitionPool({ pool, teams }) {
    return (
        <div
            class="pool-card bg-surface-container-lowest rounded-xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] border-t-4 border-primary p-5 group">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h4 class="font-headline font-black text-primary text-xl">{pool}</h4>
                    <span class="text-xs font-label uppercase tracking-widest text-secondary font-bold">{teams.length} Rosters Assigned</span>
                </div>
                <button
                    class="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container rounded-full">
                    <GripVertical />
                    <span class="material-symbols-outlined text-on-surface-variant"></span>
                </button>
            </div>


            <div className="space-y-2">


                {teams.map((team) => <div
                    className={cn("  flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-primary-fixed ",

                    )}>
                    <div className="flex items-center gap-3">
                        <div
                            className={cn("w-6 h-6 p-4 text-xs font-bold rounded-sm overflow-hidden flex items-center justify-center",
                                stateColors[team?.organization?.state?.short_code]
                            )}>
                            {team?.organization?.state?.short_code}
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold">{team?.name}</span>
                            <span className="text-xs font-medium text-zinc-500">{team?.organization?.name}</span>
                        </div>
                    </div>

                    <Move className="h-3 text-secondary/40 cursor-pointer" />
                </div>

                )}



                {/* <button
                    className="w-full py-2 border-2 border-dashed border-outline-variant rounded-lg text-label-sm text-on-surface-variant/60 hover:border-secondary hover:text-secondary transition-all">
                    + Add Team
                </button> */}
            </div>
        </div>
    )
}