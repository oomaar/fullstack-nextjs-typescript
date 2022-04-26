import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { MenuItem } from "../components/molcules";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Super App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="100%" alignContent="center" padding="1rem">
        <Text
          fontSize="36px"
          fontWeight="bold"
          lineHeight="42px"
          color="#1f79ba"
          flexGrow={1}
        >
          Super App
        </Text>
        <HStack spacing="16px">
          <MenuItem title="Blog" href="blog" />
          <MenuItem title="Product" href="product" />
          <MenuItem title="Pricing" href="pricing" />
        </HStack>
        <Flex marginLeft="82px">
          <Button variant="solid" colorScheme="blue">
            Get Started
          </Button>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;
