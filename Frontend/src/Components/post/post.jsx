import "./post.css"
import { Link } from "react-router-dom";

export default function Post({post}) {
  
  const defaultImg = "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym94aW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";

  const PF = "http://localhost:5000/images/"
 
  return (
    <div className="post">
     <img className = "postImg" 
        src={ PF + post.photo}
        alt="" 
     />
    <div className="postInfo">
        <div className="postCats">
          {/* <span className="postCat">Insta</span>
          <span className="postCat">Facebook</span> */}
        </div>  
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
    </div>
    <p className="postDesc">{post.desc}</p>
    </div>
  )
}
