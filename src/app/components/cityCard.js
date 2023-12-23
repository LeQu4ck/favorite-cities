"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Box,
  Heading,
  Container,
  Text,
  Image,
  IconButton,
  Skeleton,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faMapMarkerAlt,
  faUsers,
  faClock,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";

export default function CityCard({ City }) {
  const [isFavorite, setIsFavorite] = useState(null);

  useEffect(() => {
    const checkFav = async () => {
      console.log(City.id);
      await axios
        .get(`/api/checkfavourite/${City.id}`)
        .then((response) => {
          // console.log(response.data);
          if (response.data.message === true) {
            setIsFavorite(true);
          } else {
            setIsFavorite(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    checkFav();
  }, [City.id]);

  const addToFavourite = async () => {
    let city = {
      id: City.id,
      name: City.name,
      latitude: City.latitude,
      longitude: City.longitude,
      country: City.country,
      countryCode: City.country_code,
    };

    const method = isFavorite ? "DELETE" : "POST";
    setIsFavorite(!isFavorite);

    try {
      if (method === "POST") {
        await axios
          .post("/api/favourite", city)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        await axios
          .delete("/api/favourite", { data: city })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxW="800" marginTop="20" marginBottom="10">
      <Card variant="outline" p="4" boxShadow="lg" borderRadius="lg">
        <CardHeader bgColor="blue.100" p="2" borderRadius="20">
          <Image
            boxSize="64px"
            src={`https://flagsapi.com/${City.country_code}/shiny/64.png`}
            alt={`${City.country} Flag`}
          />

          <Flex flexDirection="column" alignItems="center">
            <Flex
              justifyContent="space-between"
              flexWrap="wrap"
              gap="2"
              w="100%"
            >
              <Box>
                <Heading size="md" fontWeight="bold" color="gray.600">
                  {City.name}, {City.country} ({City.country_code})
                </Heading>

                <Text fontSize="sm" fontWeight="600" color="gray.500">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Latitude:{" "}
                  {City.latitude}, Longitude: {City.longitude}
                </Text>

                <Text fontSize="sm" fontWeight="600" color="gray.500">
                  <FontAwesomeIcon icon={faClock} /> Timezone: {City.timezone}
                </Text>

                <Text fontSize="sm" fontWeight="600" color="gray.500">
                  <FontAwesomeIcon icon={faMountain} /> Elevation:{" "}
                  {City.elevation}m
                </Text>

                <Text fontSize="sm" fontWeight="600" color="gray.500">
                  <FontAwesomeIcon icon={faUsers} />
                  Population:{" "}
                  {City.population
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".") || "Unknown"}
                </Text>
              </Box>
              <Box>
                <IconButton
                  aria-label="Add to favorites"
                  icon={<FontAwesomeIcon icon={faStar} />}
                  colorScheme={isFavorite ? "yellow" : "gray"}
                  onClick={addToFavourite}
                />
              </Box>
            </Flex>
          </Flex>
        </CardHeader>

        <CardBody p="2"></CardBody>

        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button colorScheme="teal" variant="outline">
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}
