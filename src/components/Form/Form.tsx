import {
  useForm,
  SubmitHandler,
  FieldErrors,
  Path,
  FieldValues,
} from "react-hook-form";
import InputField from "../Small/FormElements/InputField";

type Field<T extends FieldValues> = {
  label: Path<T>; /// this is similar to keyof IFormValues
  type?: string;
  placeholder: string;
  required?: boolean;
  className?: string;
};

type FormComponentProps<T extends FieldValues> = {
  fields: Field<T>[];
  onSubmit: SubmitHandler<T>;
  error?: FieldErrors<T>;
  page: string;
};

const Form = <T extends FieldValues>({
  fields,
  onSubmit,
  // error,
  page,
}: FormComponentProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex-col  flex space-y-4  "
    >
      <h2 className="md:text-4xl text-2xl font-medium">{page}</h2>
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
          {errors && errors[field.label] && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
      ))}
      <input
        type="submit"
        className="text-black font-medium sm:text-xl text-sm  bg-yellow-400 p-2 cursor-pointer"
      />
    </form>
  );
};

export default Form;
