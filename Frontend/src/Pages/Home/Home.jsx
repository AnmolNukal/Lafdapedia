import "./Home.css"
import Header from "../../Components/Header/Header";
import Posts from "../../Components/posts/Posts";
import axios from "axios"
import { useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search}= useLocation();

  useEffect(() => {
    const fetchPosts = async () =>{
      const res = await axios.get("/posts"+search)
      setPosts(res.data);
    }
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header/>
      <div className="home">
        <Posts posts={posts}/>
      </div>
    </>
  )
}
