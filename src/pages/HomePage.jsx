import SearchBar from '../components/SearchBar/SearchBar.jsx';
import WeatherForecast from '../components/WeatherForecast/WeatherForecast.jsx';

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col gap-10 bg-[url('/public/home.jpg')] bg-cover bg-no-repeat p-5 md:flex-row">
      <div className='flex flex-col rounded-[10px] bg-blue-normal/75 px-5 py-7 w-full'>
        <SearchBar />
        <WeatherForecast />
      </div>
    </div>
  );
}
