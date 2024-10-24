import { ColContainer, RowContainer } from "../../components/containers";
import LoginForm from "./login.from";
import ImageComponent from "../../components/image/image.component";
import RegisterBG from "../../assets/public/login.jpg";

const LoginPage: React.FC = () => {
  return (
    <RowContainer className="w-full h-full md:flex-row flex-col-reverse flex-wrap">
      <ColContainer className="md:w-1/3 w-full md:h-full h-auto py-8 px-8 justify-center bg-white shadow-xl">
        <LoginForm />
      </ColContainer>
      <ImageComponent
        src={RegisterBG}
        className="md:w-2/3 w-full md:h-full h-1/3 object-cover"
      />
    </RowContainer>
  );
};

export default LoginPage;
