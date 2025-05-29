import logo from "../assets/techover-logo.png";
import icon from "../assets/moon.svg";
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Flag App</h1>
      <img className="logo" src={logo} alt="Techover-Logo" />
      <div className="dark-mode">
        <img className="icon" src={icon} alt="Moon icon" />
        <button>Dark Mode</button>
      </div>
    </nav>
  );
};

export default Navbar
