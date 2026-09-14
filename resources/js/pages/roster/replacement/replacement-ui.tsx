import { Replace } from "lucide-react";

export default function Replacementui () {
    return (
         <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
                        <div className="flex flex-col items-center gap-2 text-center p-3 bg-surface-container-low rounded-xl w-full">
                            <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
                                <Replace className="text-white" />
                                {/* <span class="material-symbols-outlined text-xl" data-icon="swap_horiz">swap_horiz</span> */}
                            </div>
                            <span className="font-headline text-[11px] font-black text-primary tracking-wider uppercase">
                                Emergency Swap Protocol
                            </span>
                            {/* <span class="text-[10px] text-on-surface-variant leading-tight">
                                Rule 14.3(b) Active
                            </span> */}
                            {/* <div class="w-full h-px bg-surface-container-high my-1"></div> */}
                            {/* <span class="px-2 py-1 rounded bg-primary-fixed text-on-primary-fixed text-[10px] font-bold">
                                100% Slot Match
                            </span> */}
                        </div>
                    </div>

    )
}