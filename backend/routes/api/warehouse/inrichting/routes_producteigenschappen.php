<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Warehouse\Inrichting\ProductEigenschapController;

Route::group(['prefix'=>'producteigenschappen'], function() {

    Route::get('', [ProductEigenschapController::class, 'producteigenschappen']);
    Route::get('/{id}', [ProductEigenschapController::class, 'producteigenschap']);
    Route::post('', [ProductEigenschapController::class, 'create']);
    Route::put('{id}', [ProductEigenschapController::class, 'update']);
    Route::delete('/{id}', [ProductEigenschapController::class, 'remove']);
});
