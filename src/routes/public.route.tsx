import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/register/register.page";
import LoginPage from "../pages/login/login.page";
import { RouteNames } from "../utils/enum";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path={RouteNames.LOGIN} element={<LoginPage />} />
      <Route path={RouteNames.REGISTER} element={<RegisterPage />} />
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} />} />
    </Routes>
  );
};

export default PublicRoute;
