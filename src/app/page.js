"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Container,
  Image,
} from "@chakra-ui/react";
import {
  Stack,
  Heading,
  Text,
  Divider,
  Input,
  InputGroup,
} from "@chakra-ui/react";

import SuggestionsTable from "./components/suggestionsTable";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = async (value) => {
    setSearchTerm(value);

    const suggestions = await fetchSuggestionsFromAPI(value);
    setSuggestions(suggestions);
  };

  const fetchSuggestionsFromAPI = async (value) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=10&language=en&format=json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch suggestions");
      }

      const data = await response.json();
      //console.log(data);
      return data.results.map((city) => ({
        id: city.id,
        name: city.name,
        latitude: city.latitude,
        longitude: city.longitude,
        country: city.country,
      }));
    } catch (error) {
      console.error(error.message);
      return [];
    }
  };

 
  return (
    <Container
      maxW="container.lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="20px"
      flexWrap="wrap"
    >
      <Image
        src="/images/init-bg.jpg"
        alt="Cityscape"
        borderRadius="lg"
        boxSize="350"
        objectFit="cover"
      />

      <Card maxW="800" marginTop="20px" variant="outline" marginBottom="20">
        <CardBody>
          <Stack spacing="3">
            <Heading size="md">Favorite Cities</Heading>
            <Text>
              Explore and search for your favorite cities. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardBody>
          <Stack spacing="4">
            <InputGroup>
              <Input
                placeholder="Search for a city"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </InputGroup>
            {/* Display suggestions */}
            {suggestions.length > 0 && (
              <SuggestionsTable suggestions={suggestions} />
            )}
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Home;
