import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const tHeading = [
  {
    name: "spread",
  },
  {
    name: "money line",
  },
  {
    name: "total",
  },
  {
    name: "team total",
  },
];

const tBody = [
  {
    value: "TUESDAY, JUN 13",
  },
  {
    value: "$200",
  },
  {
    value: "$50",
  },
  {
    value: "$100",
  },
  {
    value: "$100",
  },
];

const HeadingTable = () => {
  return (
    <TableContainer>
      <Table size="md" variant="simple">
        <Thead>
          <Tr>
            <Th></Th>
            {tHeading.map((item) => (
              <Th color="white">{item.name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody bg="black">
          <Tr>
            {tBody.map((item)=> (
              <Td color="white">{item.value}</Td>
            ))}
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default HeadingTable;
