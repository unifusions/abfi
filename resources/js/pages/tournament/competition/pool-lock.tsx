import { Button } from "@/components/ui/button";
import { lock } from "@/routes/tournaments/competition/pools";
import { useForm, usePage } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";

export default function PoolLock() {
    const { tournament, competition } = usePage().props;
    const { data, post } = useForm({
        'generation_method' : tournament?.tournament_type !== null ? 'seeded' : 'random'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(lock({ tournament: tournament?.id, competition: competition?.id }).url)
    }
    return (
        <form onSubmit={handleSubmit}>

{JSON.stringify(data)}
            <Button
                size="xl" type="submit"
                className="  md:w-auto bg-secondary text-on-secondary   px-8 py-5   font-display font-bold text-lg flex items-center justify-center gap-4 hover:bg-secondary/90 transition-all   active:scale-95 group  text-sm">
                Finalize Pools &amp; Proceed to Fixtures
                <ArrowRight className="group-hover:translate-x-1 transition-all" />

            </Button>
        </form>
    )
}