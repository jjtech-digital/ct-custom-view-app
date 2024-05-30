/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styles from './TableReports.module.css';
import classNames from 'classnames';
import { data } from './TableReports.mock';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface IProps {
  row: {
    original: {
      id: string,
      orderNumber: string,
      date: string,
      total: string,
      status: string,
    },
  };
}

const TableReports = () => {
  const columns = [
    {
      header: 'Order No.',
      cell: ({ row }: IProps) => {
        return <p>{row.original?.orderNumber}</p>;
      },
    },
    {
      header: 'Date',
      cell: ({ row }: IProps) => {
        return <p>{row.original?.date}</p>;
      },
    },
    {
      header: 'Total',
      cell: ({ row }: IProps) => {
        return <p>{row.original?.total}</p>;
      },
    },
    {
      header: 'Status',
      cell: ({ row }: IProps) => {
        return <p>{row.original?.status}</p>;
      },
    },
  ];

  const tableInstance = useReactTable({
    columns: columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  const match = useRouteMatch();
  const { push } = useHistory();

  return (
    <table className={classNames(styles.table)}>
      <thead>
        {tableInstance.getHeaderGroups().map((headerEl) => {
          return (
            <tr key={headerEl.id}>
              {headerEl.headers.map((columnEl) => {
                return (
                  <th key={columnEl.id} colSpan={columnEl.colSpan}>
                    {columnEl.isPlaceholder
                      ? null
                      : flexRender(
                          columnEl.column.columnDef.header,
                          columnEl.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody>
        {tableInstance.getRowModel().rows.map((rowEl) => {
          return (
            <tr
              key={rowEl.id}
              onClick={() => {
                push(`${match.url}/${rowEl.original.id}`);
              }}
              style={{cursor: 'pointer'}}
            >
              {rowEl.getVisibleCells().map((cellEl: any) => {
                return (
                  <td
                    key={cellEl.id}
                    style={{
                      width:
                        cellEl.column.getSize() !== 150
                          ? cellEl.column.getSize()
                          : null,
                    }}
                  >
                    {flexRender(
                      cellEl.column.columnDef.cell,
                      cellEl.getContext()
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableReports;
