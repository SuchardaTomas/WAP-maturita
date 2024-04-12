import { Link } from "react-router-dom";

export default function TeacherLink(props) {
  return (
    <>
      <div className="column">
        <div className="card custom-card">
          <div className="card-content">
            <p className="subtitle">{props.name}</p>
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <Link to={`/updateteacher/${props.id}`}>
                  <p>Update teacher</p>
                </Link>
              </span>
            </p>

            <p className="card-footer-item">
              <span>
                <Link to={`/teacher/${props.id}`}>
                  <p>View Teacher</p>
                </Link>
              </span>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
