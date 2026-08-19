import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { router, useForm } from "@inertiajs/react";
import { store } from "@/routes/rosters/rosterofficials";
import FormSelect from "@/components/ext/form-select";
export default function AddRosterOfficialDialog({
    roster,
    open, onOpenChange, selectedOfficial, resetOfficial
}) {

    const { data, setData, post } = useForm({
        'official_id': selectedOfficial.id,
        'type': '',

    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(store({ roster: roster }).url,

            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    }
    // 
    return (
        <Dialog open={open} onOpenChange={onOpenChange} >


            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle> Add Official</DialogTitle>
                    <DialogDescription>
                        Add an official to the roster

                    </DialogDescription>
                </DialogHeader>

               
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6">
                    <FormSelect
                        label="Official Type"
                        labelRequired={true}
                        placeHolder="e.g., Coach"
                        items={[{
                            'label': 'Manager',
                            'value': 'manager'
                        },
                        {
                            'label': 'Coach',
                            'value': 'coach'
                        },
                        ]}
                        onValueChange={(e) => setData("type", e)} value={data.type}
                    />


                    {/* <FormSelect
                            items={states}
                            label="Select State"
                            labelRequired={true}
                            onValueChange={(e) => setData('state_id', e)}
                            value={data.state_id}
                        /> */}




                    <DialogFooter>

                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}