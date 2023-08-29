import React, { useState, useMemo, useContext } from 'react';
import { Flex, useDisclosure, Icon, Box, Button } from '@chakra-ui/react';
import TableTop from '../../common/TableTop';
import { FaCog, FaFileExcel } from 'react-icons/fa';
import DynamicTable from '../../common/DynamicTable';
import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { CurrentPageContext } from '../../App';
import Modal from '../../common/Modal';
import EditForm from './components/EditForm';
import { useGetAllPlayers, useGetAllAgentsWithPlayers } from './queryHooks';
import { callApi } from 'pages/customers/utils';
import { useEffect } from 'react';

const Index = () => {
  const [topInputObj, setTopInputObj] = useState({ state: '', query: '' });
  const { setCurrentPage } = useContext(CurrentPageContext);
  const columnHelper = createColumnHelper();
  const { data, isLoading } = useGetAllAgentsWithPlayers();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleInputChange = (name, value) => {
    setTopInputObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const topTableButtons = [
    { name: '', icon: <FaCog />, asButton: true },
    {
      name: '',
      icon: <Icon as={FaFileExcel} ml={2} boxSize={10} color="green" />,
      asButton: false,
    },
  ];

  const tableTopInput = useMemo(
    () => [
      {
        name: 'Agents',
        label: '',
        placeholder: 'Search accounts...',
        type: 'text',
        float: true,
        buttons: topTableButtons,
      },
    ],
    []
  );


  const columns = [
    columnHelper.accessor('accountId', {
      header: 'Player',
      cell: (info) => {
        const value = info.getValue();
        return (
          <Link
            style={{ color: 'blue', textDecoration: 'underline' }}
            to={`/customers/${info.getValue()}`}
          >
            {value}
          </Link>
        );
      },
    }),
    columnHelper.accessor('password', {
      header: 'Password',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('creditLimit', {
      header: 'Credit Limit',
      cell: (info) => `$${info.getValue()}`,
    }),
    columnHelper.accessor('wagerLimit', {
      header: 'Wager Limit',
      cell: (info) => `$${info.getValue()}`,
    }),
    columnHelper.accessor('balance', {
      header: 'Balance',
      cell: (info) => `$${info.getValue()}`,
    }),
    columnHelper.accessor('parlayMaxWager', {
      header: 'P. Max Bet',
      cell: (info) => `$${info.getValue()}`,
    }),
    columnHelper.accessor('teaserMaxWager', {
      header: 'T. Max Bet',
      cell: (info) => `$${info.getValue()}`,
    }),
    columnHelper.accessor('accountStatus', {
      header: 'Status',
      cell: (info) => {
        const value = info.getValue();
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      },
    }),
    columnHelper.accessor('sportbook', {
      header: 'Sports Book',
      cell: (info) => {
        const value = info.getValue();
        return (
          <Box
            sx={{
              width: '20px',
              height: '20px',
              bgColor: value ? 'green' : 'red',
            }}
          ></Box>
        );
      },
    }),
    columnHelper.accessor('horses', {
      header: 'Horses',
      cell: (info) => {
        const value = info.getValue();
        return (
          <Box
            sx={{
              width: '20px',
              height: '20px',
              bgColor: value ? 'green' : 'red',
            }}
          ></Box>
        );
      },
    }),
    columnHelper.accessor('casino', {
      header: 'Casino',
      cell: (info) => {
        const value = info.getValue();
        return (
          <Box
            sx={{
              width: '20px',
              height: '20px',
              bgColor: value ? 'green' : 'red',
            }}
          ></Box>
        );
      },
    }),
    columnHelper.accessor('action', {
      header: '',
      cell: () => (
        <Button
          bgColor="blue"
          color="white"
          onClick={() => onOpen()}
          size={['sm', 'md']}
        >
          Edit
        </Button>
      ),
    }),
  ];

  return (
    <>
      <Flex>
        <TableTop
          onChange={handleInputChange}
          inputObj={tableTopInput}
          title="Customer Admin"
        />
      </Flex>
      {localStorage.user_role !== 'agent' ? (
        data?.map((item, idx) => (
          <Box key={idx}>
            <Box bgColor="blue" color="white" my={8}>
              {item.agent}
            </Box>
            <DynamicTable
              totalCount={item?.players?.length}
              columns={columns}
              data={item.players || []}
              size="sm"
              title="Customer Admin"
            />
          </Box>
        ))
      ) : (
        <Box>
          <Box bgColor="blue" color="white" my={8}>
            {localStorage.accountId}
          </Box>
          <DynamicTable
            totalCount={data?.players?.length}
            columns={columns}
            data={data?.players || []}
            size="sm"
            title="Customer Admin"
          />
        </Box>
      )}
      <Modal isOpen={isOpen} onClose={onClose} size={['md', '6xl']}>
        <EditForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default Index;
