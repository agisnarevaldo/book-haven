"use client";

import Image from "next/image";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "@nextui-org/shared-icons";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const [title, setTitle] = useState('');
    useEffect(() => {
        const getTitle = () => {
            switch (pathname) {
                case '/dashboard':
                    return `Dashboard`;
                case '/dashboard/users':
                    return 'Tambah Data Anggota';
                case '/dashboard/buku':
                    return 'Data Buku';
                case '/dashboard/rak':
                    return 'Data Rak/lokasi';
                case '/dashboard/kategori':
                    return 'Kategori';
                case '/dashboard/peminjaman':
                    return 'Data Peminjaman';
                case '/dashboard/pengembalian':
                    return 'Data Pengembalian';
                case '/dashboard/denda':
                    return 'Data Denda';
                default:
                    return 'Dashboard';
            }
        };
        setTitle(getTitle());
    }, [pathname]);
    return (
        <nav className="bg-primary flex p-4 text-text justify-between items-center m-2 rounded-3xl">
            <div className="logo flex items-center gap-3">
                <Image src="/logo.svg" alt="Logo" width={50} height={50}/>
                <p className="text-text text-sm">Sistem Perpustakaan <br/> <span>SMP Negeri Cikoneng</span></p>
            </div>
            <div className="flex items-end gap-1.5">
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
            <div className="flex items-center gap-2">
                <Input
                    isClearable
                    type="text"
                    placeholder="Search..."
                    startContent={
                        <SearchIcon className="text-2xl text-default-400 flex-shrink-0" />
                    }
                />
                <button className="bg-[#607EAA] py-2.5 px-4 rounded-xl">
                    <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24.5854 10.5265C24.8509 10.2589 25 9.89594 25 9.51754C25 9.13913 24.8509 8.77621 24.5854 8.5086L16.5758 0.435668C16.4452 0.299368 16.2889 0.190651 16.1162 0.115859C15.9434 0.041068 15.7577 0.00170046 15.5697 5.3881e-05C15.3817 -0.00159269 15.1952 0.034515 15.0212 0.106269C14.8472 0.178024 14.6891 0.283988 14.5562 0.417979C14.4232 0.551971 14.3181 0.711305 14.2469 0.886687C14.1757 1.06207 14.1399 1.24998 14.1415 1.43947C14.1431 1.62896 14.1822 1.81621 14.2564 1.99032C14.3306 2.16443 14.4385 2.3219 14.5737 2.45354L20.1665 8.09047L1.41589 8.09047C1.04037 8.09047 0.680231 8.24082 0.414701 8.50845C0.149172 8.77607 -1.90735e-06 9.13905 -1.90735e-06 9.51754C-1.90735e-06 9.89602 0.149172 10.259 0.414701 10.5266C0.680231 10.7943 1.04037 10.9446 1.41589 10.9446L20.1665 10.9446L14.5737 16.5815C14.3158 16.8507 14.1731 17.2112 14.1763 17.5853C14.1795 17.9595 14.3284 18.3174 14.591 18.582C14.8535 18.8466 15.2086 18.9967 15.5798 18.9999C15.9511 19.0032 16.3087 18.8594 16.5758 18.5994L24.5854 10.5265Z"
                            fill="#F5F5F5"/>
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;