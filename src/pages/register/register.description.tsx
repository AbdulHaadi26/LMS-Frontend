import { memo } from "react";
import InfoCard from "../../components/cards/info.card";
import { ColContainer, RowContainer } from "../../components/containers";
import { INFO_DATA } from "../../utils/constants";

const RegisterDescription: React.FC = () => {
  return (
    <ColContainer className="w-full md:p-4 p-8 items-center justify-center">
      <h1 className="text-3xl font-black font-primary text-primary-400 md:w-5/6 w-full">
        The First AI-Powered Learning Platform
      </h1>
      <p className="text-lg text-primary-200 font-semibold mt-4 md:w-5/6 w-full">
        Experience personalized, adaptive learning powered by AI—designed to
        help you reach your goals faster and more effectively.
      </p>

      <RowContainer className="md:w-5/6 w-full md:flex-row flex-col justify-center md:space-x-3 space-x-0 md:space-y-0 space-y-3 mt-8">
        {INFO_DATA.map((data) => (
          <InfoCard
            key={data.title}
            icon={data.icon}
            title={data.title}
            description={data.description}
          />
        ))}
      </RowContainer>
    </ColContainer>
  );
};

export default memo(RegisterDescription);
