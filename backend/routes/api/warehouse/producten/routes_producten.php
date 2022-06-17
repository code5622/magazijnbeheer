<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Warehouse\ProductController;

Route::group(['prefix'=>'products'], function() {
    Route::get('/metadata', [PicklocatieController::class, 'metadata']);    
    Route::get('/{current_page}/{page_rows}', [ProductController::class, 'products']);    
    //Route::get('/{pagina}/{aantal}', [ProductController::class, 'producten']);
    Route::get('/{id}', [ProductController::class, 'product']);
    //Route::post('', [ProductController::class, 'create']);
    Route::put('/{id}', [ProductController::class, 'update']);
    Route::delete('/{id}', [ProductController::class, 'remove']);
});
