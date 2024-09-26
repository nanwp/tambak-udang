'use client'
import { useEffect, useState } from 'react';
import { menu } from "@/constants/navigation-menu";
import Link from "next/link";
import { cn } from '@/libs/cn';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Menus() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [openIndex2, setOpenIndex2] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleToggle2 = (index: number) => {
        setOpenIndex2(openIndex2 === index ? null : index);
    };

    useEffect(() => { setOpenIndex2(null) }, [openIndex])

    return (
        <ul className="grid gap-y-4">
            {menu.map((menu, idx) => {
                const isOpen = openIndex === idx;
                return (menu.subMenu.length === 0
                    // 1
                    ? <li
                        key={idx}
                        onClick={() => handleToggle(idx)}
                        className="p-3 hover:cursor-pointer hover:bg-black hover:bg-opacity-10 rounded">
                        <Link href={menu.link} className={cn("text-nowrap rounded")}>
                            <summary className="text-white flex items-center gap-3">
                                <span className={"text-yellow-600"}>{menu.logo}</span>
                                <span className="font-medium">{menu.name}</span>
                            </summary>
                        </Link>
                    </li>
                    // 2
                    : <li
                        key={idx}
                        className={cn(isOpen ? "bg-white text-gray-600 rounded" : "text-white")}>
                        <div className={cn(
                            "flex flex-col items-start justify-start p-0 hover:cursor-pointer",
                            !isOpen && "hover:bg-black hover:bg-opacity-10 rounded"
                        )}>
                            <summary
                                onClick={() => handleToggle(idx)}
                                className="flex items-center gap-3 w-full p-3">
                                <span className={"text-yellow-600"}>{menu.logo}</span>
                                <div className="flex justify-between w-full">
                                    <span className="font-medium">{menu.name}</span>
                                    <Icon icon={isOpen ? "icon-park-solid:up-one" : "icon-park-solid:down-one"} />
                                </div>
                            </summary>
                            {isOpen &&
                                <div className="w-full menu ps-0 animate-flip-down animate-once animate-duration-300 animate-ease-out">
                                    <ul>
                                        {menu.subMenu.map((sub, subIdx) => {
                                            const isOpen2 = openIndex2 === subIdx;
                                            return (sub.link !== undefined
                                                // 2.1
                                                ? < li key={subIdx}>
                                                    <Link href={`${menu.link}${sub.link}`} className="text-nowrap rounded p-3 font-medium">
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                                // 2.2
                                                : <li>
                                                    <summary
                                                        onClick={() => handleToggle2(subIdx)}
                                                        className="text-nowrap rounded p-3 font-medium flex justify-between"
                                                    >
                                                        <span className="font-medium">{sub.name}</span>
                                                        <Icon icon={isOpen2 ? "icon-park-solid:up-one" : "icon-park-solid:down-one"} />
                                                    </summary>
                                                    {isOpen2 &&
                                                        <ul className="animate-flip-down animate-once animate-duration-300 animate-ease-out">
                                                            {sub.subMenu.map((subSub, subSubIdx) => (
                                                                <li key={subSubIdx}>
                                                                    <Link href={`${menu.link}${subSub.link}`} className="text-nowrap rounded p-3">
                                                                        {subSub.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    }
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }
                        </div>
                    </li>
                )
            })}
        </ul >
    );
}