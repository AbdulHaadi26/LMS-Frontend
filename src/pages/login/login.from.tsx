import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FilledButton from "../../components/buttons/filled.button";
import FormContainer from "../../components/containers/form.container";
import TextInput from "../../components/inputs/text.input";
import LogoIcon from "../../components/logo/logo.icon";
import ErrorComponent from "../../components/typography/error.typo";
import { signIn } from "../../redux/actions/auth.action";
import { ButtonActions } from "../../utils/enum";
import { DispatchType } from "../../utils/types";

type LoginTenantType = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<LoginTenantType>({
    email: "",
    password: "",
  });

  const onValueChanged = (value: string, name: string) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await dispatch(signIn(form));

    if (res?.error) {
      setError(res.error);
    }

    setIsLoading(false);
  };

  return (
    <FormContainer onSubmit={onSubmit} className="md:w-8/12 w-full p-4 mb-4">
      <LogoIcon className="p-4 mx-auto mb-4" iconClass="fa-2x" />
      <h1 className="text-2xl font-black text-primary-400 px-4 text-center font-primary">
        Login Here
      </h1>
      <p className="text-base px-4 text-center font-medium text-primary-200 mt-2 mb-8 font-secondary">
        Welcome back, please login to your account
      </p>
      <TextInput
        label="Email"
        name="email"
        type="email"
        className="w-full p-2"
        text={form.email}
        onChange={(text) => onValueChanged(text, "email")}
        placeholder="Type your email"
        required={true}
      />
      <TextInput
        label="Password"
        name="password"
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
        Login
      </FilledButton>
      <p className="text-xs font-medium text-primary-200 mt-4 font-secondary">
        Don't have an account?
        <span
          className="text-primary-400 font-bold cursor-pointer pl-1"
          onClick={() => navigate("/register")}
        >
          Create account
        </span>
      </p>
    </FormContainer>
  );
};

export default LoginForm;
