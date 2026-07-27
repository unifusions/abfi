import { cn } from "@/lib/utils";
 import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import FormLabel from "./form-label";
import InputError from "../input-error";
import { Field, FieldLabel } from "../ui/field";

export default function FormRadio({ labelId, label, labelRequired = false, value, 
    onValueChange, options, layout = 'row', hasError,
    disabled, 
    orientation ='horizontal'
 }) {


    return (
        <div className="flex flex-col gap-1.5  ">
            <FormLabel
                id={labelId}
                label={label}
                labelRequired={labelRequired}
            />
            <RadioGroup value={value} onValueChange={onValueChange} className={cn("w-full flex h-12  ",
                {
                    "flex-row space-x-4": layout === "row",
                    'flex-col': layout === "column",
                    'text-zinc-400' : disabled
                }
            )} 
            disabled={disabled}>


                {options.map((option) =>
                    <Field orientation={orientation} className=" " {...(hasError ? { "data-invalid": true } : {})} >
                        <RadioGroupItem value={option.value} id={option.value} {...(option?.disabled) && {"disabled" : true}}/>
                        <FieldLabel htmlFor={option.value} >{option.label}</FieldLabel>
                    </Field>
                )}

            </RadioGroup>
            <InputError message={hasError} />
        </div>
    )
}