import { UserData } from "../utils/constant/UserData"
import Card from "../components/common/card/Card"

function Profile() {
  return (
    
    <div className="parent">
     
        {UserData.map((item , index) => {
            return(
                <Card key={index} data={item} />
            )
        })}
    </div>
  )
}

export default Profile
