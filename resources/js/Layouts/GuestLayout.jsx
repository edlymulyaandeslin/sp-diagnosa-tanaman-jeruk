import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex flex-col items-center min-h-screen pt-6 bg-base-100 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                </Link>
            </div>

            <div className="w-full px-6 py-4 mt-6 overflow-hidden shadow-md bg-base-200 sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
