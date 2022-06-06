//import css
import '../css/newproject.css'
import '../css/more.css'
//import api
import api from './Api';
import { Link, useParams } from 'react-router-dom';
//import react
import React, {useEffect, useState} from "react";
import Loading from './Loading';
import Note from './Detail';
import Button from './Button';

const OwnerMore = () => {
    const {id} = useParams()
    const [load, setLoad] = useState(false)
    const [owner, setowner] = useState([])

    useEffect(() => {
        setTimeout(() =>{
            api.get(`/owner/${id}`)
            .then((response) => {
                setowner(response.data)
                setLoad(true)
            })
        }, 600)
    }, [])

    function deleteOwner(id){
        api.delete(`/owner/${id}`)
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
                                <div className="d-sm-flex justify-content-around">
                                    <div className="col-sm-5">
                                        <h5 className="title">Nascimento</h5>
                                        <p className="input">{owner.nascimento}</p>
                                        <h5 className="title">CPF</h5>
                                        <p className="input">{owner.cpf}</p>
                                        <h5 className="title">RG</h5>
                                        <p className='input'>{owner.rg}</p>
                                    </div>
                                    <div className="col-sm-5">
                                        <h5 className="title">CNH</h5>
                                        <p className="input">{owner.cnh}</p>
                                        <h5 className="title">Telefone</h5>
                                        <p className="input">{owner.telefone}</p>
                                        <h5 className="title">Telefone2</h5>
                                        <p className="input">{owner.telefone}</p>
                                    </div>
                                </div>
                            <div className='d-flex justify-content-around'>
                                <Link to={'/ownerpage'}>
                                    <Button value={'Voltar'} />
                                </Link>
                                <Link to={{pathname: `/editowner/${owner.id}`}}>
                                    <Button value={'Editar'} />
                                </Link>
                                <Link to='/ownerpage'>
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

export default OwnerMore;
