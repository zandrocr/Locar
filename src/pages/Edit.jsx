//import css
import '../css/newproject.css'
//imports hook
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//import api
import api from '../components/Api';
import { Link, useNavigate, useParams } from 'react-router-dom';
//react use
import { useState, useEffect } from "react";

//tipos de textos que aparecem quando os inputs não estão preenchido
const validationPost = yup.object().shape({
    modelo: yup.string().uppercase().required('O modelo é obrigatório').max(20, 'Maximo de 20 caracteres.').min(3, 'Pelo menos 3 caracteres'),
    cor: yup.string().required('A cor é obrigatória').max(20, 'Maximo de 30 caracteres.').min(3, 'Pelo menos 3 caracteres'),
    ano: yup.string().required('O ano é obrigatório').max(4),
    placa: yup.string().required('A Placa é obrigatória').max(8).min(8, 'Placa errada'),
    dono: yup.string().required('O Dono é obrigatório').max(60, 'Maximo de 60 caracteres.'),
    renavam: yup.string().required('O renavam é obrigatório').max(17),
    chassi: yup.string().required('O chassi é obrigatório').max(17),
    situation: yup.string().required('Selecione uma situação'),
    detalhes: yup.string().max(500, 'Maximo de 500 caracteres.')
})

const Edit = () => {

    const {id} = useParams()
    let navigate = useNavigate()
    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(validationPost)
    })
    const editPost = (data) => api.put(`/project/${id}`, data)
    .then(() => {
        console.log('ok')
        navigate(`../more/${id}`)
    })
    .catch(() => {
        console.log(errors)
    })
    useEffect(() => {
        setTimeout(() => {
            api.get(`/project/${id}`)
            .then((response) => {
                reset(response.data)
            })
        })
    }, [])
{/***/}
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
        })
    }, [])

    return (
        <div className="project d-flex justify-content-center">
            <div className="col-10">
                <h1 className='title'>Editar</h1>
                <div className='line col-12'></div>
                <form onSubmit={handleSubmit(editPost)} className='form d-flex flex-column justify-content-around'>
                <div className='d-flex justify-content-around'>
                        <div className='col-5'>
                            <div className='d-flex flex-column bd-highlight'>
                                <label className='title'>Modelo</label>
                                <input
                                className='input'
                                autocomplete="off"
                                name={'modelo'}
                                {...register('modelo')}
                                placeholder={'Digite o modelo do carro'}/>
                                <p>{errors.modelo?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className='title'>Cor</label>
                                <input
                                name='cor'
                                type={'text'}
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite a cor do carro'}
                                {...register('cor')} />
                                <p>{errors.cor?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className='title'>Ano</label>
                                <input
                                name='ano'
                                type='number'
                                min={1000}
                                max={3000}
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite o ano do carro'}
                                {...register('ano')}
                                maxlength="4" step="0.01"/>
                                <p>{errors.ano?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className='title'>Placa</label>
                                <input
                                name='placa'
                                type='text'
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite a placa do carro'}
                                {...register('placa')}/>
                                <p>{errors.placa?.message}</p>
                            </div>
                        </div>
{/**  */}
                        <div className='col-5'>
                            <div className='d-flex flex-column'>
                                <label className='title'>Dono</label>
                                <select  className='input' {...register('owner')}>
                                    <option disabled selected value="">Selecione o dono</option>
                                    {owner.map((owner) => (
                                        <option key={owner.id}>{owner.nome}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className='title'>Renavam</label>
                                <input
                                name='renavam'
                                type='number'
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite o renavam do carro'}
                                {...register('renavam')}/>
                                <p>{errors.renavam?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className='title'>Chassi</label>
                                <input
                                name='chassi'
                                type='text'
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite o chassi do carro'}
                                {...register('chassi')}
                                />
                                <p>{errors.chassi?.message}</p>
                            </div>
                            <div>
                                <label className='title'>Situação</label>
                                <select className='col-12 input' name='situation' {...register("situation")} required>
                                    <option disabled selected value="">Selecione o tipo</option>
                                    <option value="disponivel">Disponível</option>
                                    <option value="indisponivel">Indisponivél</option>
                                </select>
                                <p>{errors.situation?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <label className='title'>Referencia</label>
                        <textarea {...register("detalhes")} className='input col-11' name='detalhes' cols="10" rows="50"></textarea>
                        <p>{errors.detalhes?.message}</p>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <button className='btn'>Enviar</button>

                        <Link to={'/garage/'}>
                            <button type='button' className='btn'>Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default Edit;