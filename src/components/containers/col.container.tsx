type ColContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const ColContainer = (props: ColContainerProps) => {
  const { className, children } = props;

  return <div className={`flex flex-col ${className}`}>{children}</div>;
};

export default ColContainer;
