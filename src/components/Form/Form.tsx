import { useForm, SubmitHandler, FieldErrors, Path } from "react-hook-form";
import InputField from "../Small/FormElements/InputField";
import { IFormValues } from "../Small/FormElements/types";

type Field = {
  label: Path<IFormValues>; /// this is similar to keyof IFormValues
  type?: string;
  placeholder: string;
  required?: boolean;
  className?: string;
};

type FormComponentProps = {
  fields: Field[];
  onSubmit: SubmitHandler<IFormValues>;
  error?: FieldErrors<IFormValues>;
  page: string;
};

const Form = ({ fields, onSubmit, error, page }: FormComponentProps) => {
  const { register, handleSubmit } = useForm<IFormValues>();
  return (
    <div className=" bg-[rgba(0,0,0,0.2)] backdrop-blur-md rounded-md  ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex-col min-w-[30rem] flex space-y-4 border-2 py-8 px-16 "
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
          className="text-white bg-blue-500 p-2 cursor-pointer"
        />
      </form>
      <div></div>
    </div>
  );
};

export default Form;
