import { Grip, GripVertical } from "lucide-react";

export default function CompetitionPool({ pool, teams }) {
    return (
        <div
            class="pool-card bg-surface-container-lowest rounded-xl shadow-[0_8px_16px_-4px_rgba(0,0,0,0.05)] border-t-4 border-primary p-5 group">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h4 class="font-headline font-black text-primary text-xl">POOL {pool}</h4>
                    <span class="text-label-sm font-label uppercase tracking-widest text-secondary font-bold">8
                        Teams Assigned</span>
                </div>
                <button
                    class="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-surface-container rounded-full">
                <GripVertical />
                    <span class="material-symbols-outlined text-on-surface-variant"></span>
                </button>
            </div>


            <div class="space-y-2">

                {teams.map((team) => <div
                    class="team-chip flex items-center justify-between p-3 bg-surface-container-low rounded-lg border border-transparent hover:border-primary-fixed cursor-move">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-6 h-4 bg-primary/10 rounded-sm overflow-hidden flex items-center justify-center">
                            <img class="w-full h-full object-cover"
                                data-alt="A small, minimalist vector graphic representing the state flag of Maharashtra, India, with saffron and blue elements. Simple, clean, high-contrast athletic style."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3cwU2tskNa6nu5CnSjcxItP3BO81-Bic-j-3f6qGhatPx2ORQDYoJzW4LDVb-Mh0wr1fwRumI02qXmw-5-ivv1CPjCvsvaI-MLCXuzwmD_cMXOYv_KPfBktucJ64mRmvHuQK1YlPuBVgkuzPMi5WHa7cQULDmNxFgoCL9IZ4gsMs0wCr_M_I7pA01IqAnnr1pJCahf_ROKyZGSWj9zLZFmSQ8B0NY6NY1gaLjMvqS7e3lEhw0JXgW9Q" />
                        </div>
                        <span class="text-label-md font-medium">{team}</span>
                    </div>
                    <Grip className="h-3 text-secondary/40" />

                </div>

                )}

               
                
                <button
                    class="w-full py-2 border-2 border-dashed border-outline-variant rounded-lg text-label-sm text-on-surface-variant/60 hover:border-secondary hover:text-secondary transition-all">
                    + Add Team
                </button>
            </div>
        </div>
    )
}