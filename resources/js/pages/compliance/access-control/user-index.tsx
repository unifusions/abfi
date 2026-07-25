import AppPagination from "@/components/ext/app-pagination"
import FormInputWithIcon from "@/components/ext/form-input-with-icon"
import FormSelect from "@/components/ext/form-select"
import LinkButton from "@/components/ext/link-button"
import PageHeader from "@/components/ext/page-header"
import RowFirstColumn from "@/components/ext/table/row-first-column"
import RowFirstColumnWithAvatar from "@/components/ext/table/row-first-column-with-avatar"
import RowAvatar from "@/components/ext/table/row-first-column-with-avatar"
import { compliance, dashboard } from "@/routes"
import { create } from "@/routes/compliance/users"
import { Bolt, Group, Search, User, UserPlus, Users } from "lucide-react"

export default function UserIndex(
    { roles, organizations, users }
) {

    const { data, ...paginationData } = users;
    const { links, meta } = paginationData;

    const stats = [
        {
            label: 'Total Users',
            value: users.data.length ,
            icon: Users
        },
        {
            label: 'Active Today',
            value: 0,
            icon: Bolt
        },


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
                        className="bg-zinc-50 p-6 rounded-lg relative overflow-hidden group shadow-sm border-l-4 border-primary">
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


            <div
                class="bg-zinc-100 rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-primary text-white">
                        <tr>
                            <th class="px-6 py-4 font-label text-xs font-bold uppercase tracking-widest">Name &amp;
                                Profile</th>
                            <th class="px-6 py-4 font-label text-xs font-bold uppercase tracking-widest">Email Address
                            </th>
                            <th class="px-6 py-4 font-label text-xs font-bold uppercase tracking-widest">Role</th>
                            <th class="px-6 py-4 font-label text-xs font-bold uppercase tracking-widest">Organization
                            </th>
                            <th class="px-6 py-4 font-label text-xs font-bold uppercase tracking-widest text-center">
                                Status</th>
                            <th class="px-6 py-4 font-label text-xs font-bold uppercase tracking-widest text-right">
                                Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-outline-variant/10">

                        {data?.map((user) =>

                            <tr className="hover:bg-white transition-colors group">
                                <td className="px-6 py-4">
                                    <RowFirstColumn title={user.name} />

                                </td>
                                <td class="px-6 py-4 font-body text-sm text-slate-800">{user?.email}</td>
                                <td class="px-6 py-4">
                                    <span
                                        className="px-2 py-1  text-sm font-bold rounded-full  ">{user?.roles.map((role: string) => role)} </span>
                                </td>
                                <td class="px-6 py-4 font-body text-sm text-slate-800">{user?.organization}</td>
                                <td class="px-6 py-4 text-center">
                                    <span
                                        class="px-2 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase">Active</span>
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <div class="flex justify-end gap-2">
                                        <button
                                            class="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-high rounded transition-all">
                                            <span class="material-symbols-outlined text-lg">edit</span>
                                        </button>
                                        <button
                                            class="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-secondary-fixed rounded transition-all">
                                            <span class="material-symbols-outlined text-lg">delete</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )}







                    </tbody>
                </table>


                <AppPagination paginationData={paginationData} />


            </div>


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
