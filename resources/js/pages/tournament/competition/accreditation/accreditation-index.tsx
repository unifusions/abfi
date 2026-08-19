import PageHeader from "@/components/ext/page-header";
import ProcessAccreditation from "./process-accreditation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TableContainer from "@/components/ext/table-container";
import { TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

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

                    <Accordion multiple defaultValue={["shipping"]}  >

                        {rosters.map((roster) =>

                            <AccordionItem value={roster.id}>
                                <AccordionTrigger>
                                    <div>
                                        {roster?.name} {roster?.organization?.name}
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
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
                                        Download ID Card Sheet. 
                                        Download Roster Sheet
                                    </div>
                                  </div>
                                </AccordionContent>
                            </AccordionItem>

                        )}

                    </Accordion>
                }
            </div>
        </>
    )
}