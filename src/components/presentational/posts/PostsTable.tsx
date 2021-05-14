import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { PostType } from "../../../types";

interface CustomTableProps {
  headers: string[];
  data: PostType[];
  handleEdit: (item: PostType) => void;
}

const parseDate = (data: any) => {
  return new Date(Number(data)).toLocaleDateString();
};

const CustomTable: React.FC<CustomTableProps> = ({
  headers,
  data,
  handleEdit,
}) => {
  return (
    <>
      {data.length ? (
        <Table size="sm">
          <TableCaption>Posts Data</TableCaption>
          <Thead>
            <Tr>
              {headers.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={item.id}>
                <Td>{item?.title || "N/A"}</Td>
                <Td>{parseDate(item.createdAt)}</Td>
                <Td>
                  <Button
                    onClick={() => handleEdit(item)}
                    backgroundColor="#8BAAAD"
                    size="sm"
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>

          <Tfoot>
            <Tr>
              <Th py="1rem">
                <Button
                  backgroundColor="#4D4847"
                  onClick={() => true}
                  color="#fff"
                >
                  Prev Page
                </Button>
              </Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th></Th>
              <Th py="1rem">
                <Button
                  backgroundColor="#4D4847"
                  onClick={() => false}
                  color="#fff"
                >
                  Next Page
                </Button>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      ) : (
        <Flex justifyContent="center" py="2rem">
          <Spinner
            thickness="4px"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}
    </>
  );
};

export default CustomTable;
