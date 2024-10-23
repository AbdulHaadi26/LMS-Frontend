import { memo } from "react";

type ImageProps = {
  src: string;
  className?: string;
};

const ImageComponent: React.FC<ImageProps> = (props) => {
  const { src, className = "" } = props;

  const onError = () => {
    console.log("Image not found");
  };

  return <img src={src} className={`${className}`} onError={onError} />;
};

export default memo(ImageComponent);
