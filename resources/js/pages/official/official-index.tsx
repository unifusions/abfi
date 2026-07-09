import LinkButton from "@/components/ext/link-button";
import OfficialList from "@/components/ext/official/official-list";
import PageHeader from "@/components/ext/page-header";
import { dashboard } from "@/routes";
import officials, { create } from "@/routes/officials";
import { UserRoundPlus, Users } from "lucide-react";

export default function OfficialIndex() {
    return (

        < >
            <PageHeader title="Official Directory"

                belowPillIcon={Users}
                belowPill="1284 Active Records"



            >
 
                <LinkButton href={create()}

                    icon={UserRoundPlus}
                    class="bg-primary   px-8 py-4 rounded-xl flex items-center gap-3 hover:shadow-lg transition-all active:scale-95 group">


                    Register New Official
                </LinkButton>
            </PageHeader>
            

            {/* <!-- Robust Filter Bar --> */}
            <div class="bg-surface-container-lowest p-5 rounded-2xl shadow-sm mb-6 flex flex-wrap items-center gap-6 border-outline-variant/10 border">
                <div class="flex-1 min-w-[200px]">
                    <label class="font-label text-xs uppercase font-bold text-on-surface-variant mb-2 block">State / Region</label>
                    <div class="relative">
                        <select class="w-full bg-surface-container-low border-none rounded-lg py-2.5 px-4 font-body text-body-md appearance-none focus:ring-2 focus:ring-primary/20">
                            <option>All States</option>
                            <option>California</option>
                            <option>New York</option>
                            <option>Maharashtra</option>
                            <option>Delhi</option>
                            <option>Karnataka</option>
                        </select>
                        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                    </div>
                </div>
                <div class="flex-1 min-w-[200px]">
                    <label class="font-label text-xs uppercase font-bold text-on-surface-variant mb-2 block">Category</label>
                    <div class="relative">
                        <select class="w-full bg-surface-container-low border-none rounded-lg py-2.5 px-4 font-body text-body-md appearance-none focus:ring-2 focus:ring-primary/20">
                            <option>All Categories</option>
                            <option>Umpire</option>
                            <option>Coach</option>
                            <option>Manager</option>
                            <option>Technical Director</option>
                        </select>
                        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                    </div>
                </div>
                <div class="flex-1 min-w-[200px]">
                    <label class="font-label text-xs uppercase font-bold text-on-surface-variant mb-2 block">Age Range</label>
                    <div class="relative">
                        <select class="w-full bg-surface-container-low border-none rounded-lg py-2.5 px-4 font-body text-body-md appearance-none focus:ring-2 focus:ring-primary/20">
                            <option>Any Age</option>
                            <option>20-30</option>
                            <option>31-40</option>
                            <option>41-50</option>
                            <option>51+</option>
                        </select>
                        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                    </div>
                </div>
                <div class="flex items-end h-full">
                    <button class="bg-surface-variant/50 text-primary px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 hover:bg-surface-variant transition-colors border-outline-variant/20 border">
                        <span class="material-symbols-outlined text-sm">filter_list</span>
                        Clear Filters
                    </button>
                </div>
            </div>


            <OfficialList />

        </>
    )
}

OfficialIndex.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard()
        }
        ,
        {
            title: "Official's Directory",
            href: officials.index.url()
        },
        
    ],
};