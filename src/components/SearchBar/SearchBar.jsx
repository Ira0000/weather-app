import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getWeatherByCity } from '../../redux/weatherOps';

export default function SearchBar() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(getWeatherByCity(data));
  };

  return (
    <section className='bg-transparent '>
      <form className='mb-10  flex justify-between gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex w-full flex-col gap-2'>
          <input
            placeholder='Enter a city name'
            className='bg-transparent text-sm text-blue-light focus:outline-none'
            {...register('city', { required: true })}
          />
          {errors.city && <span>This field is required</span>}
          <hr className='w-full border-blue-light ' />
        </div>
        <button
          className='cursor-pointer rounded-[5px] bg-white p-2 text-xs text-blue-dark'
          type='submit'
        >
          Search
        </button>
      </form>
    </section>
  );
}
