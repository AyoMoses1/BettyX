import React from 'react';
import { Container, Grid } from '@chakra-ui/react';
import GridBar from './components/GridBar';

const data = [
  { title: 'My Balance', value: '+$24' },
  { title: 'Week', value: '$-3,858' },
  { title: 'Today', value: '$7' },
  { title: 'Active Accts', value: '84' },
];

const index = () => {
  return (
    <Container maxW="100%" my={4}>
      <Grid templateColumns="1fr 1fr" gap={4} sx={{ width: '100%' }}>
        {data.map((item, idx) => (
          <GridBar span={idx === 0 ? 2 : 1} key={item.title} data={item}/>
        ))}
      </Grid>
    </Container>
  );
};

export default index;
