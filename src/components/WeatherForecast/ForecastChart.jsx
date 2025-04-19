/* eslint-disable tailwindcss/no-custom-classname */
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function ForecastChart({ weatherData }) {
  const data = weatherData.list.map((day) => ({
    date: day.dt,
    temperature: day.main.temp,
    weatherIcon: day.weather[0].icon,
    weatherDescription: day.weather[0].description,
  }));

  const CustomXLabel = (props) => {
    const { x, y, payload } = props;
    const tickValue = payload?.value;

    if (tickValue) {
      const date = new Date(tickValue * 1000);
      const dayShort = date.toLocaleDateString(undefined, { weekday: 'short' });
      const hour = date.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit',
      });

      return (
        <g transform={`translate(${x},${y})`}>
          <foreignObject width={70} height={40} x={-35} y={0}>
            <div className='flex flex-col items-center text-center'>
              <p className='text-xs'>{hour}</p>
              <p className='text-xs'>{dayShort}</p>
            </div>
          </foreignObject>
        </g>
      );
    }

    return null;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const weatherIcon = payload[0]?.payload?.weatherIcon;
      const weatherDescription = payload[0]?.payload?.weatherDescription;
      const temperature = payload[0]?.value;
      return (
        <div className='custom-tooltip flex flex-col items-center rounded-[10px] bg-blue-light/75 p-2'>
          <p className='label text-blue-dark '>{`${Math.round(temperature)}°C`}</p>
          {weatherIcon && (
            <img
              width={50}
              height='auto'
              alt={weatherDescription || 'Weather Icon'}
              src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
            />
          )}
          {weatherDescription && (
            <p className='max-w-[50px] text-center text-xs text-blue-dark'>{weatherDescription}</p>
          )}
        </div>
      );
    }

    return null;
  };

  if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
    return <p>No weather data available for the chart.</p>;
  }

  return (
    <div className='chart-container overflow-x-auto'>
      <BarChart
        left={0}
        width={600}
        height={350}
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='date' interval={0} tick={<CustomXLabel />} height={40} />
        <YAxis unit='°C' tick={{ fontSize: 10 }} width={32} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar
          name='Temperature'
          dataKey='temperature'
          fill='#BA68C8'
          transform={`translate(0, 0)`}
        />
      </BarChart>
    </div>
  );
}
