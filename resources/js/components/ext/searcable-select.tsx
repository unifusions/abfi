import { useEffect, useMemo, useRef, useState } from "react";
import FormInputWithIcon from "./form-input-with-icon";
import { cn } from "@/lib/utils";

export default function SearchableSelect({
    options = [],
    
    value, // Selected object, not id
    onChange,
    getOptionLabel,
    getOptionValue,
    renderOption,
    placeholder = "Search...",
    label,
    labelRequired,
    icon,
}) {
    const wrapperRef = useRef(null);

    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [highlight, setHighlight] = useState(0);

    // Display selected value
    useEffect(() => {
        setSearch(value ? getOptionLabel(value) : "");
    }, [value, getOptionLabel]);

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

    const filteredOptions = useMemo(() => {
        if (!search) return options;

        return options.filter((item) =>
            getOptionLabel(item)
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [options, search, getOptionLabel]);

    // Reset highlighted item when search changes
    useEffect(() => {
        setHighlight(0);
    }, [search]);

    const selectItem = (item) => {
        onChange(item);
        setSearch(getOptionLabel(item));
        setOpen(false);
    };

    return (
        <div className="relative w-full" ref={wrapperRef}>
            <FormInputWithIcon
                label={label}
                icon={icon}
                value={search}
                placeholder={placeholder}
                autoComplete="off"
                onFocus={() => setOpen(true)}
                onChange={(e) => {
                    setSearch(e.target.value);
                    setOpen(true);
                }}
                onKeyDown={(e) => {
                    if (!open) return;

                    switch (e.key) {
                        case "ArrowDown":
                            e.preventDefault();
                            setHighlight((h) =>
                                Math.min(h + 1, filteredOptions.length - 1)
                            );
                            break;

                        case "ArrowUp":
                            e.preventDefault();
                            setHighlight((h) => Math.max(h - 1, 0));
                            break;

                        case "Enter":
                            e.preventDefault();

                            if (filteredOptions[highlight]) {
                                selectItem(filteredOptions[highlight]);
                            }

                            break;

                        case "Escape":
                            setOpen(false);
                            break;
                    }
                }}
            />

            {open && (
                <div className="absolute z-50 mt-1 max-h-64 w-full overflow-auto rounded-md border bg-background shadow-lg">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((item, index) => (
                            <div
                                key={getOptionValue(item)}
                                onClick={() => selectItem(item)}
                                className={cn(
                                    "cursor-pointer px-3 py-2 hover:bg-accent hover:text-white",
                                    highlight === index &&
                                        "bg-accent text-white"
                                )}
                            >
                                {renderOption
                                    ? renderOption(item)
                                    : getOptionLabel(item)}
                            </div>
                        ))
                    ) : (
                        <div className="p-3 text-sm text-muted-foreground">
                            No results found.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}