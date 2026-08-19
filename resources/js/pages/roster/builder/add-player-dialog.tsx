import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import rosterplayers from "@/routes/rosters/rosterplayers";
import { useForm } from "@inertiajs/react";

export default function AddPlayerDialog(
    { roster, player, open, setOpen, resetAll }


) {
    const { data, post, processing } = useForm({
        'player_id': player?.id,
        'jersey_number': '',
        'is_captain': false,
        'is_vice_captain': false,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(
            rosterplayers.store({ roster: roster }).url,

            {
                preserveScroll: true,
                preserveState: true,
                onFinish: () => resetAll
            }
        );
    }
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>

                <DialogContent className="sm:max-w-sm">
                    <DialogHeader className="border-b pb-3">
                        <DialogTitle>Add Player to Roster</DialogTitle>

                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="">
                        <FieldGroup>
                            <Field>
                                <Label htmlFor="name-1">Name</Label>
                                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                            </Field>
                            <Field>
                                <Label htmlFor="username-1">Username</Label>
                                <Input id="username-1" name="username" defaultValue="@peduarte" />
                            </Field>
                        </FieldGroup>
                        <Button type="submit">Save changes</Button>
                    </form>




                </DialogContent>

            </Dialog>
        </>
    )
}