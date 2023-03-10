import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import AccountNav from "../components/AccountNav";
import { UserContext } from "../context/userContext";
import Cookies from "js-cookie";

const ProfilePage = () => {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setuser } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("https://bookit-wrul.onrender.com/logout", { withCredentials: true });
    Cookies.remove("token");
    setuser(null);
    setRedirect("/");
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className="p-4 h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
};

export default ProfilePage;
