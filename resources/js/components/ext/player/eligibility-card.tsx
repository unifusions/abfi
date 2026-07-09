import { BadgeCheck, BriefcaseMedical, Calendar, Droplets, Ruler } from "lucide-react";

export default function EligibilityCard() {
    return (
        <div class=" rounded-e-xl p-8 shadow-sm border-l-4 border-secondary">
            <h3 class="font-headline font-bold text-xl uppercase tracking-tight mb-6">Eligibility Status</h3>
            <div class="space-y-6">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <BadgeCheck className=" text-green-600 mr-3 " />

                        <div>
                            <p class="text-sm font-bold">Identity Verified</p>
                            <p class="text-[10px] text-on-surface-variant font-label uppercase">Valid thru 2025</p>
                        </div>
                    </div>

                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <Calendar className="text-primary mr-3" />

                        <div>
                            <p class="text-sm font-bold">Age Class U14</p>
                            <p class="text-[10px] text-on-surface-variant font-label uppercase">DOB: 12/04/2010</p>
                        </div>
                    </div>

                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <Droplets className="text-primary mr-3" />

                        <div>
                            <p class="text-sm font-bold">Blood Group</p>
                            <p class="text-[10px] text-on-surface-variant font-label uppercase">O+ (Positive)</p>
                        </div>
                    </div>

                </div><div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <Ruler className="text-primary mr-3" />

                        <div>
                            <p class="text-sm font-bold">Height &amp; Weight</p>
                            <p class="text-[10px] text-on-surface-variant font-label uppercase">5'11" / 65 kgs</p>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <BriefcaseMedical className="text-primary mr-3" />

                        <div>
                            <p class="text-sm font-bold">Medical Clearance</p>
                            <p class="text-[10px] text-on-surface-variant font-label uppercase">Cleared for Impact</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}