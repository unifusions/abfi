import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function FormInput({ id, name, type = "text", label, className, ...props }: { id: string; name: string; type?: string; label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <>
        <label 
            htmlfor={id}
            className="text-xs font-label uppercase font-bold tracking-widest text-primary"
        >
            {label}
            </label>
          <input
            id={id}
            name={name}
            type={type}
            className={`border-0 p-3 rounded-lg text-on-surface bg-gray-100 focus:bg-white ${className}`}
            {...props}
        />
        </>
      
    );
}

                           
                          
                         