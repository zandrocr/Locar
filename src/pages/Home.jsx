//import component
import { Link } from 'react-router-dom';
import Button from '../components/Button';
//import css
import '../css/home.css'
//import img
import plano from '../svg/plano.png'

const Home = () => {
    return (
        <div className="home d-flex justify-content-center">
            <div>
                <h1>Cadastre um novo carro</h1>
                <p>Adicione agora mesmo mais um carro a frota</p>
                <div className='projeto d-flex flex-column'>
                    <Link to='/newproject'>
                        <Button type={'button'} value={'Novo carro'} />
                    </Link>

                    <Link to='/ownerpage'></Link>

                    <img src={plano} alt="plano" />
                </div>
            </div>
        </div>
     );
}

export default Home;