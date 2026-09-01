import { Button } from "@/components/ui/button";
import { banPlayer } from "@/routes/players";
import { useForm } from "@inertiajs/react";
import { Ban } from "lucide-react";

export default function PlayerBan({player}){
    const {patch, processing, errors} = useForm();

    const handleBan = (e) => {
e.preventDefault();
patch(banPlayer({player:player}).url)
    }

    return (
        <form onSubmit={handleBan}>
            <Button variant="destructive" type="submit" size="xl" >
                <Ban />
                Ban Player</Button>
        </form>
    )
}