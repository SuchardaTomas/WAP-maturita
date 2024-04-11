import { Link } from "react-router-dom";

export default function President() {
  return (
    <div className="card-container">

      <Link to={"/createcat"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>President create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/cats"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>President list</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
