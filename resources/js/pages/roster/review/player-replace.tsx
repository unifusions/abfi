import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Shuffle } from "lucide-react";
import { useState } from "react";

export default function PlayerReplace() {
    const [open, setOpen] = useState(false);
    return (

        <>
            <Button size="xl" onClick={() => setOpen(true)}>
                <Shuffle className="mr-2 h-5 w-5" />
                Replace Player/Official
            </Button>

           
        </>
    )
}
      

 