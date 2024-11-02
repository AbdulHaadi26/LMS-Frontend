import { Fragment } from "react/jsx-runtime";
import ColContainer from "./col.container";
import RowContainer from "./row.container";

type PopupContainerProps = {
  className?: string;
  children: React.ReactNode;
  onClose?: () => void;
  showCloseIcon?: boolean;
  title?: string;
};

const PopupContainer: React.FC<PopupContainerProps> = ({
  className = "",
  children,
  onClose,
  title,
  showCloseIcon,
}) => {
  return (
    <Fragment>
      <div
        className="w-screen h-screen fixed top-0 left-0 bg-black opacity-35"
        onClick={onClose}
      />
      <ColContainer
        className={`max-w-[90vw] max-h-[90vh] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg z-20 overflow-y-auto bg-white rounded-md ${className}`}
      >
        {(title || showCloseIcon) && (
          <RowContainer className="items-center border-b border-primary-200 pb-2 px-4 pt-2">
            {title && (
              <h1 className="text-xl font-bold font-primary-400 font-primary mr-2 my-0">
                {title}
              </h1>
            )}

            {showCloseIcon && (
              <span
                onClick={onClose}
                className="fa fa-times-circle text-2xl cursor-pointer text-primary-400 ml-auto"
              ></span>
            )}
          </RowContainer>
        )}

        {children}
      </ColContainer>
    </Fragment>
  );
};

export default PopupContainer;
