import { memo } from "react";

type MenuButtonProps = {
  title: string;
  icon?: string;
  className?: string;
  onClick: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({
  title,
  icon,
  onClick,
  className,
}) => {
  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-primary-50 text-xs text-primary-400 min-w-32 p-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div className="w-5">
        <span className={`fa ${icon}`}></span>
      </div>
      <span>{title}</span>
    </div>
  );
};

export default memo(MenuButton);
