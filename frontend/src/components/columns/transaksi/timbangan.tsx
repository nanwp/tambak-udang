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
        header: () => <span className="flex items-center gap-x-3" > Nomor Transaksi </span>,
        accessorKey: "no_transaksi",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
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
        header: () => <span className="flex items-center gap-x-3" > Tanggal Transaksi </span>,
        accessorKey: "tgl_transaksi",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Jumlah Timbangan </span>,
        accessorKey: "total_berat",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Total Harga </span>,
        accessorKey: "total_harga",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    }
]
        