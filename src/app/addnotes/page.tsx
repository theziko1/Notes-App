

export default function Notes(){

  return(
    <>
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="w-[28rem] h-[30rem] rounded-md flex flex-col gap-7 items-center justify-center bg-white">
          <h1 className="text-2xl font-bold italic">ADD YOUR NOTE HERE</h1>
          <div>
            <input type="text" placeholder="Title" className="border border-black w-80 h-14 pl-3 outline-none rounded"/>
          </div>
          <div>
            <textarea name="" id="" cols={32} rows={5} placeholder="Description" className="border border-black rounded-md outline-none pt-3 pl-3"></textarea>
          </div>
          <div>
            <button className="w-44 h-14 bg-green-600 text-lg font-medium text-white rounded hover:bg-white hover:text-green-600 hover:border hover:border-green-600 duration-700">
              Add Note
            </button>
          </div>
        </div>
      </div>
    
    </>
  )
}