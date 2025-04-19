import SearchBar from "../components/SearchBar/SearchBar";
import WeatherForecast from "../components/WeatherForecast/WeatherForecast";

export default function HomePage() {
  return (
    <div className="h-screen flex gap-10 flex-col md-flex-row p-5 bg-[url('/public/home.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col bg-blue-normal/75 rounded-[10px] px-5 py-7">
        <SearchBar />
        <WeatherForecast />
      </div>
    </div>
  );
}
