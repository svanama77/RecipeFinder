import Home from "./pages/Home"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import Signup from "./pages/signUp"
import Landing from "./pages/Landing"


function App() {
  

  return (
    <Routes>
      <Route  path="/" element={<Landing />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
    
  )
}

export default App
