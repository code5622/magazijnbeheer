<?php

namespace Database\Seeders\Generators;

class KlantData {
    private static $provincie;
    private static $plaats;
    
    public static function random_klantdata() {
        $data = [
            'Groningen' => [
                0 => [
                    'plaats' => 'Groningen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Winssum', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Veendam', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Winschoten', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Hoogkerk', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Leek', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Appingedam', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Haren', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Delfzijl', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                  
            ],
            'Friesland' => [    
                0 => [
                    'plaats' => 'Leeuwarden', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Sneek', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Heerenveen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Drachten', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Harlingen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Sneek', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Dokkum', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Lemmer', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Bolsward', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                              
            ], 
            'Drenthe' => [
                0 => [
                    'plaats' => 'Assen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Emmen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Hoogeveen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Meppel', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Roden', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Coevorden', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Klazienaveen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Beilen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Zuidlaren', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                  
            ],
            'Overijssel' => [
                0 => [
                    'plaats' => 'Enschede', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Zwolle', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Deventer', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Hengelo', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Almelo', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Kampen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Oldenzaal', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Rijssen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Nijverdal', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                  
            ],  
            'Flevoland' => [
                0 => [
                    'plaats' => 'Almere', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Lelystad', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Dronten', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Zeewolde', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Urk', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Emmeloord', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Biddinghuizen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Swifterband', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Marknesse', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                  
            ],  
            'Gelderland' => [

                0 => [
                    'plaats' => 'Nijmegen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Arnhem', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Apeldoorn', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Ede', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Doetinchem', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Harderwijk', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Tiel', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Zutphen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Wageningen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                  
            ],
            'Utrecht' => [
                0 => [
                    'plaats' => 'Utrecht', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Amersfoort', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Veenendaal', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Zeist', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Nieuwegein', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Utrechtse Heuvelrug', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Woerden', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Houten', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Soest', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                 
            ],  
            'Noord-Holland' => [
                0 => [
                    'plaats' => 'Amsterdam', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Haarlem', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2=> [
                    'plaats' => 'Zaandam', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3=> [
                    'plaats' => 'Alkmaar', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Amsteleen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Hilversum', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Purmerend', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],    
                7 => [
                    'plaats' => 'Hoorn', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                              
                8 => [
                    'plaats' => 'Velsen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
            ],  
            'Zuid-Holland' => [
                0 => [
                    'plaats' => 'Rotterdam', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Den Haag', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Zoetermeer', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Leiden', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Dordrecht', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Leidschendam', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Westland', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Delft', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Schiedam', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
            ],
            'Zeeland' => [
                0 => [
                    'plaats' => 'Middelburg', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Vlissingen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Terneuzen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Goes', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Hulst', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Tholen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Sluis', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Borsele', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Veere', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
            ],                
            'Noord-Brabant' => [
                0 => [
                    'plaats' => 'Eindhoven', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Tilburg', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Breda', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Den Bosch', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Helmond', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Oss', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Roosendaal', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Bergen op Zoom', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Oosterhout', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                
            ],              
            'Limburg' => [
                0 => [
                    'plaats' => 'Maastricht', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                1 => [
                    'plaats' => 'Venlo', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                2 => [
                    'plaats' => 'Sittard', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                3 => [
                    'plaats' => 'Heerlen', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                4 => [
                    'plaats' => 'Roermond', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                5 => [
                    'plaats' => 'Weert', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                6 => [
                    'plaats' => 'Kerkrade', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                7 => [
                    'plaats' => 'Venray', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],
                8 => [
                    'plaats' => 'Landgraaf', 'telefoon' => '', 'postcode' => '', 'adres' => ''
                ],                  
            ]                                                     
        ];       

        $provincie_rnd = rand(1, 100);

        if($provincie_rnd < 3.366507984) {
            $provincie = 'Groningen';
        } elseif($provincie_rnd < 7.09997884375704) {
            $provincie = 'Friesland';                    
        } elseif($provincie_rnd < 9.93569088057935) {
            $provincie = 'Drenthe';                    
        } elseif($provincie_rnd < 16.6134352310209) {
            $provincie = 'Overijssel';                        
        } elseif($provincie_rnd <= 19.0431518999288) {
            $provincie = 'Flevoland';                      
        } elseif($provincie_rnd < 31.026569495386) {
            $provincie = 'Gelderland';                   
        } elseif($provincie_rnd < 38.809970237078) {
            $provincie = 'Utrecht';                    
        } elseif($provincie_rnd < 55.3513088062991) {
            $provincie = 'Noord-Holland';                       
        } elseif($provincie_rnd < 76.654519586413) {
            $provincie = 'Zuid-Holland';             
        } elseif($provincie_rnd < 78.8575663266599) {
            $provincie = 'Zeeland';                            
        } elseif($provincie_rnd < 93.5826790627813) {
            $provincie = 'Noord-Brabant';           
        } elseif($provincie_rnd <= 100) {
            $provincie = 'Limburg';                        
        }

        $plaats_rnd = rand(1, 100);

        if($plaats_rnd < 30) {
            $plaats = $data[$provincie][0]['plaats'];
        } elseif($plaats_rnd < 30) {
            $plaats = $data[$provincie][1]['plaats'];         
        } elseif($plaats_rnd < 50) {
            $plaats = $data[$provincie][2]['plaats'];          
        } elseif($plaats_rnd < 65) {
            $plaats = $data[$provincie][3]['plaats'];            
        } elseif($plaats_rnd < 75) {
            $plaats = $data[$provincie][4]['plaats'];          
        } elseif($plaats_rnd < 85) {
            $plaats = $data[$provincie][5]['plaats'];         
        } elseif($plaats_rnd < 90) {
            $plaats = $data[$provincie][6]['plaats'];          
        } elseif($plaats_rnd < 95) {
            $plaats = $data[$provincie][7]['plaats'];            
        } elseif($plaats_rnd <= 100) {
            $plaats = $data[$provincie][8]['plaats'];          
        }

        self::$plaats = $plaats;
        self::$provincie = $provincie;   

        $klantrecord = new KlantRecord();
        $klantrecord->plaats = self::$plaats;
        $klantrecord->provincie = self::$provincie;

        // $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        // $out->writeln("terminal xxx : " . $klantrecord->provincie);      

        return $klantrecord;
    }   
}

class KlantRecord {
    public $plaats;
    public $provincie;
}
