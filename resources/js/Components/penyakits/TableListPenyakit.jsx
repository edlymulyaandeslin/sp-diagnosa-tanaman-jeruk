import { Link, router } from '@inertiajs/react';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';
import Pagination from '../main/Pagination';

export default function TableListPenyakit({ data }) {
    const handleDelete = (kode_penyakit) => {
        const confirm = window.confirm(
            'Apakah anda yakin ingin menghapus data ini?',
        );
        if (!confirm) return;

        router.delete(route('penyakits.destroy', kode_penyakit));
    };

    return (
        <div className="m-4 rounded border border-gray-500 p-8">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Kode Penyakit</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Solution</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((penyakit, index) => (
                            <tr key={index}>
                                <th>{penyakit.kode_penyakit}</th>
                                <td className="w-32">
                                    <img
                                        src={`/storage/${penyakit.image}`}
                                        className="h-20 w-20 object-cover"
                                        alt={penyakit.name}
                                    />
                                </td>
                                <td>{penyakit.name}</td>
                                <td>
                                    <span className="line-clamp-1">
                                        {penyakit.description}
                                    </span>
                                </td>
                                <td>
                                    <span className="line-clamp-1">
                                        {penyakit.solution}
                                    </span>
                                </td>
                                <td>
                                    <div className="flex gap-4">
                                        <Link
                                            href={route(
                                                'penyakits.edit',
                                                penyakit.kode_penyakit,
                                            )}
                                            className="btn"
                                        >
                                            <FaPenToSquare className="text-yellow-500" />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    penyakit.kode_penyakit,
                                                )
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
                                    colSpan={6}
                                    className="text-center text-xl font-bold"
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
