import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getWeatherByCity } from "../../redux/weatherOps";

export default function SearchBar() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(getWeatherByCity(data));
  };

  return (
    <section className="bg-transparent ">
      <form
        className="flex  gap-4 justify-between mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2 w-full">
          <input
            placeholder="Enter a city name"
            className="bg-transparent focus:outline-none text-blue-light text-sm"
            {...register("city", { required: true })}
          />
          {errors.city && <span>This field is required</span>}
          <hr className="w-full border-blue-light " />
        </div>
        <button
          className="p-2 text-blue-dark cursor-pointer bg-white rounded-[5px] text-xs"
          type="submit"
        >
          Search
        </button>
      </form>
    </section>
  );
}
