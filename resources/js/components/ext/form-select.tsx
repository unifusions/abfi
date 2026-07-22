import { platform } from "node_modules/@base-ui/react/floating-ui-react/types.mjs";
import InputError from "../input-error";
import { Field } from "../ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import FormLabel from "./form-label";

export default function FormSelect({ label, id, labelRequired = false,
  items, value, hasError, onValueChange, placeHolder }) {
  return (
    <div className="flex flex-col gap-1.5  w-full">
      {label &&
        <FormLabel
          id={id}
          label={label}
          labelRequired={labelRequired}
        />
      }
      <Select items={items} value={value} onValueChange={onValueChange}
        className="bg-zinc-50 h-12" >
        <Field {...(hasError && { "data-invalid": true })}>


          <SelectTrigger className="w-full  h-full" size="md">
            <SelectValue placeholder={placeHolder} />
          </SelectTrigger>
        </Field>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select State</SelectLabel>
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