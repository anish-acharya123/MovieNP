import { Path, SubmitHandler } from "react-hook-form";
import { ISignUpValues } from "../../ui/FormElements/types";
import Form from "../../components/Form/Form";
import FormMainGroup from "../../ui/FormElements/FormMainGroup";
import { Link } from "react-router-dom";

type Field<T> = {
  label: Path<T>;
  type?: string;
  required?: boolean;
  placeholder: string;
  className?: string;
};

const SignUp = () => {
  const className =
    "text-black py-2 px-3 rounded-md outline-none appearance-none	";

  const fields: Field<ISignUpValues>[] = [
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
      <div className="flex justify-between  w-full text-sm">
        <p>
          <input type="checkbox" name="" id="" className="cursor-pointer" />
          <span> Remember me</span>
        </p>
        <p>
          <a href="#" className="underline">
            Forgot Password
          </a>
        </p>
      </div>
      <div className="flex text-center w-full justify-center gap-2 text-sm">
        <p>Already Register?</p>
        <p>
          <Link to="/signin" className="underline">
            SingIn Now.
          </Link>
        </p>
      </div>
    </FormMainGroup>
  );
};

export default SignUp;
