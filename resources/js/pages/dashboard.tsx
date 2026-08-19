import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { dashboard } from '@/routes';
import WidgetCard from '@/components/ext/dashboard/widget-card';
import EventTimeline from '@/components/ext/dashboard/event-timeline';
import IndiaMap from '@/components/ext/dashboard/india-map';

export default function Dashboard({ states_data, stats, events }) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

                <section className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {stats.map((stat) => <WidgetCard
                        title={stat.label}
                        value={stat.value}
                    // change="+4.2% from last month" changeType="increase"

                    />)}


                </section>

                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div class="lg:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col gap-6">
                        <div class="flex justify-between items-end">
                            <div class="space-y-1">
                                <span class="text-xs font-label uppercase tracking-widest text-secondary font-bold">National Reach</span>
                                <h3 class="text-2xl font-black font-headline text-primary tracking-tighter uppercase">Activity by State
                                </h3>
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
                    <EventTimeline events={events} />
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
