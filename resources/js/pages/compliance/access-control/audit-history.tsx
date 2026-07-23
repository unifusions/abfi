export default function AuditHistory(){
    return (
          <div
                class="p-6 bg-primary-container text-on-primary-container rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="relative z-10">
                    <h5 class="font-headline text-xl font-bold">Audit History &amp; Export</h5>
                    <p class="text-on-primary-container/80 text-sm mt-1 max-w-lg">Generate a full CSV or PDF compliance
                        report of all user actions and registry changes for the current athletic season.</p>
                </div>
                <div class="flex gap-3 relative z-10">
                    <button
                        class="px-6 py-2.5 bg-on-primary text-primary rounded font-label font-bold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all">
                        Export as CSV
                    </button>
                    <button
                        class="px-6 py-2.5 border border-on-primary/30 text-on-primary rounded font-label font-bold text-sm hover:bg-on-primary/10 transition-all">
                        View Audit Log
                    </button>
                </div>
                {/* <!-- Abstract "Digital Diamond" background elements --> */}
                <div class="absolute -right-20 -top-20 w-64 h-64 bg-secondary rounded-full blur-[80px] opacity-20">
                </div>
                <div
                    class="absolute -left-10 -bottom-10 w-40 h-40 bg-on-primary-fixed-variant rounded-full blur-[60px] opacity-30">
                </div>
            </div>
    )
}