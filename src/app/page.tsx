import Link from "next/link";
import { FaPen } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

interface NotesInterface {
  name: string;
  position: string;
  createdAt: string;
  color: string;
}

export default function Home() {
  const Notes: NotesInterface[] = [
    {
      name: "Jhon Doe",
      position: "Jr. Web Developer",
      createdAt: "May 22, 2025",
      color: "#FFA500",
    },
    {
      name: "Jane Smith",
      position: "Sr. Web Developer",
      createdAt: "May 22, 2025",
      color: "#89CFF0",
    },
    {
      name: "Alex Johnson",
      position: "Frontend Developer",
      createdAt: "May 22, 2025",
      color: "#BF40BF",
    },
    {
      name: "Emily Brown",
      position: "UI/UX Designer",
      createdAt: "May 22, 2025",
      color: "#FFC300",
    },
    {
      name: "Sarah Wilson",
      position: "Backend Developer",
      createdAt: "May 22, 2025",
      color: "#FFA500",
    },
    {
      name: "Micheal Davis",
      position: "Fullstack Developer",
      createdAt: "May 22, 2025",
      color: "#BF40BF",
    },
  ];
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
        <div className=" flex items-center gap-14 flex-wrap">
          {Notes.map((note, index) => (
            <div
              key={index}
              className="p-5 flex flex-col justify-between w-[21rem] h-[18rem] overflow-y-auto bg-[#FFA500] rounded-md"
            >
              <div className="gap-3 flex flex-col">
                <h1 className="font-bold text-2xl">{note.name}</h1>
                <p className="font-normal text-lg">{note.position}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">{note.createdAt}</p>
                <div className="flex items-center gap-3">
                  <Link href="updateNotes">
                    <FaPen className="w-7 h-7 cursor-pointer hover:scale-125 duration-500"/>
                  </Link>
                  <MdDeleteForever className="w-8 h-8 cursor-pointer hover:scale-125 duration-500"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
