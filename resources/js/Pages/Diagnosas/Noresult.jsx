import Content from '@/Components/Content';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { BsArrowRepeat } from 'react-icons/bs';

export default function Show({ kode_diagnosa }) {
    return (
        <MainLayout>
            <Head title="Penyakit Detail" />
            <Content>
                <div className="py-8">
                    <h1 className="text-center text-4xl font-bold">
                        {kode_diagnosa}
                    </h1>
                    <h1 className="text-center text-4xl font-bold">
                        Penyakit Tidak Teridentifikasi
                    </h1>
                </div>
                <div className="mx-8 min-h-20 space-y-8 rounded bg-base-200 p-8 shadow-xl">
                    <div className="justify-self-center">
                        <Link
                            href={route('diagnosas.create')}
                            className="btn btn-warning"
                        >
                            Diagnosa Ulang{' '}
                            <BsArrowRepeat className="text-xl font-bold" />
                        </Link>
                    </div>
                </div>
            </Content>
        </MainLayout>
    );
}
