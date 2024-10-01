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
        header: () => <span className="flex items-center gap-x-3" > Nama Nelayan </span>,
        accessorKey: "nama",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > NIK </span>,
        accessorKey: "nik",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Alamat </span>,
        accessorKey: "alamat",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Nomor HP </span>,
        accessorKey: "no_hp",
        cell: (info: any) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Kelompok Nelayan </span>,
        accessorKey: "kelompok_nelayan",
        cell: (info: any) => <span>{info.getValue() || "-"}</span>
    }
]