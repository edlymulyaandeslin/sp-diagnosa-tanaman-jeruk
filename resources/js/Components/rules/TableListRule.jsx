import { Link, router } from '@inertiajs/react';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';
import Pagination from '../main/Pagination';

export default function TableListRule({ data }) {
    const handleDelete = (id) => {
        const confirm = window.confirm(
            'Apakah anda yakin ingin menghapus data ini?',
        );
        if (!confirm) return;

        router.delete(route('rules.destroy', id));
    };

    return (
        <div className="m-4 rounded border border-gray-500 p-8">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Penyakit</th>
                            <th>Gejala</th>
                            <th>Belief</th>
                            <th>Plausibility</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((rule, index) => (
                            <tr key={index}>
                                <th>{rule.penyakit.name}</th>
                                <th>{rule.gejala.name}</th>
                                <td>{rule.belief}</td>
                                <td>{rule.plausibility}</td>
                                <td>
                                    <div className="flex gap-4">
                                        <Link
                                            href={route('rules.edit', rule.id)}
                                            className="btn"
                                        >
                                            <FaPenToSquare className="text-yellow-500" />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(rule.id)
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
