import FormCard from "@/components/ext/form-card";
import FormInput from "@/components/ext/form-input";
import PageHeader from "@/components/ext/page-header";
import { useForm } from "@inertiajs/react";
import OrganizationForm from "./org-form";
import { Button } from "@/components/ui/button";
import { Save, XCircle } from "lucide-react";
import { store } from "@/routes/compliance/organizations";

export default function OrganizationCreate({ states }) {

    const { data, setData,post,  processing, errors } = useForm({
        'name': '',
        'contact_person': '',
        'code': '',
        'phone': '',
        'email': '',
        'organization_id': null,
        'state_id': ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(store().url)
    }
    return (
        <div className="flex  flex-col p-4">
            <PageHeader title="Create Association">
            </PageHeader>
            <form className="flex flex-col space-y-9" onSubmit={handleSubmit}>
                <OrganizationForm
                    data={data}
                    setData={setData}
                    errors={errors}

                    states={states}
                />

                <div className="md:col-span-12 flex items-center justify-end gap-4 py-8 border-t border-outline-variant/10">


                    <div className="flex gap-3">
                        <Button size="xl" variant="destructive"
                            className="     hover:bg-red-200 transition-colors  " onClick={() => router.bac}>
                            <XCircle className="text-destructive" />   Cancel</Button>
                        <Button
                            size="xl"
                            className="" type="submit">
                            <Save className="h-8 w-8 mr-2" /> <span>Save Association</span>
                        </Button>
                    </div>
                </div>
            </form>


        </div>
    )
}