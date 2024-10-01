import { CardTangkapDaily, CardTangkapMonthly, CardTangkapYearly } from "@/components/dashboard/card";
import PieChartComponents from "@/components/dashboard/pieChart";
import React from "react";

export default function Page() {
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div><CardTangkapDaily /></div>
          <div><CardTangkapMonthly /></div>
          <div><CardTangkapYearly /></div>
        </div>
  
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="bg-white rounded-lg p-4 drop-shadow-lg">
              <h1 className="text-lg font-medium text-gray-500">Tangkapan Kelompok Nelayan 30 Hari Terakhir</h1>
              <PieChartComponents data={topKelompoNelayan} />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4 drop-shadow-lg">
              <h1 className="text-lg font-medium text-gray-500">Tangkapan Jenis Udang 30 Hari Terakhir</h1>
              <PieChartComponents data={topJenisUdang} />
            </div>
          </div>
        </div>
      </>
    )
}

const topKelompoNelayan = [
    { label: "Kelompok 1", value: 100 },
    { label: "Kelompok 2", value: 200 },
    { label: "Kelompok 3", value: 300 },
    { label: "Kelompok 4", value: 400 },
    { label: "Kelompok 5", value: 500 },
    { label: "Kelompok 6", value: 600 },
    { label: "Kelompok 7", value: 700 },
    { label: "Kelompok 8", value: 800 },
    { label: "Kelompok 9", value: 900 },
    { label: "Kelompok 10", value: 1000 },
]

const topJenisUdang = [
    { label: "Udang Merah", value: 100 },
    { label: "Udang Putih", value: 200 },
    { label: "Udang Biru", value: 300 },
    { label: "Udang Kuning", value: 400 },
    { label: "Udang Hijau", value: 500 },
    { label: "Udang Hitam", value: 600 },
    { label: "Udang Putih", value: 700 },
    { label: "Udang Biru", value: 800 },
    { label: "Udang Kuning", value: 900 },
    { label: "Udang Hijau", value: 1000 },
]
