import { useState } from "react";
import FilledButton from "../../components/buttons/filled.button";
import FormContainer from "../../components/containers/form.container";
import TextInput from "../../components/inputs/text.input";
import { DispatchType } from "../../utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { useNavigate } from "react-router-dom";
import ErrorComponent from "../../components/typography/error.typo";
import { LoginState } from "../../redux/reducers/login.reducer";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/actions/auth.action";
import { ButtonActions } from "../../utils/enum";

type LoginTenantType = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  const [form, setForm] = useState<LoginTenantType>({
    email: "",
    password: "",
  });

  const { error, isLoading }: LoginState = useSelector(
    (state: RootState) => state.Login
  );

  const onValueChanged = (value: string, name: string) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signIn(form));
  };

  return (
    <FormContainer onSubmit={onSubmit} className="w-full">
      <h1 className="text-2xl font-black text-dark-200 px-4 text-center font-primary">
        Login Here
      </h1>
      <p className="text-base px-4 text-center font-medium text-light-400 mt-2 mb-8 font-secondary">
        Welcome back, please login to your account
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
        className="w-full p-2 mt-4 bg-blue-200 hover:bg-blue-100 text-white"
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

export default LoginForm;
