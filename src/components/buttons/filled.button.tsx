import { memo } from "react";
import { ButtonActions } from "../../utils/enum";

type FilledButtonProps = {
  className?: string;
  children: React.ReactNode;
  type?: ButtonActions;
  onClick?: () => void;
  disabled?: boolean;
};

const FilledButton: React.FC<FilledButtonProps> = (props) => {
  const {
    className = "",
    children,
    type = ButtonActions.BUTTON,
    onClick = () => {},
    disabled = false,
  } = props;
  return (
    <button
      type={type}
      onClick={() => onClick()}
      disabled={disabled}
      className={`text-sm font-bold font-primary rounded ease-in-out duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default memo(FilledButton);
