import tournaments from "@/routes/tournaments";
import { builder, certificates, closeRegistration, fixtures, standings } from "@/routes/tournaments/competition";
import { index } from "@/routes/tournaments/competition/accreditation";
import { Link, router, usePage } from "@inertiajs/react";



function getActionButtonConfig(competition, tournament) {
    if (!competition) return null;

    const {
        id,
        phase,
        pools_generated_at,
        pools_locked_at,
        fixture_generated_at,
        fixture_locked_at,
    } = competition;

    const baseUrl = `/competitions/${id}`;

    switch (phase) {
        case 'registration_open':
            return {
                label: 'Close Registration',
                type: 'action',
                action: () => router.patch(closeRegistration({ tournament: tournament, competition: competition?.id }).url)
            };

        case 'registration_closed':
            return {
                label: 'Verify Rosters',
                href: `${baseUrl}/rosters`,
            };

        case 'verification':
            return {
                label: 'Issue ID Cards',
                href: index({ tournament: tournament, competition: competition?.id }).url,
            };

        case 'scheduled':
            if (!pools_generated_at) {
                return { label: 'Generate Pools', href: tournaments.competition.builder({ tournament: tournament, competition: competition?.id }).url };
            }
            if (!pools_locked_at) {
                return { label: 'Lock Pools', href: `${baseUrl}/pools/lock` };
            }
            if (!fixture_generated_at) {
                return { label: 'Generate Fixtures', href: `${baseUrl}/fixtures/generate` };
            }
            if (!fixture_locked_at) {
                return { label: 'Lock Fixture', href: `${baseUrl}/fixtures/lock` };
            }
            return { label: 'Update Scores', href: fixtures({ tournament: tournament, competition: competition?.id }).url };


        case 'completed':
            return {
                label: 'Process Certificates',
                href: certificates({ tournament: tournament, competition: competition?.id }).url,
            };

        case 'process_certificate':
            return {
                type: 'link',

                label: 'Manage Certificates',
                href: certificates({ tournament: tournament, competition: competition?.id }).url,
            };

        default:
            return null;
    }
}
export default function TournamentCompetitionStatus({ competitions, approvedRosters }) {

    const { tournament } = usePage().props;
    return (
        <>
            {competitions.map((competition: any) => {
                const config = getActionButtonConfig(competition, tournament?.id);
                const containerStyle = "group bg-zinc-50 border border-outline-variant/20 p-4 flex flex-col gap-3 w-48 hover:bg-accent-secondary hover:text-white transition-all";
                const { can } = competition;

                if (!can.progress) {
                    return null;
                }

                if (config?.type === 'action') {
                    return (
                        <button
                            type="button"
                            onClick={config.action}
                            className={containerStyle}
                        >

                            <div>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{competition?.name}


                                </p>
                                <p className="text-sm font-bold text-primary group-hover:text-white">{approvedRosters[competition.competition_type]?.length ?? 0} Teams Finalized</p>
                            </div>
                            <div
                                className="w-full py-2 bg-primary text-white text-center uppercase text-xs font-bold hover:opacity-90 transition-opacity">
                                {config?.label}

                            </div>
                        </button>
                    );
                }

                return (
                    <Link
                        href={config?.href}
                        className={containerStyle}>
                       
                        <div>
                            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{competition?.name}</p>
                            <p className="text-sm font-bold text-primary group-hover:text-white">{approvedRosters[competition.competition_type]?.length ?? 0} Teams Finalized</p>
                        </div>
                        {config && <div
                            className="w-full py-2 bg-primary text-white text-center uppercase text-xs font-bold hover:opacity-90 transition-opacity">
                            {config?.label}

                        </div>}
                    </Link>
                )


            })}
        </>
    )
}