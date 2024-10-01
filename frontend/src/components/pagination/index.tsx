import { cn } from "@/libs/cn";
import { Icon } from "@iconify/react/dist/iconify.js";
import DataInfo from "./data-info";
import React from "react";

export default function Pagination({
    meta,
    data,
    params,
    setParams,
}: Pagination) {
    const visiblePages = 5;
    const totalPageCount = meta?.total_page ?? 0;
    let startPage = Math.max(1, params.page - Math.floor(visiblePages / 2));
    let endPage = startPage + visiblePages - 1;

    if (endPage > totalPageCount) {
        endPage = totalPageCount;
        startPage = Math.max(1, endPage - visiblePages + 1);
    }

    const changePage = (page: number) => {
        if (page >= 1 && page <= totalPageCount) {
            setParams({ ...params, page });
        }
    };

    return (
        <>
            <div className="flex items-center justify-between p-4 bg-white mt-1 rounded-bl-2xl rounded-br-2xl text-gray-600 max-md:justify-center max-md:grid">
                <DataInfo
                    meta={meta}
                    data={data}
                    params={params}
                />

                <div className="join flex gap-2 max-md:gap-1 max-md:py-4 max-md:justify-center">
                    <button
                        onClick={() => changePage(params.page - 1)}
                        className={cn(
                            "rounded-tl-lg rounded-bl-lg",
                            "relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white text-gray-700",
                            params?.page === 1 ? "bg-gray-200 text-gray-400" : "hover:bg-blue-100",
                        )}
                        disabled={params?.page === 1}
                    >
                        <Icon icon="ooui:previous-ltr" width={10} />
                    </button>

                    {startPage > 1 && (
                        <>
                            <button
                                onClick={() => changePage(1)}
                                className={cn("relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white text-gray-700")}
                            >
                                1
                            </button>
                            {startPage > 2 && (
                                <span className="px-3 py-1 max-md:px-3.5 border flex items-center disabled">...</span>
                            )}
                        </>
                    )}

                    {Array.from({ length: (endPage - startPage + 1) }, (_, i) => (
                        <button
                            key={startPage + i}
                            onClick={() => changePage(startPage + i)}
                            className={cn("relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white text-gray-700",
                                startPage + i === params.page ? "bg-blue-500 text-white" : "hover:bg-blue-100"
                            )}
                        >
                            {startPage + i}
                        </button>
                    ))}

                    {endPage < totalPageCount && (
                        <>
                            {endPage < totalPageCount - 1 && (
                                <span className={cn("relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white text-gray-700")}>
                                    ...
                                </span>
                            )}
                            <button
                                onClick={() => changePage(totalPageCount)}
                                className={cn("relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white text-gray-700")}
                            >
                                {totalPageCount}
                            </button>
                        </>
                    )}

                    <button
                        onClick={() => changePage(params.page + 1)}
                        className={cn(
                            "rounded-tr-lg rounded-br-lg",
                            "relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white text-gray-700",
                            params?.page === totalPageCount ? "bg-gray-200 text-gray-400" : "hover:bg-blue-100",
                        )}
                        disabled={params?.page === totalPageCount || !totalPageCount}
                    >
                        <Icon icon="ooui:previous-rtl" width={10} />
                    </button>
                </div>
            </div>
        </>
    );
}