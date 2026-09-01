import PageHeader from "@/components/ext/page-header";
import ProcessAccreditation from "./process-accreditation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TableContainer from "@/components/ext/table-container";
import { TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { printAll } from "@/routes/rosters/accreditations";
import { Link } from "@inertiajs/react";
import LinkButton from "@/components/ext/link-button";
import { Download, IdCard } from "lucide-react";

export default function AccreditationIndex({ tournament, competition, accreditations, hasAccreditations, rosters }) {
    return (
        <>
            <PageHeader title="Tournament Accreditation"

                subText={!hasAccreditations && "Process ID Cards before issuing and downloading"}
            >
                {!hasAccreditations && <ProcessAccreditation tournament={tournament.id} competition={competition.id} />}

            </PageHeader>
            <div>





                {hasAccreditations &&

                    <TableContainer>
                        <TableRow>
                            <TableHead>#</TableHead>
                            <TableHead>Roster Name</TableHead>
                            <TableHead>Players</TableHead>
                            <TableHead>Officials</TableHead>
                            <TableHead>Registered On</TableHead>
                            <TableHead className="text-end">Actions</TableHead>
                        </TableRow>

                        {rosters.map((roster, index) =>

                            <TableRow key={roster.id}>
                                <TableCell>
{index+1}
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <p>{roster?.name}</p>
                                        <p>{roster?.organization?.name}, , {roster?.organization?.state?.short_code}</p>
                                         
                                    </div>
                                </TableCell>
                                <TableCell>{roster?.players?.length}</TableCell>
                                <TableCell>{roster?.officials?.length}</TableCell>
                                <TableCell>{roster?.created_at}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex items-center justify-end gap-3">
                                    <LinkButton 
                                    className=" h-10 text-xs"
                                    icon = {IdCard}
                                    href={printAll({ roster: roster?.id }).url} target="_blank">
                                         Download ID Card Sheet.
                                    </LinkButton>

                                    <LinkButton className="bg-accent-secondary h-10 text-xs"
                                    
                                    icon={Download}>
                                       Download Roster Sheet
                                    </LinkButton>
                                    </div>
                                  
                                </TableCell>
                                {/* <AccordionContent>
                                  <div className="grid grid-cols-6">
                                    <div className="col-span-5">
                                        <TableContainer>
                                            <TableRow>
                                                <TableHead>Type</TableHead>
                                                <TableHead>Name</TableHead>
                                                <TableHead></TableHead>
                                            </TableRow>
                                            <TableBody>
                                                {roster.accreditations.map((accreditation) => 
                                                <TableRow key={accreditation.id}>
                                                    <TableCell></TableCell>
                                                </TableRow>
                                                )}
                                            </TableBody>
                                        </TableContainer>
                                    </div>
                                    <div>
                                        <Link href={printAll({roster:roster?.id}).url} target="_blank">
                                        Download ID Card Sheet. 
                                        </Link>
                                      
                                        Download Roster Sheet
                                    </div>
                                  </div>
                                </AccordionContent>
                            </AccordionItem> */}
                            </TableRow>

                        )}

                    </TableContainer>
                }
            </div>
        </>
    )
}