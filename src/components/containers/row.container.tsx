type RowContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const RowContainer: React.FC<RowContainerProps> = (props) => {
  const { className, children } = props;

  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default RowContainer;
