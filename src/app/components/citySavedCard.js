import { Box, Text, Heading, VStack } from "@chakra-ui/react";

export default function SavedCity({ City }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <VStack p="6" align="start">
        <Heading size="md">
          {City.name}, {City.country}
        </Heading>

        <Text>Latitude: {City.latitude}</Text>
        <Text>Longitude: {City.longitude}</Text>
      </VStack>
    </Box>
  );
}
