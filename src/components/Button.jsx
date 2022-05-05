import '../css/button.css'

const Button = ({type, value, onClick}) => {
    return ( <button className='btn text-center ' onClick={onClick} type={type}>{value}</button> );
}

export default Button;