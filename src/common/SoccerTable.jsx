import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Text,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components'

const SoccerTable = ({away, home}) => {
  return (
    <TableContainer mt={8}>
      <Table variant="striped" colorScheme="gray" size="sm">
        <Tbody>
          <Tr>
            <Td>
              <HStack>
                <Avatar
                  src={`https://assets.b365api.com/images/team/m/${home.image_id}.png`}
                  size="sm"
                />
                <Text>{home?.name}</Text>
              </HStack>
            </Td>
            <Td>
              <Flex justifyContent="space-between" maxW="50%">
                <Text>+190</Text>
                <Text variant="smallBold">02-130</Text>
              </Flex>
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>
              <HStack>
                <Avatar
                  src={`https://assets.b365api.com/images/team/m/${away.image_id}.png`}
                  size="sm"
                />
                <Text>{away?.name}</Text>
              </HStack>
            </Td>
            <Td>
              {' '}
              <Flex justifyContent="space-between" maxW="50%">
                <Text>+190</Text>
                <Text variant="smallBold">02-130</Text>
              </Flex>
            </Td>
            <Td></Td>
          </Tr>
          <Tr>
            <Td>
              <HStack>
                <FaTimes />
                <Text>Draw</Text>
              </HStack>
            </Td>
            <Td>
              <Flex justifyContent="space-between" maxW="50%">
                <Text>+190</Text>
                <Text variant="smallBold">02-130</Text>
              </Flex>
            </Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

const StyledText = styled(Text)`
  font-size: 14px !important;
`;
export default SoccerTable;
