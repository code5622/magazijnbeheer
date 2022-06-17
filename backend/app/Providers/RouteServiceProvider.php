<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * This is used by Laravel authentication to redirect users after login.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * The controller namespace for the application.
     *
     * When present, controller route declarations will automatically be prefixed with this namespace.
     *
     * @var string|null
     */
    // protected $namespace = 'App\\Http\\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            // Route::prefix('api')
            //     ->middleware('api')
            //     ->namespace($this->namespace)
            //     ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->namespace($this->namespace)
                ->group(base_path('routes/web.php'));
      
            /* ********  Warehouse ********************************************************************************************* */    
            

                    /**** Producten ****************************************************************************************** */            
                    Route::prefix('api')
                        ->middleware('api')
                        ->namespace($this->namespace)
                        ->group(base_path('routes/api/warehouse/producten/routes_producten.php'));  

                    /**** Inrichting ****************************************************************************************** */
                    Route::prefix('api')
                        ->middleware('api')
                        ->namespace($this->namespace)
                        ->group(base_path('routes/api/warehouse/inrichting/routes_picklocaties.php'));  
             
                    Route::prefix('api')
                        ->middleware('api')
                        ->namespace($this->namespace)
                        ->group(base_path('routes/api/warehouse/inrichting/routes_picklocatie_types.php'));  
                        
                        // Route::prefix('api')
                        // ->middleware('api')
                        // ->namespace($this->namespace)
                        // ->group(base_path('routes/api/warehouse/inrichting/routes_producteigenschappen.php'));                          

            /* ********  Inkoop ********************************************************************************************* */      
            
            /* ********  Verkoop ********************************************************************************************* */      
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api/verkoop/routes_klanten.php'));             

            /* ********  Voorraadbeheer ********************************************************************************************* */     
            
            /* ********  Goederenontvangst ********************************************************************************************* */ 
            
            /* ********  Authorizatie ********************************************************************************************* */    
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api/authorizatie/routes_bevoegdheden.php'));  
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api/authorizatie/routes_afdelingen.php'));  
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api/authorizatie/routes_subafdelingen.php'));

            /* ********  Authorizatie ********************************************************************************************* */    
            Route::prefix('api')
                ->middleware('api')
                ->namespace($this->namespace)
                ->group(base_path('routes/api/ui/routes_filters.php'));                                           
        });
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by(optional($request->user())->id ?: $request->ip());
        });
    }
}
