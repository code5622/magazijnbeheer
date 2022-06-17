<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UI\FilterController;

Route::group(['prefix'=>'filters'], function() {
    Route::get('', [FilterController::class, 'filters']);
    Route::get('/{url}/{filter_id}', [FilterController::class, 'filter']);
    Route::post('', [FilterController::class, 'create']);
    Route::put('/{url}/{filter_id}', [FilterController::class, 'update']);
    Route::delete('/{url}/{filter_id}', [FilterController::class, 'remove']);
});
