import { Container, Flex, Heading, Text } from "@chakra-ui/react";

export const Hero = () => {
  return (
    <Flex
      w="100%"
      background="linear-gradient(93.73deg, #feac5e 2.17%, #c779d0 47.86%, #4bc0c8 98.58%);"
    >
      <Container py="64px">
        <Heading>
          Increase your productivity
          <br />
          Make your app in minutes
        </Heading>
        <Text mt="16px" fontSize="26px" lineHeight="64px" color="gray.800">
          Your fullstack React app
        </Text>
      </Container>
    </Flex>
  );
};
