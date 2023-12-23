"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import CityCard from "@/app/components/cityCard";
import WeatherCard from "@/app/components/cityWeatherCard";
import HourlyChart from "@/app/components/cityHourlyWeatherCard";

import { Container, Box, Text } from "@chakra-ui/react";

export default function City() {
  const params = useParams();
  const cityID = params.cityID;

  const [cityData, setCityData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [weatherHourlyData, setWeatherHourlyData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/get?id=${cityID}&population`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch city data");
        }

        const data = await response.json();
        setCityData(data);
        return data;
      } catch (error) {
        console.error(error.message);
      }
    };
    //
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    const fetchHourlyWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,cloud_cover`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();

        setWeatherHourlyData(data);
        //console.log(data)
      } catch (error) {
        console.error(error.message);
      }
    };


    const fetchCityByID = async () => {
      const cityData = await fetchCityData();
      if (cityData) {
        await fetchWeatherData(cityData.latitude, cityData.longitude);
        await fetchHourlyWeatherData(cityData.latitude, cityData.longitude);
      }
    };

    fetchCityByID();
  }, [cityID]);

  return (
    <Container maxW="1200">
      {" "}
      <Box>{cityData && <CityCard City={cityData} />}</Box>{" "}
      <Text m="4" fontSize="xl" fontWeight="bold">
        7 DAYS FORECAST
      </Text>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        marginBottom="20px"
      >
        {weatherData &&
          weatherData.daily.time.map((time, index) => (
            <WeatherCard
              key={time}
              Day={{
                time: weatherData.daily.time[index],
                weather_code: weatherData.daily.weather_code[index],
                temperature_2m_max: weatherData.daily.temperature_2m_max[index],
                temperature_2m_min: weatherData.daily.temperature_2m_min[index],
                sunrise: weatherData.daily.sunrise[index],
                sunset: weatherData.daily.sunset[index],
                current:
                  index === 0 ? weatherData.current.temperature_2m : null,
              }}
              setSelectedDay={setSelectedDay}
              index={index}
            />
          ))}
      </Box>
      <Text m="4" fontSize="xl" fontWeight="bold">
        HOURLY CHART
      </Text>
      <Box
        marginTop="20px"
        marginBottom="20"
        width="100%"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        {weatherHourlyData && (
          <HourlyChart
            Day={{
              time: weatherHourlyData.hourly.time.slice(
                selectedDay * 24,
                (selectedDay + 1) * 24
              ),
              temperature_2m: weatherHourlyData.hourly.temperature_2m.slice(
                selectedDay * 24,
                (selectedDay + 1) * 24
              ),
              cover: weatherHourlyData.hourly.cloud_cover.slice(
                selectedDay * 24,
                (selectedDay + 1) * 24
              ),
              humidity: weatherHourlyData.hourly.relative_humidity_2m.slice(
                selectedDay * 24,
                (selectedDay + 1) * 24
              ),
            }}
          />
        )}
      </Box>
    </Container>
  );
}
