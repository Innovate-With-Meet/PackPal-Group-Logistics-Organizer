import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove token
        localStorage.removeItem("userEmail"); // Remove email
        alert("You have been logged out."); // Optional alert
        navigate("/UserLogIn"); // Redirect to login page
    };

    return (
        <button onClick={handleLogout} style={styles.button}>
            Logout
        </button>
    );
};

const styles = {
    button: {
        padding: "10px 20px",
        backgroundColor: "#ff4d4d",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    }
};

