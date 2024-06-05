import { HStack, Link, IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun, FaTshirt } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack as="nav" justify="space-between" align="center" p={4} mb={8}>
      <HStack spacing={4}>
        <FaTshirt size="2em" />
        <Link href="/" fontWeight="bold" fontSize="lg">
          POLLUX
        </Link>
      </HStack>
      <HStack spacing={4}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </HStack>
    </HStack>
  );
};

export default Navbar;
