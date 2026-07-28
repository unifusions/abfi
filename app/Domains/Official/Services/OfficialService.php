<?php 

namespace  App\Domains\Official\Services;

use App\Domains\AccessControl\Enums\RoleEnum;
use App\Domains\Official\Actions\CreateOfficial;
use App\Domains\Official\Actions\GenerateOfficialCode;
use App\Domains\Official\Models\Official;
use App\Models\User;
use DB;

class OfficialService{

public function __construct(protected CreateOfficial $createOfficial,
    protected GenerateOfficialCode $generateOfficialCode
){}

public function create($data) : Official{
     $user = auth()->user();
        $data['verified_at'] = $this->isAutoVerified($user) ? now() : null;
        $data['is_verified'] = $this->isAutoVerified($user);

          $officialTran = DB::transaction(function () use ($data) {
            $genderCode = strtoupper(substr($data['gender'], 0, 1));
           
            $data['official_code'] = $this->generateOfficialCode->handle(
                $data['organization_id'],
                $genderCode
            );
 
            return $this->createOfficial->handle($data);
        });
        
        return $officialTran;

}


      protected function isAutoVerified(User $user): bool
    {
        return $user->is_super_admin
            || $user->hasRole(RoleEnum::FEDERATION_ADMIN->value);
    }
}