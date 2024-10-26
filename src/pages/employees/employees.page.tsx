import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ColContainer } from "../../components/containers";
import { setSidebarTab } from "../../redux/actions/system.action";
import { TabNames } from "../../utils/enum";
import { DispatchType } from "../../utils/types";

const EmployeePage = () => {
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(setSidebarTab(TabNames.EMPLOYEES));
  }, [dispatch]);

  return (
    <ColContainer className="h-screen overflow-y-auto py-4 px-4">
      Employees
    </ColContainer>
  );
};

export default EmployeePage;
