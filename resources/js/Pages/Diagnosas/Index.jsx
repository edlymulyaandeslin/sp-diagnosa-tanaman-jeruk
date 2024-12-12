import Content from '@/Components/Content';
import TableListDiagnosa from '@/Components/diagnosas/TableListDiagnosa';
import HeaderContent from '@/Components/HeaderContent';
import SearchInput from '@/Components/SearchInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Index({ diagnosas }) {
    return (
        <MainLayout>
            <Head title="Data Diagnosa" />
            <Content>
                <HeaderContent
                    title="Data Diagnosa"
                    btnTitle="Create Diagnosa"
                    href={route('diagnosas.create')}
                />

                <SearchInput routeName={'diagnosas.index'} />

                <TableListDiagnosa data={diagnosas} />
            </Content>
        </MainLayout>
    );
}
