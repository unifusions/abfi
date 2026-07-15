import RoleSidebar from "@/components/ext/compliance/role-sidebar";
import PageHeader from "@/components/ext/page-header";

export default function RoleLayout({ roles, children }) {
    return (
    <>
        <div className="ps-6">
                <PageHeader title="Roles & Permissions" subText="Manage Roles & Permissions" >

                </PageHeader>
            </div>

        <RoleSidebar roles={roles} />
        {children}
    </>
    )
}