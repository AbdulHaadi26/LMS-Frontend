import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { ProfileState } from "../../redux/reducers/profile.reducer";
import { ColContainer, RowContainer } from "../containers";
import ImageComponent from "../image/image.component";
import ProfileMenu from "./profile.menu";

const ProfileCard: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const profileState: ProfileState = useSelector(
    (state: RootState) => state.Profile
  );

  const { profile } = profileState;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ColContainer className="w-full px-2">
      <RowContainer className="w-full border-b-2 border-primary-100 mb-4 pb-4">
        <ImageComponent
          src="https://picsum.photos/200"
          className="rounded-full object-cover w-10 h-10"
        />
        <ColContainer className="flex-1 ml-4 mt-2">
          {profile?.name ? (
            <h1 className="w-fit text-primary-400 text-xs font-bold">
              {profile?.name ?? "John Doe"}
            </h1>
          ) : (
            <h1 className="w-fit text-blue-400 text-xs font-bold underline cursor-pointer">
              Set Name
            </h1>
          )}
          <h2 className="w-fit capitalize text-xs font-bold text-primary-200">
            {profile?.type}
          </h2>
        </ColContainer>
        <span
          className="fa fa-chevron-down cursor-pointer text-primary-400 mt-2"
          onClick={handleClick}
        ></span>
      </RowContainer>
      <ProfileMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        handleClose={handleClose}
      />
    </ColContainer>
  );
};

export default ProfileCard;
