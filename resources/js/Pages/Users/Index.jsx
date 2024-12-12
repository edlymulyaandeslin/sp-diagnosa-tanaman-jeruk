import Content from '@/Components/Content';
import HeaderContent from '@/Components/HeaderContent';
import SearchInput from '@/Components/SearchInput';
import TableListUsers from '@/Components/users/TableListUsers';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Index({ users }) {
    return (
        <MainLayout>
            <Head title="Data User" />
            <Content>
                <HeaderContent
                    title="Data User"
                    btnTitle="Create User"
                    href={route('users.create')}
                />

                <SearchInput routeName={'users.index'} />

                <TableListUsers data={users} />
            </Content>
        </MainLayout>
    );
}
