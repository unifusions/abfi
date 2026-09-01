import PageHeader from "@/components/ext/page-header";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { complianceBreadcrumbs } from "../compliance-index";
import { edit, index } from "@/routes/compliance/users";
import UserDeactivate from "./user-deactivate";

export default function UserEdit({user})  {

    
    useSetBreadcrumbs([
        ...complianceBreadcrumbs,
        { title: 'User Management', href: index().url },
        { title: `Edit : ${user?.name}`, href: edit({user: user?.id}).url },
    ]);

    return (
        <div className="p-6">
          <PageHeader title={ `Edit   ${user?.name}`}  >
                {/* <UserDeactivate user={user?.id} /> */}
            </PageHeader>
        </div>
    )
}