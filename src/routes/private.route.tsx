import { Navigate, Route, Routes } from "react-router-dom";
import { FluidContainer, RowContainer } from "../components/containers";
import Sidebar from "../components/sidebar/sidebar";
import EmployeePage from "../pages/employees/employees.page";
import InvoicesPage from "../pages/invoices/invoices.page";
import ProfilePage from "../pages/profile/profile.page";
import { RouteNames } from "../utils/enum";

const PrivateRoute = () => {
  return (
    <FluidContainer>
      <RowContainer className="w-full h-screen">
        <Sidebar />
        <Routes>
          <Route path={RouteNames.PROFILE} element={<ProfilePage />} />
          <Route path={RouteNames.EMPLOYEES} element={<EmployeePage />} />
          <Route path={RouteNames.INVOICES} element={<InvoicesPage />} />
          <Route path="*" element={<Navigate to={RouteNames.INVOICES} />} />
        </Routes>
      </RowContainer>
    </FluidContainer>
  );
};

export default PrivateRoute;
