import { SubmitHandler, useForm } from "react-hook-form";
import ButtonComponent from "../../ui/Button/ButtonComponent";
import InputField from "../../ui/FormElements/InputField";
import { useLocation, useNavigate } from "react-router-dom";
import { ISearchValue } from "../../Pages/Search/Index.types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../apps/Store";
import { SearchMovies } from "../../features/MovieSearchSlice";
import { useEffect } from "react";

type seachProps = {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const SearchBox = ({ setSearch }: seachProps) => {
  const navigation = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const queryParams = new URLSearchParams(location.search);
  const searchMovie = queryParams.get("query") || "";
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchValue>();

  useEffect(() => {
    if (searchMovie) {
      dispatch(SearchMovies({ query: searchMovie }));
      setSearch(searchMovie);
    }
  }, [searchMovie]);

  const onSubmit: SubmitHandler<ISearchValue> = (data) => {
    navigation(`/search?query=${data.searchmovie}`);
  };
  return (
    <div
      className=" flex justify-center items-center flex-col"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-x-10 flex items-center bg- border-2  rounded-full  px-4 py-2 sm:w-4/6 bg-[rgba(0,0,0,0.2)] backdrop-blur-xl"
      >
        <InputField
          label="searchmovie"
          register={register}
          required={true}
          type="text"
          className="  bg-transparent focus:outline-none   text-lg w-full"
          placeholder="Search Your Movie here..."
          location={pathname}
        />

        <ButtonComponent
          icon="iconamoon:search-duotone"
          className="  md:text-3xl text-2xl "
        />
      </form>
      {errors && errors["searchmovie"] && (
        <span className="text-red-500">This field is required</span>
      )}
    </div>
  );
};

export default SearchBox;
