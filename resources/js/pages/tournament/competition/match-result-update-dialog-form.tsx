import FormInput from "@/components/ext/form-input";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Dialog, DialogDescription, DialogHeader, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { stateColors } from "@/lib/stateColors";
import { cn } from "@/lib/utils";
import { resultUpdate } from "@/routes/tournaments/competition/fixtures";

import { useForm, usePage } from "@inertiajs/react";

import { Lock, Medal, Tally5, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

const RosterRadioOption = ({ side, option, onSelect }) => {
    return (
        <label className="flex-1 cursor-pointer group"  >
            <input type="radio"
                name="match_winner" className="hidden peer"
                value={option?.value}
                onChange={onSelect}
            />
            <div
                className="flex items-center justify-between p-4 rounded-xl border-2 border-surface-container-highest bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed/10 transition-all">
                <div><span
                    className="block font-label text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">
                    {side} Team</span><span
                        className="font-headline font-bold text-on-surface">
                        {option?.label}
                    </span></div><span
                        className="material-symbols-outlined text-primary opacity-0 peer-checked:opacity-100">check_circle</span>
            </div>
        </label>
    )
}
export default function MatchResultUpdateDialogForm({
    tournament, competition,
    open, onOpenChange, fixture, resetFixture }) {

    const { data, setData, processing, errors, put, reset, resetAndClearErrors } = useForm({
        'winner_roster_id': '',
        'home_score': 0,
        'away_score': 0,
        'remarks': null,
    });

    const [winner, setWinner] = useState({});

    const resetAll = () => {
        resetAndClearErrors();
        reset();

        resetFixture()
        onOpenChange(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        put(resultUpdate({
            tournament: tournament?.id,
            competition: competition?.id,
            fixture: fixture?.id
        }).url, {
            onSuccess: () => { resetAll() }
        })
    }
    const handleOpenChange = (open) => resetAll()

    useEffect(() => {
        if (!data || !fixture) return;
        const awayScore = Number(data.away_score) || 0;
        const homeScore = Number(data.home_score) || 0;
        if (awayScore > homeScore) {
            setWinner(fixture.away_roster);
        } else if (awayScore < homeScore) {
            setWinner(fixture.home_roster);
        } else {
            setWinner(null);
        }
    }, [data, fixture])
    return (
        <>
            <Dialog open={open} onOpenChange={handleOpenChange}>

                <DialogContent onInteractOutside={(e) => { e.preventDefault(); }}>

                    <div className="bg-primary text-white px-8 py-6 flex justify-between items-end relative overflow-hidden">


                        <div className="relative z-10">
                            <span
                                className="font-display  text-primary-fixed-dim text-xs uppercase tracking-[0.2em] font-semibold block mb-2">Official
                                Result Entry</span>
                            <h2
                                className="font-display text-3xl text-on-primary font-black tracking-tight leading-none mb-1">
                                {fixture?.stage === 'final' && 'Final'} Match {fixture?.stage != "final" && `#${fixture?.match_number}`}</h2>
                            <p className="font-body text-inverse-primary text-sm">{fixture?.home_roster?.organization?.state?.short_code} vs. {fixture?.away_roster?.organization?.state?.short_code}  </p>
                        </div>

                        <div className="relative z-10">
                            <span
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-label font-bold uppercase tracking-widest bg-surface/20 text-on-primary border border-surface/30 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary"></span> Editing
                            </span>
                        </div>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="  flex flex-col gap-10">

                            <section>

                                <h3 className="font-headline text-primary text-lg font-bold mb-4 flex items-center gap-2">
                                    <Tally5 />   Final  Score
                                </h3>

                                <div className="overflow-x-auto space-y-2  ">
                                    <div className="flex justify-between items-center bg-primary text-white py-4 px-4 uppercase text-xs tracking-wide font-black">
                                        <div className="">Roster</div>
                                        <div>Score</div>
                                    </div>
                                    <div className="flex justify-between items-center px-4">
                                        <div className="font-semibold capitalize">

                                            {fixture?.home_roster?.name}
                                        </div>
                                        <div><FormInput
                                            className="text-right w-8 bg-zinc-50"
                                            id="home_score"
                                            type="number"
                                            hasError={errors.home_score}
                                            onChange={(e) => setData('home_score', e.target.value)} />

                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center px-4">
                                        <div className="font-semibold capitalize">{fixture?.away_roster?.name}</div>
                                        <div><FormInput
                                            className="text-right w-8 bg-zinc-50"
                                            id="away_score"
                                            type="number"
                                            hasError={errors.away_score}
                                            onChange={(e) => setData('away_score', e.target.value)} />


                                        </div>
                                    </div>

                                </div>
                                <div className="mt-4 pt-8 border-t border-surface-container">
                                    <h3 className="font-headline text-primary text-lg font-bold  flex items-center gap-2">
                                        <Medal />  Winning Roster</h3>
                                    <p className="font-body text-[11px] text-on-surface-variant mb-4">Winner will
                                        automatically update the tournament standings once finalized.</p>

                                    {winner &&
                                        <div
                                            className="flex items-center justify-between p-4 rounded-xl border-2 border-surface-container-highest bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed/10 transition-all">
                                            <div>

                                                <div className="flex items-center gap-2">
                                                    <div className={cn("flex h-12  items-center justify-center w-12 font-bold font-display text-md rounded-md", stateColors[winner?.organization?.state?.short_code])}>
                                                        {winner?.organization?.state?.short_code}
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="text-primary font-bold font-display tracking-tight text-2xl capitalize">{winner?.name}</div>
                                                        <div className="text-zinc-400 text-sm">{winner?.organization?.name}</div>


                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                    }


                                </div>
                                <div className="mt-4">
                                    <Label>Remarks</Label>
                                    <Textarea value={data.remarks} onChange={(e) => setData('remarks', e.target.value)}>

                                    </Textarea>
                                </div>

                            </section>



                        </div>

                        <div
                            className="mt-auto border-t border-zinc-100  py-5 flex justify-end gap-2 items-center">

                            <Button variant="destructive" className="normal-case tracking-tight" size={"lg"} onClick={() => resetAll()}>
                                <XCircle />
                                Cancel</Button>
                            <Button
                                // onClick={resetFixture}
                                size={"lg"}
                                type="submit"
                                className="font-label normal-case tracking-tight cursor-pointer text-sm font-bold bg-primary text-white px-6  hover:bg-[#00122b] transition-all flex items-center gap-2 shadow-[inset_0_-2px_0_rgba(0,45,98,0.5)] active:translate-y-[1px] active:shadow-none">
                                <Lock className="h-5" />
                                Submit Final Result
                            </Button>
                        </div>

                    </form>
                </DialogContent>
            </Dialog>


        </>
    )
}