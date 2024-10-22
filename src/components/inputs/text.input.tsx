type TextInputProps = {
  text: string;
  onChange: (text: string) => void;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
};

const TextInput: React.FC<TextInputProps> = (props) => {
  const {
    className,
    text,
    onChange,
    required = false,
    type = "text",
    placeholder = "",
  } = props;

  return (
    <input
      type={type}
      className={`text-xs font-medium text-dark outline-none shadow-none rounded border border-dark ${className}`}
      value={text}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
