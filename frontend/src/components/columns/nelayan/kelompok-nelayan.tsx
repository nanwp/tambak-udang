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
                    color="green"
                    iconName="edit"
                    tooltip="update"
                />
                <Button
                    color="blue"
                    iconName="eye"
                    tooltip="detail"
                />
            </div>
        ),
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Nama Kelompok Nelayan </span>,
        accessorKey: "nama",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Jumlah Anggota </span>,
        accessorKey: "jumlah_anggota",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Alamat </span>,
        accessorKey: "alamat",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Ketua </span>,
        accessorKey: "ketua",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
]