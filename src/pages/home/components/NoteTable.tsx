import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useQuery } from 'react-query';

const TableHeader = [
  {
    name: 'Title',
    key: 'title',
  },
  {
    name: 'Content',
    key: 'content',
  },
  {
    name: 'Created At',
    key: 'createdAt',
  },
  {
    name: 'Updated At',
    key: 'updatedAt',
  },
];

type Note = {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const NoteTable = () => {
  const data = useQuery({
    queryKey: ['notes'],
    queryFn: () => {
      return axios
        .get(`api/note`, {
          headers: {
            Authorization: Cookies.get('token'),
          },
        })
        .then((res) => res.data);
    },
  });

  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            {TableHeader.map((header) => (
              <Th>{header.name}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.data?.map((note: Note) => (
            <Tr>
              <Th>{note.title}</Th>
              <Th>{note.content}</Th>
              <Th>{note.createdAt}</Th>
              <Th>{note.updatedAt}</Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default NoteTable;
