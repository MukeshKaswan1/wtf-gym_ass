import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Img,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Select,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../Redux/getData/action";
import { FaTelegram, FaTelegramPlane } from "react-icons/fa";
import { Rating } from "../Components/Ratings";
import { useState } from "react";

//loader
//https://wtfup.me/assets/loader.gif
const Gyms = () => {
  const { loading, error, data } = useSelector((store) => store.data);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [selectedValues, setSelectedValues] = useState("");

  useEffect(() => {
    let route1 = "nearestgym?lat=30.325488815850512&long=78.0042384802231";
    let route2 = "places";
    let params = {
      city: "",
    };
    if (text) {
      dispatch(getData(params, route2));
    }
    dispatch(getData(params, route1));
  }, [text, selectedValues]);

  return (
    <Box>
      <Box>
        <Img className="ImageFullWidth" src="https://i.imgur.com/EZkA5Fc.png" />
      </Box>
      <Box p={"1% 5%"} position={"sticky"}>
        <Stack borderRadius={"10px"} p={"0.3%"} border="2px solid gray">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<SearchIcon />}
            />
            <Input
              onChange={(e) => setText(e.target.value)}
              color="#FFFF"
              border="none"
              placeholder="Search gym name here.."
            />
            <InputRightAddon
              pointerEvents="none"
              color="#FFFF"
              fontSize="1.2em"
              background={"black"}
              border="none"
              children={<MdLocationOn />}
            />
            <InputRightAddon
              bg={"black"}
              border="none"
              p={2}
              children={
                <Button color={"#FFFF"} colorScheme={"red"}>
                  Clear
                </Button>
              }
            />
          </InputGroup>
        </Stack>
      </Box>
      <Box
        color="#FFFF"
        p={"0% 0% 0% 5%"}
        boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
      >
        <Flex gap={10}>
          <Stack minW={"30%"}>
            {/* Filters */}
            <HStack>
              <Heading fontWeight={400}>Filters</Heading>
              <Spacer />
              <Button colorScheme={"red"}>Reset</Button>
            </HStack>
            <br />
            <Text fontWeight={"bold"}>Location</Text>
            <Box p={"1%"} border={"1px solid #FFFF"} borderRadius="10px">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon color="gray.300" />}
                />
                <Input type="tel" border="none" placeholder="Enter Location" />
              </InputGroup>
            </Box>
            <br />
            <Text fontWeight={"bold"}>Price</Text>
            <HStack gap={4}>
              <Box p={"1%"} border={"1px solid #FFFF"} borderRadius="10px">
                <Input type="tel" border="none" placeholder="min" />
              </Box>
              <Box p={"1%"} border={"1px solid #FFFF"} borderRadius="10px">
                <Input type="tel" border="none" placeholder="max" />
              </Box>
            </HStack>
            <br />
            <Text fontWeight={"bold"}>Cities</Text>
            <Box p={"1%"} border={"1px solid #FFFF"} borderRadius="10px">
              <Select
                onChange={(e) => setSelectedValues(e.target.value)}
                border={"none"}
              >
                <option
                  style={{ background: "black", color: "#FFFF" }}
                  value=""
                >
                  Select place
                </option>
                <option
                  style={{ background: "black", color: "#FFFF" }}
                  value="New Delhi"
                >
                  New Delhi
                </option>
                <option
                  style={{ background: "black", color: "#FFFF" }}
                  value="Ghaziabad"
                >
                  Ghaziabad
                </option>
                <option
                  style={{ background: "black", color: "#FFFF" }}
                  value="Greater Noida"
                >
                  Greater Noida
                </option>
                <option
                  style={{ background: "black", color: "#FFFF" }}
                  value="Noida"
                >
                  Noida
                </option>
                <option
                  style={{ background: "black", color: "#FFFF" }}
                  value="Delhi"
                >
                  Delhi
                </option>
              </Select>
            </Box>
          </Stack>
          <Stack minW={"70%"} p="0% 2%">
            <Box color={"#FFFF"}>
              {loading ? (
                <Center>
                  <Img src="https://wtfup.me/assets/loader.gif" />
                </Center>
              ) : error ? (
                <Heading>Something went wrong</Heading>
              ) : (
                data.length > 0 &&
                data.map((elem) => (
                  <>
                    <Flex key={elem.user_id} gap={6} marginBottom="2%">
                      <Box minW={"40%"} bg="#202020">
                        <Text
                          bg={"red.600"}
                          w="fit-content"
                          p={"2% 5%"}
                          borderEndRadius={"50%"}
                          colorScheme={"red"}
                          animation="s"
                        >
                          Free
                        </Text>
                      </Box>
                      <Box minW={"60%"}>
                        <Box>
                          <Text
                            textAlign={"left"}
                            fontWeight={600}
                            fontSize={"25px"}
                          >
                            {elem.gym_name}
                          </Text>
                          <Rating
                            numReviews={elem.total_rating}
                            rating={elem.rating}
                          />
                          <Text>
                            {elem.address2},{elem.address1},{elem.city}
                          </Text>
                        </Box>
                        <HStack>
                          <FaTelegramPlane color="green" />
                          <Text>
                            {(elem.duration / 60).toFixed(2)} minutes away |{" "}
                            {(elem.distance / 100).toFixed(2)} km
                          </Text>
                        </HStack>
                        <br />
                        <br />
                        <br />
                        <Button
                          position={"absolute"}
                          right={20}
                          colorScheme={"red"}
                          borderRadius="none"
                        >
                          Book Now
                        </Button>
                      </Box>
                    </Flex>
                  </>
                ))
              )}
            </Box>
          </Stack>
        </Flex>
      </Box>
      <br />
    </Box>
  );
};

export default Gyms;
