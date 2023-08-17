import DynamicTable from 'common/DynamicTable/Player';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { data } from './data';
import { columns } from './helpers';
import PageHeader from 'player/components/PageHeader';
import { FaClock } from 'react-icons/fa';
import HeadingTable from 'common/HeadingTable';
import FixturesTable from 'common/FixTuresTable';

const Index = () => {
  const [pageProps, setPageProps] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  return (
    <>
      <PageHeader title="Other Baseball" icon={<FaClock />} />
      <HeadingTable />
      <Box>
        {/* <DynamicTable
          setPageProps={setPageProps}
          pageProps={pageProps}
          totalCount={data?.totalElements}
          columns={columns}
          data={data ?? []}
          totalPages={data?.totalPages}
        /> */}
        <FixturesTable />
      </Box>
    </>
  );
};

export default Index;
