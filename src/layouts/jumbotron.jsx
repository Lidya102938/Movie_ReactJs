import { BsFillStarFill } from 'react-icons/bs';

const Jumbotron = () => {
  return (
    <div className="bg-black h-[500px] w-screen">
      <h1 className="text-3xl text-white flex justify-center pt-[100px] font-bold">Download YTS YIFY movies: HD smallest size</h1>
      <p className="text-white text-md w-[800px] m-auto pt-6 text-center">Welcome to the official YTS.MX (.LT) website. Here you can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.</p>
      <p className="text-blue-500 text-md mt-4 font-bold m-auto text-center"> IMPORTANT - YTS.MX is the only new official domain for YIFY Movies</p>

      <div className="flex mt-10 justify-center">
        <BsFillStarFill className="w-12 text-green-500 mt-2 " />
        <p className="text-white font-bold text-xl">Popular Downloads</p>

      </div>
      <p className="text-blue-500 text-xl flex justify-end mt-[-20px]">more featured...</p>

      <div className="border-[1px] mt-8 border-gray-500 border-t-solid mx-12"></div>
    </div>
  )
}

export default Jumbotron