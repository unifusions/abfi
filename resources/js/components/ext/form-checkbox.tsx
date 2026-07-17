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

export function FormCheckbox({ label, labelId, labelRequired, layout = 'row', handleCheckboxChange, value, options }) {
    return (
        <div className="flex flex-col gap-1.5  ">
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
                        const isChecked = value.includes(option.value);

                        return (
                            <Field orientation="horizontal">
                                <Checkbox
                                    id={option.value}
                                    checked={isChecked}
                                    value={option.value}
                                    onCheckedChange={(checked) => handleCheckboxChange(option.value, checked)}
                                />
                                <FieldLabel
                                    htmlFor={option.value}
                                    className="font-normal"
                                >
                                    {option.label}
                                </FieldLabel>
                            </Field>)
                    })}


                </FieldGroup>
            </FieldSet>
        </div>
    )
}
