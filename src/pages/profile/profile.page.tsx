import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ColContainer } from "../../components/containers";
import { setSidebarTab } from "../../redux/actions/system.action";
import { TabNames } from "../../utils/enum";
import { DispatchType } from "../../utils/types";

const ProfilePage = () => {
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(setSidebarTab(TabNames.PROFILE));
  }, [dispatch]);

  return (
    <ColContainer className="h-screen overflow-y-auto py-4 px-4">
      Profile
    </ColContainer>
  );
};

export default ProfilePage;
