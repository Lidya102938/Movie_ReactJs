import '../App.css'
import MainLayout from "./Main.layout"
import Jumbotron from "./jumbotron"
import Latest from "./Latest"
import Popular from "./Popular"
import Footer from "./Footer"

export default function Home() {
  return (
    <>
      <Jumbotron />
      <Popular />
      <Latest />

    </>

  )
}