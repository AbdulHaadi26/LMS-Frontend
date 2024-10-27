import { ColContainer, RowContainer } from "../../components/containers";
import RegisterDescription from "./register.description";
import RegisterForm from "./register.form";

const RegisterPage: React.FC = () => {
  return (
    <RowContainer className="w-full md:h-full h-auto flex-row flex-wrap p-4">
      <ColContainer className="md:w-1/2 w-full md:h-full h-auto items-center justify-center bg-white">
        <RegisterForm />
      </ColContainer>
      <ColContainer className="md:w-1/2 w-full md:h-full h-auto items-center justify-center bg-primary-50 rounded-lg">
        <RegisterDescription />
      </ColContainer>
    </RowContainer>
  );
};

export default RegisterPage;
