import PageHeader from "@/components/ext/page-header";
import PlayerIndexStats from "@/components/ext/player/player-index-stats";
import RosterList from "./roster-list";
import { useAuthorization } from "@/hooks/use-authorization";
import LinkButton from "@/components/ext/link-button";
import { create } from "@/routes/rosters";
import { Plus } from "lucide-react";
import { usePage } from "@inertiajs/react";

export default function RosterIndex({
    rosters, drafts, total_rosters, approved_rosters
}) {
    const { can, permissions } = useAuthorization();

    const stats = [
        {
            label: 'Total Rosters',
            value: total_rosters,

        },
        {
            label: 'Drafts',
            value: drafts
        },
        {
            label: 'Approved Rosters',
            value: approved_rosters
        }
    ]
    return (
        <>
            <PageHeader title="Roster Directory">

                {can('roster.create') && <LinkButton href={create()} icon={Plus}> New Roster </LinkButton>}
            </PageHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, index) => <PlayerIndexStats
                    key={`roster_stat_${index}`}
                    title={stat.label}
                    value={stat.value}
                    changeType="increase"
                    changeValue="+5.2% from last year"
                    variant='secondary'
                />
                )}
            </div>

            <RosterList rosters={rosters} />
        </>
    )
}