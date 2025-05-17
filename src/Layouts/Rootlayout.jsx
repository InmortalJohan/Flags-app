import { Outlet } from "react-router-dom";

import logo from "../assets/techover-logo.png";
import icon from "../assets/moon.svg";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav className="navbar">
          <h1>The Flag App</h1>
          <img className="logo" src={logo} alt="Techover-Logo" />
          <div className="dark-mode">
            <img className="icon" src={icon} alt="Moon icon" />
            <button>Dark Mode</button>
          </div>
        </nav>
      </header>
      <main> 
          <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
