import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export const UserList = () => {
  const [pet, setPets] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getPets").then((response) => {
      setPets(response.data);
    });
  }, []);

  return (
    <>
      <div className="cardContainer">
        {pet.map(({ _id, name, species, age }) => {
          return (
            <>
              <div className="cardPets">
                <p>Name:{name}</p>
                <p>Specie:{species}</p>
                <p>Age:{age}</p>
                <Link to={`/edituser/${_id}`}>Editar</Link>
                <Link to="/deleteuser">Borrar</Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
