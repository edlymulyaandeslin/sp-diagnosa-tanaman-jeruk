import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ penyakit }) {
    return (
        <MainLayout>
            <Head title="Penyakit Detail" />
            <div>
                <h1 className="my-8 text-4xl font-bold text-center">
                    {penyakit.name}
                </h1>
                <div className="flex justify-center">
                    <img
                        src={`/storage/${penyakit.image}`}
                        alt={penyakit.name}
                        className="object-cover rounded h-60 w-60"
                    />
                </div>
            </div>
            <div className="p-8 mx-8 my-8 space-y-8 rounded shadow-xl min-h-60 bg-base-200">
                <div>
                    <span>Description : </span>
                    <p>{penyakit.description}</p>
                </div>
                <div>
                    <span>Solution : </span>
                    {penyakit.solution.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
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
