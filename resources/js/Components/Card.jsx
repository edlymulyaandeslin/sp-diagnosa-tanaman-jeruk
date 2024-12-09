import { Link } from '@inertiajs/react';

export default function Card({ penyakit }) {
    return (
        <div className="relative shadow-xl card card-compact bg-base-100 md:w-72">
            <div className="overflow-hidden">
                <img
                    src={`/storage/${penyakit.image}`}
                    alt={penyakit.name}
                    className="object-cover w-full transition-all rounded-t h-52 hover:scale-110"
                />
            </div>
            <div className="card-body">
                <h2 className="card-title">{penyakit.name}</h2>
                <p className="truncate">{penyakit.description}</p>
                <div className="justify-end card-actions">
                    <Link
                        href={route('penyakits.show', penyakit.kode_penyakit)}
                        className="btn btn-primary"
                    >
                        See More
                    </Link>
                </div>
            </div>
            <span className="absolute w-10 font-bold text-center text-white bg-blue-400 right-2 top-2 rounded-xl">
                {penyakit.kode_penyakit}
            </span>
        </div>
    );
}
