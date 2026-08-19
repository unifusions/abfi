<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">

    <style>
        @page {
            size: A4 portrait;
            margin: 10mm;
            margin: auto;
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
            width: 190mm;
            min-height: 277mm;
            page-break-after: always;
            position: relative;

            text-align: center
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
            width: 86mm;
            height: 32mm;
            padding: 2mm;
            display: inline-block;


            position: relative;
            overflow: hidden;



            background: #ffffff;

            border: 0.2mm solid black;

        }



        /* =========================
           HEADER
        ========================= */



        .page-header {

            margin-top: 7.5mm;
            margin-left: 7.5mm;
            margin-right: 7.5mm;
            margin-bottom: 7.5mm;
            width: 100%;


        }


        .logo-container {

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







        /* =========================
           PHOTO
        ========================= */

        .photo-frame {
            position: absolute;
            left: 4.5mm;

            width: 19.45mm;
            height: 25mm;

            border-radius: 1.5mm;
            background: #e8ebee;

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

            width: 38mm;
            text-align: left;
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
            border: 0.4mm solid #c5cbd4;
            border-radius: 2.5mm;
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
        $pages = $accreditations->chunk(12);
    @endphp


    @foreach ($pages as $page)

        <div class="page">
            <div class="page-header">
                <table style="width:100%">
                    <tr>
                        <td colspan="1">
                            <img src="images/logo.png" />
                        </td>
                        <td colspan="11">

                            <table>
                                <tr>
                                    <td style="font-size:16pt"> Amaetur Baseball Federation of India</td>
                                </tr>
                                <tr>
                                    <td>{{$tournament->name}}</td>
                                </tr>
                                <tr>
                                    <td>{{$tournament->starts_at->format('d/m/y')}} -
                                        {{ $tournament->ends_at->format('d/m/y')}}
                                    </td>

                                    <td>{{ $tournament->venue->name }}</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>



            </div>
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



                    $issuedDate = $accreditation->issued_at
                        ? $accreditation->issued_at->format('m / Y')
                        : '';

                    $photoPath = $photo
                        ? storage_path('app/public/' . $photo)
                        : null;

                    $qrPath = !empty($accreditation->qr_path)
                        ? storage_path('app/public/' . $accreditation->qr_path)
                        : null;
                @endphp


                <div class="card">






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




                            </div>

                        </div>

                    </div>






                </div>

            @endforeach

        </div>

    @endforeach

</body>

</html>