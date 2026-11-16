<?php

namespace App\Http\Controllers\Frontend;

use App\Domains\Organization\Models\Organization;
use App\Http\Controllers\Controller;
use File;
use League\CommonMark\CommonMarkConverter;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Extension\FrontMatter\Data\SymfonyYamlFrontMatterParser;
use League\CommonMark\Extension\FrontMatter\FrontMatterExtension;
use League\CommonMark\Extension\FrontMatter\FrontMatterParser;
use League\CommonMark\Extension\FrontMatter\Output\RenderedContentWithFrontMatter;
use League\CommonMark\Extension\Table\TableExtension;
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

    $environment = new Environment([
        'html_input' => 'strip',
        'allow_unsafe_links' => false,
    ]);

    $environment->addExtension(new CommonMarkCoreExtension());
    $environment->addExtension(new FrontMatterExtension());
    $environment->addExtension(new TableExtension());

    $converter = new MarkdownConverter($environment);
    $markdown = File::get($path);
    $result = $converter->convert($markdown);

    $frontMatter = $result instanceof RenderedContentWithFrontMatter
        ? $result->getFrontMatter()
        : [];

    return view('static.rules.show', [
        'categories' => $this->getCategories(),
        'category' => $category,
        'slug' => $slug,
        'title' => $frontMatter['title'] ?? Str::headline($slug),
        'content' => $result->getContent(),
        'href' => url("rules/{$category}/{$slug}")
    ]);
    }

 private function getCategories(): array
{
    $directories = File::directories(resource_path('rules'));
    $parser = new FrontMatterParser(new SymfonyYamlFrontMatterParser());

    return collect($directories)->map(fn ($directory)  => [
        'name' => basename($directory),
        'pages' => collect(File::files($directory))
            ->filter(fn ($file) => $file->getExtension() === 'md')
            ->map(function ($file) use ($parser, $directory) {
                $slug = $file->getFilenameWithoutExtension();
                $frontMatter = $parser->parse(File::get($file->getPathname()))->getFrontMatter() ?? [];
                $category = basename($directory);
                return [
                    'slug' => $slug,
                    'title' => $frontMatter['title'] ?? Str::headline($slug),
                     'href' => url("rules/{$category}/{$slug}"),
                    'order' => $frontMatter['order'] ?? 999,
                ];
            })
            ->sortBy([
                ['order', 'asc'],
                ['title', 'asc'],
            ])
            ->values(),
    ])->values()->toArray();
}

}