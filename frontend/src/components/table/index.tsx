/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@/libs/cn';
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';

export default function Table({
    columns,
    data,
    getValue,
    getAllValue,
    setParams,
    params,
    keyId,
    id
}: Table) {
    const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([]);

    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: { sorting },
        onSortingChange: setSorting,
        manualSorting: false,
    });

    const handleSort = (columnId: string) => {
        const isSorted = sorting.length > 0 && sorting[0].id === columnId;
        const newSorting = isSorted
            ? [{ id: columnId, desc: !sorting[0].desc }]
            : [{ id: columnId, desc: false }];

        setSorting(newSorting);
        if (setParams) {
            setParams({
                ...params,
                order_by: columnId,
                order_type: newSorting[0].desc ? 'DESC' : 'ASC'
            });
        }
    };

    return (
        <div className={cn("overflow-x-scroll rounded")}>
            <table className="table bg-white w-full font-light">
                <thead className="border-b-2">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                const isSortable = header.index !== 0;
                                const isSortedAsc = params?.order_by === header.id && params.order_type === 'ASC';
                                const isSortedDesc = params?.order_by === header.id && params.order_type === 'DESC';
                                const currentSortState = header.column.getIsSorted();

                                return (
                                    <th
                                        key={header.id}
                                        onClick={() => isSortable && handleSort(header.id)}
                                        className={cn(
                                            isSortable && "cursor-pointer",
                                            "p-4 text-gray-500 font-medium uppercase"
                                        )}
                                    >
                                        {header.isPlaceholder ? null : (
                                            <span className="flex justify-between items-center gap-4">
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                                <span className={cn(header.index === 0 && "hidden")}>
                                                    <Icon
                                                        icon="fa6-solid:sort-up"
                                                        className={cn(currentSortState === 'asc' || isSortedAsc ? 'text-black' : 'text-gray-300')}
                                                    />
                                                    <Icon
                                                        icon="fa6-solid:sort-down"
                                                        className={cn(' -mt-3.5', currentSortState === 'desc' || isSortedDesc ? 'text-black' : 'text-gray-300')}
                                                    />
                                                </span>
                                            </span>
                                        )}
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody className="text-nowrap text-gray-500">
                    {table.getRowModel().rows.map((row, idx) => {
                        const idHeader = (row.getVisibleCells().find((cell: any) => cell.column.id === keyId)
                            ?.row?.original as { [keyId: string]: string })
                            ?.[keyId ?? ''];
                        return (
                            <tr
                                onClick={() => {
                                    idHeader && getValue && getValue(id === idHeader ? id : idHeader);
                                    idHeader && getAllValue && getAllValue(row.original);
                                }}
                                className={cn(
                                    "w-full overflow-x-auto hover:cursor-pointer",
                                    idx % 2 === 0 ? "bg-gray-100" : "bg-white",
                                    id === idHeader ? "bg-blue-100" : "hover:bg-blue-50"
                                )}
                                key={row.id}
                            >
                                {row.getVisibleCells().map(cell => (
                                    <td
                                        className="border-b border-slate-200"
                                        key={cell.id}
                                    >
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}