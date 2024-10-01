import Button from "@/components/button/index";

interface Info {
    getValue: () => string | null;
}


export const columns = () => [
    {
        id: "id",
        header: "Actions",
        cell: () => (
            <div className="flex gap-2" >
                <Button
                    color="blue"
                    iconName="eye"
                    tooltip="detail"
                />
            </div>
        ),
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Nomor Surat Jalan </span>,
        accessorKey: "no_surat_jalan",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Kelompok Nelayan </span>,
        accessorKey: "kelompok_nelayan",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Tanggal Surat Jalan </span>,
        accessorKey: "tgl_surat_jalan",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Jumlah Uang Muka </span>,
        accessorKey: "jumlah_uang_muka",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Status </span>,
        accessorKey: "status",
        cell: (info: Info) => (
            <div className="flex items-center gap-x-3">
                <div className={info.getValue() === 'Diterima' ? "bg-green-500 text-white px-2 py-1 rounded" : "bg-red-500 text-white px-2 py-1 rounded"}>
                    {info.getValue() === 'Diterima' ? 'Diterima' : info.getValue() === 'Ditolak' ? 'Ditolak' : 'Menunggu'}
                </div>
            </div>
        )
    },
]
        