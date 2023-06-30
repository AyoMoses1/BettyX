import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  List,
  ListItem,
  OrderedList,
} from '@chakra-ui/react';
import { accordionObj } from './components/helpers';

function index() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple margin={2}>
      {accordionObj.map((item) => (
        <AccordionItem>
          <h1>
            <AccordionButton
              sx={{ bg: 'white' }}
              _hover={{ bg: 'white'}}
              marginBottom={1}
            >
              <Heading variant="h1" textDecoration="underline">
                {item.header}
              </Heading>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            <OrderedList>
              {item.data.lists.map((list) => (
                <ListItem color="white">{list}</ListItem>
              ))}
            </OrderedList>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default index;
