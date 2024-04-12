import { Link } from "react-router-dom";
import StudentLink from "./StudentLink";
import { useState, useEffect } from "react";
import { getAllStudents } from "../../../Models/Student";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function StudentList() {
  const [students, setStudents] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllStudents();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setStudents(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Students not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Students are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Student list</h1>

      {students.map((student, index) => (
        <StudentLink key={index} name={student.name} id={student._id} />
      ))}

      <Link to={"/student"}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey" />
      </Link>
    </>
  );
}
