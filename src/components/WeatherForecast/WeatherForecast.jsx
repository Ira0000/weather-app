import { useSelector } from 'react-redux';
import { selectError, selectLoading, selectWeatherByCity } from '../../redux/weatherSlice';
import Loader from '../Loader';
import { WiCelsius } from 'react-icons/wi';
import ForecastChart from './ForecastChart.jsx';

export default function WeatherForecast() {
  const weatherData = useSelector(selectWeatherByCity);
  // console.log(weatherData);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <Loader />;
  if (error && error.includes('404'))
    return (
      <div className='text-white'>
        <p>City is not found</p>
      </div>
    );
  if (error) {
    return (
      <div className='text-white'>
        <p>Sorry, something went wrong, please try again later!</p>
      </div>
    );
  }

  if (weatherData && weatherData.city && weatherData.list && weatherData.list.length > 0)
    return (
      <div className='text-white'>
        <h2 className=' mb-2 text-md'>{weatherData?.city.name}</h2>
        <p className='mb-2 text-sm'>{weatherData.list[0].dt_txt.slice(0, 16)}</p>
        <div className='flex flex-col'>
          <div className='text-lg'>
            <span className='inline-block'>{weatherData.list[0].main.temp.toFixed()}</span>
            <WiCelsius className='-ml-4 -mt-10 inline-block' />
          </div>
          <div className='flex items-center'>
            <p className='capitalize'>{weatherData.list[0].weather[0].description}</p>
            <img
              width={70}
              height='auto'
              alt={weatherData.list[0].weather[0].description}
              src={`https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}.png`}
            />
          </div>
        </div>
        <ForecastChart weatherData={weatherData} />
      </div>
    );
  return (
    <div className='text-center text-gray-400'>
      <p>Enter a city name to see the weather forecast.</p>
    </div>
  );
}
