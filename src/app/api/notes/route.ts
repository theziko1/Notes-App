import NotesModel from "@/models/NotesModel";
import { NextResponse } from "next/server";
import Connect from "../../../../lib/db";

export const POST = async (req: Request) => {
  await Connect()
    try {
      const { title, description } = await req.json();
      const newNote = await NotesModel.create({ title, description });
      return NextResponse.json(newNote);
    } catch (error) {
      return NextResponse.json({ error: "fetching notes error" });
    }
  };
  

export const GET = async (req: Request) => {
  await Connect()
  try {
    const Notes = await NotesModel.find();
    return NextResponse.json(Notes);
  } catch (error) {
    return NextResponse.json({ error: "fetching notes error" });
  }
};
