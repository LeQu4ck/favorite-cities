"use client";

import { Box, Flex, Link, Image } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex as="nav" align="center" justify="space-between" padding="1.5rem">
      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        {" "}
        <Image borderRadius="100" alt="logo"  boxSize="85" src="../images/logo.jpg"></Image>
        <Link marginLeft="10px" href="/" fontWeight="bold" fontSize="xl">
          Favorite cities
        </Link>
      </Box>

      <Box>
        <Link href="/" marginLeft="10">
          Home
        </Link>
        <Link href="/favorite" marginLeft="10">
          Favourite
        </Link>
        <Link href="/about" marginLeft="10">
          About
        </Link>
      </Box>
    </Flex>
  );
}
