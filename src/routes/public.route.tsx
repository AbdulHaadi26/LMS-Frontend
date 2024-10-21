import { Route, Routes } from "react-router-dom";
import RegisterPage from "../pages/register.page";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default PublicRoute;
