export default function DataInfo({ meta, data, params }: any) {
    return (
        <div className="flex items-center gap-2 text-sm font-medium">
            {data && (
                <span>
                    {meta?.page === 1 ?
                        meta?.page : (meta?.page ?? 0) * params.page_size - (params.page_size - 1)}
                    {" - "}
                    {meta?.page === 1 ?
                        data.length : data.length < params.page_size ?
                            ((meta?.page ?? 0) - 1) * params.page_size + data.length : (meta?.page ?? 0) * params.page_size}
                </span>
            )}
            <span className="text-sm"> dari </span>
            <span> {meta?.total_data}</span>
            <span className="text-sm"> data </span>
        </div>
    )
}