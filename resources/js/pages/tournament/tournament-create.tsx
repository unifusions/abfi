import CreatableSelect from "@/components/ext/createable-select";
import FormInput from "@/components/ext/form-input";
import FormInputWithIcon from "@/components/ext/form-input-with-icon";
import PageHeader from "@/components/ext/page-header";
import { Button } from "@/components/ui/button";
import { dashboard } from "@/routes";
import tournaments from "@/routes/tournaments";
import venue from "@/routes/venue";
import { useForm } from "@inertiajs/react";
import { Calendar, ClipboardPen, Component, FileUser, FolderTree, Layers2, ListTree, MapPin, Network, Rocket } from "lucide-react";
import AddVenueDialog from "./add-venue-dialog";
import { useEffect, useState } from "react";
import InputError from "@/components/input-error";
import SearchableSelect from "@/components/ext/searcable-select";
import FormSelect from "@/components/ext/form-select";
import { FormCheckbox } from "@/components/ext/form-checkbox";
import FormCard from "@/components/ext/form-card";

type Props = {
    states?: [],
    organizations?: []
}
export default function TournamentCreate({ states, organizations, categories }: Props) {

    const [v, setV] = useState();
    const [competitionType, setCompetitionType] = useState({});
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
        'competition_type': []

    });

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


    return (
        < >
            <PageHeader title="New Tournament" subText="Initialize a new event. Ensure all data conforms to guidelines." />
            <div className="flex flex-col lg:flex-row gap-10 max-w-5xl">
                {/* <!-- Left Column: Form Sections --> */}
                <div className="flex-1 space-y-10">

                    <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                        {/* <!-- Section 1: Core Identity --> */}
                        <div className="space-y-6">
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
                                    <input className="peer sr-only" name="bracket" type="radio" />
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


                        {/* <div class="space-y-6">
                            <div class="flex items-center gap-4">
                                <div class="w-1 h-6 bg-secondary"></div>
                                <h2 class="font-headline font-bold text-xl uppercase tracking-wider">Prize Purse &amp; Rewards</h2>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div class="space-y-4">
                                    <div class="space-y-2">
                                        <label class="font-label text-sm font-bold uppercase text-on-surface-variant">Grand Prize (1st Place)</label>
                                        <div class="relative">
                                            <span class="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary">$</span>
                                            <input class="w-full bg-surface-container-lowest border-none rounded-lg p-4 pl-10 font-mono shadow-sm form-input-focus" placeholder="5000" type="number" />
                                        </div>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="font-label text-sm font-bold uppercase text-on-surface-variant">Runner Up (2nd Place)</label>
                                        <div class="relative">
                                            <span class="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-primary">$</span>
                                            <input class="w-full bg-surface-container-lowest border-none rounded-lg p-4 pl-10 font-mono shadow-sm form-input-focus" placeholder="2500" type="number" />
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-primary/5 rounded-xl p-6 border border-primary/10 flex flex-col justify-center">
                                    <div class="flex items-center gap-3 mb-4">
                                        <span class="material-symbols-outlined text-primary"
                                        //  style="font-variation-settings: 'FILL' 1;"
                                        >workspace_premium</span>
                                        <h3 class="font-bold text-primary">Additional Perks</h3>
                                    </div>
                                    <div class="space-y-3">
                                        <label class="flex items-center gap-3 cursor-pointer">
                                            <input class="rounded border-outline text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                                            <span class="text-sm font-medium">Automatic Regional Seed</span>
                                        </label>
                                        <label class="flex items-center gap-3 cursor-pointer">
                                            <input class="rounded border-outline text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                                            <span class="text-sm font-medium">Custom Trophy &amp; Medals</span>
                                        </label>
                                        <label class="flex items-center gap-3 cursor-pointer">
                                            <input class="rounded border-outline text-primary focus:ring-primary w-5 h-5" type="checkbox" />
                                            <span class="text-sm font-medium">Player of the Month Nomination</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- Submit Actions --> */}
                        <div class="pt-10 flex flex-col sm:flex-row items-center justify-end gap-4 border-t border-outline-variant/30">
                            <button class="w-full sm:w-auto px-8 py-4 font-bold text-primary hover:bg-surface-container-low rounded transition-all" type="submit" value="draft" onClick={() => submit('draft')}>Save as Draft</button>
                            <button class="w-full sm:w-auto px-10 py-4 font-bold bg-primary text-white rounded shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2" type="submit" value="publish" onClick={() => submit('publish')}>
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