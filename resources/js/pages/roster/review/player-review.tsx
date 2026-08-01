import { Button } from "@/components/ui/button";
import { CheckCircle, Info } from "lucide-react";

export default function PlayerReview({ player }) {
    return (
        <div class="flex-1 flex overflow-hidden">
            <div class="flex-1 flex flex-col overflow-y-auto bg-surface">
                <div class="p-8">
                    <div class="flex justify-between items-start mb-8">
                        <div class="flex items-center gap-6">
                            <div class="w-20 h-20 rounded-lg bg-surface-container-high border-2 border-primary/10 overflow-hidden">
                                <img class="w-full h-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH6l1x4_VkmIXlAJPrfjpOZkYCjM7OPeKNTwinrjQWATgObm7napeQYM6bfwExCyGE1l6pSeIxUClm-8YTifX3OcdKpRDx4xvtxAVDipdQl8nNwmlVlbiQrZ2niQHoFhwWvSVqhWd6NLdQ4dMxu8S0WtIo45OOI2bNKIeoRGe8BMBy9ofaYza1GWelmzD4fcnezYpx7en8qsb8jkBQc32myzj6WVkPipG42edDn9aTlYrrw2cpAFC6nw" />
                            </div>
                            <div>
                                <h2 className="font-headline font-black text-3xl text-primary tracking-tighter uppercase">{player.name}
                                </h2>
                                <div className="flex gap-3 mt-1">
                                    <span className="text-xs font-bold text-on-surface-variant">ID:{player?.code}</span>
                                    <span className="text-xs font-bold text-on-surface-variant">•</span>
                                    <span className="text-xs font-bold text-on-surface-variant">DOB: {player.dob}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">

                        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-headline font-bold text-primary uppercase text-xs tracking-widest">Profile Photo
                                    Verification</h3>
                                <span
                                    className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-500">PENDING</span>
                            </div>
                            <div className="flex gap-6">
                                <div
                                    className="w-1/2 aspect-square bg-surface-container-high rounded-lg overflow-hidden border border-outline-variant/10">
                                    <img class="w-full h-full object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH6l1x4_VkmIXlAJPrfjpOZkYCjM7OPeKNTwinrjQWATgObm7napeQYM6bfwExCyGE1l6pSeIxUClm-8YTifX3OcdKpRDx4xvtxAVDipdQl8nNwmlVlbiQrZ2niQHoFhwWvSVqhWd6NLdQ4dMxu8S0WtIo45OOI2bNKIeoRGe8BMBy9ofaYza1GWelmzD4fcnezYpx7en8qsb8jkBQc32myzj6WVkPipG42edDn9aTlYrrw2cpAFC6nw" />
                                </div>
                                <div class="w-1/2 flex flex-col justify-center">
                                    <p class="text-sm text-on-surface-variant mb-4">Please verify that the uploaded photo matches the
                                        athlete's official identification and meets the league's quality standards.</p>
                                    <div class="space-y-2">
                                        <div class="flex items-center gap-2 text-xs text-green-700 font-medium">
                                            <CheckCircle /> Face clearly visible
                                        </div>
                                        <div class="flex items-center gap-2 text-xs text-green-700 font-medium">
                                            <CheckCircle />Neutral background
                                        </div>
                                        <div class="flex items-center gap-2 text-xs text-amber-600 font-medium">
                                            <Info /> Lighting check recommended
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            <div class="w-80 border-l border-outline-variant/15 bg-surface-container-lowest flex flex-col">
                <div class="p-6 border-b border-outline-variant/15">
                    <h3 class="font-headline font-bold text-primary uppercase text-xs tracking-widest mb-4">Verification Actions
                    </h3>
                    <div class="space-y-3 w-full">
                        <Button
                            size="xl"
                            className="w-full uppercase  font-bold text-xs tracking-wider">Approve
                            Player</Button>
                        <Button
                            variant="outline"
                            size="xl"
                            className="w-full uppercase  font-bold text-xs tracking-wider border-primary" >Request
                            Resubmission</Button>
                        <button
                            class="w-full py-3 bg-error text-white font-headline font-bold uppercase tracking-widest text-xs rounded hover:opacity-90 transition-all">Flag
                            for Review</button>
                    </div>
                </div>
                {/* <div class="p-6 flex-1 overflow-y-auto">
                    <h4 class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Submission History
                    </h4>
                    <div class="space-y-4">
                        <div class="border-l-2 border-outline-variant/20 pl-4 py-1">
                            <p class="text-xs font-bold text-on-surface">Photo Uploaded</p>
                            <p class="text-[10px] text-on-surface-variant">Oct 14, 2024 • 09:42 AM</p>
                        </div>
                        <div class="border-l-2 border-outline-variant/20 pl-4 py-1">
                            <p class="text-xs font-bold text-on-surface">Registration Started</p>
                            <p class="text-[10px] text-on-surface-variant">Oct 12, 2024 • 02:15 PM</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}