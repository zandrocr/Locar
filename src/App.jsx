//importe de componentes
import Navbar from "./components/Navbar"
//imports do css
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//router-dom imports
import { BrowserRouter, Route, Routes } from "react-router-dom"
//import pages
import Home from "./pages/Home"
import OwnerPage from "./pages/OwnerPage"
import Newproject from "./pages/NewCar"
import Garage from "./pages/Garage"
import Edit from "./pages/Edit"
import More from "./pages/More"
import NewDono from "./components/NewOwner"
import EditOwner from "./pages/EditOwner"

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/ownerpage" element={<OwnerPage />} />
          <Route path="/newproject" element={<Newproject />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/more/:id" element={<More />} />
          <Route path='/newowner' element={<NewDono />} />
          <Route path='/editowner/:id' element={<EditOwner />} />
        </Routes>
        <Navbar />
    </BrowserRouter>
    </div>
  )
}

export default App
