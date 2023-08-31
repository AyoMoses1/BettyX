import {
  Avatar,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
  HStack,
  Button,
  Flex,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { wagerData } from './data';
import WagerHeader from './WagerHeader';

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
        <Flex my={2} justifyContent="space-between" width="100%">
          <HStack>
            <Avatar
              src={`https://assets.b365api.com/images/team/m/${37}.png`}
              size="sm"
            />
            <Text>West Ham</Text>
          </HStack>

          <Input
            type="number"
            value={111.299}
            sx={{ borderRadius: '0px', width: '100px' }}
          />
        </Flex>
        <AccordionPanel pb={4} px={0}>
          {wagerData?.map((item) => (
            <StyledText>
              <StyledSpan>{item?.title} :</StyledSpan>
              {item?.value}
              PST
            </StyledText>
          ))}
        </AccordionPanel>
        <Flex justifyContent="space-between" alignItems="center">
          <Button variant="noBg" color="red" p={0}>Delete</Button>
          <Input
            type="number"
            value={111.299}
            sx={{ borderRadius: '0px', width: '100px' }}
          />
          TO WIN
          <Input
            type="number"
            value={111.299}
            sx={{ borderRadius: '0px', width: '100px' }}
          />
        </Flex>
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
