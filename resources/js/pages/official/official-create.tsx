import { UploadedMedia } from "@/components/ext/media/ProfileUploader";
import PageHeader from "@/components/ext/page-header";
import { dashboard } from "@/routes";
import officials from "@/routes/officials";
import { useForm } from "@inertiajs/react";
import { useState } from "react";
import OfficialForm from "./official-form";

export default function OfficialCreate(
    {
        organizations,
        states,
        default_organization,
        can_select_organization

    }
){

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
      
    }
    return (
        <>
        <PageHeader title="Register Official">


        </PageHeader>
     
<OfficialForm 
    data={data}
    setData = {setData}
    errors={errors}
     handleSubmit={handleSubmit}
 
    states={states}
/>
        </>
    )
}

OfficialCreate.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard()
        }
        ,
        {
            title: "Official's Directory",
            href: officials.index.url()
        },
          {
            title: "Add Official",
            href: officials.index.url()
        },
    ],
};