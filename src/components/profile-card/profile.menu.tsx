import { Menu } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "../../redux/actions/auth.action";
import { RouteNames } from "../../utils/enum";
import { DispatchType } from "../../utils/types";
import MenuButton from "../buttons/menu.button";

type ProfileMenuProps = {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
};

const ProfileMenu: React.FC<ProfileMenuProps> = ({
  anchorEl,
  open,
  handleClose,
}) => {
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  const onClickProfile = () => {
    navigate(RouteNames.PROFILE);
    handleClose();
  };

  const onClickLogout = () => {
    dispatch(signOut());
    handleClose();
  };

  return (
    <Menu
      id="sidebar-profile-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuButton title="Profile" icon="fa fa-user" onClick={onClickProfile} />
      <MenuButton
        title="Logout"
        icon="fa fa-sign-out"
        onClick={onClickLogout}
      />
    </Menu>
  );
};

export default ProfileMenu;
