import "./Single.css"
import Sidebar from "../../Components/Sidebar/Sidebar"
import SinglePost from "../../Components/singlePost/SinglePost"

export default function Single() {
  return (
    <div className="single">
       <SinglePost/>
      <Sidebar/>
    </div>
  )
}
