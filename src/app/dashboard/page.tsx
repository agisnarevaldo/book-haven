import Card from "@/app/components/Card";
import CardName from "@/app/components/CardName";

export  default  function DashboardPage() {
    return (
        <main className="w-full">
            <div className="flex px-2 justify-between">
                <Card bg={"bg-primary"} count={5} title={"Anggota"} icon={"/anggota.svg"} link={"/anggota"}/>
                <Card bg={"bg-[#607EAA]"} count={5} title={"Jenis Buku"} icon={"/jnsbuku.svg"} link={"/anggota"}/>
                <Card bg={"bg-[#CCDCF3]"} count={5} title={"Pinjam"} icon={"/pinjam.svg"} link={"/pinjam"}/>
                <Card bg={"bg-[#EAE3D2]"} count={5} title={"Kembali"} icon={"/kembali.svg"} link={"/kembali"}/>
            </div>
            <div className="pl-2 pt-2.5">
                <CardName src="/user.svg" name={"Giwang Bot Yasnaya"} role={"petugas"} isOnline={true}/>
            </div>
        </main>
    )
}