import Card from '../Card';

export default function Penyakit({ penyakitList }) {
    return (
        <div className="min-h-screen bg-base-200 px-12 py-8">
            <h1 className="text-center text-4xl font-bold">Data penyakit</h1>
            <div className="mt-8 grid grid-cols-1 gap-4 justify-self-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {penyakitList.map((penyakit, index) => (
                    <Card key={index} penyakit={penyakit} />
                ))}
            </div>
        </div>
    );
}
