export default function Layout({ children }) {
  return (
    <div className="bg-[gray]">
      <div className='flex justify-between mx-24 mt-[30px]'>
        <p className='text-white text-2xl font-bold pt-[35px]'>Latest YIFY Movies Torrents</p>
        <p className='text-gray-1000 text-xl pt-[35px] hover:text-white'>Browse All</p>
      </div>
      {children}

      <div className="border-[1px] mt-8 border-white border-t-solid"></div>
    </div>
  )
}