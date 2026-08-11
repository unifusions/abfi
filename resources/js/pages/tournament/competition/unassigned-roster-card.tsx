import { Button } from "@/components/ui/button";
import { stateColors } from "@/lib/stateColors";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import AddToPoolDialog from "./add-to-pool-dialog";

export default function UnassignedRosterCard({ pools, roster, onClick }) {
    return (
        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
                <div
                    className={cn("w-6 h-6 p-5  text-sm rounded-sm overflow-hidden flex items-center font-bold",
                        "justify-center", stateColors[roster?.organization?.state?.short_code])}>
                    {roster?.organization?.state?.short_code}
                </div>

                <div className="flex flex-col">
                    <span className="font-bold font-display uppercase tracking-wider" >{roster?.name}</span>
                    <span className="font-medium text-xs text-zinc-500">{roster?.organization?.name}</span>
                </div>


            </div>
 
   <AddToPoolDialog roster={roster} pools={pools}/>
 
        </div>
    )
}