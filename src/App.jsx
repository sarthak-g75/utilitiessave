import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/screens/Home";

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="flex flex-col pb-10">
      <Header />
      <Navbar home={location.pathname === "/"} />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
