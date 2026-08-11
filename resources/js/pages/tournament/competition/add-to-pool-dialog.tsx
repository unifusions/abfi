import { stateColors } from "@/lib/stateColors";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Plus } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useForm, usePage } from "@inertiajs/react";
 import { useState } from "react";
import { addRoster } from "@/routes/tournaments/competition/pools";

export default function AddToPoolDialog({ pools, roster }) {

    const {data, post, processing, errors } = useForm({});
    const [targetPool, setTargetPool] = useState();
    const {tournament, competition} = usePage().props;
    const [open, setOpen] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
       
        post(addRoster(
            {
                tournament : tournament?.id , 
                competition : competition?.id , 
            tournamentPool : targetPool?.id , roster : roster.id}).url, {
            preserveScroll: true,
            onSuccess: () =>  setOpen(false)
             
        })
    }
    return (
<>

  <Button variant="outline" onClick={() => setOpen(true)}><Plus /></Button>

        <Dialog open={open} onOpenChange={setOpen} >
           
         
                
                   
              
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Add To Pool</DialogTitle>

                    </DialogHeader>
                    {JSON.stringify(errors)}
                    <form onSubmit={handleSubmit}  className="space-y-6">
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
                        <div className="w-full ">
                            <ToggleGroup type="single" className="w-fit gap-3" onValueChange={(val) => setTargetPool(val)}>
                                {pools.map((pool) =>
                                    <ToggleGroupItem value={pool}
                                        className="px-3 py-6 outline-dashed outline-1 cursor-pointer data-[state=on]:bg-accent/40  data-[state=on]:outline-0 transition-all ">{pool.name}</ToggleGroupItem>
                                )}


                            </ToggleGroup>
                        </div>
                        <Button type="submit" className="w-full font-bold" size="lg">
                            Confirm
                        </Button>
                    </form>
                </DialogContent>
           
        </Dialog>

</>


    )
}
