import {
  Grid,
  GridItem,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  HStack,
} from '@chakra-ui/react';
import styled from 'styled-components';
import WagerHeader from './WagerHeader';
const wagerData = [
  {
    title: 'Scheduled',
    value: 'September 1, 2023 12:00 PM PST',
  },
  {
    title: 'Selection',
    value: '200121 - Spread',
  },
  {
    title: 'Game Notes',
    value: 'English Premier League',
  },
];

const FootballMatchesGrid = () => {
  return (
    <Accordion allowToggle p={0}>
      <WagerHeader />
      <AccordionItem>
        <h2>
          <AccordionButton
            display="flex"
            justifyContent="space-between"
            bg="blue"
            color="white"
            _hover={{ background: 'blue' }}
          >
            <Box>
              <Text variant="nav">ENGLISH PREMIER LEAGUE</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {wagerData.map((item) => (
            <StyledText>
              <StyledSpan>{item?.title} :</StyledSpan>
              {item?.value}
              PST
            </StyledText>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

const StyledSpan = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledText = styled(Text)`
  font-size: 12px !important;
  text-transform: uppercase;import wagerHeader from './WagerHeader';

`;

export default FootballMatchesGrid;
