import Pagination from "../components/Pagination"

export default function Search() {
  return (
    <div className="bg-black h-[270px]">
      <h1 className="text-white font-bold text-2xl ml-[300px] pt-10">Search Term:</h1>
      <div className="flex justify-center pt-2">
        <input type="text" className="bg-zinc-600 w-[700px] text-white"></input>
        <input type="button" value="Search" className="bg-green-500 py-2 px-4 rounded-md ml-4 text-white font-bold hover:bg-green-300"></input>
      </div>
      <Pagination />
    </div>
  )
}