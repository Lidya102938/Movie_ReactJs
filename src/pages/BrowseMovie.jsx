import Search from "../layouts/Search"
import Browse from "../layouts/Browse"
import {useState} from "react"

export default function BrowseMovie({ children }) {
  const [page, setPage] = useState(1)
  return (
    <>
      <Search setPage={setPage} />
      <Browse page={page}/>
    </>
  )
}