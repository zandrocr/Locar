import React, { useState, useEffect } from "react";
//api consum
import api from "./Api";
//import css
import '../css/project.css'
import Button from "./Button";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Owner = () => {

  const [load, setLoad] = useState(false)
  const [owner ,setOwner] = useState([])
  useEffect(() => {
    setTimeout(() => {
      api.get('/owner')
      .then((response) => {
        setOwner(response.data)
        setLoad(true)
      })
      .catch(() => {
        console.log('fail')
      })
    }, 600)
  }, [])

  function deleteOwner(id){
    api.delete(`/owner/${id}`)
    setOwner(owner.filter(owner => owner.id !== id))
  }
    return (
        <div className="post d-flex flex-column flex-sm-row flex-sm-wrap">
            {!load && <Loading />}
            {owner.map((owner, key) => {
                return(
                <div className="d-felx col-12 col-lg-4 justify-content-around" key={key}>
                    <div className="card">
                        <h3 className="title">{owner.nome}</h3>
                        <div className="line"></div>
                        <div className="col-12 d-flex flex-column justify-content-around">
                            <div>
                                <h5 className="title"> Fone </h5>
                                <div className="input">{owner.telefone}</div>
                            </div>
                            <div>
                                <h5 className="title"> Fone2 </h5>
                                <div className="input">{owner.telefonetwo}</div>
                            </div>
                        </div>

                        <div className="line"></div>

                        <div className="d-flex justify-content-around">
                            <Link to={{pathname: `/editowner/${owner.id}`}}>
                                <Button value={'Editar'}/>
                            </Link>
                            <Link to={{pathname: `/ownermore/${owner.id}`}}>
                                <Button value={'Mais'}/>
                            </Link>
                            <Button value={'Apagar'} onClick={() => deleteOwner(owner.id)}/>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    );
}

export default Owner;