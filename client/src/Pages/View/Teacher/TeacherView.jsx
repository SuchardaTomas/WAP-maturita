import { Link, useParams, useNavigate } from "react-router-dom";
import { getTeacherById, deleteTeacher } from "../../Models/Teacher";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function TeacherView() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTeacherById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTeacher(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === teacher.name) {
      const result = await deleteTeacher(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong teacher name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedteacher/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Teacher not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading teacher...</p>
      </>
    );
  }

  return (
    <>
      <h1>{teacher.name}</h1>

      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>ID: {id}</p>
            <p>subject: {teacher.subject}</p>
            <p>age: {teacher.age}</p>
          </div>
        </div>
      </div>

      <form>
        <p className="subtitle">Napište jméno pro smazání učitele</p> <br/>
        <input className="input" type="text" placeholder={teacher.name} onChange={handleChange} />
        <button className="button is-medium is-dark" onClick={handleDelete}>Delete teacher</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}

