type FormContainerProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
};

const FormContainer: React.FC<FormContainerProps> = (props) => {
  const { children, onSubmit, className = "" } = props;
  return (
    <form className={`${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormContainer;
