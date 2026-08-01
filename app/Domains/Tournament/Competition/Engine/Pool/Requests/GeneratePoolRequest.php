<?php 

namespace App\Domains\Tournament\Competition\Engine\Pool\Requests;

use App\Domains\Tournament\Competition\Engine\Pool\Enums\PoolGenerationMethod;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class GeneratePoolRequest extends FormRequest
{
  public function authorize(): bool
    {
        return true;
    }

     public function rules(): array
    {
        return [
            'pool_count' => [
                'required',
                'integer',
                'min:4',
            ],

            'generation_method' => [
                'required',
                new Enum(PoolGenerationMethod::class),
            ],
        ];
    }
}
