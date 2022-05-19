//import css
import '../css/newproject.css'
//imports hook
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//import api
import api from './Api';
import { Link, useNavigate } from 'react-router-dom';
//react use
import { useState, useEffect } from "react";
import { mask, unMask } from 'remask';

//tipos de textos que aparecem quando os inputs não estão preenchido
const validationPost = yup.object().shape({
    modelo: yup.string().required('O modelo é obrigatório').min(20, 'Maximo de 20 caracteres.').min(3, 'Mínimo 3 caracteres'),
    cor: yup.string().required('A cor é obrigatória').max(20, 'Maximo de 30 caracteres.'),
    ano: yup.string().required('O ano é obrigatório').min(4, 'Digite corretamente'),
    placa: yup.string().required('A Placa é obrigatória').min(8, 'Digite corretamente'),
    owner: yup.string().required('Selecione o dono'),
    renavam: yup.string().required('O renavam é obrigatório').min(11, 'Digite corretamente'),
    chassi: yup.string().required('O chassi é obrigatório').min(17, 'Digite corretamente'),
    situation: yup.string().required('Selecione uma situação'),
    detalhes: yup.string().max(500, 'Maximo de 500 caracteres.')
})

const NewCar = () => {

    let navigate = useNavigate()
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationPost)
    })
    const addPost = data => api.post('/project/', data)
    .then(() => {
        console.log('envio efetuado')
        navigate('../garage')
    })
    .catch(() => {
        console.log(errors)
    }, [])

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

//mascaras dos inputs (erro ao fazer a mascara condicionada)
    const [ ano, setAno ] = useState([])
    const onAno = ev => {
        setAno(mask(unMask(ev.target.value), ['9999']))
    }
    const [ placa, setplaca ] = useState([])
    const onPlaca = ev => {
        setplaca(mask(unMask(ev.target.value), ['SSS-SSSS']))
    }
    const [ renavam, setrenavam ] = useState([])
    const onRenavam = ev => {
        setrenavam(mask(unMask(ev.target.value), ['99999999999']))
    }
    const [ chassi, setchassi ] = useState([])
    const onChassi = ev => {
        setchassi(mask(unMask(ev.target.value), ['99999999999999999']))
    }

    return (
        <div className="project d-flex justify-content-center">
            <div className="col-10">
                <h1 className='title'>Novo Carro</h1>
                    <div className='d-flex justify-content-center'>
                        <div className='line col-12'></div>
                    </div>

                <form onSubmit={handleSubmit(addPost)} className='form d-flex flex-column col-12 justify-content-around'>
                    <div className='d-sm-flex justify-content-around'>
                        <div className='col-sm-5'>
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
                                <label>Cor</label>
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
                                <label>Ano</label>
                                <input
                                name='ano'
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite o ano do carro'}
                                {...register('ano')}
                                onChange={onAno}
                                value={ano}
                                />
                                <p>{errors.ano?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label>Placa</label>
                                <input
                                name='placa'
                                type='text'
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite a placa do carro'}
                                {...register('placa')}
                                onChange={onPlaca}
                                value={placa}
                                />
                                <p>{errors.placa?.message}</p>
                            </div>
                        </div>

                        <div className='col-sm-5'>
                            <div className='d-flex flex-column' >
                                <label className='title'>Dono</label>
                                <select className='col-12 input' {...register('owner')}>
                                    <option disabled selected value="">Selecione o tipo</option>
                                    {owner.map((owner) => (
                                        <option >{owner.nome}</option>
                                    ))}
                                </select>
                                <p>{errors.owner?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label>Renavam</label>
                                <input
                                name='renavam'
                                type='number'
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite o renavam do carro'}
                                {...register('renavam')}
                                onChange={onRenavam}
                                value={renavam}
                                />
                                <p>{errors.renavam?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label>Chassi</label>
                                <input
                                name='chassi'
                                type='text'
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite o chassi do carro'}
                                {...register('chassi')}
                                onChange={onChassi}
                                value={chassi}
                                />
                                <p>{errors.chassi?.message}</p>
                            </div>
                            <div>
                                <label>Situação</label>
                                <select className='col-12 input' name='situation' {...register("situation")}>
                                    <option disabled selected value="">Selecione o tipo</option>
                                    <option value="disponivel">Disponível</option>
                                    <option value="indisponivel">Indisponivél</option>
                                </select>
                                <p>{errors.situation?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <label>Detalhes</label>
                        <textarea className='input col-11' name='detalhes' cols="10" rows="50"></textarea>
                        <p>{errors.detalhes?.message}</p>
                    </div>

                    <div className='d-flex justify-content-around'>
                        <button className='btn'>Enviar</button>

                        <Link to={'/'}>
                            <button type='button' className='btn'>Cancelar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default NewCar;