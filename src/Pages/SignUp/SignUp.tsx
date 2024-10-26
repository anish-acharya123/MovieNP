import { Path, SubmitHandler } from "react-hook-form";
import { ISignUpValues } from "../../components/Small/FormElements/types";
import Form from "../../components/Form/Form";
import FormMainGroup from "../../components/Small/FormElements/FormMainGroup";

type Field = {
  label: Path<ISignUpValues>;
  type?: string;
  required?: boolean;
  placeholder: string;
  className?: string;
};

const SignUp = () => {
  const className =
    "text-black py-2 px-3 rounded-md outline-none appearance-none	";

  const fields: Field[] = [
    {
      label: "email",
      type: "email",
      placeholder: "Email or PhoneNumber",
      required: true,
      className: `${className}`,
    },
    {
      label: "username",
      type: "text",
      placeholder: "Enter Your Username",
      required: true,
      className: `${className}`,
    },
    {
      label: "password",
      type: "password",
      placeholder: "Enter Your Password",
      required: true,
      className: `${className}`,
    },
    {
      label: "cpassword",
      type: "password",
      placeholder: "Enter Your C-Password",
      required: true,
      className: `${className}`,
    },
  ];

  
  const onSubmit: SubmitHandler<ISignUpValues> = (data) => console.log(data);

  return (
    <FormMainGroup>
      <Form fields={fields} page="Sign Up" onSubmit={onSubmit} />
    </FormMainGroup>
  );
};

export default SignUp;
