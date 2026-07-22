import Documents from "@/components/ext/player/documents";
import EligibilityCard from "@/components/ext/player/eligibility-card";
import ParticipationHistory from "@/components/ext/player/participation-history";
import PerformanceMetrics from "@/components/ext/player/performance-metrics";
import PersonalInformation from "@/components/ext/player/personal-information";

export default function PlayerViewStats() {
    return (
           
                <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* <!-- Performance Metrics (Primary Column) --> */}

                    <div className="md:col-span-4 space-y-8">
                        <EligibilityCard />
                    </div>


                    <div className="col-span-8 space-y-8">
                        <PersonalInformation />
                    </div>
                    <div className="md:col-span-8 space-y-8">
                    </div>
                    <div class="md:col-span-8 space-y-8">
                        <PerformanceMetrics />
                        {/* <!-- Participation History (Stat-Sheet Style) --> */}
                        <ParticipationHistory />
                    </div>
                    {/* <!-- Secondary Column (Eligibility & Documents) --> */}
                    <div class="md:col-span-4 space-y-8">
                        {/* <!-- Eligibility Card --> */}

                        {/* <!-- Documents Tab / Section --> */}
                        <Documents />


                    </div>
                </div>
    )
}