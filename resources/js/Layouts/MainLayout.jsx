import Footer from '@/Components/main/Footer';
import Navbar from '@/Components/main/Navbar';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast, Toaster } from 'sonner';

export default function MainLayout({ children }) {
    const { flash } = usePage().props;

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
        if (flash.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    return (
        <div className="flex min-h-screen flex-col justify-between">
            <Navbar />

            <div>{children}</div>

            <Footer />

            <Toaster richColors />
        </div>
    );
}
