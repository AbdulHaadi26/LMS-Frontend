import { useEffect, useState } from "react";
import FilledButton from "../../components/buttons/filled.button";
import FormContainer from "../../components/containers/form.container";
import TextInput from "../../components/inputs/text.input";
import { ButtonActions } from "../../utils/types";
import { RegisterState } from "../../redux/reducers/register.reducer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../../components/typography/error.typo";

type RegisterTenantType = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterTenantType>({
    name: "",
    email: "",
    password: "",
  });

  const { error, isLoading, success }: RegisterState = useSelector(
    (state: RootState) => state.Register
  );

  const onValueChanged = (value: string, name: string) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);

  return (
    <FormContainer onSubmit={onSubmit} className="w-full">
      <h1 className="text-2xl font-black text-dark-200 px-4 text-center font-primary">
        Register Here
      </h1>
      <p className="text-base px-4 text-center font-medium text-light-400 mt-2 mb-8 font-secondary">
        Please fill in this form to create an account.
      </p>
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
        className="w-full p-2 mt-8 bg-blue-200 hover:bg-blue-100 text-white"
      >
        Login
      </FilledButton>
      <p className="text-xs font-medium text-light-400 mt-4 font-secondary">
        Don't have an account?
        <span
          className="text-blue-200 font-bold cursor-pointer pl-1"
          onClick={() => navigate("/register")}
        >
          Create account
        </span>
      </p>
    </FormContainer>
  );
};

export default RegisterForm;
