<?php

namespace   App\Domains\Player\Actions;

use App\Domains\Player\Models\Player;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class IndexPlayer
{

    protected function  getYearOverYearStats(Builder $query, ?callable $filter = null): array
    {
        // 1. Clone the base queries so filters do not interfere with each other
        $currentYearQuery = clone $query;
        $lastYearQuery = clone $query;

        // 2. Apply custom filters (like gender) if provided
        if ($filter) {
            $filter($currentYearQuery);
            $filter($lastYearQuery);
        }

        // 3. Fetch the counts for both years
        $currentYearCount = $currentYearQuery->whereYear('created_at', Carbon::now()->year)->count();
        $lastYearCount = $lastYearQuery->whereYear('created_at', Carbon::now()->subYear()->year)->count();

        // 4. Calculate the percentage change safely
        if ($lastYearCount > 0) {
            $percentageChange = (($currentYearCount - $lastYearCount) / $lastYearCount) * 100;
        } else {
            $percentageChange = $currentYearCount > 0 ? 100 : 0;
        }

        // 5. Structure and return the payload
        return [
            'current_year_count' => $currentYearCount,
            'last_year_count'    => $lastYearCount,
            'percentage_change'  => round($percentageChange, 2),
            'formatted'          => number_format($percentageChange, 1) . '%',
            'direction'          => $percentageChange >= 0 ? 'Increase' : 'Decrease',
        ];
    }
    public function handle()
    {


        return [
            'allStats' => $this->getYearOverYearStats(Player::query()),
            'maleStats' => $this->getYearOverYearStats(Player::query(), function ($query) {
                $query->where('gender', 'male');
            }),
            'femaleStats' => $this->getYearOverYearStats(Player::query(), function ($query) {
                $query->where('gender', 'female');
            }),
        ];
    }
}
