import PageHeader from "@/components/ext/page-header";

export default function RosterShow({ roster }) {
    return (
        <>
            <PageHeader
                title={`Roster Detail : ${roster?.name}`}
                subText=""
            >
                <div
                    className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-black uppercase tracking-tighter flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Active
                </div>
            </PageHeader>

            <div className="grid grid-cols-3 gap-6 mb-10">
                <div
                    class="bg-surface-container-lowest p-6 flex items-center justify-between relative overflow-hidden group">
                    <div class="absolute left-0 top-0 h-full w-1 bg-primary"></div>
                    <div>
                        <p
                            class="text-[10px] font-label font-black text-on-surface-variant/60 uppercase tracking-[0.2em] mb-1">
                            Total Players</p>
                        <h3 class="text-3xl font-headline font-extrabold text-on-surface">18<span
                            class="text-on-surface-variant/30 text-xl">/25</span></h3>
                    </div>
                    <span
                        class="material-symbols-outlined text-surface-container-high text-5xl group-hover:text-primary-fixed transition-colors duration-500">sports_baseball</span>
                </div>
                <div
                    class="bg-surface-container-lowest p-6 flex items-center justify-between relative overflow-hidden group">
                    <div class="absolute left-0 top-0 h-full w-1 bg-secondary"></div>
                    <div>
                        <p
                            class="text-[10px] font-label font-black text-on-surface-variant/60 uppercase tracking-[0.2em] mb-1">
                            Staff Count</p>
                        <h3 class="text-3xl font-headline font-extrabold text-on-surface">3<span
                            class="text-on-surface-variant/30 text-xl">/4</span></h3>
                    </div>
                    <span
                        class="material-symbols-outlined text-surface-container-high text-5xl group-hover:text-secondary-fixed transition-colors duration-500">badge</span>
                </div>
                <div
                    class="bg-surface-container-lowest p-6 flex items-center justify-between relative overflow-hidden group">
                    <div class="absolute left-0 top-0 h-full w-1 bg-primary"></div>
                    <div>
                        <p
                            class="text-[10px] font-label font-black text-on-surface-variant/60 uppercase tracking-[0.2em] mb-1">
                            Compliance Status</p>
                        <h3 class="text-3xl font-headline font-extrabold text-on-surface">100%<span
                            class="text-on-surface-variant/30 text-xl ml-2 text-sm font-label uppercase tracking-widest">Verified</span>
                        </h3>
                    </div>
                    <span
                        class="material-symbols-outlined text-surface-container-high text-5xl group-hover:text-primary-fixed transition-colors duration-500">verified</span>
                </div>
            </div>


            <div className="grid grid-cols-12 gap-8 items-start">

                <div className="col-span-8 space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
                        <h2 className="font-headline font-bold text-xl text-primary">Active Player Roster</h2>
                        <div className="flex gap-2">
                            <span
                                className="px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Infield</span>
                            <span
                                className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] font-medium text-on-surface-variant/60 uppercase tracking-widest">Outfield</span>
                            <span
                                className="px-3 py-1 bg-surface-container-low rounded-full text-[10px] font-medium text-on-surface-variant/60 uppercase tracking-widest">Pitchers</span>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">

                        <div
                            class="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
                            <div
                                class="w-16 h-16 rounded-lg bg-surface-variant overflow-hidden flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500">
                                <img class="w-full h-full object-cover"
                                    data-alt="A close-up portrait of a young professional athlete in a blue baseball jersey, high-key studio lighting, athletic aesthetic, minimal background, consistent with a clean sports registry UI."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtW_uQ9Zj_RyxJHxXeJX6rltUKvWPGtCUSIe5y0BYBPs6qokh5EPwBWmP9kF0JwXrvKuvqpxuEKreob_95SolizwcOJcn4OeBFEmaMT0v7PAW8zQ1I78egyxoIuUlONi3HGTn0CvcUSWqe3PrCcVaX6ibxSbKUoWMrfZlgAu_-z1AACuA-Wr8BulBcZCoswS6Iv8h0gIbNey-WRpZut42_lZa3i-UW0iEvQLGsAAswiUn5Q3zamz0zUQ" />
                            </div>
                            <div class="flex-1">
                                <div class="flex items-center justify-between">
                                    <h4 class="font-headline font-bold text-on-surface">Aditya Varma</h4>
                                    <span class="material-symbols-outlined text-primary text-lg"
                                    >verified</span>
                                </div>
                                <div class="text-xs font-medium text-on-surface-variant mt-0.5">Starting Pitcher (P)
                                </div>
                                <div class="mt-2 flex items-center gap-3">
                                    <span class="text-[10px] text-on-surface-variant/60 font-black uppercase">Age:
                                        24</span>
                                    <span class="text-[10px] text-on-surface-variant/60 font-black uppercase">DOB:
                                        12/04/1999</span>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

                <div class="col-span-4 space-y-6">

                    <div class="bg-surface-container-lowest p-6 rounded-lg shadow-sm border-l-4 border-secondary">
                        <h3
                            class="font-headline font-black text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4">
                            Official Staff</h3>
                        <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <span class="material-symbols-outlined text-secondary mt-0.5">person_celebrate</span>
                                <div>
                                    <p class="font-headline font-bold text-sm text-on-surface leading-tight">Vikram
                                        Singh</p>
                                    <p class="text-[10px] font-label font-bold text-on-surface-variant/60 uppercase">
                                        Head Coach</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="material-symbols-outlined text-secondary mt-0.5">assignment_ind</span>
                                <div>
                                    <p class="font-headline font-bold text-sm text-on-surface leading-tight">Anjali
                                        Gupta</p>
                                    <p class="text-[10px] font-label font-bold text-on-surface-variant/60 uppercase">
                                        General Manager</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <span class="material-symbols-outlined text-secondary mt-0.5">sports</span>
                                <div>
                                    <p class="font-headline font-bold text-sm text-on-surface leading-tight">Rahul
                                        Dravid</p>
                                    <p class="text-[10px] font-label font-bold text-on-surface-variant/60 uppercase">
                                        Assistant Coach</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-primary text-on-primary p-6 rounded-lg relative overflow-hidden">
                        <div class="absolute top-[-20%] right-[-10%] opacity-10 rotate-12 scale-150">
                            <span class="material-symbols-outlined text-[120px]">emoji_events</span>
                        </div>
                        <h3 class="font-headline font-black text-xs uppercase tracking-[0.2em] text-on-primary/60 mb-4">
                            Tournament Event</h3>
                        <div class="space-y-3 relative z-10">
                            <div>
                                <p class="text-on-primary/70 text-[10px] font-label uppercase">Competition</p>
                                <p class="font-headline font-bold text-base leading-tight">National Summer Invitational
                                    2024</p>
                            </div>
                            <div class="flex justify-between items-end">
                                <div>
                                    <p class="text-on-primary/70 text-[10px] font-label uppercase">Division</p>
                                    <p class="font-headline font-bold text-sm">Under-25 Open</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-on-primary/70 text-[10px] font-label uppercase">Dates</p>
                                    <p class="font-headline font-bold text-sm">July 15 - 28</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-surface-container-low p-6 rounded-lg">
                        <h3
                            class="font-headline font-black text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4">
                            Activity Log</h3>
                        <div class="space-y-4">
                            <div class="flex gap-3">
                                <div class="w-[1px] bg-outline-variant relative">
                                    <div class="absolute top-0 left-[-3px] w-1.5 h-1.5 rounded-full bg-primary"></div>
                                </div>
                                <div>
                                    <p class="text-xs font-bold text-on-surface">Roster Finalized</p>
                                    <p class="text-[10px] text-on-surface-variant/60 font-medium">Jun 12, 2024 • 09:42
                                        AM</p>
                                    <p class="text-[10px] text-primary font-bold mt-1 uppercase">Authored by A. Deshmukh
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-3">
                                <div class="w-[1px] bg-outline-variant relative">
                                    <div class="absolute top-0 left-[-3px] w-1.5 h-1.5 rounded-full bg-outline"></div>
                                </div>
                                <div>
                                    <p class="text-xs font-medium text-on-surface-variant">Player Eligibility Verified
                                    </p>
                                    <p class="text-[10px] text-on-surface-variant/60 font-medium">Jun 10, 2024 • 14:15
                                        PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}