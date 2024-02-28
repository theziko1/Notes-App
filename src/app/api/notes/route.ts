import { NextResponse } from "next/server";
import NotesModel from "@/models/NotesModel";
import Connect from "../../../../lib/db";





export const GET = async (req : Request )  => {
    await Connect()
    try {
    
       const Notes = await NotesModel.find()
       return NextResponse.json(Notes)
    
   } catch (error) {
    return NextResponse.json({error : "fetching notes error"})
   }
    

}

