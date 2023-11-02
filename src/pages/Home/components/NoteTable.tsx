import { NoteTableProps } from '@libs/models';
import { Table } from '@radix-ui/themes';
import React from 'react';

const NoteTable: React.FC<NoteTableProps> = (props) => {
  const { note } = props;
  return (
    <div className="col-start-1 col-end-4 flex flex-col justify-center mx-2">
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>description</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {note?.data &&
            note.data.map((data) => (
              <Table.Row key={data.id}>
                <Table.Cell>{data.title}</Table.Cell>
                <Table.Cell>{data.content}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
export default NoteTable;
