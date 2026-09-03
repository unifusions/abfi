import PageHeader from "@/components/ext/page-header";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { complianceBreadcrumbs } from "../compliance-index";
import { edit, index, update } from "@/routes/compliance/users";
import UserDeactivate from "./user-deactivate";
import { Button } from "@/components/ui/button";
import { Key, User } from "lucide-react";
import UserChangePassword from "./user-change-password";
import FormCard from "@/components/ext/form-card";
import { Label } from "@/components/ui/label";
import FormLabel from "@/components/ext/form-label";
import FormInput from "@/components/ext/form-input";
import { Form } from "@inertiajs/react";

export default function UserEdit({ user, organization }) {


    useSetBreadcrumbs([
        ...complianceBreadcrumbs,
        { title: 'User Management', href: index().url },
        { title: `Edit : ${user?.name}`, href: edit({ user: user?.id }).url },
    ]);

    return (
        <div className="px-6">
            <PageHeader title={`Edit   ${user?.name}`} subText={user?.roles?.map((role) => role.name).join(', ')} >
                <UserChangePassword user={user} />
                {/* <UserDeactivate user={user?.id} /> */}
            </PageHeader>

            <Form {...update.form({ user: user?.id })} method="patch"

                className="space-y-4">
                {({ processing, errors }) => (
                    <>
                        <FormCard title="Profile Identity" icon={User}>
                            <div className="space-y-6">



                                <div className="grid grid-cols-2  gap-3">
                                    <FormInput
                                        label="Full Legal Name"
                                        placeholder="e.g. Johnathan Miller"
                                        defaultValue={user?.name}
                                        labelRequired={true}
                                    // onChange={(e) => setData('name', e.target.value)}
                                    // value={data.name}
                                    // hasError={errors.name}
                                    />

                                    <FormInput
                                        label="Designation"
                                        placeholder="e.g., Founder"

                                        defaultValue={user.designation}
                                        hasError={errors.designation}
                                    />



                                    <FormInput
                                        label="Email (Will be used as login ID)"
                                        placeholder="e.g. j.miller@federation.org"
                                        type="email"
                                        labelRequired={true}
                                        defaultValue={user?.email}
                                        disabled={true}

                                    />
                                    <FormInput
                                        label="Organization"
                                        placeholder="e.g. j.miller@federation.org"
                                        type="email"
                                        labelRequired={true}
                                        defaultValue={organization}
                                        disabled={true}

                                    />


                                </div>

                            </div>




                        </FormCard>
                        <div className="flex items-center gap-4">
                            <Button type="submit"
                                disabled={processing}
                                data-test="update-profile-button"
                            >
                                Save
                            </Button>
                        </div>
                    </>
                )}
            </Form>

        </div>
    )
}