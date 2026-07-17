export default function PageHeaderAction({ children }) {
    return (
        <div className="flex flex-wrap items-center gap-4 bg-surface-container-low p-4 rounded-xl">
            <div className="flex flex-col gap-1">
                {children}
            </div>
        </div>
    )
}