import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "../ui/combobox";
import FormLabel from "./form-label";

export default function FormCombobox(
    {
        label, id, labelRequired,
        placeholder, hasError,
        options, value, onValueChange, disabled = false
    }
) {
    const selectedOption = options?.find((opt) => opt.value === value) || null;
    return (
        <div className="flex flex-col gap-1.5  w-full">

            {label &&
                <FormLabel
                    id={id}
                    label={label}
                    labelRequired={labelRequired}
                />
            }


            <Combobox items={options} value={selectedOption} onValueChange={onValueChange}
                 itemToStringValue={(option) => option?.value}
            >
                <ComboboxInput placeholder={placeholder} className="h-12 bg-zinc-50 border-0" disabled={disabled} {...(hasError ? { "aria-invalid": true } : {})} />
                <ComboboxContent>
                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                    <ComboboxList className="focus:text-white">
                        {options?.map((option) => (
                            <ComboboxItem key={option.value} value={option.value} className={"data-highlighted:text-white"} >
                                {option.label}
                            </ComboboxItem>
                        ))}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </div>
    )
}