import PageHeader from "@/components/ext/page-header";
import { useState } from "react";


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
        players: Person[];
        officials: Person[];
    };
}

export default function RosterMemberReplace({ roster }: Props) {

    const [replacements, setReplacements] = useState<Replacement[]>([
        {
            type: 'player',
            replacing_id: '',
            replacement_id: '',
        },
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

    const submit = () => {

    };

    return (
        <>
            <PageHeader
                title="Replace Player/Official"
                subText="Replace Player/Official in the Roster"
            >
            </PageHeader>
            <div className="grid grid-cols-1 gap-4">

            </div>
        </>
    )
}   