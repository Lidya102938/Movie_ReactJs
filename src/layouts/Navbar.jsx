import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className='nav-bar bg-[gray] flex text-white justify-between py-3 w-100% px-8' >
        <div className='nav-brand w-3/12 width-50'>
          <img src="https://yts.do/static/assets/images/website/yify2.png" className="py-2 w-24"></img>
        </div>
        <div className='search-movie 3/12 flex items-center'>
          <input placeholder="Search...."
            className="border border-zinc-900 rounded-md w-[30vh] bg-black-700 h-8">
          </input>
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