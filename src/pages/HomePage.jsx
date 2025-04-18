import SearchBar from "../components/SearchBar/SearchBar";
import WeatherForecast from "../components/WeatherForecast/WeatherForecast";

export default function HomePage() {
  return (
    <div className="flex flex-col p-5">
      <SearchBar />
      <WeatherForecast />
    </div>
  );
}
