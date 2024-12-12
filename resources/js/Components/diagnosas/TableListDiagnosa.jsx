import { Link, router } from '@inertiajs/react';
import { FaEye, FaTrash } from 'react-icons/fa6';
import Pagination from '../main/Pagination';

export default function TableListDiagnosa({ data }) {
    const handleDelete = (id) => {
        const confirm = window.confirm(
            'Apakah anda yakin ingin menghapus data ini?',
        );
        if (!confirm) return;

        router.delete(route('diagnosas.destroy', id));
    };

    return (
        <div className="m-4 rounded border border-gray-500 p-8">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Kode Diagnosa</th>
                            <th>User</th>
                            <th>Penyakit</th>
                            <th>Gejala Pilihan</th>
                            <th>Hasil</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((diagnosa, index) => (
                            <tr key={index}>
                                <th>{diagnosa.kode_diagnosa}</th>
                                <td>{diagnosa.name_user}</td>
                                <td>{diagnosa.penyakit.name}</td>
                                <td>
                                    {diagnosa.pilihan_gejala.map(
                                        (pilihan) => pilihan.kode_gejala + ', ',
                                    )}
                                </td>
                                <td>{diagnosa.hasil}%</td>
                                <td>
                                    <div className="flex gap-2">
                                        <Link
                                            href={route(
                                                'diagnosas.show',
                                                diagnosa.id,
                                            )}
                                            className="btn"
                                        >
                                            <FaEye className="text-blue-500" />
                                        </Link>

                                        <button
                                            onClick={() =>
                                                handleDelete(diagnosa.id)
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
