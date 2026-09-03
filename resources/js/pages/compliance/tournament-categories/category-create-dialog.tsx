import DialogFormButton from "@/components/ext/dialog-form-button";
import FormInput from "@/components/ext/form-input";
import FormLabel from "@/components/ext/form-label";
import FormMinMaxInput from "@/components/ext/form-min-max-input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { store } from "@/routes/compliance/categories";

import { Form } from "@inertiajs/react";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function CategoryCreateDialog() {

    const [open, setOpen] = useState(false);
    return (
        <>

            <Button size="xl" onClick={() => setOpen(true)}>
                <Plus className="w-5 h-5" />  Add New Category</Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle> Create Tournament Category</DialogTitle>
                        <DialogDescription>
                            Create a new tournament category here.
                        </DialogDescription>
                    </DialogHeader>

                    <Form {...store.form()} method="post" className="space-y-4" options={{
                        onSuccess: () => {
                            setOpen(false);

                        }
                    }} resetOnSuccess>
                        {({ processing, errors }) => (
                            <>
                                <div className="space-y-2 ">
                                    <FormInput
                                        type="text"
                                        name="name"
                                        id="name"
                                        labelRequired
                                        label="Category Name"
                                        className="w-full border-1 border-zinc-300"
                                        hasError={errors.name}
                                    />

                                </div>

                                <div className=" grid grid-cols-2 gap-3">

                                    <FormInput
                                        type="text"
                                        name="code"
                                        id="code"
                                        labelRequired
                                        label="Short Code"
                                        className="w-full border-1 border-zinc-300"
                                        hasError={errors.code}
                                    />



                                    <div className=" flex flex-col gap-1.5    w-full">

                                        <label

                                            className="text-xs font-label uppercase font-bold tracking-widest text-primary col-span-2 "  >
                                            Age Criteria <span className="text-destructive">*</span></label>

                                        <div className="w-full flex gap-2 justify-between items-center">
                                            <FormInput
                                                type="number"
                                                name="minimum_age"
                                                className="w-full border-1 border-zinc-300"
                                            />
                                            <FormInput
                                                type="number"
                                                name="maximum_age"
                                                className="w-full border-1 border-zinc-300"
                                            />
                                        </div>


                                    </div>




                                </div>
                                <div className="grid grid-cols-3 gap-3">


                                    <FormInput
                                        type="number"
                                        name="minimum_players"
                                        labelRequired
                                        label="Min. Players"
                                        className="w-full border-1 border-zinc-300"
                                    />
                                    <FormInput
                                        type="number"
                                        name="maximum_players"
                                        labelRequired
                                        label="Max. Players"
                                        className="w-full border-1 border-zinc-300"
                                    />

                                    <FormInput
                                        type="number"
                                        name="maximum_officials"
                                        labelRequired
                                        label="Max. Officials"
                                        className="w-full border-1 border-zinc-300"
                                    />
                                </div>
                                <div className="flex justify-end space-x-1">
                                    <DialogFormButton type="button" variant="destructive" onClick={() => setOpen(false)}>Cancel </DialogFormButton>
                                    <DialogFormButton type="submit" processing={processing} >Create Category</DialogFormButton>
                                </div>




                            </>)}
                    </Form>
                </DialogContent>
            </Dialog>

        </>

    )
}