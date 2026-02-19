import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {

  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
