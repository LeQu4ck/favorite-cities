import {
  ComposedChart,
  Area,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function HourlyChart({ Day }) {
  const { time, cover, humidity, temperature_2m } = Day;

  const data = time.map((time, index) => ({
    time: time.split("T")[1],
    temperature: temperature_2m[index],
    cover: cover[index],
    humidity: humidity[index],
  }));

  //console.log(data)
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data}>
        <Area
          type="monotone"
          dataKey="cover"
          fill="#82ca9d"
          stroke="#82ca9d"
          name="Cloud Cover (%)"
        />
        <Bar dataKey="humidity" fill="#ffc658" name="Humidity (%)" />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#8884d8"
          name="Temperature (°C)"
          strokeWidth={3}
        />

        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
