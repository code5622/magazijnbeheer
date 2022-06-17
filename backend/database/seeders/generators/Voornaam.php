<?php

namespace Database\Seeders\Generators;

class Voornaam {
    //private static $voornaam_nederlands;
    
    private static $voornamen_nederlands = [
        'Emma', 'Noah', 'Mila', 'Daan', 'Sophie', 'Lucas', 'Zoë', 'Levi', 'Julia', 'Sem',
        'Tess', 'Finn', 'Sara', 'Liam', 'Anna', 'James', 'Evi', 'Milan', 'Saar', 'Luuk',
        'Nora', 'Bram', 'Lieke', 'Noud', 'Olivia', 'Sam', 'Yara', 'Mees', 'Liv', 'Jesse',
        'Noor', 'Adam', 'Eva', 'Max', 'Lotte', 'Thomas', 'Lauren', 'Benjamin', 'Milou', 'Boaz',
        'Sofie', 'Julian', 'Maud', 'Mason', 'Nina', 'Siem', 'Nova', 'Luca', 'Sarah', 'Lars',
        'Lynn', 'Gijs', 'Fleur', 'Mats', 'Elin', 'Hugo', 'Fenna', 'Teun', 'Isa', 'David',
        'Emily', 'Jack', 'Roos', 'Stijn', 'Hannah', 'Thijs', 'Loïs', 'Guus', 'Sofia', 'Olivier',
        'Mia', 'Ruben', 'Lina', 'Dex', 'Ella', 'Vince', 'Noa', 'Jens', 'Esmee', 'Jan',
        'Lisa', 'Joep', 'Julie', 'Daniël', 'Vera', 'Ties', 'Bo', 'Cas', 'Hailey', 'Morris',
        'Sophia', 'Sven', 'Amy', 'Jayden', 'Luna', 'Abel', 'Isabella', 'Floris', 'Fien', 'Tobias',
        'Lara', 'Ryan', 'Norah', 'Owen', 'Maria', 'Tom', 'Elena', 'Fedde', 'Liz', 'Otis',
        'Jasmijn', 'Jaxx', 'Feline', 'Willem', 'Ivy', 'Tim', 'Lena', 'Tijn', 'Kiki', 'Jax',
        'Charlotte', 'Jace', 'Cato', 'Pim', 'Anne', 'Quinn', 'Merel', 'Pepijn', 'Veerle', 'Jason',
        'Suze', 'Senn', 'Amber', 'Boris', 'Floor', 'Jurre', 'Hanna', 'Xavi', 'Jill', 'Amir',
        'Juul', 'Zayn', 'Liva', 'Samuel', 'Lizzy', 'Hidde', 'Naomi', 'Mohamed', 'Lily', 'Alexander',
        'Amira', 'Oliver', 'Rosa', 'Nathan', 'Lize', 'Dani', 'Puck', 'Mohammed', 'Isabel', 'Mick',
        'Linde', 'Roan', 'Fenne', 'Kai', 'Fay', 'Stan', 'Sanne', 'Jake', 'Suus', 'Tygo',
        'Rosalie', 'Lenn', 'Livia', 'Niek', 'Charlie', 'Dean', 'Femke', 'Joshua', 'Johanna', 'Aiden',
        'Chloë', 'Rayan', 'Evy', 'Pieter', 'Sam', 'Sepp', 'Eline', 'Duuk', 'Elise', 'Casper',
        'Inaya', 'Oscar', 'Tessa', 'Ezra', 'Philou', 'Elias', 'Iris', 'Job', 'Laura', 'Felix',
    ];

    public static function random_voornaam($land) {
        switch($land) {
                        
            case 'Nederland': 
            {
                $last = count(self::$voornamen_nederlands) - 1;
                $rnd = rand(0, $last);        
                return self::$voornamen_nederlands[$rnd];
            }
            default: return null;
        }
    }    
}
