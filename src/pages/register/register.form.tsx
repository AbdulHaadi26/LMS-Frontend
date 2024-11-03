import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilledButton from "../../components/buttons/filled.button";
import FormContainer from "../../components/containers/form.container";
import TextInput from "../../components/inputs/text.input";
import LogoIcon from "../../components/logo/logo.icon";
import ErrorComponent from "../../components/typography/error.typo";
import { createTenant } from "../../redux/actions/tenant.actions";
import { ButtonActions } from "../../utils/enum";

type RegisterTenantType = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState<RegisterTenantType>({
    name: "",
    email: "",
    password: "",
  });

  const onValueChanged = (value: string, name: string) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await createTenant(form);

    if (res?.error) {
      setError(res.error);
    } else {
      navigate("/login");
    }

    setIsLoading(false);
  };

  return (
    <FormContainer onSubmit={onSubmit} className="md:w-8/12 w-full p-4 mb-4">
      <LogoIcon className="p-4 mx-auto mb-4" iconClass="fa-2x" />
      <h1 className="text-2xl font-black text-primary-400 px-4 text-center font-primary">
        Register Here
      </h1>
      <p className="text-base px-4 text-center font-medium text-primary-200 mt-2 mb-8 font-secondary">
        Please fill in this form to create an account.
      </p>
      <TextInput
        label="School Name"
        className="w-full p-2"
        text={form.name}
        onChange={(text) => onValueChanged(text, "name")}
        placeholder="Enter your school name"
        required={true}
      />
      <TextInput
        label="Email"
        type="email"
        className="w-full p-2"
        text={form.email}
        onChange={(text) => onValueChanged(text, "email")}
        placeholder="Type your email"
        required={true}
      />
      <TextInput
        label="Password"
        type="password"
        className="w-full p-2"
        text={form.password}
        onChange={(text) => onValueChanged(text, "password")}
        placeholder="Type your password"
        required={true}
      />

      {error && <ErrorComponent error={error} />}

      <FilledButton
        disabled={isLoading}
        type={ButtonActions.SUBMIT}
        className="w-full p-2 mt-4 bg-primary-400 hover:bg-primary-300 text-white"
      >
        Register
      </FilledButton>

      <p className="text-xs font-medium text- mt-4 font-secondary">
        Already have an account?
        <span
          className="text-primary-400 font-bold cursor-pointer pl-1"
          onClick={() => navigate("/login")}
        >
          Login here
        </span>
      </p>
    </FormContainer>
  );
};

export default RegisterForm;
