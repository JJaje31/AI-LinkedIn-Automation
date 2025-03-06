import React from "react"
import { Route,BrowserRouter,Routes} from "react-router"
import LandingPage from "../../Pages/LandingPage/LandingPage"

const App:React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
