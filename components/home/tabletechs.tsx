import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { technologies } from "@/config/technologies";
const {list: rows} = technologies

const columns = [
  {
    key: "title",
    label: "TECNOLOGÍA",
  },
  {
    key: "type",
    label: "TIPO",
  },
  {
    key: "experience",
    label: "AÑOS DE EXPERIENCIA",
  },
];

export default function TableTechs() {


    
  return (
    <Table isStriped aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn className="text-center" key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}