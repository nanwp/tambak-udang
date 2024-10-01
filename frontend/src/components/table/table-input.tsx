/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { cn } from '@/libs/cn';
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';
import Button from "@/components/button/index";

export default function TableInput({
    columns,
    data,
    onAddRow,
}: any) {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
    });

    return (
        <table>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (
                                <th key={header.id} className='p-2 pt-0'>
                                    {header.isPlaceholder ? null : (
                                        <span>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </span>
                                    )}
                                </th>
                            );
                        })}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row, idx) => {
                    return (
                        <tr key={idx}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className={cn("border", idx % 2 === 0 ? "bg-gray-100" : "bg-white")}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    );
                })}
                <tr>
                    <td className="px-4 pt-2">
                        <Button
                            onClick={onAddRow}
                            color="green"
                            iconName="edit"
                            tooltip="Tambah"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}