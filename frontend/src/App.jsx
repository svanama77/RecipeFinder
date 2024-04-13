import Home from "./pages/Home"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import Signup from "./pages/signUp"


function App() {
  

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
    </Routes>
    
  )
}

export default App
