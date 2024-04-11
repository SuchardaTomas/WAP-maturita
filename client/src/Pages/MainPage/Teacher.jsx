import { Link } from "react-router-dom";

export default function Teacher() {
  return (
    <div className="card-container">

      <Link to={"/createcat"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Teacher create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/cats"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Teacher list</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
