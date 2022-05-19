import Button from "../components/Button";
import { Link } from "react-router-dom";

const Fines = () => {
  return (
    <div className="d-flex col-12 justify-content-center">
      <div className="col-10">
        <div className="d-flex flex-column">
          <h1 className="title">Multas</h1>
          <Link to='/finesnew'>
              <Button value='Nova Multa' />
          </Link>
        </div>
        <div className="line"></div>
        <div>

        </div>
      </div>
    </div>
   );
}

export default Fines;