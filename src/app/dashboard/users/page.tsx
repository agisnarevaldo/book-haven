"use client";

import TableNext from "@/app/components/TableNext";
import Panel from "@/app/components/Panel";
import Button from "@/app/components/Button";

export default function Page () {
    return (
        <main className="w-full">
            <Panel>
                <Button onClick={() => alert('data ditambahkan')}>Tambah User</Button>
            </Panel>
            <TableNext />
        </main>
    )
}