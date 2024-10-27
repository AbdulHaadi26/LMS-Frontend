import { ColContainer, RowContainer } from "../../components/containers";
import LoginDescription from "./login.description";
import LoginForm from "./login.from";

const LoginPage: React.FC = () => {
  return (
    <RowContainer className="w-full md:h-full h-auto md:flex-row flex-col-reverse flex-wrap p-4">
      <ColContainer className="md:w-1/2 w-full md:h-full h-auto items-center justify-center bg-primary-50 rounded-lg">
        <LoginDescription />
      </ColContainer>
      <ColContainer className="md:w-1/2 w-full md:h-full h-auto items-center justify-center bg-white">
        <LoginForm />
      </ColContainer>
    </RowContainer>
  );
};

export default LoginPage;
