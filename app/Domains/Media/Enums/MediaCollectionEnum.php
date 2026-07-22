<?php

namespace App\Domains\Media\Enums;

enum MediaCollectionEnum : string{
    // Generic
    case PROFILE = 'profile';
    case GALLERY = 'gallery';
    case LOGO = 'logo';
    case BANNER = 'banner';
        case COVER = 'cover';


    // Identity Documents
    case AADHAAR = 'aadhaar';
    case PASSPORT = 'passport';
    case BIRTH_CERTIFICATE = 'birth_certificate';
    case SCHOOL_ID = 'school_id';

    // Tournament
    case CERTIFICATE = 'certificate';
    case ID_CARD = 'id_card';

    // Miscellaneous
    case OTHER = 'other';

    public static function single(): array
    {
        return [
            self::PROFILE,
            self::LOGO,
            self::BANNER,
            self::COVER,
        ];
    }

     public static function multiple(): array
    {
        return [
            self::GALLERY,
            self::AADHAAR,
            self::PASSPORT,
            self::BIRTH_CERTIFICATE,
            self::SCHOOL_ID,
            self::CERTIFICATE,
            self::ID_CARD,
            self::OTHER,
        ];
    }

    public function isSingle(): bool
    {
        return in_array($this, self::single(), true);
    }

    public function isMultiple(): bool
    {
        return in_array($this, self::multiple(), true);
    }

}