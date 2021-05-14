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
  return new Date(data).toLocaleDateString();
};

const CustomTable: React.FC<CustomTableProps> = ({
  headers,
  data,
  handleEdit,
}) => {
  return (
    <>
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
      </Table>
    </>
  );
};

export default CustomTable;
