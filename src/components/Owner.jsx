//react use
import React, { useState, useEffect } from "react";
//api consum
import api from "./Api";
//import css
import '../css/project.css'
import Button from "./Button";
import { Link } from "react-router-dom";

const Owner = () => {

  const [owner ,setOwner] = useState([])
  useEffect(() => {
    setTimeout(() => {
      api.get('/owner')
      .then((response) => {
        setOwner(response.data)
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

  return ( <div>
    {owner.map((owner, key) => {
      return(
        <div className="post col-12 d-flex justify-content-around" key={key}>
          <div className="card col-10">
              <h3 className="title">{owner.nome}</h3>
              <div className="line"></div>
              <div className="d-flex justify-content-around">
                <div className="col-5">
                  <label
                  className="title"
                  style={{fontSize:'20px'}}>
                    Nascimento
                  </label>
                  <div className="input">{owner.nascimento}</div>
                  <label
                  className="title"
                  style={{fontSize:'20px'}}>
                    CPF
                  </label>
                  <div className="input">{owner.cpf}</div>
                  <label
                  className="title"
                  style={{fontSize:'20px'}}>
                    RG
                  </label>
                  <div className="input">{owner.rg}</div>
                </div>
                <div className="col-5">
                <label
                  className="title"
                  style={{fontSize:'20px'}}>
                    CNH
                  </label>
                  <div className="input">{owner.cnh}</div>
                  <label
                  className="title"
                  style={{fontSize:'20px'}}>
                    Fone
                  </label>
                  <div className="input">{owner.telefone}</div>
                  <label
                  className="title"
                  style={{fontSize:'20px'}}>
                    Fone2
                  </label>
                  <div className="input">{owner.telefonetwo}</div>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                  <Link to={'/editowner'}>
                    <Button value={'Editar'}/>
                  </Link>
                  <Button value={'Apagar'} onClick={() => deleteOwner(owner.id)}/>
              </div>
          </div>
        </div>
      )
    })}
  </div> );
}

export default Owner;