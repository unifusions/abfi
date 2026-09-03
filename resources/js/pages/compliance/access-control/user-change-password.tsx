import DialogFormButton from "@/components/ext/dialog-form-button";
import FormInput from "@/components/ext/form-input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { changePassword } from "@/routes/compliance/users";
import { Form } from "@inertiajs/react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Key } from "lucide-react";
import { useState } from "react";

export default function UserChangePassword({ user }) {

    const [open, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}   >
                <Key className="mr-2 h-4 w-4" /> Reset Password
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>

                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Change Password</DialogTitle>
                        <DialogDescription>
                            Change Password for {user?.name} here.

                        </DialogDescription>
                    </DialogHeader>

                    <Form {...changePassword.form({ user: user?.id })} method="patch" className="space-y-4">
                        {({ processing, errors }) => (
                            <>
                                <div className="space-y-2 ">

                                    <FormInput
                                        type="password"
                                        name="password"
                                        id="password"
                                        // autoComplete="new-password"
                                        labelRequired
                                        // label="New Password"
                                        className="w-full border-1 border-zinc-300"
                                    />
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                </div>

                                <div className="flex justify-end space-x-1">

                                    <DialogFormButton type="button" variant="destructive" onClick={() => setOpen(false)}>
                                        Cancel
                                    </DialogFormButton>
                                    <DialogFormButton type="submit" processing={processing} >
                                        Change Password
                                    </DialogFormButton>


                                </div>

                            </>
                        )}

                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}