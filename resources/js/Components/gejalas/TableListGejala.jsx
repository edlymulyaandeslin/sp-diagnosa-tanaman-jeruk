import { Link, router } from '@inertiajs/react';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';
import Pagination from '../main/Pagination';

export default function TableListGejala({ data }) {
    const handleDelete = (kode_gejala) => {
        const confirm = window.confirm(
            'Apakah anda yakin ingin menghapus data ini?',
        );
        if (!confirm) return;

        router.delete(route('gejalas.destroy', kode_gejala));
    };

    return (
        <div className="p-8 m-4 border border-gray-500 rounded">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Kode Gejala</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((gejala, index) => (
                            <tr key={index}>
                                <th>{gejala.kode_gejala}</th>
                                <td>{gejala.name}</td>
                                <td>
                                    <div className="flex gap-4">
                                        <Link
                                            href={route(
                                                'gejalas.edit',
                                                gejala.kode_gejala,
                                            )}
                                            className="btn"
                                        >
                                            <FaPenToSquare className="text-yellow-500" />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(gejala.kode_gejala)
                                            }
                                            className="btn"
                                        >
                                            <FaTrash className="text-red-500" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {data.data.length === 0 && (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="text-xl font-bold text-center"
                                >
                                    No Data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination links={data} />
        </div>
    );
}
