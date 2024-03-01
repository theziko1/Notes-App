"use client"
import Link from "next/link";
import { FaPen } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { GetAll , DeleteNote } from "@/lib/features/notes/notesSlice"
import { AppDispatch, RootState } from "@/lib/store"
import react ,{  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"



export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const { notes } = useSelector((state : RootState) => state.notes)

  
  const handleDelete = async (id : any) => {
    await dispatch(DeleteNote(id));
    window.location.reload()
  };

  useEffect(() => {
    const getAllNotes = async () => {
      await dispatch(GetAll());
    };
   
    getAllNotes();
    
  }, [dispatch ]);

  if (!Array.isArray(notes)) {
    return <></>;
  }

  const formatDate = (dateString : any) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options as object);
    return formattedDate;
  };
  
  return (
    <main className="min-h-screen px-24 py-10 font-[Poppins]">
      <header className="w-full flex items-center gap-10 mb-12">
        <h1 className="font-semibold">Notes App</h1>
        <input
          type="text"
          placeholder="Search ..."
          className="w-96 h-12 rounded-full border border-[#777777] pl-5 font-medium outline-none"
        />
      </header>
      <section className="flex items-center gap-10 mb-12">
        <Link href="addnotes">
          <IoMdAddCircleOutline className="w-14 h-14 cursor-pointer" />
        </Link>
        <h1 className="font-bold text-4xl">NOTES</h1>
      </section>
      <section className="w-full flex items-center justify-center">

        <div className="grid items-center gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {notes?.map((note : any, index : any) => (
             <div
            
              key={index}
              className="p-5 flex flex-col justify-between w-[21rem] h-[18rem] bg-[#FFA500] overflow-y-auto text-white rounded-md " 
            >
              <div className="gap-3 flex flex-col">
                <h1 className="font-bold text-2xl">{note.title}</h1>
                <p className="font-normal text-lg">{note.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{formatDate(note.createdAt)}</p>
                <div className="flex items-center gap-3">
                  <Link href={`/updateNotes/${note._id}`}>
                    <FaPen className="w-7 h-7 cursor-pointer hover:scale-125 duration-500"/>
                  </Link>
                  <MdDeleteForever onClick={() => handleDelete(note._id)}  className="w-8 h-8 cursor-pointer hover:scale-125 duration-500"/>
                </div>
              </div>
            </div>
              
           
           ))}
        </div>
      </section>
    </main>
  );
}
