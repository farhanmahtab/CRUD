import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitlesSm">React & Node</span>
            <span className="headerTitlesLg">Blog</span>
        </div>
        <img className="headerImage" 
        src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-768474.jpg&fm=jpg"
         alt="" />
      
    </div>
  )
}
