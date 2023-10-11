import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Login from "./components/Login";
import Home from "./components/Home";

// import Register from "./components/Register";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  );
};
export default App;
