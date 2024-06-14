import './App.css';
import Favourites from './pages/favourites';
import Home from './pages/home';
import Details from './pages/details'
import Navbar from "./components/navbar"
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
     <div className="min-h-screen px-5 bg-white text-yellow-500 text-lg">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/dog-details/:reference_image_id" element={<Details/>}/>
      </Routes>
     </div>
    </div>
  );
}

export default App;
