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

const Project = () => {

    const [load, setLoad] = useState(false)
    const [post, setPost] = useState([])

    useEffect(() => {
        setTimeout(() => {
            api.get('/project')
            .then((response) => {
                setPost(response.data)
                setLoad(true)
            })
            .catch(() => {
              console.log('fail')
            })
        }, 600)
    }, [])

    function deletePost(id){
        api.delete(`/project/${id}`)
        setPost(post.filter(posts => posts.id !== id))
    }

    return (
    <div className="d-flex col-12 justify-content-center">
        <div className="col-10">
            <div className="d-flex flex-column">
                <h1 className="title">Garagem</h1>
                <Link to='/newproject'>
                    <button className="btn">Novo carro</button>
                </Link>
            </div>

            <div className="post d-flex flex-column align-items-center">
                {!load && <Loading />}
                {post.length > 0 &&
                    post.map((post, key) => {
                        return(
                            <div key={key} className="card col-11">
                                <h2>{post.modelo}</h2>
                                <div className="line"></div>
                                <div className="d-flex justify-content-around">
                                    <div className="col-5">
                                        <h4 className="title">Cor:</h4>
                                        <p className="input">{post.cor}</p>
                                        <h4 className="title">Ano:</h4>
                                        <p className="input">{post.ano}</p>
                                        <h4 className="title">Placa:</h4>
                                        <p className="input">{post.placa}</p>
                                    </div>
                                    <div className="col-5">
                                        <h4 className="title">Dono:</h4>
                                        <p className="input">{post.owner}</p>
                                        <h4 className="title">Situacao:</h4>
                                        <p className="input">{post.situation}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <Link to={{pathname: `/edit/${post.id}`}}>
                                        <button className="btn">Editar</button>
                                    </Link>
                                    <Link to={{pathname: `/more/${post.id}`}}>
                                        <button className="btn">Ler mais</button>
                                    </Link>
                                    <Button value={'Apagar'} onClick={() => deletePost(post.id)}/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div> );
}

export default Project;

