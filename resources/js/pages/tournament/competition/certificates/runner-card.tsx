import { Link } from "@inertiajs/react";
import CardCertificateLink from "./card-certificate-link";
import WinnerWrapper from "./winner-wrapper";

export default function RunnerCard({ runner, link = null }) {
    return (
        <WinnerWrapper>
            <div
                className="px-5 w-fit h-10 rounded-full bg-outline-variant/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="  font-black font-headline">2nd</span>
            </div>
            <h4 className="font-headline font-bold text-zinc-600 text-label-md mb-1">Runner-Up
            </h4>

            <h4 className="font-headline font-bold text-primary text-label-md mb-1">{runner?.organization?.name}
            </h4>
            <p className="text-label-sm  mb-4">  {runner?.name}</p>

            {link && <CardCertificateLink link={link} /> }

      
            </WinnerWrapper >          
    )
}