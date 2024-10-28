import { Path, SubmitHandler } from "react-hook-form";
import { ISignInValues } from "../../ui/FormElements/types";
import FormMainGroup from "../../ui/FormElements/FormMainGroup";
import Form from "../../components/Form/Form";
import { Link } from "react-router-dom";

type Field<T> = {
  label: Path<T>;
  type?: string;
  required?: boolean;
  placeholder: string;
  className?: string;
};

export default function SignIn() {
  const fields: Field<ISignInValues>[] = [
    {
      label: "email",
      type: "email",
      placeholder: "Email or Phone Number",
      required: true,
      className: "text-black py-2 px-3 rounded-md outline-none appearance-none	",
    },
    {
      label: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      className:
        "text-blackshadow appearance-none border  rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ",
    },
  ];

  const onSubmit: SubmitHandler<ISignInValues> = (data) => console.log(data);
  return (
    <FormMainGroup>
      <Form fields={fields} page="Sign In" onSubmit={onSubmit} />
      <div className="flex justify-between  w-full  text-sm">
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
        <p>New to MovieNp?</p>
        <p>
          <Link to="/signup" className="underline">
            SingUp Now.
          </Link>
        </p>
      </div>
      <div className="text-sm ">
        <p className="max-w-full text-slate-300 ">
          <span>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </span>
          <span className="text-yellow-400">
            <a href=""> Learn more.</a>
          </span>
        </p>
      </div>
    </FormMainGroup>
  );
}
