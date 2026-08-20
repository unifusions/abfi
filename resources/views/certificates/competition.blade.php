<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">

    <style>
        @page {
            size: A4 landscape;
            margin: 0;
        }

        html,
        body {
            margin: 0;
            padding: 0;
            width: 297mm;
            height: 210mm;
        }
.page-break {
    page-break-after: always;
}
        .certificate {
            position: relative;
            width: 297mm;
            height: 210mm;
            overflow: hidden;
        }

        .background {
            position: absolute;
            inset: 0;
            width: 297mm;
            height: 210mm;
            object-fit: cover;
        }

        .content {
            position: absolute;
            inset: 0;
        }

        .tournament {
            position: absolute;
            top: 50mm;
            left: 75mm;
            font-size: 20pt;
            width: 175mm;
            text-align: center;
            font-weight: bold;

        }

        .organizer {
            font-size: 16pt;
            font-weight: normal;
        }


        .recipient-name {
            position: absolute;
            top: 92mm;
            left: 35mm;
            width: 227mm;

            text-align: center;

        }

        .recipient-name h3 {
            font-size: 30pt;
            margin-top: 3mm;
            margin-bottom: 3mm;
            font-weight: bold;
        }

        .recipient-name p {
            font-size: 14pt;
            line-height: 22pt
        }

        .achievement {
            position: absolute;
            top: 112mm;
            left: 50mm;
            width: 197mm;

            text-align: center;
            font-size: 18pt;
            font-weight: bold;
        }

        .competition-name {
            position: absolute;
            top: 125mm;
            left: 40mm;
            width: 217mm;

            text-align: center;
            font-size: 16pt;
        }

        .category {
            position: absolute;
            top: 138mm;
            left: 70mm;
            width: 157mm;

            text-align: center;
            font-size: 13pt;
        }

        .gender {
            position: absolute;
            top: 147mm;
            left: 70mm;
            width: 157mm;

            text-align: center;
            font-size: 12pt;
        }

        .year {
            position: absolute;
            top: 157mm;
            left: 120mm;
            width: 57mm;

            text-align: center;
            font-size: 14pt;
            font-weight: bold;
        }

        .certificate-number {
            position: absolute;
            bottom: 12mm;
            left: 15mm;

            font-size: 8pt;
        }

        .qr-code {
            position: absolute;
            right: 18mm;
            bottom: 10mm;

            width: 25mm;
            height: 25mm;
        }

        .qr-code img,
        .qr-code svg {
            width: 100%;
            height: 100%;
        }
    </style>
</head>

<body>

    <div class="certificate">

        <img src="{{ $background }}" class="background"/>

        <div class="content">

            <div class="tournament">
                {{ $tournament->name }}

                <div class="organizer">
                    Organized By : {{ $tournament->organization->name }}
                </div>
            </div>

            <div class="recipient-name">
                <div style="font-style:italic" >This is to certify that </div>
                <h3 class=""> {{ $certificate->recipient_name }}</h3>
                @if($certificate->type->value == 'participant')


                    <p  style="font-style:italic" >
                        D.O.B {{ $certificate->snapshot['recipient']['dob'] }} of  {{ $certificate->snapshot['organization']['state'] }} State
                        participated as <b>{{$certificate->snapshot['recipient']['role'] === 'player' ? "Player" : ucfirst($certificate->snapshot['recipient']['role']) }}</b> in the<br/>
                        <b><span style="font-style:normal">{{ $tournament->name }}</span></b>  </br/> held at {{ $tournament->venue->name }} from
                        {{ $tournament->starts_at->format('d/m/Y') }} to {{ $tournament->ends_at->format('d/m/Y') }}

                    </p>
                @endif
            </div>


 




            <div class="certificate-number">
                {{ $certificate->certificate_number }}
            </div>

            <div class="qr-code">

            </div>

        </div>

    </div>

</body>

</html>