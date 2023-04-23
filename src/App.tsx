import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'
import RoverListing from './pages/RoverListing';
import RoverDetail from "./pages/RoverDetail";
import Header from "./components/Header";

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<RoverListing />} />
      <Route path="/rover/:roverId" element={<RoverDetail />} />
    </Routes>
    </>
  )
}

export default App
