


import { useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHttp } from "@inertiajs/react";
import { Button } from "@base-ui/react";
import FormInputWithIcon from "./form-input-with-icon";

export default function CreatableSelect({
    value,
    onChange,
    searchUrl,
    placeholder = "Search...",
    getOptionLabel,
    getOptionValue,
    renderOption,

    minSearchLength = 3,
    onCreate,
    icon, label,
    labelRequired
}) {
    const wrapperRef = useRef(null);

 
    const [options, setOptions] = useState([]);
    const [open, setOpen] = useState(false);
   
    const [highlight, setHighlight] = useState(0);
    const { data, setData, get, processing, errors } = useHttp({
        search: ''
    });

    // Display selected label
    useEffect(() => {
        if (value) {
            setData('search', value.name);
        }
    }, [value]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const listener = (e) => {
            if (!wrapperRef.current?.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", listener);

        return () => document.removeEventListener("mousedown", listener);
    }, []);

    // Debounced search
    useEffect(() => {
        if (!open) return;

        if (data.search.length < minSearchLength) {
            setOptions([]);
            return;
        }

        const timer = setTimeout(() => {



            get(searchUrl, {

                onSuccess: (response) => {
                    setHighlight(0);

                    setOptions(response)


                }

            })




        }, 400);

        return () => clearTimeout(timer);
    }, [data.search]);

    const selectItem = (item) => {
        onChange(item);
        setData('search', getOptionLabel(item));
        setOpen(false);
    };

    return (
        <div className="relative w-full" ref={wrapperRef}>
            <FormInputWithIcon
                label={label}
                icon={icon}
                // onChange={e => setData('venue', e.target.value)}
                // value={data.venue}
labelRequired={labelRequired}

                value={data.search}
                placeholder={placeholder}
                autoComplete="off"
                onFocus={() => setOpen(true)}
                onChange={(e) => {
                    setData('search', e.target.value);
                    setOpen(true);
                }}

                onKeyDown={(e) => {
                    if (!open) return;

                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault();
                            setHighlight((h) =>
                                Math.min(h + 1, options.length - 1)
                            );
                            break;

                        case "ArrowUp":
                            e.preventDefault();
                            setHighlight((h) => Math.max(h - 1, 0));
                            break;

                        case "Enter":
                            e.preventDefault();

                            if (options[highlight]) {
                                selectItem(options[highlight]);
                            }

                            break;

                        case "Escape":
                            setOpen(false);
                            break;
                    }
                }}
            />



            {processing && (
                <Loader2 className="absolute right-3 top-3 h-4 w-4 animate-spin" />
            )}

            {open && (
                <div className="absolute z-50 mt-1 max-h-64 w-full overflow-auto rounded-md border bg-background shadow-lg">

                    {options && options.length > 0 ? (
                        options.map((item, index) => (
                            <div
                                key={getOptionValue(item)}
                                onClick={() => selectItem(item)}
                                className={cn(
                                    "cursor-pointer px-3 py-2 hover:bg-accent hover:text-white  ",
                                    highlight === index && "bg-accent text-white"
                                )}
                            >
                                {renderOption
                                    ? renderOption(item)
                                    : getOptionLabel(item)}
                            </div>
                        ))
                    ) : processing ? null : (
                        <div className="p-3">
                            <div className="text-sm text-muted-foreground">
                                No results found.     <Button onClick={() => onCreate(data.search)}> Add {data.search} </Button>
                            </div>


                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
