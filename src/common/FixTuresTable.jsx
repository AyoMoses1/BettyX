import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const FixturesTable = () => {
  const fixtures = [
    {
      date: '2023-08-20',
      homeTeam: 'Manchester United',
      awayTeam: 'Liverpool',
      venue: 'Old Trafford',
    },
    {
      date: '2023-08-21',
      homeTeam: 'Chelsea',
      awayTeam: 'Manchester City',
      venue: 'Stamford Bridge',
    },
    {
      date: '2023-08-21',
      homeTeam: 'Chelsea',
      awayTeam: 'Manchester City',
      venue: 'Stamford Bridge',
    },
    {
      date: '2023-08-21',
      homeTeam: 'Chelsea',
      awayTeam: 'Manchester City',
      venue: 'Stamford Bridge',
    },
    {
      date: '2023-08-21',
      homeTeam: 'Chelsea',
      awayTeam: 'Manchester City',
      venue: 'Stamford Bridge',
    },
    // Add more fixtures as needed
  ];

  return (
    <Table variant="striped" colorScheme="red">
      <Thead>
        <Tr>
          <Th color="white">Date</Th>
          <Th color="white">Home Team</Th>
          <Th>Away Team</Th>
          <Th>Venue</Th>
        </Tr>
      </Thead>
      <Tbody>
        {fixtures.map((fixture, index) => (
          <Tr key={index}>
            <Td>{fixture.date}</Td>
            <Td>{fixture.homeTeam}</Td>
            <Td>{fixture.awayTeam}</Td>
            <Td>{fixture.venue}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default FixturesTable;
