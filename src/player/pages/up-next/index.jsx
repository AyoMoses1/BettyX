import DynamicTable from "common/DynamicTable";
import { Box, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import { data } from "./data";
import { columns } from "./helpers";
import PageHeader from "player/components/PageHeader";
import { FaClock } from "react-icons/fa";
import HeadingTable from "common/HeadingTable";

const Index = () => {
  const [pageProps, setPageProps] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  return (
    <>
      <PageHeader title="Up Next" icon={<FaClock />} />
      <HeadingTable />
      <Box mt={8}>
        <DynamicTable
          setPageProps={setPageProps}
          pageProps={pageProps}
          totalCount={data?.totalElements}
          columns={columns}
          data={data ?? []}
          totalPages={data?.totalPages}
        />
      </Box>
    </>
  );
};

export default Index;
