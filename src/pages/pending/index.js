import React, { useState, useMemo, useContext } from 'react';
import { HStack, Image, Text, useDisclosure } from '@chakra-ui/react';
import TableTop from '../../common/TableTop';
import { FaSearch, FaCog, FaTimes } from 'react-icons/fa';
import DynamicTable from '../../common/DynamicTable';
import {
  // data,
  selectAmount,
  selectDates,
  selectTypes,
} from './helpers';
import { CurrentPageContext } from '../../App';
import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import { useGetAllBets } from './queryHooks';

const Index = () => {
  const [topInputObj, setTopInputObj] = useState({ state: '', query: '' });
  const { data } = useGetAllBets();

  const { onOpen } = useDisclosure();
  const { setCurrentPage } = useContext(CurrentPageContext);
  const columnHelper = createColumnHelper();

  const handleInputChange = (name, value) => {
    setTopInputObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Create a custom accessor function that accepts multiple properties
  const customAccessor = (properties) => {
    const betType = properties.betType;
    const teams = properties.games;
    console.log({ teams });
    return (
      <div>
        <Text variant="tableText" sx={{ color: 'green', fontWeight: 'bold' }}>
          {betType}
        </Text>
        <ul style={{ paddingLeft: '20px' }}>
          {teams.map((team, index) => (
            <HStack key={index}>
              <Image src={team.logo} sx={{ width: '20px' }} />
              <Text variant="tableText" fontSize={12}>
                {team.name}
              </Text>
            </HStack>
          ))}
        </ul>
      </div>
    );
  };

  const columns = [
    columnHelper.accessor('user', {
      header: 'Agent',
      cell: (info) => {
        const value = info.getValue();
        return (
          <Link
            style={{ color: 'blue', textDecoration: 'underline' }}
            onClick={() => setCurrentPage('customer-details')}
          >
            {value?.agentId}
          </Link>
        );
      },
    }),
    columnHelper.accessor('user', {
      header: 'Customer',
      cell: (info) => {
        const value = info.getValue();
        return (
          <Link
            style={{ color: 'blue', textDecoration: 'underline' }}
            onClick={() => setCurrentPage('customer-details')}
          >
            {value?.accountId}
          </Link>
        );
      },
    }),
    columnHelper.accessor('user', {
      header: 'Password',
      cell: (info) => info.getValue()?.password,
    }),
    columnHelper.accessor('createdAt', {
      header: 'Accepted(PST)',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor((row) => row, {
      header: 'Description',
      cell: (info) => {
        const { betType, games } = info.row.original;
        const value = customAccessor({ betType, games });
        return value;
      },
    }),

    columnHelper.accessor('stake', {
      header: 'Risk',
      cell: (info) => {
        const value = info.getValue();
        const textColor = 'red';
        return <span style={{ color: textColor }}>${value}</span>;
      },
    }),
    columnHelper.accessor('toWin', {
      header: 'To Win',
      cell: (info) => {
        const value = info.getValue();
        const textColor = 'green';
        return <span style={{ color: textColor }}>${value}</span>;
      },
    }),
    columnHelper.accessor('action', {
      header: '',
      cell: (info) => {
        return <FaTimes color="red" />;
      },
    }),
  ];

  const tableTopInput = useMemo(
    () => [
      {
        name: 'Agents',
        label: '',
        placeholder: 'Search',
        type: 'text',
      },
      {
        name: 'Players',
        label: '',
        placeholder: 'Search',
        type: 'text',
      },
      {
        name: 'time',
        label: 'Time',
        type: 'select',
        options: selectDates.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
      {
        name: 'type',
        label: 'Type',
        type: 'select',
        options: selectTypes.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
      {
        name: 'amount',
        label: 'Amount',
        type: 'select',
        options: selectAmount.map((item) => ({
          value: item.value,
          name: item.name,
        })),
      },
    ],
    []
  );

  const topTableButtons = [
    { name: 'Search', onClick: onOpen, icon: <FaSearch /> },
    { name: 'Settings', onClick: onOpen, icon: <FaCog /> },
  ];

  return (
    <>
      <TableTop
        onChange={handleInputChange}
        inputObj={tableTopInput}
        buttons={topTableButtons}
      />
      <DynamicTable
        totalCount={data?.length}
        columns={columns}
        data={data ?? []}
        size="sm"
        variant="striped"
        colorScheme="gray"
      />
    </>
  );
};

export default Index;
