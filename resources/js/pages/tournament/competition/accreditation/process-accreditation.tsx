import { Spinner } from "@/components/ui/spinner";
import { processAccreditations } from "@/routes/tournaments/competition/accreditation";
import { useForm, usePage } from "@inertiajs/react";

export default function ProcessAccreditation({tournament, competition}){

     
    const {post, processing} = useForm();
    const handleSubmit = (e) => {
        e.preventDefault();
        post(processAccreditations({tournament:tournament, competition:competition}).url,
         {
            preserveState:true,
            preserveScroll: true,
        });
    }
    return (
          <div className="flex flex-col gap-1">
                           
                

        <form onSubmit={handleSubmit}>
         
            <button type="submit"
                className="bg-accent-secondary text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all">
                  {processing && <Spinner />}  Process ID Cards
            </button>
        </form>
          </div>
    )
}