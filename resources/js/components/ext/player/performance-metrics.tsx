export default function PerformanceMetrics() {
    return (
           <div class="bg-surface-container-lowest rounded-xl p-8 shadow-sm">
                            <div class="flex justify-between items-end mb-8">
                                <h3 class="font-headline font-bold text-2xl uppercase tracking-tight flex items-center">
                                    <span class="w-2 h-8 bg-secondary mr-3"></span>
                                    Performance Metrics
                                </h3>
                                <span class="font-label text-xs text-on-surface-variant uppercase tracking-widest font-bold">Season 2024 (Regional)</span>
                            </div>
                            <div class="flex flex-col items-center justify-center py-12 px-6 bg-surface-container-low rounded-lg border border-dashed border-outline-variant">
                                <span class="material-symbols-outlined text-6xl text-on-surface-variant/30 mb-4">analytics</span>
                                <p class="text-lg font-headline font-bold text-primary text-center">New Member</p>
                                <p class="text-sm text-on-surface-variant text-center max-w-xs mt-2">Performance data will appear after the first sanctioned match.</p>
                                <button class="mt-6 px-4 py-2 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest rounded hover:bg-primary-fixed transition-colors">
                                    Schedule First Match
                                </button>
                            </div>
                        </div>
    )
}