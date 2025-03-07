import React from "react"
import { Route,BrowserRouter,Routes} from "react-router"
import LandingPage from "../../Pages/LandingPage/LandingPage"
import Nav from "../Nav/nav"

const App:React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0f0f0f] via-[#181818] to-[#232323]  h-[100vh]">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
