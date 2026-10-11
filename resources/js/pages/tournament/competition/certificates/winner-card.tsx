import { certificatesForRoster } from "@/routes/tournaments/competition";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import CardCertificateLink from "./card-certificate-link";
import WinnerWrapper from "./winner-wrapper";

export default function WinnerCard({ winner, link = null }) {



    return (
        <WinnerWrapper>

            <div
                className="px-5 w-fit h-10 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-secondary font-black font-headline">1
               <sup>st</sup> 
                </span>
            </div>
            <h4 className="font-headline font-bold text-zinc-600  text-label-md mb-1">Champion
            </h4>

            <h4 className="font-headline font-bold text-2xl text-secondary text-label-md mb-1">
                {winner?.name}
            </h4>

            <p className="text-label-sm   mb-4">

                {winner?.organization?.name}


            </p>
            {link &&
                <CardCertificateLink link={link} />

            }

        </WinnerWrapper>
    )
}