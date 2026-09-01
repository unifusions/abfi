
type columnProps = {
    title: string,
    subTitle: string
}

export default function RowFirstColumn({ title, subTitle = "" }) {
    return (
        <div>
            <p className="font-label font-bold text-primary">{title}</p>
            {subTitle && <div className="text-xs text-slate-600 font-body text-wrap"> {subTitle}</div>}
        </div>
    )
}