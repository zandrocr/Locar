//importe de componentes
import Navbar from "./components/Navbar"
//imports do css
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//router-dom imports
import { BrowserRouter, Route, Routes } from "react-router-dom"
//import pages
import Home from "./pages/Home"
import NewDono from "./components/OwnerNew"
import OwnerPage from "./pages/OwnerPage"
import EditOwner from "./components/OwnerEdit"
import CarNew from "./components/CarNew"
import Garage from "./pages/Garage"
import More from "./components/More"
import Edit from "./components/Edit"
import Fines from "./pages/Fines"
import FileNew from "./components/FilesNew"

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/newowner' element={<NewDono />} />
          <Route path="/ownerpage" element={<OwnerPage />} />
          <Route path='/editowner/:id' element={<EditOwner />} />
          <Route path="/newcar" element={<CarNew />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/more/:id" element={<More />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/fines" element={<Fines />} />
          <Route path="/finesnew" element={<FileNew />} />
        </Routes>
        <Navbar />
    </BrowserRouter>
    </div>
  )
}

export default App
