//import css
import '../css/newproject.css'
import '../css/more.css'
//import api
import api from '../components/Api';
import { Link, useParams } from 'react-router-dom';
//import react
import React, {useEffect, useState} from "react";
import Loading from '../components/Loading';
import Note from '../components/Detail';
import Button from '../components/Button';

const More = () => {
    const {id} = useParams()
    const [load, setLoad] = useState(false)
    const [post, setPost] = useState([])

    useEffect(() => {
        setTimeout(() =>{
            api.get(`/project/${id}`)
            .then((response) => {
                setPost(response.data)
                setLoad(true)
            })
        }, 600)
    }, [])


    return (
        <div className="project d-flex justify-content-center">
            <div className="col-10">
                <h1 className='title'>Ler Mais</h1>

                <div>
                    <div className='more d-flex justify-content-around'>
                        <div className='form d-flex flex-column col-12'>
                            <div className='d-flex flex-column'>
                                {!load && <Loading />}
                                <h3 className="title" name='modelo'>{post.modelo}</h3>
                            </div>
                            <div className='line col-11'></div>
                                <div className="d-sm-flex justify-content-around">
                                    <div className="col-sm-5">
                                        <h4 className="title">Cor:</h4>
                                        <p className='input'>{post.cor}</p>
                                        <h4 className="title">Ano:</h4>
                                        <p className="input">{post.ano}</p>
                                        <h4 className="title">Placa:</h4>
                                        <p className="input">{post.placa}</p>
                                        <h4 className="title">Dono:</h4>
                                        <p className="input">{post.owner}</p>
                                    </div>
                                    <div className="col-sm-5">
                                        <h4 className="title">Renavam:</h4>
                                        <p className="input">{post.renavam}</p>
                                        <h4 className="title">Chassi:</h4>
                                        <p className="input">{post.chassi}</p>
                                        <h4 className="title">Situacao:</h4>
                                        <p className="input">{post.situation}</p>
                                    </div>
                                </div>
                            <div className='d-flex justify-content-around'>
                                <Link to={'/garage'}>
                                    <Button value={'Voltar'} />
                                </Link>
                                <Link to={{pathname: `/edit/${post.id}`}}>
                                    <Button value={'Editar'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Note />
                </div>
            </div>
        </div>
     );
}

export default More;
