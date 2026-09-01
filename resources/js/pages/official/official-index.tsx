import LinkButton from "@/components/ext/link-button";
import OfficialList from "@/components/ext/official/official-list";
import PageHeader from "@/components/ext/page-header";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { dashboard } from "@/routes";
import { create, index } from "@/routes/officials";
import { UserRoundPlus, Users } from "lucide-react";
import { useState } from "react";
import OfficialSearchFilter from "./official-search";
import organizations from "@/routes/compliance/organizations";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";

export default function OfficialIndex(
    { states, officials, organizations, total_officials }
) {

    useSetBreadcrumbs([
        { title: 'Dashboard', href: dashboard().url },
        { title: 'Officials', href: index().url },
    ])

    return (

        < >
            <PageHeader title="Official Directory"

                belowPillIcon={Users}
                belowPill={`${total_officials} Active Officials`}



            >

                <LinkButton
                    href={create().url}
                    icon={UserRoundPlus}
                >


                    Register New Official
                </LinkButton>
            </PageHeader>


            {/* <!-- Robust Filter Bar --> */}

            <OfficialSearchFilter associations={organizations} />



            <OfficialList officials={officials?.data} />

        </>
    )
}
