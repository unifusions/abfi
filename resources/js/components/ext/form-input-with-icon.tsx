import InputError from "../input-error";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FormLabel from "./form-label";

export default function FormInputWithIcon({ id, name, type = "text", labelRequired,  hasError,
    label, icon: Icon, className, ...props }: { id: string; name: string; type?: string;
        hasError?:string,
        label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="space-y-2" >
            {label &&
                            <FormLabel
                                id={id}
                                label={label}
                                labelRequired={labelRequired}
                            />
                        }
            
            <div className="relative">
                {Icon &&
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon className="text-primary/80 " />
                    </div>
                }

 
                <input
                    id={id}
                    name={name}
                    type={type}
                    
                    className={`block border-0 pl-12 pr-4 py-3  w-full rounded-lg text-slate-900 bg-zinc-50 focus:bg-white 
                focus:ring-2 focus:ring-primary  placeholder:text-outline/60 transition-all
                ${className}  ${hasError && 'ring-1 ring-destructive'}` }
                    {...props}
                />
            </div>
            <InputError message={hasError} />
        </div>

    );
}



