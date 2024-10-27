import React, { memo } from "react";

type LogoIconProps = {
  className?: string;
  iconClass?: string;
};

const LogoIcon: React.FC<LogoIconProps> = ({
  className = "",
  iconClass = "",
}) => {
  return (
    <div className={`w-fit rounded-xl bg-primary-400 ${className}`}>
      <span
        className={`fa fa-graduation-cap text-primary-50 ${iconClass}`}
      ></span>
    </div>
  );
};

export default memo(LogoIcon);
