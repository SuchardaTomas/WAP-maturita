import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="card-container">

      <Link to={"/createcat"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Cat create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/cats"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Cat list</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
