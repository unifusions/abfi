import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { index } from "@/routes/officials";
import { router } from "@inertiajs/react";
import { Search, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function OfficialSearchFilter({ associations }) {
    const [search, setSearch] = useState();
    const [association, setAssociation] = useState();
    const [processing, setProcessing] = useState(false);
    useEffect(() => {

        const delayDebounce = setTimeout(() => {
            setProcessing(true);

            router.get(index.url(),
                { search: search, association: association },
                {

                    preserveState: true,
                    replace: true, // Replaces history state so 'back' button works cleanly
                }
            );
            setProcessing(false);
        }, 300);

        return () => clearTimeout(delayDebounce);
    }, [search, association]);

    return (
        <div className="  p-5  shadow-sm mb-6 flex flex-wrap items-center gap-6 border-outline-variant/10 border  justify-start  gap-4" >
             
                <div className="flex-1   relative">

                    <InputGroup className="max-w-2xl  h-12">
                        <InputGroupInput placeholder="Search..." className="text-md" value={search}
                            onChange={(e) => setSearch(e.target.value)}
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
                            value={association} onValueChange={(val) => setAssociation(val)}
                            className="bg-zinc-50    " >
                            <Field className=" "  >


                                <SelectTrigger size="md" className="  w-full  border-none   py-3 rounded-lg text-sm font-bold text-primary focus:ring-2 focus:ring-primary/20">
                                    <SelectValue placeholder="All Associations " />
                                </SelectTrigger>
                            </Field>
                            <SelectContent align="end">
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

                    {/* <button
                        className="bg-surface-container-lowest p-3 rounded-lg hover:bg-surface-container-highest transition-colors">
                        <SlidersHorizontal className="material-symbols-outlined text-primary" />
                    </button> */}
                </div>

                {(search || association) && 
                    <Button variant="destructive" onClick={() => {setSearch(""); setAssociation("")}}>
                        <XCircle />
                         Clear Filter</Button>
                }
            
        </div>
    )

}