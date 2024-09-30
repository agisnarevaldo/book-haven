"use client";

import Button from "@/app/components/Button";
import Panel from "@/app/components/Panel";
import DataView from "@/app/components/Table";

export default function Page () {
    const handleClick = () => {
        alert('data ditambahkan')
    }
    return (
        <main className="w-full">
            <Panel>
                <Button onClick={handleClick}>Tambah Buku</Button>
            </Panel>
            <DataView />
        </main>
    )
}