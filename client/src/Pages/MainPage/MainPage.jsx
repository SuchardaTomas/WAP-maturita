import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="card-container">
      <Link to={"/student"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Student</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/teacher"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Teacher</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/president"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>President</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/businessman"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Businessman</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
