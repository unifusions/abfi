import LinkButton from "@/components/ext/link-button";
import OfficialList from "@/components/ext/official/official-list";
import PageHeader from "@/components/ext/page-header";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { dashboard } from "@/routes";
import officials, { create } from "@/routes/officials";
import { UserRoundPlus, Users } from "lucide-react";
import { useState } from "react";
import OfficialSearchFilter from "./official-search";
import organizations from "@/routes/compliance/organizations";

export default function OfficialIndex(
    { states, officials, organizations, total_officials }
) {



    return (

        < >
            <PageHeader title="Official Directory"

                belowPillIcon={Users}
                belowPill={`${total_officials} Active Officials`}



            >

                <LinkButton href={create()}

                    icon={UserRoundPlus}
                    class="bg-primary   px-8 py-4 rounded-xl flex items-center gap-3 hover:shadow-lg transition-all active:scale-95 group">


                    Register New Official
                </LinkButton>
            </PageHeader>


            {/* <!-- Robust Filter Bar --> */}

            <OfficialSearchFilter associations={organizations} />
         


            <OfficialList officials={officials?.data} />

        </>
    )
}

OfficialIndex.layout = {
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

    ],
};