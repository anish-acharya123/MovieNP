import { Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "./types";

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  className?: string;
};

const InputField = ({ label, register, required, className }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={label}
        className={className}
        {...register(label, { required })}
      />
    </>
  );
};

export default InputField;
