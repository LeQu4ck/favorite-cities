"use client";

import { useState, useEffect } from "react";
import { Box, Skeleton, Card, CardBody, Text } from "@chakra-ui/react";

import axios from "axios";

import SavedCity from "../components/citySavedCard";

export default function Favourite() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/favourite");
        setData(response.data);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const deleteFromFav = async (cityID) => {
    let city = data.find((c) => c.id === cityID);

    try {
      await axios
        .delete("/api/favourite", { data: city })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      setData(data.filter((c) => c.id !== cityID));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Skeleton height="800px" isLoaded={isLoaded} fadeDuration={1.5}>
      <Box display="flex" justifyContent="center">
        {data.map((item) => (
          <SavedCity
            key={item.id}
            City={item}
            deleteFromFav={() => deleteFromFav(item.id)}
          />
        ))}
      </Box>
      {data.length === 0 && (
        <Box
          display="flex"
          justifyContent="center"
          marginTop="20"
          marginBottom="10"
        >
          {" "}
          <Card
            variant="outline"
            p="4"
            boxShadow="lg"
            borderRadius="lg"
            maxW="400px"
          >
            <CardBody>
              <Text>No saved cities yet. :)</Text>
            </CardBody>
          </Card>
        </Box>
      )}
    </Skeleton>
  );
}
