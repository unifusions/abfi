import PageHeader from "@/components/ext/page-header";
import { ArrowRight, Award, Badge, Group, IdCard, RotateCcw, SendHorizonal, UserRound, Users, UsersRound } from "lucide-react";
import ProcessParticipantCertificate from "./process-participant-certificate";
import ProcessAllCertificate from "./process-all-certificate";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { preview } from "@/routes/tournaments/competition/certificates";
import { certificatesForRoster } from "@/routes/tournaments/competition";
import TableContainer from "@/components/ext/table-container";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { stateColors } from "@/lib/stateColors";
import WinnerCard from "./winner-card";
import RunnerCard from "./runner-card";
import LoserCard from "./loser-card";
import ParticipantCard from "./participant-card";

export default function CertificateIndex({ tournament, competition, certificates,
    participating_rosters, participant_players, winning_players }) {

        const showCertificateLink = competition?.phase === 'process_certificate';
    return (
        <>


            <PageHeader title="Competition Certificates" subText={tournament?.name}>

                {competition?.phase === 'completed' &&
                    <div className="flex gap-4">
                        <ProcessAllCertificate
                            tournament={tournament}
                            competition={competition}
                        /> </div>}

            </PageHeader>


            <div className="grid grid-cols-12 gap-8">

                <section className="col-span-12   space-y-6">
                    <div className="bg-zinc-50 rounded-xl p-1 overflow-hidden relative border-none">
                        <div className="flex items-center justify-between px-6 py-4">
                            <div className="flex items-center gap-3">
                                <Award className="text-accent-secondary" />
                                <h3 className="font-headline font-extrabold text-primary uppercase tracking-tight">Podium
                                    Certificates</h3>
                            </div>

                        </div>
                        <div className="grid grid-cols-4 p-4 gap-3 bg-surface-container-low">

                            <WinnerCard winner={winning_players?.winner}
                                link={showCertificateLink && certificatesForRoster({
                                    tournament: tournament?.id,
                                    competition: competition?.id,
                                    roster: winning_players?.winner?.id
                                }).url}
                            />

                            <RunnerCard
                                runner={winning_players?.runner_up}
                                link={showCertificateLink &&
                                    certificatesForRoster({
                                        tournament: tournament?.id,
                                        competition: competition?.id,
                                        roster: winning_players?.runner_up?.id
                                    }).url
                                }
                            />

                            <LoserCard
                                losers={winning_players?.third_places}
                                tournament={tournament?.id}
                                competition={competition?.id}
                                showCertificateLink = {showCertificateLink}
                                                            />

                          
                        </div>
                    </div>

                    <div className="bg-zinc-50   p-8 border-none relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                            <IdCard className="h-30 w-30 text-primary" />

                        </div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <UsersRound className="text-primary" />

                                <h3 className="font-headline font-extrabold text-primary uppercase tracking-tight">
                                    Participation Batch</h3>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div
                                    className="flex items-center justify-between p-4 bg-white border-l-4 border-primary shadow-sm">
                                    <div className="flex items-center gap-4">

                                        <div>
                                            <p className="font-bold text-on-surface text-label-md">{participant_players} Verified Participants
                                            </p>
                                            <p className="text-label-sm text-on-surface-variant">Rosters players & officials other than semi-finalists and finalists</p>
                                        </div>
                                    </div>
                                    <ProcessParticipantCertificate tournament={tournament}
                                        competition={competition} />

                                </div>

                            </div>


                            <div className="grid grid-cols-3 gap-4  mt-3">


                                {participating_rosters.map((roster) =>
                                  <ParticipantCard key={roster.id} roster={roster} 
                                  tournament={tournament?.id}
                                  competition={competition?.id}
                                  showCertificateLink = {showCertificateLink}
                                  />
                                )}
                            </div>
                        </div>

                    </div>
                </section>


            </div>


        </>
    )
}