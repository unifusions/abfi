import { Spinner } from "@/components/ui/spinner";
import { generateAllCertificates } from "@/routes/tournaments/competition/certificates";
import { useForm, usePage } from "@inertiajs/react"
import { SendHorizonal } from "lucide-react";

export default function ProcessAllCertificate({tournament, competition}) {
    
 
const {post, processing} = useForm();
const handleSubmit = (e) => {
    e.preventDefault();
    post(generateAllCertificates({
        tournament: tournament?.id,
        competition : competition?.id,
    }).url, {
        preserveState:true,
        preserveScroll: true,
    });
}
    return (
        <>
        <form onSubmit={handleSubmit}>
         
            <button type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-white hover:opacity-90 rounded-md font-headline font-bold text-label-md transition-all shadow-lg active:scale-95">
                  {processing ? <Spinner /> : <SendHorizonal /> }  Process All Certificates
            </button>
        </form>
        </>
    )
}