import Swal from "sweetalert2";
import { DefaultConfirm } from "@/types/dialogs";
import imageRemove from "@/assets/images/dialog-remove.svg";
import imageApproval from "@/assets/images/approval.svg";

export const confirmDelete = ({ id, action }: DefaultConfirm) => {
    Swal.fire({
        imageUrl: imageRemove.src,
        imageWidth: 80,
        imageHeight: 80,
        width: 300,
        title: "Yakin Hapus?",
        text: "Dengan menghapus item yang dipilih, semua informasi terkait akan hilang",
        showCancelButton: true,
        confirmButtonText: "Ya, Hapus!",
        cancelButtonText: "Batal",
        customClass: {
            confirmButton: "bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg",
            cancelButton: "bg-[#09A599] hover:bg-green-800 text-white font-bold rounded-lg",
        },
    }).then((result) => {
        if (result.isConfirmed) {
            action(id as string | number);
        }
    });
}

export const confirmApproval = ({ action }: DefaultConfirm) => {
    Swal.fire({
        imageUrl: imageApproval.src,
        imageWidth: 80,
        imageHeight: 80,
        width: 300,
        title: "Setujui / Tidak?",
        text: "Apakah kamu menyetujui Purchase Request ini ?",
        showCancelButton: true,
        confirmButtonText: "Ya, Setujui!",
        cancelButtonText: "Batal",
        customClass: {
            confirmButton: "bg-[#09A599] hover:bg-green-800 text-white font-bold rounded-lg",
            cancelButton: "bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg",
        },
    }).then((result) => {
        if (result.isConfirmed) { action }
    });
}

export const messageDialog = (title: string, icon: "success" | "error" | "warning" | "info" | "question") => {
    Swal.fire({
        icon,
        title,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        toast: true,
        position: "bottom-end",
        showCloseButton: true,
        customClass: {
            popup: "bg-white",
            title: "text-[#666666] font-bold",
            closeButton: "text-[#666666]",
        },
    });
}

export const confirmButton = (title: string, icon: "success" | "error" | "warning" | "info" | "question", action: any) => {
    Swal.fire({
        icon,
        title,
        showCancelButton: true,
        confirmButtonText: "Ya, Lanjutkan!",
        cancelButtonText: "Batal",
        customClass: {
            confirmButton: "bg-[#09A599] hover:bg-green-800 text-white font-bold rounded-lg",
            cancelButton: "bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg",
        },
    }).then((result) => {
        if (result.isConfirmed) {
            action();
        }
    });
}