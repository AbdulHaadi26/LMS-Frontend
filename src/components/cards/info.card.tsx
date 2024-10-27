import { memo } from "react";
import { ColContainer } from "../containers";

type InfoCardProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <ColContainer
      className={`flex-1 items-center p-4 bg-primary-400 hover:scale-105 ease-in-out duration-500 rounded-md shadow-xl ${className}`}
    >
      <span
        className={`fa ${icon} fa-2x text-primary-400 p-4 rounded-full ease-in-out duration-500 bg-primary-50 shadow-xl`}
      ></span>
      <h1 className="w-full text-sm font-black text-primary-50 mt-4 text-center">
        {title}
      </h1>
      <p className="w-full text-xs font-medium text-primary-50 mt-2 text-center">
        {description}
      </p>
    </ColContainer>
  );
};

export default memo(InfoCard);
