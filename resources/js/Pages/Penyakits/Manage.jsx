import Content from '@/Components/Content';
import ErrorMessage from '@/Components/ErrorMessage';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Manage({ penyakit }) {
    const isEditing = penyakit ? true : false;

    const { data, setData, post, put, processing, errors } = useForm({
        kode_penyakit: penyakit?.kode_penyakit ?? '',
        name: penyakit?.name ?? '',
        description: penyakit?.description ?? '',
        solution: penyakit?.solution ?? '',
        image: '',
    });

    const btnCreate = processing ? 'Saving...' : 'Save';
    const btnEdit = processing ? 'Updating...' : 'Update';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            put(route('penyakits.update', penyakit.kode_penyakit));
        } else {
            post(route('penyakits.store'));
        }
    };

    return (
        <MainLayout>
            <Head title={`${isEditing ? 'Edit' : 'New'} Penyakit`} />
            <Content className={'py-4'}>
                <h1 className="text-center text-3xl font-bold">
                    {isEditing ? 'Edit' : 'Create New'} Penyakit
                </h1>

                <form
                    className="mx-auto mt-4 w-full max-w-xl p-4"
                    onSubmit={handleSubmit}
                >
                    <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">
                                        Kode Penyakit
                                    </span>
                                </div>
                                <input
                                    type="text"
                                    value={data.kode_penyakit}
                                    onChange={(e) =>
                                        setData('kode_penyakit', e.target.value)
                                    }
                                    placeholder="Type here"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            {errors.kode_penyakit && (
                                <ErrorMessage>
                                    {errors.kode_penyakit}
                                </ErrorMessage>
                            )}
                        </div>

                        <div>
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
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                                className="textarea textarea-bordered h-24"
                                placeholder="Type here"
                            ></textarea>
                        </label>
                        {errors.description && (
                            <ErrorMessage>{errors.description}</ErrorMessage>
                        )}
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Solution</span>
                            </div>
                            <textarea
                                value={data.solution}
                                onChange={(e) =>
                                    setData('solution', e.target.value)
                                }
                                className="textarea textarea-bordered h-24"
                                placeholder="Type here"
                            ></textarea>
                        </label>
                        {errors.solution && (
                            <ErrorMessage>{errors.solution}</ErrorMessage>
                        )}
                    </div>
                    {!isEditing && (
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Image</span>
                                </div>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered file-input-primary w-full"
                                    onChange={(e) =>
                                        setData('image', e.target.files[0])
                                    }
                                />
                            </label>
                            {errors.image && (
                                <ErrorMessage>{errors.image}</ErrorMessage>
                            )}
                        </div>
                    )}

                    <div className="mt-4 flex justify-between">
                        <Link
                            href={route('penyakits.index')}
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
