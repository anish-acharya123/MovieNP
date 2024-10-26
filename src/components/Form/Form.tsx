import { useForm, SubmitHandler, FieldErrors, Path } from "react-hook-form";
import InputField from "../Small/FormElements/InputField";
import { ISignInValues } from "../Small/FormElements/types";

type Field = {
  label: Path<ISignInValues>; /// this is similar to keyof IFormValues
  type?: string;
  placeholder: string;
  required?: boolean;
  className?: string;
};

type FormComponentProps = {
  fields: Field[];
  onSubmit: SubmitHandler<ISignInValues>;
  error?: FieldErrors<ISignInValues>;
  page: string;
};

const Form = ({ fields, onSubmit, error, page }: FormComponentProps) => {
  const { register, handleSubmit } = useForm<ISignInValues>();
  return (
   
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex-col  flex space-y-4  "
      >
        <h2 className="text-4xl font-medium">{page}</h2>
        {fields.map((field) => (
          <div key={field.label} className="flex flex-col">
            <InputField
              label={field.label}
              register={register}
              required={field.required}
              type={field.type}
              className={field.className}
              placeholder={field.placeholder}
            />
            {error && error[field.label] && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        ))}
        <input
          type="submit"
          className="text-black font-medium  bg-yellow-400 p-2 cursor-pointer"
        />
      </form>
  );
};

export default Form;
