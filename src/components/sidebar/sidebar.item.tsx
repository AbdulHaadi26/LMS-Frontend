import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames, TabNames } from "../../utils/enum";

type SidebarItemProps = {
  title: TabNames;
  icon: string;
  link: RouteNames;
  className?: string;
  isActive?: boolean;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  title,
  link,
  icon,
  className = "",
  isActive = false,
}) => {
  const navigate = useNavigate();
  const tabClass = isActive ? "bg-blue-600 shadow" : "";

  return (
    <div
      className={`w-full flex flex-row items-center cursor-pointer 
        px-4 py-2 rounded mb-2 ease-in-out duration-200
        ${tabClass} ${className}`}
      onClick={() => navigate(link)}
    >
      <span className={`text-white fa ${icon} mr-2`}></span>
      <span className={`text-sm font-bold text-white font-secondary`}>
        {title}
      </span>
    </div>
  );
};

export default memo(SidebarItem);
