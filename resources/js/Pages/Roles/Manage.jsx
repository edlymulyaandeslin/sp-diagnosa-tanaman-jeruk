import Content from '@/Components/Content';
import ErrorMessage from '@/Components/ErrorMessage';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Manage({ role }) {
    const isEditing = role ? true : false;

    const { data, setData, post, put, processing, errors } = useForm({
        name: role?.name ?? '',
    });

    const btnCreate = processing ? 'Saving...' : 'Save';
    const btnEdit = processing ? 'Updating...' : 'Update';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            put(route('roles.update', role.id));
        } else {
            post(route('roles.store'));
        }
    };

    return (
        <MainLayout>
            <Head title={`${isEditing ? 'Edit' : 'New'} Role`} />
            <Content className={'py-4'}>
                <h1 className="text-center text-3xl font-bold">
                    {isEditing ? 'Edit' : 'Create New'} Role
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
                            />
                        </label>
                        {errors.name && (
                            <ErrorMessage>{errors.name}</ErrorMessage>
                        )}
                    </div>

                    <div className="mt-4 flex justify-between">
                        <Link
                            href={route('roles.index')}
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
