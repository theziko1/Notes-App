import { NextResponse } from "next/server";
import NotesModel from "../../../../models/NotesModel";
import "../../../../../lib/db"



export const GET = async (req : Request , {params} :  {params : {id : string}})  => {
    try {
       const { id } = params
       const Notes = await NotesModel.findById(id)
       return NextResponse.json(Notes)
    
   } catch (error) {
    return NextResponse.json({error : "fetching notes error"})
   }
    

}