import { Link } from "react-router-dom";

export default function CatLink(props) {
  return (
    <>
        <div className="card custom-card">
          <div className="card-content">
            <p className="subtitle">{props.name}</p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <Link to={"/updatecat"}>
                  <p>Update cat</p>
                </Link>
              </span>
            </p>

            <p className="card-footer-item">
              <span>
                <Link to={`/cat/${props.id}`}>
                  <p>View Cat</p>
                </Link>
              </span>
            </p>
          </footer>
        </div>
    </>
  );
}
