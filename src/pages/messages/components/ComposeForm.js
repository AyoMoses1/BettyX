import React from 'react';
import {
  Box,
  Flex,
  Button,
  Text,
  InputGroup,
  InputLeftAddon,
  Switch,
  IconButton,
  Textarea,
  Input,
  Select,
} from '@chakra-ui/react';
import { Spacer } from '@chakra-ui/react';
import { FaPrint } from 'react-icons/fa';

const InboxView = () => {
  return (
    <>
      <Box px={6} sx={{ borderBottom: '2px solid #dfdfdf' }} paddingBottom={8}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text textTransform="uppercase">Compose your message</Text>
        </Flex>
      </Box>
      <Box mt={4}>
        <Flex align="center" p={2}>
          <Box flex="1">
            <InputGroup>
              <InputLeftAddon
                children="Search Accounts"
                border="1px"
                borderRadius="none"
              />
              <Input
                type="tel"
                placeholder="Search accounts..."
                borderRadius="none"
              />
            </InputGroup>
          </Box>
          <Spacer />
          <Box mx={2}>
            <Select
              placeholder="Specific Account(S)"
              border="1px solid #dfdfdf"
            >
              <option value="option1">All players</option>
              <option value="option2">All agents</option>
              <option value="option3">All players and agents</option>
              <option value="option3">Specific Account(S)</option>
              <option value="option3">Customer Service</option>
              <option value="option3">My Agents</option>
            </Select>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Input type="email" placeholder="To" variant="borderless" />
        <Input
          placeholder="Subject"
          mb={2}
          variant="borderless"
          sx={{ borderBottom: '1px solid #dfdfdf', borderRadius: 'none' }}
        />
        <Textarea
          placeholder="Compose your email"
          mb={2}
          resize="vertical"
          minH="200px"
        />
        <Box mb={4}>
          <Switch
            colorScheme="red"
            size="md"
            offTrackColor="green"
            onTrackColor="red"
          />
        </Box>
        <Flex justifyContent="space-between" alignItems="center" mb={2}>
          <Button color="white" bg="red">
            Cancel
          </Button>
          <Button bg="green" color="white">
            Send
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default InboxView;
