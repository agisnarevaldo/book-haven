"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            username: { value: string };
            password: { value: string };
        };
        const data = {
            username: target.username.value,
            password: target.password.value,
        };

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (response.ok) {
            router.push('/dashboard'); // Arahkan ke halaman admin jika login berhasil
        } else {
            alert(result.message); // Tampilkan pesan error jika login gagal
        }
    };

    return (
        <div className="rounded-3xl bg-text text-[#424642] flex p-12 gap-8 shadow-3xl">
            <div className="w-[400px] flex flex-col justify-center gap-8">
                <Image src="/logo.svg" width={100} height={100} alt="Logo" className="mx-auto"/>
                <h1 className="font-bold text-2xl text-center">Sistem Informasi Perpustakaan SMPN 1 Cikoneng</h1>
                <form
                    className="flex flex-col gap-8 px-10"
                    onSubmit={handleSubmit}
                >
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
                        name="password"
                        type={isVisible ? "text" : "password"}
                        startContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <Icon className="text-2xl text-default-400 pointer-events-none" icon="mdi:eye"/>
                                ) : (
                                    <Icon className="text-2xl text-default-400 pointer-events-none" icon="mdi:eye-off"/>
                                )}
                            </button>
                        }
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
