<?php 


namespace App\Domains\Tournament\Competition\Format\Contracts;

use App\Domains\Tournament\Competition\Models\TournamentCompetition;

 

interface TournamentFormatDriver
{
    /**
     * Prepare the competition after registration closes.
     */
    public function initialize(TournamentCompetition $competition): void;

    /**
     * Called whenever a match is completed.
     */
    public function onMatchCompleted(TournamentCompetition $competition): void;

    /**
     * Determine if the competition has finished.
     */
    public function isCompleted(TournamentCompetition $competition): bool;

    /**
     * Generate the next stage if applicable.
     */
    public function advance(TournamentCompetition $competition): void;
}