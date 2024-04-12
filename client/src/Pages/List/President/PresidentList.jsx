import { Link } from "react-router-dom";
import PresidentLink from "./PresidentLink";
import { useState, useEffect } from "react";
import { getAllPresidents } from "../../../Models/President";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function PresidentList() {
  const [presidents, setPresidents] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllPresidents();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPresidents(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Presidents not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Presidents are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>President list</h1>

      {presidents.map((president, index) => (
        <PresidentLink key={index} name={president.name} id={president._id} />
      ))}

      <Link to={"/president"}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey" />
      </Link>
    </>
  );
}
