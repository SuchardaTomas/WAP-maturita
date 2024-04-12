import { Link } from "react-router-dom";
import BusinessmanLink from "./BusinessmanLink";
import { useState, useEffect } from "react";
import { getAllBusinessmen } from "../../../Models/Businessman";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function BusinessmanList() {
  const [businessmen, setBusinessmen] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllBusinessmen();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setBusinessmen(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Businessmen not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Businessmen are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Businessmen list</h1>

      {businessmen.map((businessman, index) => (
        <BusinessmanLink key={index} name={businessman.name} id={businessman._id} />
      ))}

      <Link to={"/businessman"}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey" />
      </Link>
    </>
  );
}
