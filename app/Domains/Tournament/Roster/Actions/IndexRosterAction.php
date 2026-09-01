<?php

namespace App\Domains\Tournament\Roster\Actions;

use App\Domains\Tournament\Roster\Enums\RosterStatusEnum;
use App\Domains\Tournament\Roster\Models\Roster;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class IndexRosterAction
{

    protected function getYearOverStats(Builder $query, ?callable $filter = null)
    {
        $currentYearQuery = clone $query;
        $lastYearQuery = clone $query;
        if ($filter) {
            $filter($currentYearQuery);
            $filter($lastYearQuery);
        }
        $currentYearCount = $currentYearQuery->whereYear('created_at', Carbon::now()->year)->count();
        $lastYearCount = $lastYearQuery->whereYear('created_at', Carbon::now()->subYear()->year)->count();
        if ($lastYearCount > 0) {
            $percentageChange = (($currentYearCount - $lastYearCount) / $lastYearCount) * 100;
        } else {
            $percentageChange = $currentYearCount > 0 ? 100 : 0;
        }

        // 5. Structure and return the payload
        return [
            // 'current_year_count' => $currentYearCount,
            // 'last_year_count'    => $lastYearCount,
            // 'percentage_change'  => round($percentageChange, 2),
            'count' => $query->count(),
            'changeValue' => number_format($percentageChange, 1) . '%',
            'changeType'=> $percentageChange >= 0 ? 'Increase' : 'Decrease',
        ];
    }
    public function handle() {
        return [
            'totalRosters' => $this->getYearOverStats(Roster::query()),
            'submittedRosters' => $this->getYearOverStats(Roster::query(), function ($query) { $query->where('status', '!=' , RosterStatusEnum::DRAFT);} ), 
            'approvedRosters' => $this->getYearOverStats(Roster::query(), function ($query) { $query->where('status', '!=' , RosterStatusEnum::APPROVED);} ) 
        ];
    }
}
