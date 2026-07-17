export default function FormLabel({id, label, labelRequired}){
    return (
        <label 
        htmlFor={id}
        className="text-xs font-label uppercase font-bold tracking-widest text-primary"
    >
        {label}{labelRequired ? <span className="text-destructive">*</span> : <span>(OPTIONAL)</span>}
        </label>
    )
}