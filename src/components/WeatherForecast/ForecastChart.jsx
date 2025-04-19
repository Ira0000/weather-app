import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function ForecastChart({ weatherData }) {
  const data = weatherData.list.map((day) => ({
    date_text: day.dt_txt.slice(0, 16),
    date: day.dt,
    temperature: day.main.temp,
    weather: day.weather[0].icon,
  }));

  console.log(data);

  const formatHourTick = (tick) => {
    const date = new Date(tick * 1000);
    const day = date.toLocaleDateString(undefined, { weekday: "short" });
    const hour = date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });
    return [hour, day];
  };

  if (!weatherData || !weatherData.list || weatherData.list.length === 0) {
    return <p>No weather data available for the chart.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          tickFormatter={formatHourTick}
          interval="preserveStartEnd"
          angle={0}
          textAnchor="middle"
          tickLine={false}
          axisLine={false} //
          height={80}
          dy={10}
        />
        <YAxis unit="°C" />
        <Tooltip
          formatter={(value) => `${Math.round(value)}°C`}
          labelFormatter={(value) => {
            const date = new Date(value * 1000);
            return date.toLocaleString();
          }}
        />
        <Legend />
        <Bar
          name="Temperature"
          dataKey="temperature"
          fill="#8884d8"
          transform={`translate(0, 0)`}
        />
        {/* You can add more Bar components for other weather parameters if needed */}
        {/* <Bar name="Feels Like" dataKey="feels_like" fill="#82ca9d" transform={`translate(0, 0)`} /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
