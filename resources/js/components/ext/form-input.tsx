import InputError from "../input-error";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type Props = {
    hasError ?: string
    id ?: string; 
    name?: string; 
    type?: string; 
    label?: string; 
    className?: string;
    layout?:string;
    

}
export default function FormInput({ id, name, type = "text", layout="col", label, className,hasError, ...props  }: Props) {
    return (
        <div className="space-y-2">
        {label && <label 
            htmlFor={id}
            className="text-xs font-label uppercase font-bold tracking-widest text-primary"
        >
            {label}
            </label>}
          <input
            id={id}
            name={name}
            type={type}
            className={`block border-0 p-3 w-full rounded-lg text-slate-900 bg-zinc-50 focus:bg-white 
                focus:ring-2 focus:ring-primary/20 placeholder:text-outline/60 transition-all
                ${className} ${hasError && 'ring-1 ring-destructive'}`}
            {...props}
        />

         <InputError message={hasError} />

        </div>
      
    );
}

                           
                          
                         