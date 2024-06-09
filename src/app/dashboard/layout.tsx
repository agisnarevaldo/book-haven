import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

export default  function layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-[82vh]">
            <Navbar />
            <div className="h-full flex w-full">
                <Sidebar />
                {children}
            </div>
        </main>
    )
}