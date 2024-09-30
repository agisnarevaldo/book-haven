"use client";

import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useEffect, useState } from 'react';

export interface DataItem {
    id_buku: number;
    isbn: any;
    lampiran: any;
    title: any;
    penerbit: any;
    pengarang: any;
    thn_buku: any;
    isi: any;
    jml: any;
    tgl_masuk: any;
    sampul: any;
    id_kategori: any;
    buku_id: any;
    id_rak: any;
    nama: string;
    status: boolean;
    tanggal: string;
    category: string;
    keterangan: string;
    lokasi: string;
    bukti: string;
}

const DataViewer: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const handleDelete = async (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            try {
                const response = await fetch(`/api/reports/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Gagal menghapus data');
                }
                setData(data.filter(item => item.id_buku !== id)); // Update state untuk menghilangkan data yang dihapus
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    const handleProcess = async (id: number) => {
        if (confirm('Apakah Anda yakin ingin memproses data ini?')) {
            try {
                const response = await fetch(`/api/reports/activate/${id}`, {
                    method: 'PUT',
                });
                if (!response.ok) {
                    throw new Error('Gagal memproses data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/read');
                if (!response.ok) {
                    throw new Error('Data fetch failed');
                }
                const result: DataItem[] = await response.json();
                setData(result);
                setIsLoading(false);
            } catch (error: any) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='max-w-[1054px] max-h-[365px] mx-auto mt-2 bg-primary rounded-lg py-2 px-1'>
            <h1 className='text-white'>Tabel Buku</h1>
            <div style={{ overflow: 'auto' }}>
                <table className="min-w-full bg-white divide-y divide-gray-200 shadow-sm">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rak</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sampul</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ISBN</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lampiran</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Penerbit</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pengarang</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tahun</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Isi</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Masuk</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item: DataItem) => (
                        <tr key={item.id_buku}>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.buku_id}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.id_kategori}</td>
                            {/*<td className="px-4 py-4 whitespace-nowrap text-sm font-medium">*/}
                            {/*  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${item.status ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>*/}
                            {/*    {item.status ? "Selesai" : "Proses"}*/}
                            {/*  </span>*/  }
                            {/*</td>*/}
                            <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="bg-primary  hover:bg-green-900 text-white font-bold p-2 text-lg rounded-full"
                                        onClick={() => handleProcess(item.id_buku)}
                                >
                                    <Icon icon="ic:round-checklist" />
                                </button>
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 text-lg rounded-full ml-2"
                                        onClick={() => handleDelete(item.id_buku)}
                                >
                                    <Icon icon="tabler:trash" />
                                </button>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.id_rak}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.sampul}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.isbn}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.lampiran}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.title}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.penerbit}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.pengarang}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.thn_buku}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.isi}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.jml}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.tgl_masuk}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 truncate w-1">{item.keterangan}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 truncate w-1">{item.lokasi}</td>
                            <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 truncate w-1">{item.bukti}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataViewer;