export default function RowFirstColumn({title, subTitle}){
    return (
          <div>
                <p className="font-label font-bold text-primary">{title}</p>
                <p className="text-xs text-slate-600 font-body"> {subTitle}</p>
            </div>
    )
}