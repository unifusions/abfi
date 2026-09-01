import { Button } from "@/components/ui/button";
import { useForm } from "@inertiajs/react";
import { ShieldMinus } from "lucide-react";

export default function UserDeactivate({user}){
    const { patch, processing, errors} = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
alert('user deactivated');
    }
    return (
        <form onSubmit={handleSubmit}>
            <Button type="submit" variant="destructive" className="tracking-tight font-bold" size="xl">
                <ShieldMinus />
                Deactivate User
            </Button>
        </form>
    )
}