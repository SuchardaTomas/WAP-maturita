import { Link, useParams } from "react-router-dom";

export default function createdCat() {
  const { id } = useParams();

  return (
    <>
      <p>Cat was created: {id}</p>
      <Link to={`/cat/${id}`}>
        <p>View cat</p>
      </Link>
      <Link to={`/`}>
        <p>Go home</p>
      </Link>
    </>
  );
}
