import "./Header.css"

export default function Header() {
  return (
    <div className="Header">
      <div className="headerTitles">
        
        <span className="headerTitleLg">LafdaPedia</span>
        <span className="headerTitleSm">Documenting e-lafdas since 2021</span>
      </div>
      <img className = "headerImg" src="https://images.pexels.com/photos/4761587/pexels-photo-4761587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
    </div>
  )
}
