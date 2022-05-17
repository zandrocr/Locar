//import router-dom
import { Link } from "react-router-dom";
//imports img
import company from '../svg/company.png'
import project from '../svg/project.png'
//import css
import '../css/navbar.css'

function Navbar (){
    return(
        <div className="nav d-flex flex-column">
            <Link to='/'>
                <h2>Inova</h2>
            </Link>
            <nav className="navbar d-none d-flex flex-column align-items-start">
                <Link to='/ownerpage' className="d-flex flex-column align-items-center">
                    <img className="img" src={company} alt="donos" />
                    <p>Donos</p>
                </Link>
                <Link to='/garage' className="d-flex flex-column align-items-center">
                    <img className="img" src={project} alt="garagem" />
                    <p>Garagem</p>
                </Link>
            </nav>
        </div>
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