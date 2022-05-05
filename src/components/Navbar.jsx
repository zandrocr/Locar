//import router-dom
import { Link } from "react-router-dom";
//imports img
import company from '../svg/company.png'
import project from '../svg/project.png'
import contact from '../svg/contact.png'
//import css
import '../css/navbar.css'

function Navbar (){
    return(
        <div className="nav d-flex flex-column justify-content-start">
            <Link to='/'>
                <h2>Inova</h2>
            </Link>

            <nav className="navbar d-flex flex-column">
                <Link to='/ownerpage' className="link">
                    <img className="img" src={company} alt="donos" />
                </Link>
                    <p className="btn comp">Donos</p>
                <Link to='/garage' className="link1">
                    <img className="img" src={project} alt="garagem" />
                </Link>
                    <p className="btn proj">Garagem</p>
                <Link to='/contact' className="link2">
                    <img className="img" src={contact} alt="contatos" />
                </Link>
                    <p className="btn cont">Contatos</p>
            </nav>
        </div>

    )
}

export default Navbar;