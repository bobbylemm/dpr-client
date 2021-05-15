import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuList,
  MenuItem,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";

interface NavbarProps {
  logout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ logout }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const logoutFn = async () => {
    logout();
    history.push("/login");
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: !isOpen ? "none" : "inherit" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Text fontSize="2rem" fontWeight="800" color="#ADC698">
            Postss
          </Text>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link to="/posts">All Posts</Link>
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Button
            backgroundColor="#C05746"
            size={"sm"}
            mr={4}
            leftIcon={<AddIcon />}
            onClick={logoutFn}
          >
            Logout
          </Button>
          <Menu>
            <MenuList>
              <MenuItem>All orders</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4}>
          <Stack as={"nav"} spacing={4}>
            <Link to="/orders">All Orders</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
