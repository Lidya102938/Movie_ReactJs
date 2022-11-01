import { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/Card"

export default function Popular() {
  const [datas, setDatas] = useState([])
  const apiKey = "3554211ccddedad28b58fe56cd457b08"
  console.log(datas)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`).then((el) => {
      setDatas(el.data.results)
    })
  }, [])

  return (
    <div className='flex space-x-16 mt-10 mx-12 '>
      {datas.slice(0, 4).map((data, i) => (
        <Card key={i} poster={data.poster_path} title={data.original_title} year={data.release_date.slice(0, 4)} />
      ))}
    </div>
  )
}