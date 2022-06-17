<?php

namespace Database\Seeders\Generators;

class Achternaam {
    //private static $achternaam_nederlands;
    
    private static $achternamen_nederlands = [
        'de Jong', 'Jansen', 'de Vries', 'van den Berg', 'van de Berg', 'van der berg', 'van Dijk', 'Bakker', 'Janssen', 'Visser',
        'Smit', 'Meijer', 'Meyer', 'de Boer', 'Mulder', 'de Groot', 'Bos', 'Vos', 'Peters', 'Hendriks',
        'van Leeuwen', 'Dekker', 'Brouwer', 'de Wit', 'Dijkstra', 'Smits', 'de Graaf', 'van der Meer', 'van de Meer', 'van der Linden',
        'Kok', 'Jacobs', 'de Haan', 'Vermeulen', 'van den Heuvel', 'van der Veen', 'van de Veen', 'van den Broek', 'de Bruijn', 'de Bruyn',
        'de Bruin', 'van der Heijden', 'van der Heyden', 'Schouten', 'van Beek', 'Willems', 'van Vliet', 'van de Ven', 'vander Ven', 'Hoekstra',
        'Maas', 'Verhoeven', 'Koster', 'van Dam', 'van der Wal', 'van de wal', 'Prins', 'Blom', 'Huisman', 'Peeters',
        'de Jonge', 'Kuipers', 'van Veen', 'Post', 'Kuiper', 'Veenstra', 'Kramer', 'van den Brink', 'van de Brink', 'Scholten',
        'van Wijk', 'Postma', 'Martens', 'Vink', 'de Ruiter', 'Timmermans', 'Groen', 'Gerritsen', 'Jonker', 'van Loon',
        'Boer', 'van der Velde', 'van den Velde', 'van de Velde', 'Willemsen', 'Smeets', 'de Lange', 'de Vos', 'Bosch', 'van Dongen',
        'Schipper', 'de Koning', 'van der Laan', 'Koning', 'van der Velden', 'van de Velden', 'van den Velden', 'van den Velden', 'Driessen', 'van Doorn',
        'Hermans', 'Evers', 'van den Bosch', 'van der Meulen', 'Hofman', 'Bosman', 'Wolters', 'Sanders', 'van der Horst', 'Mol',
        'Kuijpers', 'Kuypers', 'Molenaar', 'van de Pol', 'van den Pol', 'van der Pol', 'de Leeuw', 'Verbeek'  
    ];     

    public static function random_achternaam($land) {
        switch($land) {                     
            case 'Nederland': 
            {
                $last = count(self::$achternamen_nederlands) - 1;
                $rnd = rand(0, $last);        
                return self::$achternamen_nederlands[$rnd];
            }
            default: return null;
        }
    }    
}
