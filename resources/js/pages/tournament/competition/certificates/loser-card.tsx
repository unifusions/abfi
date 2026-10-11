import { certificatesForRoster } from "@/routes/tournaments/competition";
import WinnerWrapper from "./winner-wrapper";
import CardCertificateLink from "./card-certificate-link";

export default function LoserCard({ losers, tournament, competition, showCertificateLink }) {
    return (
        <WinnerWrapper className= "col-span-2">
           
                <div
                    className=" w-fit px-5 h-10 rounded-full bg-tertiary-container/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-tertiary font-black font-headline">3rd & 4th</span>
                </div>
                <h4 className="font-headline font-bold text-zinc-600 text-label-md mb-1">3rd Place
                </h4>

                <div className="grid grid-cols-2">
                    {losers?.map((roster) =>
                        <div key={roster?.id}>
                            <h4 className="font-headline font-bold text-primary text-label-md mb-1">{roster?.organization?.name}
                            </h4>
                            <p className="text-label-sm text-on-surface-variant mb-4">{roster?.name}</p>
                           {showCertificateLink && <CardCertificateLink link={  certificatesForRoster({
                                        tournament: tournament ,
                                        competition: competition ,
                                        roster: roster?.id
                                    }).url}  />}
                        </div>
                    )}
                </div>


           
        </WinnerWrapper>
    )
}