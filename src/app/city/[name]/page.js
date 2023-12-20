"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

import CityCard from "@/app/components/cityCard";
import WeatherCard from "@/app/components/cityWeatherCard";

import { Container, Box, Text } from "@chakra-ui/react";

export default function City() {
  const params = useParams();
  const cityID = params.name;

  const [cityData, setCityData] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchCityByID = async () => {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/get?id=${cityID}&population`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch city data");
        }

        const data = await response.json();
        setCityData(data);

        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&current=temperature_2m,relative_humidity_2m,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset`
        );

        if (!weatherResponse.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const weatherData = await weatherResponse.json();
       
        setWeatherData(weatherData);
      } catch (error) {
        console.error(error.message);
      }
    };
    

    fetchCityByID();
  }, [cityID]);

  return (
    <Container maxW="1000">
      {" "}
      <Box>{cityData && <CityCard City={cityData} />}</Box>{" "}
      <Text m="4" fontSize="xl" fontWeight="bold" >7 DAYS FORECAST</Text>
      <Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
        
        {weatherData && <WeatherCard  WeatherData={weatherData} />}
      </Box>
    </Container>
  );
}
