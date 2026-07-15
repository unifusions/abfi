import PageHeader from "@/components/ext/page-header"
import { dashboard } from "@/routes"

export default function ComplianceIndex() {
    return (
        <>
            <PageHeader title="Compliance" subText="Manage your users, states and see audit trials">

            </PageHeader> Compliance Index
        </>
    )
}

ComplianceIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Compliance', href: '#' },
    ],

}