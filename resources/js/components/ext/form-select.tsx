import { platform } from "node_modules/@base-ui/react/floating-ui-react/types.mjs";
import InputError from "../input-error";
import { Field } from "../ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import FormLabel from "./form-label";
import { cn } from "@/lib/utils";

export default function FormSelect({ label, id, labelRequired = false,
  items, value, hasError, onValueChange, placeHolder, disabled=false }) {
  return (
    <div className="flex flex-col gap-1.5  w-full">
      {label &&
        <FormLabel
          id={id}
          label={label}
          labelRequired={labelRequired}
        />
      }
      <Select items={items}  value={value?.toString() ?? ""} onValueChange={onValueChange} {...(disabled && {"disabled" : true})}
        className={cn(" bg-white h-12", {
         'bg-zinc-100' : disabled
        })} >
        <Field {...(hasError && { "data-invalid": true })}>


          <SelectTrigger className={cn("w-full  h-full", {
             'bg-zinc-100' : disabled
          })} size="md" {...(hasError && { "aria-invalid": true })}>
            <SelectValue placeholder={placeHolder} />
          </SelectTrigger>
        </Field>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value.toString()}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <InputError message={hasError} />
    </div>)
}