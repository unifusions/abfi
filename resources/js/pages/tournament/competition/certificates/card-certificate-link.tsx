import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

export default function CardCertificateLink({link}) {
    return (
        <Link
                    href={link}
                    className="w-full text-primary font-bold text-sm flex items-center  gap-1 hover:underline">

                    <div className=" ">
                        View Certificates
                    </div>

                    <ArrowRight className="h-5 w-5" />



                </Link>
    )
}