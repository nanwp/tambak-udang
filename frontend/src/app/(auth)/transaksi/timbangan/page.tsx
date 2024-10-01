"use client"
import { columns } from "@/components/columns/transaksi/timbangan";
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
        no_transaksi: 'TR-001-01',
        no_surat_jalan: 'SJ001',
        kelompok_nelayan: 'Kelompok Nelayan 1',
        tgl_transaksi: '01/01/2021',
        total_berat: '100 Kg',
        total_harga: 'Rp. 10.000.000',
        status: 'Diterima'
    },
    {
        id: 2,
        no_transaksi: 'TR-002-01',
        no_surat_jalan: 'SJ002',
        kelompok_nelayan: 'Kelompok Nelayan 2',
        tgl_transaksi: '01/01/2021',
        total_berat: '100 Kg',
        total_harga: 'Rp. 10.000.000',
        status: 'Diterima'
    },
    {
        id: 3,
        no_transaksi: 'TR-003-01',
        no_surat_jalan: 'SJ003',
        kelompok_nelayan: 'Kelompok Nelayan 3',
        tgl_transaksi: '01/01/2021',
        total_berat: '100 Kg',
        total_harga: 'Rp. 10.000.000',
        status: 'Diterima'
    },
    {
        id: 4,
        no_transaksi: 'TR-004-01',
        no_surat_jalan: 'SJ004',
        kelompok_nelayan: 'Kelompok Nelayan 4',
        tgl_transaksi: '01/01/2021',
        total_berat: '100 Kg',
        total_harga: 'Rp. 10.000.000',
        status: 'Diterima'
    },
    {
        id: 5,
        no_transaksi: 'TR-005-01',
        no_surat_jalan: 'SJ005',
        kelompok_nelayan: 'Kelompok Nelayan 5',
        tgl_transaksi: '01/01/2021',
        total_berat: '100 Kg',
        total_harga: 'Rp. 10.000.000',
        status: 'Diterima'
    }
]