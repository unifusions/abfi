<?php

namespace App\Http\Controllers\Frontend;

use App\Domains\Organization\Models\Organization;
use App\Http\Controllers\Controller;
use File;
use League\CommonMark\CommonMarkConverter;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Extension\FrontMatter\FrontMatterExtension;
use League\CommonMark\Extension\FrontMatter\Output\RenderedContentWithFrontMatter;
use League\CommonMark\MarkdownConverter;

use Str;

class RulesController extends Controller
{
    public function index()
    {
        return view('static.rules.index', [
            'categories' => $this->getCategories(),
        ]);
    }

    public function show(string $category, string $slug)
    {
        $path = resource_path("rules/{$category}/{$slug}.md");

        abort_unless(File::exists($path), 404);

        $content = File::get($path);

        $environment = new Environment([
            'html_input' => 'strip',
            'allow_unsafe_links' => false,
        ]);

        $environment->addExtension(new CommonMarkCoreExtension());
        $environment->addExtension(new FrontMatterExtension());


        $converter = new MarkdownConverter($environment);
        $markdown = File::get($path);
        $result = $converter->convert($markdown);

        $converter = new CommonMarkConverter([
            'html_input' => 'strip',
            'allow_unsafe_links' => false,
        ]);

        $markdown = File::get($path);
        $content = $converter->convert($markdown)->getContent();



        return view('static.rules.show', [
            'categories' => $this->getCategories(),
            'category' => $category,
            'slug' => $slug,
            'title' => Str::headline($slug),
            'content' => $result->getContent(),
        ]);
    }

    private function getCategories(): array
    {
        $directories = File::directories(resource_path('rules'));

        return collect($directories)->map(fn($directory) => [
            'name' => basename($directory),
            'pages' => collect(File::files($directory))
                ->map(fn($file) => [
                    'slug' => $file->getFilenameWithoutExtension(),
                    'title' => Str::headline(
                        $file->getFilenameWithoutExtension()
                    ),
                ])->values(),
        ])->values()->toArray();
    }

}