"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    return (
        <div className="rounded-3xl bg-text text-[#424642] flex p-12 gap-8 shadow-3xl">
            <div className="w-[400px] flex flex-col justify-center gap-8">
                <Image src="/logo.svg" width={100} height={100} alt="Logo" className="mx-auto"/>
                <h1 className="font-bold text-2xl text-center">Sistem Informasi Perpustakaan SMPN 1 Cikoneng</h1>
                <form className="flex flex-col gap-8 px-10">
                    <Input 
                        type="text" 
                        name="username"
                        variant="bordered"
                        placeholder="Username" 
                        startContent={
                            <Icon className="text-2xl" icon="majesticons:user-line"/>
                        }
                    />
                    <Input
                        variant="bordered"
                        placeholder="Enter your password"
                        startContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <Icon className="text-2xl text-default-400 pointer-events-none" icon="mdi:eye"/>
                                ) : (
                                    <Icon className="text-2xl text-default-400 pointer-events-none" icon="mdi:eye-off"/>
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                    />
                    <button className="bg-[#1c3879] rounded-2xl text-white py-2" type="submit">Login</button>
                </form>
            </div>
            <div>
                <Image src="/libbook.svg" alt="Book" width={400} height={400}/>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#1C3879]">
            <LoginPage/>
        </main>
    );
}
