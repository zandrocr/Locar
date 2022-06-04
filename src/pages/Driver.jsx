//router dom
import { Link } from "react-router-dom";
//component
import api from '../components/Api'

//react use
import React, {useState, useEffect} from "react";
//import css
import '../css/project.css'
import Loading from "../components/Loading";
import Button from "../components/Button";

const Driver = () => {

    const [load, setLoad] = useState(false)
    const [driver, setDriver] = useState([])

    useEffect(() => {
        setTimeout(() => {
            api.get('/car')
            .then((response) => {
                setDriver(response.data)
                setLoad(true)
            })
            .catch(() => {
              console.log('fail')
            })
        }, 600)
    }, [])

    function deleteDriver(id){
        api.delete(`/car/${id}`)
        setDriver(driver.filter(drivers => drivers.id !== id))
    }
    return (
    <div className="d-flex col-12 flex-column align-items-center">
        <div className="col-10">
            <div className="d-flex flex-column">
                <h1 className="title">Motoristas</h1>
                <div>
                    <Link to='/drivernew'>
                        <button className="btn">Novo Motorista</button>
                    </Link>
                </div>
            </div>
            <div className="line"></div>
        <div className="post d-flex flex-column flex-sm-row flex-sm-wrap">
            {!load && <Loading />}
            {driver.map((driver, key) => {
                return(
                <div className="d-felx col-12 col-lg-6 justify-content-around" key={key}>
                    <div className="card">
                        <h3 className="title">{driver.modelo}</h3>
                        <div className="line"></div>
                        <div className="col-12 d-sm-flex justify-content-around">
                            <div className="col-sm-5">
                                <div>
                                    <h5 className="title"> Cor </h5>
                                    <div className="input">{driver.cor}</div>
                                </div>
                                <div>
                                    <h5 className="title"> Placa </h5>
                                    <div className="input">{driver.placa}</div>
                                </div>
                            </div>
                            {/**separação do conteudo */}
                            <div className="col-sm-5">
                                <div>
                                    <h5 className="title"> Situação </h5>
                                    <div className="input">{driver.situation}</div>
                                </div>
                                <div>
                                    <h5 className="title"> Dono </h5>
                                    <div className="input">{driver.owner}</div>
                                </div>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="d-flex align-items-center flex-sm-row d-sm-flex justify-content-around">
                            <Link to={{pathname: `/edit/${driver.id}`}}>
                                <Button value={'Editar'} />
                            </Link>
                            <Link to={{pathname: `/more/${driver.id}`}}>
                                <Button value={'Mais'} />
                            </Link>
                            <Button value={'Apagar'} onClick={() => deleteDriver(driver.id)}/>
                        </div>
                    </div>
                </div>
            )
            })}
            </div>
        </div>
    </div> );
}

export default Driver;

