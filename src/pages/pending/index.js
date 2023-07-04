import React, { useState, useMemo, useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import TableTop from '../../common/TableTop';
import { FaSearch, FaCog } from 'react-icons/fa';
import DynamicTable from '../../common/DynamicTable';
import {
  columns,
  data,
  selectAmount,
  selectDates,
  selectTypes,
} from './helpers';

const Index = () => {
  const [topInputObj, setTopInputObj] = useState({ state: '', query: '' });
  const { onOpen, onClose } = useDisclosure();

  const handleInputChange = (name, value) => {
    setTopInputObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

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
        data={data}
        size="sm"
        variant="striped"
        colorScheme="gray"
      />
    </>
  );
};

export default Index;
