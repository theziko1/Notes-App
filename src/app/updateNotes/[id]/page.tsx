"use client"
import { UpdateNote ,GetOne ,  } from "@/lib/features/notes/notesSlice"
import { AppDispatch, RootState } from "@/lib/store"
import react ,{  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function UpdateNotes({params} : { params : {id : string}}){
  const dispatch = useDispatch<AppDispatch>()
  const  {notes }  = useSelector((state : RootState) => state.notes)
  const [title, setTitle] = useState(notes.title)
  const [description, setDescription] = useState(notes.description)

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault(); 
    dispatch(UpdateNote({id : params.id ,title , description}));
   
  };

  useEffect(() => {
    
    const getAUser = async (id : any) => {
      const data  : any | undefined = await dispatch(GetOne(id));
    
      setTitle(data.payload?.title)
      setDescription(data.payload?.description)
      console.log("title :"  , data.payload?.title)
      console.log("desc :"  ,description)
    };
    getAUser(params);
    
  }, [ ]);
  return(
    <>
      <div className="w-full h-screen flex items-center justify-center bg-black font-[Poppins]">
        <div className="w-[28rem] h-[30rem] rounded-md flex flex-col gap-7 items-center justify-center bg-white">
          <h1 className="text-2xl font-bold italic">UPDATE YOUR NOTE</h1>
          <div>
            <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border border-black w-80 h-14 pl-3 outline-none rounded"/>
          </div>
          <div>

            <textarea name="description" id="" value={description} onChange={(e) => setDescription(e.target.value)} cols={32} rows={5} placeholder="Description" className="border border-black rounded-md outline-none pt-3 pl-3"></textarea>
          </div>
          <div>
            <button onClick={handleUpdate} className="w-44 h-14 bg-green-600 text-lg font-medium text-white rounded hover:bg-white hover:text-green-600 hover:border hover:border-green-600 duration-700">
              Add Note
            </button>
          </div>
        </div>
      </div>
    
    </>
  )
}