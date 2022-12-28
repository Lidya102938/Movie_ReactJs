export default function Pagination({setPage}) {
  return (

    <nav aria-label="Page navigation example" className="flex justify-center mt-10">
      <ul class="inline-flex -space-x-px">
        <li>
          <button onClick={(el)=>setPage(el-1)} class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-blue-200 rounded-l-lg border border-gray-300 hover:bg-blue-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-blue-700 dark:hover:text-white">Previous</button>
        </li>
        {[1,2,3,4,5].map(item=>{
      return(
        <li onClick={()=>setPage(item)}>
          <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{item}</a>
        </li>
      )})}
        <li>
          <button onClick={(el)=>setPage(el+1)} class="py-2 px-3 leading-tight text-gray-500 bg-blue-200 rounded-r-lg border border-gray-300 hover:bg-blue-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</button>
        </li>
      </ul>
    </nav>
  )
}
