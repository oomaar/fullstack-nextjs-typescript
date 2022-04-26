import { Button, Flex, HStack, Text } from "@chakra-ui/react";
import { MenuItem } from "../molcules";

export const Navbar = () => {
  return (
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
  );
};
