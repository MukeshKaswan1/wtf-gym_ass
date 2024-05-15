import { Box, Button, HStack, Img, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Box
      position={"fixed"}
      display={"flex"}
      justifyContent="space-between"
      p="1% 5%"
      bg="black"
      w="100%"
      color={"#FFFF"}
    >
      <HStack>
        <Img width={"40px"} src="https://www.wtfup.me/apple-icon-152x152.png" />
        <Text fontWeight="bold" fontSize={"30px"}>
          TF
        </Text>
      </HStack>
      <HStack cursor={"pointer"} gap={6} color="gray">
        <Text>Fitness</Text>
        <Text>Nutrition</Text>
        <Text color={"#FFFF"} borderBottom="2px solid red" fontWeight={"bold"}>
          Gyms
        </Text>
        <Text>Become WTF Partner</Text>
        <Text>About Us</Text>
        <Button colorScheme="red">Login</Button>
      </HStack>
    </Box>
  );
};

export default Navbar;
