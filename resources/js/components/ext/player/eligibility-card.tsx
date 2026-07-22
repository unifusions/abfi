import { cn } from "@/lib/utils";
import { BadgeCheck, BriefcaseMedical, Calendar, Droplets, FileCheck, Notebook, Ruler } from "lucide-react";

export default function EligibilityCard(
    { details  }  
) {
    const data = [
        {
            label: "Registered On", value: details.created_at, icon: FileCheck, className: 'text-green-600'
        },
        { label: "Date of Birth", value: details.dob, icon: Calendar },
        { label: "Blood Group", value: details.blood_group, icon: Droplets },
        { label: "Association", value: details.association, icon: Notebook },
    ]
    return (
        <div className=" rounded-e-xl p-8 shadow-sm border-l-4 border-secondary">
            <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-6">Player Details</h3>
            <div className="space-y-6">

                {data.map((detail, index) =>
                    <div key={index.toString()} className="flex items-center justify-between">
                        <div className="flex items-center">
                            {detail?.icon && <detail.icon className={cn("  mr-3 ", detail?.className)} />}

                            <div>
                                <p className="text-sm font-bold">{detail.label}</p>
                                <p className="text-xs   font-label uppercase">{detail?.value}</p>
                            </div>
                        </div>

                    </div>
                )}





                {/* <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Ruler className="text-primary mr-3" />

                        <div>
                            <p className="text-sm font-bold">Height &amp; Weight</p>
                            <p className="text-[10px] text-on-surface-variant font-label uppercase">5'11" / 65 kgs</p>
                        </div>
                    </div>
                </div> */}
                {/* <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <BriefcaseMedical className="text-primary mr-3" />

                        <div>
                            <p class="text-sm font-bold">Medical Clearance</p>
                            <p class="text-[10px] text-on-surface-variant font-label uppercase">Cleared for Impact</p>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}