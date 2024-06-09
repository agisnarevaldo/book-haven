import {Icon} from "@iconify/react";
import TableNext from "@/app/components/TableNext";

export default function Page () {
    return (
        <main className="w-full">
            <div className="bg-[#CCDCF3] px-8 py-4 mx-2 rounded-2xl">
                <button className="bg-primary flex items-center px-3 py-2 rounded-md text-white tracking-wide hover:bg-[#607EAA]">
                    <Icon icon="mingcute:add-fill" />
                    Tambah User
                </button>
                <div className="flex mt-4 gap-3 items-center text-text-dark">
                    <p>Show</p>
                    <select name="entries" id="endtries" className="py-2 px-3 rounded-lg">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <p>entries</p>
                </div>
            </div>
            <TableNext />
        </main>
    )
}