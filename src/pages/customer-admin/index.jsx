import React, { useState, useMemo, useEffect } from 'react';
import { Flex, useDisclosure, Icon } from '@chakra-ui/react';
import TableTop from '../../common/TableTop';
import { FaCog, FaFileExcel } from 'react-icons/fa';
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

  const topTableButtons = [
    { name: '', onClick: onOpen, icon: <FaCog />, asButton: true },
    {
      name: '',
      onClick: onOpen,
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
        buttons: topTableButtons,
      },
    ],
    []
  );

  return (
    <>
      <Flex>
        <TableTop
          onChange={handleInputChange}
          inputObj={tableTopInput}
          title="Customer Admin"
        />
      </Flex>
      <DynamicTable
        totalCount={data?.length}
        columns={columns}
        data={data}
        size="sm"
        title="Customer Admin"
      />
    </>
  );
};

export default Index;
