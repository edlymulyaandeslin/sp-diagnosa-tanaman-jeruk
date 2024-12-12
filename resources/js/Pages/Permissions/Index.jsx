import Content from '@/Components/Content';
import HeaderContent from '@/Components/HeaderContent';
import TableListPermissions from '@/Components/permissions/TableListPermissions';
import SearchInput from '@/Components/SearchInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Index({ permissions }) {
    return (
        <MainLayout>
            <Head title="Data Permission" />
            <Content>
                <HeaderContent
                    title="Data Permission"
                    btnTitle="Create Permission"
                    href={route('permissions.create')}
                />

                <SearchInput routeName={'permissions.index'} />

                <TableListPermissions data={permissions} />
            </Content>
        </MainLayout>
    );
}
