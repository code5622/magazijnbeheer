<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Verkoop\KlantController;

Route::group(['prefix'=>'klanten'], function() {
    Route::get('/per_provincie', [KlantController::class, 'per_provincie']);
    Route::get('/per_plaats_provincie/{provincie}', [KlantController::class, 'Per_plaats_provincie']);

    Route::get('', [KlantController::class, 'klanten']);
    Route::get('/{id}', [KlantController::class, 'klant']);
    Route::post('', [KlantController::class, 'create']);
    Route::put('{id}', [KlantController::class, 'update']);
    Route::delete('/{id}', [KlantController::class, 'remove']);
});
