"use client";

//import { useState } from 'react';
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
  Divider,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faTemperatureHigh,
  faTemperatureLow,
  faThermometerHalf,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherCard({ WeatherData }) {
  //console.log(WeatherData);

  return WeatherData.daily.time.map((time, index) => {
    const Day = {
      time: WeatherData.daily.time[index],
      weather_code: WeatherData.daily.weather_code[index],
      temperature_2m_max: WeatherData.daily.temperature_2m_max[index],
      temperature_2m_min: WeatherData.daily.temperature_2m_min[index],
      sunrise: WeatherData.daily.sunrise[index],
      sunset: WeatherData.daily.sunset[index],
      current_temperature: WeatherData.current?.temperature_2m,
    };

    return index === 0 ? (
      <Card
        variant="outline"
        p="4"
        boxShadow="sm"
        borderRadius="lg"
        key={time}
        bg="gray.600"
      >
        <CardHeader bgColor="blue.100" p="2" borderRadius="20">
          <Heading size="md" fontWeight="bold" color="gray.600">
            {new Intl.DateTimeFormat("en-US", {
              weekday: "short",
              day: "numeric",
            }).format(new Date(Day.time))}
          </Heading>
          <Box
            color="gray.500"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FontAwesomeIcon icon={faSun} />
            <Text fontSize="sm">{Day.sunrise.split("T")[1]}</Text>
          </Box>
          <Box
            color="gray.500"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FontAwesomeIcon icon={faMoon} />
            <Text fontSize="sm">{Day.sunset.split("T")[1]}</Text>
          </Box>
        </CardHeader>

        <CardBody p="2" display="flex" flexDirection="row">
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              fontSize="sm"
              display="flex"
              flexDirection="row"
              alignItems="center"
              marginRight="5px"
            >
              <FontAwesomeIcon icon={faThermometerHalf} />
              <Text marginLeft="10px">{Day.current_temperature}°C</Text>
            </Box>

            <Divider color="black" orientation="vertical" />

            <Box display="flex" flexDirection="column" marginLeft="5px">
              <Box
                fontSize="sm"
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <FontAwesomeIcon icon={faTemperatureHigh} />
                <Text marginLeft="10px">{Day.temperature_2m_max}°C</Text>
              </Box>
              <Box
                fontSize="sm"
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginTop="10px"
              >
                <FontAwesomeIcon icon={faTemperatureLow} />
                <Text marginLeft="10px">{Day.temperature_2m_min}°C</Text>
              </Box>
            </Box>
          </Box>
        </CardBody>
      </Card>
    ) : (
      <Card
        variant="outline"
        p="4"
        boxShadow="sm"
        borderRadius="lg"
        key={time}
        width="125px"
        // highlight the first day
      >
        <CardHeader bgColor="blue.100" p="2" borderRadius="20">
          <Heading size="md" fontWeight="bold" color="gray.600">
            {new Intl.DateTimeFormat("en-US", {
              weekday: "short",
              day: "numeric",
            }).format(new Date(Day.time))}
          </Heading>
          <Box
            color="gray.500"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FontAwesomeIcon icon={faSun} />
            <Text fontSize="sm">{Day.sunrise.split("T")[1]}</Text>
          </Box>
          <Box
            color="gray.500"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <FontAwesomeIcon icon={faMoon} />
            <Text fontSize="sm">{Day.sunset.split("T")[1]}</Text>
          </Box>
        </CardHeader>

        <CardBody p="2" display="flex" flexDirection="row">
          <Box display="flex" flexDirection="column">
            <Box
              fontSize="sm"
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <FontAwesomeIcon icon={faTemperatureHigh} />
              <Text marginLeft="10px">{Day.temperature_2m_max}°C</Text>
            </Box>
            <Box
              fontSize="sm"
              display="flex"
              flexDirection="row"
              alignItems="center"
              marginTop="10px"
            >
              <FontAwesomeIcon icon={faTemperatureLow} />
              <Text marginLeft="10px">{Day.temperature_2m_min}°C</Text>
            </Box>
          </Box>
        </CardBody>
      </Card>
    );
  });
}
