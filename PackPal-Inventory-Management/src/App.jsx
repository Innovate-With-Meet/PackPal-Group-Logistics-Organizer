import { UserLogin } from './Authentication/End-User/UserLogin'
import { UserRegistration } from './Authentication/End-User/UserRegistration'
import { Hero } from './Home/Hero'
import { Error } from './Error'
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Aboutus } from './Aboutus'
import { Navbar } from "./Layout/Navbar"
import { AdminRoutes } from "./AdminModule/AdminRoutes";
function App() {

  return (
    <>
      <Routes>
        <Route path="/UserRegistration" element={<UserRegistration />}></Route>
        <Route path="/UserLogin" element={<UserLogin />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/admin/*" element={<AdminRoutes />} />


        {/* <Route path="/Navbar" element={<Navbar />}></Route> */}

        <Route path="/" element={<Hero />}></Route>
        <Route path="*" element={<Error />}></Route>

      </Routes>

    </>
  )
}

export default App
