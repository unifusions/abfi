import React from "react";
import InputError from "../input-error";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FormLabel from "./form-label";
import { cn } from "@/lib/utils";

type Props = {
    hasError?: string
    id?: string;
    name?: string;
    type?: string;
    label?: string;
    value?: string;
    className?: string;
    layout?: string;
    labelRequired?: boolean;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;

}
export default function FormInput({ id, name, type = "text", layout = "col", label, className, placeholder, labelRequired = false, hasError, value, disabled=false,  ...props }: Props) {
    return (
        <div className="flex flex-col gap-1.5  w-full">
            {label &&
                <FormLabel
                    id={id}
                    label={label}
                    labelRequired={labelRequired}
                />
            }
            <input
                id={id}

                type={type}
                value={value}
                className={cn('block border-0 p-3 w-full rounded-lg text-slate-900 bg-white focus:bg-white',
                    'focus:ring-2 focus:ring-primary/20 placeholder:text-outline/60 transition-all', className,
                    { 'ring-1 ring-destructive': hasError,

                        'bg-zinc-100' : disabled
                     })
                }

                placeholder={placeholder}
                {...props}
            />

            <InputError message={hasError} />

        </div>

    );
}



