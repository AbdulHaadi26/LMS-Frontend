import { AUTO_COMPLETE_CONSTANT } from "../../utils/constants";
import { ColContainer } from "../containers";
import LabelComponent from "../typography/label.typo";

type TextInputProps = {
  text: string;
  onChange: (text: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  label?: string;
  name?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  className,
  text,
  onChange,
  required = false,
  type = "text",
  placeholder = "",
  label = "",
  name = "",
}) => {
  return (
    <ColContainer className="w-full items-center mt-4">
      {label && <LabelComponent label={label} />}
      <input
        autoComplete={AUTO_COMPLETE_CONSTANT}
        name={name}
        type={type}
        className={`w-full text-xs font-medium font-secondary text-primary-300 bg-primary-50 outline-none shadow-none rounded border border-primary-400 ${className}`}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
      />
    </ColContainer>
  );
};

export default TextInput;
