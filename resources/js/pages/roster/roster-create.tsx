import FormCard from "@/components/ext/form-card";
import FormCombobox from "@/components/ext/form-combobox";
import FormInput from "@/components/ext/form-input";
import FormRadio from "@/components/ext/form-radio";
import FormSelect from "@/components/ext/form-select";
import PageHeader from "@/components/ext/page-header";
import { Button } from "@/components/ui/button";
import rosters from "@/routes/rosters";
import competition from "@/routes/tournaments/competition";
import { useForm } from "@inertiajs/react";
import { ArrowRight, BookLock, Fingerprint, MoveRight, ShieldAlert } from "lucide-react";
import { useEffect, useState } from "react";

export default function RosterCreate({
    tournaments, organizations,
    can_select_organization,
    default_organization, competition
}) {

    const { data, setData, processing, errors, post } = useForm({
        'organization_id': default_organization || '',
        'name': '',
        'tournament_competition_id': '',
        'tournament_id': '',
    })




    useEffect(() => {

        setSelectedTournament(competition.find(c => c.value === data.tournament_id));

    }, [data.tournament_id]);
    const [selectedTournament, setSelectedTournament] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        post(rosters.store().url)
    }

    return (
        <>
            <PageHeader title="Roster Creation" subText="Initialize the roster metadata for the upcoming tournament season. This configuration will define
                    the eligibility constraints for player enrollment.">

            </PageHeader>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* <!-- Main Form Section --> */}
                <div className="lg:col-span-8 space-y-8">

                    <form onSubmit={handleSubmit} >

                        <div
                            className="p-10 border-l-4 border-primary">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                                {/* <!-- Tournament Selection --> */}
                                <FormSelect
                                    label="Tournament Selection"
                                    labelRequired={true}
                                    id="tournament_id"
                                    items={competition}
                                    placeHolder="Select Tournament"
                                    onValueChange={(val) =>
                                        setData('tournament_id', val)
                                    }
                                />


                                <FormInput
                                    label="Team Name"
                                    labelRequired={true}
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}

                                />


                                <FormCombobox
                                    label="Association / State"

                                    labelRequired={true}

                                    placeholder="Assoction Player Belongs to"
                                    value={data.organization_id}
                                    options={organizations.data}
                                    onValueChange={(val) => setData('organization_id', val)}
                                    hasError={errors.organization_id}
                                    disabled={!can_select_organization}
                                />

                                <FormRadio
                                    label="Division"
                                    labelRequired={true}
                                    options={selectedTournament ? selectedTournament.competition : []}
                                    value={data.tournament_competition_id}
                                    onValueChange={(val) => setData('tournament_competition_id', val)}
                                />


                            </div>

                            <div className="mt-12 flex justify-end">
                                <Button size={"xl"}
                                    type="submit"
                                >
                                    Proceed to Roster Assembly
                                    <MoveRight className="h-10 w-10" />

                                </Button>
                            </div>
                        </div>

                    </form>
                </div>
                {/* <!-- Guidance / Summary Panel (Asymmetric balance) --> */}
                <div class="lg:col-span-4 space-y-6">
                    {/* <!-- Helper Card --> */}

                    <div class="bg-primary text-white p-8 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16"></div>
                        <h3 className="font-headline font-bold text-xl mb-4 flex items-center gap-3">
                            <ShieldAlert />
                            Setup Guide
                        </h3>
                        <p className="font-body text-sm text-white/80 leading-relaxed mb-6">
                            Selection of the tournament automatically pulls regional regulations and age-eligibility
                            date cutoffs from the Federation Database.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary-container p-2 rounded-lg">
                                    <Fingerprint />                                </div>
                                <div className="font-body text-xs text-primary-fixed-dim">
                                    <strong>Aadhar Check:</strong> Ensure all player aadhar cards are valid before
                                    next step.
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-primary-container p-2 rounded-lg">
                                    <BookLock />
                                </div>
                                <div className="font-body text-xs text-primary-fixed-dim">
                                    <strong>Record Locking:</strong> Team names cannot be changed after roster assembly
                                    begins.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Dynamic Preview (Placeholder for real-time update) -->
                    <div
                        className="bg-surface-container border-2 border-dashed border-outline-variant/30 p-8 rounded-xl flex flex-col items-center justify-center text-center">
                        <span className="material-symbols-outlined text-5xl text-on-surface-variant/20 mb-4"
                        >badge</span>
                        <h4 className="font-headline font-bold text-on-surface-variant/40">Roster Preview</h4>
                        <p className="font-body text-xs text-on-surface-variant/40 mt-2 italic">Select a tournament to view
                            <br />specific registry requirements</p>
                    </div> */}
                </div>
            </div>

        </>
    )
}