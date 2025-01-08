<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Devi;

class DeviController extends Controller
{
    public function create(Request $request){
        $validateData = $request->validate([
            "name"=> "required",
            "email"=> "required",
            "tel"=> "required",
            "adresse"=> "required",
            "title"=> "required",
            "description"=> "required"
        ]);

     /*   $old_dev = Devi::where(['name'=>$validateData['name'], 'email'=>$validateData['email'], 'title'=>$validateData['title']])->first();
        return response()->json($old_dev);
        if(!$old_dev){*/
            Devi::create($validateData);
        
            return response()->json([
                "status" => "200",
                "message"=> "Demande enregistrée avec succès"
            ]);
      /*  }else{
            return response()->json([
                "status"=> "400",
                "message"=> "Ce devis existe déjà"
            ]);
        }*/

    }


    public function index(){
        $devis = Devi::all();
        return response()->json([
            "devis"=>$devis
        ]);
    }
}
