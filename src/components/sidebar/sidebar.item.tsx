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
  const tabClass = isActive ? "bg-primary-400 shadow-lg" : "";
  const textClass = isActive ? "text-primary-50" : "text-primary-400";

  return (
    <div
      className={`w-full hover:bg-primary-100 flex flex-row items-center cursor-pointer px-4 py-2 rounded mb-2 ease-in-out duration-200 ${tabClass} ${className}`}
      onClick={() => navigate(link)}
    >
      <div className="w-8">
        <span className={`${textClass} fa ${icon}`}></span>
      </div>
      <span className={`flex-1 text-sm font-bold ${textClass} font-secondary`}>
        {title}
      </span>
    </div>
  );
};

export default memo(SidebarItem);
