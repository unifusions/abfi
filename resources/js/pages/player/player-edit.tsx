import FormCard from "@/components/ext/form-card";
import FormCombobox from "@/components/ext/form-combobox";
import FormInput from "@/components/ext/form-input";
import FormSelect from "@/components/ext/form-select";
import ProfileUploader from "@/components/ext/media/ProfileUploader";
import { Button } from "@/components/ui/button";
import { router, useForm } from "@inertiajs/react";
import { Save, User, XCircle } from "lucide-react";
import { bloodgroups } from "./blood-groups";
import { FormCheckbox } from "@/components/ext/form-checkbox";
import FormRadio from "@/components/ext/form-radio";
import { useState } from "react";
import { update } from "@/routes/players";



const GENDEROPTIONS = [{
    label: 'Male',
    value: 'male'
},
{
    label: 'Female',
    value: 'female'
}
]

export default function PlayerEdit({ player, states, organizations, selected_positions,
    baseball_positions, can_select_organization, default_organization, profile_photo }) {

    const [photo, setPhoto] = useState(profile_photo
        ? {
              id: profile_photo.id,
              url:profile_photo.url,
          }
        : null);
    const { data, setData, errors, patch } = useForm({
        'first_name': player?.first_name,
        'middle_name': player?.middle_name,
        'last_name': player?.last_name,
        'father_name': player?.father_name,
        'dob': player?.dob.split("T")[0],
        'player_positions': selected_positions,
        'gender': player.gender,
        'aadhar_no': player.aadhar_no,
        'blood_group': player.blood_group,
        'passport': player.passport,
        'email': player.email,
        'phone': player.phone,
        'emergency_contact_phone': player.emergency_contact_phone,
        'state_id': player.state_id,
        'address': player.address,
        'city': player.city,
        'pincode': player.pin_code,
        'organization_id': player.organization_id,
        'media_id':   profile_photo?.id ?? "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        patch(update({ player: player.id }).url)
    }

    const handleCheckboxChange = (value) => {

        if (data.player_positions.includes(value)) {
            setData(
                "player_positions",
                data.player_positions.filter(x => x !== value)
            );
        }
        else {
            setData('player_positions', [...data.player_positions, value]);

        }

    }

    return (
        <form className="  grid grid-cols-1 md:grid-cols-12 gap-6" onSubmit={handleSubmit}>
 
            <div className="lg:col-span-9 md:col-span-6 space-y-6">
                <FormCard
                    title="Personal Identity"
                    icon={User}
                    variant="accent-secondary" className="md:col-span-9   group">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6">

                        <FormInput
                            label="First Name"
                            id="first_name"
                            placeholder="e.g., Juan Rivera"
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
                            placeholder="e.g., Juan Rivera"
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
                            disabled={true}
                        />


                        <FormRadio
                            labelId="Gender"
                            label="Gender"
                            labelRequired={true}
                            value={data.gender} onValueChange={(val) => setData('gender', val)}
                            options={GENDEROPTIONS}
                            hasError={errors.gender}
                            disabled={true}
                        />





                    </div>
                </FormCard>


                <FormCard className=" " title="Player Details">
                    <div className="grid grid-cols-2 w-full gap-3 space-y-6">
                        <div className="col-span-2">


                            <FormCheckbox
                                labelId="player_position"
                                label="Player Position"
                                labelRequired={true}
                                layout="row"
                                options={baseball_positions}
                                value={data.player_positions}
                                handleCheckboxChange={(newpositions) => handleCheckboxChange(newpositions)}
                                hasError={errors.player_positions}
                            />




                        </div>




                        <FormCombobox
                            label="Association / Organization"

                            labelRequired={true}

                            placeholder="Assoction Player Belongs to"
                            value={data.organization_id}
                            options={organizations?.data}
                            onValueChange={(val) => setData('organization_id', val)}
                            hasError={errors.organization_id}
                            disabled={true}
                        />


                        <FormSelect items={bloodgroups}

                            label="Blood Group"

                            labelRequired={true}
                            placeHolder="e.g., O+"
                            value={data.blood_group}
                            onValueChange={(val) => setData('blood_group', val)}
                            hasError={errors.blood_group}
                            disabled={true}
                        />





                        <FormInput
                            label="Aadhar Number"
                            id="aadhar_number"
                            name="aadhar_number"
                            placeholder="1234 5678 9012"
                            type="text"
                            labelRequired={true}
                            onChange={(e) => setData('aadhar_no', e.target.value)}
                            hasError={errors.aadhar_no}
                            disabled={true}
                        />




                        <FormInput
                            label="Passport Number"
                            id="passport_number"
                            name="passport_number"
                            placeholder="12345678"
                            type="text"
                            value={data.passport}
                            onChange={(e) => setData('passport', e.target.value)}
                            hasError={errors.passport}
                            disabled={true}
                        />

                    </div>
                </FormCard>


                <FormCard title="Contact & Assignment" >
                    <div className="grid grid-cols-3  gap-6">

                        <FormInput
                            label="Phone Number"
                            id="phone_number"
                            name="phone_number"
                            placeholder="98401 54321"
                            type="tel"
                            labelRequired={true}

                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            hasError={errors.phone}
                        />


                        <FormInput
                            label="Emergency Contact Number"
                            id="emergency_phone_number"
                            name="emergency_phone_number"
                            placeholder="(555) 000-0000"
                            type="tel"
                            labelRequired={true}

                            value={data.emergency_contact_phone}
                            onChange={(e) => setData('emergency_contact_phone', e.target.value)}
                            hasError={errors.emergency_contact_phone}
                        />


                        <FormInput
                            label="Email Address"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="contact@domain.com"
                            labelRequired={true}

                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}

                            hasError={errors.email}
                        />

                        <FormInput
                            label="Address"
                            id="address"
                            name="address"
                            placeholder="123 Main St"
                            type="text"
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            hasError={errors.address}
                        />

                        <FormInput
                            label="District / City"
                            id="district_city"
                            name="district_city"
                            placeholder="New Delhi "
                            type="text"
                            value={data.city}
                            onChange={(e) => setData('city', e.target.value)}

                        />

                        <FormSelect
                            id="state_id"
                            label="State"
                            items={states} value={data.state_id}
                            labelRequired={true}
                            onValueChange={(val) => setData('state_id', val)}
                            hasError={errors.state_id}

                        />


                        <FormInput
                            label="PIN  Code"
                            id="pin_code"

                            placeholder="110001"
                            type="text"
                            labelRequired={true}
                            hasError={errors.pincode}
                            value={data.pincode}
                            onChange={(e) => setData('pincode', e.target.value)}
                        />
                    </div>
                </FormCard>

            </div>

            <div className="col-span-3">
                <FormCard className="md:col-span-3" title="Upload Player Photo">

                    <ProfileUploader
                        value={photo}
                        onChange={(media) => {
                            setPhoto(media);
                            setData("media_id", media?.id ?? "");
                        }}
                    />

                </FormCard>

            </div>







            <div className="md:col-span-12 flex items-center justify-end gap-4 py-8 border-t border-outline-variant/10">

                <div className="flex gap-3">
                    <Button size="xl" variant="destructive"
                        className="     hover:bg-red-200 transition-colors  " onClick={() => router.back()}>
                        <XCircle className="text-destructive" />   Cancel</Button>
                    <Button
                        size="xl"
                        className="" type="submit">
                        <Save className="h-8 w-8 mr-2" /> <span>Save Player</span>
                    </Button>
                </div>


            </div>
        </form>
    )
}