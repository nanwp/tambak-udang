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
        header: () => <span className="flex items-center gap-x-3" > Nama Nelayan </span>,
        accessorKey: "nama",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > NIK </span>,
        accessorKey: "nik",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Alamat </span>,
        accessorKey: "alamat",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Nomor HP </span>,
        accessorKey: "no_hp",
        cell: (info: Info) => <span>{info.getValue() || "-"} </span>
    },
    {
        header: () => <span className="flex items-center gap-x-3" > Kelompok Nelayan </span>,
        accessorKey: "kelompok_nelayan",
        cell: (info: Info) => <span>{info.getValue() || "-"}</span>
    }
]