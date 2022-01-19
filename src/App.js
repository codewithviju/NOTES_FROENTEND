import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PrivateRoute from "./services/PrivateRoute";
function App() {
  return (
    <>
      
      <Routes>
        {/* All Private Routes Will Be Here */}
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Route>

        {/* All Public Routes Will Be Here */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
