import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

export default function DialogFormButton({  children, className="", ...props }) {

    if (props.type === "submit") {
        return (
            <Button type="submit" className={cn("tracking-tight font-semibold normal-case", className)} {...props}
            disabled={props.processing}
            >
                {props?.processing ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : children}
               
            </Button>
        )   
    }
    return (
        <Button   className={cn("tracking-tight font-semibold normal-case", className)} {...props}>
            {children}
        </Button>
    )
}   