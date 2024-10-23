import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/register/register.page";
import LoginPage from "../pages/login/login.page";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/register" />} />
    </Routes>
  );
};

export default PublicRoute;
