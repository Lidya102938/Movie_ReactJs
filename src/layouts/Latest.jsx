import { useState, useEffect } from "react"
import axios from "axios"

import Card from "../components/Card"

export default function Latest() {
  const [datas, setDatas] = useState([])
  const apiKey = "3554211ccddedad28b58fe56cd457b08"
  console.log(datas)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`).then((el) => {
      setDatas(el.data.results)
    })
  }, [])

  return (
    <div className='flex space-x-16 pt-12 mx-12 mt-4'>
      {datas.slice(5, 9).map((el, u) => (
        <Card key={u} poster={el.poster_path} title={el.original_title} year={el.release_date.slice(5, 9)} />
      ))}
    </div>
  )
}