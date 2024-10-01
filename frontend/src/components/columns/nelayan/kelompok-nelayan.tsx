import Button from "@/components/button/index";

export const columns = (props: any) => [
    {
        id: "id",
        header: "Actions",
        cell: ({ row }: { row: any }) => (
            <div className="flex gap-2" >
                <Button
                    color="green"
                    iconName="edit"
                    tooltip="update"
                    onClick={() => props.setModal({ open: true, type: "edit" })}
                />
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
        header: () => <span className="flex items-center gap-x-3" > Nama Kelompok Nelayan </span>,
        accessorKey: "nama",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Jumlah Anggota </span>,
        accessorKey: "jumlah_anggota",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Alamat </span>,
        accessorKey: "alamat",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Ketua </span>,
        accessorKey: "ketua",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
]