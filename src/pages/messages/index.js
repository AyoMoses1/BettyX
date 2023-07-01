import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Grid,
  GridItem,
  Button,
} from '@chakra-ui/react';
import { FiEdit, FiInbox, FiSend } from 'react-icons/fi';
import ComposeForm from './components/ComposeForm';
import InboxView from './components/InboxView';
import SentView from './components/SentView';
import { MdMailOutline } from 'react-icons/md';

const MessagingComponent = () => {
  return (
    <Tabs isLazy orientation="vertical" defaultIndex={0} variant='unstyled'>
      <Grid templateColumns="repeat(6, 1fr)" width="100%" p={4}>
        <GridItem colSpan={2}>
          <TabList sx={{ borderRight: '2px solid #dfdfdf' }}>
            <Tab sx={{ borderBottom: '2px solid #dfdfdf' }} mb={8}>
              <Button
                variant="secondary"
                w="100%"
                leftIcon={<MdMailOutline size={36} />}
              >
                Compose
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="noBg"
                w="100%"
                display="flex"
                justifyContent="start"
                leftIcon={<FiInbox size={36} />}
              >
                INBOX
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="primary"
                w="100%"
                leftIcon={<FiSend size={36} />}
                display="flex"
                justifyContent="start"
              >
                SENT
              </Button>
            </Tab>
          </TabList>
        </GridItem>
        <GridItem colSpan={4}>
          <TabPanels>
            <TabPanel>
              <ComposeForm />
            </TabPanel>
            <TabPanel>
              <InboxView />
            </TabPanel>
            <TabPanel>
              <SentView />
            </TabPanel>
          </TabPanels>
        </GridItem>
      </Grid>
    </Tabs>
  );
};

export default MessagingComponent;
