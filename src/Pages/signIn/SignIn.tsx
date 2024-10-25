import { Path, SubmitHandler } from "react-hook-form";
import { IFormValues } from "../../components/Small/FormElements/types";
import Form from "../../components/Form/Form";

type Field = {
  label: Path<IFormValues>;
  type?: string;
  required?: boolean;
  className?: string;
};

export default function SignIn() {
  const fields: Field[] = [
    { label: "email", type: "email", required: true, className: "text-black" },
    {
      label: "password",
      type: "password",
      required: true,
      className: "text-black",
    },
  ];

  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);
  return (
    <div className="relative  py-28 flex justify-center items-center ">
      <Form fields={fields} onSubmit={onSubmit} />
    </div>
  );
}
