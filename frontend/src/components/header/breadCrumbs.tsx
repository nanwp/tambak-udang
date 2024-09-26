import { useGetPathName } from "../../hooks/usePath"

export default function BreadCrumbs() {
    const { firstPath, secondPath } = useGetPathName()

    return (
        <>
            <div className="breadcrumbs text-xs text-gray-400">
                <h1 className="font-semibold text-xl mb-2 text-black">{secondPath || "Dashboard"}</h1>
                <ul>
                    <li>Dashboard</li>
                    <li>{firstPath}</li>
                    <li>{secondPath}</li>
                </ul>
            </div>
        </>
    )
}