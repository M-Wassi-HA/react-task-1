import "./pages.css"
import "../index.css"
import { useParams } from "react-router-dom"
import { UserData } from "../utils/constant/UserData"
function ProfileDetail() {
  const {id} = useParams()
  const singleData = UserData.find((item) => {
    return item.id == id
  })  
  console.log(singleData);
  const {name , background , profileImage , fullDescription , profession , profileLink} = singleData
  return (
    <div>
      <img className="back" src={background} alt="" />
      <img className="face" src={profileImage} alt="" />
       <h1 className="heading1">{name}</h1>      
       <h3 className="heading2">{profession}</h3>
       <div className="limit"><h5 className="heading3">{fullDescription}</h5></div>
       <center>
       <h3 className="heading4">{profileLink}</h3>
       </center>
    </div>
  )
}

export default ProfileDetail

