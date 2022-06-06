//import css
import '../css/newproject.css'
import '../css/more.css'
//import api
import api from './Api';
import { Link, useParams } from 'react-router-dom';
//import react
import React, {useEffect, useState} from "react";
import Loading from './Loading';
import Button from './Button';

const RentMore = () => {
    const {id} = useParams()
    const [load, setLoad] = useState(false)
    const [owner, setowner] = useState([])

    useEffect(() => {
        setTimeout(() =>{
            api.get(`/rent/${id}`)
            .then((response) => {
                setowner(response.data)
                setLoad(true)
            })
        }, 600)
    }, [])

    function deleteOwner(id){
        api.delete(`/rent/${id}`)
        setOwner(owner.filter(owner => owner.id !== id))
      }

    return (
        <div className="project d-flex justify-content-center">
            <div className="col-10">
                <h1 className='title'>Ler Mais</h1>
                <div>
                    <div className='more d-flex justify-content-around'>
                        <div className='form d-flex flex-column col-12'>
                            <div className='d-flex flex-column'>
                                {!load && <Loading />}
                                <h3 className="title" name='modelo'>{owner.nome}</h3>
                            </div>
                            <div className='line col-11'></div>
                                <div className="d-flex flex-column align-items-center">
                                    <div className='d-sm-flex col-12 justify-content-around'>
                                        <div className="col-sm-5">
                                            <h5 className="title">Nascimento</h5>
                                            <p className="input">{owner.nascimento}</p>
                                            <h5 className="title">CPF</h5>
                                            <p className="input">{owner.cpf}</p>
                                            <h5 className="title">RG</h5>
                                            <p className='input'>{owner.rg}</p>
                                            <h5 className="title">Km</h5>
                                            <p className='input'>{owner.km}</p>
                                        </div>
                                        <div className="col-sm-5">
                                            <h5 className="title">CNH</h5>
                                            <p className="input">{owner.cnh}</p>
                                            <h5 className="title">Telefone</h5>
                                            <p className="input">{owner.telefone}</p>
                                            <h5 className="title">Telefone2</h5>
                                            <p className="input">{owner.telefone}</p>
                                            <h5 className="title">Plana</h5>
                                            <p className="input">{owner.placa}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-11 align-items-center">
                                        <h5 className="title">Valor</h5>
                                        <p className="input">{owner.value}</p>
                                    </div>
                                </div>

                            <div className='d-flex flex-wrap justify-content-around'>
                                <Link to={'/rent'}>
                                    <Button value={'Voltar'} />
                                </Link>
                                <Link to={{pathname: `/rentedit/${owner.id}`}}>
                                    <Button value={'Editar'} />
                                </Link>
                                <Link to='/rent'>
                                    <Button value={'Apagar'} onClick={() => deleteOwner(owner.id)}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default RentMore;
