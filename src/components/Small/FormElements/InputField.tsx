import { Path, UseFormRegister } from "react-hook-form";
import { ISignInValues } from "./types";

type InputFieldProps = {
  label: Path<ISignInValues>;
  register: UseFormRegister<ISignInValues>;
  placeholder: string;
  required?: boolean;
  type?: string;
  className?: string;
};

const InputField = ({
  label,
  register,
  required,
  type = "text",
  placeholder,
  className,
}: InputFieldProps) => (
  <>
    <label className="text-xl capitalize">{label}</label>
    <input
      placeholder={placeholder}
      type={type}
      {...register(label, { required })}
      className={className}
    />
  </>
);

export default InputField;
