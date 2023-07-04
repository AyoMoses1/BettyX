import React, { useState, useMemo, useEffect } from 'react';
import {
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  Box,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import { createColumnHelper, ColumnDef } from '@tanstack/react-table';
import TableTop from '../../common/TableTop';
import DynamicTable from '../../common/DynamicTable';
import { Info } from '../../common/Info';
import { columns, data } from './helpers';
import statesInNigeria from "../../utils/statesInNig";

const Index = () => {
  const [topInputObj, setTopInputObj] = useState({ state: '', query: '' });

  const handleInputChange = (name, value) => {
    setTopInputObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const tableTopInput = useMemo(
    () => [
      {
        name: 'query',
        label: '',
        placeholder: 'Search by name,email or phone number',
        type: 'text',
      },

      {
        name: 'state',
        label: '',
        type: 'select',
        options: statesInNigeria.map((item) => ({ value: item, name: item })),
      },

      {
        name: 'date',
        label: '',
        placeholder: 'Search by date',
        type: 'date',
      },
    ],
    []
  );

  return (
    <>
      <Info>View all customers assigned to you and manage them</Info>

      <Flex mb={4} p={3} justifyContent="flex-end" alignItems="center"></Flex>
      <TableTop
        onChange={handleInputChange}
        inputObj={tableTopInput}
        // buttons={topTableButtons}
      />
      <DynamicTable
        totalCount={data?.length}
        columns={columns}
        data={data}
        size="sm"
      />
    </>
  );
};

export default Index;
