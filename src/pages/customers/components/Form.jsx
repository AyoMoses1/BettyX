import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  Select,
  Input,
  Flex,
  Switch,
  InputLeftAddon,
  InputGroup,
  Text,
  Divider,
  Textarea,
  HStack,
  Heading,
  Button,
} from '@chakra-ui/react';
import { caption, formSwitchTwo } from '../helpers';
import styled from 'styled-components';
import { useState } from 'react';
import useForm from '../useForm';
import { useUpdatePlayer } from '../queryHooks';

const MyForm = ({ data }) => {
  const { formData, formDataTwo, formSwitch, handleChange, state } = useForm();
  const {mutate, isLoading} = useUpdatePlayer()

  const handleSubmit = () => {
    mutate({ ...state, accountId: data.accountId });
  };

  return (
    <Box margin="auto" mt={1}>
      <form>
        <Box bg="blue" mt={4} px={4} py={2}>
          <Flex align="center" justify="space-between">
            <Box>
              <HStack>
                <Heading variant="h1" color="#fff">
                  {' '}
                  The Basics{' '}
                </Heading>
              </HStack>
            </Box>
            <Box>
              <Button variant="primary" size="xs" px={8} onClick={handleSubmit}>
                Save
              </Button>
            </Box>
          </Flex>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={4} py={8}>
          <GridItem colSpan={[3, 1]} bg="white" p={4}>
            {formData.map((item, idx) => (
              <FormControl mb={3} key={idx}>
                <FormLabel htmlFor={item.name} mb={0}>
                  {item.label}
                </FormLabel>
                <Input
                  name={item.name}
                  value={item.value}
                  variant="unstyled"
                  border="none"
                  borderBottom="1px solid gray"
                  onChange={(e) => handleChange(e, "input")}
                  _focus={{ borderBottomColor: 'turquoise' }}
                  size="sm"
                />
              </FormControl>
            ))}
            {formSwitch.map((item, idx) => (
              <Box mb={2} key={idx}>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormLabel htmlFor="switch" mb={0} mr={2}>
                    {item.label}
                  </FormLabel>
                  <Switch
                    id="switch"
                    name={item.name}
                    isChecked={item.isChecked}
                    colorScheme="whatsapp"
                    onChange={(e) => handleChange(e, 'switch')}
                  />
                </FormControl>
              </Box>
            ))}
          </GridItem>
          <GridItem colSpan={[3, 1]} bg="white" p={4}>
            {formDataTwo.map((item, idx) => (
              <FormControl mb={3} key={idx}>
                <FormLabel htmlFor={item.name} mb={0}>
                  {item.label}
                </FormLabel>
                <Input
                  value={item.value}
                  variant="unstyled"
                  border="none"
                  borderBottom="1px solid gray"
                  _focus={{ borderBottomColor: 'turquoise' }}
                  placeholder="Here is a sample placeholder"
                  size="sm"
                />
              </FormControl>
            ))}
          </GridItem>
          <GridItem colSpan={[3, 1]} bg="white" p={4}>
            <Text variant="cardText">Confirmation Delay</Text>
            <Divider />
            {formSwitchTwo.map((item) => (
              <Box mb={2}>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormLabel htmlFor="switch" mb={0} mr={2}>
                    {item.label}
                  </FormLabel>
                  <Switch
                    id="switch"
                    defaultChecked={item.isChecked}
                    colorScheme="whatsapp"
                  />
                </FormControl>
              </Box>
            ))}
            <Textarea
              variant="unstyled"
              borderBottom="1px solid gray"
              _focus={{ borderBottomColor: 'turquoise' }}
              placeholder="Player notes"
              size="md"
            />
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

export default MyForm;
