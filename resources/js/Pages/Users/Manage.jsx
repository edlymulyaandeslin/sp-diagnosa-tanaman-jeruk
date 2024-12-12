import Content from '@/Components/Content';
import ErrorMessage from '@/Components/ErrorMessage';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Manage({ roles, user }) {
    const isEditing = user ? true : false;

    const { data, setData, post, put, processing, errors } = useForm({
        name: user?.name ?? '',
        email: user?.email ?? '',
        password: '',
        role: user?.roles[0]?.name ?? '',
    });

    const btnCreate = processing ? 'Saving...' : 'Save';
    const btnEdit = processing ? 'Updating...' : 'Update';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            put(route('users.update', user.id));
        } else {
            post(route('users.store'));
        }
    };

    useEffect(() => {
        if (!data.role) {
            setData('role', roles[0].name);
        }
    }, []);

    return (
        <MainLayout>
            <Head title={`${isEditing ? 'Edit' : 'New'} User`} />
            <Content className={'py-4'}>
                <h1 className="text-center text-3xl font-bold">
                    {isEditing ? 'Edit' : 'Create New'} User
                </h1>

                <form
                    className="mx-auto w-full max-w-xl p-4"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Name</span>
                            </div>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                        {errors.name && (
                            <ErrorMessage>{errors.name}</ErrorMessage>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                        {errors.email && (
                            <ErrorMessage>{errors.email}</ErrorMessage>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">
                                    {isEditing ? 'New ' : ''}
                                    Password
                                </span>
                            </div>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData('password', e.target.value)
                                }
                                placeholder="Type here"
                                className="input input-bordered w-full"
                            />
                        </label>
                        {errors.password && (
                            <ErrorMessage>{errors.password}</ErrorMessage>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Role</span>
                            </div>
                            <select
                                className="select select-bordered"
                                value={data.role}
                                onChange={(e) =>
                                    setData('role', e.target.value)
                                }
                            >
                                <option disabled selected>
                                    Pick one
                                </option>
                                {roles.map((role, index) => (
                                    <option key={index} value={role.name}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {errors.role && (
                            <ErrorMessage>{errors.role}</ErrorMessage>
                        )}
                    </div>

                    <div className="mt-4 flex justify-between">
                        <Link
                            href={route('users.index')}
                            className="btn btn-error"
                        >
                            Cancel
                        </Link>
                        <button type="submit" className="btn btn-primary">
                            {isEditing ? btnEdit : btnCreate}
                        </button>
                    </div>
                </form>
            </Content>
        </MainLayout>
    );
}
