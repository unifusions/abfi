import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import WidgetCard from '@/components/ext/dashboard/widget-card';
import EventTimeline from '@/components/ext/dashboard/event-timeline';
import IndiaMap from '@/components/ext/dashboard/india-map';

export default function Dashboard({ states_data}) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <WidgetCard
                        title="Total Teams" value="12,482" change="+4.2% from last month" changeType="increase" />


                    <WidgetCard
                        title="Active
                                Tournaments" value="86" change=" 14 Championship Finals Today" changeType="decrease" />

                    <WidgetCard
                        title="Pending Roster Approvals" value="312" change="Average response: 4.2h" changeType="decrease" />




                </section>

                <section class="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div class="lg:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col gap-6">
                        <div class="flex justify-between items-end">
                            <div class="space-y-1">
                                <span class="text-xs font-label uppercase tracking-widest text-secondary font-bold">National Reach</span>
                                <h3 class="text-2xl font-black font-headline text-primary tracking-tighter uppercase">Activity by State
                                </h3>
                            </div>
                            <div class="flex gap-2">
                                <span
                                    class="flex items-center gap-1 text-[10px] font-label font-bold text-on-surface-variant uppercase"><span
                                        class="w-2 h-2 rounded-full bg-primary-container"></span> High</span>
                                <span
                                    class="flex items-center gap-1 text-[10px] font-label font-bold text-on-surface-variant uppercase"><span
                                        class="w-2 h-2 rounded-full bg-primary/40"></span> Low</span>
                            </div>
                        </div>
                        <div
                            class="relative w-full  bg-white rounded-lg   border border-outline-variant/15 flex items-center justify-center">
                           <IndiaMap className="w-fit" stateInfo={states_data} />
                            {/* <div
                                class="absolute top-4 right-4 bg-white/90 backdrop-blur p-4 rounded-lg shadow-sm border border-slate-100 space-y-3">
                                <div class="space-y-0.5">
                                    <p class="text-[10px] font-label text-slate-500 uppercase tracking-tighter">Top State</p>
                                    <p class="text-sm font-bold text-primary font-headline">Texas</p>
                                </div>
                                <div class="space-y-0.5">
                                    <p class="text-[10px] font-label text-slate-500 uppercase tracking-tighter">Growth Leader</p>
                                    <p class="text-sm font-bold text-secondary font-headline">Florida</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                <EventTimeline />
                </section>

                <section class="bg-surface-container-lowest shadow-[0_16px_32px_-12px_rgba(0,0,0,0.04)] overflow-hidden">
                    <div class="px-8 py-6 border-b border-outline-variant/15 flex justify-between items-center">
                        <div class="space-y-1">
                            <span class="text-xs font-label uppercase tracking-widest text-secondary font-bold">Live Stream</span>
                            <h3 class="text-2xl font-black font-headline text-primary tracking-tighter uppercase">Tournament
                                Registrations</h3>
                        </div>
                        <div class="flex gap-2">
                            <button
                                class="px-4 py-2 bg-slate-100 text-primary font-label font-bold text-[10px] uppercase tracking-widest rounded-md hover:bg-slate-200 transition-colors">Filter</button>
                            <button
                                class="px-4 py-2 bg-slate-100 text-primary font-label font-bold text-[10px] uppercase tracking-widest rounded-md hover:bg-slate-200 transition-colors">View
                                All</button>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead class="bg-primary text-white">
                                <tr>
                                    <th class="px-8 py-4 text-[10px] font-label font-bold uppercase tracking-[0.2em]">Tournament ID</th>
                                    <th class="px-8 py-4 text-[10px] font-label font-bold uppercase tracking-[0.2em]">Event Name</th>
                                    <th class="px-8 py-4 text-[10px] font-label font-bold uppercase tracking-[0.2em]">Region</th>
                                    <th class="px-8 py-4 text-[10px] font-label font-bold uppercase tracking-[0.2em]">Division</th>
                                    <th class="px-8 py-4 text-[10px] font-label font-bold uppercase tracking-[0.2em]">Team Count</th>
                                    <th class="px-8 py-4 text-[10px] font-label font-bold uppercase tracking-[0.2em]">Status</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-outline-variant/10">
                                <tr class="bg-surface-container-low hover:bg-white transition-colors cursor-pointer">
                                    <td class="px-8 py-5 text-sm font-bold text-on-surface-variant font-body">#T-9921</td>
                                    <td class="px-8 py-5 text-sm font-bold text-primary font-headline">Lone Star Classic</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">Southwest</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">Varsity</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">32 / 32</td>
                                    <td class="px-8 py-5">
                                        <span
                                            class="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-primary-fixed text-on-primary-fixed">Registered</span>
                                    </td>
                                </tr>
                                <tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
                                    <td class="px-8 py-5 text-sm font-bold text-on-surface-variant font-body">#T-9922</td>
                                    <td class="px-8 py-5 text-sm font-bold text-primary font-headline">Pacific Open</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">West</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">U-14</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">12 / 16</td>
                                    <td class="px-8 py-5">
                                        <span
                                            class="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-surface-variant text-on-surface-variant">Pending</span>
                                    </td>
                                </tr>
                                <tr class="bg-surface-container-low hover:bg-white transition-colors cursor-pointer">
                                    <td class="px-8 py-5 text-sm font-bold text-on-surface-variant font-body">#T-9923</td>
                                    <td class="px-8 py-5 text-sm font-bold text-primary font-headline">Iron Horse Invitational</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">Northeast</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">Collegiate</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">08 / 16</td>
                                    <td class="px-8 py-5">
                                        <span
                                            class="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-secondary-fixed text-on-secondary-fixed-variant">Urgent</span>
                                    </td>
                                </tr>
                                <tr class="hover:bg-surface-container-low transition-colors cursor-pointer">
                                    <td class="px-8 py-5 text-sm font-bold text-on-surface-variant font-body">#T-9924</td>
                                    <td class="px-8 py-5 text-sm font-bold text-primary font-headline">Blue Ridge Bash</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">Southeast</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">U-10</td>
                                    <td class="px-8 py-5 text-sm text-on-surface-variant font-body">24 / 24</td>
                                    <td class="px-8 py-5">
                                        <span
                                            class="px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter bg-primary-fixed text-on-primary-fixed">Registered</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

         
        </>
    );
}

// Dashboard.layout = {
//     breadcrumbs: [
//         {
//             title: 'Dashboard',
//             href: dashboard(),
//         },
//     ],
// };
