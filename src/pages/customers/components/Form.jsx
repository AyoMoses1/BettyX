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
} from '@chakra-ui/react';
import { caption, formData, formSwitch } from '../helpers';
import styled from 'styled-components';
import { useState } from 'react';

const MyForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box margin="auto" p={8} bg="blue" color="white" mt={1}>
        <form>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} p={8}>
            <GridItem colSpan={3}>
              <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                {formData.map((item) => (
                  <GridItem colSpan={1}>
                    <FormControl mb={3} key={item.name}>
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
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
            <GridItem colSpan={1} justifySelf="end">
              {formSwitch.map((item) => (
                <Box mb={8}>
                  <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="switch" mb={0} mr={2}>
                      {item.label}
                    </FormLabel>
                    <Flex alignItems="center">
                      <Switch
                        id="switch"
                        defaultChecked={item.isChecked}
                        colorScheme="whatsapp"
                      />
                    </Flex>
                  </FormControl>
                </Box>
              ))}
            </GridItem>
          </Grid>
        </form>
    </Box>
  );
};

export default MyForm;

const StyledBox = styled(Box)`
  color: red;
  text-align: center;
  border: 2px solid red;
  font-style: italic;
`;

const StyledInputLeftAddon = styled(InputLeftAddon)`
  border: 1px solid #cbd5e0 !important;
  border-radius: 0px !important;
`;
