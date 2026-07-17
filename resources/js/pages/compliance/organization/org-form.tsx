import FormCard from "@/components/ext/form-card";
import FormInput from "@/components/ext/form-input";
import FormSelect from "@/components/ext/form-select";

export default function OrganizationForm({ data, setData, errors, states }) {
    return (
        <>

            <FormCard title="Association Identity">
                <div className="grid grid-cols-2 gap-6">
                    <FormInput
                        id="association_name"
                        label="Association Name"
                        labelRequired={true}

                        placeholder="e.g., State Baseball Federation"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <FormInput

                        id="contact_person"
                        label="contact person"
                        labelRequired={true}

                        placeholder="e.g., Amit Sharma"
                        value={data.contact_person}
                        onChange={(e) => setData('contact_person', e.target.value)}
                    />

                    <FormInput

                        id="phone"
                        label="phone"
                        labelRequired={true}
                        placeholder=" valid mobile number"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                    />

                    <FormInput
                        id="email"
                        label="Email"
                        labelRequired={true}

                        placeholder="e.g., amit.sharma@gmail.com"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />


                    <FormSelect items={states}
                        id="state_id"
                        label={"State"}
                         labelRequired={true}
                          value={data.state_id}
                        onValueChange={(e) => setData('state_id', e)}
                    >

                    </FormSelect>
                </div>
            </FormCard>
        </>
    )
}