import { UserSignup } from './Authentication/End-User/UserSignup'
import { AdminSignup } from './Authentication/Admin/AdminSignup'
// import { AdminLogin } from './Authentication/Admin/AdminLogin'
import { EmployeeSignup } from './Authentication/Employee/EmployeeSignup'
// import { EmployeeLogin } from './Authentication/Employee/EmployeeLogin'

import { Hero } from './Home/Hero'
import { Login } from './Authentication/Common/Login';
import { Error } from './Error'
// import './App.css'
import { Route, Routes } from "react-router-dom";
import { Aboutus } from './Aboutus'
import { Navbar } from "./Layout//Navbar"
import { AdminRoutes } from "./AdminModule/AdminRoutes";
import { AdminLanding } from "./AdminModule/AdminLanding";
import { OwnerLandingPage } from "./OwnerModule/OwnerLandingPage";
import { OwnerRoutes } from "./OwnerModule/OwnerRoutes";
import { EmpLanding } from "./EmpModule/EmpLanding";
function App() {

  return (
    <>
      <Routes>
        <Route path="/UserSignup" element={<UserSignup />}></Route>

        <Route path="/AdminSignup" element={<AdminSignup />}></Route>
        {/* <Route path="/UserLogin" element={<AdminLogin />}></Route> */}

        <Route path="/EmployeeSignup" element={<EmployeeSignup />}></Route>
        {/* <Route path="/EmployeeLogin" element={<EmployeeLogin />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Aboutus" element={<Aboutus />}></Route>
        <Route path="/employee" element={<EmpLanding />} />
        <Route path="/admin" element={<AdminLanding />} />
        <Route path="/admin/*" element={<AdminRoutes />} />


        {/*  */}
        <Route path="/owner" element={<OwnerLandingPage />} />
        <Route path="/owner/*" element={<OwnerRoutes />} />
        {/* <Route path="/owner/*" element={<AdminRoutes />} /> */}
        {/*  */}


        {/* <Route path="/Navbar" element={<Navbar />}></Route> */}

        <Route path="/" element={<Hero />}></Route>
        <Route path="*" element={<Error />}></Route>

      </Routes>

    </>
  )
}

export default App
