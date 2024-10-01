import Button from "@/components/button/index";

export const columns = (props: any) => [
    {
        id: "id",
        header: "Actions",
        cell: ({ row }: { row: any }) => (
            <div className="flex gap-2" >
                <Button
                    color="blue"
                    iconName="eye"
                    tooltip="detail"
                    onClick={() => props.setModal({ open: true, type: "detail" })}
                />
            </div>
        ),
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Nomor Transaksi </span>,
        accessorKey: "no_transaksi",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Nomor Surat Jalan </span>,
        accessorKey: "no_surat_jalan",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Kelompok Nelayan </span>,
        accessorKey: "kelompok_nelayan",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Tanggal Transaksi </span>,
        accessorKey: "tgl_transaksi",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Jumlah Timbangan </span>,
        accessorKey: "total_berat",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Total Harga </span>,
        accessorKey: "total_harga",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    }
]
        