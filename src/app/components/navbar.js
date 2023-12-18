import { Box, Flex, Link, Button } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1.5rem"
      bg="blue.500"
      color="gray"
      className="nav"
    >
      <Link href="/" fontWeight="bold" fontSize="xl">
        Favorite cities
      </Link>
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
