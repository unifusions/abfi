import { Mail, Phone } from "lucide-react";

export default function PersonalInformation({ contact }) {
    return (
        <div className="  rounded-e-xl p-8 shadow-sm border-l-4 border-primary">
            <h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-6">Personal Information</h3>

            <div className="space-y-6">
                <div className="pb-4 border-b border-surface-container">
                    {/* <p className="text-[10px] text-on-surface-variant font-label uppercase mb-2">Contact Details</p> */}
                    <div className="space-y-2">

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xs text-on-surface-variant">Father's Name</p>
                                <p className="text-sm font-bold">{contact.father_name}</p>

                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center text-sm">
                                <Phone className="h-4 mr-2" />
                              +91   {contact.phone.replace(/(\d{5})(\d{5})/, '$1 $2')} </div>

                            <div className="flex items-center text-sm">
                                <Mail className="h-4 mr-2" /> {contact.email}</div>
                        </div>
                    </div>

                </div>
                <div className="pb-4  border-b border-surface-container">
                    <p className="text-[10px] text-on-surface-variant font-label uppercase mb-2">Identification</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="  ">
                            <p className="text-[9px]   uppercase">Aadhar</p>
                            <p className="text-xs font-bold">{contact.aadhar.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')}</p></div>
                        <div className=" ">
                            <p className="text-[9px] text-on-surface-variant uppercase">Passport</p>
                            <p className="text-xs font-bold">{contact.passport ?? 'NA'}</p></div></div></div>
                <div className="pb-4  ">


                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[10px] text-on-surface-variant font-label uppercase mb-2">Emergency Contact Phone</p>
                          <div className="flex items-center text-sm">
                                <Phone className="h-4 mr-2" />
                              +91   {contact.phone.replace(/(\d{5})(\d{5})/, '$1 $2')} </div>
  
                        
                        </div>

                        <div>
                            <p className="text-[10px] text-on-surface-variant font-label uppercase mb-2">Full Address</p>
                            <p className="text-xs leading-relaxed">{contact.full_address}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}