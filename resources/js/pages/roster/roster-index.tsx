import PageHeader from "@/components/ext/page-header";
import PlayerIndexStats from "@/components/ext/player/player-index-stats";
import RosterList from "./roster-list";
import { useAuthorization } from "@/hooks/use-authorization";
import LinkButton from "@/components/ext/link-button";
import { create, index } from "@/routes/rosters";
import { Plus } from "lucide-react";
import { usePage } from "@inertiajs/react";
import { useSetBreadcrumbs } from "@/context/BreadcrumbContext";
import { dashboard } from "@/routes";

export default function RosterIndex({
    rosters, drafts, total_rosters, approved_rosters, stats
}) {

    useSetBreadcrumbs([
        {title : 'Dashboard', href: dashboard().url},
        {title : 'Rosters' , href : index().url}
    ])
    const { can, permissions } = useAuthorization();
const { totalRosters, submittedRosters, approvedRosters } = stats;
    const cardStats = [
        {
            label: 'Total Rosters',
            value: totalRosters?.count,
            changeType : totalRosters?.changeType,
            changeValue :totalRosters?.changeValue,
        },
        {
            label: 'Drafts',
            value: submittedRosters?.count,
            // changeType : submittedRosters?.changeType,
            // changeValue : submittedRosters?.changeValue,
        },
        {
            label: 'Approved Rosters',
            value: approvedRosters?.count,
            changeType : approvedRosters?.changeType,
            changeValue : approvedRosters?.changeValue
        }
    ]
    return (
        <>
            <PageHeader title="Roster Directory">

                {can('roster.create') && <LinkButton href={create()} icon={Plus}> New Roster </LinkButton>}
            </PageHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {cardStats.map((stat, index) => <PlayerIndexStats
                    key={`roster_stat_${index}`}
                    title={stat.label}
                    value={stat.value}
                    changeType={stat?.changeType}
                    changeValue={stat?.changeValue}
                    variant='secondary'
                />
                )}
            </div>

            <RosterList rosters={rosters} />
        </>
    )
}