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
                        <div className="grid grid-cols-4 p-4 gap-3 bg-surface-container">

                            <div
                                className="bg-white p-6 hover:bg-surface transition-colors cursor-pointer group">
                                <div
                                    className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span className="text-secondary font-black font-headline">1st</span>
                                </div>
                                <h4 className="font-headline font-bold text-zinc-600  text-label-md mb-1">Champion
                                </h4>

                                <h4 className="font-headline font-bold text-2xl text-secondary text-label-md mb-1">
                                    {winning_players?.winner?.name}
                                </h4>

                                <p className="text-label-sm   mb-4">

                                    {winning_players?.winner?.organization?.name}


                                </p>
                                {winning_players?.winner &&  
                                  <Link
                                            href={certificatesForRoster({
                                                tournament: tournament?.id,
                                                competition: competition?.id,
                                              roster: winning_players?.winner?.id
                                            }).url}
                                            className="w-full text-primary font-bold text-sm flex items-center  gap-1 hover:underline">

                                            <div className=" ">
                                                View Certificates
                                            </div>

                                            <ArrowRight className="h-5 w-5" />



                                        </Link>

                                }
                            </div>

                            <div
                                className="bg-white  p-6 hover:bg-surface transition-colors cursor-pointer group">
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
                                className="col-span-2 bg-white p-6 hover:bg-surface transition-colors cursor-pointer group">
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


                            <div className="grid grid-cols-4 gap-4  mt-3">


                                {participating_rosters.map((roster) =>
                                    <div key={roster.id} className="bg-white p-3 border-zinc-50 border space-y-4  ">

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-headline text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                                                    {roster?.name}
                                                </h4>
                                                <h6 className="text-sm font-semibold text-zinc-600">{roster?.organization?.name}</h6>
                                            </div>
                                            <div className={cn("w-6 h-6 p-5  text-sm rounded-sm overflow-hidden flex items-center font-bold justify-center", stateColors[roster?.organization?.state?.short_code])}>
                                                {roster?.organization?.state?.short_code}
                                            </div>
                                        </div>


                                        <div className=" w-full flex justify-between items-center py-4 border-y border-outline-variant/20">

                                            <div className="text-left">
                                                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Players</p>
                                                <p className="text-xl font-black text-primary">{roster.players_count}</p>

                                            </div>

                                            <div className="text-right">
                                                <p className="text-[10px] font-bold text-on-surface-variant uppercase">Officials</p>
                                                <p className="text-xl font-black text-primary">{roster.officials_count}</p>

                                            </div>
                                        </div>

                                        <Link
                                            href={certificatesForRoster({
                                                tournament: tournament?.id,
                                                competition: competition?.id,
                                                roster:  roster?.id
                                            }).url}
                                            className="w-full text-primary font-bold text-sm flex items-center justify-between gap-1 hover:underline">

                                            <div className=" ">
                                                View Certificates
                                            </div>

                                            <ArrowRight className="h-5 w-5" />



                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </section>


            </div>


        </>
    )
}