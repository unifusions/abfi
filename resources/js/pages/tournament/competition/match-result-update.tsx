import { useState } from "react";
import MatchResultUpdateForm from "./match-result-update-dialog-form";
import PageHeader from "@/components/ext/page-header";
import { FileDown, Info, NotebookPen } from "lucide-react";
import { usePage } from "@inertiajs/react";
import MatchFixtureItem from "@/components/ext/tournament/match-fixture-item";
import MatchResultUpdateDialogForm from "./match-result-update-dialog-form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MatchCard = ({ fixture, onClick, enableScoreUpdate=false }) => {
const isCompleted = fixture.status === 'completed';
const isHomeWinner = fixture.winner_roster_id === fixture.home_roster_id;
const isAwayWinner = fixture.winner_roster_id === fixture.away_roster_id;
    return (


        <div  
            className="bg-white   p-4 cursor-pointer relative   transition-transform z-10 transition-all   hover:transform hover:scale-[1.01]">
            <div className="flex justify-between items-start mb-3">
                <span
                    className="inline-flex items-center  py-0.5 rounded-full text-[10px] font-label font-bold uppercase tracking-widest bg-surface-variant text-on-surface-variant">
                    Pending Result {fixture.pool} 
                </span>
                <span className="font-label text-xs text-on-surface-variant">Round #{fixture.round} Match #{fixture.match_number}</span>
            </div>
            <div className="flex flex-col gap-2 mb-4">

                <div className={cn("flex justify-between items-center p-3 ", 
                     {'bg-green-50' : isHomeWinner, }
                )}>
                    <span className="font-headline font-semibold text-on-surface text-lg capitalize">{fixture?.home_roster?.name}</span>
                    <span className={cn("font-display    font-bold text-sm", 
                        {'text-green-800' : isCompleted && isHomeWinner,
                            'text-red-600' : isCompleted && !isHomeWinner
                         }
                    )}>{isCompleted && (isHomeWinner ? 'W'  : 'L')}</span>
                </div>
               <div className={cn("flex justify-between items-center p-3 ", 
                     {'bg-green-50' : isAwayWinner, }
                )}>
                    <span className="font-headline font-semibold text-on-surface text-lg capitalize">{fixture?.away_roster?.name}</span>
                    <span className={cn("font-display    font-bold text-sm", 
                        {'text-green-800' : isAwayWinner,
                            'text-red-600' : !isAwayWinner
                         }
                    )}>{isCompleted && (isAwayWinner ? 'W' : 'L')}</span>
                </div>
            </div>
            {enableScoreUpdate && 
            <div className="flex items-center justify-between border-t border-surface-container pt-3">


                <Button
                onClick={onClick}
                    variant="accentSecondary"
                    size={"lg"}
                    className="w-full  text-sm text-white  tracking-tight normal-case">
                    Update Score <NotebookPen />
                </Button>
            </div>}
        </div>



    )
}

export default function MatchResultUpdate({   tournament, competition, fixtures, pool_fixture }) {
    const [selectedFixture, setSelectedFixture] = useState();
   
    const [open, setOpen] = useState(false);
    const dialogScoreUpdate = (fixture) => {
        setSelectedFixture(fixture)
        setOpen(true)


    }
    return (
        <>

            <PageHeader subText={`Match Result Update for ${tournament?.name}`} title="Post Match Results Update" >


            </PageHeader>

            <div className="  flex flex-col gap-10">
                {/* <!-- Pool Structure Grid --> */}
                <section className="flex flex-col gap-6">




                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                        {
                            Object.entries(pool_fixture).map(([key, data]) => {
                                const { fixtures } = data[0];
                                return (
                                    <>
                                        <div
                                            className=" bg-zinc-50 overflow-hidden flex flex-col   shadow-sm border border-outline-variant/10 group hover:border-primary/30 transition-colors">
                                            <div className="bg-primary p-4 flex justify-between items-center">
                                                <h3 className="text-white font-headline font-bold">{key}</h3>
                                                <span className="text-[10px] text-white/80 px-2 py-0.5 rounded   font-bold">{fixtures?.length} &nbsp;
                                                    MATCHES</span>
                                            </div>
                                            <div className="pool-scroll overflow-y-auto flex-1 p-3 flex flex-col gap-2">


                                                {fixtures.map((fixture, index) =>
                                                    // fixture.status === 'scheduled' &&
                                                    <MatchCard
                                                        fixture={fixture}
                                                        order={index + 1}
                                                        home={fixture.home_roster}
                                                        away={fixture.away_roster}
                                                        round={fixture.round}
                                                        enableScoreUpdate = {fixture.status==='scheduled'}
                                                        onClick={() => dialogScoreUpdate(fixture)}
                                                    />)}





                                            </div>
                                        </div>
                                        <MatchResultUpdateDialogForm open={open} onOpenChange={setOpen} fixture={selectedFixture} 
                                           tournament = {tournament} competition ={competition}
                                        resetFixture={() => setSelectedFixture(null)} />

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