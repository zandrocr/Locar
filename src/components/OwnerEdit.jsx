//import css
import '../css/service.css'
import '../css/newproject.css'
//import hook
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
//import back
import { Link, useNavigate, useParams } from 'react-router-dom';
import Api from './Api';
//react use
import { useState, useEffect } from "react";
import { mask, unMask } from 'remask';

//menssgem de aviso de erro
const validationService = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório').max(40, 'Maximo de 20 caracteres.'),
    nascimento: yup.string().required('A data é obrigatória'),
    cpf: yup.string().required('O cpf é obrigatório').min(14, '(erro)Digite corretamente'),
    rg: yup.string().required('O rg é obrigatório').min(12, '(erro)Digite corretamente'),
    cnh: yup.string().required('A cnh é obrigatória').min(11, '(erro)Digite corretamente'),
    telefone: yup.string().required('O telefone é obrigatório').min(15, '(erro)Digite corretamente'),
    telefonetwo: yup.string().min(15, '(erro)Digite corretamente')
})

const EditOwner = () => {

    const {id} = useParams()
    let navigate = useNavigate()
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(validationService)
    })
    //comand edit
    const editOwner = data => Api.put(`/owner/${id}`, data)
    .then(() => {
        console.log('envio efetuado')
        navigate(`../ownermore/${id}`)
    })
    .catch(() => {
        console.log(errors)
    }, [])
    useEffect(() => {
      Api.get(`/owner/${id}`)
      .then((response) => {
        reset(response.data)
      })
    }, [])

//mascaras dos inputs (erro ao fazer a mascara condicionada)
    const [ value, setvalue ] = useState()
    const onChange = ev => {
        setvalue(mask(unMask(ev.target.value), ['999.999.999-99']))
    }
    const [ rg, setRg ] = useState()
    const onRg = ev => {
        setRg(mask(unMask(ev.target.value), ['99.999.999-S']))
    }
    const [ cnh, setCnh ] = useState()
    const onCnh = ev => {
        setCnh(mask(unMask(ev.target.value), ['99999999999']))
    }
    const [ tel, setTel ] = useState()
    const onTel = ev => {
        setTel(mask(unMask(ev.target.value), ['(99) 99999-9999']))
    }
    const [ telw, setTelw ] = useState()
    const onTelw = ev => {
        setTelw(mask(unMask(ev.target.value), ['(99) 99999-9999']))
    }

    return (
        <div className='project d-flex justify-content-around'>
            <div className='d-flex col-12 flex-column'>
                <div className='d-flex flex-column align-items-center justify-content-around'>
                    <div className='col-10'>
                    <h1 className="title">Editar Dono</h1>
                    <div className='line col-12'></div>
                    <form onSubmit={handleSubmit(editOwner)} className='form d-flex flex-column col-12 justify-content-around'>
                    <div className='d-flex justify-content-around'>
                    <div className='col-sm-5'>
                            <div className='d-flex flex-column bd-highlight'>
                                <label className="title">Nome</label>
                                <input
                                className='input'
                                autocomplete="off"
                                name={'nome'}
                                {...register('nome')}
                                placeholder={'Digite o nome'}/>
                                <p>{errors.nome?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">Nascimento</label>
                                <input
                                type={'date'}
                                className='input'
                                autocomplete="off"
                                name={'nascimento'}
                                {...register('nascimento')}
                                placeholder={'Digite o nascimento'}
                                />
                                <p>{errors.nascimento?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">CPF</label>
                                <input
                                className='input'
                                autocomplete="off"
                                name={'cpf'}
                                {...register('cpf')}
                                placeholder={'Digite o cpf'}
                                onChange={onChange}
                                value={value}
                                />
                                <p>{errors.cpf?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">RG</label>
                                <input
                                className='input'
                                autocomplete="off"
                                name={'rg'}
                                {...register('rg')}
                                placeholder={'Digite o rg'}
                                onChange={onRg}
                                value={rg}
                                />
                                <p>{errors.rg?.message}</p>
                            </div>
                        </div>

                        <div className='col-sm-5'>
                            <div className='d-flex flex-column'>
                                <label className="title">CNH</label>
                                <input
                                className='input'
                                name='cnh'
                                type={'text'}
                                autocomplete="off"
                                placeholder={'Digite a cnh'}
                                {...register("cnh")}
                                onChange={onCnh}
                                value={cnh}
                                />
                                <p>{errors.cnh?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">Telefone</label>
                                <input
                                name='telefone'
                                type='tel'
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite o telefone de contato'}
                                {...register('telefone')}
                                onChange={onTel}
                                value={tel}
                                />
                                <p>{errors.telefone?.message}</p>
                            </div>
                            <div className='d-flex flex-column'>
                                <label className="title">Telefone de recado</label>
                                <input
                                name='telefonetwo'
                                type='tel'
                                autocomplete="off"
                                className='input'
                                placeholder={'Digite um número para recado'}
                                {...register('telefonetwo')}
                                onChange={onTelw}
                                value={telw}
                                />
                                <p>{errors.telefonetwo?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <button className='btn'>Enviar</button>

                        <Link to={'/ownerpage'}>
                            <button type='button' className='btn'>Cancelar</button>
                        </Link>
                    </div>
                </form>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default EditOwner;