import Content from '@/Components/Content';
import ErrorMessage from '@/Components/ErrorMessage';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Manage({ penyakits, gejalas, rule }) {
    const isEditing = rule ? true : false;

    const { data, setData, post, put, processing, errors } = useForm({
        penyakit_id: rule?.penyakit_id ?? '',
        gejala_id: rule?.gejala_id ?? '',
        belief: rule?.belief ?? '',
    });

    const btnCreate = processing ? 'Saving...' : 'Save';
    const btnEdit = processing ? 'Updating...' : 'Update';

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEditing) {
            put(route('rules.update', rule.id));
        } else {
            post(route('rules.store'));
        }
    };

    useEffect(() => {
        if (!data.penyakit_id) {
            setData('penyakit_id', penyakits[0].id);
        }
        if (!data.gejala_id) {
            setData('gejala_id', gejalas[0].id);
        }
    }, [setData]);

    return (
        <MainLayout>
            <Head title={`${isEditing ? 'Edit' : 'New'} Rule`} />
            <Content className={'py-4'}>
                <h1 className="text-center text-3xl font-bold">
                    {isEditing ? 'Edit' : 'Create New'} Rule
                </h1>

                <form
                    className="mx-auto w-full max-w-xl p-4"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Penyakit</span>
                            </div>
                            <select
                                className="select select-bordered"
                                value={data.penyakit_id}
                                onChange={(e) =>
                                    setData('penyakit_id', e.target.value)
                                }
                            >
                                <option disabled selected>
                                    Pick one
                                </option>
                                {penyakits.map((penyakit, index) => (
                                    <option key={index} value={penyakit.id}>
                                        {penyakit.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {errors.penyakit_id && (
                            <ErrorMessage>{errors.penyakit_id}</ErrorMessage>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Gejala</span>
                            </div>
                            <select
                                className="select select-bordered"
                                value={data.gejala_id}
                                onChange={(e) =>
                                    setData('gejala_id', e.target.value)
                                }
                            >
                                <option disabled selected>
                                    Pick one
                                </option>
                                {gejalas.map((gejala, index) => (
                                    <option key={index} value={gejala.id}>
                                        {gejala.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                        {errors.gejala_id && (
                            <ErrorMessage>{errors.gejala_id}</ErrorMessage>
                        )}
                    </div>

                    <div className="w-full">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Belief</span>
                            </div>
                            <input
                                type="number"
                                value={data.belief}
                                onChange={(e) =>
                                    setData('belief', e.target.value)
                                }
                                placeholder="Type here"
                                className="input input-bordered w-full"
                            />
                        </label>
                        {errors.belief && (
                            <ErrorMessage>{errors.belief}</ErrorMessage>
                        )}
                    </div>

                    <div className="mt-4 flex justify-between">
                        <Link
                            href={route('rules.index')}
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
