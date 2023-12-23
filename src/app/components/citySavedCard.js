import {
  Box,
  Text,
  Flex,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Container,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faStar } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import axios from "axios";

export default function SavedCity({ City, deleteFromFav }) {
  const [isFavorite, setIsFavorite] = useState(true);

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
  }, [City.id, isFavorite]);

  return (
    <Container maxW="400" marginTop="20" marginBottom="10">
      <Card variant="outline" p="4" boxShadow="lg" borderRadius="lg">
        <CardHeader bgColor="blue.100" p="2" borderRadius="20">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {" "}
            <Image
              boxSize="64px"
              src={`https://flagsapi.com/${City.countryCode}/shiny/64.png`}
              alt={`${City.country} Flag`}
            />
            <Box>
              <IconButton
                aria-label="Add to favorites"
                icon={<FontAwesomeIcon icon={faStar} />}
                colorScheme={isFavorite ? "yellow" : "gray"}
                onClick={deleteFromFav}
              />
            </Box>
          </Box>

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

                <Text fontSize="sm" fontWeight="600" color="gray.500">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Latitude:{" "}
                  {City.latitude}, Longitude: {City.longitude}
                </Text>
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
          <Link href={`/city/${City.id}`}>Lean more</Link>
        </CardFooter>
      </Card>

    </Container>
  );
}
