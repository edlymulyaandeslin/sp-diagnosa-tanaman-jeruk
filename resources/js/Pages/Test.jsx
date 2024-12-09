import Content from '@/Components/Content';
import MainLayout from '@/Layouts/MainLayout';
import { Head, useForm } from '@inertiajs/react';

export default function Test() {
    const { data, setData, patch } = useForm({
        gambar: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        patch(route('test.put'));
    };

    return (
        <MainLayout>
            <Head title="Testing upload image" />
            <Content className={'mt-16 justify-self-center'}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="file"
                        onChange={(e) => setData('gambar', e.target.files[0])}
                        className="file-input w-full max-w-xs"
                    />
                    <br />
                    <button type="submit" className="btn btn-primary mt-8">
                        Submit
                    </button>
                </form>
            </Content>
        </MainLayout>
    );
}
