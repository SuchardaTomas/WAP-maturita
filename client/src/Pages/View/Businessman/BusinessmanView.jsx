import { Link, useParams, useNavigate } from "react-router-dom";
import { getBusinessmanById, deleteBusinessman } from "../../../Models/Businessman";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BusinessmanView() {
  const { id } = useParams();
  const [businessman, setBusinessman] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getBusinessmanById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setBusinessman(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === businessman.name) {
      const result = await deleteBusinessman(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong businessman name");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedbusinessman/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Businessman not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading businessman...</p>
      </>
    );
  }

  return (
    <>
      <h1>{businessman.name}</h1>

      <div className="card">
        <div className="card-content">
          <div className="content">
            <p>ID: {id}</p>
            <p>Company name: {businessman.company_name}</p>
            <p>money: {businessman.money}</p>
          </div>
        </div>
      </div>

      <form>
        <p className="subtitle">Napište jméno pro smazání businessmana</p> <br/>
        <input className="input" type="text" placeholder={businessman.name} onChange={handleChange} />
        <button className="button is-medium is-dark" onClick={handleDelete}>Delete businessman</button>
        <p>{info}</p>
      </form>

      <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey"/>
      </Link>
    </>
  );
}

