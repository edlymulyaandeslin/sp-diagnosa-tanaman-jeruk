import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ penyakit }) {
    return (
        <MainLayout>
            <Head title="Penyakit Detail" />
            <h1 className="my-8 text-center text-4xl font-bold">
                {penyakit.name}
            </h1>
            <div className="mx-8 my-8 min-h-60 space-y-8 rounded bg-base-200 p-8 shadow-xl">
                <div>
                    <span>Description : </span>
                    <p>{penyakit.description}</p>
                </div>
                <div>
                    <span>Solution : </span>
                    <p>{penyakit.solution}</p>
                </div>

                <div>
                    <Link href="/" className="btn btn-primary">
                        Back
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
}
