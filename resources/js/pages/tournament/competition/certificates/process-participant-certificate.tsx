import { Spinner } from "@/components/ui/spinner";
import { generateParticipantCertificates } from "@/routes/tournaments/competition/certificates";
import { useForm, usePage } from "@inertiajs/react"

export default function ProcessParticipantCertificate({tournament, competition}) {
    
 
const {post, processing} = useForm();
const handleSubmit = (e) => {
    e.preventDefault();
    post(generateParticipantCertificates({
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
                className="text-primary flex gap-2 font-bold text-label-sm uppercase tracking-widest hover:underline">
                  {processing && <Spinner />}  Process Participant Certificates
            </button>
        </form>
        </>
    )
}