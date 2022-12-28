import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import CardSearch from "../components/CardSearch"

export default function Navbar() {

  const [datas, setDatas] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3554211ccddedad28b58fe56cd457b08&language=en-US&query=${search}&page=1&include_adult=false`).then((res) => {
      setDatas(res.data.results)
    })
  }, [search])
  return (
    <>
      <nav className='nav-bar bg-[gray] flex text-white justify-between py-3 w-100% px-8' >
        <div className='nav-brand w-3/12 width-50'>
          <img src="https://yts.do/static/assets/images/website/yify2.png" className="py-2 w-24"></img>
        </div>
        <div className='search-movie 3/12 flex items-center flex-col relative'>
          <input placeholder="Search...."
            className="border border-zinc-900 rounded-md w-[30vh] bg-black-700 h-8 text-black  p-2" onChange={(e) => setSearch(e.target.value)}>
          </input>
          {search.length > 0 &&
          <div className="absolute top-[45px] left-0 bg-white w-full max-h-[90vh] overflow-scroll gap-4 flex flex-col p-2">
            { datas.map(item => {
              return (
                <CardSearch poster={item.poster_path} title={item.original_title} year={item.release_date.slice(0,4)}/>
              )
            })}
          </div>
          }
        </div>
        <div className='nav w-6/12 flex space-x-2 justify-end mt-2'>
          <Link to="/">Home</Link>
          <a className='nav-link'>4K</a>
          <a className='nav-link'>Trending</a>
          <Link to="BrowseMovie">Browse Movies</Link>
          <a className='nav-link'>Login | Register</a>
        </div>
      </nav>
      <Outlet />
    </>
  )
}