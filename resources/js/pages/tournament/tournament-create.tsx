import { Rocket } from "lucide-react";

export default function TournamentCreate() {
    return (
        < >
          
             
            <div class="flex flex-col lg:flex-row gap-10 max-w-5xl">
                {/* <!-- Left Column: Form Sections --> */}
                <div class="flex-1 space-y-10">
                    <section>
                        <h1 class="font-headline font-black text-4xl text-primary tracking-tight mb-2">Create New Tournament</h1>
                        <p class="text-on-surface-variant font-body">Initialize a new event. Ensure all data conforms to guidelines.</p>
                    </section>
                    <form class="space-y-12" id="tournamentForm">
                        {/* <!-- Section 1: Core Identity --> */}
                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-1 h-6 bg-secondary"></div>
                                <h2 class="font-headline font-bold text-xl uppercase tracking-wider">Tournament Identity</h2>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-2">
                                    <label class="font-label text-sm font-bold uppercase text-on-surface-variant">Tournament Name</label>
                                    <input class="w-full bg-surface-container-lowest border-none rounded-lg p-4 font-body shadow-sm form-input-focus placeholder:text-on-surface-variant/40" placeholder="e.g. Mid-Summer National Open" type="text" />
                                </div>
                                <div class="space-y-2">
                                    <label class="font-label text-sm font-bold uppercase text-on-surface-variant">Category</label>
                                    <select class="w-full bg-surface-container-lowest border-none rounded-lg p-4 font-body shadow-sm form-input-focus">
                                        <option>State Championship</option>
                                        <option>National Qualifier</option>
                                        <option>Invitational Elite</option>
                                        <option>Regional Open</option>
                                    </select>
                                </div>
                                <div class="space-y-2">
                                    <label class="font-label text-sm font-bold uppercase text-on-surface-variant">Primary Venue</label>
                                    <div class="relative">
                                        <input class="w-full bg-surface-container-lowest border-none rounded-lg p-4 pl-12 font-body shadow-sm form-input-focus" placeholder="Search venues..." type="text" />
                                        <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">location_on</span>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <label class="font-label text-sm font-bold uppercase text-on-surface-variant">Sanctioning ID</label>
                                    <input class="w-full bg-surface-container-low border-none rounded-lg p-4 font-mono text-sm text-primary/60 cursor-not-allowed" readonly="" type="text" value="FED-2024-AUTO" />
                                </div>
                            </div>
                        </div>
                        {/* <!-- Section 2: Timeline --> */}
                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-1 h-6 bg-secondary"></div>
                                <h2 class="font-headline font-bold text-xl uppercase tracking-wider">Event Timeline</h2>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 bg-surface-container-low p-8 rounded-xl">
                                <div class="space-y-4">
                                    <h3 class="font-label text-xs font-black uppercase text-secondary tracking-widest flex items-center gap-2">
                                        <span class="material-symbols-outlined text-sm">calendar_today</span> Tournament Dates
                                    </h3>
                                    <div class="flex items-center gap-4">
                                        <input class="flex-1 bg-surface-container-lowest border-none rounded-lg p-3 font-body shadow-sm form-input-focus" type="date" />
                                        <span class="text-on-surface-variant">to</span>
                                        <input class="flex-1 bg-surface-container-lowest border-none rounded-lg p-3 font-body shadow-sm form-input-focus" type="date" />
                                    </div>
                                </div>
                                <div class="space-y-4">
                                    <h3 class="font-label text-xs font-black uppercase text-secondary tracking-widest flex items-center gap-2">
                                        <span class="material-symbols-outlined text-sm">app_registration</span> Registration Window
                                    </h3>
                                    <div class="flex items-center gap-4">
                                        <input class="flex-1 bg-surface-container-lowest border-none rounded-lg p-3 font-body shadow-sm form-input-focus" type="date" />
                                        <span class="text-on-surface-variant">to</span>
                                        <input class="flex-1 bg-surface-container-lowest border-none rounded-lg p-3 font-body shadow-sm form-input-focus" type="date" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Section 3: Competition Structure --> */}
                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-1 h-6 bg-secondary"></div>
                                <h2 class="font-headline font-bold text-xl uppercase tracking-wider">Bracket &amp; Logic</h2>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <label class="relative group cursor-pointer">
                                    <input checked="" class="peer sr-only" name="bracket" type="radio" />
                                    <div class="h-full p-6 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all group-hover:bg-surface-container-high flex flex-col gap-3">
                                        <span class="material-symbols-outlined text-3xl text-primary">account_tree</span>
                                        <p class="font-bold text-primary">Single Knockout</p>
                                        <p class="text-xs text-on-surface-variant leading-relaxed">Lose once and the team is out. Fast-paced elimination format.</p>
                                    </div>
                                </label>
                                <label class="relative group cursor-pointer">
                                    <input class="peer sr-only" name="bracket" type="radio" />
                                    <div class="h-full p-6 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all group-hover:bg-surface-container-high flex flex-col gap-3">
                                        <span class="material-symbols-outlined text-3xl text-primary">groups</span>
                                        <p class="font-bold text-primary">Round Robin</p>
                                        <p class="text-xs text-on-surface-variant leading-relaxed">Every team plays every other team. Points-based advancement.</p>
                                    </div>
                                </label>
                                <label class="relative group cursor-pointer">
                                    <input class="peer sr-only" name="bracket" type="radio" />
                                    <div class="h-full p-6 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all group-hover:bg-surface-container-high flex flex-col gap-3">
                                        <span class="material-symbols-outlined text-3xl text-primary">layers</span>
                                        <p class="font-bold text-primary">Double Elimination</p>
                                        <p class="text-xs text-on-surface-variant leading-relaxed">Teams drop to a loser's bracket after one defeat. Two losses to exit.</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* <!-- Section 4: Prizes & Financials --> */}
                        <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-1 h-6 bg-secondary"></div>
                                <h2 class="font-headline font-bold text-xl uppercase tracking-wider">Prize Purse &amp; Rewards</h2>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <label class="font-label text-sm font-bold uppercase text-on-surface-variant">Grand Prize (1st Place)</label>
                                        <div class="relative">
                                            <span class="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary">$</span>
                                            <input class="w-full bg-surface-container-lowest border-none rounded-lg p-4 pl-10 font-mono shadow-sm form-input-focus" placeholder="5000" type="number" />
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="font-label text-sm font-bold uppercase text-on-surface-variant">Runner Up (2nd Place)</label>
                                        <div class="relative">
                                            <span class="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary">$</span>
                                            <input class="w-full bg-surface-container-lowest border-none rounded-lg p-4 pl-10 font-mono shadow-sm form-input-focus" placeholder="2500" type="number" />
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-primary/5 rounded-xl p-6 border border-primary/10 flex flex-col justify-center">
                                    <div class="flex items-center gap-3 mb-4">
                                        <span class="material-symbols-outlined text-primary"
                                        //  style="font-variation-settings: 'FILL' 1;"
                                        >workspace_premium</span>
                                        <h3 class="font-bold text-primary">Additional Perks</h3>
                                    </div>
                                    <div class="space-y-3">
                                        <label class="flex items-center gap-3 cursor-pointer">
                                            <input class="rounded border-outline text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                                            <span class="text-sm font-medium">Automatic Regional Seed</span>
                                        </label>
                                        <label class="flex items-center gap-3 cursor-pointer">
                                            <input class="rounded border-outline text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                                            <span class="text-sm font-medium">Custom Trophy &amp; Medals</span>
                                        </label>
                                        <label class="flex items-center gap-3 cursor-pointer">
                                            <input class="rounded border-outline text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                                            <span class="text-sm font-medium">Player of the Month Nomination</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Submit Actions --> */}
                        <div class="pt-10 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-outline-variant/30">
                            <button class="w-full sm:w-auto px-8 py-4 font-bold text-primary hover:bg-surface-container-low rounded transition-all" type="button">Save as Draft</button>
                            <button class="w-full sm:w-auto px-10 py-4 font-bold bg-primary text-white rounded shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit">
                                <span>Publish Tournament</span>
                                <Rocket />
                               
                            </button>
                        </div>
                    </form>
                </div>
                {/* <!-- Right Column: Contextual Card & Map --> */}
            
            </div>
        </>
    )
}