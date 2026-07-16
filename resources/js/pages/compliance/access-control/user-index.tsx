import AppPagination from "@/components/ext/app-pagination"
import LinkButton from "@/components/ext/link-button"
import RowFirstColumn from "@/components/ext/table/row-first-column"
import RowFirstColumnWithAvatar from "@/components/ext/table/row-first-column-with-avatar"
import RowAvatar from "@/components/ext/table/row-first-column-with-avatar"
import { compliance, dashboard } from "@/routes"
import { create } from "@/routes/compliance/users"
import { Group, User, UserPlus, Users } from "lucide-react"

export default function UserIndex(
    { roles, organizations, users }
) {

    const { data, ...paginationData } = users;
    const { links, meta } = paginationData;
    return (
        <>  <div class="flex-1 overflow-y-auto p-8 space-y-8">

            <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h3 class="font-headline text-3xl font-black text-primary tracking-tighter">Directory</h3>
                    <p class="text-on-surface-variant font-body text-sm mt-1">Manage, audit, and authenticate all
                        regional federation officials and scouts.</p>
                </div>
                <LinkButton
                    href={create().url}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-on-secondary rounded-md font-label font-extrabold text-sm shadow-lg hover:shadow-secondary/20 hover:brightness-110 active:scale-95 transition-all">
                    <UserPlus />
                    ADD NEW USER
                </LinkButton>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div
                    class="bg-surface-container-lowest p-6 rounded-lg relative overflow-hidden group shadow-sm border-l-4 border-primary">
                    <p class="text-on-surface-variant font-label text-xs uppercase tracking-widest font-bold">Total
                        Users</p>
                    <h4 class="text-primary font-headline text-4xl font-black mt-2">1,248</h4>
                    <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                        <Users className="text-primary h-20 w-20" />

                    </div>
                </div>
                <div
                    class="bg-surface-container-lowest p-6 rounded-lg relative overflow-hidden group shadow-sm border-l-4 border-secondary">
                    <p class="text-on-surface-variant font-label text-xs uppercase tracking-widest font-bold">Active
                        Today</p>
                    <h4 class="text-primary font-headline text-4xl font-black mt-2">432</h4>
                    <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-8xl">bolt</span>
                    </div>
                </div>
                <div
                    class="bg-surface-container-lowest p-6 rounded-lg relative overflow-hidden group shadow-sm border-l-4 border-outline-variant">
                    <p class="text-on-surface-variant font-label text-xs uppercase tracking-widest font-bold">Pending
                        Approval</p>
                    <h4 class="text-primary font-headline text-4xl font-black mt-2">14</h4>
                    <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-8xl">hourglass_empty</span>
                    </div>
                </div>
                <div
                    class="bg-surface-container-lowest p-6 rounded-lg relative overflow-hidden group shadow-sm border-l-4 border-primary-container">
                    <p class="text-on-surface-variant font-label text-xs uppercase tracking-widest font-bold">Avg.
                        Retention</p>
                    <h4 class="text-primary font-headline text-4xl font-black mt-2">98.2%</h4>
                    <div class="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
                        <span class="material-symbols-outlined text-8xl">trending_up</span>
                    </div>
                </div>
            </div>

            <div
                class="flex flex-wrap items-center gap-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                <div class="flex-1 min-w-[240px] relative">
                    <span
                        class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">search</span>
                    <input
                        class="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border-outline-variant/20 rounded-md font-body text-sm focus:ring-2 focus:ring-primary/20"
                        placeholder="Filter by name, email, or ID..." type="text" />
                </div>
                <div class="flex items-center gap-2">
                    <label
                        class="font-label text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Role:</label>
                    <select
                        class="bg-surface-container-lowest border-outline-variant/20 rounded-md font-body text-sm py-2 px-4 focus:ring-2 focus:ring-primary/20">
                        <option>All Roles</option>
                        <option>Administrator</option>
                        <option>Regional Manager</option>
                        <option>Compliance Officer</option>
                        <option>Official Scout</option>
                    </select>
                </div>
                <div class="flex items-center gap-2">
                    <label
                        class="font-label text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Org:</label>
                    <select
                        class="bg-surface-container-lowest border-outline-variant/20 rounded-md font-body text-sm py-2 px-4 focus:ring-2 focus:ring-primary/20">
                        <option>All Organizations</option>
                        <option>Eastern Federation</option>
                        <option>National Board</option>
                        <option>West Coast Scouting</option>
                    </select>
                </div>
                <button
                    class="p-2.5 bg-surface-container-lowest border border-outline-variant/20 rounded-md text-on-surface-variant hover:bg-white transition-colors">
                    <span class="material-symbols-outlined">tune</span>
                </button>
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

            <div
                class="p-6 bg-primary-container text-on-primary-container rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="relative z-10">
                    <h5 class="font-headline text-xl font-bold">Audit History &amp; Export</h5>
                    <p class="text-on-primary-container/80 text-sm mt-1 max-w-lg">Generate a full CSV or PDF compliance
                        report of all user actions and registry changes for the current athletic season.</p>
                </div>
                <div class="flex gap-3 relative z-10">
                    <button
                        class="px-6 py-2.5 bg-on-primary text-primary rounded font-label font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">
                        Export as CSV
                    </button>
                    <button
                        class="px-6 py-2.5 border border-on-primary/30 text-on-primary rounded font-label font-bold text-sm hover:bg-on-primary/10 transition-all">
                        View Audit Log
                    </button>
                </div>
                {/* <!-- Abstract "Digital Diamond" background elements --> */}
                <div class="absolute -right-20 -top-20 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-20">
                </div>
                <div
                    class="absolute -left-10 -bottom-10 w-40 h-40 bg-on-primary-fixed-variant rounded-full blur-[60px] opacity-30">
                </div>
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
