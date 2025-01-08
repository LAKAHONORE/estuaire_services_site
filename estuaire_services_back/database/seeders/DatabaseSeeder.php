<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Devi;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

      /*  User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);*/


        Devi::create([
            "name"=> "LAKA",
            "email"=> "laka@gmailcom.com",
            "tel" => "696898989",
            "adresse"=>"doul-ccc",
            "title" => "title 1",
            "description" => "desc 1",
        ]);


        Devi::create([
            "name"=> "papa",
            "email"=> "papa@gmail.com",
            "tel" => "656565656",
            "adresse"=>"yaoundde-buka",
            "title" => "title 2",
            "description" => "desc 2",
        ]);


        Devi::create([
            "name"=> "ludovic",
            "email"=> "ludovic@gmail.com",
            "tel" => "696858855",
            "adresse"=>"edea-peuple",
            "title" => "title 3",
            "description" => "desc 3",
        ]);

    }
}
