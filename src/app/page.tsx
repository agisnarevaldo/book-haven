import Image from "next/image";

const LoginPage = () => {
    return (
        <div className="rounded-3xl bg-text text-[#424642] flex p-12 gap-8">
            <div className="w-[400px] flex flex-col justify-center gap-8">
                <Image src="/logo.svg" width={100} height={100} alt="Logo" className="mx-auto"/>
                <h1 className="font-bold text-2xl text-center">Sistem Informasi Perpustakaan SMPN 1 Cikoneng</h1>
                <form className="flex flex-col gap-8">
                    <input type="text" name="username" placeholder="Username"
                           className="p-2 border border-[#424642] rounded-2xl outline-0"
                    />
                    <input type="password" name="password" placeholder="Password"
                           className="p-2 border border-[#424642] rounded-2xl outline-0"
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
