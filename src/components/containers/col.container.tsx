type ColContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const ColContainer: React.FC<ColContainerProps> = (props) => {
  const { className, children } = props;

  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default ColContainer;
