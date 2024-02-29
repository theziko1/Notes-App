import { NextResponse, NextRequest } from "next/server";
import NotesModel from "../../../../models/NotesModel";
import Connect from "../../../../../lib/db";



export const GET = async (req : Request , {params} :  {params : {id : string}})  => {
  await Connect()
    try {
       const { id } = params
       const Notes = await NotesModel.findById(id)
       return NextResponse.json(Notes)
    
   } catch (error) {
    return NextResponse.json({error : "fetching notes error"})
   }
    

}

export const DELETE = async (request: Request, {params}:{params: {id: string}}) => {
  await Connect()
    try {
      const { id } = params;
      const deletedItem = await NotesModel.findByIdAndDelete(id)
      return NextResponse.json({message: "item deleted Successfully"} + deletedItem)
    } catch (error) {
      return NextResponse.json({message: error})
    }
}

export const PUT = async (request: Request, {params}:{params: {id: string}}) => {
  await Connect()
    try {
      const { id } = params;
      const { title, description } = await request.json()
      const newData = await NotesModel.findByIdAndUpdate(id, {title, description })
      return NextResponse.json({message: "Ddata Updated"} + newData)
    } catch (error) {
      return NextResponse.json({message: error})
    }
  }