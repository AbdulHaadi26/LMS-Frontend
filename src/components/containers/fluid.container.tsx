type FluidContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const FluidContainer = (props: FluidContainerProps) => {
  const { className, children } = props;

  return (
    <div
      className={`w-screen h-screen overflow-y-auto flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

export default FluidContainer;
