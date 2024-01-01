import React, { useContext, useEffect, useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import { technologies } from "@/config/technologies";
import { LanguageContext } from "@/context/language/LanguageContext";
const {list: rows} = technologies

const columns = [
  {

    key: "title",
    label: {
      ES: "TECNOLOGÍA",
      EN: "TECHNOLOGY",
    } 
  },
  {
    key: "type",
    label: {
      ES: "TIPO",
      EN: "TYPE",
    },
  },
  {
    key: "experience",
    label: {
      ES: "EXPERIENCIA",
      EN: "EXPERIENCE",
    },
  },
];

export default function TableTechs() {

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    console.log(language);
  }
  , [language]);

    
  return (
    <Table isStriped aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn className="text-center" key={column.key}>{column.label[language]}</TableColumn>}
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