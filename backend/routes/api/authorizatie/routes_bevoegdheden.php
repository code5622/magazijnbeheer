<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authorizatie\SubAfdelingController;

Route::group(['prefix'=>'subafdelingen'], function() {
    Route::get('', [SubAfdelingController::class, 'subafdelingen']);
    Route::get('/{id}', [SubAfdelingController::class, 'subafdeling']);
    Route::post('', [SubAfdelingController::class, 'create']);
    Route::put('{id}', [SubAfdelingController::class, 'update']);
    Route::delete('/{id}', [SubAfdelingController::class, 'remove']);
});
