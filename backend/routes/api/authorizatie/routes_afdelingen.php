<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authorizatie\AfdelingController;

Route::group(['prefix'=>'afdelingen'], function() {
    Route::get('', [AfdelingController::class, 'afdelingen']);
    Route::get('/{id}', [AfdelingController::class, 'afdeling']);
    Route::post('', [AfdelingController::class, 'create']);
    Route::put('{id}', [AfdelingController::class, 'update']);
    Route::delete('/{id}', [AfdelingController::class, 'remove']);
});
