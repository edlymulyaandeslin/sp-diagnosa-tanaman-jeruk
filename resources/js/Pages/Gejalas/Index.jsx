import Content from '@/Components/Content';
import TableListGejala from '@/Components/gejalas/TableListGejala';
import HeaderContent from '@/Components/HeaderContent';
import SearchInput from '@/Components/SearchInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Index({ gejalas }) {
    return (
        <MainLayout>
            <Head title="Data Gejala" />
            <Content>
                <HeaderContent
                    title="Data Gejala"
                    btnTitle="Create Gejala"
                    href={route('gejalas.create')}
                />

                <SearchInput routeName={'gejalas.index'} />

                <TableListGejala data={gejalas} />
            </Content>
        </MainLayout>
    );
}
