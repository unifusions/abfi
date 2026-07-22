import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import FormLabel from "./form-label";
import InputError from "../input-error";
import { Field, FieldLabel } from "../ui/field";

export default function FormRadio({ labelId, label, labelRequired = false, value, onValueChange, options, layout = 'row', hasError }) {


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
                    'flex-col': layout === "column"
                }
            )}>


                {options.map((option) =>
                    <Field orientation="horizontal" className=" " {...(hasError ? { "data-invalid": true } : {})}>
                        <RadioGroupItem value={option.value} id={option.value} />
                        <FieldLabel htmlFor={option.value} >{option.label}</FieldLabel>
                    </Field>
                )}

            </RadioGroup>
            <InputError message={hasError} />
        </div>
    )
}