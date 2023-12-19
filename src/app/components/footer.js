"use client"

import { Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      as="footer"
      p="4"
      position="fixed" 
      bottom="0"
      left="0"
      right="0"
      bg="black"
      color="white"
      textAlign="center"
    >
      © 2023 Favourite Cities
    </Box>
  );
}
