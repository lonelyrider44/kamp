<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function angular(){
        return view('angular');
    }

    public function exec_safe($f, $message = null)
    {
        try {
            \DB::beginTransaction();
            $f();
            \DB::commit();
            return response()->json([
                'message' => $message ?? "Operacija uspešna"
            ]);
        } catch (\Exception $e) {
            \DB::rollback();
            return
             response()->json([
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
