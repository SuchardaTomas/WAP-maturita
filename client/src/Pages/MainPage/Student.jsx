import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Student() {
  return (
    <>
      <Link to={"/createstudent"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Student create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/students"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Student list</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/"}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey" />
      </Link>
    </>
  );
}
