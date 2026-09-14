
export default function MemberDisplay ({ member })  {
    return (
        <div className="bg-surface-zinc-100 rounded-lg p-3.5 flex items-center gap-3.5">
            <img class="w-14 h-14 rounded-lg object-cover ring-2 ring-primary/30"
                data-alt="Athletic sports headshot portrait of a 22-year-old male baseball player in a pristine white training jersey smiling confidently in a modern training facility."
                src={member?.profile_photo} />
            <div class="space-y-1">
                <div class="flex items-center gap-1.5">
                    <h3 class="font-headline text-sm font-bold text-primary">{member?.name}</h3>
                    {/* <span class="text-xs font-black text-primary-container">#19</span> */}
                </div>
                <p class="text-xs text-on-surface-variant font-medium">{member?.positions?.join(' / ')} • Age: {member?.age}</p>
                <div class="flex items-center gap-2 text-[11px] text-outline">
                    <span>ID: {member?.code}</span>
                    <span>•</span>
                    <span>Blood: {member?.blood_group}</span>
                </div>
            </div>
        </div>
    )
}