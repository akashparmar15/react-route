import { Outlet, Link } from "react-router-dom";
import '../App.css'
const Sidebar = () => {
  return (
    <>
      <nav className="mt-20">
        <ul>
          <li>
            <Link to="/"  className="nav" style={{color: "red"}}>Home</Link>
          </li>
          <li>
            <Link  className="nav" to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link className="nav" to="/contact">Contact</Link>
          </li>
          <li>
            <Link  className="nav" to="/nopage">No Pages</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Sidebar;