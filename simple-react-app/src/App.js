import logo from './logo.svg';
import './App.css';
import Favorites from './pages/favorites';
import Home from './pages/home';
import Details from './pages/details'
import Navbar from "./components/navbar"
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <div>
     <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="/dog-details/:reference_image_id" element={<Details/>}/>
      </Routes>
     </div>
    </div>
  );
}

export default App;
