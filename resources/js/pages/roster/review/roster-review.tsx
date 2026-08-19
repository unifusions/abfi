import PageHeader from "@/components/ext/page-header";
import PlayerSidebar from "./player-sidebar";
import { useState } from "react";
import PlayerReview from "./player-review";
import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import { approve } from "@/routes/rosters/review";

export default function RosterReview({
    roster, roster_players
}) {

    const [selectedPlayer, setSelectedPlayer] = useState(false);
    const onSelectPlayer = (player) => {
        setSelectedPlayer(player);

    }
    const { post } = useForm();
    return (

        <>
            <PageHeader title="Roster Review & Verification" subText={roster?.name}>
                <div className="flex items-center ">
                    <Button size="xl" onClick={() => post(approve({ roster: roster.id }).url)} >Approve Roster</Button>
                    <Button size="xl">Disapprove Roster</Button>
                </div>
            </PageHeader>

            <div className="flex-1 flex overflow-hidden border-t ">

            <PlayerSidebar players={roster_players?.data} selectedPlayer={selectedPlayer} onSelect={onSelectPlayer} />
                {selectedPlayer && <PlayerReview roster={roster?.id} player={selectedPlayer} />

                }


            </div>

        </>

    )
} 