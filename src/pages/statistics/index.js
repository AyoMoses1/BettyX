import React, { useState } from 'react';
import DynamicTable from '../../common/DynamicTable';
import { summaryColumns } from './components/helpers';
import { summary as data } from './components/data';

const Index = (props) => {
  return (
    <>
      <DynamicTable
        columns={summaryColumns}
        data={data}
        totalCount={data?.length}
        totalPages={0}
      />
      <DynamicTable
        columns={summaryColumns}
        data={data}
        totalCount={data?.length}
        totalPages={0}
      />
    </>
  );
};

export default Index;
