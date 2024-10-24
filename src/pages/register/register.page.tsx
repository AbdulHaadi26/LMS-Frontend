import { ColContainer, RowContainer } from "../../components/containers";
import RegisterFrom from "./register.form";
import ImageComponent from "../../components/image/image.component";
import RegisterBG from "../../assets/public/register.jpg";

const RegisterPage: React.FC = () => {
  return (
    <RowContainer className="w-full h-full flex-row flex-wrap">
      <ImageComponent
        src={RegisterBG}
        className="md:w-2/3 w-full md:h-full h-1/3 object-cover"
      />
      <ColContainer className="md:w-1/3 w-full md:h-full h-auto py-8 px-8 justify-center bg-white shadow-xl">
        <RegisterFrom />
      </ColContainer>
    </RowContainer>
  );
};

export default RegisterPage;
