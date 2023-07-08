import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  List,
  ListItem,
  Text,
  Select,
  Switch,
  FormLabel,
  FormControl,
  Button,
  Icon
} from '@chakra-ui/react';
import { FaFileExcel, FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { results } from './components/data';
import Table from './components/Table';

const Performance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setShowResults(value.length > 0);
  };

  const handleResultClick = (result) => {
    setSearchTerm(result);
    setShowResults(false);
  };

  const handleSearch = () => {
    setShowTable(true);
  };

  return (
    <>
      <Flex align="center" bg="grey" m={4} p={4} gap={4}>
        <Box>
          <Select defaultValue="customer-performance">
            <option value="customer-performance">Customer Performance</option>
            <option value="sport-performance">Sport Performance</option>
            <option value="customer-volume">Customer Volume</option>
            <option value="graded-wagers">Graded Wagers</option>
          </Select>
        </Box>
        <Box>
          <InputGroup>
            <StyledInputLeftAddon children="Agents" />
            <Input
              type="tel"
              placeholder="Search Accounts..."
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setShowResults(searchTerm.length > 0)}
              onBlur={() => setShowResults(false)}
            />
          </InputGroup>
          {showResults && (
            <List
              position="absolute"
              width="40%"
              backgroundColor="white"
              borderRadius="md"
              boxShadow="md"
              mt={2}
            >
              {results
                .filter((result) =>
                  result.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((result, index) => (
                  <ListItem
                    key={result.name}
                    cursor="pointer"
                    px={4}
                    py={2}
                    _hover={{ background: 'gray.100' }}
                    bg={index % 2 === 0 ? 'white' : 'gray.200'}
                    onClick={() => handleResultClick(result)}
                  >
                    <Text>
                      {result.name} <span>({result.caption})</span>
                    </Text>
                  </ListItem>
                ))}
            </List>
          )}
        </Box>
        <Box>
          <Select defaultValue="all" width="200px">
            <option value="all">All Action</option>
            <option value="sports">Sports only</option>
            <option value="casino">Casino only</option>
            <option value="poker">Poker only</option>
          </Select>
        </Box>
        <Box>
          <Select defaultValue="all" width="200px">
            <option value="all">Group agent</option>
            <option value="sports">Sorting Columns</option>
          </Select>
        </Box>
        <Box>
          <Select defaultValue="today" width="200px">
            <option value="today">Today</option>
            <option value="7">7 days</option>
            <option value="30">30 days</option>
            <option value="90">90 days</option>
          </Select>
        </Box>
        <Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="switch" mr={2}>
              Show Buyouts
            </FormLabel>
            <Switch
              id="switch"
              colorScheme="red"
              size="lg"
              offTrackColor="red"
              onTrackColor="green"
            />
          </FormControl>
        </Box>
      </Flex>
      <Flex p={4} gap={4} bg="grey">
        <Button variant="primary"> + Filters</Button>
        <Icon as={FaFileExcel} ml={2} boxSize={10} color="green" />
        <Box p={4} bg="orange" borderRadius="50px" ml={12} width="50px">
          <FaSearch color="white" size={20} onClick={handleSearch} />
        </Box>
      </Flex>
      {showTable && <Table />}
    </>
  );
};

const StyledInputLeftAddon = styled(InputLeftAddon)`
  border: 1px solid #cbd5e0;
  border-radius: 0px !important;
`;

export default Performance;
