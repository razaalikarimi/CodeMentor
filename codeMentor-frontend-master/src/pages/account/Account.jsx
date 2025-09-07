import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./account.css";

const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <div className="account-container">
      {user && (
        <div className="profile-card">
          <h2 className="profile-title">Welcome, {user.name}!</h2>
          <p className="profile-quote">"Unlock your potential and aim for the stars. Your journey begins here!"</p>

          <div className="profile-content">
            <div className="profile-info">
              <div className="info-box">
                <p className="info-label">Name</p>
                <p className="info-text">{user.name}</p>
              </div>
              <div className="info-box">
                <p className="info-label">Email</p>
                <p className="info-text">{user.email}</p>
              </div>
            </div>

            <div className="cta-section">
              <h3 className="cta-title">Your Dashboard Awaits!</h3>
              <p className="cta-text">
                Explore courses, track your progress, and access exclusive content to elevate your skills and reach your goals.
              </p>
              <div className="button-container">
                <button onClick={() => navigate(`/${user._id}/dashboard`)} className="action-btn">
                  <MdDashboard />
                  Go to Dashboard
                </button>
                {user.role === "admin" && (
                  <button onClick={() => navigate(`/admin/dashboard`)} className="action-btn">
                    <MdDashboard />
                    Admin Dashboard
                  </button>
                )}
                <button onClick={logoutHandler} className="logout-btn">
                  <IoMdLogOut />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
