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
};

const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    className,
    text,
    onChange,
    required = false,
    type = "text",
    placeholder = "",
    label = "",
  } = props;

  return (
    <ColContainer className="w-full items-center mt-4">
      {label && <LabelComponent label={label} />}
      <input
        type={type}
        className={`w-full text-xs font-medium font-secondary text-dark-100 outline-none shadow-none rounded border border-dark ${className}`}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
      />
    </ColContainer>
  );
};

export default TextInput;
