import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Businessman() {
  return (
    <>
      <Link to={"/createbusinessman"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Businessman create form</p>
            </div>
          </div>
        </div>
      </Link>

      <Link to={"/businessmen"}>
        <div className="card main-card">
          <div className="card-content">
            <div className="content">
              <p>Businessman list</p>
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
