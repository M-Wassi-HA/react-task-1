import {Routes , Route} from "react-router"
import Profile from "./pages/Profile"
import ProfileDetail from "./pages/ProfileDetail"
import Error from "./pages/Error" 

function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Profile/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile/:id" element={<ProfileDetail/>}/>
        <Route path="*" element={<Error/>}/>
        </Routes>
    </div>
  )
}

export default App
