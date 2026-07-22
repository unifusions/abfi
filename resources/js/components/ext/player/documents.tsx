export default function Documents(){
    return (

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
    )
}