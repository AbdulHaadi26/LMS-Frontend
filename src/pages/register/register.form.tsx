import { useState } from "react";
import FilledButton from "../../components/buttons/filled.button";
import FormContainer from "../../components/containers/form.container";
import TextInput from "../../components/inputs/text.input";
import { createTenant } from "../../redux/actions/tenant.actions";
import { ButtonActions } from "../../utils/types";

type RegisterTenantType = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm: React.FC = () => {
  const [form, setForm] = useState<RegisterTenantType>({
    name: "",
    email: "",
    password: "",
  });

  const onValueChanged = (value: string, name: string) => {
    setForm({ ...form, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTenant({
      name: form.name,
      email: form.email,
      password: form.password,
    });
  };

  return (
    <FormContainer onSubmit={onSubmit} className="w-full">
      <h1 className="text-xl font-bold px-4 text-center">Register Here</h1>
      <TextInput
        className="w-full p-2 mt-4"
        text={form.name}
        onChange={(text) => onValueChanged(text, "name")}
        placeholder="Name"
        required={true}
      />
      <TextInput
        type="email"
        className="w-full p-2 mt-4"
        text={form.email}
        onChange={(text) => onValueChanged(text, "email")}
        placeholder="Email"
        required={true}
      />
      <TextInput
        type="password"
        className="w-full p-2 mt-4"
        text={form.password}
        onChange={(text) => onValueChanged(text, "password")}
        placeholder="password"
        required={true}
      />
      <FilledButton
        type={ButtonActions.SUBMIT}
        className="w-full p-2 mt-4 bg-blue-500 text-white"
      >
        Register
      </FilledButton>
    </FormContainer>
  );
};

export default RegisterForm;
