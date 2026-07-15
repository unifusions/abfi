import LinkButton from "@/components/ext/link-button"
import { compliance, dashboard } from "@/routes"
import { create } from "@/routes/compliance/users"
import { Group, User, UserPlus, Users } from "lucide-react"

export default function UserIndex(
    {roles, organizations}
){
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
                class="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-primary text-on-primary">
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
                      
                        <tr class="hover:bg-surface-container transition-colors group">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-surface-variant flex-shrink-0 overflow-hidden border-2 border-surface shadow-sm">
                                        <img class="w-full h-full object-cover"
                                            data-alt="A professional headshot of a male sports official in a clean white background, wearing a modern charcoal grey uniform. High-performance athletic lighting and a clean, sharp aesthetic that matches the Diamond Registry's professional and authoritative atmosphere."
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9zqTiBlrxORYmwO-cnJudUf3ePqQAncSbRGVU8NxxDkxGxDxzJA3Kjym62w0VwvaYWu3Vv63jbwKI6dnKWVw3ua4tDxA7FZHCcrIOV4BuxlSLmaOGWJT0sTb5oW459XOiHHiMawTyIyCtMtu_wK8KHLFV3bek3NoOCJMTzQLozzuQDfzbgEXYv6iVu_2r-n5DxU5bi7ApnIY86Uz5JLaDnCwWICtpOtXRv1c6G_LVyqlj2gbUrPdUPQ" />
                                    </div>
                                    <div>
                                        <p class="font-label font-bold text-primary">Marcus Thorne</p>
                                        <p class="text-[10px] text-on-surface-variant font-body">ID: DR-99210</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 font-body text-sm text-on-surface-variant">m.thorne@federation.org</td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-2 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold rounded-full uppercase tracking-tighter">Administrator</span>
                            </td>
                            <td class="px-6 py-4 font-body text-sm text-on-surface-variant">National Board</td>
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
                    
                        <tr class="hover:bg-surface-container transition-colors group">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-surface-variant flex-shrink-0 overflow-hidden border-2 border-surface shadow-sm">
                                        <img class="w-full h-full object-cover"
                                            data-alt="Professional profile picture of a senior male executive in sports management, wearing a premium light blue dress shirt. The setting is high-key and modern with subtle architectural lines in the background. The mood is authoritative yet accessible, using the Diamond Registry color palette."
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkoGkNM__xzPZYsyQchbPy4BDYiutVYPJrglM4QthP_41XYiqwJkbVHvSZDcijiboEv1xJiTdZyvD9kkEOgVfSOo45aaqyGSVpkZ4raX7Tb-CH3G8QCY0lVdwy5vgvHjRe8BPfx7vOu8dBYQ9MHctItOT4Ok6n3CwhQTWYsojT8x_PZ5Fmzgh0_U_3nCgE4BstCCFc5Ev4JrexztYKXe5rxmRSGCgiMmt67JAjI_Tlekkv7RtX6wGMQw" />
                                    </div>
                                    <div>
                                        <p class="font-label font-bold text-primary">Dr. Julian Vance</p>
                                        <p class="text-[10px] text-on-surface-variant font-body">ID: DR-98401</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 font-body text-sm text-on-surface-variant">j.vance@nationals.org</td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-2 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-tighter">Compliance
                                    Officer</span>
                            </td>
                            <td class="px-6 py-4 font-body text-sm text-on-surface-variant">National Board</td>
                            <td class="px-6 py-4 text-center">
                                <span
                                    class="px-2 py-1 bg-outline-variant/20 text-on-surface-variant text-[10px] font-black rounded-full uppercase">Inactive</span>
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
                         
                        <tr class="bg-surface-container-low hover:bg-surface-container transition-colors group">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-surface-variant flex-shrink-0 overflow-hidden border-2 border-surface shadow-sm">
                                        <img class="w-full h-full object-cover"
                                            data-alt="A portrait of a young athletic scout, male, wearing a red performance jacket with federation logos. The lighting is vibrant and energetic, against a blurred athletic stadium background. The style is athletic editorial, emphasizing precision and high performance."
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeEbLh0Wi7ZZR4-4gyAwKf1Sav4k87FqEWisgjt2VlcyGe1rv0g0R372WltfqAfwJxtsUry0upd4-5NjX-atJFM64pUEI7mRxHEYhtbIP98lnxORgY5IXGY8LFU4RUKcXr9Za-KwiqizlT0ZOBGwJN-HHSCza3dfzh7TPYsc5gdiG2QYyguGKZC9jZrIoLZN6qtDDQO3RbnllEDKqKL9iVWLGVCqBtKgffjKQPmKPvm-2HI3QUbZAWhQ" />
                                    </div>
                                    <div>
                                        <p class="font-label font-bold text-primary">Sam Wu</p>
                                        <p class="text-[10px] text-on-surface-variant font-body">ID: DR-99442</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 font-body text-sm text-on-surface-variant">s.wu@westcoastscouts.com
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed-variant text-[10px] font-bold rounded-full uppercase tracking-tighter">Official
                                    Scout</span>
                            </td>
                            <td class="px-6 py-4 font-body text-sm text-on-surface-variant">West Coast Scouting</td>
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
                      
                        <tr class="hover:bg-surface-container transition-colors group">
                            <td class="px-6 py-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-surface-variant flex-shrink-0 overflow-hidden border-2 border-surface shadow-sm">
                                        <img class="w-full h-full object-cover"
                                            data-alt="A high-key professional portrait of a senior female compliance officer with glasses, wearing a sharp grey suit. The background is a minimalist light-filled gallery. The overall mood is serious and authoritative, reflecting the premium administrative athlete brand identity."
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByMvI28SMR_ucslvYhVuqR-6p5FCVOnBGqYcZcOynlKD4WERpX75O8rHinPbAuw-jdEAscyiKI0GkF3EMS_smnLrUHPDDBa4TPnSDzgLx70skzEhTeBekaDsdKkBaGMwjNbTREZ3jwS4XcYwfAD9eFsuUdbzWfSiR6YNx_ww7f_4lj1eIkI2UHwwRqYgIbUC3C9uOU4cRhXQxngzk-O1J21BisXmBFp5we6CZzd2Ds9KMMbKniwIityQ" />
                                    </div>
                                    <div>
                                        <p class="font-label font-bold text-primary">Sarah Jenkins</p>
                                        <p class="text-[10px] text-on-surface-variant font-body">ID: DR-97120</p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 font-body text-sm text-on-surface-variant">s.jenkins@federation.org
                            </td>
                            <td class="px-6 py-4">
                                <span
                                    class="px-2 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full uppercase tracking-tighter">Compliance
                                    Officer</span>
                            </td>
                            <td class="px-6 py-4 font-body text-sm text-on-surface-variant">National Board</td>
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
                    </tbody>
                </table>
                 
                <div class="bg-surface-container-low px-6 py-4 flex items-center justify-between">
                    <p class="font-body text-xs text-on-surface-variant">Showing <span
                            class="font-bold text-primary">1-5</span> of 1,248 entries</p>
                    <div class="flex items-center gap-2">
                        <button
                            class="p-1 text-on-surface-variant hover:bg-surface-container-high rounded opacity-50 cursor-not-allowed">
                            <span class="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button class="px-3 py-1 bg-primary text-on-primary text-xs font-bold rounded">1</button>
                        <button
                            class="px-3 py-1 hover:bg-surface-container-high text-xs font-bold rounded transition-colors">2</button>
                        <button
                            class="px-3 py-1 hover:bg-surface-container-high text-xs font-bold rounded transition-colors">3</button>
                        <span class="text-on-surface-variant px-1">...</span>
                        <button
                            class="px-3 py-1 hover:bg-surface-container-high text-xs font-bold rounded transition-colors">250</button>
                        <button
                            class="p-1 text-on-surface-variant hover:bg-surface-container-high rounded transition-all">
                            <span class="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
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