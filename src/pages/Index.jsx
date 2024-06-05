import { useState } from "react";
import { Box, Container, Flex, Heading, HStack, IconButton, Image, Link, Table, Tbody, Td, Th, Thead, Tr, VStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun, FaTshirt } from "react-icons/fa";
import { motion } from "framer-motion";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [selectedCategory, setSelectedCategory] = useState("Men");

  const categories = ["Men", "Women", "Kids"];
  const products = {
    Men: [
      { name: "T-Shirt", price: "$20", image: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW4lMjB0LXNoaXJ0fGVufDB8fHx8MTcxNzU5NTQ5NHww&ixlib=rb-4.0.3&q=80&w=1080" },
      { name: "Jeans", price: "$40", image: "https://images.unsplash.com/photo-1605192554106-d549b1b975cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtZW4lMjBqZWFuc3xlbnwwfHx8fDE3MTc1OTU0OTR8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    ],
    Women: [
      { name: "Dress", price: "$50", image: "https://images.unsplash.com/photo-1599662875272-64de8289f6d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGRyZXNzfGVufDB8fHx8MTcxNzU5NTQ5NHww&ixlib=rb-4.0.3&q=80&w=1080" },
      { name: "Skirt", price: "$30", image: "https://images.unsplash.com/photo-1653419403196-ab64c4c740c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNraXJ0fGVufDB8fHx8MTcxNzU5NTQ5NXww&ixlib=rb-4.0.3&q=80&w=1080" },
    ],
    Kids: [
      { name: "Kids T-Shirt", price: "$15", image: "https://images.unsplash.com/photo-1484516396415-4971641de8e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraWRzJTIwdC1zaGlydHxlbnwwfHx8fDE3MTc1OTU0OTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
      { name: "Kids Shorts", price: "$20", image: "https://images.unsplash.com/photo-1712432130649-07bdb4caec3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraWRzJTIwc2hvcnRzfGVufDB8fHx8MTcxNzU5NTQ5Nnww&ixlib=rb-4.0.3&q=80&w=1080" },
    ],
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" justify="space-between" align="center" mb={8}>
        <HStack spacing={4}>
          <FaTshirt size="2em" />
          <Heading as="h1" size="lg">
            POLLUX
          </Heading>
        </HStack>
        <HStack spacing={4}>
          {categories.map((category) => (
            <Link key={category} onClick={() => setSelectedCategory(category)} fontWeight={selectedCategory === category ? "bold" : "normal"}>
              {category}
            </Link>
          ))}
          <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
        </HStack>
      </Flex>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Heading as="h2" size="md" mb={4}>
          {selectedCategory} Collection
        </Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Price</Th>
              <Th>Image</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products[selectedCategory].map((product) => (
              <Tr key={product.name}>
                <Td>{product.name}</Td>
                <Td>{product.price}</Td>
                <Td>
                  <Image src={product.image} alt={product.name} boxSize="50px" objectFit="cover" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </motion.div>
    </Container>
  );
};

export default Index;
