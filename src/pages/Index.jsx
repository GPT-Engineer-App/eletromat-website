import React, { useState } from "react";
import { Container, Box, Text, VStack, HStack, Button, Input, Table, Thead, Tbody, Tr, Th, Td, IconButton, useToast } from "@chakra-ui/react";
import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newProduct, setNewProduct] = useState("");
  const [newCustomer, setNewCustomer] = useState("");
  const [newOrder, setNewOrder] = useState("");
  const toast = useToast();

  const handleAddProduct = () => {
    if (newProduct) {
      setProducts([...products, newProduct]);
      setNewProduct("");
      toast({ title: "Product added.", status: "success", duration: 2000, isClosable: true });
    }
  };

  const handleAddCustomer = () => {
    if (newCustomer) {
      setCustomers([...customers, newCustomer]);
      setNewCustomer("");
      toast({ title: "Customer added.", status: "success", duration: 2000, isClosable: true });
    }
  };

  const handleAddOrder = () => {
    if (newOrder) {
      setOrders([...orders, newOrder]);
      setNewOrder("");
      toast({ title: "Order added.", status: "success", duration: 2000, isClosable: true });
    }
  };

  const handleDelete = (type, index) => {
    if (type === "product") {
      setProducts(products.filter((_, i) => i !== index));
    } else if (type === "customer") {
      setCustomers(customers.filter((_, i) => i !== index));
    } else if (type === "order") {
      setOrders(orders.filter((_, i) => i !== index));
    }
    toast({ title: `${type.charAt(0).toUpperCase() + type.slice(1)} deleted.`, status: "error", duration: 2000, isClosable: true });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Text fontSize="4xl" fontWeight="bold">
          Eletromat
        </Text>

        <Box w="100%">
          <Text fontSize="2xl" mb={4}>
            Product Management
          </Text>
          <HStack mb={4}>
            <Input placeholder="New Product" value={newProduct} onChange={(e) => setNewProduct(e.target.value)} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddProduct}>
              Add Product
            </Button>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product, index) => (
                <Tr key={index}>
                  <Td>{product}</Td>
                  <Td>
                    <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
                    <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" onClick={() => handleDelete("product", index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box w="100%">
          <Text fontSize="2xl" mb={4}>
            Customer Management
          </Text>
          <HStack mb={4}>
            <Input placeholder="New Customer" value={newCustomer} onChange={(e) => setNewCustomer(e.target.value)} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddCustomer}>
              Add Customer
            </Button>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Customer</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers.map((customer, index) => (
                <Tr key={index}>
                  <Td>{customer}</Td>
                  <Td>
                    <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
                    <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" onClick={() => handleDelete("customer", index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box w="100%">
          <Text fontSize="2xl" mb={4}>
            Order Management
          </Text>
          <HStack mb={4}>
            <Input placeholder="New Order" value={newOrder} onChange={(e) => setNewOrder(e.target.value)} />
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddOrder}>
              Add Order
            </Button>
          </HStack>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order, index) => (
                <Tr key={index}>
                  <Td>{order}</Td>
                  <Td>
                    <IconButton aria-label="Edit" icon={<FaEdit />} mr={2} />
                    <IconButton aria-label="Delete" icon={<FaTrash />} colorScheme="red" onClick={() => handleDelete("order", index)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
