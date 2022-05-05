//import css
import '../css/service.css'
//import hook
import { useForm } from "react-hook-form";
//import back
import api from "./Api";
import { useParams } from 'react-router-dom';
//import react
import React, {useEffect, useState} from "react";

const Note = () => {

    const {id} = useParams()
    const {formState: {errors}} = useForm()
    const [note, setNote] = useState([])

    useEffect(() => {
        setTimeout(() => {
            api.get(`/project/${id}`)
            .then((response) => {
                setNote(response.data)
            })
            .catch(() => {
                console.log(errors)
            })
        })
    }, [])

    return (
        <div className='note d-flex justify-content-around'>
            <form className="formN col-12 d-flex flex-column justify-content-around ">
                <h3 className="title">{note.modelo}</h3>
                <div className="line"></div>
                <div className="d-flex justify-content-around align-items-center">
                    <div className="d-flex flex-column col-11">
                        <h4 className="title">Detalhes</h4>
                        <p autocomplete="off" className="input" type="text" name='describenote' placeholder='Digite a descrição da nota'>{note.describe}</p>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default Note;