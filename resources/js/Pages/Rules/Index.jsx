import Content from '@/Components/Content';
import HeaderContent from '@/Components/HeaderContent';
import TableListRule from '@/Components/rules/TableListRule';
import SearchInput from '@/Components/SearchInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Index({ rules }) {
    return (
        <MainLayout>
            <Head title="Data Rule" />
            <Content>
                <HeaderContent
                    title="Data Rule"
                    btnTitle="Create Rule"
                    href={route('rules.create')}
                />

                <SearchInput routeName={'rules.index'} />

                <TableListRule data={rules} />
            </Content>
        </MainLayout>
    );
}
