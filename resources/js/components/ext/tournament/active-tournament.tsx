import { ArrowRight, Calendar, Contact, MapPin } from "lucide-react";

export default function ActiveTournament(){
    return (
             <div class="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                        <div class="relative h-48">
                            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                            <img class="w-full h-full object-cover" data-alt="High-action wide angle shot of a pristine professional baseball diamond at dusk, stadium lights beginning to glow, lush green grass, crisp white chalk lines, cinematic atmosphere with a deep navy and vibrant red color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtcO12o3W1J4TLZIyAix5ctRU5ZYAlrki_LRQ1dTIyveovb6TEWaB4XvqjlcxucFbWYHXMvfXMvcmQrWO-zFnSmdV2BKYDAnMl2w63BQft6d9V0qICMZ9ZMuoqpAUtp51sEwroHEFSFQxc3LOV-Q5tOhMTNxMxpNJw00zC-5LWs74CgEeejqkYufd5Pea5lx5KJjM5zo3XHu_T3KF_q41dpzVlcI7DIGKsIB6GyGD45_hynmQZ0x5CxEjgBSk3o1GnaKNZ6Q6oXJAa" />
                                <span class="absolute top-4 left-4 z-20 bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Live Now</span>
                        </div>
                        <div class="p-6 space-y-4">
                            <div>
                                 <p class="text-on-surface-variant text-sm font-medium flex items-center gap-1 mt-1 mb-3">
                                    <Calendar className="h-5 text-base"/>
                                    May 24 - May 29, 2026
                                </p>

                                <h4 class="font-headline text-xl font-bold text-primary group-hover:text-secondary transition-colors">31st Sub Junior National Baseball Championship Boys and Girls</h4>
                               

                                <p class="text-on-surface-variant text-sm font-medium flex items-center gap-1 mt-1">
                                    <Contact className="h-5 text-base"/>
                                    Baseball Association of Odisha
                                </p>
                            </div>

                              
                            
                            <div class="flex justify-between items-center py-4 border-y border-outline-variant/20">
                                <div class="text-center">
                                    <p class="text-[10px] font-bold text-on-surface-variant uppercase">Teams</p>
                                    <p class="text-xl font-black text-primary">32</p>
                                </div>
                                <div class="text-center">
                                    <p class="text-[10px] font-bold text-on-surface-variant uppercase">Venues</p>
                                    <p class="text-xl font-black text-primary">04</p>
                                </div>
                                <div class="text-center">
                                    <p class="text-[10px] font-bold text-on-surface-variant uppercase">Brackets</p>
                                    <p class="text-xl font-black text-primary">08</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between pt-2">
                                <span class="flex items-center gap-1 text-on-surface-variant text-xs font-semibold">
                                    <MapPin className="h-5 text-base"/>
                                  Bhubaneswar
                                </span>
                                <button class="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                                    Dashboard 
                                    <ArrowRight className="h-5" />
                                   
                                </button>
                            </div>
                        </div>
                    </div>
    )
}