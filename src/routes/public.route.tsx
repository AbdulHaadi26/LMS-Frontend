import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/register/register.page";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/register" />} />
    </Routes>
  );
};

export default PublicRoute;
