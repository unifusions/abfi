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

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import venue from "@/routes/venue"
import { useForm, useHttp } from "@inertiajs/react"
import { useEffect, useState } from "react"
import { toast } from "sonner"


export default function AddVenueDialog({ open, onOpenChange, triggerText, states, setVenueId }) {

    const { data, setData, post, processing, errors } = useHttp({
        'name': '',
        'state_id': ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        post(venue.store().url, {
            onSuccess: (response) => {
                // setVenueId(response)
                // console.log(response)
                response.data && setVenueId(response.data)
               
                onOpenChange(false);
                 response.toasts?.forEach((item) => {
                    toast[item.type](item.message);
                });
            }
        })
    }

    useEffect(() => {
        if (open) {
            setData("name", triggerText ?? "");
        }
    }, [open, triggerText]);
    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>


                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle> Venue {triggerText}</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.

                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit}>
                        <Label htmlFor="name-1">Name</Label>
                        <Input onChange={(e) => setData("name", e.target.value)} value={data.name} />

                        <Label htmlFor="name-1">Select State</Label>
                        <Select onValueChange={(e) => setData('state_id', e)} value={data.state_id}>
                            <SelectTrigger className="w-full">
                                <SelectValue />

                            </SelectTrigger>
                            <SelectContent position="popper">
                                <SelectGroup>
                                    <SelectLabel>Select State</SelectLabel>
                                    {states.map((s) => (
                                        <SelectItem key={s.id} value={String(s.id)}>
                                            {s.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>



                        <DialogFooter>

                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>

            </Dialog>
        </>
    )
}



