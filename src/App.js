import {BrowserRouter,Routes ,Route} from "react-router-dom"
import Layout from "./Layout"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import Footer from "./Footer"
import Useeffect from "./Useeffect"
import Reduce from "./Reduce"
import Usestatewithcallback from "./Usestatewithcallback"
export default function App() 
{
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="About" element={<About/>}/>  
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Footer" element={<Footer/>}/>
          <Route path="Useeffect" element={<Useeffect/>}/>
          <Route path="Reduce" element={<Reduce />}/>
          <Route path="UseStateWithCallback/*" element={<Usestatewithcallback />}/>
        </Route>
      </Routes>
    </BrowserRouter>
   )
}
