export default function RowFirstColumnWithAvatar({ src, title, subTitle }) {

    
    return (

        <div className="flex items-center gap-3">
            <div
                className="w-10 h-10 rounded-lg bg-surface-variant flex-shrink-0 overflow-hidden border-2 border-surface shadow-sm">
                <img className="w-full h-full object-cover"
                    src={src} />
            </div>
            <div>
                <p className="font-label font-bold text-primary">{title}</p>
               <p className="text-xs text-slate-600 font-body"> {subTitle}</p>
            </div>
        </div>


    )
}