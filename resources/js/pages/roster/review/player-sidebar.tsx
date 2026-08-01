import { cn } from "@/lib/utils";
import { Info, LockOpenIcon, Plus } from "lucide-react";

export default function PlayerSidebar({ players, onSelect, selectedPlayer }) {
    return (

        <div class="w-80 border-r border-outline-variant/15 flex flex-col max-h-screen bg-surface-container-low/30 ">


            <div class="flex-1 overflow-y-auto">

                {players?.length > 0 && players?.map((player) => {
                    const selected = player?.id === selectedPlayer?.id;
                    return (

                        <>
                            <div class={cn("p-4  transition-colors cursor-pointer",
                                { "border-l-4 border-secondary  ": selected }
                            )} 
                            onClick={()=>onSelect(player)}
                            >
                                <div class="flex justify-between items-start mb-1">
                                    <span class="font-display font-bold uppercase  ">{player?.name}</span>
                                    <Info className="text-orange-300" />
                                </div>
                                <p class="text-xs text-zinc-600 font-medium">AGE: {player?.age} | {player?.position_names}</p>
                                <p class="text-[10px] text-accent-secondary  mt-2 font-bold tracking-widest uppercase">Photo Pending Review</p>
                            </div>

                        </>

                    )
                }

                )}

            </div>

        </div>

    )
}