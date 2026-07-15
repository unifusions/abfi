import { compliance, dashboard } from "@/routes"


export default function AuditLogIndex(){
    return (
        <>
        
        Audit Log</>
    )
}

AuditLogIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Compliance', href: compliance().url },
        { title: 'Audit Trial', href: "#" }
    ],

}