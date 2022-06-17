<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Authorizatie\BevoegdheidController;

Route::group(['prefix'=>'bevoegdheden'], function() {
    Route::get('', [BevoegdheidController::class, 'bevoegdheden']);
    Route::get('/{id}', [BevoegdheidController::class, 'bevoegdheid']);
    Route::post('', [BevoegdheidController::class, 'create']);
    Route::put('{id}', [BevoegdheidController::class, 'update']);
    Route::delete('/{id}', [BevoegdheidController::class, 'remove']);
});
