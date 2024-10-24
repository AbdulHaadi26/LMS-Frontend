import { memo } from "react";

type ErrorTypoProps = {
  error: string;
};

const ErrorComponent: React.FC<ErrorTypoProps> = (props) => {
  const { error } = props;
  return (
    <div className="text-xs font-semibold font-secondary mt-4 text-red-200">
      {error ?? ""}
    </div>
  );
};

export default memo(ErrorComponent);
