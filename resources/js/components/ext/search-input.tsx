import { Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";

export default function SearchInput({
    value, onChange, placeholder = 'Search...'
}) {
    return (
        <>
         <div className="flex-1 flex items-center  group gap-2  ">
         <InputGroup className="h-12">
      <InputGroupInput placeholder={placeholder} value={value} onChange={onChange}
        className="h-12"
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
    </InputGroup>

                     
                      </div>
        </>
    )
}