import PageHeader from "@/components/ext/page-header";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import { useState } from "react";
import MatchResultUpdateDialogForm from "./match-result-update-dialog-form";
import { usePage } from "@inertiajs/react";
import { cn } from "@/lib/utils";

const formatText = (text) => {
    if (!text) return '';
    return text
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};
const RosterContainer = ({ roster, winner, showResult }) => {

    const isWinner = roster.id === winner;
    return (
        <div className="flex justify-between items-center">
            <span className="font-headline font-semibold text-on-surface text-lg capitalize"> {roster?.name}</span>
            <span className={cn("font-display text-surface-container-highest text-sm font-bold p-1 rounded-md",
                {
                    "bg-green-100 text-green-400": isWinner,
                    "bg-red-100 text-red-400": !isWinner && !showResult
                }
            )}>{!showResult ? isWinner ? 'W' : 'L' : '--'}</span>
        </div>)
}

const FixtureCard = ({ fixture, onClick, enableScoreUpdate }) => {
    return (
        <div className="bg-white  p-6 cursor-pointer shadow-[0_8px_24px_-8px_rgba(25,28,29,0.08)] transform scale-[1.01] transition-transform z-10 border-l-4 hover:border-primary">
            <div className="flex justify-between items-start mb-3">
                <span
                    className=
                    {cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-label font-bold uppercase tracking-widest bg-blue-100 text-blue-500",

                        { "bg-emerald-200 text-emerald-800": fixture.status === "completed" }
                    )}>
                    {fixture.status}
                </span>
                <span className="font-label text-xs text-on-surface-variant">{formatText(fixture.stage)} #{fixture.match_number}</span>
            </div>
            <div className="flex flex-col gap-2 mb-4">
                <RosterContainer roster={fixture?.home_roster} winner={fixture?.winner_roster_id} showResult={enableScoreUpdate} />

                <RosterContainer roster={fixture?.away_roster} winner={fixture?.winner_roster_id} showResult={enableScoreUpdate} />
            </div>
            {enableScoreUpdate &&
                <div className="flex items-center justify-between border-t border-surface-container pt-3">
                    <div className=" flex flex-col">
                        {/* <span
                        className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">Date
                        &amp; Time</span>
                    <span class="font-body text-xs text-on-surface font-medium">Oct 24, 14:00 EST</span> */}
                    </div>
                    <Button
                        variant="accentSecondary"
                        size={"lg"}
                        onClick={onClick}
                        className="  text-sm text-white  tracking-tight normal-case">
                        Update Score <NotebookPen />
                    </Button>

                </div>}
        </div>
    )
}
export default function KnockoutFixtures({tournament, competition, fixtures }) {

    const [selectedFixture, setSelectedFixture] = useState();
    const [open, setOpen] = useState(false);
    const dialogScoreUpdate = (fixture) => {
        setSelectedFixture(fixture)
        setOpen(true)


    }
    const matchesByStatus = fixtures.reduce((acc, match) => {
        const status = match.status || 'unknown';
        if (!acc[status]) {
            acc[status] = [];
        }
        acc[status].push(match);
        return acc;
    }, {});

    return (
        <div className=" ">
            <PageHeader title="Knockout Fixtures" >

            </PageHeader>

            <div className="grid grid-cols-2 gap-6">
                {Object.entries(matchesByStatus).map(([status, matches]) =>
                    <div className="bg-zinc-50 space-y-6 p-6">

                        {matches.map((fixture) => <FixtureCard
                            key={fixture.id}
                            fixture={fixture}
                            enableScoreUpdate={fixture.status === 'scheduled'}
                            onClick={() => dialogScoreUpdate(fixture)}
                        />)}

                    </div>


                )}


            </div>
            {selectedFixture && 
            <MatchResultUpdateDialogForm
tournament={tournament} competition ={competition}
                open={open} onOpenChange={setOpen} fixture={selectedFixture} resetFixture={() => setSelectedFixture(null)} /> }
        </div>
    )
}