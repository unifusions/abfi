import CreatableSelect from "@/components/ext/createable-select";
import FormInput from "@/components/ext/form-input";
import FormInputWithIcon from "@/components/ext/form-input-with-icon";
import PageHeader from "@/components/ext/page-header";
import { Button } from "@/components/ui/button";
import { dashboard } from "@/routes";
import tournaments, { create, index } from "@/routes/tournaments";
import venue from "@/routes/venue";
import { useForm } from "@inertiajs/react";
import { Calendar, CirclePlus, ClipboardPen, Component, FileUser, FolderTree, Layers2, ListTree, Lock, MapPin, Network, PersonStanding, Rocket } from "lucide-react";
import AddVenueDialog from "./add-venue-dialog";
import { useEffect, useRef, useState } from "react";
import InputError from "@/components/input-error";
import SearchableSelect from "@/components/ext/searcable-select";
import FormSelect from "@/components/ext/form-select";
import { FormCheckbox } from "@/components/ext/form-checkbox";
import FormCard from "@/components/ext/form-card";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import AnnualTournament from "./annual-tournament";

type Props = {
    states?: [],
    organizations?: []
}
export default function TournamentCreate({ types, states, organizations, categories }: Props) {

    const [v, setV] = useState();
    const [competitionType, setCompetitionType] = useState({});
    const targetSectionRef = useRef(null);
    const { data, setData, processing, errors, post, transform } = useForm({
        'name': '',
        'category_id': '',
        'organization_id': '',
        'venue_id': '',
        'starts_at': '',
        'ends_at': '',
        'registration_open_at': '',
        'registration_close_at': '',
        'competition_format': '',
        'competition_type': [],
        'tournament_type': 'others'

    });

    useSetBreadcrumbs([
        { title: 'Dashboard', href: dashboard().url },
        { title: 'Tournaments', href: index().url },
        { title: 'New Tournament', href: create().url }
    ])

    const [venueQuery, setVenueQuery] = useState('');
    const [venueDialogOpen, setVenueDialogOpen] = useState(false);
    const submit = (action) => {
        transform((data) => ({
            ...data,
            action,
        }));

        post(

            tournaments.store().url
        )

    }

    useEffect(() => {
        let selectCat = categories.data.find((c) => c.value === data.category_id);
        setCompetitionType(selectCat?.competition_type)

    }, [data.category_id])

    const handleCheckboxChange = (value) => {

        if (data.competition_type.includes(value)) {
            setData(
                "competition_type",
                data.competition_type.filter(x => x !== value)
            );
        }
        else {
            setData('competition_type', [...data.competition_type, value]);

        }

    }

    const selectedOrganization =
        organizations.find(
            (o) => o.id === data.organization_id
        ) ?? null;


    const handleAnnualTournament = (tournamentType) => {
        const { competitions, available, label } = tournamentType;
        const fallBackCat = "Senior - SR"
        const genderString = competitions.map(item => item.gender.charAt(0).toUpperCase() + item.gender.slice(1)).join(' & ');
        const competitionType = competitions.map(item => item.gender.toLowerCase());
        // alert(JSON.stringify(categories?.data));
        const categoryId = categories?.data?.filter(c => c.label.toLowerCase().includes(label.toLowerCase()))
        const fallbackId = categories?.data?.filter(c => c.label.toLowerCase().includes(fallBackCat.toLowerCase()))
        let finalCatId = categoryId.length > 0 ? categoryId : fallbackId;

        setData('name', (tournamentType?.name + ' ' + genderString));
        setData('category_id', finalCatId[0]?.value);
        setData('competition_type', [...competitionType]);
        setData('tournament_type', tournamentType?.type)
        targetSectionRef.current?.scrollIntoView({
            behavior: 'smooth', // Animates the scroll smoothly
            block: 'start'      // Aligns the top of the section to the top of the viewport
        });
    }
    return (
        < >
            <PageHeader title="Create Tournament" subText="Select an annual tournament or create a custom
            tournament..." >
 
                {/* <div
                    className="flex items-center gap-3 bg-surface-container-low px-4 py-2.5 rounded-lg border border-outline-variant/20 self-start md:self-auto shadow-sm">
                    <div className="flex items-center gap-2">
                        <Calendar className="text-primary" />

                        <span className="text-xs font-label uppercase tracking-wider text-on-surface-variant font-semibold">Active
                            Competition:</span>
                    </div>
                    <span
                        className="font-headline font-bold text-sm text-primary px-2.5 py-0.5 rounded bg-primary-container border border-primary/20">Current
                        Season: 2026</span>
                </div> */}
            </PageHeader>
            <div className="flex flex-col lg:flex-row gap-10 ">
                {/* <!-- Left Column: Form Sections --> */}
                <div className="flex-1 space-y-10">
                    <section className="space-y-6">
                        {/* <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h2 className="font-headline font-bold text-xl md:text-2xl text-on-surface tracking-tight">Annual Federation
                                        Tournaments</h2>
                                    <span
                                        className="px-2.5 py-0.5 rounded-full text-xs font-label font-bold uppercase tracking-wider bg-surface-container-high text-primary border border-outline-variant/30">
                                        Calendar Year 2026
                                    </span>
                                </div>
                                <p className="text-xs text-on-surface-variant mt-1 max-w-3xl leading-relaxed">
                                    Tournament names and edition numbers are strictly governed by federation bylaws and calculated
                                    automatically from historical records. Sanctions apply universally to accredited state units.
                                </p>
                            </div>
                            <div className="text-xs text-on-surface-variant/80 font-label flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm text-primary" data-icon="verified">verified</span>
                                Auto-calculated Historical Registry
                            </div>
                        </div> */}
                        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6">
                            {Object.values(types).map((tournamentType) => (<AnnualTournament tournamentType={tournamentType} onSelect={() => handleAnnualTournament(tournamentType)} />))}

                        </div>

                    </section>

                    <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                        {/* <!-- Section 1: Core Identity --> */}
                        <div className="space-y-6" ref={targetSectionRef}>
                            <div className="flex items-center gap-4">
                                <div className="w-1 h-6 bg-secondary"></div>
                                <h2 className="font-headline font-bold text-xl uppercase tracking-wider">Tournament Identity</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="col-span-3">
                                    <FormInput
                                        id="tournament_name"
                                        label="Tournament Name"
                                        hasError={errors.name}
                                        value={data.name}
                                        onChange={e => setData('name', e.target.value)}

                                        labelRequired={true}
                                        placeholder="e.g., Sub Junior National Baseball Championship"
                                    />

                                </div>



                                <CreatableSelect value={v}
                                    searchUrl={venue.search().url}
                                    onChange={(v) => {
                                        setV(v);
                                        setData("venue_id", v.id);
                                    }}
                                    getOptionLabel={(v) => v.name}
                                    getOptionValue={(v) => v.id}
                                    renderOption={(v) => (
                                        <div>
                                            <div>{v?.name}</div>
                                            <div className="text-xs hover:text-zinc-200">
                                                {v?.state_code}
                                            </div>
                                        </div>
                                    )}
                                    icon={MapPin}
                                    label="Event Venue"
                                    labelRequired={true}
                                    onCreate={(query) => { setVenueQuery(query); setVenueDialogOpen(true) }}
                                    labelRequired={true}

                                />

                                <AddVenueDialog
                                    open={venueDialogOpen}
                                    onOpenChange={setVenueDialogOpen}
                                    states={states.data}
                                    triggerText={venueQuery}
                                    setVenueId={(v) => {

                                        setV(v);
                                        setData("venue_id", v.id);
                                    }}

                                    labelRequired={true}


                                />






                                <SearchableSelect
                                    options={organizations}
                                    onChange={(org) => setData("organization_id", org.id)}

                                    getOptionLabel={(org) => org.name}
                                    getOptionValue={(org) => org.id}
                                    renderOption={(org) => (
                                        <div>
                                            <div>{org?.name}</div>
                                            <div className="text-xs hover:text-zinc-200">
                                                {org?.state?.short_code}
                                            </div>
                                        </div>
                                    )}
                                    icon={FileUser}
                                    label="Organizer "
                                    value={organizations.find(o => o.id === data.organization_id) ?? null}
                                    labelRequired={true}
                                />

                                <div className="col-span-3">
                                    <div className="grid grid-cols-2  gap-6">
                                        <FormSelect
                                            label="category"
                                            labelRequired={true}
                                            id="tournament_category"
                                            placeHolder="e.g., Sub Juniors"
                                            items={categories.data}
                                            value={data.category_id}
                                            onValueChange={(val) => setData('category_id', val)}
                                        />


                                        {competitionType && competitionType.length > 0 &&
                                            <FormCheckbox
                                                label="Competition For"
                                                labelRequired={true}
                                                options={competitionType}
                                                value={data.competition_type}
                                                handleCheckboxChange={(competition_type) => handleCheckboxChange(competition_type)}
                                                hasError={errors.competition_type}
                                            />}

                                    </div>



                                </div>

                                {/* <CreatableSelect 
                                      selectedValue = {data.venue_id}
                                        searchApiUrl = {venue.search().url}
                                        passQuery={(e) => setVenueQuery(e.target.value) }
                                        handleSelect={(val) => setData('venue_id', val)}
                                        addDialog={ <AddVenueDialog triggerText={venueQuery} states={states}
                                            setVenueId={(newVenueObject) => setData('venue_id', newVenueObject.id  )}
                                        />} */}
                                {/* /> */}





                            </div>
                        </div>

                        <FormCard title="Event Timeline">
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-6 gap-y-8  ">
                                <div className="space-y-4">
                                    <h3 className="font-label text-xs font-black uppercase text-secondary tracking-widest flex items-center gap-2">
                                        <Calendar /> Tournament Dates
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <FormInput className="flex-1" type="date"
                                            onChange={(e) => setData('starts_at', e.target.value)} value={data.starts_at} />

                                        <span className="text-on-surface-variant">to</span>
                                        <FormInput className="flex-1" type="date"
                                            onChange={(e) => setData('ends_at', e.target.value)} value={data.ends_at} />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-label text-xs font-black uppercase text-secondary tracking-widest flex items-center gap-2">
                                        <ClipboardPen /> Registration Window
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <FormInput className="flex-1" type="date"
                                            onChange={(e) => setData('registration_open_at', e.target.value)} value={data.registration_open_at} />

                                        <span className="text-on-surface-variant">to</span>
                                        <FormInput className="flex-1" type="date"
                                            onChange={(e) => setData('registration_close_at', e.target.value)} value={data.registration_close_at} />
                                    </div>
                                </div>
                            </div>

                        </FormCard>

                        <FormCard title="Bracket &amp; Logic">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <label className="relative group cursor-pointer">
                                    <input className="peer sr-only" name="bracket" type="radio" value="pool_play"

                                        onChange={(e) => setData('competition_format', e.target.value)}
                                    />
                                    <div className="h-full p-6 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all group-hover:bg-surface-container-high flex flex-col gap-3">
                                        <FolderTree className="h-10 w-10 text-primary" />

                                        <p className="font-bold text-primary">Pool Play</p>
                                        <p className="text-xs text-on-surface-variant leading-relaxed">Every team plays every other team in their pool. Points-based advancement.</p>
                                    </div>
                                </label>
                                <label className="relative group cursor-pointer">
                                    <input className="peer sr-only" name="bracket" type="radio" value="round_robin" onChange={(e) => setData('competition_format', e.target.value)} />
                                    <div className="h-full p-6 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all group-hover:bg-surface-container-high flex flex-col gap-3">
                                        <Component className="h-10 w-10 text-primary" />
                                        <p className="font-bold text-primary">Round Robin</p>
                                        <p className="text-xs text-on-surface-variant leading-relaxed">Every team plays every other team. Points-based advancement.</p>
                                    </div>
                                </label>

                                {/* <label className="relative group cursor-pointer">
                                    <input className="peer sr-only" name="bracket" type="radio" />
                                    <div className="h-full p-6 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all group-hover:bg-surface-container-high flex flex-col gap-3">
                                        <Network className="h-10 w-10 text-primary" />

                                        <p className="font-bold text-primary">Single Knockout</p>
                                        <p className="text-xs text-on-surface-variant leading-relaxed">Lose once and the team is out. Fast-paced elimination format.</p>
                                    </div>
                                </label>

                                <label className="relative group cursor-pointer">
                                    <input className="peer sr-only" name="bracket" type="radio" />
                                    <div className="h-full p-6 rounded-xl bg-surface-container-low border-2 border-transparent peer-checked:border-primary peer-checked:bg-surface-container-lowest transition-all group-hover:bg-surface-container-high flex flex-col gap-3">
                                        <Layers2 className="h-10 w-10 text-primary" />

                                        <p className="font-bold text-primary">Double Elimination</p>
                                        <p className="text-xs text-on-surface-variant leading-relaxed">Teams drop to a loser's bracket after one defeat. Two losses to exit.</p>
                                    </div>
                                </label> */}
                            </div>
                        </FormCard>


                        {/* <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-1 h-6 bg-secondary"></div>
                                <h2 className="font-headline font-bold text-xl uppercase tracking-wider">Prize Purse &amp; Rewards</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="font-label text-sm font-bold uppercase text-on-surface-variant">Grand Prize (1st Place)</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary">$</span>
                                            <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 pl-10 font-mono shadow-sm form-input-focus" placeholder="5000" type="number" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="font-label text-sm font-bold uppercase text-on-surface-variant">Runner Up (2nd Place)</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary">$</span>
                                            <input className="w-full bg-surface-container-lowest border-none rounded-lg p-4 pl-10 font-mono shadow-sm form-input-focus" placeholder="2500" type="number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="material-symbols-outlined text-primary"
                                        //  style="font-variation-settings: 'FILL' 1;"
                                        >workspace_premium</span>
                                        <h3 className="font-bold text-primary">Additional Perks</h3>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input className="rounded border-outline text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                                            <span className="text-sm font-medium">Automatic Regional Seed</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input className="rounded border-outline text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                                            <span className="text-sm font-medium">Custom Trophy &amp; Medals</span>
                                        </label>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input className="rounded border-outline text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                                            <span className="text-sm font-medium">Player of the Month Nomination</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- Submit Actions --> */}
                        <div className="pt-10 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-outline-variant/30">
                            <button className="w-full sm:w-auto px-8 py-4 font-bold text-primary hover:bg-surface-container-low rounded transition-all" type="submit" value="draft" onClick={() => submit('draft')}>Save as Draft</button>
                            <button className="w-full sm:w-auto px-10 py-4 font-bold bg-primary text-white rounded shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit" value="publish" onClick={() => submit('publish')}>
                                <span>Publish Tournament</span>
                                <Rocket />

                            </button>
                        </div>
                    </form>
                </div>
                {/* <!-- Right Column: Contextual Card & Map --> */}

            </div>
        </>
    )
}

TournamentCreate.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Tournaments', href: tournaments.index().url },
        { title: 'New Tournament' }
    ],

}