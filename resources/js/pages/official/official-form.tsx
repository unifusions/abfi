import FormCard from "@/components/ext/form-card"
import FormInput from "@/components/ext/form-input"
import FormRadio from "@/components/ext/form-radio"
import { User } from "lucide-react"

const GENDEROPTIONS = [{
    label: 'Male',
    value: 'male'
},
{
    label: 'Female',
    value: 'female'
}
]

export default function OfficialForm(
    {data , setData, errors, handleSubmit}
){
    return (
<form onSubmit={handleSubmit}>
          <div className="lg:col-span-9 md:col-span-6 space-y-6">
             <FormCard
                            title="Personal Identity"
                            icon={User}
                            variant="accent-secondary" className="md:col-span-9   group">
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6">

                                <FormInput
                                    label="First Name"
                                    id="first_name"
                                    placeholder="e.g., Amit"
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    labelRequired
                                    value={data.first_name}
                                    hasError={errors.first_name}
                                />


                                <FormInput
                                    label="Middle Name"
                                    id="first_name"
                                    placeholder="e.g., Juan Rivera"
                                    onChange={(e) => setData('middle_name', e.target.value)}
                                    value={data.middle_name}
                                    hasError={errors.middle_name}
                                />
                                <FormInput
                                    label="Last Name"
                                    id="last_name"
                                    placeholder="e.g., Sharma"
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    labelRequired
                                    value={data.last_name}
                                    hasError={errors.last_name}

                                />

                                <FormInput
                                    label="Father's  Name"
                                    id="fathers_name"

                                    placeholder="e.g., Juan Rivera"
                                    labelRequired
                                    value={data.father_name}
                                    onChange={(e) => setData('father_name', e.target.value)}
                                    hasError={errors.father_name}

                                />



                                <FormInput
                                    label="Date of birth"
                                    id="date_of_birth"
                                    name="date_of_birth"
                                    type="date"
                                    labelRequired

                                    value={data.dob}
                                    onChange={(e) => setData('dob', e.target.value)}
                                    hasError={errors.dob}
                                />


                                <FormRadio
                                    labelId="Gender"
                                    label="Gender"
                                    labelRequired={true}
                                    value={data.gender} onValueChange={(val) => setData('gender', val)}
                                    options={GENDEROPTIONS}
                                    hasError={errors.gender}
                                />





                            </div>
                        </FormCard>

          </div>
</form>
    )
}