import { NextResponse, NextRequest } from "next/server";
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

export const DELETE = async (request: NextRequest) => {
    try {
      const id = request.nextUrl.pathname.split('/').pop();
      const deletedItem = await NotesModel.findByIdAndDelete(id)
      return NextResponse.json({message: "item deleted Successfully"} + deletedItem)
    } catch (error) {
      return NextResponse.json({message: error})
    }
}

export const PUT = async (request: Request, {params}:{params: {id: string}}) => {
    try {
      const { id } = params;
      const { title, description } = await request.json()
      const newData = await NotesModel.findByIdAndUpdate(id, {title, description })
      return NextResponse.json({message: "Ddata Updated"} + newData)
    } catch (error) {
      return NextResponse.json({message: error})
    }
  }