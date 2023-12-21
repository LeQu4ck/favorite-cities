"use client";

import { Box, Flex, Link, Image, Container } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Container minW="100">
      <Flex
        align="center"
        justify="space-between"
        padding="1.5rem"
        bg="#3A4A5B"
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          {" "}
          <Image
            borderRadius="100"
            alt="logo"
            boxSize="85"
            src="../images/logo.jpg"
          ></Image>
          <Link marginLeft="10px" href="/" fontWeight="bold" fontSize="30">
            City Power
          </Link>
        </Box>

        <Box>
          <Link href="/" marginLeft="10">
            Home
          </Link>
          <Link href="/favourites" marginLeft="10">
            Favourite
          </Link>
          <Link href="/about" marginLeft="10">
            About
          </Link>
        </Box>
      </Flex>
    </Container>
  );
}
