import PageHeader from "@/components/ext/page-header";
import MatchFixtureItem from "@/components/ext/tournament/match-fixture-item";
import { usePage } from "@inertiajs/react";
import { FileDown, Info, Lock, Zap } from "lucide-react";
import FixtureLock from "./fixture-lock";

export default function FinalFixture({ fixtures }) {
    const { tournament, competition, pool_fixture } = usePage().props;

    return (
        <>
            <PageHeader subText={`Match fixture for ${tournament.name}`} title="Match Fixtures" >

                <button
                    className="flex items-center gap-2 px-4 py-2 text-primary border border-primary/20 rounded-md font-bold text-sm hover:bg-surface-container-high transition-all">
                    <FileDown />
                    Export Schedule (PDF)
                </button>
                {!competition?.fixture_locked_at && <FixtureLock />}


            </PageHeader>

            <div className=" py-8 flex flex-col gap-10">
                {/* <!-- Pool Structure Grid --> */}
                <section className="flex flex-col gap-6">
                    <div className="flex justify-between items-end border-l-4 border-secondary pl-4">
                        <div>
                            <h2 className="text-headline-xs font-headline font-bold text-primary">Pool Play Stages</h2>
                            <p className="text-body-md text-on-surface-variant">Round Robin Fixtures </p>
                        </div>
                        <div className="flex items-center gap-2 text-label-md text-on-surface-variant">
                            <Info />
                            Top 2 from each pool advance to Quarterfinals
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                        {
                            Object.entries(pool_fixture).map(([key, data]) => {
                                const { fixtures } = data[0];
                                return (
                                    <>
                                        <div
                                            class=" rounded-xl overflow-hidden flex flex-col   shadow-sm border border-outline-variant/10 group hover:border-primary/30 transition-colors">
                                            <div class="bg-primary p-4 flex justify-between items-center">
                                                <h3 class="text-white font-headline font-bold">{key}</h3>
                                                <span class="text-[10px] text-white/80 px-2 py-0.5 rounded   font-bold">{fixtures?.length} &nbsp;
                                                    MATCHES</span>
                                            </div>
                                            <div class="pool-scroll overflow-y-auto flex-1 p-3 flex flex-col gap-2">


                                                {fixtures.map((fixture, index) => <MatchFixtureItem
                                                    order={index + 1}
                                                    home={fixture.home_roster}
                                                    away={fixture.away_roster}
                                                    round={fixture.round}
                                                />)}





                                            </div>
                                        </div>
                                    </>
                                )
                            }

                            )}

                    </div>
                </section>

            </div>


        </>
    )
}