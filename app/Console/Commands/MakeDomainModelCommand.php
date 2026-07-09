<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;

 
class MakeDomainModelCommand extends MakeDomainCommand
{
    /**
     * Execute the console command.
     */

     protected $signature = 'make:domain-model {domain} {name}';

    protected string $folder = 'Models';

    protected string $stub = 'model.stub';
    
}
