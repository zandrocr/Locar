//import router-dom
import { Link } from "react-router-dom";
import { useState } from 'react'
//imports img
import owner from '../svg/owner.png'
import car from '../svg/car.png'
import fine from '../svg/fine.png'
//import css
import Sytle from '../css/navbar.module.css'

function Navbar (){
//alterar o status do checkbox de checked para unchecked precionando .navbar
    const [check, setCheck] = useState(false)
    const handleChange = () => {
        setCheck(!check)
    }
    function unchecked(){
        if (clik == true) {
            clik = false
        }
    }
    return(
        <nav>
            <input type="checkbox" name="check" id="check" onChange={handleChange} />
            <label className={Sytle.menu} htmlFor="check">
                <div className={Sytle.menu_line}></div>
                <div className={Sytle.menu_line}></div>
                <div className={Sytle.menu_line}></div>
            </label>
            <div className={Sytle.nav}>
                <Link to='/' onClick={unchecked}>
                    <h2> Inova </h2>
                </Link>
                <nav className={Sytle.navbar} >
                    <Link to='/ownerpage' className="d-flex flex-column align-items-center" onClick={unchecked}>
                        <img className="img" src={owner} alt="donos"/>
                        <p>Donos</p>
                    </Link>
                    <Link to='/garage' className="d-flex flex-column align-items-center" onClick={unchecked}>
                        <img className="img" src={car} alt="garagem" />
                        <p>Garagem</p>
                    </Link>
                    <Link to='/fines' className="d-flex flex-column align-items-center" onClick={unchecked}>
                        <img className="img" src={fine} alt="multas" />
                        <p>Multas</p>
                    </Link>
                    <Link to='/driver' className="d-flex flex-column align-items-center" onClick={unchecked}>
                        <img className="img" src={fine} alt="Aluguel" />
                        <p>Aluguel</p>
                    </Link>
                </nav>
            </div>
        </nav>
    )
}
export default Navbar;
