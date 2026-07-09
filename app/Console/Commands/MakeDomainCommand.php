<?php

namespace App\Console\Commands;

 
use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

 
class MakeDomainCommand extends Command
{
    /**
     * Execute the console command.
     */
    protected $signature = 'make:domain {name}';
        protected $description = 'Create a new application domain';

    protected array $directories = [
        'Actions',
        'Controllers',
        'Models',
        'Policies',
        'Requests',
        'Resources',
        'Services',
        'Enums',
        'Events',
        'Listeners',
        'Traits',
        'DTOs',
    ];
    public function handle()
    {
       $domain = ucfirst($this->argument('name'));

        $basePath = app_path("Domains/{$domain}");

        if (! File::exists($basePath)) {
            File::makeDirectory($basePath, 0755, true);
        }

        foreach ($this->directories as $directory) {
            File::ensureDirectoryExists("{$basePath}/{$directory}");

            $this->components->info("Created {$domain}/{$directory}");
        }

        // Create routes file
        $routeFile = base_path('routes/' . strtolower($domain) . '.php');

        if (! File::exists($routeFile)) {
            File::put($routeFile, "<?php\n");
            $this->components->info("Created routes/" . strtolower($domain) . ".php");
        }

        // Create test folders
        File::ensureDirectoryExists(base_path("tests/Feature/{$domain}"));
        File::ensureDirectoryExists(base_path("tests/Unit/{$domain}"));

        $this->newLine();
        $this->components->info("Domain {$domain} created successfully.");

        return self::SUCCESS;
    }
}
