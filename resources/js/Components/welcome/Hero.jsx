import { Link } from '@inertiajs/react';

export default function Hero() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-full">
                    <img
                        src="/img/jeruk.jpeg"
                        className="w-full max-w-md justify-self-center rounded-lg shadow-2xl"
                    />
                </div>
                <div className="w-full">
                    <h1 className="text-5xl font-bold">
                        Sistem Pakar Diagnosa Tanaman Jeruk!
                    </h1>
                    <p className="py-6">
                        Aplikasi ini dirancang untuk membantu petani dan ahli
                        pertanian dalam mendiagnosa penyakit atau masalah pada
                        tanaman jeruk. Sistem ini menggunakan pengetahuan pakar
                        untuk memberikan analisis cepat, rekomendasi perawatan,
                        dan solusi optimal berdasarkan gejala yang dilaporkan.
                        <br />
                        Tujuannya adalah meningkatkan efisiensi, mencegah
                        kerusakan lebih lanjut, dan meningkatkan hasil panen
                        dengan cara yang lebih mudah diakses dan praktis.
                    </p>
                    <Link
                        href={route('diagnosas.create')}
                        className="btn btn-primary"
                    >
                        Mulai Diagnosa
                    </Link>
                </div>
            </div>
        </div>
    );
}
