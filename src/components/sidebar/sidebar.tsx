import { memo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { SystemState } from "../../redux/reducers/system.reducer";
import { RouteNames, TabNames } from "../../utils/enum";
import { ColContainer } from "../containers";
import ProfileCard from "../profile-card/profile.card";
import SidebarItem from "./sidebar.item";

const Sidebar: React.FC = () => {
  const systemState: SystemState = useSelector(
    (state: RootState) => state.System
  );

  const { tab } = systemState;

  return (
    <ColContainer className="w-1/5 px-2 h-screen items-center py-4 overflow-y-auto shadow-lg bg-primary-50">
      <ProfileCard />

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
