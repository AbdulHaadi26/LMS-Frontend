import { ColContainer, RowContainer } from "../../components/containers";
import RegisterFrom from "./register.form";

const RegisterPage: React.FC = () => {
  return (
    <RowContainer className="w-full justify-center items-center h-full p-4">
      <ColContainer className="w-1/3 items-center bg-white shadow-lg rounded-lg p-4">
        <RegisterFrom />
      </ColContainer>
    </RowContainer>
  );
};

export default RegisterPage;
