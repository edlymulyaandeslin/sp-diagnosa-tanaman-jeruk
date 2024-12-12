import Content from '@/Components/Content';
import ErrorMessage from '@/Components/ErrorMessage';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function Create({ gejalas }) {
    const { user } = usePage().props.auth;

    const { data, setData, post, processing, errors } = useForm({
        name_user: user?.name ?? '',
        pilihan_gejala: [],
    });

    const btnCreate = processing ? 'Checking...' : 'Check';

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('diagnosas.store'));
    };

    return (
        <MainLayout>
            <Head title={'Mulai Diagnosa'} />
            <Content className={'py-4'}>
                <h1 className="text-center text-3xl font-bold">
                    Create New Diagnosa
                </h1>

                <form
                    className="m-8 space-y-4 rounded border border-green-500 px-8 py-4"
                    onSubmit={handleSubmit}
                >
                    <div className="w-full max-w-lg">
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">
                                    Masukkan Nama
                                </span>
                            </div>
                            <input
                                type="text"
                                value={data.name_user}
                                onChange={(e) =>
                                    setData('name_user', e.target.value)
                                }
                                placeholder="Type here"
                                className="input input-bordered w-full"
                                required
                            />
                        </label>
                        {errors.name_user && (
                            <ErrorMessage>{errors.name_user}</ErrorMessage>
                        )}
                    </div>

                    <div className="w-full">
                        <label htmlFor="" className="label">
                            Pilih Gejala
                        </label>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                            {gejalas.map((gejala, index) => (
                                <div className="form-control" key={index}>
                                    <label className="flex cursor-pointer gap-2">
                                        <input
                                            type="checkbox"
                                            className="checkbox-success checkbox"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setData('pilihan_gejala', [
                                                        ...data.pilihan_gejala,
                                                        {
                                                            id: gejala.id,
                                                            kode_gejala:
                                                                gejala.kode_gejala,
                                                        },
                                                    ]);
                                                } else {
                                                    setData(
                                                        'pilihan_gejala',
                                                        data.pilihan_gejala.filter(
                                                            (g) =>
                                                                g.id !==
                                                                gejala.id,
                                                        ),
                                                    );
                                                }
                                            }}
                                        />
                                        <span className="label-text text-left">
                                            {gejala.name}
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>

                        {errors.pilihan_gejala && (
                            <ErrorMessage>{errors.pilihan_gejala}</ErrorMessage>
                        )}
                    </div>

                    <div className="flex justify-between">
                        <Link href={'/'} className="btn btn-error">
                            Cancel
                        </Link>
                        <button type="submit" className="btn btn-primary">
                            {btnCreate}
                        </button>
                    </div>
                </form>
            </Content>
        </MainLayout>
    );
}
