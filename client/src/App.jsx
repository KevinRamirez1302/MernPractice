import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [pet, setPets] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPets").then((response) => {
      setPets(response.data);
    });
  }, []);

  const createPet = () => {
    Axios.post("http://localhost:3001/createPets", {
      name,
      species,
      age,
    }).then((response) => {
      alert("User created");
    });
  };
  const deletePet = () => {
    Axios.post("http://localhost:3001/createPets", {
      id: pet._id,
    });
  };

  return (
    <>
      <div className="cardContainer">
        {pet.map(({ name, species, age }) => {
          return (
            <>
              <div className="cardPets">
                <p>Name:{name}</p>
                <p>Specie:{species}</p>
                <p>Age:{age}</p>
                <button onClick={deletePet}>Borrar</button>
              </div>
            </>
          );
        })}
      </div>

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
}

export default App;
