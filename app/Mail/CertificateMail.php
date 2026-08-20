<?php

namespace App\Mail;

use App\Domains\Tournament\Competition\Certificate\Models\CompetitionCertificate;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CertificateMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(  public CompetitionCertificate $certificate)
    {
        //
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "Certificate - {$this->certificate->competition_name}",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
       return new Content(
            view: 'emails.certificates.certificate',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [
            Attachment::fromPath(
                $this->certificate->pdf_full_path
            )->as(
                "{$this->certificate->certificate_number}.pdf"
            )->withMime(
                'application/pdf'
            ),
        ];
    }
}
