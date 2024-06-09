"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

export default function TableNext() {
  const [isLoading, setIsLoading] = React.useState(true);

  let list = useAsyncList({
    async load({ signal }) {
      let res = await fetch("https://swapi.py4e.com/api/people/?search", {
        signal,
      });
      let json = await res.json();
      setIsLoading(false);

      return {
        items: json.results,
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a: any, b: any) => {
          let first = a[sortDescriptor.column as keyof typeof a];
          let second = b[sortDescriptor.column as keyof typeof b];
          let cmp =
            (parseInt(first) || first) < (parseInt(second) || second) ? -1 : 1;

          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }

          return cmp;
        }),
      };
    },
  });

  return (
    <Table
      aria-label="Example table with client side sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}
      classNames={{
          wrapper: "max-h-[398px] ml-2 w-auto mt-2",
      }}
    >
      <TableHeader>
        <TableColumn key="name" allowsSorting>
          Name
        </TableColumn>
        <TableColumn key="height" allowsSorting>
          Height
        </TableColumn>
        <TableColumn key="mass" allowsSorting>
          Mass
        </TableColumn>
        <TableColumn key="birth_year" allowsSorting>
          Birth year
        </TableColumn>
      </TableHeader>
      <TableBody
        items={list.items as { name: string; [key: string]: any }[]}
        isLoading={isLoading}
        loadingContent={<Spinner label="Loading..." />}
      >
        {(item: { name: string; [key: string]: any }) => (
          <TableRow key={item.name}>
            {(columnKey: React.Key) => (
              <TableCell>{getKeyValue(item, columnKey.toString())}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
