import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export const EditUser = () => {
  const params = useParams();
  const [pet, setPets] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/EditUser").then((response) => {
      setPets(response.data);
    });
  }, []);

  return (
    <>
      <h1>hola {params.iduser}</h1>
    </>
  );
};
