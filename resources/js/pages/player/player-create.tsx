import FormCard from "@/components/ext/form-card"
import { FormCheckbox } from "@/components/ext/form-checkbox"
import FormCombobox from "@/components/ext/form-combobox"
import FormInput from "@/components/ext/form-input"
import FormRadio from "@/components/ext/form-radio"
import FormSelect from "@/components/ext/form-select"
import PageHeader from "@/components/ext/page-header"
import SearchableSelect from "@/components/ext/searcable-select"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import players, { create, index, store } from "@/routes/players"
import { router, useForm } from "@inertiajs/react"
import {  Save, User, XCircle } from "lucide-react"

const GENDEROPTIONS = [{
    label : 'Male',
    value : 'male'
},
{
    label:'Female',
    value:'female'
}
]
export default function PlayerCreate({baseball_positions, organizations, states}) {

    const {data, setData, processing, post, errors} = useForm({
        'first_name' : '',
        'middle_name' : '',
        'last_name' : '',
        'father_name' : '', 
        'dob' : '',
        'player_positions' : [],
        'gender' : '',
        'aadhar_no': '',
        'passport': '',
        'email' : '',
        'phone' : '',
        'emergency_contact_phone' : '',
        'state_id' : '',
        'address' : '',
        'city' : '',
        'pincode' : '',
        'organization_id' : '',
       
    })

    const handleCheckboxChange = (value) => {

            if(data.player_positions.includes(value)){
                setData(
                    "player_positions",
            data.player_positions.filter(x=>x!==value)
            );
        }      
        else {
    setData('player_positions', [...data.player_positions, value]);

}
    
      }

      const handleSubmit = (e) => {
e.preventDefault();
post(store().url);
      }
    return (
        <>
            <div className="flex h-full   flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

<PageHeader title="Register New Player" subText="Complete the official registration form to add a player to the national federation database">

</PageHeader>
               
                {/* <!-- Form Canvas (Bento Grid Style for Sections) --> */}
                <form className="  grid grid-cols-1 md:grid-cols-12 gap-6" onSubmit={handleSubmit}>
{JSON.stringify(errors)}
                    <FormCard
                        title="Personal Identity"
                        icon={User}
                        variant="accent-secondary" className="md:col-span-9   p-8 relative overflow-hidden group">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           
                                <FormInput
                                    label="First Name"
                                    id="first_name"
                                  placeholder="e.g., Juan Rivera"
                                    onChange={(e) =>setData('first_name', e.target.value)}
                                    labelRequired
                                    value={data.first_name}
                                    
                                    />

 
<FormInput
                                    label="Middle Name"
                                    id="first_name"
                                     placeholder="e.g., Juan Rivera"
                                    onChange={(e) =>setData('middle_name', e.target.value)}
                                    value={data.first_name}
                                    
                                    />
                                     <FormInput
                                    label="Last Name"
                                    id="last_name"
                                  placeholder="e.g., Juan Rivera"
                                    onChange={(e) =>setData('last_name', e.target.value)}
                                    labelRequired
                                    value={data.last_name}
                                    
                                    />

                                <FormInput
                                    label="Father's  Name"
                                    id="fathers_name"
                                   
                                    placeholder="e.g., Juan Rivera"
                                    labelRequired
 value={data.father_name}
                                    onChange= {(e) => setData('father_name',e.target.value)}

                                />
                           
                          

                                <FormInput
                                    label="Date of birth"
                                    id="date_of_birth"
                                    name="date_of_birth"
                                    type="date"
                                    labelRequired

                                     value={data.dob}
                                    onChange= {(e) => setData('dob', e.target.value)}

                                />


<FormRadio 
labelId="Gender"
label = "Gender"
labelRequired={true}
    value={data.gender} onValueChange={(val) => setData('gender', val)}
    options={GENDEROPTIONS}
/>
 
                          



                        </div>
                    </FormCard>

                  

                    <FormCard className="md:col-span-8" title="Player Details">
                        <div className="grid grid-cols-2 w-full gap-3 space-y-6">
                            <div className="col-span-2">
 
 <FormCheckbox 
 labelId="player_position"
 label="Player Position"
 labelRequired={true}
    layout="row"
    options = {baseball_positions}
    value={data.player_positions}
    handleCheckboxChange={(newpositions) => handleCheckboxChange(newpositions) }
    
 />

                                
 

                            </div>

                             
                            
 
<FormCombobox 
   label = "Association / Organization"

    labelRequired = {true}

    placeholder="Assoction Player Belongs to"
    value = {data.organization_id}
    options={organizations.data}
    onValueChange={(val) => setData('organization_id', val)}
/>


                             
                                <FormInput
                                    label="Blood Group"
                                    id="blood_group"
                                    name="blood_group"
                                    placeholder="e.g., O+"
                                    type="text"
                                    labelRequired={true}

                                     value={data.blood_group}
                                    onChange= {(e) => setData('blood_group', e.target.value)}
                                />

                           

                              <FormInput
                                    label="Aadhar Number"
                                    id="aadhar_number"
                                    name="aadhar_number"
                                    placeholder="1234 5678 9012"
                                    type="text"
                                    labelRequired={true}
                                    onChange = {(e) => setData('aadhar_no', e.target.value)}

                                />

 
 

                                <FormInput
                                    label="Passport Number"
                                    id="passport_number"
                                    name="passport_number"
                                    placeholder="12345678"
                                    type="text"
                                        value={data.passport}
                                    onChange= {(e) => setData('passport', e.target.value)}
                                />
                             
                        </div>
                    </FormCard>

                    <FormCard title="Contact & Assignment"  className="md:col-span-8">
                    <div className="grid grid-cols-3  gap-6">

    <FormInput
        label="Phone Number"
        id="phone_number"
        name="phone_number"
        placeholder="98401 54321"
        type="tel"
          labelRequired={true} 

              value={data.phone}
                                    onChange= {(e) => setData('phone', e.target.value)}
    />


    <FormInput
        label="Emergency Contact Number"
        id="emergency_phone_number"
        name="emergency_phone_number"
        placeholder="(555) 000-0000"
        type="tel"
         labelRequired={true} 

             value={data.emergency_contact_phone}
                                    onChange= {(e) => setData('emergency_contact_phone', e.target.value)}
    />


    <FormInput
        label="Email Address"
        id="email"
        name="email"
        type="email"
        placeholder="contact@domain.com"
         labelRequired={true} 

             value={data.email}
                                    onChange= {(e) => setData('email', e.target.value)}

    />

    <FormInput
        label="Address"
        id="address"
        name="address"
        placeholder="123 Main St"
        type="text"

            value={data.address}
                                    onChange= {(e) => setData('address', e.target.value)}
    />

    <FormInput
        label="District / City"
        id="district_city"
        name="district_city"
        placeholder="New Delhi "
        type="text"
            value={data.city}
                                    onChange= {(e) => setData('city', e.target.value)}
    />

    <FormSelect 
id="state_id"
    label = "State"
    items = {states} value={data.state_id}
    labelRequired={true} 
    onValueChange={(val) => setData('state_id',val)}  />

 
    <FormInput
        label="PIN  Code"
        id="pin_code"
         
        placeholder="110001"
        type="text"
          labelRequired={true} 
          hasError={errors.pincode}
              value={data.pincode}
                                    onChange= {(e) => setData('pincode', e.target.value)}
    />
</div>
                    </FormCard>
                    

                    
 
                     <div class="md:col-span-12 flex items-center justify-end gap-4 py-8 border-t border-outline-variant/10">

                     <div className="flex gap-3">
                        <Button size="xl" variant="destructive"
                            className="     hover:bg-red-200 transition-colors  " onClick={() => router.bac}>
                            <XCircle className="text-destructive" />   Cancel</Button>
                        <Button
                            size="xl"
                            className=""  type="submit">
                            <Save className="h-8 w-8 mr-2" /> <span>Save Player</span>
                        </Button>
                    </div>

 
                    </div>
                </form>

                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </>
    )
}

PlayerCreate.layout = {
    breadcrumbs: [
        { title: 'Players', href: index() },
        { title: 'Add Player', href: create() },
    ],

}

 
                    // <section className="md:col-span-4 bg-primary text-white p-8 flex flex-col justify-between relative overflow-hidden">
                    //     <div className="relative z-10">
                    //         <h3 className="text-xs font-label uppercase tracking-widest text-on-primary-container mb-4">Registration Status</h3>
                    //         <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                    //             <ClipboardCheck />
                    //             <div>
                    //                 <p className="text-sm font-bold">Awaiting Documents</p>
                    //                 <p className="text-xs opacity-60">ID Verification Required</p>
                    //             </div>
                    //         </div>
                    //     </div>
                    //     <div className="mt-12 relative z-10">
                    //         <h3 className="text-xs font-label uppercase tracking-widest text-on-primary-container mb-2">Age Class</h3>
                    //         <p className="font-headline text-5xl font-black tracking-tighter">U14</p>
                    //         <p className="text-xs opacity-60 mt-2">Determined by DOB </p>
                    //     </div>
                   
                    //     <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
                    //         <span className="material-symbols-outlined"
                             
                    //         >sports_baseball</span>
                    //     </div>
                    // </section>