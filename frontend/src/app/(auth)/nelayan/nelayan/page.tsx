"use client"
import { columns } from "@/components/columns/nelayan/nelayan";
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
        nama: 'Samsul Arifin',
        nik: '1234567890',
        alamat: 'Jl. Kampung Nelayan 1',
        no_hp: '081234567890',
        kelompok_nelayan: 'Kelompok Nelayan 1'
    },
    {
        id: 2,
        nama: 'Samuel Kurniawan',
        nik: '1234567890',
        alamat: 'Jl. Kampung Nelayan 1',
        no_hp: '081234567890',
        kelompok_nelayan: 'Kelompok Nelayan 1'
    },
    {
        id: 3,
        nama: 'David Kurniawan',
        nik: '1234567890',
        alamat: 'Jl. Kampung Nelayan 1',
        no_hp: '081234567890',
        kelompok_nelayan: 'Kelompok Nelayan 1'
    },
    {
        id: 4,
        nama: 'Taufik Kurniawan',
        nik: '1234567890',
        alamat: 'Jl. Kampung Nelayan 1',
        no_hp: '081234567890',
        kelompok_nelayan: 'Kelompok Nelayan 1'
    },
    {
        id: 5,
        nama: 'Budi Kurniawan',
        nik: '1234567890',
        alamat: 'Jl. Kampung Nelayan 1',
        no_hp: '081234567890',
        kelompok_nelayan: 'Kelompok Nelayan 1'
    }
]