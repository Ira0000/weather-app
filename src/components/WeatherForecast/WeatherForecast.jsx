import { useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectWeatherByCity,
} from "../../redux/weatherSlice";
import Loader from "../Loader";

export default function WeatherForecast() {
  const weatherData = useSelector(selectWeatherByCity);
  console.log(weatherData);

  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <Loader />;
  if (error)
    return (
      <div>
        <p>No weather data to show</p>
      </div>
    );
  return <div></div>;
}
