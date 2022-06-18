//import router-dom
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react'
//imports img
import owner from '../svg/owner.png'
import car from '../svg/car.png'
import fine from '../svg/fine.png'
import rent from '../svg/rent.png'
//import css
import Sytle from '../css/navbar.module.css'

const Navbar = () => {
//alterar o status do checkbox de checked para unchecked precionando .navbar
    let [modal, setModal] = useState(false)
//dunction close menu
    let modChange = () =>{
        setModal(!modal)
    }
    function onClose() {
        modChange.target.value == true ? modal = false : modal
    }

    return(
        <nav>
            <input type="checkbox" name="check" id="check" onChange={modChange} />
            <label className={Sytle.menu} htmlFor="check">
                <div className={Sytle.menu_line}></div>
                <div className={Sytle.menu_line}></div>
                <div className={Sytle.menu_line}></div>
            </label>
            <div className={Sytle.nav}>
                <Link to='/' onClick={onClose}>
                    <h2> Inova </h2>
                </Link>
                <nav className={`${Sytle.navbar} justify-content-around`} >
                    <Link to='/ownerpage' className="d-flex flex-column align-items-center" onClick={onClose}>
                        <img className="img" src={owner} alt="donos"/>
                        <p>Donos</p>
                    </Link>
                    <Link to='/garage' className="d-flex flex-column align-items-center" onClick={onClose}>
                        <img className="img" src={car} alt="garagem" />
                        <p>Garagem</p>
                    </Link>
                    <Link to='/rent' className="d-flex flex-column align-items-center" onClick={onClose}>
                        <img className="img" src={rent} alt="Aluguel" />
                        <p>Aluguel</p>
                    </Link>
                    <Link to='/fines' className="d-flex flex-column align-items-center" onClick={onClose}>
                        <img className="img" src={fine} alt="multas" />
                        <p>Multas</p>
                    </Link>
                </nav>
            </div>

        </nav>
    )
}
export default Navbar;
