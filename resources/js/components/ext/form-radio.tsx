import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import FormLabel from "./form-label";

export default function FormRadio({ labelId, label, labelRequired=false, value, onValueChange, options, layout='row' }) {

    
    return (
        <div className="flex flex-col gap-1.5  ">
             <FormLabel 
            id={labelId}
            label={label}
            labelRequired={labelRequired}
        />
        <RadioGroup  value={value}  onValueChange={onValueChange} className={cn("w-full flex h-12  " ,
            {
                "flex-row space-x-4" : layout === "row",
                'flex-col' : layout==="column"
            }
        )}>


            {options.map((option) => 
                <div className="flex items-center gap-3">
                    <RadioGroupItem value={option.value} id={option.value} /> 
                    <Label htmlFor={option.value} >{option.label}</Label>
                </div>
            )}
            
        </RadioGroup>
        </div>
    )
}