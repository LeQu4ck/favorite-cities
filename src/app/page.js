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
  ButtonGroup,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  
} from "@chakra-ui/react";

export default function Home() {
  return (
    
<Container
  maxW="container.lg"
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  marginTop="20px"
>
  {/* Left Column - Image */}
  <Image
    src="/images/init-bg.jpg"
    alt="Cityscape"
    borderRadius="lg"
    boxSize="500px"
    objectFit="cover"
    mr="4"
  />

  {/* Right Column - Card */}
  <Card maxW="sm">
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
          <Input placeholder="Search for a city" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm">
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
    </CardBody>
  </Card>
</Container>

  );
}
