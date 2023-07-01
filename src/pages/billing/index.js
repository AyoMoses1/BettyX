import React from 'react';
import DynamicTable from '../../common/DynamicTable';
import { billingColumns } from './components/helpers';
import { data } from './components/data';


const index = () => {
  return (
    <>
      <DynamicTable
        columns={billingColumns}
        data={data}
        totalCount={data?.length}
        totalPages={0}
        size="sm"
        alignHeader="left"
        alignBody="left"
        variant="striped"
        colorScheme="gray"
      />
    </>
  );
};

export default index;
