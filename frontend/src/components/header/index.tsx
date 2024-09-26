"use client";
import React from "react";
import logo from "@/assets/images/logo1.png";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import BreadCrumbs from "./breadCrumbs";
import ButtonLogout from "./handleLogout";

export default function Header() {
    return (
        <div className="border-b border-gray-200 bg-white sticky inset-0 z-50">
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-4">
                    <label htmlFor="my-drawer" className="btn btn-square bg-white drawer-button lg:hidden">
                        <Icon icon="heroicons-outline:menu-alt-2" width={24} />
                    </label>
                    <BreadCrumbs />
                </div>
                <section>
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="flex items-center border-l-2 border-gray focus:outline-none gap-4"
                        >
                            <Image
                                alt="branch"
                                className="rounded-full w-[32px] h-[32px] ms-3"
                                src={logo}
                                width={500}
                                height={500}
                                quality={100}
                            />
                            <div>
                                <h1 className="font-semibold text-black tracking-wider text-[14px] ">ADMIN</h1>
                                <h2 className="text-sm text-gray-600 font-medium">ADMINISTRATOR</h2>
                            </div>
                            <Icon icon="icon-park-solid:down-one" width={18} />
                        </div>
                        <div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-white z-[1] mt-5 p-0 shadow border-t w-80 sticky right-0 rounded-lg">
                                <li>
                                    <ButtonLogout />
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};