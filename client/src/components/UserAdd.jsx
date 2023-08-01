import { useState } from "react";
import Axios from "axios";

export const UserAdd = () => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState(0);

  const createPet = () => {
    Axios.post("http://localhost:3001/createPets", {
      name,
      species,
      age,
    }).then((response) => {
      console.log(response);
      alert("User created");
    });
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="species"
          onChange={(e) => setSpecies(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={createPet}>Send Information</button>
      </form>
    </>
  );
};
