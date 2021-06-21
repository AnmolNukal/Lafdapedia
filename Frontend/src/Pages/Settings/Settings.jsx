import "./Settings.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { Context } from "../../Context/Context";  
import { useContext,useState } from "react";
import axios from "axios";

export default function Settings() {

  const defaultImg = "https://images.pexels.com/photos/5145180/pexels-photo-5145180.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  
  const PF = "http://localhost:5000/images/";
  const {user,dispatch} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePicture = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/"+user._id, updatedUser);
      setSuccess(true);
      dispatch({type:"UPDATE_SUCCESS",payload : res.data})
    } catch (err) {
      dispatch({type:"UPDATE_FAILURE"})
    }
  }; 
  
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingUpdateTitle">Update your Account </span>
          <span className="settingDeleteTitle">Delete your Account</span>
        </div>
        <form action="" className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={file ? URL.createObjectURL(file) : PF+user.profilePicture} alt="" />
            <label htmlFor="fileInput">
              <i className="settingPPIcon far fa-user"></i>
            </label>
            <input onChange={(e) => setFile(e.target.files[0])} type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text"placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)}/>
          <button className="settingSubmit" type="submit">Update</button>
          {success && (<span style= {{color: "green",textAlign:"center",marginTop:"20px"}} >Profile has been updated</span>)}
        </form>
      </div>
      <Sidebar/> 
    </div>
  )
}
