//import router-dom
import { Link } from "react-router-dom";
import { useState } from 'react'
//imports img
import company from '../svg/company.png'
import project from '../svg/project.png'
//import css
import '../css/navbar.css'

function Navbar (){
//alterar o status do checkbox de checked para unchecked precionando .navbar
    const [check, setCheck] = useState(false)
    const handleChange = () => {
        setCheck(!check)
    }
    function unchecked(){
        if (check == true){
            check = false
        }
    }

    return(
        <nav>
            <input type="checkbox" name="check" id="check" onChange={handleChange} />
            <label className="menu" htmlFor="check">
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </label>
            <div className="nav" >
                <Link to='/' onClick={unchecked}>
                    <h2>Inova</h2>
                </Link>
                <nav className="navbar" >
                    <Link to='/ownerpage' className="d-flex flex-column align-items-center" onClick={unchecked}>
                        <img className="img" src={company} alt="donos"/>
                        <p>Donos</p>
                    </Link>
                    <Link to='/garage' className="d-flex flex-column align-items-center" onClick={unchecked}>
                        <img className="img" src={project} alt="garagem" />
                        <p>Garagem</p>
                    </Link>
                    <Link to='/fines' className="d-flex flex-column align-items-center" onClick={unchecked}>
                        <img className="img" src={project} alt="multas" />
                        <p>Multas</p>
                    </Link>
                </nav>
            </div>
        </nav>
    )
}
export default Navbar;

{/**
<div className="nav d-none d-sm-flex flex-column justify-content-start">
            <Link to='/'>
                <h2>Inova</h2>
            </Link>

            <nav className="navbar d-flex flex-column justify-content-start">
                <Link to='/ownerpage' className="link">
                    <img className="img" src={company} alt="donos" />
                </Link>
                    <p className="btn comp">Donos</p>
                <Link to='/garage' className="link1">
                    <img className="img" src={project} alt="garagem" />
                </Link>
                    <p className="btn proj">Garagem</p>
            </nav>
        </div>

*/}