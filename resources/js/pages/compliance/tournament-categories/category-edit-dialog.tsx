import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function CategoryEditDialog(
    {
        category, open, setOpen
    }
){
return (
    <Dialog open={open} onOpenChange={setOpen}>
<DialogContent>
    dss
</DialogContent>
    </Dialog>
)
}