import { Path, UseFormRegister, FieldValues } from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
  label: Path<T>;
  register: UseFormRegister<T>;
  placeholder: string;
  required?: boolean;
  type?: string;
  className?: string;
  location?: string;
};

const InputField = <T extends FieldValues>({
  label,
  register,
  required,
  type = "text",
  placeholder,
  className,
  location,
}: InputFieldProps<T>) => (
  // const location = useLocation()
  <>
    {location !== "/search" && (
      <label className="sm:text-xl text-sm capitalize">{label}</label>
    )}
    <input
      placeholder={placeholder}
      type={type}
      {...register(label, { required })}
      className={className}
    />
  </>
);

export default InputField;
