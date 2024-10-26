import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { SystemState } from "../../redux/reducers/system.reducer";
import { RouteNames, TabNames } from "../../utils/enum";
import { ColContainer } from "../containers";
import SidebarItem from "./sidebar.item";

const Sidebar: React.FC = () => {
  const systemState: SystemState = useSelector(
    (state: RootState) => state.System
  );

  const { tab } = systemState;

  return (
    <ColContainer className="w-1/5 h-screen items-center py-4 overflow-y-auto shadow-lg bg-dark-200">
      <h1 className="text-2xl text-white font-bold font-primary mb-8">
        Pak Edu Matrix
      </h1>

      <SidebarItem
        title={TabNames.PROFILE}
        link={RouteNames.PROFILE}
        icon="fa-user"
        isActive={tab === TabNames.PROFILE}
      />

      <SidebarItem
        title={TabNames.EMPLOYEES}
        link={RouteNames.EMPLOYEES}
        icon="fa-users"
        isActive={tab === TabNames.EMPLOYEES}
      />

      <SidebarItem
        title={TabNames.INVOICES}
        link={RouteNames.INVOICES}
        icon="fa-book"
        isActive={tab === TabNames.INVOICES}
      />
    </ColContainer>
  );
};

export default memo(Sidebar);
