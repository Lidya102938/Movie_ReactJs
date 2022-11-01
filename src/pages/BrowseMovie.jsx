import Search from "../layouts/Search"
import Browse from "../layouts/Browse"

export default function BrowseMovie({ children }) {
  return (
    <>
      <Search />
      <Browse />
    </>
  )
}