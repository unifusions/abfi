import WidgetCard from "@/components/ext/dashboard/widget-card";
import LinkButton from "@/components/ext/link-button";
import PageHeader from "@/components/ext/page-header";
import PlayerIndexStats from "@/components/ext/player/player-index-stats";
import { create, index } from "@/routes/players";
import { Head, router, useForm } from "@inertiajs/react";
import { ChevronDown, Edit, Option, SlidersHorizontal, UserPlus } from "lucide-react";

import TableContainer from "@/components/ext/table-container";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AppPagination from "@/components/ext/app-pagination";
import FormSelect from "@/components/ext/form-select";

import PlayerSearch from "./player-search";
import PlayerList from "./player-list";
import { useEffect, useRef, useState } from "react";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { dashboard } from "@/routes";

type Props = {
    registered_players: number,
    players: {
        data: [],

    },
    filters: {
        search?: string;
        association?: string;
    };
}

export default function PlayerIndex({ registered_players, m_players, playerData,

    f_players, players, associations, filters,

    player_change, player_change_direction
}: Props) {

    const { allStats, maleStats, femaleStats } = playerData;
    const [search, setSearch] = useState(filters.search ?? "");
    const [association, setAssociation] = useState(filters.association ?? "");
    const [processing, setProcessing] = useState(false);
    const firstLoad = useRef(true);

    useSetBreadcrumbs([
        {title : 'Dashboard', href:dashboard().url},
        {title : 'Players' , href: index().url}
    ])
    useEffect(() => {
        if (firstLoad.current) {
            firstLoad.current = false;
            return;
        }

        const delayDebounce = setTimeout(() => {
            setProcessing(true);

            router.get(index.url(),
                { search: search, association: association },
                {

                    preserveState: true,
                    replace: true, // Replaces history state so 'back' button works cleanly
                }
            );
            setProcessing(false);
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [search, association]);

    return (
        <>

            <PageHeader title="Players Directory"

            >

                <LinkButton href={create()} icon={UserPlus}>
                    Add New Player
                </LinkButton>
            </PageHeader>




            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

                <PlayerIndexStats
                    title="Registered Players"
                    value={registered_players}
                    changeType={allStats?.direction}
                    changeValue={allStats?.formatted}
                    variant="secondary"
                />


                <PlayerIndexStats
                    title="Boys/Men"
                    value={m_players}
                    changeType={maleStats?.direction}
                    changeValue={maleStats?.formatted}
                />

                <PlayerIndexStats
                    title="Girls/Women"
                    value={f_players}
                    changeType={femaleStats?.direction}
                    changeValue={femaleStats?.formatted}

                />




            </div>

            <PlayerSearch associations={associations}
                searchValue={search}
                onSearch={setSearch}

                selectedAssociation={association}
                onSelectAssociation={setAssociation}
            />

            <PlayerList players={players} disabled={processing} />






        </>
    )
}