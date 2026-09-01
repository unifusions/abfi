import PageHeader from "@/components/ext/page-header";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext"
import { dashboard } from "@/routes";
import { index, update } from "@/routes/officials";
import OfficialForm from "./official-form";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function OfficialEdit({profile_photo, official, states, can_select_organization, organizations }) {

    useSetBreadcrumbs([
        { title: 'Dashboard', href: dashboard().url },
        { title: 'Officials', href: index().url },
        { title: `Edit : ${official?.official_code}`, href: index().url },
    ]);

   

    const { data, setData, processing, patch, errors } = useForm({
        'first_name': official?.first_name,
        'middle_name': official?.middle_name,
        'last_name': official?.last_name,
        'father_name': official?.father_name,
        'marital_status' : official?.marital_status,
        'dob': official?.dob.split("T")[0],
        'type' : official?.type,
        'gender': official?.gender,
        'aadhar_no': official?.aadhar_no,
        'passport':official?.passport,
        'email': official?.email,
        'phone': official?.phone,
        'emergency_contact_phone': official?.emergency_contact_phone,
        'state_id': official?.state_id,
        'address': official?.address,
        'city': official?.city,
        'pincode': official?.pincode,
        'organization_id': official?.organization_id,
        'media_id': profile_photo?.id ?? '',
        'account_bank_name' : official?.account_bank_name,
        'account_number': official?.account_number,
        'account_ifsc_code' :official?.account_ifsc_code,


    })

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        patch(update({official:official?.id}).url);

    }
 
    return (
        <>
        <PageHeader title={`Edit : ${official?.official_code}`} />
        <OfficialForm
                data={data}
                setData={setData}
                errors={errors}
                handleSubmit={handleSubmit}
                organizations={organizations?.data}
                states={states?.data}
                profilePhoto = {profile_photo}

                can_select_organization={can_select_organization}
                editMode={true}

            />

        </>
    )
}