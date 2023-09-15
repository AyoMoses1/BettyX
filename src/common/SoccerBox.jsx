import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { formatDateAndTime, formatDateAndTimeTwo } from 'pages/customers/utils';
import { AiOutlineInbox } from 'react-icons/ai';
import styled from 'styled-components';
import BetBox from './straight/BetBox';

const SoccerBox = ({ data }) => {
  const { league, home, away, time, odds, sport_id, id } = data;
  const formatTime = formatDateAndTime(time);
  const formatDate = formatDateAndTimeTwo(time);

  if (Object.keys(odds).length !== 0) {
    return (
      <StyledBox my={8}>
        <Header bgColor="black" px={4}>
          <Grid templateColumns="repeat(3, 1fr)">
            <GridItem>
              <Flex justifyContent="space-between">
                <StyledText variant="">{formatDate}</StyledText>
                <StyledText>MAX:</StyledText>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex justifyContent="space-between" ml={8}>
                <StyledText>$1000</StyledText>
                <StyledText>$1000</StyledText>
                <StyledText>$1000</StyledText>
              </Flex>
            </GridItem>
            <GridItem textAlign="center">
              <StyledText>$1000</StyledText>
            </GridItem>
          </Grid>
        </Header>
        <Body bgColor="white" color="black" p={4}>
          <Title>
            <span style={{ color: 'green' }}>{formatTime}</span> -{' '}
            {league?.name}
          </Title>
          <BetBox
            away={away}
            home={home}
            odds={odds}
            sportId={sport_id}
            eventId={id}
            gameInfo={{
              time: formatTime,
              league: league?.name,
              date: formatDate,
            }}
          />
        </Body>
      </StyledBox>
    );
  }
};

export default SoccerBox;

const StyledBox = styled(Box)`
  color: white;
`;
const Header = styled(Box)``;
const Body = styled(Box)``;
const Row = styled(Box)``;
const Title = styled(Heading)`
  font-size: 14px !important;
`;

const StyledText = styled(Text)`
  font-size: 14px !important;
`;
