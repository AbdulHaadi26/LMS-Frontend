import { AUTO_COMPLETE_CONSTANT } from "../../utils/constants";
import { SelectOptionType } from "../../utils/types";
import { ColContainer } from "../containers";
import LabelComponent from "../typography/label.typo";

type SelectInputProps = {
  text: string;
  onChange: (text: string) => void;
  required?: boolean;
  className?: string;
  placeholder?: string;
  label?: string;
  name?: string;
  options: SelectOptionType[];
};

const SelectInput: React.FC<SelectInputProps> = ({
  className,
  text,
  onChange,
  required = false,
  placeholder = "",
  label = "",
  name = "",
  options = [],
}) => {
  return (
    <ColContainer className="w-full items-center mt-4">
      {label && <LabelComponent label={label} />}
      <select
        autoComplete={AUTO_COMPLETE_CONSTANT}
        name={name}
        className={`w-full text-xs font-medium font-secondary text-primary-300 bg-transparent outline-none shadow-none rounded border border-primary-400 ${className}`}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </ColContainer>
  );
};

export default SelectInput;
