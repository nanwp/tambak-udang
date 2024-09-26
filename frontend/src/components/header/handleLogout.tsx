"use client";
// import { useAuth } from "@/context/AuthContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Swal from "sweetalert2";
import iconExit from "../../assets/emergency-exit.png";

export default function ButtonLogout() {
    // const { signOut } = useAuth();

    const handleLogout = () => {
        Swal.fire({
            imageUrl: iconExit.src,
            imageWidth: 75,
            imageHeight: 75,
            title: "Anda ingin keluar aplikasi ?",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#aaa",
            confirmButtonText: "Ya",
            cancelButtonText: "Kembali",
            customClass: {
                confirmButton: 'w-24 bg-red-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50',
                cancelButton: 'w-24 bg-gray-500 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50',
                title: 'text-2xl font-semibold',
            },
            width: 300,
        }).then((result) => {
            if (result.isConfirmed) {
                // signOut()
            }
        });
    }

    return (
        <>
            <button
                onClick={handleLogout}
                className="bg-red-50 hover:bg-red-100 h-14 flex gap-2 items-center text-red-500 font-semibold rounded-tr-none rounded-tl-none ps-6">
                <span>
                    <Icon icon="streamline:logout-1-solid" width={18} />
                </span>
                <span>Log Out</span>
            </button>
        </>
    )
}