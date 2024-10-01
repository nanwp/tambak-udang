"use client"
import { columns } from "@/components/columns/transaksi/surat-jalan";
import Pagination from "@/components/pagination";
import Table from "@/components/table";
import React from "react";

export default function Page() {
    const col = columns();
    return (
        <>
            <Table
                columns={col}
                data={data}
                keyId="id"
            />

            <Pagination
                meta={{
                    page: 1,
                    page_size: 10,
                    total: 100,
                    total_page: 10,
                    total_data: 100
                }}
                data={data}
                params={{
                    page: 1,
                    page_size: 10,
                    keyword: ''
                }}
                setParams={() => { }}
            />

        </>
    )
}

// dummy data
const data = [
    {
        id: 1,
        no_surat_jalan: 'SJ001',
        kelompok_nelayan: 'Kelompok Nelayan 1',
        tgl_surat_jalan: '01/01/2021',
        jumlah_uang_muka: 'Rp. 1.000.000',
        status: 'Diterima'
    },
    {
        id: 2,
        no_surat_jalan: 'SJ002',
        kelompok_nelayan: 'Kelompok Nelayan 2',
        tgl_surat_jalan: '01/01/2021',
        jumlah_uang_muka: 'Rp. 1.000.000',
        status: 'Diterima'
    },
    {
        id: 3,
        no_surat_jalan: 'SJ003',
        kelompok_nelayan: 'Kelompok Nelayan 3',
        tgl_surat_jalan: '01/01/2021',
        jumlah_uang_muka: 'Rp. 1.000.000',
        status: 'Diterima'
    },
    {
        id: 4,
        no_surat_jalan: 'SJ004',
        kelompok_nelayan: 'Kelompok Nelayan 4',
        tgl_surat_jalan: '01/01/2021',
        jumlah_uang_muka: 'Rp. 1.000.000',
        status: 'Diterima'
    },
    {
        id: 5,
        no_surat_jalan: 'SJ005',
        kelompok_nelayan: 'Kelompok Nelayan 5',
        tgl_surat_jalan: '01/01/2021',
        jumlah_uang_muka: 'Rp. 1.000.000',
        status: 'Diterima'
    }
]