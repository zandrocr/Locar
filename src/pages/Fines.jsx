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

  const [ load, setLoad ] = useState(false)
  const [ fine, setFine ] = useState([])

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
  <div className="d-flex col-12 justify-content-center">
      <div className="col-10">
          <div className="d-flex flex-column">
              <h1 className="title">Multas</h1>
              <Link to='/finesnew'>
                  <button className="btn">Nova multa</button>
              </Link>
          </div>
          <div className="line"></div>
          <div className="post d-flex flex-column align-items-center">
              {!load && <Loading />}
              {fine.length > 0 &&
                  fine.map((fine, key) => {
                      return(
                          <div key={key} className="card col-11">
                              <h2 className="title d-flex col-3 justify-content-around"><p className="title">Placa:</p>{fine.placa}</h2>
                              <div className="line"></div>
                              <div className="d-sm-flex justify-content-around">
                                  <div className="col-sm-5">
                                      <h4 className="title">Infrator:</h4>
                                      <p className="input">{fine.infrator}</p>
                                      <h4 className="title">AIT:</h4>
                                      <p className="input">{fine.ait}</p>
                                  </div>
                                  <div className="col-sm-5">
                                      <h4 className="title">Dono:</h4>
                                      <p className="input">{fine.owner}</p>
                                      <h4 className="title">Situacao:</h4>
                                      <p className="input">{fine.pay}</p>
                                  </div>
                              </div>
                              <div className="d-flex align-items-center flex-sm-row d-sm-flex justify-content-around">
                                  <Link to={{pathname: `/edit/${fine.id}`}}>
                                      <Button value={'Editar'} />
                                  </Link>
                                  <Link to={{pathname: `/more/${fine.id}`}}>
                                      <Button value={'Mais'} />
                                  </Link>
                                  <Button value={'Apagar'} onClick={() => deletePost(fine.id)}/>
                              </div>
                          </div>
                      )
                  })
              }
          </div>
      </div>
  </div> );
}

export default Fines;