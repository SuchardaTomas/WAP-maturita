import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function President() {
  return (
    <>
      <Link to={"/createpresident"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>President create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/presidents"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>President list</p>
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
