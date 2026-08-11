import PageHeader from "@/components/ext/page-header";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import { useState } from "react";
import MatchResultUpdateDialogForm from "./match-result-update-dialog-form";
import { usePage } from "@inertiajs/react";

const formatText = (text) => {
    if (!text) return '';
    return text
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};

const FixtureCard = ({ fixture, onClick }) => {
    return (
        <div className="bg-white  p-6 cursor-pointer shadow-[0_8px_24px_-8px_rgba(25,28,29,0.08)] transform scale-[1.01] transition-transform z-10 border-l-4 hover:border-primary">
            <div className="flex justify-between items-start mb-3">
                <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-label font-bold uppercase tracking-widest bg-blue-100 text-blue-500">
                    {fixture.status}
                </span>
                <span className="font-label text-xs text-on-surface-variant">{formatText(fixture.stage)} #{fixture.match_number}</span>
            </div>
            <div class="flex flex-col gap-2 mb-4">
                <div class="flex justify-between items-center">
                    <span class="font-headline font-semibold text-on-surface text-lg capitalize">
                        {fixture?.home_roster?.name}
                    </span>
                    <span class="font-display text-surface-container-highest text-xl font-bold">--</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="font-headline font-semibold text-on-surface text-lg capitalize"> {fixture?.away_roster?.name}</span>
                    <span class="font-display text-surface-container-highest text-xl font-bold">--</span>
                </div>
            </div>
            <div class="flex items-center justify-between border-t border-surface-container pt-3">
                <div class="flex flex-col">
                    <span
                        class="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">Date
                        &amp; Time</span>
                    <span class="font-body text-xs text-on-surface font-medium">Oct 24, 14:00 EST</span>
                </div>

                <Button
                    variant="accentSecondary"
                    size={"lg"}
                    onClick={onClick}
                    className="w-full  text-sm text-white  tracking-tight normal-case">
                    Update Score <NotebookPen />
                </Button>
            </div>
        </div>
    )
}
export default function KnockoutFixtures({ fixtures }) {
 
    const [selectedFixture, setSelectedFixture] = useState();
    const [open, setOpen] = useState(false);
    const dialogScoreUpdate = (fixture) => {
        setSelectedFixture(fixture)
        setOpen(true)


    }

    return (
        <div className=" ">
            <PageHeader title="Knockout Fixtures" >
 
            </PageHeader>

            <div className="bg-zinc-50 space-y-6 p-6">
                {fixtures.map((fixture) => <FixtureCard
                    key={fixture.id}
                    fixture={fixture}
                    enableScoreUpdate={fixture.status === 'scheduled'}
                    onClick={() => dialogScoreUpdate(fixture)}
                />

                )}
                <MatchResultUpdateDialogForm
                   
                    open={open} onOpenChange={setOpen} fixture={selectedFixture} resetFixture={() => setSelectedFixture(null)} />

            </div>

        </div>
    )
}