import LinkButton from "@/components/ext/link-button";
import PageHeader from "@/components/ext/page-header";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { dashboard } from "@/routes";
import { useForm } from "@inertiajs/react";
import { CheckCircle, Clock, Lock, Shield, UserMinus, UserPlus } from "lucide-react";
import { useState } from "react";
import MemberDisplay from "../replacement/member-display";
import Replacementui from "../replacement/replacement-ui";
import SearchableSelect from "@/components/ext/searcable-select";
import { replace } from "@/routes/rosters/replace";


type ReplacementType = 'player' | 'official';

interface Person {
    id: string;
    name: string;
}

interface Replacement {
    type: ReplacementType;
    replacing_id: string;
    replacement_id: string;
}

interface Props {
    roster: {
        id: string;
        name: string;
        players: Person[];
        officials: Person[];
    };
}

const RosterMembersCount = ({ title, count, max }: { title: string, count: number, max: number }) => {
    return (
        <div className="bg-zinc-100 px-3 py-1.5 rounded text-center">
            <div className="text-[10px] uppercase font-bold text-outline">{title}</div>
            <div className="text-sm font-black text-primary font-headline">{count} / {max}</div>
        </div>
    )
}

const MemberSelect = ({ items, value, onValueChange, label }) => {
    return (
        <div className="w-full">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-outline mb-1">
                {label}
            </label>

            <Select

                value={value}

                onValueChange={onValueChange}>
                <SelectTrigger className=" text-xs font-semibold "><SelectValue placeholder="Select Player to vacate" /> </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Select</SelectLabel>
                        {items?.map((item, index) => (
                            <SelectItem key={item?.value} value={item.value.toString()} >
                                {item?.label}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>
    )
}



export default function RosterMemberReplace({ roster, tournament, association, competition, players, available_players
}: Props) {

    const [replacements, setReplacements] = useState<Replacement[]>([
        {
            type: 'player',
            replacing_id: '',
            replacement_id: '',
        },
    ]);

    const { data, setData, processing, errors, post, reset } = useForm({
        type: 'player',
        replacing_id: '',
        replacement_id: '',
        reason: '',
        remarks: '',
    })

    const playerSelectOptions = players?.data?.map(player => ({
        label: `[${player?.code}] • ${player?.name}`, // What the user sees
        value: player?.id  // The raw data sent to your state/backend
    }));

    const availablePlayerSelectOptions = available_players?.data?.map(player => ({
        label: `[${player?.code}] • ${player?.name}`, // What the user sees
        value: player?.id  // The raw data sent to your state/backend
    }));

    const [replacement, setReplacement] = useState({
        type: 'player',
        replacing_id: '',
        replacement_id: '',
        reason: ''
    });

    useSetBreadcrumbs([
        { title: 'Dashboard', href: dashboard().url },
        { title: 'Tournaments', href: '/tournaments' },
        { title: tournament?.name, href: `/tournaments/${tournament.id}` },
        { title: 'Roster', href: '/rosters', },
        { title: roster?.name, href: `/roster/${roster.id}`, },
        { title: 'Replace Player/Official', href: `/roster/${roster.id}/replace`, },
    ]);


    const addReplacement = () => {
        setReplacements([
            ...replacements,
            {
                type: 'player',
                replacing_id: '',
                replacement_id: '',
            },
        ]);
    };

    const removeReplacement = (index: number) => {
        setReplacements(
            replacements.filter((_, i) => i !== index)
        );
    };

    const updateReplacement = (
        index: number,
        field: keyof Replacement,
        value: string
    ) => {
        setReplacements((current) =>
            current.map((replacement, i) =>
                i === index
                    ? {
                        ...replacement,
                        [field]: value,
                    }
                    : replacement
            )
        );
    };

    const getPeople = (type: ReplacementType) => {
        return type === 'player'
            ? roster.players
            : roster.officials;
    };

    const submit = (e) => {
        e.preventDefault();
        post(replace({ roster: roster?.id }).url, {
            onSuccess : () => reset()
        })
    };

    return (
        <>
            <PageHeader
                title="Replace Player/Official"
                subText="Replace Player/Official in the Roster"
            >
            </PageHeader>

            <section
                className="bg-zinc-50   p-5 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary"></div>
                <div className="space-y-1.5 pl-2">
                    <div className="flex items-center gap-2">
                        <span
                            className="px-2.5 py-0.5 rounded-full bg-red-200 text-red-800 text-[11px] font-bold tracking-wide uppercase">
                            Emergency Protocol Active
                        </span>
                        <span className="text-xs font-semibold text-on-surface-variant">Pre-Tournament Lock Phase • Cutoff: 24h prior to
                            Match 1</span>
                    </div>
                    <p className="text-xs text-on-surface-variant/80">
                        Governed under Rule 14.3(b): All player substitutions require accredited Federation CMO medical
                        certification and Technical Director approval.
                    </p>
                </div>
                <div className="flex items-center gap-4 bg-white px-4 py-2.5 rounded-lg shrink-0">
                    <div className="flex items-center gap-2 text-secondary">
                        <Clock className="animate-pulse text-xl" />

                        <span className="text-xs font-bold uppercase tracking-wider font-headline">Window Closes:</span>
                    </div>
                    <span className="font-headline font-black text-xl text-primary tracking-tight">18h 42m</span>
                </div>
            </section>

            <section className="bg-white   py-5 relative overflow-hidden stadium-shadow">

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <h1 className="font-headline text-lg font-extrabold text-primary">{roster?.name}</h1>
                            <span className="text-xs font-medium text-on-surface-variant">({tournament?.category?.name} {competition?.name} Division)</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-on-surface-variant">
                            <span>Roster ID: <strong className="text-on-surface">{roster?.id}</strong></span>
                            <span>•</span>
                            {/* <span>Head Coach: <strong class="text-on-surface">R. Natarajan</strong></span>
              <span>•</span> */}
                            <span>State Association: <strong class="text-on-surface">{association?.name}</strong></span>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <RosterMembersCount title="Players" count={roster?.players?.length} max={tournament?.category?.maximum_players} />
                        <RosterMembersCount title="Officials" count={roster?.officials?.length} max={tournament?.category?.maximum_officials} />
                        <span
                            className="px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface text-xs font-bold flex items-center gap-1.5">
                            <Lock className="h-4 w-4 text-secondary" />

                            Locked - Emergency Modifications Only
                        </span>
                    </div>
                </div>
            </section>
<form onSubmit={submit}>
            <section class="space-y-4 bg-zinc-100/60 p-4">
            
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="font-headline text-base font-bold text-primary">Emergency Substitution Studio</h2>
                        <p class="text-xs text-on-surface-variant">Authorized Two-Column Comparative Transfer Workspace
                        </p>
                    </div>
                    {/* <span class="text-xs font-bold text-primary bg-primary-fixed px-2.5 py-1 rounded-full">
                        Sub-Slot 1 of 21 Allowed
                    </span> */}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

                    <div
                        className="lg:col-span-5 bg-white rounded-xl p-5 flex flex-col justify-between space-y-4 relative stadium-shadow">
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <span
                                    class="font-headline text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1">

                                    <UserMinus className="w-4 h-4" />
                                    Outgoing Roster Member (Vacating Slot)
                                </span>

                                <span
                                    className="px-2 py-0.5 rounded-full bg-red-200 text-red-800 text-[10px] font-bold">Withdrawal
                                    Initiated</span>
                            </div>

                            <MemberSelect

                                label="Select Active Player to Replace"
                                value={data.replacing_id}
                                onValueChange={(value) => setData( 'replacing_id',  value )}
                                items={playerSelectOptions}
                            />

                            {
                                data.replacing_id &&
                                <>
                                    <MemberDisplay member={players?.data?.find(
                                        (player) => player.id.toString() === data.replacing_id.toString()
                                    )} />
                                    <div class="space-y-2">
                                        <label class="block text-[11px] font-bold uppercase tracking-wider text-outline">Reason for Emergency
                                            Withdrawal</label>
                                        <Textarea value={data?.reason} onChange={(e) => setData('reason', e.target.value)}>

                                        </Textarea>

                                    </div>
                                </>
                            }






                            <div className="pt-2">
                                <span class="inline-flex items-center gap-1 text-[11px] text-on-surface-variant font-medium">
                                    <CheckCircle className="text-secondary h-4 w-4" />

                                    Slot Vacancy Pre-Approved by Federation Secretary
                                </span>
                            </div>
                        </div>


                    </div>

                    <Replacementui />
                    <div
                        className="lg:col-span-5 bg-white p-5 flex flex-col justify-between space-y-4 relative stadium-shadow">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span
                                    className="font-headline text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1">
                                    <UserPlus className="w-4 h-4" />

                                    Incoming Replacement Candidate
                                </span>
                                <span
                                    className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-bold">State
                                    Registry</span>
                            </div>

                            <MemberSelect
                                label="Select Replacement Player"
                                items={availablePlayerSelectOptions}
                                value={data?.replacement_id}
                                onValueChange={(value) => setData('replacement_id', value)}

                            />


                            {data?.replacement_id && <>

                                <MemberDisplay member={available_players?.data?.find(
                                    (player) => player.id.toString() === data.replacement_id.toString()
                                )} />

                                <div class="space-y-1.5">
                                    <label class="block text-[11px] font-bold uppercase tracking-wider text-outline">Candidate Regulatory
                                        Audit </label>
                                    <div class="grid grid-cols-2 gap-2 text-[11px]">
                                        <div class="flex items-center gap-1.5 p-1.5 rounded bg-surface-container">
                                            <CheckCircle className="h-4 w-4 text-primary" />

                                            <span class="text-on-surface font-medium">Registry Verified</span>
                                        </div>
                                        <div class="flex items-center gap-1.5 p-1.5 rounded bg-surface-container">
                                            <CheckCircle className="h-4 w-4 text-primary" />
                                            <span class="text-on-surface font-medium">Age Proof Passed</span>
                                        </div>

                                    </div>
                                </div>
                            </>}




                            {/* <div class="space-y-1.5 pt-1">
                                <div class="flex justify-between text-[11px] font-medium text-on-surface-variant">
                                    <span>Role Fit (Pitcher → Pitcher)</span>
                                    <span class="font-bold text-primary">100% Compatible</span>
                                </div>
                                <div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                                    <div class="bg-primary h-full rounded-full"  ></div>
                                </div>
                                <div class="flex justify-between text-[10px] text-outline">
                                    <span>Height: 182 cm • 78 kg</span>
                                    <span>TN State Reserve Rank: #01</span>
                                </div>
                            </div> */}
                        </div>

                        {/* <div class="pt-2">
                            <span class="inline-flex items-center gap-1 text-[11px] text-primary font-semibold">
                                <span class="material-symbols-outlined text-sm" data-icon="verified_user">verified_user</span>
                                Pre-Tournament Anti-Doping Consent on File
                            </span>
                        </div> */}
                    </div>
                </div>
            </section>

            <section class="bg-surface-container-lowest rounded-xl p-6 space-y-5 stadium-shadow">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
                    <div>
                        <h2 class="font-headline text-base font-bold text-primary">Federation Sanctioning &amp; Sign-Off</h2>
                        <p class="text-xs text-on-surface-variant">
                            Emergency replacement sanctioned by Federation. New tournament player ID badge will be auto-generated on sanctioning the replacement.

                            {(data?.replacing_id && data?.replacement_id) &&
                                <>
                                    {data?.replacing_id} has been replaced with {data?.replacement_id}.
                                </>
                            }

                        </p>
                    </div>
                    <div class="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded text-xs">
                        <Shield className="text-primary h-4 w-4" />

                        <span className="font-bold text-primary">Audit Tracked Action</span>
                        {/* <span className="text-outline">|</span> */}
                        {/* <span className="text-on-surface-variant">Ref: SEC-ROST-71-TN04</span> */}
                    </div>
                </div>


                <div class="space-y-1.5">
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-outline">Official Administrative
                        Sanction Remarks</label>
                    <Textarea
                        class="w-full bg-surface-container-low text-on-surface text-xs rounded p-3 border-0 focus:ring-1 focus:ring-primary leading-relaxed font-body"
                        rows="2"
                        value={data?.remarks}
                        onChange={(e)=> setData('remarks', e.target.value)}
                        >
                       
                       </Textarea>
                </div>

                <div class="flex flex-col sm:flex-row items-center justify-end gap-4 pt-2">

                    <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <LinkButton
                            href={`/rosters/${roster?.id}`}
                            variant="ghost"
                            className="w-full sm:w-auto px-4 py-2.5 rounded text-xs font-semibold   hover:text-primary hover:bg-surface-container-high transition-colors">
                            Cancel &amp; Keep Original Roster
                        </LinkButton>
                        <Button
                        type="submit"
                            size="xl"
                            className="text-xs font-bold tracking-wider uppercase shadow">
                            <Shield />

                            <span>Approve &amp; Sanction Replacement</span>
                        </Button>
                    </div>
                </div>
            </section>
            </form>
        </>
    )
}

//   <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
//     <div class="p-3.5 bg-surface-container-low rounded-lg space-y-1">
//         <span class="text-[10px] font-bold uppercase tracking-wider text-outline">Sanctioning Official 1</span>
//         <p class="text-xs font-bold text-primary">Dr. K. Ramanathan</p>
//         <p class="text-[11px] text-on-surface-variant">Tournament Technical Director • Diamond Registry Signatory
//         </p>
//         <span
//             class="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-primary font-mono">
//             DIGITAL SIG: VERIFIED [PUB-KEY-9824]
//         </span>
//     </div>
//     <div class="p-3.5 bg-surface-container-low rounded-lg space-y-1">
//         <span class="text-[10px] font-bold uppercase tracking-wider text-outline">Sanctioning Official 2</span>
//         <p class="text-xs font-bold text-primary">Federation Chief Medical Officer</p>
//         <p class="text-[11px] text-on-surface-variant">Medical Commission Board • National Sports Federation</p>
//         <span
//             class="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-surface-container-highest text-primary font-mono">
//             DIAGNOSIS CERT: VALIDATED &amp; ARCHIVED
//         </span>
//     </div>
// </div>