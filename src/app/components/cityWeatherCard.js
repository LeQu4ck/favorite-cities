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

export default function WeatherCard({ Day, setSelectedDay, index }) {
  const handleClick = () => {
    setSelectedDay(index);
  };

  return (
    <div onClick={handleClick}>
      <Card
        width={Day.current ? "auto" : "120px"}
        variant="outline"
        p="2"
        boxShadow="sm"
        borderRadius="lg"
        bg={Day.current ? "gray.600" : ""}
      >
        <CardHeader bgColor="blue.100" p="2" borderRadius="20">
          <Heading
            size="md"
            fontWeight="bold"
            color="gray.600"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {new Date(Day.time).toLocaleDateString("en-US", {
              weekday: "short",
              day: "numeric",
            })}
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
            {Day.current && (
              <Box
                fontSize="sm"
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginRight="5px"
              >
                <FontAwesomeIcon icon={faThermometerHalf} />
                <Text marginLeft="10px">{Day.current}°C</Text>
              </Box>
            )}

            {Day.current && <Divider color="black" orientation="vertical" />}

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
    </div>
  );
}
