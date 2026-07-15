<?php

namespace App\Domains\AccessControl\Enums;

enum PermissionEnum: string
{

    // ORGANIZATION
    case ORGANIZATION_VIEW = 'organization.view';
    case ORGANIZATION_CREATE = 'organization.create';
    case ORGANIZATION_UPDATE = 'organization.update ';
    case ORGANIZATION_DELETE = 'organization.delete';

      // User
    case USER_VIEW = 'user.view';
    case USER_CREATE = 'user.create';
    case USER_UPDATE = 'user.update';
    case USER_DELETE = 'user.delete';

    // Tournament
    case TOURNAMENT_VIEW = 'tournament.view';
    case TOURNAMENT_CREATE = 'tournament.create';
    case TOURNAMENT_UPDATE = 'tournament.update';
    case TOURNAMENT_PUBLISH = 'tournament.publish';
    case TOURNAMENT_DELETE = 'tournament.delete';

    // Player
    case PLAYER_VIEW = 'player.view';
    case PLAYER_CREATE = 'player.create';
    case PLAYER_UPDATE = 'player.update';
    case PLAYER_DELETE = 'player.delete';

    // Roster
    case ROSTER_VIEW = 'roster.view';
    case ROSTER_CREATE = 'roster.create';
    case ROSTER_UPDATE = 'roster.update';
    case ROSTER_APPROVE = 'roster.approve';

    // Reports
    case REPORT_VIEW = 'report.view';
    case REPORT_DOWNLOAD = 'report.download';

}