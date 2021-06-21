import "./Navbar.css";
import { Context } from "../../Context/Context";  
import { Link } from "react-router-dom";
import { useContext } from "react";
export default function Navbar() {


  const { user ,dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleClick = () => {
    dispatch({ type:"LOGOUT" })
  }

  return (
    <div className="Navbar">
      <div className="topLeft">
       <i class="topIcon fas fa-lira-sign"> <span className="logoTitle"><Link className="link" to="/">Lafdapedia</Link> </span></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
          <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
          <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
          <li className="topListItem" onClick={handleClick}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link to="/settings">
              <img className="topImg" src={PF + user.profilePicture} alt="" />
            </Link>
          ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login"> LOGIN </Link>
            </li>
            {/* <li className="topListItem">
              <Link className="link" to="/register"> REGISTER </Link>
            </li> */}
          </ul>
          )
        }
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  )
}
