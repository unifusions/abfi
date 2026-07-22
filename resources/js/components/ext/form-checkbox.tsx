import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import FormLabel from "./form-label"
import { cn } from "@/lib/utils";
import InputError from "../input-error";

export function FormCheckbox({ label, labelId, labelRequired, layout = 'row',
     handleCheckboxChange, value, options, hasError }) {
    return (
        <div className="flex flex-col gap-3  ">
            {label && <FormLabel
                id={labelId}
                label={label}
                labelRequired={labelRequired}
            />}
            <FieldSet>

                <FieldGroup className={cn("gap-3 ", {
                    'grid grid-cols-4': layout === "row"
                })}>
                    {options.map((option) => {
                        const isChecked = value?.includes(option.value);

                        return (
                            <Field orientation="horizontal" {...(hasError ? { "data-invalid": true } : {})}>
                                <Checkbox
                                    id={option.value}
                                    checked={isChecked}
                                    value={option.value}
                                    onCheckedChange={(checked) => handleCheckboxChange(option.value, checked)}
                                    
                                />
                                <FieldLabel
                                    htmlFor={option.value}
                                    className="font-normal lower-case first-letter:uppercase"
                                >
                                    {option.label}
                                </FieldLabel>
                            </Field>)
                    })}


                </FieldGroup>
            </FieldSet>
            <InputError message={hasError} />
        </div>
    )
}
