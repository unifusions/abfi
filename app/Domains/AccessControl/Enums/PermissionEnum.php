<?php

namespace App\Domains\AccessControl\Enums;

enum PermissionEnum: string
{


    // ORGANIZATION
    case DASHBOARD_VIEW = 'dashboard.view';
   
   
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

    
    // Player
    case OFFICIAL_VIEW = 'official.view';
    case OFFICIAL_CREATE = 'official.create';
    case OFFICIAL_UPDATE = 'official.update';
    case OFFICIAL_DELETE = 'official.delete';

    // Roster
    case ROSTER_VIEW = 'roster.view';
    case ROSTER_CREATE = 'roster.create';
    case ROSTER_EDIT = 'roster.edit';
    case ROSTER_UPDATE = 'roster.update';
    case ROSTER_APPROVE = 'roster.approve';
    case ROSTER_BUILDER = 'roster.builder';
    case ROSTER_REVIEW = 'roster.review';
    


    case COMPLIANCE_VIEW = 'compliance.view';
    case COMPLIANCE_CATEGORY = 'compliance.category';
    case COMPLIANCE_USER = 'compliance.user';
    case COMPLIANCE_RBAC = 'compliance.rbac';
    case COMPLIANCE_ORGANIZATION = 'compliance.organization';
 
  

}