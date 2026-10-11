import { Loader } from "lucide-react";
import { Button } from "../ui/button";

export default function ProcessingButton({children, onClick, variant, size, className, processing, type="button"}) {
    return (
        <Button onClick={onClick} variant={variant} 
        size={size}
        className={className} disabled={processing} 
        type={type}
        >
       
       
        {processing ? <Loader className="animate-spin"/> : children}
        </Button>
    )
}