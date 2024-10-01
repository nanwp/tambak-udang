import { useEffect, useState } from "react"

export default function CustomToPage({ setParams, params, meta }: any) {
    const [page, setPage] = useState(params.page);
    useEffect(() => {
        setPage(params.page);
    }, [params.page]);

    return (
        <div className="flex items-center gap-2">
            <span>Ke Halaman</span>
            <input
                type="text"
                value={Number(page) || ""}
                onChange={(e) => setPage(Number(e.target.value))}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        if (page >= 1 && page <= meta.total_page) {
                            setParams({ ...params, page });
                        } else {
                            setPage(params.page);
                        }
                    }
                }}
                onBlur={() => {
                    if (page >= 1 && page <= meta.total_page) {
                        setParams({ ...params, page });
                    } else {
                        setPage(params.page);
                    }
                }}
                className="border border-gray-300 text-sm rounded-md h-8 w-10 text-center"
            />
        </div>
    )
}
