import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "./types";

type InputFieldProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required?: boolean;
  type?: string;
  className?: string;
};

const InputField = ({
  label,
  register,
  required,
  type = "text",
  className,
}: InputFieldProps) => (
  <div>
    <label>{label}</label>
    <input
      type={type}
      {...register(label, { required })}
      className={className}
    />
  </div>
);

export default InputField;
