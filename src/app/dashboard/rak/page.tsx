"use client";

import Button from "@/app/components/Button";
import Panel from "@/app/components/Panel";

export default function Page() {
    return (
        <main className="w-full">
            <Panel>
                <Button onClick={() => alert('data ditambahkan')}>Tambah Rak</Button>
            </Panel>
        </main>
    )
}