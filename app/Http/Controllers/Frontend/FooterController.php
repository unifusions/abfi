<?php 

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use File;
use Str;
class FooterController extends Controller{

public function constitution(){

  $filePath = public_path('documents/ABFI_constitution.pdf');

    return response()->file($filePath);

}

public function cor(){
    return view('static.footer.certificate-of-registration');
}

public function audit(){
    dd($this->getFinancialAudits());
      return view('static.rules.index', [
            'categories' => $this->getFinancialAudits(),
        ]);
}
public function auditShow(string $slug){
    //  $path = public_path("documents/audit/{$slug}.pdf");
}
protected function getFinancialAudits(){
     $directories =public_path('documents/audit/');
        return collect($directories)->map(fn ($directory)  => [
        'name' => basename($directory),
        'pages' => collect(File::files($directory))
            ->filter(fn ($file) => $file->getExtension() === 'pdf')
            ->sortByDesc(fn ($file) => $file->getCTime())
            ->map(function ($file) use (  $directory) {
                $slug = $file->getFilenameWithoutExtension();
                 $category = basename($directory);
                return [
                    'slug' => $slug,
                    'title' =>   Str::headline($slug),
                     'href' => url("documents/{$category}/{$slug}"),
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
