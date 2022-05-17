//import component
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
//import css
import '../css/home.css'
//import img
import plano from '../svg/plano.png'

const Home = () => {
    return (
        <div className="home col-12 d-flex justify-content-center">
            <div className='col-10'>
                <div className='d-flex col-10 flex-column align-items-center'>
                    <h1>Cadastre um novo carro</h1>
                    <p>Adicione agora mesmo mais um carro a frota</p>
                </div>
                <div className='projeto d-flex flex-column align-items-center'>
                    <div className='d-flex col-10 justify-content-between justify-content-sm-around'>
                        <Link to='/newproject'>
                            <Button type={'button'} value={'Novo carro'} />
                        </Link>
                        <Link to='/newowner'>
                            <Button value={'Novo Dono'} />
                        </Link>
                    </div>
                    <img className='col-12 col-sm-7 col-lg-8 col-xl-5' src={plano} alt="plano" />
                </div>
            </div>
        </div>
     );
}

export default Home;