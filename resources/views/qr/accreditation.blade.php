@php

$user = auth()->user();
$snapshot = $accreditation->snapshot;

$holderType = $snapshot['holder_type'] ?? 'player';

$holder = $holderType === 'official'
? ($snapshot['official'] ?? [])
: ($snapshot['player'] ?? []);

$name = $holder['name'] ?? '';

$photo = $holder['photo_path'] ?? null;

$association =
$snapshot['association']['name'] ?? '';

$role = $snapshot['role'] ?? (
$holderType === 'official'
? 'Official'
: 'Player'
);

$position =
$holder['position']
?? $snapshot['position']
?? $role;



$generatedDate = $accreditation->generated_at
? $accreditation->generated_at->format('m / Y')
: '';

$photoPath = $photo
? storage_path('app/public/' . $photo)
: null;

$qrPath = !empty($accreditation->qr_path)
? storage_path('app/public/' . $accreditation->qr_path)
: null;

$qrPng = app(App\Domains\QrCode\Services\QrcodeService::class)->png($accreditation->qrCode);
$qrBase64 = base64_encode($qrPng);

@endphp

<x-web-layout>
    <x-slot:pageHeader>
        <x-slot:preTitle>
            Verification
        </x-slot:preTitle>
        ID Card Verification

        <x-slot:title>Accreditation Verification</x-slot:title>
        <x-slot:heroDescription>Accreditation Verification of roster player participating in this tournaments</x-slot:heroDescription>
    </x-slot:pageHeader>

    <div class="max-w-container-max mx-auto space-y-6 mt-6">


       

        <div class="flex items-center justify-start text-4xl">
            <span class="material-symbols-outlined text-green-500  ">
                verified
            </span>

            <h5> Player is verified</h5>


        </div>

        <div class="max-w-md rounded-lg">

            {{-- HEADER --}}

            <div class="w-full rounded-t-3xl  flex items-center justify-between relative bg-primary p-4">


                <div class="flex items-center">
                    <img src={{ asset('images/logo.png') }} />


                    <div class="font-bold uppercase text-white">
                        AMATEUR BASEBALL<br>
                        FEDERATION OF INDIA
                    </div>
                </div>

                <div>
                    <div class="label text-white border border-white rounded-full px-3 text-[10px] tracking-widest">
                        {{ strtoupper($role) }}
                    </div>
                </div>


            </div>

            <div class="bg-secondary h-2 w-full"></div>

            {{-- PHOTO --}}

            <div class="p-4">
                <div class="grid grid-cols-4 gap-6">
                    <div class="  w-full border border-zinc-100 ">

                        @if ($photoPath && file_exists($photoPath))
                        <img class="photo" src="{{ $photoPath }}">
                        @endif

                    </div>

                    <div class="col-span-3 space-y-3">
                        <div>
                            <p
                                class="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                                Full Name</p>
                            <p class="font-body text-xl font-semibold text-primary uppercase">
                                {{$name}}
                            </p>

                        </div>



                        <div>
                            <p
                                class="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                                ASSOCIATION</p>
                            <p class="font-body text-md font-semibold text-primary uppercase">
                                {{ $association }}
                            </p>

                        </div>

                        <div class="grid grid-cols-3">
                            <div class="col-span-2">
                                <p
                                    class="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                                    ID NUMBER</p>
                                <p class="font-body text-md font-semibold text-primary uppercase">
                                    {{ $accreditation->card_number }}
                                </p>

                            </div>

                            <div>
                                <p
                                    class="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                                    ISSUANCE</p>
                                <p class="font-body text-md font-semibold text-primary uppercase">
                                    {{ $generatedDate}}
                                </p>

                            </div>



                        </div>
                        <div>
                            <p
                                class="font-label text-[10px] text-on-surface-variant uppercase tracking-wider">
                                POSITION</p>
                            <p class="font-body text-md font-semibold text-primary uppercase">
                                {{ $position }}
                            </p>

                        </div>



                    </div>














                </div>

            </div>



        </div>
    </div>
</x-web-layout>