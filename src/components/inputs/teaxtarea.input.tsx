import { AUTO_COMPLETE_CONSTANT } from "../../utils/constants";
import { ColContainer } from "../containers";
import LabelComponent from "../typography/label.typo";

type TextAreaInputProps = {
  text: string;
  onChange: (text: string) => void;
  required?: boolean;
  className?: string;
  placeholder?: string;
  label?: string;
  name?: string;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  className,
  text,
  onChange,
  required = false,
  placeholder = "",
  label = "",
  name = "",
}) => {
  return (
    <ColContainer className="w-full items-center mt-4">
      {label && <LabelComponent label={label} />}
      <textarea
        autoComplete={AUTO_COMPLETE_CONSTANT}
        name={name}
        className={`w-full text-xs font-medium font-secondary text-primary-300 bg-transparent outline-none shadow-none rounded border border-primary-400 ${className} resize-none overflow-y-auto`}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
      />
    </ColContainer>
  );
};

export default TextAreaInput;
