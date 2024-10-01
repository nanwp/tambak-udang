import React from 'react';

interface Meta {
    page: number;
    total_data: number;
}

interface Params {
    page_size: number;
}

interface DataInfoProps {
    meta: Meta;
    data: any[]; // Sesuaikan tipe data sesuai dengan struktur data Anda
    params: Params;
}

export default function DataInfo({ meta, data, params }: DataInfoProps) {
    return (
        <div className="flex items-center gap-2 text-sm font-medium">
            {data && (
                <span>
                    {meta?.page === 1 ?
                        meta?.page : (meta?.page ?? 0) * params.page_size - (params.page_size - 1)}
                    {" - "}
                    {meta?.page === 1 ?
                        data.length : data.length < params.page_size ?
                            ((meta?.page ?? 0) - 1) * params.page_size + data.length : (meta?.page ?? 0) * params.page_size}
                </span>
            )}
            <span className="text-sm"> dari </span>
            <span> {meta?.total_data}</span>
            <span className="text-sm"> data </span>
        </div>
    )
}