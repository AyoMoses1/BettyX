import { Box, Container } from '@chakra-ui/react';
import Bar from './components/Bar';
import Form from './components/Form';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPlayerDetails } from './queryHooks';

const CustomerDetails = () => {
  const params = useParams()
  const {data} = useGetPlayerDetails(params.customerId)
  return (
    <Container maxW="100%" bg="gray3">
      <Bar data={data}/>
      <Form data={data}/>
    </Container>
  );
};

export default CustomerDetails;