"use client";

import Link from "next/link";
import {Icon} from "@iconify/react";
import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

const Sidebar = () => {
    const defaultContent = (
        "Accordian COntent"
    );
    return (
        <aside className="bg-[#1C3879] flex flex-col h-full p-4 text-white w-[300px] rounded-3xl ml-2">
            <ul className="flex flex-col gap-4">
                <Link href="/dashboard" className="flex hover:bg-[#607EAA] p-2 rounded-xl">
                    <Icon className="text-2xl mr-2" icon="fluent:top-speed-20-filled"/>
                    Dashboard
                </Link>
                <Link href="/dashboard/users" className="flex hover:bg-[#607EAA] p-2 rounded-xl">
                    <Icon className="text-2xl mr-2" icon="ph:user"/>
                    Data Pengguna
                </Link>
                <Accordion variant="light">
                    <AccordionItem key="1" aria-label="Accordion 1" title={
                        <p className="text-white">Master Data</p>
                    }
                        startContent={
                        <Icon fontSize={24} icon="fluent:document-data-16-regular" />
                        }
                    >
                        {
                            <>
                                <Link href="/dashboard/buku" className="flex hover:bg-[#607EAA] my-1 p-2 rounded-xl">
                                    <Icon className="text-2xl mr-2" icon="fluent:book-32-regular" />
                                    Data Buku
                                </Link>
                                <Link href="/dashboard/kategori" className="flex hover:bg-[#607EAA] my-1 p-2 rounded-xl">
                                    <Icon className="text-2xl mr-2" icon="carbon:category-new-each" />
                                    Kategori
                                </Link>
                                <Link href="/dashboard/rak" className="flex hover:bg-[#607EAA] my-1 p-2 rounded-xl">
                                    <Icon className="text-2xl mr-2" icon="hugeicons:right-to-left-list-dash" />
                                    Rak
                                </Link>
                            </>
                        }
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title={
                        <p className="text-white">Transaksi</p>
                    }
                                    startContent={
                                        <Icon className="text-2xl mr-2" icon="codicon:arrow-swap" />
                                    }
                    >
                        {
                            <>
                                <Link href="/dashboard/peminjaman" className="flex hover:bg-[#607EAA] my-1 p-2 rounded-xl">
                                    <Icon className="text-2xl mr-2" icon="mingcute:arrow-to-up-line" />
                                    Peminjaman
                                </Link>
                                <Link href="/dashboard/pengembalian" className="flex hover:bg-[#607EAA] my-1 p-2 rounded-xl">
                                    <Icon className="text-2xl mr-2" icon="mingcute:arrow-to-down-line" />
                                    Pengembalian
                                </Link>
                            </>
                        }
                    </AccordionItem>
                </Accordion>
                <Link href="/dashboard/denda" className="flex hover:bg-[#607EAA] p-2 rounded-xl">
                    <Icon className="text-2xl mr-2" icon="ph:money-light" />
                    Denda
                </Link>
                <Link href="/" className="flex hover:bg-[#607EAA] p-2 rounded-xl">
                    <Icon className="text-2xl mr-2" icon="streamline:interface-logout-arrow-exit-frame-leave-logout-rectangle-right" />
                    Keluar
                </Link>
            </ul>
        </aside>
    );
}

export default Sidebar;