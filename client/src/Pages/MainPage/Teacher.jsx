import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Teacher() {
  return (
    <>
      <Link to={"/createteacher"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Teacher create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/teachers"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Teacher list</p>
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
