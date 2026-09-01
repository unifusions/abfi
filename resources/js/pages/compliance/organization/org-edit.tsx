import PageHeader from "@/components/ext/page-header";
import organizations, { edit, index, update } from "@/routes/compliance/organizations";
import { Link, router, useForm } from "@inertiajs/react";
import OrganizationForm from "./org-form";
import { Button } from "@/components/ui/button";
import { Save, XCircle } from "lucide-react";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { complianceBreadcrumbs } from "../compliance-index";

export default function OrganizationEdit({ organization, states }) {


    const { data, setData, put, processing, errors } = useForm({
        'name': organization?.name,
        'contact_person': organization?.contact_person,
        'code': '',
        'phone': organization?.phone ?? '',
        'email': organization?.email ?? '',
        'organization_id': organization?.organization_id ?? '',
        'state_id': organization?.state_id,
        'address_line_1': organization?.address_line_1,
        'address_line_2': organization?.address_line_2,
        'president': organization?.president,
        'secretary': organization?.secretary
    });

    useSetBreadcrumbs([
        ...complianceBreadcrumbs,
        {
            title: `Edit : ${organization?.name}`,
            href: edit({ organization: organization?.id }).url
        }
    ])
    const handleSubmit = (e) => {
        e.preventDefault();
        put(update({ organization: organization?.id }).url)
    }

    return (
        <div className="flex-1 overflow-y-auto px-8 space-y-8">
            <PageHeader title={`Edit : ${organization?.name} `}>


            </PageHeader>

            <form className="flex flex-col space-y-9" onSubmit={handleSubmit}>
                <OrganizationForm
                    data={data}
                    setData={setData}
                    errors={errors}

                    states={states?.data}
                />

                <div className="md:col-span-12 flex items-center justify-end gap-4 py-8 border-t border-outline-variant/10">


                    <div className="flex gap-3">
                        <Link size="xl" variant="destructive"
                            href={index().url}
                            className="     hover:bg-red-200 transition-colors  " >
                            <XCircle className="text-destructive" />   Cancel</Link>
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