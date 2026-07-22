import Documents from "@/components/ext/player/documents";
import EligibilityCard from "@/components/ext/player/eligibility-card";
import ParticipationHistory from "@/components/ext/player/participation-history";
import PerformanceMetrics from "@/components/ext/player/performance-metrics";
import PersonalInformation from "@/components/ext/player/personal-information";
import { BadgeCheck, EllipsisVertical, Fingerprint, Mars, Pencil, Venus } from "lucide-react";

export default function PlayerView({ player }) {

    const { data } = player;
    return (
        <>


          
            {/* <!-- Athlete Header Canvas --> */}
            <div className="px-8 py-4 space-y-8   w-full">
                {/* <!-- High-Fidelity Athlete Header --> */}
                <section className="relative overflow-hidden rounded-xl bg-primary text-white">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0   from-primary to-transparent z-10"></div>
                        <div className="w-full h-full"
                        // style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;"
                        >

                        </div>
                    </div>
                    <div className="relative z-20 flex flex-col md:flex-row items-end p-8 md:p-12 space-y-6 md:space-y-0 md:space-x-10">
                        <div className="w-48 h-48 rounded-xl border-4 border-on-primary/20 shadow-2xl overflow-hidden shrink-0 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img className="w-full h-full object-cover"

                                src={data.profile_photo} />
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="inline-flex items-center space-x-2 bg-secondary px-3 py-1 rounded-full mb-2">
                                <BadgeCheck />
                                <span className="font-label text-[10px] font-bold uppercase tracking-widest">Federation Verified</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-headline font-black tracking-tighter uppercase italic leading-none">
                                {data.first_name} {data.last_name}
                            </h2>
                            <div className="flex flex-wrap gap-4 items-center font-label text-sm text-primary-fixed space-y-2">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                    <div className="flex gap-2 items-center">
                                        <Fingerprint className="h-5 " /> ID: {data.player_code}
                                    </div>
                                    <div className="flex gap-2 items-center"> <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        <span> {data.positions.join(', ')}</span></div>


                                    <div className="flex gap-2 items-center">
                                        <Venus className="h-4  " /> {data.gender}
                                    </div>

                                    <div className="flex gap-2 items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>

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

            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* <!-- Performance Metrics (Primary Column) --> */}

                <div className="md:col-span-4 space-y-8">
                    <EligibilityCard
                        details={data.details}

                    />
                </div>


                <div className="col-span-8 space-y-8">
                    <PersonalInformation
                        contact={data.contact}
                    />
                </div>

            </div></div>
        </>
    )
}