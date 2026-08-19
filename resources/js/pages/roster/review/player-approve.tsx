import { Button } from "@/components/ui/button";
import { approvePlayer } from "@/routes/rosters/review";
import { useForm } from "@inertiajs/react";

export default function PlayerApprove({ roster, player }) {

    const { post, processing } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        post(approvePlayer({
            roster: roster, rosterPlayer: player
        }).url)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Button
                type="submit"
                    size="xl"
                    className="w-full uppercase  font-bold text-xs tracking-wider">Approve
                    Player</Button>
            </form>

        </>

    )
}