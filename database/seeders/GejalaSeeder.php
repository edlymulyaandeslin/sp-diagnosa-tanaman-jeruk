<?php

namespace Database\Seeders;

use App\Models\Gejala;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GejalaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Gejala::create([
            'kode_gejala' => 'G1',
            'name' => 'Daun jeruk mengerut, menggulung, atau kering'
        ]);
        Gejala::create([
            'kode_gejala' => 'G2',
            'name' => 'Hasil sekresi berwarna putih transparan berbentuk spiral'
        ]);
        Gejala::create([
            'kode_gejala' => 'G3',
            'name' => 'Tunas muda keriting dan pertumbuhan tanaman terhambat hingga tanaman mati'
        ]);
        Gejala::create([
            'kode_gejala' => 'G4',
            'name' => 'Terdapat lubang gerekan pada buah muda hingga buah menjelang panen mengeluarkan getah seperti blendok'
        ]);
        Gejala::create([
            'kode_gejala' => 'G5',
            'name' => 'Penggerek buah meninggalkan lubang-lubang kecil pada kulit buah dan rongga-rongga di bawah permukaan buah'
        ]);
        Gejala::create([
            'kode_gejala' => 'G6',
            'name' => 'Busuk buah bagian dalam mengakibatkan gugurnya buah'
        ]);
        Gejala::create([
            'kode_gejala' => 'G7',
            'name' => 'Terdapat bekas luka keabu-abuan yang disertai garis nekrotis di sekeliling luka'
        ]);
        Gejala::create([
            'kode_gejala' => 'G8',
            'name' => 'Bekas luka tampak di permukaan kulit buah di sekeliling tangkai'
        ]);
        Gejala::create([
            'kode_gejala' => 'G9',
            'name' => 'Tangkai dan daun muda yang terserang mengakibatkan helai daun menebal, kedua susu daun agak menggulung ke atas dan pertumbuhannya tidak normal'
        ]);
        Gejala::create([
            'kode_gejala' => 'G10',
            'name' => 'Kulit batang berwarna hitam kebasah-basahan'
        ]);
        Gejala::create([
            'kode_gejala' => 'G11',
            'name' => 'Mengeluarkan getah (blendok) yang berwarna coklat'
        ]);
        Gejala::create([
            'kode_gejala' => 'G12',
            'name' => 'Bagian tanaman yang terserang bila digosok menunjukkan warna coklat'
        ]);
        Gejala::create([
            'kode_gejala' => 'G13',
            'name' => 'Kulit menggerut, retak-retak, terkelupas, terlihat cambium coklat tua'
        ]);
        Gejala::create([
            'kode_gejala' => 'G14',
            'name' => 'Akar membusuk, berwarna hitam, atau kering'
        ]);
        Gejala::create([
            'kode_gejala' => 'G15',
            'name' => 'Daun layu, kering, batang mengering, dan mati'
        ]);
        Gejala::create([
            'kode_gejala' => 'G16',
            'name' => 'Kulit batang, cabang, atau ranting menghasilkan blendok berwarna kuning keemasan'
        ]);
        Gejala::create([
            'kode_gejala' => 'G17',
            'name' => 'Kulit batang atau cabang mengering tanpa blendok'
        ]);
        Gejala::create([
            'kode_gejala' => 'G18',
            'name' => 'Massa spora jamur berwarna putih atau hitam'
        ]);
        Gejala::create([
            'kode_gejala' => 'G19',
            'name' => 'Warna kayu menjadi keabu-abuan'
        ]);
        Gejala::create([
            'kode_gejala' => 'G20',
            'name' => 'Muncul lapisan seperti tepung putih di daun dan tangkai muda'
        ]);
        Gejala::create([
            'kode_gejala' => 'G21',
            'name' => 'Daun muda mengering dan keriput'
        ]);
        Gejala::create([
            'kode_gejala' => 'G22',
            'name' => 'Daun tua rontok'
        ]);
        Gejala::create([
            'kode_gejala' => 'G23',
            'name' => 'Terhambatnya pembungaan bila terjadi saat tanaman jeruk berbunga'
        ]);
    }
}