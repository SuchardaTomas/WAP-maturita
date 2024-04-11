import { Link } from "react-router-dom";
import CatLink from "./CatLink";
import { useState, useEffect } from "react";
import { getAllCats } from "../../Models/Cat";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function CatList() {
  const [cats, setCats] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCats();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCats(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Cats not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Cats are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Cat list</h1>

      {cats.map((cat, index) => (
        <CatLink key={index} name={cat.name} id={cat._id} />
      ))}

      <Link to={"/"}>
        <FontAwesomeIcon icon={faArrowLeft} size="3x" color="grey" />
      </Link>
    </>
  );
}
