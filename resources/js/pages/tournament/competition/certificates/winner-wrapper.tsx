import { cn } from "@/lib/utils"

export default function WinnerWrapper({ className, children }) {
    return (
        <div className=


            {cn(
                "bg-surface-container-lowest p-6 hover:bg-surface-container transition-colors cursor-pointer group",
                className
            )
            }>
            {children}

        </div>
    )
}