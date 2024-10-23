import { memo } from "react";

type ErrorTypoProps = {
  error: string;
};

const ErrorComponent: React.FC<ErrorTypoProps> = (props) => {
  const { error } = props;
  return (
    <div className="w-full p-1.5 px-4 mt-4 bg-red-100 text-white text-xs rounded shadow-sm">
      {error}
    </div>
  );
};

export default memo(ErrorComponent);
