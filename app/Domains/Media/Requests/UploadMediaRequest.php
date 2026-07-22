<?php

namespace App\Domains\Media\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UploadMediaRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'file' => [
                'required',
                'file',

                // 10 MB
                'max:10240',

                // Images + PDFs
                'mimes:jpg,jpeg,png,webp,pdf'
            ]

        ];
    }
}