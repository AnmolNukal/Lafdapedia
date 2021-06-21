import "./Sidebar.css"

export default function Sidebar() {
  
  const PF = "http://localhost:5000/images/newdp.jpg";
  
  return (
    <div className="sidebar">
     <div className="sidebarItem">
       <span className="sidebarTitle">ABOUT ME</span>
       <img className = "dp"src={PF} alt="" />
       <p>My First MERN application.</p>
     </div>
     <span className=" sidebarTitle ">FOLLOW US</span>
     <div className="sidebarSocial">
     
       <i class="sidebarIcon fab fa-facebook"></i>
       <i class="sidebarIcon fab fa-instagram"></i>
     </div>
    </div>
  )
}
