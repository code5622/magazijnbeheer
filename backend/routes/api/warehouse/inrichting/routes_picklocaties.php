<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Warehouse\Inrichting\PicklocatieController;

Route::group(['prefix'=>'picklocaties'], function() {
    Route::get('/metadata', [PicklocatieController::class, 'metadata']);    

    Route::get('/{pagina}/{aantal}', [PicklocatieController::class, 'picklocaties']);
    Route::get('/{id}', [PicklocatieController::class, 'picklocatie']);
    Route::post('', [PicklocatieController::class, 'create']);
    Route::put('{id}', [PicklocatieController::class, 'update']);
    Route::delete('/{id}', [PicklocatieController::class, 'remove']);
});
