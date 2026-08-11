<?php 

namespace App\Domains\Tournament\Competition\Engine\Fixture\Services;

use Illuminate\Support\Collection;
 

class RoundRobinGenerator{
    public function generate(Collection $teams): Collection
    {
        $teams = $teams->values();

        // Add bye if odd number of teams
        if ($teams->count() % 2 !== 0) {
            $teams->push(null);
        }

        $rounds = collect();

        $count = $teams->count();

        for ($round = 0; $round < $count - 1; $round++) {

            $matches = collect();

            for ($i = 0; $i < $count / 2; $i++) {

                $home = $teams[$i];
                $away = $teams[$count - 1 - $i];

                if ($home && $away) {
                    $matches->push([
                        'home' => $home,
                        'away' => $away,
                    ]);
                }
            }

            $rounds->push($matches);

            // Rotate teams (keep first fixed)
            $fixed = $teams->shift();

            $last = $teams->pop();

            $teams->prepend($last);

            $teams->prepend($fixed);
        }

        return $rounds;
    }
}