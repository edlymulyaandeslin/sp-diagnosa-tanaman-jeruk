import { Link, router } from '@inertiajs/react';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';
import Pagination from '../main/Pagination';

export default function TableListPermissions({ data }) {
    const handleDelete = (permissionId) => {
        const confirm = window.confirm(
            'Apakah anda yakin ingin menghapus data ini?',
        );
        if (!confirm) return;

        router.delete(route('permissions.destroy', permissionId));
    };

    return (
        <div className="m-4 rounded border border-gray-500 p-8">
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.data.map((permission, index) => (
                            <tr key={index}>
                                <td>{permission.name}</td>
                                <td>
                                    <div className="flex justify-center gap-4">
                                        <Link
                                            href={route(
                                                'permissions.edit',
                                                permission.id,
                                            )}
                                            className="btn"
                                        >
                                            <FaPenToSquare className="text-yellow-500" />
                                        </Link>
                                        <button
                                            onClick={() =>
                                                handleDelete(permission.id)
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
                                    colSpan={2}
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
