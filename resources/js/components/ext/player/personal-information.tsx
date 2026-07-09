import { Mail, Phone } from "lucide-react";

export default function PersonalInformation() {
    return (
        <div class="  rounded-e-xl p-8 shadow-sm border-l-4 border-primary">
            <h3 class="font-headline font-bold text-xl uppercase tracking-tight mb-6">Personal Information</h3>

            <div class="space-y-6">
                <div class="pb-4 border-b border-surface-container">
                    <p class="text-[10px] text-on-surface-variant font-label uppercase mb-2">Contact Details</p>
                    <div class="space-y-2">
                        <div className="grid grid-cols-2 gap-4">
                            <div class="flex items-center text-sm">
                                <Mail className="h-4 mr-2" /> m.sterling@example.com</div>
                            <div class="flex items-center text-sm">
                                <Phone className="h-4 mr-2" />
                                +1 (555) 012-3456</div>
                        </div>
                    </div>

                </div>
                <div class="pb-4  border-b border-surface-container">
                    <p class="text-[10px] text-on-surface-variant font-label uppercase mb-2">Identification</p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="  ">
                            <p class="text-[9px]   uppercase">Aadhar</p>
                            <p class="text-xs font-bold">XXXX-XXXX-1234</p></div>
                        <div class=" ">
                            <p class="text-[9px] text-on-surface-variant uppercase">PAN</p>
                            <p class="text-xs font-bold">ABCPSXXXXG</p></div></div></div>
                <div class="pb-4  ">
                  

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                              <p class="text-[10px] text-on-surface-variant font-label uppercase mb-2">Emergency Contact</p>
                            <p class="text-sm font-bold">Sarah Sterling</p>
                            <p class="text-xs text-on-surface-variant">Mother • +1 (555) 987-6543</p>
                        </div>

                        <div>
                            <p class="text-[10px] text-on-surface-variant font-label uppercase mb-2">Full Address</p>
                            <p class="text-xs leading-relaxed">123 Diamond Way, Riverside Heights,<br />California, 92501, USA</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}