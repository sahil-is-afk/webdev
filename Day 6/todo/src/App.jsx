import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Todo from "./pages/TodoApp";

function App(){
  return(
    <>
  <Link to={"/Login"}><button>Login</button></Link>    
  <Link to={"/Register"}><button>Register</button></Link>
  <Link to={"/TodoApp"}><button>To Do</button></Link>
  <Routes>
    <Route exact path="/Login" element={<Login />} />
    <Route exact path="/Register" element={<Register />} />
    <Route exact path="/TodoApp" element={<Todo />} />
  </Routes>
  </>
  );
};

export default App;