import PageHeader from "@/components/ext/page-header";
import CompetitionPool from "@/components/ext/tournament/competition-pool";
import FinalPool from "@/components/ext/tournament/final-pool";
import { Button } from "@/components/ui/button";
import competition from "@/routes/tournaments/competition";
import { generate } from "@/routes/tournaments/competition/fixtures";
import { useForm, usePage } from "@inertiajs/react";

export default function GenerateFixture(
    { pools }
) {
    const {tournament, competition} = usePage().props;
    const {post} = useForm();
    const handleSubmit= (e) => {
        e.preventDefault();
post(generate({
    tournament:tournament?.id,
    competition : competition?.id,

}).url)
    } 
    return (
        <>
            <PageHeader title={"Fixture Generator"} subText="Generate match fixture between finalized pools using pool play strategy">
              <form onSubmit={handleSubmit}>
                <Button variant="accentSecondary" size="xl" className="text-sm font-bold" type="submit">
                    Generate
                </Button>
                </form>
            </PageHeader>
            <div className="grid grid-cols-4 gap-6">
                {pools.map((pool) =>
                    <FinalPool
                        key={pool.id}
                        pool={pool}
                        teams={pool.rosters}
                    />
                )}
            </div>


        </>
    )
}