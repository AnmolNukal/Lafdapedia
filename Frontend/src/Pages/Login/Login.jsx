import "./Login.css";
import { Link } from "react-router-dom";
import { useRef ,useContext} from "react";
import axios from "axios";
import { Context } from "../../Context/Context";

export default function Login() {
  
  const userRef = useRef();
  const passwordRef = useRef();
  const {  dispatch , isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post("/auth/login",{
        username : userRef.current.value,
        password : passwordRef.current.value,
      });
      dispatch({ type:"LOGIN_SUCCESS", payload : res.data});
    } 
    catch (error) {
      dispatch({type:"LOGIN_FAILURE"});
    }
    
  };
  
  return (
    <div className="login">
      
      <span className="loginTitle">Login</span>
      <form action="" className="loginForm" onSubmit={handleSubmit}>
        <label >Username</label>
        <input type="text" className="loginInput" ref = {userRef} placeholder="Enter your username..." />
        <label >Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password..." ref = {passwordRef} />
        <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
      </form>
      {/* <button className="loginRegisterButton">
        <Link className="link" to="/register">Register</Link>
      </button> */}
    </div>
  )
}
