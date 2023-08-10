import { Container, Grid } from '@chakra-ui/react';
import GridBar from './components/GridBar';
import GridBox from './components/GridBox';
import { pathObject } from '../../common/Paths';
import { useState } from 'react';
import { useEffect } from 'react';

const data = [
  { title: 'My Balance', value: '+$24' },
  { title: 'Week', value: '$-3,858' },
  { title: 'Today', value: '+$114' },
  { title: 'Active Accts', value: '84' },
];

const determineAllowedRolesForPath = (pathObj) => {
  return pathObj.allowedRoles || [];
};

const Index = () => {

  const [filteredPaths, setFilteredPaths] = useState([]);

  useEffect(() => {
    const role = localStorage.getItem('user_role');

    const filtered = pathObject.filter((path) => {
      const allowedRoles = determineAllowedRolesForPath(path);
      return allowedRoles.includes(role?.toLowerCase());
    });

    setFilteredPaths(filtered);
  }, []);

  return (
    <Container maxW="100%" my={4}>
      <Grid templateColumns="1fr 1fr" gap={4} sx={{ width: '100%' }}>
        {data.map((item, idx) => (
          <GridBar span={idx === 0 ? 2 : 1} key={item.title} data={item} />
        ))}
      </Grid>
      <Grid templateColumns="repeat(6, 1fr)" gap={1} mt={4}>
        {filteredPaths.map((item) => (
          <GridBox key={item.route} data={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Index;
