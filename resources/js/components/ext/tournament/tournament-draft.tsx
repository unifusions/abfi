import { ChevronRight, ClockArrowUp, History } from "lucide-react";

export default function TournamentDraft(){
    return (
          <div class="lg:col-span-1 space-y-4">
                        <h5 className="font-headline text-lg font-bold text-primary px-2">Upcoming Drafts</h5>
                        <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                                    <ClockArrowUp className="text-primary" />
                                   
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-primary">Elite 10 Showdown</p>
                                    <p className="text-[10px] text-on-surface-variant font-medium">Drafting: Oct 30 • Dallas, TX</p>
                                </div>
                            </div>
                            <ChevronRight className="h-5 text-primary"/>
                        </div>
                        <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                                 <ClockArrowUp className="text-primary" />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-primary">Winter Regionals</p>
                                    <p className="text-[10px] text-on-surface-variant font-medium">Drafting: Nov 12 • Phoenix, AZ</p>
                                </div>
                            </div>
                              <ChevronRight className="h-5 text-primary"/>
                        </div>
                        <div className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between 
                        hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-outline-variant/30">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                                  <History className="text-primary"/>
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-primary">Summer All-Stars</p>
                                    <p className="text-[10px] text-on-surface-variant font-medium">Completed • Aug 14</p>
                                </div>
                            </div>
                            <ChevronRight className="h-5 text-primary"/>
                         </div>
                    </div>
    )
}