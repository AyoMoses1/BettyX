import { useEffect } from 'react';
import { Flex, Button, Box, FormLabel, Heading } from '@chakra-ui/react';
import generateInputs from './DynamicForm';
import underscore from 'underscore';

const TableTop = ({ inputObj, buttons, onChange, title, float }) => {
  const debouncedOnChange = underscore.debounce(onChange, 1000);

  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  const onClick = (buttonName) => {
    buttons?.find((button) => button.name === buttonName)?.onClick();
  };

  return (
    <Flex mb={2} bgColor="gray.50" mt={4} p={3} flexWrap="wrap" align="center" width="100%">
      <Box>{title && <Heading variant="cardHeader">{title}</Heading>}</Box>
      {inputObj.map((input) => (
        <Box
          key={input.name}
          mr={2}
          flexBasis={`${
            inputObj.length > 3 ? '24' : 100 / inputObj.length - 2
          }%`}
        >
          {generateInputs({
            ...input,
            onChange: (value) => {
              if (value?.target) {
                return debouncedOnChange(input?.name, value.target.value);
              } else {
                return debouncedOnChange(input?.name, value);
              }
            },
          })}
        </Box>
      ))}

      {buttons?.map((button) => (
        <Box key={button.name} mx={8}>
          <FormLabel visibility="hidden" mb={0}>
            {button.name}
          </FormLabel>
          <Button
            onClick={() => onClick(button.name)}
            variant="primary"
            leftIcon={button.icon} // Replace `FaIconName` with the desired React Icons component
          >
            {button.name}
          </Button>
        </Box>
      ))}
    </Flex>
  );
};

export default TableTop;
