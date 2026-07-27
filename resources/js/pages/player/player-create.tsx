import FormCard from "@/components/ext/form-card"
import { FormCheckbox } from "@/components/ext/form-checkbox"
import FormCombobox from "@/components/ext/form-combobox"
import FormInput from "@/components/ext/form-input"
import FormRadio from "@/components/ext/form-radio"
import FormSelect from "@/components/ext/form-select"
import MediaUploader, { UploadedMedia } from "@/components/ext/media/MediaUploader"
import ProfileUploader from "@/components/ext/media/ProfileUploader"
import PageHeader from "@/components/ext/page-header"
import SearchableSelect from "@/components/ext/searcable-select"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import players, { create, index, store } from "@/routes/players"
import { router, useForm } from "@inertiajs/react"
import { Save, User, XCircle } from "lucide-react"
import React, { useState } from "react"
import PlayerForm from "./player-form"


export default function PlayerCreate({ baseball_positions, organizations, states, default_organization, can_select_organization }) {

    const { data, setData, processing, post, errors } = useForm({
        'first_name': '',
        'middle_name': '',
        'last_name': '',
        'father_name': '',
        'dob': '',
        'player_positions': [],
        'gender': '',
        'aadhar_no': '',
        'passport': '',
        'email': '',
        'phone': '',
        'emergency_contact_phone': '',
        'state_id': '',
        'address': '',
        'city': '',
        'pincode': '',
        'organization_id': default_organization || '',
        'media_id': ''

    })
    const [photo, setPhoto] = useState<UploadedMedia | null>(null);
   

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(players.store().url);
    }
    return (
        <>
         
            <div className="flex h-full   flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

                <PageHeader title="Register New Player" subText="Complete the official registration form to add a player to the national federation database">

                </PageHeader>

 
<PlayerForm 
    data={data}
    setData={setData}
    handleSubmit={handleSubmit}
    errors={errors}
    states={states}
    baseball_positions = {baseball_positions}
    can_select_organization = {can_select_organization}
    organizations={ organizations?.data}
/>
               
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


