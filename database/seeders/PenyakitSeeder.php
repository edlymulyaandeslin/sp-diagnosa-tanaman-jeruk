<?php

namespace Database\Seeders;

use App\Models\Penyakit;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PenyakitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Penyakit::create([
            'kode_penyakit' => 'P1',
            'image' => 'penyakits/hamakutuloncat.jpg',
            'name' => 'Hama kutu loncat',
            'description' => 'Hama kutu loncat pada tanaman jeruk (Diaphorina citri) adalah serangga kecil yang menjadi vektor utama penyakit Citrus Greening Disease (Huanglongbing/HLB). Hama ini menyerang dengan cara menghisap cairan dari tunas muda atau daun tanaman jeruk, menyebabkan daun menggulung, kering, dan akhirnya rontok.',
            'solution' => 'a. Biologi, dengan memanfaatkan musuh alami parasitoid, predator dan patogen : Prarasitoid Tamarixia radiata (Water) dan Diaphorincyrtus diaphorinae (Lin & Tao), D. aligarhensis yang daya parasitasinya berturut-turut 90 %, dan 60 - 80 %, serta Psyllaephagus sp.
            b. Kimiawi, pengedalian secara kimia dapat dilakukan pada tanaman menjelang atau saat bertunas. Insektisida yang dapat digunakan untuk mengendalikan D.citri adalah dengan ba. Dimethoate yang diaplikasi pada daun atau tanah, monocrotaphos yang diaplikasi melalui daun atau suntikan pada batang.'
        ]);
        Penyakit::create([
            'kode_penyakit' => 'P2',
            'image' => 'penyakits/hamapenggerekbuah.jpg',
            'name' => 'Hama penggerek buah (Citripestis sagitiferella)',
            'description' => 'Hama penggerek buah jeruk (Citripestis sagitiferella) adalah ulat yang menyerang buah jeruk dengan cara melubangi kulit buah dan memakan daging buahnya. Serangan hama ini menyebabkan buah rusak, busuk, rontok, dan menurunkan kualitas serta kuantitas hasil panen.',
            'solution' => 'a.	Pengendalian pada hama penggerek buah dapat dengan menggunakan senyawa penolak ekstrak minyak serai, formulasi tersebut  diteteskan pada kapas yang terletak pada gelas air mineral dengan lubangi di samping kiri dan kanannya.
            b.	Pengendalian pada  hama lalat buah dapat menggunakan perangkap senyawa metil eugenol yang  sangat disukai oleh lalat jantan terutama jenis Bactrocera carambola dan B. papaye.
            c.	Penggunaan perangkap likat kuning dapat digunakan untuk menangkap lalat betina.
            d.	Cara pengendalian lainnya dengan melakukan sanitasi kebun dengan memetik buah yang teserang dan memungut buah yang gugur kemudian dibenamkan di dalam tanah, untuk memutus siklus hidup hama.
            e.	Pengendalian dengan cara kultur teknis yaitu dengan membalik tanah di bawah tajuk agar pupa yang terdapat di dalam tanah terangkat ke atas sehingga pupa mati terkena sinar matahari.
            f.	Pengendalian secara kimia dapat dilakukan dengan penyemprotan insektisida dengan interval 1 minggu sekali pada masa kritis umur buah 2-5 bulan untuk hama penggerek buah.'
        ]);
        Penyakit::create([
            'kode_penyakit' => 'P3',
            'image' => 'penyakits/hamatrips.jpg',
            'name' => 'Hama Thrips (Scirtothrips citri)',
            'description' => 'Hama Thrips (Scirtothrips citri) adalah serangga kecil yang menyerang tanaman jeruk, terutama pada daun, bunga, dan buah muda. Thrips merusak tanaman dengan cara menghisap cairan sel, menyebabkan jaringan tanaman menjadi rusak.',
            'solution' => 'a.	Menjaga lingkungan tajuk tanaman agar tidak terlalu rapat sehingga sinar matahari dapat menerobos sampai ke bagian dalam tajuk tanaman.
            b.	Menghindari penggunaan mulsa jerami yang dapat digunakan thrips untuk tempat bertelur Sanitasi dengan cara memangkas bagian tanaman yang terserang.
            c.	Penjarangan buah.
            d.	Penggunaan musuh alami seperti predator Phytoseiidae, Coccinellidae, Chrysopidae dan agens hayati Metarrhizium spp.
            e.	Penanaman tanaman perangkap Tagetes erecta di pinggir kebun.
            f.	Secara kimia, thrips dapat dikendalikan dengan penyemprotan insektisida berbahan aktif Alfametrin atau Alfasipermetrin.
            g.	Penyemprotan pestisida hayati dari ekstrak hasil rendaman biji keben pada konsentrasi 20 g/l juga dapat menurunkan serangan hama thrips pada tanaman jeruk.
            h.	Waktu pengendalian hama thrips yang paling efektif adalah saat tanaman sedang bertunas, berbunga dan pembentukan buah pada musim kemarau.'
        ]);
        Penyakit::create([
            'kode_penyakit' => 'P4',
            'image' => 'penyakits/busukakar.jpg',
            'name' => 'Busuk akar phytophthora',
            'description' => 'Busuk akar Phytophthora pada tanaman jeruk disebabkan oleh jamur Phytophthora spp., yang menyerang akar dan pangkal batang. Penyakit ini menyebabkan terganggunya penyerapan air dan nutrisi, sehingga tanaman melemah dan akhirnya mati.',
            'solution' => 'a.	Usahakan kebun jeruk manis tidak terlalu lembap, bila perlu kurangi tanaman penahan angin dan lakukan pemangkasan batang pohon jeruk ini. Parit (saluran air) drainase dipelihara dengan baik.
            b.	Bila serangan ringan, kupaslah bagian kulit yang membusuk dengan pisau yang tajam dan bersih. Kemudian batang pohon diolesi dengan ter atau carbolineum parafine.
            c.	Kupas bagian kulit yang terserang penyakit, kemudian bagian kayu diolesi dengan fungisida yang mengandung tembaga seperti Cupro Oksi Chlorida atau dengan Dithane M-45.'
        ]);
        Penyakit::create([
            'kode_penyakit' => 'P5',
            'image' => 'penyakits/diplodia.jpeg',
            'name' => 'Blendok / Diplodia',
            'description' => 'Blendok atau Diplodia pada tanaman jeruk disebabkan oleh jamur Botryodiplodia theobromae. Penyakit ini menyerang bagian batang, cabang, dan buah, menyebabkan keluarnya cairan lengket seperti getah (blendok). Serangan ini sering terjadi pada tanaman yang lemah atau mengalami luka.',
            'solution' => 'a.	Misalnya, penghembusan tepung belerang pada bagian tanaman jeruk yang terserang pada pagi hari (masih ada embun pagi). Penghembusan ini dilakukan terus-menerus pseminggu sekali, sehingga tanaman jeruk sembuh. Selain itu dapat pula disemprot dengan Antracol 70 WP dengan selang waktu 5 - 7 hari sekali semprot.'
        ]);
        Penyakit::create([
            'kode_penyakit' => 'P6',
            'image' => 'penyakits/embuntepung.jpeg',
            'name' => 'Embun Tepung',
            'description' => 'Embun tepung pada tanaman jeruk disebabkan oleh jamur seperti Oidium citri. Penyakit ini menyerang daun, bunga, dan buah muda, membentuk lapisan putih seperti tepung yang dapat menghambat fotosintesis dan merusak penampilan buah.',
            'solution' => 'a.	Gunakan fungsinida yang mengandung belerang. Misalnya, penghembusan tepung belerang pada bagian tanaman jeruk yang terserang pada pagi hari (masih ada embun pagi). Penghembusan ini dilakukan terus-menerus pseminggu sekali, sehingga tanaman jeruk sembuh. Selain itu dapat pula disemprot dengan Antracol 70 WP dengan selang waktu 5 – 7 hari sekali semprot.'
        ]);
    }
}