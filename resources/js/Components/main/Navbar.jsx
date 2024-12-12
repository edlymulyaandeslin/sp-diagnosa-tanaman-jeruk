import { Link, usePage } from '@inertiajs/react';

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <div className="navbar flex justify-between bg-base-200 px-8 py-4">
            <div className="flex">
                <Link className="text-xl font-bold" href="/">
                    Expert Diagnosis System
                </Link>
                {auth.user && (
                    <div className="ml-4 flex gap-2 border-l border-gray-400">
                        <div className="relative">
                            <Link
                                className="btn btn-ghost"
                                href={route('diagnosas.index')}
                            >
                                Diagnosa
                            </Link>
                            {route().current('diagnosas.*') && (
                                <span className="absolute -bottom-2 left-0 ml-5 h-0.5 w-1/2 rounded-xl bg-primary"></span>
                            )}
                        </div>
                        <div className="relative">
                            <Link
                                className="btn btn-ghost"
                                href={route('penyakits.index')}
                            >
                                Penyakit
                            </Link>
                            {route().current('penyakits.index') && (
                                <span className="absolute -bottom-2 left-0 ml-5 h-0.5 w-1/2 rounded-xl bg-primary"></span>
                            )}
                        </div>
                        <div className="relative">
                            <Link
                                className="btn btn-ghost"
                                href={route('gejalas.index')}
                            >
                                Gejala
                            </Link>
                            {route().current('gejalas.*') && (
                                <span className="absolute -bottom-2 left-0 ml-5 h-0.5 w-1/2 rounded-xl bg-primary"></span>
                            )}
                        </div>
                        <div className="relative">
                            <Link
                                className="btn btn-ghost"
                                href={route('rules.index')}
                            >
                                Rules
                            </Link>
                            {route().current('rules.*') && (
                                <span className="absolute -bottom-2 left-0 ml-5 h-0.5 w-1/2 rounded-xl bg-primary"></span>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex gap-2">
                {auth.user ? (
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="avatar btn btn-circle btn-ghost"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            <li>
                                <Link href={route('profile.edit')}>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center justify-center">
                        <Link className="btn btn-ghost" href={route('login')}>
                            Login
                        </Link>
                        <Link
                            className="btn btn-ghost"
                            href={route('register')}
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
