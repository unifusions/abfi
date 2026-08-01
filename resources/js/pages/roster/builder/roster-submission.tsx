import { Button } from "@/components/ui/button";
import { submit } from "@/routes/rosters/rosters";
import { useForm } from "@inertiajs/react";
import { SendHorizonal } from "lucide-react";

export default function RosterSSubmission({ lastDate, roster }) {

    const { post, processing } = useForm({});
    const handleSubmit = (e) => {
        e.preventDefault();
        post(submit({ roster: roster.id }).url)
    }
    return (
        <div className="bg-surface-container-lowest rounded-2xl p-6 stadium-shadow accent-stripe w-full">
            <form onSubmit={handleSubmit}>
                <h3 className="font-display font-black text-xl text-primary mb-4">Finalize Roster</h3>
                <p className="text-sm text-on-surface-variant mb-6">Complete the submission of roster for official review by the federation.</p>
                <Button
                    className="w-full"
                    variant="accentSecondary"
                    size={"xl"}

                    type="submit"
                >
                    Submit Roster
                    <SendHorizonal />
                </Button>
                <p className="text-[10px] text-center mt-4 text-on-surface-variant font-medium">Submission deadline: {lastDate}</p>
            </form>

        </div>
    )
}