import Button from '../components/Button'
//router
import { Link } from "react-router-dom";
import Owner from '../components/Owner';


const OwnerPage = () => {

    return (
        <div className="d-flex col-12 justify-content-around">
            <div className="col-10">
                <h1 className="title">Donos</h1>
                <Link to='/newowner'>
                    <Button value={'Nova Dono'}/>
                </Link>
                <div className="line"></div>
                <Owner />
            </div>

        </div>
     );

}

export default OwnerPage;