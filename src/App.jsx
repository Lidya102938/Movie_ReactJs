import './App.css'
import Home from "./layouts/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from "./layouts/Main.layout"
import BrowseMovie from "./pages/BrowseMovie"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="BrowseMovie" element={<BrowseMovie />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



