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
                <div>
                    <h1 className="text-5xl font-bold">
                        Sistem Pakar Diagnosa Tanaman Jeruk!
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi. Lorem ipsum, dolor
                        sit amet consectetur adipisicing elit. Mollitia,
                        doloremque.
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
