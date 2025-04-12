import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLanding } from "./AdminLanding";
import { ProfilePage } from "./Dashboard/ProfilePage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AllUsers } from "./ManageUsers/AllUsers";
import { AllEmpUsers } from "./ManageUsers/AllEmpUsers";
export const AdminRoutes = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            navigate("/AdminLogIn"); // Redirect to login if no token
        }
    }, [navigate]);
    return (
        <Routes>
            <Route path="/" element={<AdminLanding />} />
            <Route path="/profilePage" element={<ProfilePage />} />
            <Route path="/allusers" element={<AllUsers />} />
            <Route path="/allempUsers" element={<AllEmpUsers />} />
            <Route path="/" element={<AdminLanding />} />

        </Routes>
    );
};

