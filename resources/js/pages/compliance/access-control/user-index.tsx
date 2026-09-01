import AppPagination from "@/components/ext/app-pagination"
import FormInputWithIcon from "@/components/ext/form-input-with-icon"
import FormSelect from "@/components/ext/form-select"
import LinkButton from "@/components/ext/link-button"
import PageHeader from "@/components/ext/page-header"
import TableRowAction from "@/components/ext/table-row-actions"
import RowFirstColumn from "@/components/ext/table/row-first-column"
import RowFirstColumnWithAvatar from "@/components/ext/table/row-first-column-with-avatar"
import RowAvatar from "@/components/ext/table/row-first-column-with-avatar"
import { useBreadcrumbs, useSetBreadcrumbs } from "@/context/BreadcrumbContext"
import { compliance, dashboard } from "@/routes"
import { create, edit, index } from "@/routes/compliance/users"
import { Bolt, Group, Pencil, Search, Trash, User, UserPlus, Users } from "lucide-react"
import { complianceBreadcrumbs } from "../compliance-index"
import TableContainer from "@/components/ext/table-container"
import { TableBody, TableCell, TableFooter, TableHead, TableRow } from "@/components/ui/table"

export default function UserIndex(
    { roles, organizations, users }
) {


    useSetBreadcrumbs([
        ...complianceBreadcrumbs,
        { title: 'User Management', href: index().url },
    ]);

    const { data, ...paginationData } = users;
    const { links, meta } = paginationData;

    const stats = [
        {
            label: 'Total Users',
            value: users.data.length,
            icon: Users
        },
        // {
        //     label: 'Active Today',
        //     value: 0,
        //     icon: Bolt
        // },


    ];
    return (
        <>  <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <PageHeader title="User Directory" subText="Manage, audit, and authenticate all
                        federation users.">
                <LinkButton
                    href={create().url}
                >
                    <UserPlus />
                    Add User
                </LinkButton>
            </PageHeader>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat) =>

                    <div
                        className="bg-zinc-50 p-6 relative overflow-hidden group shadow-sm border-l-4 border-primary">
                        <p className="text-on-surface-variant font-label text-xs uppercase tracking-widest font-bold">{stat.label}</p>
                        <h4 className="text-primary font-headline text-4xl font-black mt-2">{stat.value}</h4>
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                            {stat.icon && <stat.icon className="text-primary h-20 w-20" />}

                        </div>
                    </div>
                )}


            </div>

            <div
                className="flex flex-wrap items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                <div className="flex-1 min-w-[240px] relative">
                    <FormInputWithIcon icon={Search} placeholder="Filter by name, email, or ID..." />

                </div>
                <div className="flex items-center gap-2">
                    <FormSelect
                        items={roles.data}
                        placeHolder="All Roles"
                    />
                </div>
                <div className="flex items-center gap-2">

                    <FormSelect
                        items={organizations.data}
                        placeHolder="All Associations"
                    />

                </div>
                {/* <button
                    class="p-2.5 bg-surface-container-lowest border border-outline-variant/20 rounded-md text-on-surface-variant hover:bg-white transition-colors">
                    <span class="material-symbols-outlined">tune</span>
                </button> */}
            </div>

            <TableContainer>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>E-Mail</TableHead>

                    <TableHead>Organization</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
                <TableBody>
                    {data?.map((user) =>

                        <TableRow key={user?.id}>
                            <TableCell>
                                <RowFirstColumn title={user.name} subTitle={user?.roles.map((role: string) => role)} />
                            </TableCell>
                            <TableCell>{user?.email}</TableCell>
                            <TableCell>{user?.organization}</TableCell>
                           
                            <TableCell>  <span
                                        class="px-2 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase">Active</span></TableCell>
                            <TableCell>
                                <TableRowAction canView={false}
                                    editUrl={edit({ user: user.id }).url}
                                    deleteUrl={"#"} />


                            </TableCell>
                        </TableRow>
                    )}
                    <TableRow>
                        
                    </TableRow>
                </TableBody>
                <TableFooter className="bg-zinc-50">
                    <TableCell colSpan={5}>
                    <AppPagination paginationData={paginationData} />
                    </TableCell>
                </TableFooter>
            </TableContainer>
          

        </div></>
    )
}

UserIndex.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Compliance', href: compliance().url },
        { title: 'User Management', href: "#" }
    ],

}
