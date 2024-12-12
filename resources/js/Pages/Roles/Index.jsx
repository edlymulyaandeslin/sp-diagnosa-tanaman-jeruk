import Content from '@/Components/Content';
import HeaderContent from '@/Components/HeaderContent';
import TableListRoles from '@/Components/roles/TableListRoles';
import SearchInput from '@/Components/SearchInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Index({ roles }) {
    return (
        <MainLayout>
            <Head title="Data Role" />
            <Content>
                <HeaderContent
                    title="Data Role"
                    btnTitle="Create Role"
                    href={route('roles.create')}
                />

                <SearchInput routeName={'roles.index'} />

                <TableListRoles data={roles} />
            </Content>
        </MainLayout>
    );
}
