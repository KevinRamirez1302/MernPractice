import "./App.css";
import { UserList } from "./components/UserList";
import { UserAdd } from "./components/UserAdd";
import { EditUser } from "./components/Edituser";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <a href="/Userlist">See UserList</a>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserAdd />} />
          <Route path="/Userlist" element={<UserList />} />
          <Route path="/edituser/:iduser" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
