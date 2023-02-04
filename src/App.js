import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
// import Destinations from './Components/Destinations';
import Crew from './Components/Crew';
import Technologies from './Components/Technologies';
import Destinations from './Components/Destinations';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/destinations/" element={<Destinations/>}/>
            <Route path="/crew" element={<Crew/>}/>
            <Route path="/technologies" element={<Technologies/>}/>
          </Routes>
        </Router>
  );
}

export default App;
