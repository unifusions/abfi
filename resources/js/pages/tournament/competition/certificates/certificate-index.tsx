import PageHeader from "@/components/ext/page-header";
import { Award, Badge, Group, IdCard, RotateCcw, SendHorizonal, UserRound, Users, UsersRound } from "lucide-react";
import ProcessParticipantCertificate from "./process-participant-certificate";
import ProcessAllCertificate from "./process-all-certificate";
import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";
import { preview } from "@/routes/tournaments/competition/certificates";
import { certificatesForRoster } from "@/routes/tournaments/competition";

export default function CertificateIndex({ tournament, competition, certificates,
    participating_rosters, participant_players, winning_players }) {
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


            <div class="grid grid-cols-12 gap-8">

                <section class="col-span-12   space-y-6">
                    <div class="bg-zinc-50 rounded-xl p-1 overflow-hidden relative border-none">
                        <div class="flex items-center justify-between px-6 py-4">
                            <div class="flex items-center gap-3">
                                <Award className="text-accent-secondary" />
                                <h3 class="font-headline font-extrabold text-primary uppercase tracking-tight">Podium
                                    Certificates</h3>
                            </div>

                        </div>
                        <div className="grid grid-cols-3 gap-1 bg-surface-container">

                            <div
                                className="bg-surface-container-lowest p-6 hover:bg-surface transition-colors cursor-pointer group">
                                <div
                                    className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="text-secondary font-black font-headline">1st</span>
                                </div>
                                <h4 className="font-headline font-bold text-zinc-600  text-label-md mb-1">Champion
                                </h4>

                                <h4 className="font-headline font-bold text-secondary text-label-md mb-1">
                                         {winning_players?.winner?.name}
                                </h4>

                                <p className="text-label-sm   mb-4">

                               {winning_players?.winner?.organization?.name}


                                </p>
                                {winning_players?.winner && <Link href={certificatesForRoster({
                                    tournament: tournament?.id,
                                    competition: competition?.id,
                                    roster: winning_players?.winner?.id
                                }).url} target="_blank">View Certificates</Link>}
                            </div>

                            <div
                                className="bg-surface-container-lowest p-6 hover:bg-surface transition-colors cursor-pointer group">
                                <div
                                    className="w-10 h-10 rounded-full bg-outline-variant/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="  font-black font-headline">2nd</span>
                                </div>
                                <h4 className="font-headline font-bold text-zinc-600 text-label-md mb-1">Runner-Up
                                </h4>

                                <h4 className="font-headline font-bold text-primary text-label-md mb-1">{winning_players?.runner_up?.organization?.name}
                                </h4>
                                <p className="text-label-sm  mb-4">  {winning_players?.runner_up?.name}</p>

                            </div>

                            <div
                                className="bg-surface-container-lowest p-6 hover:bg-surface transition-colors cursor-pointer group">
                                <div
                                    className="w-10 h-10 rounded-full bg-tertiary-container/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="text-tertiary font-black font-headline">3rd</span>
                                </div>
                                <h4 className="font-headline font-bold text-zinc-600 text-label-md mb-1">3rd Place
                                </h4>

                                <div className="grid grid-cols-2">
                                    {winning_players?.third_places?.map((roster) =>
                                        <div>
                                            <h4 className="font-headline font-bold text-primary text-label-md mb-1">{roster?.organization?.name}
                                            </h4>
                                            <p className="text-label-sm text-on-surface-variant mb-4">{roster?.name}</p>
                                        </div>
                                    )}
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50   p-8 border-none relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 opacity-10">
                            <IdCard className="h-30 w-30 text-primary" />

                        </div>
                        <div class="relative z-10">
                            <div class="flex items-center gap-3 mb-6">
                                <UsersRound className="text-primary" />

                                <h3 class="font-headline font-extrabold text-primary uppercase tracking-tight">
                                    Participation Batch</h3>
                            </div>
                            <div class="flex flex-col gap-4">
                                <div
                                    class="flex items-center justify-between p-4 bg-white border-l-4 border-primary shadow-sm">
                                    <div class="flex items-center gap-4">

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

                            <div className="flex flex-col">
                                {participating_rosters.map((roster) => <div>
                                    {JSON.stringify(roster)}
                                </div>)}
                            </div>
                        </div>
                    </div>
                </section>


            </div>


        </>
    )
}