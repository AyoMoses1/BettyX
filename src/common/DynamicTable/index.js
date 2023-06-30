/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useColorMode,
} from "@chakra-ui/react";
import Pagination from "./Pagination";
import Loading from "../../common/Loading";

const Index = ({
  columns,
  data,
  hidePagination,
  totalCount,
  setPageProps,
  pageProps,
  totalPages,
  isLoading
}) => {
  const { colorMode } = useColorMode();
  const pagination = useMemo(
    () => ({
      pageIndex: pageProps?.pageIndex ?? 0,
      pageSize: pageProps?.pageSize ?? 10,
    }),
    [pageProps?.pageIndex, pageProps?.pageSize]
  );
  const table = useReactTable({
    data,
    columns,
    pageCount: totalPages ?? -1,
    state: {
      pagination,
    },
    onPaginationChange: setPageProps,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    debugTable: true,
  });


  const tableHeadRows = table.getHeaderGroups().map((headerGroup) => (
    <Tr key={headerGroup.id}>
      {headerGroup.headers.map((header) => (
        <Th
          key={header.id}
          layerStyle="dark"
          textAlign="center"
          style={{ wordBreak: "keep-all", color:"white" }}
          background="tableHeader"
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </Th>
      ))}
    </Tr>
  ));

  const tableBodyRows = table.getRowModel().rows.map((row) => (
    <Tr key={row.id}>
      {row.getVisibleCells().map((cell, index, cells) => {
        if(flexRender(cell.column.columnDef.cell, cell.getContext()) === "-108.35"){

        }
        // let borderRight = index < cells.length - 1 ? "1px" : "0px";
        // let cellValue = flexRender(cell.column.columnDef.cell, cell.getContext());
        // let textColor = ""; // Define an empty string for the text color      
        // if(index !== 0 || index!==1 || index!==2){
        //   if (String(cellValue).startsWith("+")) {
        //     textColor = "green"; // Apply green color for values starting with "+"
        //   }
        //   else {
        //     textColor = "red"
        //   }
        // }
        

        return (
          <Td
            key={cell.id}
            width="auto"
            textAlign="center"
            style={{ wordBreak: "break-all", fontSize:"12px" }}
            overflowY="auto"
          >
             {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </Td>
        );
      })}
    </Tr>
  ));

  return (
    <TableContainer width="100%">
       {isLoading && <Loading text="loading data" />}
      <Table variant='striped' colorScheme='red'>
        <Thead backgroundColor={colorMode === "dark" ? "black" : "#F0F2F5"}>
          {tableHeadRows}
        </Thead>
        <Tbody>{tableBodyRows}</Tbody>
      </Table>
      {/* {!hidePagination && (
        <Pagination
          previousPage={table.previousPage}
          nextPage={table.nextPage}
          gotoPage={table.setPageIndex}
          canPreviousPage={table.getCanPreviousPage()}
          canNextPage={table.getCanNextPage()}
          page={table.getPageCount()}
          totalCount={totalCount ?? 0}
          pageSize={table.getState().pagination.pageSize}
          setPageSize={table.setPageSize}
          pageIndex={table.getState().pagination.pageIndex}
          pageCount={totalPages ?? 0}
        />
      )} */}
    </TableContainer>
  );
};

export default Index;
