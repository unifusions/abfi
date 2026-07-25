import FormCard from "@/components/ext/form-card"
import FormInput from "@/components/ext/form-input"
import FormInputWithIcon from "@/components/ext/form-input-with-icon"
import PageHeader from "@/components/ext/page-header"
import SearchableSelect from "@/components/ext/searcable-select"
import InputError from "@/components/input-error"
import { Button } from "@/components/ui/button"
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { compliance, dashboard } from "@/routes"
import { store } from "@/routes/compliance/users"
import { useForm } from "@inertiajs/react"
import { Group, PersonStanding, SaveIcon, Settings, User } from "lucide-react"
import { useState } from "react"

export default function UserCreate({ roles, organizations }) {

    const [org, setOrg] = useState();
    const { data, setData, processing, errors, post } = useForm({
        name: '',
        email: '',
        password: '',
        organization_id: '',
        designation: '',
        role_id: ''
    })

    function handleSubmit(e) {
        e.preventDefault();
        post(store.url());
    }
    return (
        <div className="ps-3">

            <PageHeader />
           
            <form onSubmit={handleSubmit}>


                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 ">

                    <div className="md:col-span-7 space-y-8">

                        <FormCard
                            icon={User}
                            title="Profile Identity" >
                            <div className="space-y-6">

                                <FormInput
                                    label="Full Legal Name"
                                    placeholder="e.g. Johnathan Miller"
                                    onChange={(e) => setData('name', e.target.value)}
                                    value={data.name}
                                    hasError={errors.name}
                                />

                                <FormInput
                                    label="Email (Will be used as login ID)"
                                    placeholder="e.g. j.miller@federation.org"
                                    type="email"
                                    onChange={(e) => setData('email', e.target.value)}
                                    value={data.email}
                                    hasError={errors.email}
                                />

                                <FormInput
                                    label="Access Password"
                                    type="password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    value={data.password}
                                    placeholder="********"
                                    hasError={errors.password}
                                />


                                {/* 
                            <div class="group">
                                <div class="flex justify-between items-center mb-2">
                                    <label
                                        class="block text-xs font-bold text-secondary uppercase tracking-wider">Access
                                        Password</label>
                                    <button
                                        class="text-[10px] font-bold text-primary hover:underline flex items-center gap-1">
                                        <span class="material-symbols-outlined text-xs"
                                            data-icon="refresh">refresh</span>
                                        GENERATE SECURE PASSWORD
                                    </button>
                                </div>
                                <div class="relative">
                                    <input
                                        class="w-full bg-surface-container-low border-none rounded-md px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary transition-all"
                                        type="password" value="K8#mP92!vXq" />
                                    <span
                                        class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer"
                                        data-icon="visibility">visibility</span>
                                </div>
                                <p class="text-[10px] text-on-surface-variant mt-2">Entropy score: <span
                                    class="text-green-600 font-bold">Strong</span></p>
                            </div> */}
                            </div>
                        </FormCard>

                        <FormCard
                            icon={Group}
                            title="Organization / Association"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                <SearchableSelect
                                    options={organizations}
                                    onChange={(org) => setData("organization_id", org.id)}

                                    getOptionLabel={(org) => org.name}
                                    getOptionValue={(org) => org.id}
                                    renderOption={(org) => (
                                        <div>
                                            {org?.name}
                                            <div className="text-xs hover:text-zinc-200">
                                                {org?.id}
                                            </div>
                                        </div>
                                    )}
                                    // icon={FileUser}s
                                    label="Organization/Association Name "
                                    value={organizations.find(o => o.id === data.organization_id) ?? null}
                                    hasError={errors.organization_id}
                                />

                                <FormInput
                                    label="Designation"
                                    placeholder="e.g., Founder"
                                    onChange={(e) => setData('designation', e.target.value)}
                                    value={data.designation}
                                        hasError={errors.designation}
                                />




                            </div>

                        </FormCard>

                    </div>

                    <div class="md:col-span-5">
                        <section
                            class="bg-surface-container-lowest p-8 rounded-xl border-l-4 border-secondary-container h-full">
                            <div class="flex items-center gap-3 mb-8">
                                <Settings className="text-zinc-400" />
                                <h3 className="font-headline text-xl font-bold text-primary">Access Control</h3>
                            </div>

                            <div className="mb-10">
                                <label
                                    class="block text-xs font-bold text-secondary uppercase tracking-wider mb-3">Administrative
                                    Role</label><InputError message={errors.role_id} />
                                <div className="space-y-3">


                                    <RadioGroup defaultValue="plus" value={data.role_id} onValueChange={(val) => setData('role_id', val)}>


                                        {roles.map((role) =>
                                            <FieldLabel key={role.id} htmlFor={role.id}
                                                className="  cursor-pointer"
                                            >
                                                <Field orientation="horizontal"  {...(errors.role_id ? { "data-invalid": true } : {})} 
                                                className={cn({'border-red-400 rounded-md border-1' : errors.role_id})}>

                                                    <FieldContent>
                                                        <FieldTitle>{role.name}</FieldTitle>
                                                        <FieldDescription>
                                                            {role.description}
                                                        </FieldDescription>
                                                    </FieldContent>
                                                    <RadioGroupItem value={role.id} id={role.id} />


                                                </Field>
                                            </FieldLabel>

                                        )}


                                    </RadioGroup>



                                </div>
                            </div>


                            <Button
                                type="submit"
                                variant="default"
                                size="xl"
                                className=" w-full px-10 py-8   font-bold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all flex items-center gap-2">
                                <SaveIcon />
                                Create User
                            </Button>

                        </section>
                    </div>
                </div>

            </form>
        </div>
    )
}

UserCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Compliance', href: compliance().url },
        { title: 'User Management', href: "#" }
    ],

}


//  <label
//                                         class="flex items-center justify-between p-4 rounded-md bg-surface border border-outline-variant/15 cursor-pointer hover:border-primary transition-all">
//                                         <div class="flex items-center gap-3">
//                                             <input class="w-4 h-4 text-primary" name="role" type="radio" />
//                                             <div>
//                                                 <p class="font-bold text-sm text-primary leading-none">{role.name}</p>
//                                                 <p class="text-[10px] text-on-surface-variant mt-1">{role.description}</p>
//                                             </div>
//                                         </div>

//                                     </label>