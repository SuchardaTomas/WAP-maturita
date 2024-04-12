import { Link, useParams, useNavigate } from "react-router-dom";
import { getStudentById, deleteStudent } from "../../../Models/Student";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function StudentView() {
  const { id } = useParams();
  const [student, setStudent] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getStudentById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setStudent(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === student.name) {
      const result = await deleteStudent(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong student name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedstudent/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Student not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading student...</p>
      </>
    );
  }

  return (
    <>
      <h1>{student.name}</h1>

      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>ID: {id}</p>
            <p>isic: {student.isic}</p>
            <p>classroom: {student.classroom}</p>
          </div>
        </div>
      </div>

      <form>
        <p className="subtitle">Napište jméno pro smazání studenta</p> <br/>
        <input className="input" type="text" placeholder={student.name} onChange={handleChange} />
        <button className="button is-medium is-dark" onClick={handleDelete}>Delete student</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}

