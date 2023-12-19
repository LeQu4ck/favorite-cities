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
} from "@chakra-ui/react";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function CityCard({ City }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container maxW="800">
      <Card
        marginTop="20"
        variant="outline"
        p="4"
        boxShadow="lg"
        borderRadius="lg"
      >
        <CardHeader bgColor="blue.100" p="2" borderRadius="20">
          <Image
            boxSize="64px"
            src={`https://flagsapi.com/${City.country_code}/shiny/64.png`}
            alt={`${City.country} Flag`}
            m="2"
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
                  {City.name}, {City.country}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Latitude:{" "}
                  {City.latitude}, Longitude: {City.longitude}
                </Text>
              </Box>
              <Box>
                <IconButton
                  aria-label="Add to favorites"
                  icon={<FontAwesomeIcon icon={faStar} />}
                  colorScheme={isFavorite ? "yellow" : "gray"}
                  onClick={handleFavoriteClick}
                />
              </Box>
            </Flex>
          </Flex>
        </CardHeader>

        <CardBody p="2">
          <Text>Population: {City.population || "Unknown"}</Text>
        </CardBody>

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
