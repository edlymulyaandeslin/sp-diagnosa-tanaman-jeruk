import Content from '@/Components/Content';
import HeaderContent from '@/Components/HeaderContent';
import TableListPenyakit from '@/Components/penyakits/TableListPenyakit';
import SearchInput from '@/Components/SearchInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Index({ penyakits }) {
    return (
        <MainLayout>
            <Head title="Data Penyakit" />
            <Content>
                <HeaderContent
                    title="Data Penyakit"
                    btnTitle="Create Penyakit"
                    href={route('penyakits.create')}
                />

                <SearchInput routeName={'penyakits.index'} />

                <TableListPenyakit data={penyakits} />
            </Content>
        </MainLayout>
    );
}
