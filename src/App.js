import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AllCharacters from "./pages/AllCharacters/AllCharacters";
import Clans from "./pages/Clans/Clans";
import Kekkeigenkai from "./pages/Kekkeigenkai/Kekkeigenkai";
import Kara from "./pages/Kara/Kara";
import TailedBeasts from "./pages/TailedBeasts/TailedBeasts";
import Teams from "./pages/Teams/Teams";
import Villages from "./pages/Villages/Villages";
import Akatsuki from "./pages/Akatsuki/Akatsuki";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AllCharacters' element={<AllCharacters />} />
          <Route path='/Clans' element={<Clans />} />
          <Route path='/Kekkeigenkai' element={<Kekkeigenkai />} />
          <Route path='/Teams' element={<Teams />} />
          <Route path='/Kara' element={<Kara />} />
          <Route path='/TailedBeasts' element={<TailedBeasts />} />
          <Route path='/Villages' element={<Villages />} />
          <Route path='/Akatsuki' element={<Akatsuki />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
