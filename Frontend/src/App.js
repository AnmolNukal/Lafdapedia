import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single.jsx";
import Write from "./Pages/Write/Write.jsx";
import Settings from "./Pages/Settings/Settings.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import SinglePost from "./Components/singlePost/SinglePost.jsx";
import { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Context } from "./Context/Context.js";


function App() {
  
  const { user } = useContext(Context);

  return (
    <div className="app"><Router>
     <Navbar/>
     <Switch>
       <Route exact path="/"> <Home/> </Route>
       <Route path="/register"> {user ? <Home/> : <Register/>} </Route>
       <Route path="/login"> {user ? <Home/> : <Login/>} </Route>
       <Route path="/write"> {user ? <Write/> : <Login/>} </Route>
       <Route path="/settings">{user ?<Settings/> : <Register/>}  </Route>
       <Route path="/post/:postId"> <Single/> </Route>
       <Route path="/about"> <Sidebar/> </Route>
       <Route path="/singlePost"><SinglePost/></Route>
     </Switch>
  </Router>
  </div>
  );
}

export default App;
