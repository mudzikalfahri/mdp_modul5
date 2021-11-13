import { NavLink, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { CgHome } from "react-icons/cg";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiSearch } from "react-icons/hi";
import { BsBookmark } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import Movie from "./movie";
import Profile from "./profile";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="containerhead">
          <HiMenuAlt2 className="menuicon" />
          <HiSearch className="menuicon" />
        </div>
      </header>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate replace to="/movie" />} />
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
        <footer>
          <div className="containernav">
            <NavLink to="/movie" className="iconwrapper">
              <CgHome className="icon" />
            </NavLink>
            <NavLink to="/none" className="iconwrapper">
              <CgMenuRound className="icon" />
            </NavLink>
            <NavLink to="/none" className="iconwrapper">
              <BsBookmark className="icon" />
            </NavLink>
            <NavLink to="/profile" className="iconwrapper">
              <MdOutlineAccountCircle className="icon" />
            </NavLink>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
