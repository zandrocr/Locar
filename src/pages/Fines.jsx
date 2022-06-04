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


const Fines = () => {

    const [load, setLoad] = useState(false)
    const [fine, setFine] = useState([])

    useEffect(() => {
        setTimeout(() => {
            api.get('/fine')
            .then((response) => {
                setFine(response.data)
                setLoad(true)
            })
            .catch(() => {
                console.log('fail')
            })
        }, 600)
    }, [])

  function deletePost(id){
      api.delete(`/fine/${id}`)
      setFine(fine.filter(fines => fines.id !== id))
  }

    return (
    <div className="d-flex justify-content-center">
        <div className="col-10 ">
            <div className="d-flex flex-column">
                <h1 className="title">Multas</h1>
                <div>
                    <Link to='/finesnew'>
                        <button className="btn">Nova multa</button>
                    </Link>
                </div>
            </div>
            <div className="line"></div>
            <div className="post d-flex flex-column flex-sm-row flex-sm-wrap">
                {!load && <Loading />}
                {fine.length > 0 && fine.map((fine, key) => {
                    return(
                        <div className="d-felx col-12 col-lg-4 justify-content-around" key={key}>
                            <div className="card">
                                <h3 className="title">{fine.infrator}</h3>
                                <div className="line"></div>
                                <div className="col-12 d-sm-flex justify-content-around">
                                    <div className="col-sm-5">
                                        <div>
                                            <h5 className="title"> Placa </h5>
                                            <div className="input">{fine.placa}</div>
                                        </div>
                                        <div>
                                        <h5 className="title"> Valor </h5>
                                            <div className="input">{fine.value}</div>
                                        </div>
                                    </div>
                                    {/**separação do conteudo */}
                                    <div className="col-sm-5">
                                        <div>
                                            <h5 className="title"> AIT </h5>
                                            <div className="input">{fine.situation}</div>
                                        </div>
                                        <div>
                                            <h5 className="title"> Situação </h5>
                                            <div className="input">{fine.pay}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="line"></div>
                                <div className="d-flex align-items-center flex-sm-row d-sm-flex justify-content-around">
                                    <Link to={{pathname: `/finesedit/${fine.id}`}}>
                                        <Button value={'Editar'} />
                                    </Link>
                                    <Link to={{pathname: `/finesmore/${fine.id}`}}>
                                        <Button value={'Mais'} />
                                    </Link>
                                    <Button value={'Apagar'} onClick={() => deletePost(fine.id)}/>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div> );
}

export default Fines;
