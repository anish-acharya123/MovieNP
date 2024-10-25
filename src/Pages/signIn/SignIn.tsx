import { Path, SubmitHandler } from "react-hook-form";
import { IFormValues } from "../../components/Small/FormElements/types";
import Form from "../../components/Form/Form";

type Field = {
  label: Path<IFormValues>;
  type?: string;
  required?: boolean;
  placeholder: string;
  className?: string;
};

export default function SignIn() {
  const fields: Field[] = [
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

  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);
  return (
    <div
      className="relative  py-52 flex justify-center items-center "
    >
      <Form fields={fields} page="Sign In" onSubmit={onSubmit} />
    </div>
  );
}
