import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

export const EditUser = () => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState(0);

  const params = useParams();
  const _id = params.iduser;
  useEffect(() => {
    Axios.post("http://localhost:3001/obtenerdata", { _id }).then((res) => {
      console.log(res.data[0]);
      const data = res.data[0];
      setName(data.name);
      setSpecies(data.species);
      setAge(data.age);
    });
  }, []);

  const updatepets = () => {
    const updatedata = {
      _id,
      name,
      species,
      age,
    };

    Axios.post("http://localhost:3001/userupdate", updatedata).then((res) => {
      alert(res);
    });
  };
  return (
    <>
      <h1>hola {_id}</h1>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={updatepets}>Update Information</button>
      </form>
    </>
  );
};
