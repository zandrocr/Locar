//importe de componentes
import Navbar from "./components/Navbar"
//imports do css
import './css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//router-dom imports
import { BrowserRouter, Route, Routes } from "react-router-dom"
//import pages
import Home from "./pages/Home"
import Options from "./components/Options"
import NewDono from "./components/OwnerNew"
import OwnerPage from "./pages/OwnerPage"
import EditOwner from "./components/OwnerEdit"
import OwnerMore from "./components/OwnerMore"
import CarNew from "./components/CarNew"
import Garage from "./pages/Garage"
import More from "./components/More"
import Edit from "./components/Edit"
import Fines from "./pages/Fines"
import FinesNew from "./components/FinesNew"
import FinesEdit from "./components/FinesEdit"
import FinesMore from "./components/FinesMore"
import Rent from "./pages/Rent"
import RentNew from "./components/RentNew"
import RentEdit from "./components/RentEdit"
import RentMore from "./components/RentMore"


const App = () => {

  return (
	<div className="App">
		<BrowserRouter>
			<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path='/newowner' element={<NewDono />} />
			<Route path="/ownerpage" element={<OwnerPage />} />
			<Route path="/ownermore/:id" element={<OwnerMore />} />
			<Route path='/editowner/:id' element={<EditOwner />} />
			<Route path="/newcar" element={<CarNew />} />
			<Route path="/garage" element={<Garage />} />
			<Route path="/more/:id" element={<More />} />
			<Route path="/edit/:id" element={<Edit />} />
			<Route path="/fines" element={<Fines />} />
			<Route path="/finesnew" element={<FinesNew />} />
			<Route path="/finesedit/:id" element={<FinesEdit />} />
			<Route path="/finesmore/:id" element={<FinesMore />} />
			<Route path="/rent" element={<Rent />} />
			<Route path="/rentnew" element={<RentNew />} />
			<Route path="/rentedit/:id" element={<RentEdit />} />
			<Route path="/rentmore/:id" element={<RentMore />} />
			</Routes>
			<Navbar/>
			<Options />
		</BrowserRouter>
	</div>
  )
}

export default App
