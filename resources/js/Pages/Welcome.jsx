import Hero from '@/Components/welcome/Hero';
import Penyakit from '@/Components/welcome/Penyakit';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Welcome({ penyakits }) {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <Penyakit penyakitList={penyakits} />
        </MainLayout>
    );
}
