'use client'
import { ReactNode } from 'react';
import Menus from './menus';
import { Icon } from '@iconify/react/dist/iconify.js';
import logo from "@/assets/images/logo1.png";
import Image from 'next/image';
import { cn } from '@/libs/cn';

export default function SideBar({ children }: { children: ReactNode }) {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <div className={cn("min-h-full w-80 p-4 bg-teal-600")}>
                    <label
                        htmlFor="my-drawer"
                        className="drawer-overlay absolute right-4 lg:hidden text-white hover:cursor-pointer"
                    >
                        <Icon icon="carbon:close-outline" width={14} />
                    </label>
                    <header className="object-cover bg-cover flex items-center gap-2 py-7 ps-3">
                        <Image
                            alt="logo"
                            className="rounded-full w-[38px] h-[38px]"
                            src={logo}
                            width={500}
                            height={500}
                            quality={100}
                        />
                        <p className="tracking-tighter font-semibold text-white">
                            TAMBAK UDANG ABC
                        </p>
                    </header>
                    <Menus />
                </div>
            </div>
        </div>
    );
}