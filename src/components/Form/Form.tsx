import { useForm, SubmitHandler, FieldErrors, Path } from "react-hook-form";
import InputField from "../Small/FormElements/InputField";
import { IFormValues } from "../Small/FormElements/types";

type Field = {
  label: Path<IFormValues>; /// this is similar to keyof IFormValues
  type?: string;
  required?: boolean;
  className?: string;
};

type FormComponentProps = {
  fields: Field[];
  onSubmit: SubmitHandler<IFormValues>;
  error?: FieldErrors<IFormValues>;
};

const Form = ({ fields, onSubmit, error }: FormComponentProps) => {
  const { register, handleSubmit } = useForm<IFormValues>();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex-col  flex space-y-4 "
    >
      {fields.map((field) => (
        <div key={field.label}>
          <InputField
            label={field.label}
            register={register}
            required={field.required}
            type={field.type}
            className={field.className}
          />
          {error && error[field.label] && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
      ))}
      <input type="submit" className="text-white bg-blue-500 p-2" />
    </form>
  );
};

export default Form;
