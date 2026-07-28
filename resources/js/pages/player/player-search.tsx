import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Search, XCircle } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
export default function PlayerSearch({ associations, searchValue, onSearch, selectedAssociation, onSelectAssociation }) {
    return (
        <div className="  py-4   flex flex-wrap items-center justify-start gap-4">
            <div className="flex-1   relative">

                <InputGroup className="max-w-2xl  h-12">
                    <InputGroupInput placeholder="Search..." className="text-md" value={searchValue}
                        onChange={(e) => onSearch(e.target.value)}
                    />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                    {/* <InputGroupAddon align="inline-end">12 results</InputGroupAddon> */}
                </InputGroup>



            </div>
            <div className="flex items-center  ">
                <div className="relative  ">
                    <Select items={associations}
                        value={selectedAssociation} onValueChange={(val) => onSelectAssociation(val)}
                        className="bg-zinc-50    " >
                        <Field className=" "  >


                            <SelectTrigger size="md" className="  w-full  border-none   py-3 rounded-lg text-sm font-bold text-primary focus:ring-2 focus:ring-primary/20">
                                <SelectValue placeholder="All Associations " />
                            </SelectTrigger>
                        </Field>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select State</SelectLabel>
                                {associations.map((item) => (
                                    <SelectItem key={item.value} value={item.value.toString()}>
                                        {item.label}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>




                </div>

                {(searchValue || selectedAssociation) && 
                    <Button variant="destructive" onClick={() => {onSearch(""); onSelectAssociation("")}}>
                        <XCircle />
                         Clear Filter</Button>
                }

                {/* <button
                        className="bg-surface-container-lowest p-3 rounded-lg hover:bg-surface-container-highest transition-colors">
                        <SlidersHorizontal className="material-symbols-outlined text-primary" />
                    </button> */}
            </div>
        </div>
    )
}