import { memo } from "react";

type LabelType = {
  label: string;
};

const LabelComponent: React.FC<LabelType> = (props) => {
  const { label } = props;
  return (
    <label
      className={`w-full text-xs font-bold font-primary text-primary-400 mb-1`}
    >
      {label}
    </label>
  );
};

export default memo(LabelComponent);
