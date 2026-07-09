import { ArrowRight, Calendar, Contact, MapPin } from "lucide-react";

export default function UpcomingTournament(){
    return (
            <div class="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                        <div class="relative h-48">
                            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                            <img class="w-full h-full object-cover" data-alt="A macro shot of a stack of new, professional baseballs in their original packaging, morning sunlight streaming through a window, clean athletic aesthetic, high-contrast details of the red stitching against white leather, professional sports photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjWpjfk5Xz8JOkYOtlVbS2vuFkfupQS69eHc9-2OTwW6NI0POnNu8FI6MBhiVDbeTubrr97Te4nKQX41K07gvwRSaARoRNRC8j6TwI81CuetJ8o3MSAFglfs4mO5DeMScSLwSczo1mc4DPO_rC81DPJucMtdj3KH00t6FTTqR8bNsJKcYQ6tSDas6AHPpjjPor4w0KGxfkfX8R_8JyDfD9xDsigAu6RPZos0-BZ6wwJ08mCogldse4cVTRXa4teoLTknObGAdiDWw8" />
                                <span class="absolute top-4 left-4 z-20 bg-secondary-fixed text-on-secondary-fixed-variant px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Registration Open</span>
                        </div>
                        <div class="p-6 space-y-4">
                            <div>

                                 <p class="text-on-surface-variant text-sm font-medium flex items-center gap-1 mt-1 mb-3">
                                    <Calendar className="h-5 text-base"/>
                                    May 24 - May 29, 2026
                                </p>

                                <h4 class="font-headline text-xl font-bold text-primary group-hover:text-secondary transition-colors">12th Baseball Federation Cup 2025 Men & Women</h4>
                                <p class="text-on-surface-variant text-sm font-medium flex items-center gap-1 mt-1">
                                    <Contact className="h-5 text-base"/>
                                    Maharashtra Baseball Association
                                </p>
                            </div>
                            <div class="flex justify-between items-center py-4 border-y border-outline-variant/20">
                                <div class="text-center w-full">
                                    <p class="text-[10px] font-bold text-on-surface-variant uppercase">Registered Teams</p>
                                    <div class="flex items-center justify-center gap-4 mt-2">
                                        <p class="text-xl font-black text-primary">18 / 24</p>
                                        <div class="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                                            <div class="bg-secondary h-full w-[75%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between pt-2">
                                <span class="flex items-center gap-1 text-on-surface-variant text-xs font-semibold">
                                     <MapPin className="h-5 text-base"/> Amaravati, MH
                                </span>
                                <button class="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                                    Manage Entries    <ArrowRight className="h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
    )

}