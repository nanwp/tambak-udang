"use client"
import { columns } from "@/components/columns/nelayan/kelompok-nelayan";
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
        nama: 'Kelompok Nelayan 1',
        jumlah_anggota: 10,
        alamat: 'Jl. Kampung Nelayan 1',
        ketua: 'Ketua 1'
    },
    {
        id: 2,
        nama: 'Kelompok Nelayan 2',
        jumlah_anggota: 10,
        alamat: 'Jl. Kampung Nelayan 2',
        ketua: 'Ketua 2'
    },
    {
        id: 3,
        nama: 'Kelompok Nelayan 3',
        jumlah_anggota: 10,
        alamat: 'Jl. Kampung Nelayan 3',
        ketua: 'Ketua 3'
    },
    {
        id: 4,
        nama: 'Kelompok Nelayan 4',
        jumlah_anggota: 10,
        alamat: 'Jl. Kampung Nelayan 4',
        ketua: 'Ketua 4'
    },
    {
        id: 5,
        nama: 'Kelompok Nelayan 5',
        jumlah_anggota: 10,
        alamat: 'Jl. Kampung Nelayan 5',
        ketua: 'Ketua 5'
    }
]