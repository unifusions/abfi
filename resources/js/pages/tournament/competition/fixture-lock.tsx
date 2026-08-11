import { Button } from "@/components/ui/button";
import { lock } from "@/routes/tournaments/competition/fixtures";
import { useForm, usePage } from "@inertiajs/react";
import { LoaderCircle, Lock } from "lucide-react";

export default function FixtureLock() {

    const {tournament, competition} = usePage().props;
    const {post, processing} = useForm({})
    const handleSubmit = (e) => {
        e.preventDefault();
        post(lock({
            tournament: tournament?.id,
            competition : competition?.id,
        }).url)
    }
    return (
        <form onSubmit={handleSubmit}>
            <Button
            type="submit"
                size="xl"
                disabled={processing}
                className="normal-case tracking-tight font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">
                {processing ?<LoaderCircle className="animate-spin" /> : <Lock className="h-10 w-10" /> }  
                Finalize & Lock Fixture
            </Button>
        </form>
    )
}