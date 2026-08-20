import { Button } from "@/components/ui/button";
import { archive } from "@/routes";
import { useForm } from "@inertiajs/react";
import { Archive } from "lucide-react";

export default function ArchiveTournament({tournament}){

    const {patch, processing } = useForm();
    const handleSubmit = (e) => {
e.preventDefault();
patch(archive({tournament : tournament}).url)
    }
    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <Button 
                size="xl" type="submit"
            className="normal-case tracking-normal font-bold w-full" variant="accentSecondary">
          <Archive />      Archive Tournament
            </Button>
        </form>
    )
}