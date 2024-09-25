import "./Card.css"
import { useNavigate } from "react-router-dom"
function Card({data}) {
    const {id, background, profileImage ,name, profession, description} = data   
    const navigate = useNavigate()
    return (
     
      <div className="container">
      <div className="child">
      <img className="banner" src={background} alt="" /><br />
      <img className="profileimg" src={profileImage} alt="" />
      <h1 className="name">{name}</h1>
      <h3 className="headline">{profession}</h3>
      <p className="description">{description}</p>
      <button className="view" onClick={() => navigate(`/profile/${id}`)}>View More</button>
    </div>
    </div>
    
  )
}

export default Card
