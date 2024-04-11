import { Link, useParams, useNavigate } from "react-router-dom";
import { getPresidentById, deletePresident } from "../../Models/President";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PresidentView() {
  const { id } = useParams();
  const [president, setPresident] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPresidentById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPresident(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === president.name) {
      const result = await deletePresident(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong president name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedpresident/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>President not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading president...</p>
      </>
    );
  }

  return (
    <>
      <h1>{president.name}</h1>

      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>ID: {id}</p>
            <p>age: {president.age}</p>
            <p>time in function: {president.time_in_function}</p>
            <p>charisma: {president.charisma}</p>
          </div>
        </div>
      </div>

      <form>
        <p className="subtitle">Napište jméno pro smazání prezidenta</p> <br/>
        <input className="input" type="text" placeholder={president.name} onChange={handleChange} />
        <button className="button is-medium is-dark" onClick={handleDelete}>Delete president</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}

