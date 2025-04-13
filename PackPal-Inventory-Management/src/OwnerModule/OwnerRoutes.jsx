// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import { AdminLanding } from "./AdminLanding";
// // import { ProfilePage } from "./Dashboard/ProfilePage";
// // import { useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { AllUsers } from "./ManageUsers/AllUsers";
// // import { AllEmpUsers } from "./ManageUsers/AllEmpUsers";
// // import { Categorymanage } from "./ManageCategorys/Categorymanage"
// // import { AdminAnalytics } from "./AdminAnalytics/AdminAnalytics";
// // export const AdminRoutes = () => {
// //     const navigate = useNavigate();
// //     useEffect(() => {
// //         const token = localStorage.getItem("authToken");
// //         if (!token) {
// //             navigate("/Login"); // Redirect to login if no token
// //         }
// //     }, [navigate]);
// //     return (
// //         <Routes>
// //             <Route path="/" element={<AdminLanding />} />
// //             <Route path="/profilePage" element={<ProfilePage />} />
// //             <Route path="/allusers" element={<AllUsers />} />
// //             <Route path="/categorymanage" element={<Categorymanage />} />
// //             <Route path="/adminanalytics" element={<AdminAnalytics />} />
// //             <Route path="/allempUsers" element={<AllEmpUsers />} />
// //             <Route path="/" element={<AdminLanding />} />

// //         </Routes>
// //     );
// // };

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { OwnerLandingPage } from "./OwnerLandingPage";
// import { OwnerProfilePage } from "./Dashboard/OwnerProfilePage";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// // import { AllUsers } from "./ManageUsers/AllUsers";
// // import { AllEmpUsers } from "./ManageUsers/AllEmpUsers";
// // import { Categorymanage } from "./ManageCategorys/Categorymanage";
// import { OwnerAnalytics } from "./OwnerAnalytics/OwnerAnalytics";
// export const OwnerRoutes = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Static token logic: Skip token validation for now
//         const token = "static-token"; // Static token for testing purposes
//         if (!token) {
//             navigate("/Login"); // Redirect to login if no token
//         }
//     }, [navigate]);

//     return (
//         <Routes>
//             <Route path="/owner/" element={<OwnerLandingPage />} />
//             <Route path="/ownerprofilePage" element={<OwnerProfilePage />} />
//             {/* <Route path="/allusers" element={<AllUsers />} /> */}
//             {/* <Route path="/categorymanage" element={<Categorymanage />} /> */}
//             <Route path="/Owneranalytics" element={<OwnerAnalytics />} />
//             {/* <Route path="/allempUsers" element={<AllEmpUsers />} /> */}
//             {/* <Route path="/" element={<AdminLanding />} /> */}
//         </Routes>
//     );
// };

import React from "react";
import { Routes, Route } from "react-router-dom";
import { OwnerLandingPage } from "./OwnerLandingPage";
import { OwnerProfilePage } from "./Dashboard/OwnerProfilePage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { OwnerAnalytics } from "./OwnerAnaytics/OwnerAnalytics";
import { NewOrder } from "./OrderCreate/NewOrder";
export const OwnerRoutes = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Static token logic: Skip token validation  nowfor
        const token = "static-token"; // Static token for testing purposes
        if (!token) {
            navigate("/login"); // Redirect to login if no token
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={<OwnerLandingPage />} />
            <Route path="/ownerprofilePage" element={<OwnerProfilePage />} />
            <Route path="/owneranalytics" element={<OwnerAnalytics />} />
            <Route path="/neworder" element={<NewOrder />} />

        </Routes>
    );
};