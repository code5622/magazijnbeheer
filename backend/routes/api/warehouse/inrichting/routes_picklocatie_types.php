<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Warehouse\Inrichting\PicklocatieTypeController;

Route::group(['prefix'=>'picklocatie_types'], function() {
    Route::get('', [PicklocatieTypeController::class, 'picklocatie_types']);
    Route::get('/{id}', [PicklocatieTypeController::class, 'picklocatie_type']);
    Route::post('', [PicklocatieTypeController::class, 'create']);
    Route::put('{id}', [PicklocatieTypeController::class, 'update']);
    Route::delete('/{id}', [PicklocatieTypeController::class, 'remove']);
});
