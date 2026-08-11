import PageHeader from "@/components/ext/page-header";
import TableContainer from "@/components/ext/table-container";
import { Button } from "@/components/ui/button";
import { TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { generate } from "@/routes/tournaments/competition/pools";
import { useForm } from "@inertiajs/react";
import { Grid, Play } from "lucide-react";
import { stateColors } from "@/lib/stateColors";

export default function EmptyPool({ tournament, competition, category, rosters }) {
    
    const {data, processing,   post} = useForm({
        pool_count :'4',
        generation_method : 'random',
    });
    
    const handleGeneratePools = () => {
        post(generate({ tournament: tournament.id, competition: competition.id }).url, {
            preserveScroll: true,
            onSuccess: () => {
                console.log('Pools generated successfully');
            },
            onError: (errors) => {
                console.error('Error generating pools:', errors);
            },
        });
    }
    return (
        <>
            <PageHeader title={`Pool Generator for ${competition.name} ${category} `} subText={tournament.name}
            >


            </PageHeader>

 

            <section class="grid grid-cols-1 xl:grid-cols-12 gap-8 flex-1">

                <div class="xl:col-span-4 flex flex-col gap-4">
                    <div class="flex justify-between items-end">
                        <h3 class="font-headline font-bold text-primary text-xl">Participating Teams (16 Total)</h3>
                        <span
                            class="bg-surface-variant px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant">Unassigned</span>
                    </div>
                    <TableContainer>
                        <TableRow>
                            <TableHead>Seed</TableHead>
                            <TableHead>Roster Name</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>

                        <TableBody>
                        {rosters.map((roster, index) => <TableRow key={roster.id}>
                            <TableCell className="font-bold text-primary">#{index + 1}</TableCell>
                            <TableCell className="flex items-center gap-3">
                                <div
                                    className={cn("w-6 h-6 rounded  text-white flex items-center justify-center text-[10px]  ",
                                        stateColors[roster?.organization?.state?.short_code]

                                    )}>
                                       
                                   {roster?.organization?.state?.short_code} </div>
                                {roster.name}</TableCell>
                            <TableCell className="text-[10px] font-medium">
                                Queue   
                            </TableCell>
                        </TableRow>)}

                        </TableBody>
                    </TableContainer>
                    
                </div>

                <div className="xl:col-span-7 flex flex-col gap-4">
                    <div className="flex justify-between items-end">
                        <h3 className="font-headline font-bold text-primary text-xl">Pool Play Generation </h3>

                    </div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleGeneratePools();
                    }}
                        className="relative flex-1 min-h-[400px] layer-1 rounded-2xl border-2 border-dashed border-outline-variant/30 flex items-center justify-center p-8">

                     
                        <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-sm">
                            <div
                                className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center animate-pulse">
                                <Grid className="text-primary" />
                              
                            </div>
                            <div>
                                <h4 className="font-headline font-extrabold text-2xl text-primary mb-2">Generate Pools</h4>
                                <p className="text-on-surface-variant text-sm">Review your rosters on the left. Once
                                    ready, click the button below to distribute all {rosters.length} teams across pools.</p>
                            </div>
                            <Button
                            size="xl" type="submit" disabled={processing}    
                                className="   px-10 py-4   font-display font-black    hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                                Run Pool Generator
                                <Play className="h-10 w-10" />
                               
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
