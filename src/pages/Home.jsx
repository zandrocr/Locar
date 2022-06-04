//import component
import { Link } from 'react-router-dom';
import Button from '../components/Button';
//import css
import '../css/home.css'
//import img
import newcar from '../svg/newcar.png'

const Home = () => {
    return (
        <div className="home col-12 d-flex justify-content-center">
            <div className='col-10'>
                <div className='d-flex col-12 flex-column align-items-center'>
                    <h1>Novo cadastro</h1>
                    <p>Adicione agora mesmo mais um carro a frota!</p>
                </div>
                <div className='projeto d-flex flex-column align-items-center'>
                    <div className='d-flex col-10 justify-content-between justify-content-sm-around'>
                        <Link to='/newcar'>
                            <Button type={'button'} value={'Novo carro'} />
                        </Link>
                        <Link to='/newowner'>
                            <Button value={'Novo Dono'} />
                        </Link>
                    </div>
                    <img className='col-12 col-sm-6 col-lg-5 col-xl-4' src={newcar} alt="plano" />
                </div>
            </div>
        </div>
     );
}

export default Home;