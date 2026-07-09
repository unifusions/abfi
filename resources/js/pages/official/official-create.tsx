import PageHeader from "@/components/ext/page-header";
import { dashboard } from "@/routes";
import officials from "@/routes/officials";

export default function OfficialCreate(){
    return (
        <>
        <PageHeader title="Register Official">


        </PageHeader>
     

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