import EligibilityCard from "@/components/ext/player/eligibility-card";
import ParticipationHistory from "@/components/ext/player/participation-history";
import PerformanceMetrics from "@/components/ext/player/performance-metrics";
import PersonalInformation from "@/components/ext/player/personal-information";
import { BadgeCheck, EllipsisVertical, Fingerprint, Mars, Pencil, Venus } from "lucide-react";

export default function PlayerView() {
    return (
        <>

            {/* <!-- Athlete Header Canvas --> */}
            <div class="p-8 space-y-8 max-w-7xl mx-auto w-full">
                {/* <!-- High-Fidelity Athlete Header --> */}
                <section class="relative overflow-hidden rounded-xl bg-primary text-white">
                    <div class="absolute inset-0 opacity-10 pointer-events-none">
                        <div class="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
                        <div class="w-full h-full"
                        // style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;"
                        >

                        </div>
                    </div>
                    <div class="relative z-20 flex flex-col md:flex-row items-end p-8 md:p-12 space-y-6 md:space-y-0 md:space-x-10">
                        <div class="w-48 h-48 rounded-xl border-4 border-on-primary/20 shadow-2xl overflow-hidden shrink-0 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img class="w-full h-full object-cover" 
                            data-alt="A heroic and dramatic portrait of a teenage baseball athlete wearing a clean white and navy blue uniform, staring confidently into the camera. The background is a soft-focus professional baseball diamond at dusk, with stadium lights creating a subtle bokeh effect. The lighting is high-contrast, emphasizing the athletic build and professional tone, with a color palette of navy blue, white, and stadium green." 
                            src="/images/player-example.jpg" />
                        </div>
                        <div class="flex-1 space-y-2">
                            <div class="inline-flex items-center space-x-2 bg-secondary px-3 py-1 rounded-full mb-2">
                                <BadgeCheck />
                                <span class="font-label text-[10px] font-bold uppercase tracking-widest">Federation Verified</span>
                            </div>
                            <h2 class="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase italic leading-none">
                                A.B. ANU REEMA
                                </h2>
                            <div class="flex flex-wrap gap-4 items-center font-label text-sm text-primary-fixed space-y-2">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-2">  
                                    <div className="flex gap-2 items-center">
                                        <Fingerprint className="h-5 " /> ID: TNPLY242F
                                    </div>
                                    <div className="flex gap-2 items-center"> <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        <span>OUT FIELD</span></div>


                                    <div className="flex gap-2 items-center">
                                      <Venus className="h-4 mr-2" /> Female 
                                        </div>

                                    <div  className="flex gap-2 items-center">
                                        <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                         
                                            Tamil Nadu</div>

                                </div>


                            </div>

                        </div>
                        <div className="shrink-0 flex space-x-3 pb-2">
                            <button className=" bg-white text-primary px-6 py-2.5 gap-2 rounded font-bold font-headline text-sm uppercase tracking-wider flex items-center transition-all hover:bg-secondary hover:text-white">
                                <Pencil className="h-5" /> Edit Profile
                            </button>
                            <button className="bg-transparent border border-white text-on-primary px-4 py-2.5 rounded transition-all hover:bg-on-primary/10">
                                <EllipsisVertical />
                            </button>
                        </div>
                    </div>
                </section>
                {/* <!-- Bento Grid Layout --> */}
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* <!-- Performance Metrics (Primary Column) --> */}

                    <div className="md:col-span-4 space-y-8">
                        <EligibilityCard />
                    </div>


                    <div className="col-span-8 space-y-8">
                        <PersonalInformation />
                    </div>
                    <div className="md:col-span-8 space-y-8">
                    </div>
                    <div class="md:col-span-8 space-y-8">
                        <PerformanceMetrics />
                        {/* <!-- Participation History (Stat-Sheet Style) --> */}
                        <ParticipationHistory />
                    </div>
                    {/* <!-- Secondary Column (Eligibility & Documents) --> */}
                    <div class="md:col-span-4 space-y-8">
                        {/* <!-- Eligibility Card --> */}

                        {/* <!-- Documents Tab / Section --> */}

                        <div class="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="font-headline font-bold text-xl uppercase tracking-tight">Documents</h3>
                                <button class="text-secondary font-label text-[10px] font-black uppercase tracking-widest hover:underline">Manage All</button>
                            </div>
                            <div class="space-y-4">
                                <div class="p-4 rounded-lg bg-surface-container-low flex items-center group cursor-pointer hover:bg-surface-variant transition-colors">
                                    <div class="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary mr-4">
                                        <span class="material-symbols-outlined">description</span>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-xs font-bold text-on-surface">Birth_Certificate.pdf</p>
                                        <p class="text-[9px] text-on-surface-variant font-label uppercase">Verified 12 Feb 2024</p>
                                    </div>
                                    <span class="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">download</span>
                                </div>
                                <div class="p-4 rounded-lg bg-surface-container-low flex items-center group cursor-pointer hover:bg-surface-variant transition-colors">
                                    <div class="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary mr-4">
                                        <span class="material-symbols-outlined">draw</span>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-xs font-bold text-on-surface">Participation_Waiver.pdf</p>
                                        <p class="text-[9px] text-on-surface-variant font-label uppercase">Signed by Guardian</p>
                                    </div>
                                    <span class="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">download</span>
                                </div>
                                <div class="p-4 rounded-lg bg-surface-container-low flex items-center group cursor-pointer hover:bg-surface-variant transition-colors">
                                    <div class="w-10 h-10 rounded bg-primary-fixed flex items-center justify-center text-primary mr-4">
                                        <span class="material-symbols-outlined">health_metrics</span>
                                    </div>
                                    <div class="flex-1">
                                        <p class="text-xs font-bold text-on-surface">Physician_Auth.pdf</p>
                                        <p class="text-[9px] text-on-surface-variant font-label uppercase">Exp: Jan 2025</p>
                                    </div>
                                    <span class="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">download</span>
                                </div>
                            </div>
                            <button class="w-full mt-6 py-3 border-2 border-dashed border-outline-variant rounded-lg flex items-center justify-center space-x-2 text-on-surface-variant hover:bg-surface-container-low transition-colors">
                                <span class="material-symbols-outlined text-sm">upload</span>
                                <span class="text-xs font-bold font-label uppercase tracking-widest">Upload New</span>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
            {/* <!-- Footer (from JSON) --> */}
            <footer class="mt-auto h-16 flex justify-between items-center px-8 w-full bg-surface border-t border-surface-container/50">
                <p class="font-label text-xs text-on-surface-variant opacity-80">© 2024 National Baseball Federation. All Rights Reserved.</p>
                <div class="flex space-x-6">
                    <a class="font-label text-xs text-on-surface-variant hover:text-secondary transition-opacity" href="#">Privacy Policy</a>
                    <a class="font-label text-xs text-on-surface-variant hover:text-secondary transition-opacity" href="#">Terms of Service</a>
                    <a class="font-label text-xs text-on-surface-variant hover:text-secondary transition-opacity" href="#">API Documentation</a>
                </div>
            </footer>
        </>
    )
}