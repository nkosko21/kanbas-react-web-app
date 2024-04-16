import Signin from "../../kanbas-node-server-app/Users/Signin";
import Profile from "../../kanbas-node-server-app/Users/Profile";
import { Routes, Route, Navigate } from "react-router-dom";

export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
