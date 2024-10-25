import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../../components/Small/FormElements/InputField";
import { IFormValues } from "../../components/Small/FormElements/types";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

  return (
    <div className="relative  py-28 flex justify-center items-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex-col  flex py-80  "
      >
        <InputField label="email" register={register} required className="text-black"/>
        <InputField label="password" register={register} required className="text-black"/>
        {errors.password && <span>This field is required</span>}
        <input type="submit" className="text-white" />
      </form>
    </div>
  );
}
