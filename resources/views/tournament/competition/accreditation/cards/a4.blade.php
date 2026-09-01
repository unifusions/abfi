<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <style>
        @page {
            size: A4 portrait;
            margin: 10mm;
             margin:auto;
        }

        * {
            box-sizing: border-box;
        }

        html,
        body {
            margin: 0;
            padding: 0;
            font-family: 'Public Sans', sans-serif;
        }

        .page {
            width: 200mm;
            min-height: 277mm;
            page-break-after: always;
            position: relative;

            text-align:center ;
            font-size: 0;
            margin: 0 auto;
            padding-top: 10mm; 
    box-sizing: border-box;
        }

        .page:last-child {
            page-break-after: auto;
        }

        /*
         * A4
         *
         * 2 columns
         * 4 rows
         *
         * 8 cards per page
         */

        .card {
            width: 85.6mm;
            height: 54mm;

            display: inline-block;
            vertical-align: top;

            position: relative;
            overflow: hidden;

            margin-right: 0mm;
            margin-bottom: 0mm;

            background: #ffffff;

            border: 0.2mm dashed #aeb4bd;
           
        }

        .card:nth-child(2n) {
            margin-right: 0;
        }


        /* =========================
           HEADER
        ========================= */

        .header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 20mm;
            background: #10294d;
        }

        .header-red-line {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 2.2mm;
            background: #c9163c;
        }

        .logo {
            position: absolute;
            left: 4.5mm;
            top: 3.5mm;
            width: 10.5mm;
            height: 10.5mm;
            border-radius: 2mm;
            background: #ffffff;
            text-align: center;
           
         
           
            color: #10294d;
        }

        .logo img {
             
            /* left: 5mm;
            top: 3.5mm; */
            width: 10mm;
            height: 10mm;
        }

        .federation-name {
            position: absolute;
            left: 17mm;
            top: 4mm;
            font-size: 2.5mm;
            line-height: 1;
            font-weight: bold;
            letter-spacing: .15px;
            color: #ffffff;
            text-transform: uppercase;
            text-align:left;
            font-family: 'Public Sans'
        }

        .credential {
            position: absolute;
            left: 17mm;
            top: 12mm;
            font-size: 1.2mm;
            letter-spacing: .7px;
            color: #b8c9e4;
            text-transform: uppercase;
             text-align:left;
        }

        .season {
            position: absolute;
            right: 4mm;
            top: 4.8mm;
            min-width: 18mm;
            height: 7mm;
            padding: 0 3mm;
            border-radius: 5mm;
            background: #ce3d56;
            color: #ffffff;
            font-size: 5px;
            font-weight: bold;
            line-height: 7mm;
            text-align: center;
            text-transform: uppercase;
        }


        /* =========================
           PHOTO
        ========================= */

        .photo-frame {
            position: absolute;
            left: 4.5mm;
            top: 23mm;
            width: 19.45mm;
            height: 25mm;
            border: 1px solid #b7bec7;
            border-radius: 1.5mm;
            background: #e8ebee;
            padding: 1.3mm;
        }

        .photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }


        /* =========================
           CONTENT
        ========================= */

        .content {
            position: absolute;
            left: 29mm;
            top: 24mm;
            width: 38mm;
             text-align:left;
        }

        .label {
            font-size: 4.2px;
            line-height: 1;
            color: #4a4f59;
            font-weight: bold;
            letter-spacing: .65px;
            text-transform: uppercase;
        }

        .name {
            margin-top: 1.5mm;
            font-size: 10px;
            line-height: 8.8px;
            font-weight: 900;
            color: #062047;
            text-transform: uppercase;
        }

        .field-row {
            margin-top: 4mm;
            width: 100%;
        }

        .field {
            display: inline-block;
            vertical-align: top;
        }

        .field.team {
            width: 21mm;
        }

        .field.position {
            width: 15mm;
        }

        .value {
            margin-top: 1mm;
            font-size: 5.8px;
            line-height: 6px;
            font-weight: bold;
            color: #171b21;
            text-transform: uppercase;
        }

        .position-value {
            color: #bd1639;
        }

        .bottom-row {
            margin-top: 4mm;
        }

        .bottom-field {
            display: inline-block;
            vertical-align: top;
        }

        .bottom-field.id {
            width: 21mm;
        }

        .bottom-field.issue {
            width: 15mm;
        }

        .bottom-value {
            margin-top: 1mm;
            font-size: 5.5px;
            line-height: 6px;
            font-weight: bold;
            color: #171b21;
        }


        /* =========================
           QR
        ========================= */

        .qr-wrapper {
            position: absolute;
            right: 6.5mm;
            top: 25mm;
            width: 11mm;
            height: 11mm;
            padding: 1.2mm;
           
            background: #ffffff;
        }

        .qr {
            width: 100%;
            height: 100%;
        }


        /* =========================
           SIGNATURE
        ========================= */

        .signature {
            position: absolute;
            right: 5.5mm;
            bottom: 4mm;
            width: 18mm;
            text-align: center;
        }

        .signature-line {
            width: 100%;
            height: .5mm;
            background: #b9bdc5;
            margin-bottom: 1.5mm;
        }

        .signature-label {
            font-size: 3.2px;
            color: #424750;
            font-weight: bold;
            letter-spacing: .55px;
            text-transform: uppercase;
        }
    </style>
</head>

<body>

    @php
        /*
         * Split into 8 cards per A4 page.
         */
        $pages = $accreditations->chunk(10);
    @endphp


    @foreach ($pages as $page)

        <div class="page">

            @foreach ($page as $accreditation)

                @php
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

                  

                    $issuedDate = $accreditation->generated_at
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


                <div class="card">

                

                    <div class="header">

                        <div class="logo">
                            <img src="images/logo.png" />
                        </div>

                        <div class="federation-name">
                            AMATEUR BASEBALL<br>
                            FEDERATION OF INDIA
                        </div>

                        <div class="credential">
                            FEDERATION OFFICIAL CREDENTIAL
                        </div>

                       
                        <div class="header-red-line"></div>

                    </div>


                    {{-- PHOTO --}}

                    <div class="photo-frame">

                        @if ($photoPath && file_exists($photoPath))
                            <img class="photo" src="{{ $photoPath }}">
                        @endif

                    </div>


                    {{-- CONTENT --}}

                    <div class="content">

                        <div class="label">
                            {{ strtoupper($role) }}
                        </div>

                        <div class="name">
                            {{ $name }}
                        </div>


                        <div class="field-row">

                            <div class="field team">

                                <div class="label">
                                    ASSOCIATION
                                </div>

                                <div class="value">
                                    {{ $association }}
                                </div>

                            </div>


                            <div class="field position">

                                <div class="label">
                                    POSITION
                                </div>

                                <div class="value position-value">
                                    {{ $position }}
                                </div>

                            </div>

                        </div>


                        <div class="bottom-row">

                            <div class="bottom-field id">

                                <div class="label">
                                    ID NUMBER
                                </div>

                                <div class="bottom-value">
                                    {{ $accreditation->card_number }}
                                </div>

                            </div>


                            <div class="bottom-field issue">

                                <div class="label">
                                    ISSUANCE 
                                </div>

                                <div class="bottom-value">
                               {{ $issuedDate }}
                                </div>

                            </div>

                        </div>

                    </div>


                    {{-- QR CODE --}}

                  

                        <div class="qr-wrapper">
 
                        <img
    src="data:image/png;base64,{{ $qrBase64 }}"
   
    alt="QR Code"
    class="qr"
/>

                        </div>

                

                    {{-- SIGNATURE --}}

                    <div class="signature">

                        <div class="signature-line"></div>

                        <div class="signature-label">
                            Authorized Signature
                        </div>

                    </div>

                </div>

            @endforeach

        </div>

    @endforeach

</body>

</html>