import { Medal } from "lucide-react";

export default function FinalistsDisplay({ winner, runner, thirdPlace, thirdPlace2 }) {
    return (
        <>


            <div className="flex justify-center items-end gap-2 md:gap-4 lg:gap-8 pb-4 h-[400px]">

                <div className="flex flex-col items-center group">

                    <div
                        className="w-32 md:w-40 bg-zinc-200 h-40 rounded-t-xl flex flex-col items-center pt-6 shadow-sm border-t-2 border-outline-variant/20">
                        <span className="font-display font-black text-4xl text-on-surface-variant mb-2">02</span>
                        <span
                            className="font-display text-label-sm font-bold text-primary uppercase text-center px-4">{runner?.name}</span>
                    </div>
                </div>

                <div className="flex flex-col items-center group ">
                    <div className="w-20 h-20 mb-8">
                        <Medal
                            className="text-secondary h-20 w-20"
                        />

                    </div>
                    <div
                        class="w-40 md:w-56 bg-primary h-64 text-white  flex flex-col items-center pt-8 shadow-2xl relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
                        <span class="font-display font-black text-6xl text-on-primary mb-4">01</span>
                        <span
                            class="font-headline font-black text-headline-sm text-on-primary uppercase text-center px-4 tracking-tighter">{
                                winner?.name
                            }
                        </span>
                        <div class="mt-auto mb-6 mx-3">
                            <span
                                class="bg-secondary px-3 py-1 rounded-full  font-label text-sm font-bold uppercase">Tournament
                                Winner</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center group">

                    <div
                        className="w-56 md:w-56 bg-zinc-50 h-32 rounded-t-xl flex flex-col items-center pt-4 shadow-sm border-t-2 border-outline-variant/10">
                        <span className="font-display font-black text-3xl text-outline-variant mb-1">03</span>
                        <div className="flex flex-col">
                            <span
                                className="font-label text-label-sm font-bold text-primary uppercase text-center px-4">{
                                    thirdPlace?.name
                                }</span>   <span
                                    className="font-label text-label-sm font-bold text-primary uppercase text-center px-4">
                                {
                                    thirdPlace2?.name
                                }
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}