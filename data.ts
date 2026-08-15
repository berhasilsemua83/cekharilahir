import { Question, ResultProfile } from './types';

// INSTRUKSI UNTUK USER:
// Karena keterbatasan output AI, di bawah ini hanya sebagian contoh.
// SILAKAN HAPUS ISI ARRAY DI BAWAH, DAN COPY-PASTE FULL 1000 DATA ANDA DI SINI.
// Pastikan formatnya dimulai dengan '[' dan diakhiri dengan ']'

export const QUESTIONS_DB: Question[] = [
  {
    "id": 1,
    "question": "Saat menghadapi proyek baru di kantor, sikap saya adalah...",
    "options": {
      "A": "Fokus pada hasil akhir dan cara mencapainya dengan cepat.",
      "B": "Membuat rencana kerja yang sangat detail dan terstruktur.",
      "C": "Menyambutnya dengan antusias karena akan bertemu banyak orang.",
      "D": "Mengikuti alur yang sudah ada agar suasana tetap tenang."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 2,
    "question": "Dalam sebuah kelompok pertemanan, saya biasanya dikenal sebagai orang yang...",
    "options": {
      "A": "Sering mengambil keputusan tentang tempat yang akan dikunjungi.",
      "B": "Pendiam namun setia kawan dan mudah diajak ke mana saja.",
      "C": "Suka bercerita dan menjadi pusat perhatian suasana.",
      "D": "Pendengar yang teliti dan memperhatikan kebutuhan teman."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 3,
    "question": "Ketika terjadi perselisihan dalam keluarga, reaksi saya adalah...",
    "options": {
      "A": "Langsung menyatakan apa yang salah agar masalah segera selesai.",
      "B": "Menganalisis penyebab masalah sebelum bicara dengan hati-hati.",
      "C": "Mencoba mencairkan suasana dengan candaan atau mengalihkan topik.",
      "D": "Cenderung mengalah demi menjaga kedamaian di dalam rumah."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 4,
    "question": "Jika ditunjuk sebagai pemimpin sebuah tim, gaya kepemimpinan saya...",
    "options": {
      "A": "Memberikan instruksi tegas dan menuntut hasil yang maksimal.",
      "B": "Memastikan semua standar kualitas terpenuhi dengan sangat rinci.",
      "C": "Memotivasi anggota dengan semangat dan pujian yang tulus.",
      "D": "Mendengarkan masukan semua anggota untuk mencapai mufakat."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 5,
    "question": "Bagaimana cara saya menghadapi situasi konflik dengan rekan kerja?",
    "options": {
      "A": "Menghadapi orang tersebut secara terbuka untuk mencari solusi.",
      "B": "Menuliskan poin keberatan saya secara logis dan sistematis.",
      "C": "Berharap masalah hilang dengan sendirinya lewat obrolan santai.",
      "D": "Menghindari perdebatan dan lebih memilih untuk berkompromi."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 6,
    "question": "Saat berada di bawah tekanan tenggat waktu, saya akan...",
    "options": {
      "A": "Tetap optimis meski pekerjaan sedikit berantakan di sana-sini.",
      "B": "Bekerja lebih keras dan mendesak orang lain untuk bergerak.",
      "C": "Berusaha tetap tenang dan mengerjakan apa yang bisa dilakukan.",
      "D": "Merasa cemas jika hasil pekerjaan tidak sempurna sesuai standar."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 7,
    "question": "Dalam mengambil keputusan besar, pertimbangan utama saya adalah...",
    "options": {
      "A": "Bagaimana keputusan ini memengaruhi kenyamanan orang di sekitar.",
      "B": "Apakah keputusan ini akan membuat saya dan orang lain senang.",
      "C": "Data dan fakta yang sudah saya kumpulkan sebelumnya.",
      "D": "Apakah keputusan ini akan memberikan hasil yang menguntungkan."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 8,
    "question": "Rutinitas pagi saya biasanya terlihat seperti...",
    "options": {
      "A": "Sangat efisien dan langsung melakukan tugas yang paling penting.",
      "B": "Penuh energi, spontan, dan kadang terburu-buru karena asyik mengobrol.",
      "C": "Teratur sesuai jadwal yang sudah saya susun sebelumnya.",
      "D": "Santai, tenang, dan tidak suka jika diganggu mendadak."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 9,
    "question": "Gaya komunikasi saya dalam sebuah pertemuan cenderung...",
    "options": {
      "A": "Langsung ke poin utama tanpa banyak basa-basi.",
      "B": "Ekspresif, menggunakan banyak gerakan tangan, dan penuh cerita.",
      "C": "Berhati-hati dalam memilih kata agar tidak terjadi kesalahan.",
      "D": "Lebih banyak mendengarkan dan hanya bicara jika diperlukan."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 10,
    "question": "Ketika memikirkan masa depan, saya sering merasa...",
    "options": {
      "A": "Khawatir jika rencana yang saya buat tidak berjalan sempurna.",
      "B": "Tenang selama kebutuhan dasar dan kenyamanan saya terpenuhi.",
      "C": "Yakin bisa menaklukkan tantangan dan mencapai target hidup.",
      "D": "Bersemangat dengan segala kemungkinan dan petualangan baru."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 11,
    "question": "Saat menghadiri pesta yang ramai, saya biasanya...",
    "options": {
      "A": "Menikmati makanan sambil mengobrol santai dengan teman lama.",
      "B": "Duduk di pojok sambil mengamati perilaku orang di sana.",
      "C": "Mencari orang yang bisa diajak bicara tentang peluang bisnis.",
      "D": "Berpindah dari satu grup ke grup lain untuk menyapa."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 12,
    "question": "Jika saya membuat kesalahan dalam pekerjaan, saya akan...",
    "options": {
      "A": "Menerima teguran dengan tenang dan mencoba lebih baik.",
      "B": "Merasa sangat bersalah dan menganalisis mengapa itu terjadi.",
      "C": "Meminta maaf dengan gaya bercanda agar tidak canggung.",
      "D": "Segera memperbaikinya dan mencari cara agar tidak terulang."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 13,
    "question": "Bagaimana cara saya menunjukkan kasih sayang kepada keluarga?",
    "options": {
      "A": "Selalu ada untuk mereka dan menghindari pertengkaran rumah.",
      "B": "Memastikan kebutuhan materi mereka terpenuhi dengan baik.",
      "C": "Mengajak mereka bersenang-senang dan merayakan momen kecil.",
      "D": "Mengingat tanggal penting dan memberikan kado yang bermakna."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 14,
    "question": "Saat memberikan kritik kepada bawahan, saya cenderung...",
    "options": {
      "A": "Memulainya dengan banyak pujian agar mereka tidak tersinggung.",
      "B": "Menyampaikan poin kegagalan mereka secara lugas dan objektif.",
      "C": "Menyertakan data pendukung dan standar yang seharusnya dicapai.",
      "D": "Berbicara dengan sangat lembut agar tidak menyakiti perasaan."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 15,
    "question": "Reaksi saya saat rencana mendadak berubah adalah...",
    "options": {
      "A": "Kesal karena hal itu bisa menghambat pencapaian target.",
      "B": "Tidak masalah, saya suka kejutan dan hal baru.",
      "C": "Menerimanya dengan pasrah dan mengikuti kemauan orang banyak.",
      "D": "Frustrasi karena saya sudah mempersiapkan segalanya dengan matang."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 16,
    "question": "Di media sosial, saya lebih sering mengunggah...",
    "options": {
      "A": "Foto yang estetis atau pemikiran yang mendalam tentang hidup.",
      "B": "Pencapaian pribadi atau kutipan motivasi untuk sukses.",
      "C": "Jarang mengunggah sesuatu, lebih suka menjadi pengamat saja.",
      "D": "Foto kegiatan seru dan momen kebahagiaan bersama teman."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 17,
    "question": "Saat memilih tempat liburan, saya lebih mengutamakan...",
    "options": {
      "A": "Lokasi yang bersejarah, tenang, dan memiliki nilai edukasi.",
      "B": "Tempat yang nyaman untuk bersantai tanpa banyak aktivitas.",
      "C": "Destinasi yang menantang dan memberikan pengalaman baru.",
      "D": "Tempat yang populer, ramai, dan menawarkan banyak hiburan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 18,
    "question": "Ketika orang lain berbuat salah pada saya, saya akan...",
    "options": {
      "A": "Mungkin memaafkan, tapi akan sulit melupakan kejadian tersebut.",
      "B": "Mudah memaafkan dan segera melupakannya begitu saja.",
      "C": "Membiarkannya demi menghindari perdebatan yang melelahkan hati.",
      "D": "Menegurnya agar dia tahu kesalahannya tidak boleh terulang."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 19,
    "question": "Dalam sebuah rapat diskusi, saya biasanya...",
    "options": {
      "A": "Melempar ide-ide kreatif meski belum tentu bisa dijalankan.",
      "B": "Mendebat argumen yang menurut saya tidak masuk akal.",
      "C": "Menyetujui pendapat mayoritas agar rapat cepat selesai.",
      "D": "Mencatat semua poin penting dan menanyakan detail teknis."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 20,
    "question": "Pandangan saya terhadap aturan adalah...",
    "options": {
      "A": "Aturan harus dipatuhi secara mutlak demi ketertiban bersama.",
      "B": "Aturan membuat hidup lebih mudah karena saya tahu batasnya.",
      "C": "Aturan ada untuk dilanggar jika itu menghambat kesenangan.",
      "D": "Aturan berguna untuk menjaga efisiensi dan mencapai tujuan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "dalam"
  },
  {
    "id": 21,
    "question": "Saat makan malam bersama keluarga, saya cenderung...",
    "options": {
      "A": "Membahas rencana atau target keluarga di masa depan.",
      "B": "Menikmati makanan dalam tenang sambil mendengarkan yang lain.",
      "C": "Memperhatikan apakah semua makanan sudah tertata dengan rapi.",
      "D": "Mendominasi percakapan dengan cerita-cerita lucu hari ini."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "keluarga",
    "level": "ringan"
  },
  {
    "id": 22,
    "question": "Bagaimana cara saya memotivasi orang lain?",
    "options": {
      "A": "Mendukung mereka secara emosional dan memberikan rasa aman.",
      "B": "Menunjukkan contoh kerja yang sempurna agar mereka menirunya.",
      "C": "Memberikan pujian dan kata-kata yang membangkitkan semangat.",
      "D": "Menantang mereka untuk membuktikan kemampuan terbaik mereka."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 23,
    "question": "Jika saya merasa sedih, hal yang saya lakukan adalah...",
    "options": {
      "A": "Mencari teman untuk curhat agar beban terasa lebih ringan.",
      "B": "Mengurung diri di kamar untuk merenungkan apa yang salah.",
      "C": "Menyibukkan diri dengan pekerjaan agar emosi teralihkan.",
      "D": "Tidur atau menonton film untuk menenangkan pikiran saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 24,
    "question": "Ketika teman meminta bantuan untuk pindah rumah, saya akan...",
    "options": {
      "A": "Datang dan membuat suasana pindahan jadi lebih seru.",
      "B": "Membantu apa saja yang diminta tanpa banyak bertanya.",
      "C": "Membantu mengepak barang dengan sangat rapi dan teliti.",
      "D": "Mengatur posisi barang agar muat di dalam truk pengangkut."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "B"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 25,
    "question": "Di meja kerja saya, Anda akan menemukan...",
    "options": {
      "A": "Peralatan yang mendukung kerja cepat dan papan target.",
      "B": "Hanya sedikit barang, yang penting bersih dan nyaman.",
      "C": "Semua barang tertata rapi sesuai kategori dan warnanya.",
      "D": "Banyak barang yang tidak rapi namun penuh warna-warni."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 26,
    "question": "Saat harus berbicara di depan umum, saya merasa...",
    "options": {
      "A": "Percaya diri karena yakin pesan saya akan sangat berpengaruh.",
      "B": "Gugup dan berusaha menyiapkan catatan yang sangat lengkap.",
      "C": "Sangat antusias karena suka menjadi pusat perhatian banyak orang.",
      "D": "Tenang selama saya tidak perlu berdebat dengan penonton."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 27,
    "question": "Dalam mengelola keuangan, saya cenderung...",
    "options": {
      "A": "Berhemat karena takut akan kekurangan biaya di masa nanti.",
      "B": "Mencatat setiap pengeluaran sekecil apa pun dengan sangat disiplin.",
      "C": "Berinvestasi pada hal yang memberikan keuntungan besar di masa depan.",
      "D": "Boros untuk hal-hal yang membuat saya dan teman senang."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 28,
    "question": "Jika harus bekerja dalam tim, peran ideal saya adalah...",
    "options": {
      "A": "Pencipta ide-ide baru dan pembangun semangat tim.",
      "B": "Perancang strategi dan pengawas kualitas hasil kerja tim.",
      "C": "Anggota yang membantu menjaga keharmonisan antar anggota tim.",
      "D": "Ketua tim yang mengambil keputusan dan arah gerakan."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 29,
    "question": "Bagaimana saya menyikapi sebuah kegagalan?",
    "options": {
      "A": "Terus memikirkan apa yang salah dan menyalahkan diri sendiri.",
      "B": "Menerimanya sebagai bagian dari takdir dan tetap bersabar.",
      "C": "Mengevaluasi strategi dan segera mencoba lagi dengan cara berbeda.",
      "D": "Mencari hiburan baru agar rasa kecewa cepat menghilang."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 30,
    "question": "Apa yang paling membuat saya merasa dihargai?",
    "options": {
      "A": "Mendapat ucapan terima kasih karena sudah menjadi pendengar baik.",
      "B": "Mendapat apresiasi atas ketelitian dan kesempurnaan kerja saya.",
      "C": "Mendapat pengakuan atas prestasi dan hasil kerja saya.",
      "D": "Mendapat pujian di depan umum atas keceriaan saya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 31,
    "question": "Saat ada saudara yang meminjam uang, saya akan...",
    "options": {
      "A": "Langsung meminjamkannya jika ada, tanpa banyak tanya.",
      "B": "Merasa sungkan menolak meski sebenarnya saya juga sedang butuh.",
      "C": "Menanyakan tujuan penggunaannya dan kapan akan dikembalikan.",
      "D": "Membuat catatan tertulis agar tidak ada salah paham nantinya."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 32,
    "question": "Gaya bicara saya sering dianggap orang lain sebagai...",
    "options": {
      "A": "Lembut, pelan, dan tidak suka memaksakan pendapat.",
      "B": "Tegas, penuh percaya diri, dan sedikit memerintah.",
      "C": "Sopan, terstruktur, dan penuh dengan fakta pendukung.",
      "D": "Ramai, cepat, dan kadang suka memotong pembicaraan orang."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 33,
    "question": "Apa yang saya lakukan saat melihat orang diperlakukan tidak adil?",
    "options": {
      "A": "Langsung melabrak pelakunya tanpa rasa takut sedikit pun.",
      "B": "Mengajak orang lain untuk membela korban dengan heboh.",
      "C": "Mengumpulkan bukti-bukti ketidakadilan sebelum melapor ke atasan.",
      "D": "Merasa prihatin dan mencoba menenangkan korban secara personal."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 34,
    "question": "Dalam merencanakan liburan keluarga, saya biasanya...",
    "options": {
      "A": "Menyusun itinerary per jam dengan detail biaya yang lengkap.",
      "B": "Menentukan jadwal keberangkatan dan transportasi yang paling cepat.",
      "C": "Mengusulkan tempat yang paling seru dan banyak aktivitasnya.",
      "D": "Menunggu kesepakatan anggota keluarga lain baru ikut saja."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "menengah"
  },
  {
    "id": 35,
    "question": "Ketika harus menunggu orang yang telat, saya akan...",
    "options": {
      "A": "Menunggu dengan sabar sambil bermain ponsel atau melamun.",
      "B": "Menelepon berkali-kali dan memintanya untuk segera datang.",
      "C": "Mengecek jam berulang kali dan merasa kesal secara internal.",
      "D": "Mengajak ngobrol orang di sekitar agar tidak bosan."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 36,
    "question": "Sikap saya terhadap perubahan teknologi baru adalah...",
    "options": {
      "A": "Sangat antusias mencobanya meski tidak tahu cara pakainya.",
      "B": "Mempelajari spesifikasinya secara mendalam sebelum memutuskan membeli.",
      "C": "Cenderung bertahan dengan cara lama yang sudah terbukti nyaman.",
      "D": "Hanya menggunakan teknologi yang membantu produktivitas kerja saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 37,
    "question": "Saat menghadapi masalah besar, langkah pertama saya...",
    "options": {
      "A": "Membuat daftar kemungkinan risiko dan solusi yang logis.",
      "B": "Menceritakannya kepada siapa pun yang bersedia mendengar.",
      "C": "Menjaga ketenangan diri agar tidak terbawa emosi negatif.",
      "D": "Mencari inti masalah dan cara mengatasinya secepat mungkin."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 38,
    "question": "Bagaimana saya menggambarkan hubungan sosial saya?",
    "options": {
      "A": "Memiliki hubungan yang stabil dan damai dengan siapa pun.",
      "B": "Memiliki sedikit teman tapi hubungannya sangat dalam.",
      "C": "Memiliki koneksi yang kuat untuk mendukung tujuan hidup.",
      "D": "Memiliki sangat banyak teman dari berbagai kalangan berbeda."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 39,
    "question": "Sikap saya dalam mengelola tim yang malas adalah...",
    "options": {
      "A": "Berusaha memaklumi dan tetap bersikap baik pada mereka.",
      "B": "Memberikan peringatan keras dan target yang lebih ketat.",
      "C": "Mencari tahu penyebab kemalasan mereka secara personal satu-satu.",
      "D": "Mengadakan acara makan bersama untuk meningkatkan semangat mereka."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 40,
    "question": "Saya merasa paling puas dalam hidup jika...",
    "options": {
      "A": "Berhasil mencapai puncak karier atau ambisi pribadi saya.",
      "B": "Bisa hidup tenang tanpa ada konflik dengan orang lain.",
      "C": "Bisa membuat orang-orang di sekitar saya tertawa bahagia.",
      "D": "Semua aspek hidup saya berjalan sesuai rencana yang matang."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 41,
    "question": "Saat sedang belanja di pasar atau mall, saya...",
    "options": {
      "A": "Membandingkan harga dan kualitas barang di beberapa toko berbeda.",
      "B": "Sering membeli barang yang tidak direncanakan karena lucu.",
      "C": "Hanya membeli barang yang sudah biasa saya gunakan sehari-hari.",
      "D": "Langsung menuju toko tujuan dan membeli apa yang dibutuhkan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 42,
    "question": "Jika harus menyampaikan kabar buruk, saya akan...",
    "options": {
      "A": "Berharap orang lain saja yang menyampaikannya agar tidak canggung.",
      "B": "Mencari waktu yang tepat dan menggunakan bahasa halus.",
      "C": "Menyertakan penjelasan lengkap mengapa kabar buruk itu terjadi.",
      "D": "Menyampaikannya secara langsung tanpa menunda-nunda lagi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 43,
    "question": "Bagaimana reaksi saya saat ditegur oleh atasan?",
    "options": {
      "A": "Merasa sedih dan terus memikirkannya sepanjang malam di rumah.",
      "B": "Mencoba membela diri dengan alasan-alasan yang terdengar masuk akal.",
      "C": "Menerimanya sebagai tantangan untuk membuktikan saya bisa lebih baik.",
      "D": "Mendengarkan dengan tenang dan berjanji akan mencoba memperbaiki diri."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 44,
    "question": "Dalam mengambil risiko, kecenderungan saya adalah...",
    "options": {
      "A": "Memilih jalan aman agar tidak terjadi masalah di kemudian hari.",
      "B": "Berani mengambil risiko karena yakin akan selalu ada jalan.",
      "C": "Mengambil risiko jika ada peluang kemenangan yang cukup besar.",
      "D": "Sangat berhati-hati dan cenderung menghindari risiko yang tidak pasti."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 45,
    "question": "Saat ada teman yang berdebat di depan saya, saya...",
    "options": {
      "A": "Meminta mereka berhenti karena perdebatan itu tidak ada gunanya.",
      "B": "Mencoba melucu agar mereka berhenti berdebat dan tertawa.",
      "C": "Menjadi penengah yang netral agar mereka bisa berdamai kembali.",
      "D": "Menganalisis argumen siapa yang paling benar secara logika."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 46,
    "question": "Apa prioritas utama saya dalam membangun rumah tangga?",
    "options": {
      "A": "Mendidik anak dengan kedisiplinan dan nilai-nilai moral tinggi.",
      "B": "Menjamin kemapanan ekonomi dan masa depan anak yang jelas.",
      "C": "Menciptakan kedamaian dan kerukunan antar seluruh anggota keluarga.",
      "D": "Menciptakan suasana rumah yang ceria dan penuh tawa."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 47,
    "question": "Ketika saya merasa bosan dengan rutinitas, saya akan...",
    "options": {
      "A": "Tetap menjalaninya karena merasa kenyamanan jauh lebih penting.",
      "B": "Mengevaluasi apa yang salah dengan sistem hidup saya saat ini.",
      "C": "Mencari hobi baru atau pergi ke tempat-tempat yang seru.",
      "D": "Mencari tantangan baru dalam pekerjaan agar lebih bersemangat."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 48,
    "question": "Bagaimana saya ingin diingat oleh orang lain?",
    "options": {
      "A": "Sebagai orang yang menyenangkan dan selalu membuat suasana ceria.",
      "B": "Sebagai orang yang baik hati, penyabar, dan cinta damai.",
      "C": "Sebagai orang yang sukses, tangguh, dan punya banyak pencapaian.",
      "D": "Sebagai orang yang cerdas, teliti, dan memiliki integritas tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 49,
    "question": "Dalam sebuah diskusi kelompok, jika ide saya ditolak, saya...",
    "options": {
      "A": "Menerima keputusan kelompok tanpa rasa sakit hati atau dendam.",
      "B": "Merasa kecewa dan mulai mempertanyakan di mana letak kesalahannya.",
      "C": "Berusaha keras meyakinkan mereka mengapa ide saya adalah terbaik.",
      "D": "Segera mencari ide lain yang mungkin lebih menarik mereka."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 50,
    "question": "Saat berbicara di telepon, saya cenderung...",
    "options": {
      "A": "Lebih suka mendengarkan dan merespons dengan kata-kata singkat.",
      "B": "Berbicara dengan suara pelan dan memperhatikan setiap detail informasi.",
      "C": "Bicara panjang lebar tentang banyak hal sekaligus dengan seru.",
      "D": "Bicara seperlunya saja dan langsung pada pokok masalahnya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 51,
    "question": "Jika saya memiliki waktu luang satu jam, saya akan...",
    "options": {
      "A": "Menyelesaikan pekerjaan yang tertunda agar lebih cepat selesai.",
      "B": "Duduk santai sambil minum teh dan menikmati ketenangan.",
      "C": "Membaca buku atau merapikan sesuatu yang terlihat berantakan.",
      "D": "Menghubungi teman lama untuk sekadar mengobrol atau bergosip."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 52,
    "question": "Bagaimana reaksi saya ketika menghadapi tetangga yang berisik?",
    "options": {
      "A": "Mencoba bersabar dan berharap mereka akan segera berhenti sendiri.",
      "B": "Menggerutu dalam hati dan merasa terganggu dengan ketidakteraturan itu.",
      "C": "Langsung menegur mereka agar tidak mengganggu waktu istirahat saya.",
      "D": "Ikut bergabung jika suasananya seru dan saya kenal mereka."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 53,
    "question": "Ketika harus mengerjakan tugas yang membosankan, saya akan...",
    "options": {
      "A": "Tetap fokus mengerjakannya dengan teliti sesuai dengan prosedur.",
      "B": "Mengerjakannya sambil mendengarkan musik atau menonton sesuatu.",
      "C": "Mengerjakannya secara perlahan namun konsisten sampai tugas itu selesai.",
      "D": "Berusaha menyelesaikannya secepat mungkin agar bisa mengerjakan yang lain."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 54,
    "question": "Sikap saya saat harus mengambil keputusan di situasi darurat...",
    "options": {
      "A": "Berusaha tetap tenang sambil memikirkan solusi yang paling logis.",
      "B": "Mengambil kendali situasi dan memerintah orang lain beraksi.",
      "C": "Beraksi secara spontan mengikuti apa yang terlintas di pikiran.",
      "D": "Menunggu instruksi dari orang yang lebih ahli dalam situasi tersebut."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 55,
    "question": "Apa yang paling saya hindari dalam sebuah pertemanan?",
    "options": {
      "A": "Konflik dan perdebatan yang bisa merusak keharmonisan pertemanan.",
      "B": "Orang yang sering melanggar janji atau tidak jujur.",
      "C": "Situasi yang membosankan dan teman yang terlalu kaku.",
      "D": "Teman yang tidak kompeten atau tidak bisa diandalkan."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 56,
    "question": "Jika saya menjadi orang tua, fokus utama saya adalah...",
    "options": {
      "A": "Menjadi sahabat bagi anak agar mereka selalu terbuka.",
      "B": "Memberikan kasih sayang yang lembut dan lingkungan yang damai.",
      "C": "Mendorong anak untuk berprestasi dan menjadi sosok yang tangguh.",
      "D": "Menanamkan disiplin dan etika yang kuat pada diri anak."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 57,
    "question": "Saat bekerja dalam tekanan, gaya komunikasi saya menjadi...",
    "options": {
      "A": "Menjadi lebih tertutup dan fokus pada detail yang ada.",
      "B": "Menjadi lebih pendiam dan hanya bicara jika sangat perlu.",
      "C": "Lebih banyak bicara untuk menghilangkan rasa cemas saya.",
      "D": "Sangat singkat, padat, dan mungkin terdengar agak kasar."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 58,
    "question": "Apa pendapat saya tentang perubahan dalam hidup?",
    "options": {
      "A": "Sangat menyukainya karena perubahan berarti ada petualangan baru.",
      "B": "Menerimanya jika perubahan itu membantu saya mencapai kesuksesan.",
      "C": "Cenderung waspada dan harus menganalisis dampak perubahannya dahulu.",
      "D": "Kurang menyukainya karena lebih suka segala sesuatu tetap stabil."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "menengah"
  },
  {
    "id": 59,
    "question": "Bagaimana saya menyikapi pujian dari orang lain?",
    "options": {
      "A": "Merasa agak malu dan berpikir apakah saya benar layak dipuji.",
      "B": "Tersenyum ramah dan mengucapkan terima kasih dengan tulus saja.",
      "C": "Menerimanya sebagai bukti bahwa kerja keras saya membuahkan hasil.",
      "D": "Sangat senang dan mungkin akan menceritakannya kepada orang lain."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 60,
    "question": "Jika saya melihat teman melakukan kesalahan, saya akan...",
    "options": {
      "A": "Mungkin tidak mengatakannya jika kesalahan itu tidak terlalu fatal.",
      "B": "Menunggu waktu yang sangat tepat untuk membicarakannya secara empat mata.",
      "C": "Langsung memberitahunya agar dia bisa segera memperbaikinya saat itu.",
      "D": "Memberitahunya dengan santai sambil sedikit bercanda agar tidak tersinggung."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 61,
    "question": "Di kantor, saya lebih suka bekerja di lingkungan yang...",
    "options": {
      "A": "Tenang, terorganisir, dan masing-masing orang fokus pada tugasnya.",
      "B": "Kompetitif dan menuntut saya untuk selalu memberikan yang terbaik.",
      "C": "Ramai, penuh musik, dan banyak interaksi dengan rekan kerja.",
      "D": "Stabil, tidak banyak tekanan, dan suasananya sangat kekeluargaan."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 62,
    "question": "Bagaimana cara saya menunjukkan kemarahan?",
    "options": {
      "A": "Meledak-ledak tapi biasanya cepat reda dan segera memaafkan.",
      "B": "Tegas, dengan nada suara tinggi, dan fokus pada masalah.",
      "C": "Cenderung memendamnya dan hanya menunjukkan sedikit rasa tidak nyaman.",
      "D": "Menjadi sangat diam dan mungkin mendiamkan orang tersebut lama."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 63,
    "question": "Apa yang saya lakukan jika rencana akhir pekan saya batal?",
    "options": {
      "A": "Agak kesal tapi langsung mencari hal produktif untuk dilakukan.",
      "B": "Cepat mencari alternatif kegiatan lain agar hari tidak sia-sia.",
      "C": "Merasa kecewa karena sudah membayangkannya dan memilih berdiam diri.",
      "D": "Tidak masalah, saya bisa menikmati waktu istirahat di rumah."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 64,
    "question": "Gaya saya saat memimpin sebuah pertemuan adalah...",
    "options": {
      "A": "Tegas, mengikuti agenda, dan memastikan keputusan diambil cepat.",
      "B": "Menyajikan data yang lengkap dan memastikan setiap detail dibahas.",
      "C": "Memberikan ruang bagi setiap orang untuk menyampaikan pendapatnya dahulu.",
      "D": "Penuh semangat dan sering melibatkan peserta untuk berinteraksi."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 65,
    "question": "Saat harus belajar hal baru, saya lebih suka...",
    "options": {
      "A": "Membaca buku panduan secara mendalam dari awal sampai akhir.",
      "B": "Belajar bersama teman sambil berdiskusi dan saling bertanya.",
      "C": "Langsung mempraktikkannya untuk melihat hasilnya secara nyata.",
      "D": "Belajar perlahan-lahan dengan ritme yang nyaman bagi saya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 66,
    "question": "Apa yang paling membebani pikiran saya saat sedang stres?",
    "options": {
      "A": "Takut melakukan kesalahan fatal yang merusak reputasi atau kualitas.",
      "B": "Takut tidak disukai orang atau kehilangan perhatian dari teman.",
      "C": "Takut gagal mencapai target yang sudah saya tentukan sendiri.",
      "D": "Takut akan terjadinya konflik besar yang mengganggu ketenangan hidup."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 67,
    "question": "Dalam mengambil keputusan kelompok, saya cenderung...",
    "options": {
      "A": "Mengingatkan kelompok tentang risiko dan detail yang mungkin terlewat.",
      "B": "Menyetujui apa pun asalkan tidak ada perdebatan yang panjang.",
      "C": "Mengikuti apa yang menurut mayoritas akan terasa menyenangkan.",
      "D": "Mendorong kelompok untuk mengambil keputusan yang paling efektif."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 68,
    "question": "Bagaimana saya menyikapi kritik yang pedas dari orang lain?",
    "options": {
      "A": "Mungkin akan menangis sebentar lalu melupakannya saat bertemu teman.",
      "B": "Menyimpannya dalam hati dan terus memikirkannya dalam waktu lama.",
      "C": "Menganalisis kritik tersebut dan membuktikannya salah lewat prestasi.",
      "D": "Mendengarkannya saja tanpa banyak membela diri agar situasi tenang."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 69,
    "question": "Saat harus mengatur acara keluarga, peran saya adalah...",
    "options": {
      "A": "Membantu apa saja yang bisa saya lakukan di dapur.",
      "B": "Menyusun anggaran dan memastikan segala kebutuhan sudah lengkap.",
      "C": "Menjadi seksi acara yang bertugas menghibur seluruh keluarga.",
      "D": "Menjadi koordinator utama yang memastikan semua orang bekerja."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 70,
    "question": "Apa yang paling saya harapkan dari masa pensiun nanti?",
    "options": {
      "A": "Hidup dengan tenang, teratur, dan menikmati hobi yang mendalam.",
      "B": "Menikmati hasil kesuksesan dan mungkin tetap memiliki bisnis.",
      "C": "Tetap aktif bersosialisasi dan melakukan banyak kegiatan seru.",
      "D": "Menikmati waktu santai bersama keluarga tanpa ada beban pikiran."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 71,
    "question": "Bagaimana reaksi saya jika ada teman yang curhat panjang?",
    "options": {
      "A": "Menjadi pendengar setia dan memberikan dukungan moral yang menenangkan.",
      "B": "Sangat antusias mendengarkan dan sesekali menimpali dengan cerita serupa.",
      "C": "Menyimak dengan sangat serius dan berusaha merasakan apa yang dirasakan.",
      "D": "Mendengarkan sebentar lalu langsung mencoba memberikan solusi terbaik."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 72,
    "question": "Saat belanja barang elektronik, hal pertama yang saya lihat...",
    "options": {
      "A": "Spesifikasi teknis dan perbandingan dengan merk lain secara detail.",
      "B": "Fungsi utama dan apakah barang tersebut tahan lama.",
      "C": "Harga yang terjangkau dan apakah barang itu benar-benar dibutuhkan.",
      "D": "Model dan warnanya yang paling menarik perhatian saya."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 73,
    "question": "Sikap saya terhadap tugas kelompok yang tidak berjalan lancar...",
    "options": {
      "A": "Mencoba mencairkan ketegangan dengan mengajak teman-teman makan bersama.",
      "B": "Menganalisis di bagian mana yang macet dan menyusun rencana baru.",
      "C": "Mengambil alih tugas tersebut agar segera selesai sesuai target.",
      "D": "Tetap mengerjakan bagian saya dan berharap yang lain juga bergerak."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 74,
    "question": "Apa yang saya lakukan saat merasa sangat lelah secara emosional?",
    "options": {
      "A": "Menarik diri dari keramaian dan merenungkan perasaan saya sendiri.",
      "B": "Memaksa diri tetap aktif agar tidak terlihat lemah di depan orang.",
      "C": "Beristirahat total di rumah dan menjauh dari segala keributan.",
      "D": "Pergi keluar untuk mencari hiburan atau bertemu teman baru."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 75,
    "question": "Dalam berkomunikasi lewat chat, gaya bahasa saya adalah...",
    "options": {
      "A": "Sering menggunakan banyak emoji, stiker, dan tanda seru.",
      "B": "Singkat, padat, dan langsung menyampaikan tujuan saya chat.",
      "C": "Sangat rapi, menggunakan tanda baca yang benar, dan jelas.",
      "D": "Sering hanya membalas seperlunya saja dan menggunakan kata lembut."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 76,
    "question": "Apa yang paling membuat saya merasa bangga pada diri sendiri?",
    "options": {
      "A": "Saat saya berhasil menyelesaikan pekerjaan sulit dengan hasil sempurna.",
      "B": "Saat saya berhasil memenangkan kompetisi atau mencapai target sulit.",
      "C": "Saat saya bisa membantu orang lain menyelesaikan masalah mereka.",
      "D": "Saat saya bisa menjadi orang yang disukai oleh semua orang."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 77,
    "question": "Jika harus pindah ke kota baru, perasaan saya adalah...",
    "options": {
      "A": "Sedih karena harus meninggalkan kenyamanan dan rutinitas yang lama.",
      "B": "Sangat antusias karena akan mendapatkan banyak teman baru.",
      "C": "Siap menaklukkan tantangan dan mencari peluang baru di sana.",
      "D": "Sedikit khawatir dan sibuk menyiapkan segala detail kepindahan."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "menengah"
  },
  {
    "id": 78,
    "question": "Saat ada konflik dengan pasangan, saya biasanya...",
    "options": {
      "A": "Berusaha mengajak bicara dengan cara yang manis dan menyenangkan.",
      "B": "Menyelesaikan masalahnya saat itu juga dengan bicara terus terang.",
      "C": "Membutuhkan waktu untuk menyendiri dan berpikir secara mendalam.",
      "D": "Lebih banyak mengalah agar hubungan tetap harmonis dan tenang."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 79,
    "question": "Di mata rekan kerja, saya adalah sosok pemimpin yang...",
    "options": {
      "A": "Sangat sabar, stabil, dan bisa menjadi penengah yang baik.",
      "B": "Sangat detail, perfeksionis, dan memiliki standar kerja tinggi.",
      "C": "Menginspirasi dan sangat peduli dengan suasana hati tim.",
      "D": "Ambisius, tegas, dan selalu berorientasi pada hasil akhir."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 80,
    "question": "Sikap saya saat melihat barang yang berantakan adalah...",
    "options": {
      "A": "Meminta orang lain untuk segera merapikannya saat itu juga.",
      "B": "Langsung merapikannya sesuai dengan urutan atau tempat asalnya.",
      "C": "Akan merapikannya pelan-pelan saat saya punya waktu luang.",
      "D": "Mungkin tidak terlalu memerhatikannya kecuali jika sangat mengganggu."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 81,
    "question": "Ketika sedang mengobrol, saya cenderung lebih banyak...",
    "options": {
      "A": "Mendengarkan dan merespons dengan anggukan atau kata-kata penyemangat.",
      "B": "Membahas tentang rencana kerja atau hal-hal yang produktif.",
      "C": "Menanyakan detail informasi dan fakta-fakta yang menurut saya penting.",
      "D": "Bercerita tentang pengalaman pribadi saya yang menarik perhatian."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 82,
    "question": "Bagaimana reaksi saya saat rencana liburan saya tidak berjalan mulus?",
    "options": {
      "A": "Merasa kesal karena persiapan matang saya menjadi sia-sia saja.",
      "B": "Tertawa saja dan mencari cara lain agar tetap seru.",
      "C": "Cepat mengambil tindakan untuk memperbaiki situasi agar tidak rugi.",
      "D": "Menerima keadaan dengan tenang dan tetap berusaha menikmatinya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 83,
    "question": "Apa yang saya lakukan jika merasa terabaikan dalam sebuah pertemuan?",
    "options": {
      "A": "Mencoba berbicara lebih keras agar diperhatikan oleh orang lain.",
      "B": "Menarik diri dari percakapan dan mengamati jalannya diskusi tersebut.",
      "C": "Langsung menginterupsi pembicaraan untuk menyampaikan poin penting saya.",
      "D": "Tetap diam dan merasa itu bukan masalah besar bagi saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 84,
    "question": "Saat harus membagi tugas dalam tim, kriteria saya adalah...",
    "options": {
      "A": "Membaginya berdasarkan kecepatan kerja masing-masing anggota tim saya.",
      "B": "Membaginya berdasarkan beban kerja yang paling nyaman bagi semua orang.",
      "C": "Membaginya secara sangat adil sesuai keahlian teknis masing-masing orang.",
      "D": "Membaginya berdasarkan siapa yang paling seru diajak bekerja sama."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 85,
    "question": "Dalam hal ketepatan waktu, saya biasanya...",
    "options": {
      "A": "Sering datang lebih awal untuk mempersiapkan segala sesuatunya.",
      "B": "Sering terlambat karena asyik melakukan hal lain sebelumnya.",
      "C": "Sangat tepat waktu karena tidak ingin membuang waktu saya.",
      "D": "Berusaha tepat waktu agar tidak merepotkan orang yang menunggu."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 86,
    "question": "Jika ada anggota keluarga yang sedang marah, saya akan...",
    "options": {
      "A": "Memintanya untuk bersikap logis dan segera menyelesaikan masalahnya.",
      "B": "Membiarkannya menyendiri sampai dia merasa lebih tenang dan stabil.",
      "C": "Menemaninya dengan sabar dan mendengarkan keluh kesahnya jika diminta.",
      "D": "Mencoba menghiburnya agar dia segera tersenyum kembali saat itu."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 87,
    "question": "Bagaimana cara saya menghadapi perubahan aturan yang mendadak?",
    "options": {
      "A": "Menerimanya saja dengan tenang dan mencoba beradaptasi pelan-pelan.",
      "B": "Langsung mengeluh sebentar lalu mencoba mengikuti alurnya dengan santai.",
      "C": "Menyesuaikan seluruh rencana kerja saya agar sesuai dengan aturan baru.",
      "D": "Mempertanyakan alasan perubahan tersebut jika dirasa tidak efisien bagi kerja."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 88,
    "question": "Apa yang saya lakukan jika mendapati teman saya berbohong?",
    "options": {
      "A": "Menghindari perdebatan dan mungkin menjauh darinya secara perlahan-lahan.",
      "B": "Menghadapinya secara langsung dan menuntut kejujuran darinya saat itu.",
      "C": "Merasa sangat kecewa dan butuh waktu lama untuk percaya lagi.",
      "D": "Mungkin akan langsung memaafkan jika alasannya terdengar masuk akal."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 89,
    "question": "Saat memilih pakaian untuk acara formal, saya mengutamakan...",
    "options": {
      "A": "Pakaian yang paling nyaman dipakai dan tidak terlalu mencolok.",
      "B": "Pakaian yang sangat rapi, bersih, dan sesuai dengan protokol.",
      "C": "Pakaian yang terlihat trendi dan bisa menarik perhatian orang.",
      "D": "Pakaian yang terlihat berwibawa dan menunjukkan status kesuksesan saya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 90,
    "question": "Apa yang paling saya takuti dalam karier saya?",
    "options": {
      "A": "Terlibat dalam politik kantor yang penuh dengan konflik interpersonal.",
      "B": "Melakukan kesalahan besar yang merusak reputasi profesional saya sendiri.",
      "C": "Bekerja di tempat yang membosankan dan tidak bisa bersosialisasi.",
      "D": "Tidak memiliki kemajuan atau stagnan di posisi yang sama."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 91,
    "question": "Gaya bicara saya saat sedang bersemangat adalah...",
    "options": {
      "A": "Bicara dengan nada kuat dan penuh keyakinan akan pendapat saya.",
      "B": "Bicara dengan sangat sistematis dan penuh dengan penjelasan detail.",
      "C": "Bicara dengan tenang namun tetap menunjukkan antusiasme yang stabil.",
      "D": "Bicara sangat cepat dan seringkali melompat-lompat antar topik pembicaraan."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 92,
    "question": "Jika saya harus bekerja lembur, reaksi spontan saya...",
    "options": {
      "A": "Menerimanya dengan pasrah demi tanggung jawab yang saya emban.",
      "B": "Tidak masalah selama itu membantu saya menyelesaikan target pekerjaan.",
      "C": "Agak terbebani jika lembur itu merusak jadwal yang sudah disusun.",
      "D": "Bisa asalkan ada teman yang menemani agar tidak membosankan."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 93,
    "question": "Dalam situasi kompetisi, motivasi terbesar saya adalah...",
    "options": {
      "A": "Menjadi yang terbaik dan memenangkan kompetisi tersebut apa pun risikonya.",
      "B": "Berpartisipasi secara baik tanpa harus merasa tertekan untuk menang.",
      "C": "Bisa bersenang-senang dan menunjukkan kemampuan saya di depan orang.",
      "D": "Membuktikan bahwa saya bisa bekerja dengan standar kualitas paling tinggi."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 94,
    "question": "Bagaimana saya menyikapi perbedaan pendapat dalam keluarga?",
    "options": {
      "A": "Mengajak diskusi secara logis berdasarkan fakta-fakta yang ada saat itu.",
      "B": "Mencoba membuat semua orang tertawa agar ketegangan cepat menghilang.",
      "C": "Menjelaskan pendapat saya secara kuat agar mereka mengikuti jalan saya.",
      "D": "Lebih baik diam daripada harus memicu pertengkaran yang lebih besar."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 95,
    "question": "Apa yang paling saya cari dalam sebuah pekerjaan baru?",
    "options": {
      "A": "Peluang untuk berkembang dan mendapatkan posisi kepemimpinan yang lebih tinggi.",
      "B": "Lingkungan yang menyenangkan dan rekan kerja yang asyik diajak bicara.",
      "C": "Ketenangan kerja, keamanan posisi, dan lingkungan yang penuh kekeluargaan.",
      "D": "Kejelasan tugas, sistem yang rapi, dan standar kerja yang baik."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "dalam"
  },
  {
    "id": 96,
    "question": "Ketika sedang merasa tertekan, kebiasaan buruk saya adalah...",
    "options": {
      "A": "Menjadi sangat tertutup dan terlalu kritis terhadap diri sendiri.",
      "B": "Menjadi sangat malas dan cenderung menunda-nunda semua pekerjaan saya.",
      "C": "Menjadi sangat cepat marah dan sering mendesak orang di sekitar.",
      "D": "Menjadi terlalu banyak bicara atau malah menjadi sangat pelupa."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 97,
    "question": "Jika saya melihat teman saya sedang sedih, saya akan...",
    "options": {
      "A": "Mendengarkan keluhannya dengan penuh perhatian tanpa memotong pembicaraan.",
      "B": "Membawa hadiah kecil atau mengajaknya makan agar hatinya ceria.",
      "C": "Menemaninya dalam diam agar dia merasa tidak sendirian menghadapi masalah.",
      "D": "Memberikannya solusi praktis agar dia bisa segera keluar dari masalah."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 98,
    "question": "Sikap saya saat menghadapi kemacetan lalu lintas yang parah...",
    "options": {
      "A": "Merasa sangat kesal karena waktu saya terbuang sia-sia di jalan.",
      "B": "Menunggu dengan sabar sambil menikmati musik atau siaran radio.",
      "C": "Bernyanyi atau menelepon teman agar tidak merasa bosan di jalan.",
      "D": "Mengevaluasi jalur alternatif lewat aplikasi navigasi dengan sangat teliti."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 99,
    "question": "Dalam sebuah kepemimpinan, saya merasa paling efektif jika...",
    "options": {
      "A": "Bisa menggerakkan tim untuk mencapai target-target besar dengan cepat.",
      "B": "Bisa menciptakan suasana kerja yang harmonis tanpa ada konflik internal.",
      "C": "Bisa menyatukan tim lewat suasana kerja yang penuh kegembiraan.",
      "D": "Bisa mengatur sistem kerja yang rapi dan minim tingkat kesalahan."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 100,
    "question": "Bagaimana saya menyikapi kritik yang diberikan secara halus?",
    "options": {
      "A": "Menerimanya dengan sangat baik dan sangat berterima kasih atas masukannya.",
      "B": "Menganalisis kritik tersebut dan memikirkannya secara mendalam dan serius.",
      "C": "Menerimanya dengan senyuman dan berjanji akan menjadi lebih baik.",
      "D": "Tetap mempertanyakan inti dari kritik tersebut secara langsung dan tegas."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 101,
    "question": "Saat teman lama mengajak reuni mendadak, saya biasanya...",
    "options": {
      "A": "Mengikuti keputusan mayoritas teman yang bisa hadir saja.",
      "B": "Memikirkan apakah agenda saya akan terganggu atau tidak.",
      "C": "Melihat siapa saja yang hadir sebelum memberikan kepastian.",
      "D": "Langsung setuju dan bersemangat mengajak teman lainnya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 102,
    "question": "Jika rekan kerja belum menyelesaikan tugasnya, saya akan...",
    "options": {
      "A": "Mengingatkannya sambil bercanda agar suasana tidak kaku.",
      "B": "Menunggu dengan sabar atau membantunya agar tidak konflik.",
      "C": "Merasa cemas karena rencana detail saya jadi berantakan.",
      "D": "Menegurnya langsung agar tidak menghambat target kerja kelompok."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 103,
    "question": "Di acara hajatan keluarga besar, saya lebih suka...",
    "options": {
      "A": "Duduk santai sambil menikmati hidangan di tempat tenang.",
      "B": "Menjadi pusat perhatian dan asyik mengobrol ke sana-kemari.",
      "C": "Mengamati dekorasi dan detail acara dengan penuh minat.",
      "D": "Membantu mengatur alur tamu agar acara berjalan lancar."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 104,
    "question": "Jika saya menjadi ketua RT, fokus utama saya...",
    "options": {
      "A": "Menjaga kerukunan antar warga agar lingkungan selalu damai.",
      "B": "Meningkatkan keamanan dan ketertiban lingkungan secara tegas.",
      "C": "Mengelola administrasi dan pendataan warga dengan sangat rapi.",
      "D": "Mengadakan banyak acara hiburan agar warga saling akrab."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 105,
    "question": "Saat ada orang yang memotong antrean saya, saya...",
    "options": {
      "A": "Menegurnya sambil tertawa agar dia merasa sedikit malu.",
      "B": "Merasa kesal dalam hati dan menggerutu karena ketidakadilan.",
      "C": "Memintanya kembali ke belakang dengan suara yang tegas.",
      "D": "Membiarkannya saja karena malas terlibat dalam perdebatan umum."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 106,
    "question": "Ketika beban pekerjaan menumpuk secara tiba-tiba, saya...",
    "options": {
      "A": "Menganalisis mengapa pekerjaan tersebut bisa menumpuk begitu banyak.",
      "B": "Bercerita pada teman untuk mengurangi rasa stres saya.",
      "C": "Membuat skala prioritas dan menyelesaikannya satu per satu.",
      "D": "Tetap tenang dan mengerjakannya sebatas kemampuan yang ada."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 107,
    "question": "Dalam memilih menu makan siang, saya cenderung...",
    "options": {
      "A": "Memilih menu yang nutrisinya seimbang dan terjamin bersih.",
      "B": "Memilih apa yang terlihat menarik atau sedang tren.",
      "C": "Memilih menu langganan yang sudah pasti rasanya enak.",
      "D": "Memilih yang paling cepat disajikan agar hemat waktu."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "ringan"
  },
  {
    "id": 108,
    "question": "Saat berada di dalam transportasi umum, saya...",
    "options": {
      "A": "Fokus pada ponsel atau pekerjaan agar tetap produktif.",
      "B": "Mendengarkan musik atau membaca buku untuk mengisi waktu.",
      "C": "Suka memulai obrolan ringan dengan orang di sebelah.",
      "D": "Melamun atau sekadar melihat pemandangan di luar jendela."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 109,
    "question": "Jika seseorang tidak membalas chat saya, saya...",
    "options": {
      "A": "Menunggu saja sampai dia merasa sempat untuk membalasnya.",
      "B": "Berpikir apakah saya melakukan kesalahan saat mengetik pesan.",
      "C": "Mengirim chat lagi yang lucu agar dia terhibur.",
      "D": "Meneleponnya langsung jika hal itu memang sangat penting."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 110,
    "question": "Mengenai tabungan masa tua, prinsip hidup saya adalah...",
    "options": {
      "A": "Nikmati hidup sekarang, rezeki pasti akan datang nanti.",
      "B": "Menabung secukupnya asalkan hidup tetap tenang dan damai.",
      "C": "Menyusun anggaran yang sangat ketat untuk jaminan masa depan.",
      "D": "Investasi sebanyak mungkin agar hari tua penuh kemandirian."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 111,
    "question": "Saat dimintai saran oleh teman, saya biasanya...",
    "options": {
      "A": "Memberikan langkah konkret yang harus dia lakukan segera.",
      "B": "Memberikan kata-kata motivasi yang penuh dengan aura positif.",
      "C": "Menjadi pendengar yang baik dan mendukung apa pun pilihannya.",
      "D": "Menanyakan banyak pertanyaan untuk memahami masalahnya secara utuh."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 112,
    "question": "Jika saya harus bekerja dengan orang baru, saya...",
    "options": {
      "A": "Memperhatikan cara kerjanya dulu sebelum saya mulai akrab.",
      "B": "Langsung membahas pembagian tugas agar kerja lebih efektif.",
      "C": "Segera memperkenalkan diri dan mencari topik obrolan seru.",
      "D": "Bersikap ramah dan menunggu dia yang memulai pembicaraan."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 113,
    "question": "Saat ada anggota keluarga yang sakit, saya...",
    "options": {
      "A": "Menjaganya dengan sabar dan memastikan dia beristirahat cukup.",
      "B": "Mencari dokter terbaik agar dia segera mendapat penanganan.",
      "C": "Membawakan makanan enak untuk menghiburnya agar cepat sembuh.",
      "D": "Mengingatkannya minum obat sesuai jadwal dengan sangat teliti."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 114,
    "question": "Dalam memimpin diskusi, jika suasana mulai tegang, saya...",
    "options": {
      "A": "Menghentikan perdebatan dan mengambil keputusan final secara tegas.",
      "B": "Meminta semua pihak tenang dan saling mendengarkan dulu.",
      "C": "Melempar lelucon untuk mencairkan ketegangan di dalam ruangan.",
      "D": "Mencoba membedah inti permasalahan secara logis dan tenang."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 115,
    "question": "Bagaimana reaksi saya jika janji temu dibatalkan sepihak?",
    "options": {
      "A": "Hanya menjawab singkat dan menikmati waktu santai sendiri.",
      "B": "Tidak apa-apa, saya akan mencari agenda lain saja.",
      "C": "Merasa sedih dan berpikir apakah ada yang salah.",
      "D": "Menanyakan alasannya dan merasa waktu saya sangat terbuang."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 116,
    "question": "Ketika sedang merasa terburu-buru, saya cenderung menjadi...",
    "options": {
      "A": "Berusaha tenang meskipun sebenarnya saya sudah sangat terlambat.",
      "B": "Sangat fokus dan mendesak orang lain agar cepat.",
      "C": "Sedikit panik dan barang-barang saya sering tertinggal.",
      "D": "Tetap berusaha rapi meski jantung berdetak lebih kencang."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 117,
    "question": "Jika harus memilih antara dua barang bagus, saya...",
    "options": {
      "A": "Membandingkan spesifikasi dan ulasannya di internet berkali-kali.",
      "B": "Membeli yang fungsinya paling kuat dan tahan lama.",
      "C": "Meminta pendapat orang lain dan mengikuti saran mereka.",
      "D": "Membeli yang paling unik dan sedang banyak disukai."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "ringan"
  },
  {
    "id": 118,
    "question": "Kebiasaan saya saat sedang merapikan kamar adalah...",
    "options": {
      "A": "Hanya merapikan bagian yang terlihat berantakan saja dahulu.",
      "B": "Menata setiap barang sesuai urutan dan kategori tertentu.",
      "C": "Melakukannya dengan cepat agar bisa mengerjakan hal lainnya.",
      "D": "Merapikannya sambil bernyanyi atau mendengarkan musik yang kencang."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 119,
    "question": "Saat bercerita kepada teman, saya seringkali...",
    "options": {
      "A": "Langsung pada inti cerita tanpa banyak basa-basi.",
      "B": "Bercerita dengan nada yang tenang dan mudah dipahami.",
      "C": "Menjelaskan detail waktu dan tempat kejadian secara akurat.",
      "D": "Menambahkan sedikit bumbu cerita agar terdengar lebih seru."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 120,
    "question": "Harapan terbesar saya untuk lima tahun ke depan...",
    "options": {
      "A": "Menghasilkan karya yang sempurna dan diakui secara luas.",
      "B": "Hidup stabil dan damai bersama orang-orang tercinta.",
      "C": "Memiliki banyak relasi baru dan hidup penuh warna.",
      "D": "Mencapai posisi puncak dalam karier atau bisnis saya."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 121,
    "question": "Ketika teman memuji pakaian saya, saya akan...",
    "options": {
      "A": "Merasa senang tapi berpikir apakah pujiannya benar tulus.",
      "B": "Merasa malu-malu dan memuji balik pakaian teman saya.",
      "C": "Tersenyum lebar dan menceritakan di mana saya membelinya.",
      "D": "Berterima kasih singkat dan kembali fokus pada pembicaraan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 122,
    "question": "Jika harus bekerja dalam tim yang anggotanya pemalas...",
    "options": {
      "A": "Memilih mengerjakan semua sendiri agar hasilnya tetap sempurna.",
      "B": "Menegur mereka agar segera bekerja atau saya laporkan.",
      "C": "Menunggu mereka bergerak sambil sesekali mengingatkan dengan lembut.",
      "D": "Mencoba menyemangati mereka dengan cara yang penuh keceriaan."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 123,
    "question": "Saat ada saudara yang sedang bersedih, saya...",
    "options": {
      "A": "Mendengarkan semua curhatannya dengan penuh simpati yang dalam.",
      "B": "Membantunya mencari jalan keluar agar masalahnya cepat selesai.",
      "C": "Mengajaknya jalan-jalan agar dia bisa melupakan kesedihannya sejenak.",
      "D": "Hadir di sisinya tanpa perlu banyak bicara untuk menenangkan."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 124,
    "question": "Gaya kepemimpinan saya saat mengoordinasi acara adalah...",
    "options": {
      "A": "Fleksibel dan memastikan semua panitia merasa senang bekerja.",
      "B": "Disiplin dan menuntut semua jadwal berjalan tepat waktu.",
      "C": "Demokratis dan selalu mempertimbangkan kenyamanan semua pihak terlibat.",
      "D": "Sangat detail dalam mengecek setiap perlengkapan yang dibutuhkan."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 125,
    "question": "Jika saya merasa dicurangi oleh orang lain, saya...",
    "options": {
      "A": "Lebih baik menjauh darinya daripada harus berkonfrontasi langsung.",
      "B": "Menuntut penjelasan dan keadilan saat itu juga tanpa ragu.",
      "C": "Mungkin akan marah sebentar lalu melupakannya begitu saja.",
      "D": "Mencatat kesalahannya dan menjadi sangat waspada terhadapnya nanti."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 126,
    "question": "Bagaimana saya menyikapi kegagalan dalam ujian atau tes?",
    "options": {
      "A": "Merasa sangat terpukul dan merenungi kesalahan yang dibuat.",
      "B": "Mengevaluasi kekurangan saya dan belajar lebih keras lagi.",
      "C": "Menerima kenyataan dengan sabar dan mencoba tetap tenang.",
      "D": "Mencoba lagi lain kali sambil mencari hiburan lain."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 127,
    "question": "Saat memilih rute perjalanan, saya lebih suka...",
    "options": {
      "A": "Rute yang biasa saya lewati karena sudah merasa nyaman.",
      "B": "Rute yang paling cepat sampai ke tujuan tanpa hambatan.",
      "C": "Rute yang pemandangannya indah meski jalannya agak memutar.",
      "D": "Rute yang sudah saya pelajari sebelumnya tingkat kemacetannya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "ringan"
  },
  {
    "id": 128,
    "question": "Aktivitas saya sebelum tidur biasanya adalah...",
    "options": {
      "A": "Menonton video ringan atau langsung tidur untuk beristirahat.",
      "B": "Bermain media sosial atau chat seru dengan teman-teman.",
      "C": "Membaca atau menulis jurnal tentang apa yang terjadi hari ini.",
      "D": "Menyiapkan daftar tugas yang harus diselesaikan besok pagi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 129,
    "question": "Ketika saya harus mempresentasikan sesuatu, saya akan...",
    "options": {
      "A": "Menggunakan banyak cerita menarik agar penonton tidak merasa bosan.",
      "B": "Menyampaikan poin-poin utama dengan sangat percaya diri dan tegas.",
      "C": "Menyusun slide presentasi yang sangat informatif dan sangat rapi.",
      "D": "Berbicara perlahan agar pesan tersampaikan dengan baik dan damai."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 130,
    "question": "Apa yang paling saya inginkan dari sebuah rumah?",
    "options": {
      "A": "Tata letak yang teratur, bersih, dan estetik secara detail.",
      "B": "Ruang tamu yang luas untuk tempat berkumpul bersama teman.",
      "C": "Suasana yang tenang, sejuk, dan memberikan rasa nyaman penuh.",
      "D": "Fasilitas lengkap yang mendukung produktivitas dan hobi saya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 131,
    "question": "Jika ada teman yang meminjam barang saya, saya...",
    "options": {
      "A": "Memperhatikan apakah dia menjaga barang saya dengan sangat baik.",
      "B": "Mengingatkannya agar segera dikembalikan sesuai waktu yang ditentukan.",
      "C": "Membiarkannya memakai selama dia butuh tanpa perlu merasa sungkan.",
      "D": "Meminjamkannya begitu saja karena saya orang yang murah hati."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 132,
    "question": "Saat menghadapi deadline mendadak, tindakan pertama saya...",
    "options": {
      "A": "Tetap tenang dan mengerjakan apa yang paling bisa diselesaikan.",
      "B": "Membuat jadwal pembagian waktu per jam dengan sangat rinci.",
      "C": "Langsung fokus mengerjakan bagian yang paling sulit lebih dulu.",
      "D": "Mencari teman untuk bekerja bersama agar tidak merasa stres."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 133,
    "question": "Bagaimana sikap saya jika orang tua tidak setuju pendapat saya?",
    "options": {
      "A": "Mencoba merayu mereka dengan cara yang manis dan menyenangkan.",
      "B": "Mengalah demi menjaga kedamaian dan kerukunan di dalam rumah.",
      "C": "Menganalisis alasan ketidaksetujuan mereka sebelum saya bicara kembali.",
      "D": "Berargumen secara tegas untuk menjelaskan kebenaran posisi saya sendiri."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 134,
    "question": "Sebagai pemimpin, saya lebih menghargai anggota yang...",
    "options": {
      "A": "Sabar, penurut, dan tidak pernah memicu konflik di tim.",
      "B": "Pandai mencairkan suasana dan sangat loyal kepada timnya.",
      "C": "Teliti, rapi, dan selalu mengikuti prosedur yang telah ditetapkan.",
      "D": "Cepat tanggap dalam menyelesaikan tugas dan berorientasi hasil."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 135,
    "question": "Saat ada orang yang menyebarkan gosip tentang saya, saya...",
    "options": {
      "A": "Menghadapi orang tersebut dan memintanya berhenti berbicara bohong.",
      "B": "Merasa sedih dan merenungi mengapa orang tersebut membenci saya.",
      "C": "Membiarkannya saja karena waktu akan membuktikan kebenaran yang ada.",
      "D": "Menertawakannya dan menganggap hal itu sebagai angin lalu saja."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 136,
    "question": "Jika terjadi pemadaman listrik di rumah, saya akan...",
    "options": {
      "A": "Menunggu dengan tenang sambil beristirahat atau tidur saja dulu.",
      "B": "Mencari lilin atau senter dan menatanya di tempat aman.",
      "C": "Segera mengecek sekring atau menghubungi pihak berwenang secepatnya.",
      "D": "Mengajak seluruh anggota keluarga mengobrol seru sambil menunggu nyala."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 137,
    "question": "Dalam mengambil keputusan investasi, saya lebih percaya...",
    "options": {
      "A": "Potensi keuntungan besar yang bisa diraih dalam waktu singkat.",
      "B": "Analisis data historis dan laporan keuangan yang sangat akurat.",
      "C": "Insting saya dan apa yang sedang ramai diperbincangkan orang.",
      "D": "Saran dari ahli yang sudah terbukti aman dan stabil."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 138,
    "question": "Ketika saya berada di toko buku, saya biasanya...",
    "options": {
      "A": "Melihat buku-buku baru yang sedang populer di rak depan.",
      "B": "Membaca ulasan di sampul belakang dengan sangat teliti dahulu.",
      "C": "Keliling santai tanpa tujuan khusus dan menikmati suasana tokonya.",
      "D": "Langsung mencari kategori buku yang mendukung peningkatan karier saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 139,
    "question": "Cara saya memperkenalkan produk atau ide baru adalah...",
    "options": {
      "A": "Dengan antusiasme tinggi agar orang lain ikut merasa bersemangat.",
      "B": "Dengan cara yang tenang dan sopan agar mudah diterima.",
      "C": "Dengan penjelasan yang sangat mendalam disertai data-data pendukung lengkap.",
      "D": "Dengan menunjukkan manfaat praktis dan keunggulan ide tersebut secara tegas."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 140,
    "question": "Dalam hal belajar bahasa asing, motivasi saya adalah...",
    "options": {
      "A": "Untuk memahami struktur bahasa dan budaya asing secara mendalam.",
      "B": "Agar bisa berkomunikasi dengan banyak orang dari berbagai negara.",
      "C": "Hanya untuk menambah pengetahuan umum dengan ritme santai saja.",
      "D": "Sebagai alat untuk memperluas jaringan bisnis dan karier global."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "menengah"
  },
  {
    "id": 141,
    "question": "Jika saya harus menunggu antrean yang lama, saya...",
    "options": {
      "A": "Menggunakan waktu untuk mengecek kembali rencana atau catatan saya.",
      "B": "Merasa tidak sabar dan terus melihat jam dengan muka kesal.",
      "C": "Mencari teman mengobrol agar waktu tunggu tidak terasa membosankan.",
      "D": "Menunggu dengan pasrah dan mencoba menikmati ketenangan tersebut saja."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 142,
    "question": "Saat melihat rekan kerja melakukan pencapaian besar, saya...",
    "options": {
      "A": "Memberinya selamat dengan sangat heboh dan ikut merasa senang.",
      "B": "Menjadikan hal itu motivasi untuk mengungguli pencapaiannya nanti.",
      "C": "Mengucapkan selamat dan menganalisis rahasia di balik kesuksesan tersebut.",
      "D": "Tersenyum tulus dan memberikan apresiasi yang hangat secara personal."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 143,
    "question": "Jika harus berbagi rahasia dengan seseorang, saya akan...",
    "options": {
      "A": "Hanya memberitahu sahabat terdekat yang sudah saya kenal lama.",
      "B": "Seringkali tidak sengaja menceritakannya karena terlalu asyik mengobrol.",
      "C": "Menyimpannya sendiri karena sulit bagi saya untuk benar-benar percaya.",
      "D": "Hanya memberitahu orang yang bisa menguntungkan posisi saya nanti."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 144,
    "question": "Dalam mengoordinasi kegiatan sosial, peran saya biasanya...",
    "options": {
      "A": "Menjadi penanggung jawab utama yang mengambil semua keputusan sulit.",
      "B": "Menjadi relawan yang siap membantu apa pun kebutuhan di lapangan.",
      "C": "Menjadi sekretaris atau bendahara yang mengurus administrasi secara detail.",
      "D": "Menjadi pembawa acara atau penggerak massa agar acara meriah."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 145,
    "question": "Saat ada teman yang ingkar janji tanpa kabar, saya...",
    "options": {
      "A": "Mencoba memaklumi dan menunggu penjelasannya kapan pun dia siap.",
      "B": "Menegurnya secara langsung dan menjelaskan bahwa waktu saya berharga.",
      "C": "Mengirimkan pesan lucu untuk menyindirnya secara halus agar ingat.",
      "D": "Merasa kecewa mendalam dan mungkin akan menjaga jarak dengannya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 146,
    "question": "Reaksi saya saat melihat film yang sangat sedih adalah...",
    "options": {
      "A": "Merenungkan pesan moral di balik cerita film tersebut secara mendalam.",
      "B": "Ikut merasa sedih secara diam-diam dan terhanyut dalam suasana.",
      "C": "Biasa saja karena saya tahu itu hanyalah sebuah cerita fiksi.",
      "D": "Menangis tersedu-sedu dan langsung menceritakan perasaan saya ke teman."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 147,
    "question": "Ketika harus memilih asuransi kesehatan, pertimbangan saya adalah...",
    "options": {
      "A": "Yang memiliki rincian polis paling transparan dan sangat masuk akal.",
      "B": "Yang banyak direkomendasikan oleh teman-teman terdekat saya sendiri.",
      "C": "Yang preminya stabil dan proses klaimnya tidak merepotkan sama sekali.",
      "D": "Yang memberikan cakupan perlindungan paling luas dan paling cepat."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 148,
    "question": "Apa yang saya lakukan saat lingkungan kerja sangat berisik?",
    "options": {
      "A": "Ikut dalam keramaian tersebut jika topiknya menarik bagi saya.",
      "B": "Tetap bekerja dengan tenang meskipun suasana di sekitar saya gaduh.",
      "C": "Memakai headphone dan berusaha fokus pada detail pekerjaan saya sendiri.",
      "D": "Meminta orang lain untuk tenang karena itu sangat mengganggu kerja."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 149,
    "question": "Bagaimana gaya saya dalam memberikan hadiah kepada pasangan?",
    "options": {
      "A": "Sesuatu yang memiliki makna sejarah atau simbol cinta yang mendalam.",
      "B": "Sesuatu yang sedang tren dan dibungkus dengan sangat meriah sekali.",
      "C": "Sesuatu yang nyaman dipakai dan sesuai dengan keinginan mereka sendiri.",
      "D": "Sesuatu yang sangat berguna untuk menunjang aktivitas harian mereka berdua."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 150,
    "question": "Dalam menyusun rencana masa depan, saya seringkali...",
    "options": {
      "A": "Menyiapkan berbagai rencana cadangan untuk mengantisipasi kegagalan yang mungkin terjadi.",
      "B": "Mengalir saja mengikuti perkembangan situasi yang ada di masa depan.",
      "C": "Fokus pada satu tujuan besar yang ingin saya capai segera.",
      "D": "Memiliki banyak ide menarik yang terkadang sulit untuk saya fokuskan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 151,
    "question": "Saat ada teman yang tiba-tiba membatalkan kerja kelompok...",
    "options": {
      "A": "Saya segera menegurnya karena hal itu sangat merugikan kemajuan tim.",
      "B": "Saya merasa khawatir jika target penyelesaian tugas menjadi terhambat total.",
      "C": "Saya maklum dan memanfaatkan waktu luang tersebut untuk bersantai saja.",
      "D": "Saya langsung mengajak teman lain untuk sekadar nongkrong saja."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 152,
    "question": "Di kantor, jika ada teknologi baru yang sulit...",
    "options": {
      "A": "Saya membaca manual pemakaian secara teliti dari awal sampai akhir.",
      "B": "Saya meminta teman mengajari saya sambil mengobrol dengan santai.",
      "C": "Saya mencoba sendiri sampai bisa untuk membuktikan kemampuan saya.",
      "D": "Saya menunggu orang lain mahir baru saya meminta bantuan mereka."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 153,
    "question": "Bagaimana sikap saya saat makan malam keluarga besar?",
    "options": {
      "A": "Saya lebih suka memerhatikan tata krama dan kerapian di meja.",
      "B": "Saya akan menceritakan banyak lelucon agar suasana menjadi sangat meriah.",
      "C": "Saya lebih banyak mendengarkan dan menikmati kebersamaan yang tenang tersebut.",
      "D": "Saya seringkali membahas rencana besar atau kesuksesan yang sudah dicapai."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "keluarga",
    "level": "ringan"
  },
  {
    "id": 154,
    "question": "Sebagai ketua proyek, jika terjadi kesalahan teknis, saya...",
    "options": {
      "A": "Berusaha tetap tenang agar anggota tim tidak ikut merasa panik.",
      "B": "Menganalisis penyebab teknis kesalahan itu terjadi secara sangat mendalam sekali.",
      "C": "Segera memotivasi anggota agar tetap semangat dan tidak merasa sedih.",
      "D": "Mencari siapa yang bertanggung jawab dan memintanya memperbaiki dengan cepat."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 155,
    "question": "Ketika saya berdebat dengan teman, saya cenderung...",
    "options": {
      "A": "Cenderung mengalah atau diam saja demi menghindari konflik yang berkepanjangan.",
      "B": "Berusaha keras memenangkan perdebatan dengan alasan-alasan yang sangat logis.",
      "C": "Memikirkan setiap kata agar tidak salah bicara dan menyakiti hati.",
      "D": "Ingin perdebatan cepat selesai agar pertemanan kami tetap asyik lagi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 156,
    "question": "Jika saya merasa lelah dengan rutinitas harian, saya...",
    "options": {
      "A": "Menambah target baru dalam pekerjaan agar tantangan hidup terasa nyata.",
      "B": "Menikmati waktu santai di rumah dengan melakukan hobi yang ringan.",
      "C": "Spontan merencanakan liburan seru ke tempat baru bersama teman-teman saya.",
      "D": "Merenung sendirian di tempat tenang untuk menjernihkan pikiran saya kembali."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 157,
    "question": "Saat memilih asisten pribadi, kriteria utama bagi saya...",
    "options": {
      "A": "Sangat teliti, jujur, dan memiliki jadwal kerja yang sangat rapi.",
      "B": "Bisa bekerja dengan sangat cepat dan mengerti apa kemauan saya.",
      "C": "Memiliki kepribadian yang ceria dan enak diajak bicara kapan saja.",
      "D": "Sabar, penurut, dan bisa menjaga rahasia pribadi saya dengan baik."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 158,
    "question": "Aktivitas saya di pagi hari libur biasanya adalah...",
    "options": {
      "A": "Bangun agak siang dan menikmati suasana pagi dengan sangat tenang.",
      "B": "Melakukan olahraga atau kegiatan produktif lainnya agar tetap bugar sekali.",
      "C": "Menelepon teman untuk merencanakan kegiatan seru sepanjang hari ini.",
      "D": "Merapikan rumah atau mengerjakan proyek pribadi dengan penuh ketelitian tinggi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 159,
    "question": "Cara saya menegur kesalahan orang lain biasanya adalah...",
    "options": {
      "A": "Menggunakan bahasa kiasan yang lucu agar dia tidak merasa tersinggung.",
      "B": "Bicara empat mata dengan nada lembut dan sangat hati-hati sekali.",
      "C": "Menjelaskan detail kesalahan dan memberikan saran perbaikan yang sangat logis.",
      "D": "To the point dan langsung pada apa yang seharusnya dia lakukan."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 160,
    "question": "Pandangan saya tentang investasi masa depan adalah...",
    "options": {
      "A": "Investasi yang penting aman dan bisa memberikan ketenangan di masa tua.",
      "B": "Investasi adalah senjata utama untuk mencapai kebebasan finansial secara cepat.",
      "C": "Investasi memerlukan perhitungan risiko yang sangat matang dan data akurat.",
      "D": "Investasi harus terasa menyenangkan dan tidak membebani gaya hidup saya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 161,
    "question": "Jika ada teman yang menangis di depan saya, saya...",
    "options": {
      "A": "Duduk di sampingnya dengan tenang agar dia merasa ada yang menemani.",
      "B": "Memberikan pelukan hangat dan mencoba menghiburnya dengan kata-kata manis.",
      "C": "Memberikan tisu dan mendengarkannya dengan penuh rasa empati yang dalam.",
      "D": "Bertanya apa penyebabnya dan apa yang bisa saya lakukan segera."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 162,
    "question": "Dalam rapat kerja, jika pendapat saya dikritik habis-habisan...",
    "options": {
      "A": "Saya membela argumen saya dengan data yang lebih kuat dan tegas.",
      "B": "Saya mendengarkan kritikan tersebut dengan tenang dan mencoba untuk memperbaikinya.",
      "C": "Saya tertawa kecil dan mencoba mencari sudut pandang lain segera.",
      "D": "Saya merasa terpukul dan menganalisis di mana letak kelemahan argumen saya."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "dalam"
  },
  {
    "id": 163,
    "question": "Saat memilih kado untuk orang tua, saya mengutamakan...",
    "options": {
      "A": "Sesuatu yang bisa membuat hidup mereka lebih nyaman dan tenang.",
      "B": "Sesuatu yang bisa membuat mereka tertawa bahagia dan merasa terhibur.",
      "C": "Sesuatu yang harganya menunjukkan kesuksesan saya dalam bekerja selama ini.",
      "D": "Sesuatu yang benar-benar mereka butuhkan namun jarang mereka beli sendiri."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 164,
    "question": "Gaya saya saat menjadi pemimpin dalam situasi krisis adalah...",
    "options": {
      "A": "Memberikan semangat kepada semua orang agar tetap optimis dan ceria.",
      "C": "Menenangkan semua orang agar tidak terjadi kepanikan massal di tim.",
      "D": "Mengambil kendali penuh dan memberikan instruksi yang sangat cepat sekali."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 165,
    "question": "Jika saya merasa dirugikan oleh layanan pelanggan, saya...",
    "options": {
      "A": "Menulis surat keluhan resmi dengan rincian kronologi yang sangat lengkap.",
      "B": "Menerima permintaan maaf mereka dan berharap hal itu tidak terulang lagi.",
      "C": "Mengeluh dengan gaya bercanda namun tetap mengharapkan ada kompensasi segera.",
      "D": "Langsung meminta bicara dengan manajer untuk menuntut pertanggungjawaban yang jelas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 166,
    "question": "Reaksi saya saat melihat berita bencana alam adalah...",
    "options": {
      "A": "Segera membagikan informasi tersebut ke grup WhatsApp agar banyak yang tahu.",
      "B": "Mencari cara praktis untuk memberikan bantuan atau donasi secepat mungkin.",
      "C": "Merasa sedih mendalam dan merenungi nasib para korban bencana tersebut.",
      "D": "Berdoa dengan tenang agar situasi segera membaik bagi semua orang."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 167,
    "question": "Saat harus memilih antara karier atau hobi, saya...",
    "options": {
      "A": "Mempertimbangkan masa depan jangka panjang dari masing-masing pilihan tersebut secara matang.",
      "B": "Memilih yang paling tidak memberikan banyak tekanan dan membuat nyaman.",
      "C": "Memilih karier karena kesuksesan finansial adalah prioritas utama hidup saya.",
      "D": "Mencoba menggabungkan keduanya agar hidup saya tetap terasa sangat seru."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 168,
    "question": "Kebiasaan saya saat sedang stres berat adalah...",
    "options": {
      "A": "Bekerja lebih keras untuk melupakan masalah yang sedang terjadi tersebut.",
      "B": "Makan banyak makanan enak sambil menonton film komedi yang lucu.",
      "C": "Tidur lebih lama dari biasanya untuk mengistirahatkan pikiran dan tubuh.",
      "D": "Menulis di buku harian atau merenung sendirian di taman tenang."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 169,
    "question": "Gaya bicara saya saat sedang memberikan arahan adalah...",
    "options": {
      "A": "Tegas, singkat, dan langsung menunjuk siapa yang harus melakukan apa.",
      "B": "Lembut, sopan, dan lebih bersifat mengajak daripada memerintah orang lain.",
      "C": "Bicara dengan nada yang riang dan penuh dengan kata-kata penyemangat.",
      "D": "Sangat terstruktur, logis, dan memastikan tidak ada informasi yang terlewat."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 170,
    "question": "Tujuan akhir saya dalam memiliki banyak harta adalah...",
    "options": {
      "A": "Bisa hidup santai tanpa perlu khawatir tentang masalah finansial lagi.",
      "B": "Bisa bersenang-senang dan berbagi kebahagiaan dengan banyak orang lain.",
      "C": "Memberikan jaminan keamanan dan kualitas hidup terbaik bagi keluarga saya.",
      "D": "Menunjukkan kekuatan dan kesuksesan saya di mata dunia luar sana."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 171,
    "question": "Saat teman saya menceritakan kesuksesannya, saya akan...",
    "options": {
      "A": "Memberikan apresiasi yang tulus dan merasa tenang melihatnya sudah bahagia.",
      "B": "Merayakannya dengan antusiasme yang sangat tinggi dan penuh kegembiraan sekali.",
      "C": "Mengucapkan selamat dan menanyakan strategi apa yang telah dia lakukan.",
      "D": "Ikut senang namun merasa tertantang untuk meraih sukses yang lebih."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 172,
    "question": "Jika saya harus mengajar kelas, gaya saya adalah...",
    "options": {
      "A": "Fokus pada materi yang penting dan memberikan latihan soal intensif.",
      "B": "Banyak melakukan kuis seru dan interaksi yang penuh dengan tawa.",
      "C": "Menjelaskan teori secara mendalam dengan contoh kasus yang sangat logis.",
      "D": "Menciptakan suasana kelas yang tenang dan nyaman bagi seluruh siswa."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 173,
    "question": "Ketika ada perbedaan tradisi dalam keluarga pasangan, saya...",
    "options": {
      "A": "Mempelajari asal-usul tradisi tersebut agar saya bisa memahaminya secara utuh.",
      "B": "Mengikutinya dengan senang hati karena menganggap hal itu pengalaman baru.",
      "C": "Berusaha beradaptasi dengan sabar demi menghormati keharmonisan keluarga pasangan saya.",
      "D": "Mencoba mencari cara agar tradisi tersebut tidak menghambat efisiensi keluarga."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 174,
    "question": "Sebagai pemimpin, jika bawahan saya melakukan kesalahan, saya...",
    "options": {
      "A": "Menegurnya dengan tegas dan memintanya memperbaiki kesalahan itu secepat mungkin.",
      "B": "Memberikan kesempatan kedua dan membimbingnya dengan penuh kesabaran yang tinggi.",
      "C": "Menghiburnya agar tidak sedih dan memintanya belajar dari kesalahan tersebut.",
      "D": "Menganalisis mengapa kesalahan itu terjadi dan memberikan arahan yang sangat detail."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 175,
    "question": "Saat ada orang yang menyalip pembicaraan saya, saya...",
    "options": {
      "A": "Merasa agak kesal karena merasa tidak dihargai namun tetap diam.",
      "B": "Mendengarkannya saja dan tidak mempermasalahkan hal tersebut demi kedamaian bersama.",
      "C": "Tertawa dan membiarkannya bicara dulu lalu saya lanjut bicara lagi.",
      "D": "Langsung meminta waktu untuk menyelesaikan kalimat saya sampai benar-benar tuntas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 176,
    "question": "Apa yang saya lakukan saat menghadapi kegagalan bisnis?",
    "options": {
      "A": "Menganalisis laporan keuangan dan pasar secara mendalam untuk mencari celah.",
      "B": "Istirahat sejenak untuk menenangkan diri sebelum memulai langkah yang baru.",
      "C": "Segera mencari peluang bisnis lain yang mungkin lebih seru dijalankan.",
      "D": "Mengevaluasi strategi pemasaran dan operasional secara cepat dan sangat agresif."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 177,
    "question": "Dalam hal memilih sekolah untuk anak, saya mengutamakan...",
    "options": {
      "A": "Sekolah yang lokasinya dekat rumah dan suasananya sangat aman nyaman.",
      "B": "Sekolah yang memiliki kurikulum jelas, disiplin kuat, dan fasilitas lengkap.",
      "C": "Sekolah yang lingkungannya ramah, ceria, dan banyak kegiatan ekstrakurikulernya.",
      "D": "Sekolah yang memiliki standar akademik tinggi dan lulusan yang sukses."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 178,
    "question": "Kebiasaan saya saat sedang makan di restoran adalah...",
    "options": {
      "A": "Memesan menu yang paling cepat siap agar tidak membuang waktu.",
      "B": "Memesan menu favorit yang sudah biasa saya makan di sana.",
      "C": "Suka mencoba menu baru yang tampilannya unik dan menarik perhatian.",
      "D": "Memerhatikan kebersihan peralatan makan dan kualitas pelayanan secara sangat detail."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 179,
    "question": "Cara saya menyampaikan ketidaksetujuan dalam forum resmi adalah...",
    "options": {
      "A": "Menyatakan poin keberatan saya secara langsung, tegas, dan penuh keyakinan.",
      "B": "Menunggu giliran bicara dan menyampaikannya dengan nada yang sangat sopan.",
      "C": "Menyajikan data dan fakta yang membuktikan bahwa pendapat sebelumnya kurang tepat.",
      "D": "Menggunakan ilustrasi yang menarik agar argumen saya mudah diterima semua."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 180,
    "question": "Motivasi utama saya dalam menabung uang adalah untuk...",
    "options": {
      "A": "Mendapatkan rasa aman dan ketenangan pikiran secara finansial jangka panjang.",
      "B": "Bisa digunakan untuk liburan atau acara senang-senang bersama teman-teman.",
      "C": "Persiapan dana darurat jika terjadi hal yang tidak diinginkan nantinya.",
      "D": "Memiliki modal besar untuk memperluas bisnis atau investasi masa depan."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 181,
    "question": "Jika teman saya lupa hari ulang tahun saya, saya...",
    "options": {
      "A": "Memaklumi kesibukannya dan tidak mau memperpanjang masalah kecil seperti itu.",
      "B": "Merasa tidak masalah asalkan dia tetap mendukung pekerjaan saya selama ini.",
      "C": "Mengingatkannya dengan bercanda atau malah membuat pesta sendiri yang meriah.",
      "D": "Merasa sedih secara mendalam karena menganggap dia tidak peduli lagi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 182,
    "question": "Sikap saya saat harus bekerja secara tim lintas divisi...",
    "options": {
      "A": "Fokus pada koordinasi agar semua target divisi bisa tercapai segera.",
      "B": "Berusaha menyesuaikan diri agar bisa bekerja sama dengan damai dan tenang.",
      "C": "Sangat antusias karena bisa berkenalan dengan banyak orang baru lagi.",
      "D": "Membuat catatan pembagian peran yang sangat jelas agar tidak ada kekacauan."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 183,
    "question": "Ketika ada saudara yang membutuhkan bantuan tenaga, saya...",
    "options": {
      "A": "Menolongnya dengan tulus dan penuh kesabaran sampai tugasnya benar-benar tuntas.",
      "B": "Membantunya dengan cara yang paling efektif agar tugasnya cepat selesai.",
      "C": "Membantunya dengan teliti dan memastikan hasil pengerjaan tersebut sangat sempurna.",
      "D": "Langsung datang dan membuat suasana pengerjaan tugas tersebut jadi seru."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 184,
    "question": "Sebagai pemimpin, bagaimana saya menghadapi anggota yang pembangkang?",
    "options": {
      "A": "Memberikan sanksi tegas sesuai aturan agar dia disiplin dalam bekerja.",
      "B": "Mengajaknya bicara dari hati ke hati dalam suasana yang santai.",
      "C": "Mencoba bersabar dan berharap sikapnya akan berubah dengan pendekatan lembut.",
      "D": "Menganalisis alasan di balik pembangkangannya sebelum saya mengambil tindakan lanjut."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 185,
    "question": "Jika saya merasa dibohongi oleh pasangan saya sendiri, saya...",
    "options": {
      "A": "Meminta penjelasan sambil menangis agar dia merasa kasihan kepada saya.",
      "B": "Merenungkan hubungan kami dan memikirkan segala konsekuensi di masa depan.",
      "C": "Mencoba memaafkan dan memberikan kesempatan kedua demi keutuhan hubungan kami.",
      "D": "Menghadapinya langsung dengan bukti-bukti yang kuat agar dia tidak mengelak."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 186,
    "question": "Saat menghadapi kemacetan parah di hari kerja, saya...",
    "options": {
      "A": "Menunggu dengan tenang sambil beristirahat sejenak di dalam mobil tersebut.",
      "B": "Merasa kesal dan mencoba mencari jalan tikus agar cepat sampai.",
      "C": "Mendengarkan radio yang lucu atau bernyanyi kencang agar tetap ceria.",
      "D": "Mengatur kembali jadwal harian saya agar keterlambatan tidak merusak segalanya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 187,
    "question": "Dalam hal memilih tempat tinggal masa depan, saya mengutamakan...",
    "options": {
      "A": "Daerah yang tenang, asri, sejuk, dan memberikan rasa nyaman maksimal.",
      "B": "Dekat dengan pusat hiburan dan tempat berkumpul teman-teman terdekat saya.",
      "C": "Dekat dengan pusat bisnis dan memiliki nilai investasi yang sangat tinggi.",
      "D": "Lingkungan yang aman, teratur, bersih, dan memiliki sistem keamanan baik."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 188,
    "question": "Kebiasaan saya saat sedang berbelanja kebutuhan bulanan adalah...",
    "options": {
      "A": "Membeli barang yang mereknya sudah biasa saya gunakan selama bertahun-tahun.",
      "B": "Sering membeli barang tambahan hanya karena kemasannya terlihat menarik sekali.",
      "C": "Membawa daftar belanjaan dan selalu membandingkan harga per satuan berat.",
      "D": "Membeli barang yang paling berkualitas meskipun harganya sedikit lebih mahal."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 189,
    "question": "Cara saya memperkenalkan diri di lingkungan baru biasanya adalah...",
    "options": {
      "A": "Tampil dengan penuh percaya diri dan langsung menyapa semua orang.",
      "B": "Menunggu orang lain menyapa duluan dan membalasnya dengan senyuman ramah.",
      "C": "Menonjolkan keahlian atau posisi saya agar orang lain merasa segan.",
      "D": "Bicara seperlunya dengan bahasa yang sopan dan memperhatikan tata krama."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 190,
    "question": "Apa cita-cita terbesar saya yang ingin saya raih nantinya?",
    "options": {
      "A": "Memiliki hidup yang seimbang, bahagia, dan damai bersama keluarga tercinta.",
      "B": "Menjadi pemimpin besar yang memiliki pengaruh kuat di bidang kerja saya.",
      "C": "Menjadi tokoh publik yang dikenal karena keceriaan dan kebaikannya tersebut.",
      "D": "Menjadi ahli yang diakui karena karya-karya yang sangat sempurna hasilnya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 191,
    "question": "Jika teman saya membatalkan janji secara mendadak, saya...",
    "options": {
      "A": "Segera menghubungi teman lain untuk sekadar mengisi waktu luang saya.",
      "B": "Menerimanya dengan lapang dada dan memanfaatkan waktu untuk istirahat sendiri.",
      "C": "Menyatakan keberatan saya karena saya sudah meluangkan waktu berharga saya.",
      "D": "Merasa agak kecewa dan mulai bertanya-tanya alasan sebenarnya pembatalan tersebut."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 192,
    "question": "Bagaimana sikap saya saat harus memimpin rapat yang alot?",
    "options": {
      "A": "Tegas dalam mengarahkan pembicaraan agar segera mencapai keputusan yang final.",
      "B": "Membedah setiap argumen secara logis dan sangat detail untuk mencari solusi.",
      "C": "Mencoba mencairkan suasana dengan berbagai cerita lucu dan penuh semangat.",
      "D": "Menjadi fasilitator yang sabar dalam mendengarkan setiap masukan dari peserta."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 193,
    "question": "Saat ada anggota keluarga yang berbeda pendapat, saya cenderung...",
    "options": {
      "A": "Menjelaskan posisi saya secara kuat agar mereka memahami sudut pandang saya.",
      "B": "Menganalisis mana pendapat yang paling benar berdasarkan fakta-fakta yang ada.",
      "C": "Berusaha menjembatani perbedaan tersebut agar kerukunan keluarga tetap terjaga baik.",
      "D": "Mencari topik lain agar suasana rumah tidak menjadi kaku dan tegang."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 194,
    "question": "Jika saya harus mengambil keputusan dalam waktu satu menit...",
    "options": {
      "A": "Saya akan memilih opsi yang paling aman dan tidak memicu konflik.",
      "B": "Saya akan mengikuti kata hati dan insting pertama yang muncul segera.",
      "C": "Saya akan memilih opsi yang memberikan hasil paling menguntungkan bagi saya.",
      "D": "Saya akan memilih opsi yang paling logis dan minim tingkat risikonya."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 195,
    "question": "Gaya bicara saya saat sedang memberikan motivasi adalah...",
    "options": {
      "A": "Penuh energi, ekspresif, dan menggunakan banyak kata-kata yang sangat menginspirasi.",
      "B": "Tegas, penuh keyakinan, dan menantang pendengar untuk segera bergerak maju.",
      "C": "Sangat terukur, berdasarkan bukti nyata, dan memberikan arahan yang sangat jelas.",
      "D": "Sangat menenangkan, penuh empati, dan memberikan rasa aman bagi para pendengar."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 196,
    "question": "Apa yang paling saya cari saat sedang berlibur sendirian?",
    "options": {
      "A": "Mendapatkan ketenangan batin dan mengistirahatkan pikiran dari segala hiruk-pikuk dunia.",
      "B": "Mendapatkan tantangan baru yang bisa membuktikan kemandirian dan ketangguhan saya.",
      "C": "Bertemu dengan orang-orang baru dan mendapatkan pengalaman sosial yang seru.",
      "D": "Menikmati keindahan alam atau arsitektur dengan penuh ketelitian dan kekaguman."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 197,
    "question": "Dalam menghadapi kritik dari atasan, saya cenderung...",
    "options": {
      "A": "Menerimanya dengan senyuman dan berjanji akan memberikan performa yang lebih ceria.",
      "B": "Menjadikan kritik tersebut sebagai bahan evaluasi untuk mencapai hasil kerja terbaik.",
      "C": "Memikirkan kritik tersebut secara mendalam dan merasai setiap poin kesalahannya tersebut.",
      "D": "Mendengarkan dengan sabar dan mencoba memperbaiki diri tanpa harus merasa terbebani."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 198,
    "question": "Bagaimana reaksi saya saat rencana besar saya gagal total?",
    "options": {
      "A": "Merasa sangat sedih dan butuh waktu lama untuk merenungi kegagalan tersebut.",
      "B": "Menerima kegagalan sebagai bagian hidup dan tetap berusaha tenang dalam menghadapinya.",
      "C": "Mengevaluasi kegagalan tersebut dan segera menyusun strategi tempur yang baru.",
      "D": "Segera mencari hiburan dan mencoba bangkit dengan rencana baru lainnya."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 199,
    "question": "Apa yang paling saya utamakan dalam menjalin hubungan persahabatan?",
    "options": {
      "A": "Loyalitas, saling mendukung dalam meraih kesuksesan, dan kejujuran yang sangat tinggi.",
      "B": "Keseruan, keceriaan, dan kemampuan teman untuk saling menghibur setiap saat.",
      "C": "Kedalaman pemikiran, kesamaan minat, dan integritas moral yang sangat kuat sekali.",
      "D": "Kenyamanan, saling pengertian, dan ketiadaan konflik dalam hubungan pertemanan tersebut."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 200,
    "question": "Dalam hal mengelola waktu, prinsip utama bagi saya adalah...",
    "options": {
      "A": "Waktu adalah uang dan setiap detik harus menghasilkan sesuatu yang produktif.",
      "B": "Waktu harus dikelola dengan jadwal yang sangat ketat agar semua terencana.",
      "C": "Waktu harus dinikmati dengan ritme yang stabil agar tidak merasa tergesa-gesa.",
      "D": "Waktu harus digunakan sefleksibel mungkin agar hidup tidak terasa sangat kaku."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "menengah"
  },
  {
    "id": 201,
    "question": "Saat baru sampai di kantor, hal pertama yang saya lakukan adalah...",
    "options": {
      "A": "Langsung memeriksa daftar tugas yang harus segera diselesaikan.",
      "B": "Duduk tenang sambil menyiapkan diri memulai hari dengan santai.",
      "C": "Menyapa rekan kerja dengan ceria dan mengobrol sejenak.",
      "D": "Memastikan meja kerja tertata rapi sesuai standar saya."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 202,
    "question": "Ketika teman membatalkan janji secara mendadak, saya cenderung...",
    "options": {
      "A": "Segera mencari teman lain agar tidak merasa sendirian.",
      "B": "Bertanya-tanya apakah saya melakukan kesalahan yang menyinggungnya.",
      "C": "Merasa kesal karena waktu produktif saya menjadi terbuang.",
      "D": "Menerimanya dengan tenang dan menikmati waktu istirahat sendiri."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 203,
    "question": "Dalam diskusi keluarga, peran yang sering saya ambil adalah...",
    "options": {
      "A": "Pencair suasana dengan cerita lucu atau ide liburan.",
      "B": "Pengambil keputusan utama agar masalah cepat selesai.",
      "C": "Pemberi saran yang didasarkan pada pertimbangan logis.",
      "D": "Pendengar yang netral dan penjaga kedamaian pembicaraan."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 204,
    "question": "Jika tim saya sedang kehilangan semangat, saya akan...",
    "options": {
      "A": "Mengevaluasi sistem kerja untuk memperbaiki kualitas hasil.",
      "B": "Mendengarkan keluh kesah mereka dengan penuh kesabaran.",
      "C": "Mengadakan acara makan bersama agar suasana kembali ceria.",
      "D": "Memberikan tantangan baru untuk memacu ambisi mereka."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 205,
    "question": "Saat seseorang berbicara dengan nada tinggi kepada saya, saya...",
    "options": {
      "A": "Tetap tenang dan menunggu emosinya stabil sebelum bicara.",
      "B": "Merasa sedih secara mendalam dan merenungi kata-katanya.",
      "C": "Mencoba bercanda agar emosinya segera mereda kembali.",
      "D": "Membalas dengan tegas untuk menunjukkan harga diri saya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 206,
    "question": "Menghadapi perubahan sistem kerja yang mendadak, reaksi saya...",
    "options": {
      "A": "Mencari cara agar sistem baru tersebut meningkatkan efisiensi.",
      "B": "Berusaha beradaptasi perlahan tanpa banyak mengeluh pada atasan.",
      "C": "Menyambutnya dengan antusias sebagai pengalaman baru yang seru.",
      "D": "Mempelajari aturannya secara mendalam sebelum saya mulai bertindak."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 207,
    "question": "Ketika harus memilih investasi jangka panjang, saya mengutamakan...",
    "options": {
      "A": "Data riwayat performa yang sangat stabil dan terpercaya.",
      "B": "Opsi yang paling aman meskipun keuntungannya tidak besar.",
      "C": "Instrumen yang menawarkan keuntungan besar dan kendali penuh.",
      "D": "Investasi yang sedang populer dan banyak dibicarakan orang."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 208,
    "question": "Gaya belanja kebutuhan mingguan saya biasanya adalah...",
    "options": {
      "A": "Membawa daftar belanja lengkap dan membandingkan harga produk.",
      "B": "Membeli merek yang sudah biasa digunakan agar tidak repot.",
      "C": "Membeli barang yang terlihat menarik secara spontan saja.",
      "D": "Fokus pada kualitas barang yang bisa menunjang kegiatan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 209,
    "question": "Saat mengirim pesan singkat, saya cenderung menggunakan...",
    "options": {
      "A": "Tanda baca yang benar dan struktur kalimat rapi.",
      "B": "Banyak emoji dan bahasa yang ekspresif serta akrab.",
      "C": "Kalimat yang langsung pada tujuan tanpa basa-basi.",
      "D": "Bahasa yang sopan, lembut, dan tidak menyinggung perasaan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 210,
    "question": "Mengenai rencana pensiun, pemikiran yang muncul adalah...",
    "options": {
      "A": "Fase tenang untuk menikmati hasil rencana keuangan matang.",
      "B": "Waktu untuk tetap aktif dalam kegiatan yang berpengaruh.",
      "C": "Masa di mana saya bisa bebas berwisata ke mana pun.",
      "D": "Masa istirahat yang damai tanpa beban tanggung jawab."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 211,
    "question": "Dalam pesta pernikahan, saya biasanya menghabiskan waktu dengan...",
    "options": {
      "A": "Mengobrol dengan siapa saja yang saya temui di sana.",
      "B": "Duduk di meja yang tenang bersama teman akrab.",
      "C": "Mencari relasi yang berguna untuk perkembangan karier saya.",
      "D": "Memperhatikan detail dekorasi atau musik yang disajikan panitia."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 212,
    "question": "Jika harus bekerja lembur mendadak, sikap saya adalah...",
    "options": {
      "A": "Menerimanya jika ada teman seru yang juga ikut lembur.",
      "B": "Fokus menyelesaikannya agar target kerja cepat tercapai tuntas.",
      "C": "Membuat jadwal baru agar pekerjaan tetap selesai secara sempurna.",
      "D": "Menjalankannya dengan sabar demi menjaga kerukunan di kantor."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 213,
    "question": "Saat anggota keluarga sedang berkonflik, saya akan...",
    "options": {
      "A": "Mengajak mereka bercanda agar suasana tidak lagi kaku.",
      "B": "Mendengarkan keluhan kedua pihak tanpa memihak salah satunya.",
      "C": "Menganalisis penyebab utama pertengkaran agar tidak terulang lagi.",
      "D": "Menjadi penengah yang tegas dalam mencari solusi masalah."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 214,
    "question": "Sebagai seorang pemimpin, saya merasa dihargai apabila...",
    "options": {
      "A": "Tim merasa senang dan bersemangat bekerja di bawah arahan.",
      "B": "Hasil kerja tim sangat rapi dan tanpa kesalahan teknis.",
      "C": "Tim mencapai target prestasi yang membanggakan organisasi kita.",
      "D": "Tim bekerja secara harmonis tanpa adanya gesekan internal."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 215,
    "question": "Bagaimana saya menanggapi teman yang mengkritik gaya hidup saya?",
    "options": {
      "A": "Mendengarkan dengan tenang tanpa berniat memicu perdebatan panjang.",
      "B": "Memikirkannya secara mendalam dan merenungkan kebenaran kritik itu.",
      "C": "Tertawa santai dan mengatakan setiap orang punya selera berbeda.",
      "D": "Mempertahankan pilihan saya dengan alasan yang sangat kuat."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 216,
    "question": "Saat menghadapi kemacetan parah, hal yang saya lakukan...",
    "options": {
      "A": "Memanfaatkan waktu untuk mengecek kembali rencana harian saya.",
      "B": "Bernyanyi atau menelepon teman untuk membunuh rasa bosan.",
      "C": "Menunggu dengan pasrah sambil mendengarkan musik yang tenang.",
      "D": "Menggerutu dan terus mencari celah agar cepat sampai."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 217,
    "question": "Dalam mengambil keputusan liburan, prioritas saya adalah...",
    "options": {
      "A": "Destinasi yang menantang dan bisa membuktikan keberanian saya.",
      "B": "Tempat yang menawarkan banyak hiburan dan keramaian seru.",
      "C": "Lokasi yang tenang dan memiliki nilai sejarah yang kuat.",
      "D": "Tempat yang nyaman untuk bersantai bersama orang terdekat."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 218,
    "question": "Kebiasaan saya saat merapikan meja kerja adalah...",
    "options": {
      "A": "Menyusun semua barang berdasarkan kategori dan kegunaan tertentu.",
      "B": "Merapikan seadanya saja selama masih terlihat cukup menyenangkan.",
      "C": "Membuang barang tidak berguna agar kerja lebih efisien.",
      "D": "Membiarkan barang tetap di tempatnya selama saya merasa nyaman."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 219,
    "question": "Saat bercerita tentang suatu kejadian, saya cenderung...",
    "options": {
      "A": "Menyebutkan detail waktu dan urutan kejadian secara akurat.",
      "B": "Menambahkan gerakan tangan dan ekspresi wajah yang dramatis.",
      "C": "Fokus pada poin utama dan hasil akhir dari kejadian tersebut.",
      "D": "Bercerita dengan nada suara yang tenang dan mudah diikuti."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 220,
    "question": "Apa yang paling saya khawatirkan tentang masa depan?",
    "options": {
      "A": "Ketidaksiapan dalam menghadapi risiko yang mungkin terjadi nanti.",
      "B": "Kehilangan keseruan hidup dan dijauhi oleh lingkungan sosial.",
      "C": "Terjadinya perubahan besar yang merusak ketenangan hidup saya.",
      "D": "Tidak berhasil meraih cita-cita besar yang saya idamkan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 221,
    "question": "Ketika sedang berbelanja, saya lebih sering membeli...",
    "options": {
      "A": "Barang yang memberikan rasa nyaman saat saya gunakan nanti.",
      "B": "Barang yang sedang populer meskipun fungsinya belum pasti.",
      "C": "Barang yang bisa meningkatkan performa atau status saya.",
      "D": "Barang yang memiliki kualitas bahan terbaik dan tahan lama."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 222,
    "question": "Jika ada teman yang menangis di dekat saya, saya...",
    "options": {
      "A": "Mendengarkan dengan penuh empati dan ikut merasakan kesedihannya.",
      "B": "Menawarkan solusi agar masalah yang membuatnya sedih segera selesai.",
      "C": "Duduk di sampingnya dengan tenang memberikan rasa aman kepadanya.",
      "D": "Segera menghiburnya dengan kata-kata manis agar dia tersenyum."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 223,
    "question": "Dalam rapat tim, jika ada perbedaan pendapat, saya...",
    "options": {
      "A": "Mempertahankan pendapat saya dengan argumentasi yang sangat tegas.",
      "B": "Menunggu mufakat tercapai demi menjaga kebersamaan dalam tim.",
      "C": "Mencoba menyatukan pendapat dengan cara yang penuh candaan.",
      "D": "Menilai semua pendapat secara objektif berdasarkan data yang ada."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 224,
    "question": "Sikap saya terhadap tradisi keluarga adalah...",
    "options": {
      "A": "Memperbaikinya jika tradisi tersebut dirasa tidak lagi relevan.",
      "B": "Menghormatinya karena memiliki makna mendalam bagi leluhur kami.",
      "C": "Mengikutinya dengan gembira karena seru untuk dilakukan bersama.",
      "D": "Menjalankannya dengan setia demi menjaga keutuhan tali persaudaraan."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 225,
    "question": "Gaya saya saat memimpin sebuah kepanitiaan adalah...",
    "options": {
      "A": "Membagi tugas dengan tegas dan mengawasi hasil kerja mereka.",
      "B": "Memastikan setiap detail teknis acara sudah dipersiapkan matang.",
      "C": "Memberikan motivasi yang tinggi agar semua panitia bersemangat.",
      "D": "Bersikap akomodatif terhadap masukan dari semua anggota panitia."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 226,
    "question": "Ketika saya melakukan kesalahan fatal, saya akan...",
    "options": {
      "A": "Menerima teguran dengan sabar dan berjanji akan lebih teliti.",
      "B": "Meminta maaf dengan gaya santai agar situasi tidak kaku.",
      "C": "Merasa bersalah dan memikirkan dampaknya bagi orang lain.",
      "D": "Segera mencari cara memperbaiki kesalahan tersebut dengan cepat."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 227,
    "question": "Bagaimana cara saya menghilangkan stres setelah bekerja?",
    "options": {
      "A": "Melakukan hobi yang memberikan hasil nyata bagi saya.",
      "B": "Keluar rumah untuk bertemu teman atau jalan-jalan santai.",
      "C": "Merenung atau membaca buku di tempat yang tenang.",
      "D": "Beristirahat total sambil menonton film favorit di rumah."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 228,
    "question": "Dalam mengambil keputusan besar, saya seringkali...",
    "options": {
      "A": "Memilih opsi yang memberikan kemajuan paling signifikan dalam hidup.",
      "B": "Bertanya pada orang kepercayaan untuk mendapatkan rasa aman batin.",
      "C": "Mengikuti kata hati yang membuat saya merasa paling bersemangat.",
      "D": "Mempertimbangkan risiko terkecil berdasarkan analisis data yang ada."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 229,
    "question": "Apa yang saya lakukan saat menghadapi tetangga yang berisik?",
    "options": {
      "A": "Mencoba bersabar meski dalam hati merasa sangat tidak nyaman.",
      "B": "Menegurnya langsung jika suara berisiknya sudah sangat mengganggu.",
      "C": "Mengajak mereka mengobrol santai untuk menyindir secara halus.",
      "D": "Membiarkannya saja karena malas terlibat dalam keributan antar tetangga."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "menengah"
  },
  {
    "id": 230,
    "question": "Cara saya menyampaikan kritik kepada orang lain adalah...",
    "options": {
      "A": "Membungkus kritik dengan pujian agar orang tersebut tidak tersinggung.",
      "B": "Memilih kata-kata yang paling lembut agar tidak menyakiti hati.",
      "C": "Langsung pada pokok masalahnya agar segera bisa diperbaiki kembali.",
      "D": "Menyampaikan kritik secara logis dengan alasan-alasan yang sangat kuat."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 231,
    "question": "Saat libur panjang, rencana utama saya adalah...",
    "options": {
      "A": "Menghabiskan waktu santai bersama keluarga tanpa ada rencana khusus.",
      "B": "Menyelesaikan proyek pribadi yang tertunda agar cepat selesai tuntas.",
      "C": "Mengunjungi tempat-tempat seru yang belum pernah saya datangi sebelumnya.",
      "D": "Mempelajari keahlian baru dengan penuh ketekunan di rumah saja."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "menengah"
  },
  {
    "id": 232,
    "question": "Jika saya merasa diabaikan dalam sebuah forum, saya...",
    "options": {
      "A": "Tetap diam dan mendengarkan saja karena malas mencari perhatian.",
      "B": "Menarik diri dan menganalisis mengapa pendapat saya tidak menarik.",
      "C": "Bicara lebih tegas agar pendapat saya didengarkan oleh audiens.",
      "D": "Mencari cara agar pusat perhatian kembali tertuju pada saya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "dalam"
  },
  {
    "id": 233,
    "question": "Ketika teman memuji hasil kerja saya, saya akan...",
    "options": {
      "A": "Merasa agak malu dan berpikir apakah hasilnya benar-benar sempurna.",
      "B": "Menerimanya sebagai tanda bahwa kerja keras saya telah berhasil.",
      "C": "Sangat senang dan menceritakan perjuangan saya dengan penuh semangat.",
      "D": "Tersenyum ramah dan mengucapkan terima kasih atas apresiasi tulusnya."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 234,
    "question": "Jika ada kerabat yang tertimpa musibah, tindakan saya...",
    "options": {
      "A": "Menemaninya dengan sabar agar dia merasa memiliki dukungan emosional.",
      "B": "Mengajak saudara lain untuk menggalang bantuan dengan penuh keceriaan.",
      "C": "Memberikan bantuan materi yang paling dibutuhkan segera tanpa menunda.",
      "D": "Mendoakan dengan tulus dan membantu merencanakan solusi jangka panjang."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 235,
    "question": "Bagaimana reaksi saya jika mendapat hadiah yang tidak disukai?",
    "options": {
      "A": "Mengucapkan terima kasih dengan tulus karena menghargai perhatian orang tersebut.",
      "B": "Menyimpannya dengan rapi sebagai bentuk menghargai niat si pemberi.",
      "C": "Menerimanya dan mungkin memberikannya pada orang yang lebih butuh.",
      "D": "Tetap pura-pura senang agar pemberinya tidak merasa kecewa."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 236,
    "question": "Saat harus berbicara di depan pimpinan, saya merasa...",
    "options": {
      "A": "Gugup dan berusaha memastikan catatan saya sudah sangat lengkap.",
      "B": "Tenang selama saya bisa menyampaikan pesan dengan cara sopan.",
      "C": "Bersemangat karena bisa menunjukkan kemampuan komunikasi saya secara langsung.",
      "D": "Percaya diri karena saya menguasai materi yang ingin disampaikan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 237,
    "question": "Sikap saya terhadap orang yang sering melanggar aturan...",
    "options": {
      "A": "Merasa kesal karena tindakannya mengganggu ketertiban yang sudah ada.",
      "B": "Memintanya mematuhi aturan demi kelancaran dan efisiensi kerja tim.",
      "C": "Menegurnya sambil bercanda agar dia tidak merasa tersudutkan nantinya.",
      "D": "Menghindari orang tersebut agar saya tidak ikut terlibat masalahnya."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 238,
    "question": "Ketika saya merasa kesepian, hal yang dilakukan adalah...",
    "options": {
      "A": "Menikmati kesunyian tersebut sambil beristirahat dengan penuh ketenangan batin.",
      "B": "Menelepon teman lama hanya untuk sekadar mengobrol tentang apa saja.",
      "C": "Menuliskan perasaan saya dalam sebuah catatan atau buku harian.",
      "D": "Mencari kegiatan baru yang produktif agar waktu tidak terbuang."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 239,
    "question": "Dalam mengatur pengeluaran bulanan, saya cenderung...",
    "options": {
      "A": "Mencatat semua pengeluaran dengan sangat teliti agar anggaran terjaga.",
      "B": "Mengalokasikan dana untuk investasi yang memberikan keuntungan di masa depan.",
      "C": "Berhemat agar memiliki cadangan dana yang cukup untuk masa nanti.",
      "D": "Mengutamakan hal-hal yang menyenangkan meskipun tabungan menjadi sedikit berkurang."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 240,
    "question": "Apa cita-cita utama saya dalam berkeluarga nantinya?",
    "options": {
      "A": "Membangun keluarga yang sukses secara finansial dan prestasi sosial.",
      "B": "Menciptakan rumah tangga yang tenang, damai, dan penuh kasih sayang.",
      "C": "Membentuk keluarga yang harmonis dengan nilai moral yang sangat kuat.",
      "D": "Menjadi orang tua yang seru dan selalu menjadi sahabat anak."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 241,
    "question": "Saat diajak mencoba olahraga baru yang menantang, saya...",
    "options": {
      "A": "Langsung setuju karena suka mencoba hal-hal baru yang seru.",
      "B": "Mencobanya jika olahraga itu bisa melatih mental dan kekuatan.",
      "C": "Mempelajari teknik dasarnya dulu agar tidak terjadi cedera yang salah.",
      "D": "Ikut saja jika teman-teman lain juga ikut mencoba olahraga itu."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 242,
    "question": "Bagaimana reaksi saya jika teman tidak membayar hutangnya?",
    "options": {
      "A": "Menunggu dia membayar sendiri karena saya merasa sungkan menagihnya langsung.",
      "B": "Merasa sedih dan kecewa karena kepercayaan saya telah dikhianati teman.",
      "C": "Menagihnya secara tegas karena itu adalah hak saya yang sah.",
      "D": "Mengingatkannya dengan cara halus agar tidak merusak pertemanan kami."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 243,
    "question": "Dalam mengerjakan tugas tim, saya lebih suka peran...",
    "options": {
      "A": "Anggota pelaksana yang bekerja dengan konsisten sesuai arahan pimpinan.",
      "B": "Penanggung jawab utama yang memastikan semua target tercapai tepat waktu.",
      "C": "Pemberi ide kreatif dan pembangun semangat seluruh anggota tim.",
      "D": "Editor atau pengawas kualitas yang memeriksa setiap detail pekerjaan tim."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 244,
    "question": "Jika ada orang baru yang bergabung di grup, saya...",
    "options": {
      "A": "Bersikap sopan dan menunggu momen yang tepat untuk saling berkenalan.",
      "B": "Tersenyum ramah dan membiarkan dia beradaptasi dengan ritme grup sendiri.",
      "C": "Memperhatikan kemampuannya sebelum saya mulai akrab berbicara dengan dia.",
      "D": "Menyapa lebih dulu dan mengajaknya mengobrol agar dia merasa nyaman."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 245,
    "question": "Ketika saya harus mengkritik pasangan saya sendiri, saya...",
    "options": {
      "A": "Menunggu waktu tenang dan menjelaskannya dengan alasan yang sangat logis.",
      "B": "Bicara jujur apa adanya agar dia tahu apa yang salah.",
      "C": "Menggunakan bahasa yang manis agar dia tidak merasa sedang dikritik.",
      "D": "Berusaha menyampaikan dengan sangat hati-hati demi menjaga keharmonisan hubungan kami."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 246,
    "question": "Apa yang saya lakukan saat pekerjaan saya sangat menumpuk?",
    "options": {
      "A": "Tetap tenang dan mengerjakan apa yang bisa saya selesaikan segera.",
      "B": "Mengerjakannya sambil mendengarkan musik agar suasana tetap terasa menyenangkan.",
      "C": "Membuat urutan prioritas yang sangat detail untuk setiap tugas tersebut.",
      "D": "Bekerja lebih keras dan fokus penuh sampai semua tugas selesai."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 247,
    "question": "Gaya komunikasi saya dalam sebuah presentasi biasanya adalah...",
    "options": {
      "A": "To the point dan menekankan pada hasil nyata yang didapat.",
      "B": "Sangat rapi, menggunakan data akurat, dan sangat sistematis sekali.",
      "C": "Tenang, sopan, dan memastikan semua audiens memahami pesan yang disampaikan.",
      "D": "Penuh dengan cerita menarik yang bisa menghibur seluruh audiens."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 248,
    "question": "Apa yang paling saya harapkan dari lingkungan kerja saya?",
    "options": {
      "A": "Peluang untuk meraih posisi yang lebih tinggi secara cepat.",
      "B": "Suasana yang ceria dan rekan kerja yang asyik diajak bicara.",
      "C": "Keamanan kerja dan suasana yang penuh dengan rasa kekeluargaan.",
      "D": "Sistem kerja yang tertata rapi dan memiliki aturan yang jelas."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 249,
    "question": "Saat harus membuat keputusan di bawah tekanan waktu, saya...",
    "options": {
      "A": "Berusaha tetap logis dan memilih opsi dengan risiko paling kecil.",
      "B": "Memilih opsi yang paling cepat memberikan hasil yang terlihat nyata.",
      "C": "Mengandalkan insting dan pengalaman yang menurut saya paling pas.",
      "D": "Mencari saran dari orang yang lebih ahli agar tidak salah."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 250,
    "question": "Apa yang saya lakukan jika rencana akhir pekan batal?",
    "options": {
      "A": "Mencari kegiatan alternatif lainnya agar liburan tetap terasa sangat seru.",
      "B": "Merasa kecewa dan merenungkan mengapa rencana tersebut bisa sampai gagal.",
      "C": "Menggunakan waktu untuk menyelesaikan pekerjaan yang belum tuntas di kantor.",
      "D": "Menikmati waktu luang dengan bersantai dan beristirahat total di rumah."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 251,
    "question": "Jika harus menyampaikan berita duka, cara saya adalah...",
    "options": {
      "A": "Berbicara dengan suara yang sangat lembut untuk memberikan ketenangan batin.",
      "B": "Menyampaikannya secara langsung namun tetap dengan nada bicara yang sopan.",
      "C": "Mencari waktu yang tepat dan mencoba menghibur pihak keluarga.",
      "D": "Memberikan penjelasan yang lengkap dan hati-hati mengenai kejadian yang terjadi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "dalam"
  },
  {
    "id": 252,
    "question": "Bagaimana sikap saya saat harus memimpin orang yang malas?",
    "options": {
      "A": "Sabar menghadapinya dan terus mendorongnya secara perlahan agar mau bergerak.",
      "B": "Memberikan sanksi yang tegas agar dia tidak mengulangi kemalasannya lagi.",
      "C": "Mencari tahu alasan di balik kemalasannya dan memberikan solusi tepat.",
      "D": "Mengajaknya bercanda agar dia merasa semangat untuk mulai bekerja lagi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 253,
    "question": "Saat saya merasa sangat marah kepada seseorang, saya akan...",
    "options": {
      "A": "Menyatakan keberatan saya dengan nada suara yang tegas dan jelas.",
      "B": "Memendam amarah tersebut dan memikirkannya dalam waktu yang cukup lama.",
      "C": "Diam saja dan mencoba menenangkan diri agar tidak terjadi keributan.",
      "D": "Meluapkan emosi saya saat itu juga namun biasanya cepat reda."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 254,
    "question": "Di mata teman-teman, saya dikenal sebagai sosok yang...",
    "options": {
      "A": "Sabar, setia kawan, dan bisa dipercaya untuk menjaga rahasia mereka.",
      "B": "Selalu membawa keceriaan dan semangat baru dalam setiap pertemuan kami.",
      "C": "Tangguh, mandiri, dan sangat berambisi dalam mengejar cita-cita hidupnya.",
      "D": "Cerdas, teliti, dan selalu memberikan saran yang sangat masuk akal."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 255,
    "question": "Sikap saya terhadap kegagalan dalam berbisnis adalah...",
    "options": {
      "A": "Mengevaluasi kesalahan strategi dan segera mencoba lagi dengan cara berbeda.",
      "B": "Cepat mencari peluang bisnis lain yang mungkin lebih seru dijalankan.",
      "C": "Merenungi kegagalan tersebut dan merasa sangat terpukul secara batin saya.",
      "D": "Menerimanya dengan sabar dan mencoba mencari jalan keluar yang aman."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 256,
    "question": "Apa yang paling saya sukai dari sebuah perayaan keluarga?",
    "options": {
      "A": "Kesempatan untuk berkumpul dan mengobrol seru dengan seluruh anggota keluarga.",
      "B": "Detail acara yang tertata rapi dan makanan yang disajikan sempurna.",
      "C": "Momen untuk menunjukkan pencapaian dan kesuksesan yang telah saya raih.",
      "D": "Suasana kebersamaan yang penuh dengan ketenangan dan rasa saling mengasihi."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "ringan"
  },
  {
    "id": 257,
    "question": "Dalam hal belajar hal baru, saya lebih suka...",
    "options": {
      "A": "Membaca teori secara mendalam agar saya memahami konsepnya dengan sempurna.",
      "B": "Belajar dengan ritme yang tenang dan tidak terburu-buru mengikuti waktu.",
      "C": "Belajar secara mandiri dan langsung mempraktikkannya untuk melihat hasilnya nyata.",
      "D": "Belajar melalui diskusi kelompok yang seru dan penuh interaksi aktif."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 258,
    "question": "Apa yang menjadi pertimbangan saya dalam memilih pasangan hidup?",
    "options": {
      "A": "Sosok yang mandiri, sukses, dan memiliki visi misi masa depan.",
      "B": "Sosok yang menyenangkan, humoris, dan asyik diajak bicara setiap saat.",
      "C": "Sosok yang memiliki integritas moral tinggi dan pola pikir logis.",
      "D": "Sosok yang lembut, penyabar, dan bisa memberikan rasa nyaman maksimal."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 259,
    "question": "Gaya bicara saya saat sedang memotivasi tim adalah...",
    "options": {
      "A": "Lembut, penuh empati, dan memberikan dukungan moral bagi semua anggota.",
      "B": "Penuh semangat, ekspresif, dan menggunakan banyak kata-kata yang menginspirasi sekali.",
      "C": "Tegas, lugas, dan menekankan pada pentingnya meraih target prestasi bersama.",
      "D": "Sistematis, berdasarkan fakta, dan memberikan arahan yang sangat jelas terukur."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 260,
    "question": "Apa yang saya lakukan saat menghadapi kritikan pedas orang?",
    "options": {
      "A": "Menerimanya dengan sabar dan tidak mau memperpanjang masalah dengan orang tersebut.",
      "B": "Membela diri dengan argumentasi yang kuat jika kritik tersebut salah.",
      "C": "Mencoba menertawakannya agar saya tidak merasa terlalu sakit hati nantinya.",
      "D": "Memikirkannya secara mendalam dan mencoba mengambil pelajaran dari kritik tersebut."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 261,
    "question": "Saat memilih aktivitas liburan akhir pekan, saya lebih suka...",
    "options": {
      "A": "Merapikan rumah atau mengerjakan proyek hobi yang membutuhkan ketelitian tinggi.",
      "B": "Bersantai di rumah sambil menikmati waktu tenang bersama orang tercinta.",
      "C": "Mengajak teman-teman nonton film atau pergi ke kafe yang ramai.",
      "D": "Melakukan kegiatan yang bermanfaat untuk kesehatan atau peningkatan keahlian diri."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 262,
    "question": "Bagaimana reaksi saya jika teman memuji hasil masakan saya?",
    "options": {
      "A": "Merasa senang tapi bertanya-tanya apakah rasanya benar-benar sudah pas sekali.",
      "B": "Tersenyum ramah dan merasa bahagia karena masakan saya disukai orang lain.",
      "C": "Menerimanya dan merasa bangga karena usaha saya memasak sudah berhasil.",
      "D": "Sangat senang dan menawarkan dia untuk mencicipi masakan saya lainnya."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 263,
    "question": "Dalam hal mengelola keuangan, prinsip hidup saya adalah...",
    "options": {
      "A": "Uang adalah alat untuk bersenang-senang dan berbagi kebahagiaan dengan orang.",
      "B": "Uang harus dikelola dengan sangat bijaksana dan dicatat setiap pengeluarannya.",
      "C": "Uang adalah modal untuk meraih kemandirian dan kesuksesan masa depan.",
      "D": "Uang yang penting cukup untuk memenuhi kebutuhan dan memberikan ketenangan."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 264,
    "question": "Apa yang saya lakukan saat melihat anggota keluarga sedih?",
    "options": {
      "A": "Mencoba menghiburnya dengan berbagai cerita lucu agar dia kembali ceria.",
      "B": "Mendengarkan curhatannya dengan penuh perhatian dan memberikan rasa empati dalam.",
      "C": "Menemaninya dengan sabar agar dia merasa tidak sendirian menghadapi masalahnya.",
      "D": "Mencarikan solusi praktis agar masalahnya segera selesai dan dia tenang."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 265,
    "question": "Gaya kepemimpinan saya saat mengoordinasi acara amal adalah...",
    "options": {
      "A": "Penuh semangat dan mampu menggerakkan banyak relawan untuk bergabung aktif.",
      "B": "Sabar, bijaksana, dan mengutamakan rasa kemanusiaan dalam setiap tindakan saya.",
      "C": "Sangat detail dalam menyusun anggaran dan memastikan penyalurannya tepat sasaran.",
      "D": "Efisien, terukur, dan fokus pada target jumlah bantuan yang terkumpul."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 266,
    "question": "Ketika saya harus bekerja di lingkungan yang berisik, saya...",
    "options": {
      "A": "Ikut dalam keramaian tersebut asalkan topiknya menarik perhatian saya sendiri.",
      "B": "Meminta orang lain untuk tenang karena kebisingan itu mengganggu produktivitas.",
      "C": "Bisa menyesuaikan diri dan tetap bekerja dengan tenang tanpa banyak keluhan.",
      "D": "Mencoba tetap fokus pada pekerjaan saya meskipun merasa sangat terganggu."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 267,
    "question": "Sikap saya terhadap perubahan mendadak dalam rencana perjalanan...",
    "options": {
      "A": "Merasa kecewa karena persiapan matang saya menjadi berantakan saat itu.",
      "B": "Menyambutnya sebagai petualangan baru yang tidak terduga dan sangat seru.",
      "C": "Berusaha secepat mungkin mencari solusi agar jadwal tetap berjalan lancar.",
      "D": "Menerimanya dengan pasrah dan mencoba mengikuti alur yang ada saja."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 268,
    "question": "Apa yang paling saya harapkan dari kehidupan di masa tua?",
    "options": {
      "A": "Tetap aktif secara sosial dan dikelilingi oleh banyak teman baik.",
      "B": "Menghabiskan waktu bersama cucu dan keluarga dalam kedamaian penuh kasih.",
      "C": "Hidup dengan tenang, sehat, dan menikmati hobi yang saya sukai.",
      "D": "Menikmati kesuksesan yang telah diraih dan memiliki pengaruh bagi masyarakat."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 269,
    "question": "Cara saya memperkenalkan produk atau jasa baru adalah dengan...",
    "options": {
      "A": "Memberikan pendekatan personal yang sopan dan memberikan rasa aman bagi pembeli.",
      "B": "Menonjolkan manfaat praktis dan keunggulan produk tersebut dibandingkan dengan pesaing.",
      "C": "Presentasi yang penuh antusiasme agar calon pembeli merasa sangat tertarik.",
      "D": "Memberikan penjelasan teknis yang mendalam disertai dengan data-data yang akurat."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 270,
    "question": "Apa yang saya lakukan saat merasa sangat lelah secara emosional?",
    "options": {
      "A": "Tetap memaksakan diri bekerja agar emosi saya tidak terlihat lemah.",
      "B": "Mencari hiburan atau pergi ke tempat ramai untuk melupakan perasaan.",
      "C": "Menyendiri dan merenungkan perasaan saya sampai saya merasa tenang kembali.",
      "D": "Beristirahat total di rumah dan menjauh dari segala hiruk pikuk dunia."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 271,
    "question": "Saat makan di restoran bersama teman-teman, saya cenderung...",
    "options": {
      "A": "Memilih menu yang paling cepat disajikan agar tidak menunggu lama.",
      "B": "Mencoba menu unik yang belum pernah saya makan sebelumnya saja.",
      "C": "Mengecek kandungan gizi atau kebersihan makanan tersebut secara sangat teliti.",
      "D": "Memesan menu langganan yang sudah terbukti rasanya pas di lidah."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 272,
    "question": "Jika teman saya menceritakan rahasia besarnya, saya akan...",
    "options": {
      "A": "Menyimpannya dengan sangat rapat karena saya menghargai kepercayaan yang diberikan.",
      "B": "Mendengarkannya saja tanpa menghakimi dan tetap menjadi teman yang setia.",
      "C": "Memberikan saran praktis agar rahasia tersebut tidak menjadi masalah baginya.",
      "D": "Sangat antusias mendengarkannya namun kadang sulit untuk tidak menceritakannya lagi."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 273,
    "question": "Dalam rapat kerja yang membosankan, hal yang saya lakukan...",
    "options": {
      "A": "Mengajak rekan sebelah bercanda atau bermain ponsel untuk membunuh bosan.",
      "B": "Mencatat setiap detail pembicaraan meskipun topiknya tidak terlalu menarik bagi saya.",
      "C": "Tetap fokus dan mencoba mencari poin penting agar rapat cepat selesai.",
      "D": "Mendengarkan dengan sabar sampai rapat tersebut berakhir dengan sendirinya saja."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 274,
    "question": "Sikap saya saat melihat saudara saya berbuat salah adalah...",
    "options": {
      "A": "Memaafkannya dan berharap dia akan belajar dari kesalahannya tersebut di masa depan.",
      "B": "Menasihatinya secara tegas agar dia menyadari kesalahannya dan segera memperbaikinya.",
      "C": "Menegurnya dengan cara yang lucu agar dia tidak merasa tersinggung.",
      "D": "Menganalisis mengapa dia bisa berbuat salah sebelum saya mulai bicara dengannya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 275,
    "question": "Gaya kepemimpinan saya saat mengelola tim sukarelawan adalah...",
    "options": {
      "A": "Memberikan apresiasi yang tinggi agar semua sukarelawan merasa dihargai kerja kerasnya.",
      "B": "Memastikan sistem kerja relawan terorganisir dengan rapi dan sangat minim kesalahan.",
      "C": "Mengoordinasi tugas dengan efisien agar bantuan yang diberikan memberikan dampak maksimal.",
      "D": "Mengutamakan keharmonisan antar relawan agar misi kemanusiaan tercapai dengan damai."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 276,
    "question": "Ketika saya harus membatalkan janji temu, saya akan...",
    "options": {
      "A": "Merasa tidak enak hati dan memikirkannya dalam waktu yang cukup lama.",
      "B": "Meminta maaf dengan gaya yang manis dan menjanjikan pertemuan pengganti segera.",
      "C": "Memberikan alasan yang logis dan jelas mengapa saya harus membatalkannya.",
      "D": "Menyampaikannya dengan sopan dan berharap orang tersebut bisa memaklumi keadaan saya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 277,
    "question": "Bagaimana reaksi saya saat menghadapi kegagalan dalam tes kenaikan jabatan?",
    "options": {
      "A": "Merenungi kegagalan tersebut secara mendalam dan merasa sangat terpukul batin saya.",
      "B": "Merasa sedih sebentar lalu mencari kegiatan lain yang bisa menghibur saya kembali.",
      "C": "Mengevaluasi kekurangan saya dan belajar lebih giat lagi untuk tes berikutnya nanti.",
      "D": "Menerimanya sebagai bagian dari proses hidup dan tetap bekerja dengan sabar."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 278,
    "question": "Apa yang paling saya utamakan dalam merencanakan masa depan keuangan?",
    "options": {
      "A": "Membangun kekayaan yang bisa memberikan kekuatan dan pengaruh bagi saya.",
      "B": "Memiliki tabungan yang sangat aman dan terencana untuk jangka waktu panjang.",
      "C": "Mendapatkan rasa aman secara finansial agar hidup saya tetap tenang damai.",
      "D": "Memiliki dana untuk menikmati hidup dan berbagi kebahagiaan dengan orang lain."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 279,
    "question": "Cara saya menyampaikan ketidakpuasan terhadap layanan di hotel adalah...",
    "options": {
      "A": "Menghubungi manajer hotel dan menuntut pertanggungjawaban yang jelas atas ketidaknyamanan itu.",
      "B": "Berbicara dengan petugas secara lembut dan berharap masalah tersebut tidak terulang.",
      "C": "Mengajukan komplain sambil bercanda namun tetap mengharapkan ada perbaikan segera.",
      "D": "Menulis surat keluhan resmi dengan merinci kronologi kejadian secara sangat lengkap."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 280,
    "question": "Saat saya berada di lingkungan baru yang asing, saya akan...",
    "options": {
      "A": "Memperhatikan situasi sekitar dan mencari peluang yang bisa saya manfaatkan nanti.",
      "B": "Bersikap sopan dan mengamati tata krama yang berlaku di lingkungan tersebut.",
      "C": "Segera menyapa orang-orang di sekitar agar saya tidak merasa sendirian lagi.",
      "D": "Tersenyum ramah dan menunggu momen yang tepat untuk mulai berinteraksi sosial."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 281,
    "question": "Apa yang saya lakukan jika melihat teman melakukan kesalahan fatal?",
    "options": {
      "A": "Menunggu waktu yang sangat tepat untuk membicarakannya secara empat mata saja.",
      "B": "Mengingatkannya sambil bercanda agar dia tidak merasa tersinggung oleh saya.",
      "C": "Mungkin tidak mengatakannya jika kesalahan itu tidak terlalu berdampak pada saya.",
      "D": "Menegurnya secara langsung agar dia segera memperbaiki kesalahan tersebut saat itu."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 282,
    "question": "Dalam hal memilih tempat tinggal, kriteria utama bagi saya adalah...",
    "options": {
      "A": "Daerah yang tenang, asri, sejuk, dan memberikan rasa nyaman yang maksimal.",
      "B": "Memiliki nilai investasi tinggi dan menunjang status sosial saya di masyarakat.",
      "C": "Lingkungan yang aman, bersih, teratur, dan memiliki sistem keamanan yang baik.",
      "D": "Dekat dengan pusat keramaian dan tempat berkumpul teman-teman terdekat saya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 283,
    "question": "Bagaimana reaksi saya saat menghadapi perubahan teknologi yang cepat?",
    "options": {
      "A": "Sangat antusias mencobanya meskipun saya belum tahu cara pemakaiannya secara benar.",
      "B": "Mempelajari spesifikasinya secara mendalam sebelum saya memutuskan untuk membelinya atau menggunakannya.",
      "C": "Hanya menggunakan teknologi yang membantu produktivitas dan efisiensi kerja saya saja.",
      "D": "Cenderung bertahan dengan cara lama yang sudah terbukti nyaman bagi saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 284,
    "question": "Apa yang saya lakukan saat rencana besar saya gagal total?",
    "options": {
      "A": "Menerima kegagalan sebagai bagian hidup dan tetap berusaha tenang dalam menghadapinya.",
      "B": "Mengevaluasi kegagalan tersebut dan segera menyusun strategi tempur yang baru lagi.",
      "C": "Merasa sangat sedih dan butuh waktu lama untuk merenungi kegagalan tersebut.",
      "D": "Segera mencari hiburan dan mencoba bangkit kembali dengan rencana baru lainnya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 285,
    "question": "Gaya bicara saya saat sedang memberikan arahan kerja adalah...",
    "options": {
      "A": "Sangat terstruktur, logis, dan memastikan tidak ada informasi yang terlewatkan sedikitpun.",
      "B": "Lembut, sopan, dan lebih bersifat mengajak daripada memerintah orang lain secara langsung.",
      "C": "Bicara dengan nada yang riang dan penuh dengan kata-kata penyemangat tim.",
      "D": "Tegas, singkat, padat, dan langsung menunjuk siapa yang harus melakukan tugas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 286,
    "question": "Apa yang paling saya utamakan dalam menjalin hubungan persahabatan?",
    "options": {
      "A": "Keseruan, keceriaan, dan kemampuan teman untuk saling menghibur setiap saat nantinya.",
      "B": "Kedalaman pemikiran, kesamaan minat, dan integritas moral yang sangat kuat sekali.",
      "C": "Kenyamanan, saling pengertian, dan ketiadaan konflik dalam hubungan pertemanan tersebut saja.",
      "D": "Loyalitas, saling mendukung dalam meraih kesuksesan, dan kejujuran yang sangat tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 287,
    "question": "Dalam hal mengelola waktu, prinsip utama bagi saya adalah...",
    "options": {
      "A": "Waktu harus dinikmati dengan ritme yang stabil agar tidak merasa tergesa-gesa.",
      "B": "Waktu harus digunakan sefleksibel mungkin agar hidup saya tidak terasa kaku.",
      "C": "Waktu harus dikelola dengan jadwal yang sangat ketat agar semua terencana.",
      "D": "Setiap detik harus menghasilkan sesuatu yang produktif dan bermanfaat bagi masa depan."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "menengah"
  },
  {
    "id": 288,
    "question": "Apa yang saya lakukan jika melihat anak saya berbuat salah?",
    "options": {
      "A": "Memberikan pengertian tegas tentang konsekuensi dari kesalahan yang telah dia perbuat tersebut.",
      "B": "Mendiskusikan kesalahan itu secara logis agar dia paham mengapa tindakannya tersebut salah.",
      "C": "Menegurnya dengan cara yang menyenangkan agar dia tidak merasa takut pada saya.",
      "D": "Memaafkannya dengan penuh kasih sayang dan membimbingnya agar tidak mengulanginya lagi nanti."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 289,
    "question": "Sikap saya terhadap tantangan kerja yang sulit adalah...",
    "options": {
      "A": "Berusaha menjalaninya dengan sabar dan tetap konsisten dalam bekerja setiap harinya.",
      "B": "Menyambutnya dengan antusiasme tinggi sebagai ajang pembuktian diri saya di kantor.",
      "C": "Fokus mencari solusi tercepat agar tantangan tersebut segera terlewati dengan hasil baik.",
      "D": "Menganalisis tingkat kesulitan tantangan tersebut sebelum saya mulai menyusun rencana aksi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 290,
    "question": "Apa yang menjadi motivasi saya dalam berorganisasi di masyarakat?",
    "options": {
      "A": "Bisa memberikan kontribusi nyata dan memiliki posisi yang berpengaruh bagi warga.",
      "B": "Bisa ikut menjaga kerukunan antar warga agar lingkungan tetap damai sentosa.",
      "C": "Bisa bertemu dengan banyak orang baru dan memperluas jaringan pertemanan saya.",
      "D": "Bisa ikut mengatur sistem kemasyarakatan agar lebih teratur dan tertata rapi."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 291,
    "question": "Ketika saya harus memilih jurusan pendidikan, saya mengutamakan...",
    "options": {
      "A": "Jurusan yang sedang tren dan menjanjikan lingkungan kampus yang sangat asyik.",
      "B": "Jurusan yang tidak terlalu membebani pikiran saya dan suasananya cukup nyaman.",
      "C": "Jurusan yang sesuai dengan minat bakat saya dan memiliki standar akademik.",
      "D": "Jurusan yang memiliki prospek karier cemerlang dan gaji yang sangat tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 292,
    "question": "Bagaimana reaksi saya saat menghadapi fitnah dari rekan kerja?",
    "options": {
      "A": "Mencoba mengklarifikasinya dengan cara yang santai agar tidak memperkeruh suasana kantor.",
      "B": "Membiarkannya saja karena saya yakin kebenaran pada akhirnya akan terungkap dengan sendirinya.",
      "C": "Meresponsnya dengan bukti-bukti yang kuat agar fitnah tersebut terbukti salah total.",
      "D": "Menghadapi pembuat fitnah tersebut dan menuntut penjelasan yang sangat jujur darinya."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 293,
    "question": "Sikap saya terhadap penggunaan media sosial harian adalah...",
    "options": {
      "A": "Hanya menggunakannya untuk mencari informasi bermanfaat dan berbagi pemikiran yang mendalam.",
      "B": "Lebih suka menjadi pengamat saja dan jarang mengunggah kehidupan pribadi saya.",
      "C": "Menggunakannya untuk membangun jaringan profesional dan menunjukkan pencapaian prestasi diri saya.",
      "D": "Sangat aktif mengunggah momen seru untuk dibagikan kepada teman-teman saya sendiri."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 294,
    "question": "Apa yang saya lakukan jika melihat hewan peliharaan sakit?",
    "options": {
      "A": "Mencari informasi tentang gejalanya di internet sebelum memutuskan tindakan selanjutnya nanti.",
      "B": "Memberinya perhatian lebih dan mencoba menghiburnya agar dia merasa lebih baik.",
      "C": "Merawatnya dengan penuh kesabaran dan kasih sayang di rumah sampai sembuh.",
      "D": "Segera membawanya ke dokter hewan terbaik agar dia cepat mendapat penanganan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "menengah"
  },
  {
    "id": 295,
    "question": "Gaya bicara saya saat sedang berada di tengah keramaian...",
    "options": {
      "A": "Bicara dengan suara yang cukup keras agar orang lain tertarik mendengarkan saya.",
      "B": "Cenderung diam dan hanya merespons jika diajak bicara oleh orang lain saja.",
      "C": "Bicara seperlunya saja dengan suara yang sopan dan memperhatikan lawan bicara.",
      "D": "Bicara dengan nada yang tegas dan penuh percaya diri akan posisi saya."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 296,
    "question": "Apa yang paling saya cari dalam sebuah buku bacaan?",
    "options": {
      "A": "Kisah yang menenangkan, penuh empati, dan memberikan rasa damai bagi pembacanya.",
      "B": "Pemikiran yang mendalam, logis, dan memberikan sudut pandang baru yang cerdas.",
      "C": "Informasi yang bisa meningkatkan pengetahuan dan kemampuan diri saya secara signifikan.",
      "D": "Cerita yang menghibur, penuh petualangan, dan tidak membuat saya merasa bosan."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 297,
    "question": "Sikap saya saat menghadapi perdebatan tentang politik adalah...",
    "options": {
      "A": "Memilih untuk tidak terlibat dalam perdebatan tersebut demi menjaga keharmonisan pertemanan.",
      "B": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua orang tertawa.",
      "C": "Menganalisis argumen setiap pihak secara logis berdasarkan fakta-fakta yang ada saat itu.",
      "D": "Menyampaikan pendapat saya secara kuat berdasarkan keyakinan dan prinsip yang tegas."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 298,
    "question": "Apa yang menjadi prioritas utama saya dalam memilih hobi baru?",
    "options": {
      "A": "Hobi tersebut harus menyenangkan dan memungkinkan saya bertemu dengan banyak teman.",
      "B": "Hobi tersebut harus memiliki nilai keindahan atau ketelitian yang cukup tinggi sekali.",
      "C": "Hobi tersebut harus memberikan tantangan yang bisa meningkatkan kemampuan diri saya sendiri.",
      "D": "Hobi tersebut harus bisa memberikan ketenangan dan kenyamanan bagi pikiran saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 299,
    "question": "Bagaimana reaksi saya jika mendapat kritik dari bawahan saya sendiri?",
    "options": {
      "A": "Merenungkan kritik tersebut secara mendalam dan merasa sangat terpukul oleh kata-katanya.",
      "B": "Menerimanya dengan senyuman dan berjanji akan menjadi atasan yang lebih asyik.",
      "C": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja yang lebih baik.",
      "D": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan bersama di tim."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 300,
    "question": "Apa yang paling saya harapkan dari hubungan dengan rekan kerja?",
    "options": {
      "A": "Hubungan yang stabil, harmonis, dan tidak ada konflik antar rekan kerja.",
      "B": "Hubungan yang penuh dengan keceriaan dan suasana kantor yang menyenangkan sekali.",
      "C": "Kerja sama yang profesional, efisien, dan saling mendukung dalam meraih target.",
      "D": "Saling menghargai keahlian masing-masing dan memiliki komunikasi yang sangat jelas."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 301,
    "question": "Saat teman mengajak pergi belanja mendadak, saya biasanya...",
    "options": {
      "A": "Menuruti ajakan teman agar dia merasa senang dan ditemani.",
      "B": "Berpikir dahulu apakah jadwal saya terganggu oleh ajakan itu.",
      "C": "Ikut jika ada barang penting yang harus dibeli.",
      "D": "Langsung mau karena suka jalan-jalan bersama teman."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 302,
    "question": "Jika presentasi saya tidak berjalan sesuai rencana, saya...",
    "options": {
      "A": "Tetap tenang dan mencoba melucu agar suasana mencair.",
      "B": "Segera beralih ke poin inti agar tujuan tetap tercapai.",
      "C": "Menerima keadaan dan mencoba menyelesaikannya dengan sabar.",
      "D": "Merasa sangat kecewa karena persiapan detail saya gagal total."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 303,
    "question": "Saat melihat anak kesulitan mengerjakan tugas sekolah, saya...",
    "options": {
      "A": "Mendampinginya dengan penuh kesabaran sampai dia merasa tenang.",
      "B": "Mengajarinya cara tercepat agar dia mandiri menyelesaikannya sendiri.",
      "C": "Memberinya semangat dengan janji hadiah yang sangat menarik.",
      "D": "Menjelaskan konsepnya secara mendalam agar dia paham betul."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 304,
    "question": "Sebagai pemimpin proyek, jika ada perubahan dana mendadak...",
    "options": {
      "A": "Berusaha tetap optimis dan meyakinkan tim semua baik saja.",
      "B": "Mendiskusikannya dengan tim untuk mencari solusi paling nyaman.",
      "C": "Menghitung ulang setiap rincian biaya dengan sangat teliti.",
      "D": "Memotong pengeluaran tidak penting agar target utama tetap aman."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 305,
    "question": "Reaksi saya saat merasa tidak dianggap oleh sahabat...",
    "options": {
      "A": "Membiarkannya saja dan berharap hubungan akan membaik sendiri.",
      "B": "Mencoba mencari perhatian lebih agar dia menyadari keberadaan saya.",
      "C": "Bertanya langsung padanya mengapa dia bersikap seperti itu.",
      "D": "Menarik diri dan merenungkan apa kesalahan saya selama ini."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 306,
    "question": "Ketika terjebak di situasi yang sangat membosankan, saya...",
    "options": {
      "A": "Mencari hal konyol untuk dilakukan atau mengobrol dengan orang.",
      "B": "Mengamati lingkungan sekitar secara detail dan mencatat dalam pikiran.",
      "C": "Memikirkan rencana kerja lain agar waktu saya tidak sia-sia.",
      "D": "Menunggu dengan sabar dan mencoba melamun dengan tenang."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 307,
    "question": "Dalam mengambil keputusan investasi rumah, saya lebih mementingkan...",
    "options": {
      "A": "Keamanan konstruksi dan rincian legalitas yang sangat jelas.",
      "B": "Kenyamanan tetangga dan suasana asri yang memberikan ketenangan.",
      "C": "Potensi kenaikan harga yang sangat pesat di masa depan.",
      "D": "Lingkungan yang ramai dan dekat dengan banyak tempat nongkrong."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 308,
    "question": "Saat harus mengantre di kasir yang sangat lambat...",
    "options": {
      "A": "Mencari teman mengobrol agar waktu tunggu tidak terasa membosankan.",
      "B": "Menggerutu dan terus memperhatikan kasir agar bekerja lebih cepat.",
      "C": "Mengecek kembali barang belanjaan untuk memastikan tidak ada kesalahan.",
      "D": "Menunggu dengan tenang sambil bermain ponsel atau melihat sekitar."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 309,
    "question": "Gaya bicara saya saat berkenalan dengan orang baru...",
    "options": {
      "A": "Tegas, singkat, dan langsung menanyakan profesi atau kesibukan mereka.",
      "B": "Lembut, lebih banyak mendengarkan, dan menunggu mereka bertanya dahulu.",
      "C": "Sangat ramah, penuh energi, dan banyak bercerita tentang diri.",
      "D": "Sopan, sedikit formal, dan berhati-hati dalam memilih kata bicara."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 310,
    "question": "Mengenai asuransi pendidikan anak, pemikiran utama saya adalah...",
    "options": {
      "A": "Sebagai jaminan agar anak sukses dan punya daya saing tinggi.",
      "B": "Agar anak bisa sekolah di tempat paling seru dan populer.",
      "C": "Memberikan rasa aman dan tenang bagi masa depan keluarga.",
      "D": "Melindungi masa depan anak dengan perhitungan biaya yang tepat."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 311,
    "question": "Jika harus bekerja dalam satu ruangan yang sangat sunyi...",
    "options": {
      "A": "Merasa tenang dan nyaman menikmati suasana kerja yang damai.",
      "B": "Fokus penuh pada detail pekerjaan tanpa ada gangguan suara.",
      "C": "Merasa sedikit gelisah karena tidak ada orang diajak bicara.",
      "D": "Sangat menyukainya karena bisa menyelesaikan tugas dengan sangat cepat."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 312,
    "question": "Saat ada teman yang meminjam uang tapi belum dikembalikan...",
    "options": {
      "A": "Mengingatkannya lewat candaan agar dia tidak merasa sedang ditagih.",
      "B": "Mencatatnya dalam daftar piutang dan merasa kecewa secara diam-diam.",
      "C": "Menunggu sampai dia mampu membayar tanpa berani menagihnya dahulu.",
      "D": "Menagihnya langsung secara tegas karena itu adalah hak saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 313,
    "question": "Bagaimana sikap saya jika pasangan melupakan hari jadi pernikahan?",
    "options": {
      "A": "Sedikit merajuk namun cepat memaafkan setelah diajak makan enak.",
      "B": "Memaklumi kesibukannya dan tidak ingin menjadikannya sebuah masalah besar.",
      "C": "Menegurnya agar hal itu tidak terjadi lagi di tahun depan.",
      "D": "Merasa sangat sedih dan meragukan perhatiannya kepada hubungan kami."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 314,
    "question": "Sebagai pimpinan, jika ada bawahan yang berprestasi, saya...",
    "options": {
      "A": "Tersenyum bangga dan mengucapkan terima kasih secara personal yang hangat.",
      "B": "Mengucapkan selamat dan memintanya mempertahankan kualitas kerja yang baik.",
      "C": "Memberinya pujian publik agar dia merasa sangat bangga sekali.",
      "D": "Memberinya bonus atau kenaikan posisi sebagai bentuk penghargaan nyata."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "ringan"
  },
  {
    "id": 315,
    "question": "Jika terjadi perdebatan sengit di grup WhatsApp, saya...",
    "options": {
      "A": "Berusaha meluruskan masalah dengan fakta yang sangat tegas sekali.",
      "B": "Memilih untuk tidak berkomentar namun terus memantau dengan teliti.",
      "C": "Menjadi penengah dan meminta semua orang untuk tetap saling menghormati.",
      "D": "Mengirim stiker lucu atau meme untuk mengalihkan suasana tegang."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 316,
    "question": "Saat merasa lelah secara mental, hal yang dilakukan...",
    "options": {
      "A": "Mendengarkan musik melankolis sambil merenungi keadaan hidup saya sendiri.",
      "B": "Pergi ke pusat perbelanjaan atau menonton film komedi seru.",
      "C": "Tidur lebih awal untuk memulihkan energi dan ketenangan pikiran.",
      "D": "Bekerja lebih giat agar tidak terlalu lama memikirkan rasa lelah."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 317,
    "question": "Dalam mengambil keputusan pindah kantor, pertimbangan saya adalah...",
    "options": {
      "A": "Apakah sistem perusahaannya sudah stabil dan memiliki aturan jelas.",
      "B": "Apakah rekan kerja di sana asyik dan penuh keceriaan harian.",
      "C": "Apakah jenjang karier dan gajinya jauh lebih menguntungkan saya.",
      "D": "Apakah lokasi kantor tersebut memberikan kenyamanan dalam waktu tempuh."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 318,
    "question": "Kebiasaan saya saat sedang mencuci mobil atau motor...",
    "options": {
      "A": "Mencuci dengan cepat namun memastikan kendaraan terlihat mengkilap gagah.",
      "B": "Mencucinya sambil bercanda atau mengobrol dengan orang di rumah.",
      "C": "Mencuci dengan santai sebagai pengisi waktu luang yang cukup tenang.",
      "D": "Membersihkan setiap sela kecil yang kotor dengan sangat detail sekali."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 319,
    "question": "Cara saya menyampaikan usulan dalam sebuah forum diskusi...",
    "options": {
      "A": "Menjelaskan latar belakang usulan tersebut secara sangat logis sekali.",
      "B": "Menyampaikan dengan nada rendah dan sangat menghargai pendapat lain.",
      "C": "Dengan gaya bicara yang menarik dan penuh dengan contoh seru.",
      "D": "Langsung pada inti usulan dan apa keuntungan yang didapatkan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 320,
    "question": "Pandangan saya mengenai investasi saham jangka panjang adalah...",
    "options": {
      "A": "Sebagai tabungan masa tua yang aman dan memberikan rasa tenang.",
      "B": "Sebagai cara untuk menguasai pasar dan mendapatkan keuntungan besar.",
      "C": "Hanya ikut-ikutan tren yang sedang ramai diperbincangkan teman kantor.",
      "D": "Harus berdasarkan analisis fundamental perusahaan yang sangat teliti sekali."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 321,
    "question": "Jika teman saya bercerita tentang kegagalannya, saya...",
    "options": {
      "A": "Menganalisis penyebab kegagalannya dan memberinya saran untuk bangkit segera.",
      "B": "Menemaninya dalam diam agar dia merasa tidak sendirian menghadapi masalahnya.",
      "C": "Ikut merasa sedih dan mendengarkan ceritanya dengan penuh empati dalam.",
      "D": "Langsung mengajaknya jalan-jalan agar dia cepat merasa bahagia kembali."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 322,
    "question": "Di kantor, jika saya diberikan tugas tambahan, saya...",
    "options": {
      "A": "Memasukkannya ke jadwal rencana kerja agar tidak ada yang terlewat.",
      "B": "Menerimanya dengan semangat karena akan menambah relasi kerja baru.",
      "C": "Mengerjakannya perlahan sesuai kapasitas tanpa mau merasa terlalu terbebani.",
      "D": "Fokus menyelesaikannya agar terlihat kompeten di mata atasan saya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 323,
    "question": "Saat berkumpul keluarga, jika masakan ibu kurang enak, saya...",
    "options": {
      "A": "Memakannya sedikit saja dan diam-diam merasa kurang puas secara internal.",
      "B": "Tetap makan dengan lahap sambil menceritakan kejadian lucu hari ini.",
      "C": "Memberitahunya agar rasa masakannya bisa diperbaiki di lain waktu nanti.",
      "D": "Tetap memuji masakan ibu demi menjaga perasaannya agar tetap senang."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "ringan"
  },
  {
    "id": 324,
    "question": "Sebagai pemimpin kelompok belajar, gaya saya adalah...",
    "options": {
      "A": "Menciptakan suasana yang seru agar belajar tidak terasa membosankan sekali.",
      "B": "Memastikan semua anggota memahami materi dengan ritme belajar yang nyaman.",
      "C": "Membuat ringkasan materi yang sangat lengkap untuk semua anggota kelompok.",
      "D": "Memberikan target waktu penyelesaian tugas kelompok yang sangat ketat sekali."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 325,
    "question": "Jika ada orang yang mengkritik hasil karya saya, saya...",
    "options": {
      "A": "Menerima kritikan tersebut dengan lapang dada dan mencoba memperbaikinya perlahan.",
      "B": "Mempertanyakan balik alasan kritikan tersebut dengan argumentasi yang sangat logis.",
      "C": "Menganalisis setiap poin kritikan untuk mencari di mana letak kekurangannya.",
      "D": "Menganggapnya angin lalu dan tetap percaya diri dengan apa yang dibuat."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 326,
    "question": "Menghadapi kemarahan orang lain di tempat umum, saya akan...",
    "options": {
      "A": "Menegurnya agar bertindak lebih sopan karena mengganggu kenyamanan orang lain.",
      "B": "Mencoba melerai dengan bahasa santai agar suasana tidak semakin panas.",
      "C": "Merasa sangat tidak nyaman dan segera menjauh dari lokasi tersebut.",
      "D": "Diam saja dan tidak mau mencampuri urusan orang lain tersebut."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 327,
    "question": "Dalam mengambil keputusan memilih asuransi jiwa, saya memilih...",
    "options": {
      "A": "Yang memberikan santunan paling besar dengan premi yang cukup bersaing.",
      "B": "Yang memiliki rincian polis paling jelas dan transparan secara hukum.",
      "C": "Yang banyak direkomendasikan oleh artis atau tokoh populer di internet.",
      "D": "Yang dikelola oleh perusahaan negara karena dirasa jauh lebih aman."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 328,
    "question": "Kebiasaan saya saat sedang merencanakan liburan adalah...",
    "options": {
      "A": "Memilih destinasi yang paling hits dan banyak tempat foto bagus.",
      "B": "Mencari tempat yang tenang tanpa banyak rencana yang terlalu kaku.",
      "C": "Menyusun jadwal aktivitas per jam dengan sangat detail dan teliti.",
      "D": "Memastikan rute perjalanan paling efisien dan penginapan yang berkelas."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 329,
    "question": "Cara saya menanggapi teman yang berbuat curang adalah...",
    "options": {
      "A": "Merasa sangat kecewa dan mulai mempertanyakan kualitas pertemanan kami tersebut.",
      "B": "Membiarkannya saja karena saya malas terlibat dalam konflik yang melelahkan.",
      "C": "Menegurnya sambil tertawa agar dia tidak merasa saya sedang marah.",
      "D": "Menghadapinya langsung dan memintanya untuk bersikap lebih jujur dan adil."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "dalam"
  },
  {
    "id": 330,
    "question": "Mengenai tabungan masa depan, saya lebih memilih...",
    "options": {
      "A": "Deposito atau instrumen yang memberikan keuntungan di atas rata-rata pasar.",
      "B": "Logam mulia karena nilainya sangat stabil dan sangat aman disimpan.",
      "C": "Tabungan yang mudah diambil kapan pun saya membutuhkan dana mendadak.",
      "D": "Tabungan berjangka otomatis agar saya tidak perlu repot mengaturnya sendiri."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 331,
    "question": "Jika ada teman yang meminta bantuan untuk pindah rumah, saya...",
    "options": {
      "A": "Membantu sebisanya dengan sabar sampai semua barang selesai dipindahkan semua.",
      "B": "Membantu mengepak barang pecah belah dengan tingkat ketelitian sangat tinggi.",
      "C": "Membantu sambil membuat suasana kerja menjadi sangat ceria dan ramai.",
      "D": "Mengoordinasikan teman lain agar proses pindahan berjalan lebih cepat tuntas."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 332,
    "question": "Saat menghadapi klien yang sangat cerewet, sikap saya adalah...",
    "options": {
      "A": "Berusaha meyakinkannya dengan data agar dia segera setuju dengan usulan.",
      "B": "Menanggapinya dengan senyuman lebar dan obrolan yang tetap sangat menyenangkan.",
      "C": "Mendengarkan semua keinginannya dan mencatat detail permintaannya dengan sangat lengkap.",
      "D": "Sabar mendengarkan keluhannya sampai dia merasa puas dan lebih tenang."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 333,
    "question": "Bagaimana reaksi saya jika saudara tertimpa masalah hukum?",
    "options": {
      "A": "Memberinya semangat secara emosional agar dia tidak merasa putus asa.",
      "B": "Segera mencarikan pengacara terbaik agar masalahnya cepat selesai secara tuntas.",
      "C": "Mencari tahu penyebab masalahnya secara logis berdasarkan fakta yang ada.",
      "D": "Menemaninya dalam setiap proses hukum dengan penuh kesabaran yang tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 334,
    "question": "Sebagai pemimpin rapat, jika ada anggota yang pasif, saya...",
    "options": {
      "A": "Memintanya secara langsung untuk memberikan pendapatnya terhadap topik yang ada.",
      "B": "Memberinya waktu untuk berpikir dan tidak memaksanya untuk segera bicara.",
      "C": "Mencoba mendekatinya secara personal untuk mengetahui alasan mengapa dia pasif.",
      "D": "Mengajaknya bercanda agar dia merasa nyaman untuk mulai bicara aktif."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 335,
    "question": "Jika saya merasa dibohongi oleh rekan bisnis, saya akan...",
    "options": {
      "A": "Menghentikan kerja sama saat itu juga dan menuntut ganti rugi nyata.",
      "B": "Mencoba membicarakannya baik-baik demi menjaga perdamaian dalam hubungan bisnis tersebut.",
      "C": "Mengutarakan kekecewaan saya sambil berharap hubungan bisnis tetap bisa berlanjut.",
      "D": "Mengumpulkan bukti kebohongannya sebelum saya mengambil tindakan hukum yang tegas."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 336,
    "question": "Saat melihat orang lain melakukan perbuatan tidak terpuji, saya...",
    "options": {
      "A": "Merasa prihatin secara mendalam dan merenungi mengapa hal itu bisa terjadi.",
      "B": "Membiarkannya saja karena saya tidak ingin memicu keributan yang tidak perlu.",
      "C": "Menceritakan kejadian tersebut kepada teman dengan nada yang penuh ekspresi.",
      "D": "Menegurnya secara langsung agar dia menyadari tindakannya tersebut sangat salah."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 337,
    "question": "Dalam mengambil keputusan memilih sekolah anak, saya memilih...",
    "options": {
      "A": "Sekolah yang lingkungannya ramah dan anak bisa memiliki banyak teman.",
      "B": "Sekolah yang kurikulumnya sangat terstruktur dan kedisiplinannya sangat kuat sekali.",
      "C": "Sekolah yang lulusannya banyak diterima di perguruan tinggi ternama dunia.",
      "D": "Sekolah yang lokasinya dekat rumah agar anak tidak merasa terlalu lelah."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 338,
    "question": "Kebiasaan saya saat sedang merapikan lemari pakaian adalah...",
    "options": {
      "A": "Merapikan pakaian sambil bernyanyi agar pekerjaan tidak terasa membosankan sekali.",
      "B": "Hanya melipat pakaian dengan rapi tanpa harus mengaturnya secara berlebihan sekali.",
      "C": "Menyusun pakaian berdasarkan kategori warna dan jenisnya secara sangat detail.",
      "D": "Menyingkirkan pakaian yang sudah tidak terpakai agar lemari terlihat sangat rapi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 339,
    "question": "Cara saya menanggapi teman yang telat menjemput saya adalah...",
    "options": {
      "A": "Bercanda bahwa dia harus mentraktir saya karena sudah membuat saya menunggu.",
      "B": "Menegurnya secara langsung dan menjelaskan bahwa waktu saya sangat berharga sekali.",
      "C": "Merasa kesal dalam hati dan mulai memikirkan ketepatan waktu teman tersebut.",
      "D": "Menunggunya dengan sabar dan tidak mempermasalahkan keterlambatannya asalkan dia datang."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 340,
    "question": "Mengenai asuransi kesehatan keluarga, saya lebih memilih...",
    "options": {
      "A": "Yang memberikan rincian manfaat paling detail dan transparan secara administrasi hukum.",
      "B": "Yang preminya terjangkau dan proses pendaftarannya sangat cepat dan mudah sekali.",
      "C": "Yang sudah terbukti terpercaya dan memberikan layanan yang sangat ramah sekali.",
      "D": "Yang memiliki jaringan rumah sakit paling luas dan paling bergengsi kualitasnya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 341,
    "question": "Jika teman mengajak pergi konser musik secara mendadak, saya...",
    "options": {
      "A": "Memikirkan apakah besok saya ada tugas penting yang harus dikerjakan.",
      "B": "Ikut saja jika teman-teman yang lain juga semuanya pergi bersama.",
      "C": "Melihat dulu siapa artisnya apakah sepadan dengan biaya yang dikeluarkan.",
      "D": "Langsung setuju karena sangat suka keramaian dan suasana konser seru."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 342,
    "question": "Saat menghadapi rekan kerja yang suka mengeluh, sikap saya...",
    "options": {
      "A": "Mendengarkan keluhannya dengan sabar tanpa berniat memberikan komentar yang menyinggung.",
      "B": "Memintanya fokus pada solusi agar pekerjaan kami tidak terhambat keluhannya.",
      "C": "Menganalisis penyebab keluhannya secara logis untuk mencari jalan keluar tepat.",
      "D": "Mencoba menghiburnya agar dia tidak terlalu larut dalam keluhannya tersebut."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 343,
    "question": "Bagaimana reaksi saya jika anggota keluarga sakit keras?",
    "options": {
      "A": "Mempelajari tentang penyakitnya secara mendalam untuk membantu proses kesembuhannya nanti.",
      "B": "Menemaninya setiap hari dengan penuh keceriaan agar dia tetap semangat sembuh.",
      "C": "Mendoakannya dengan tulus dan menjaga ketenangan suasana rumah agar dia nyaman.",
      "D": "Memastikan dia mendapat perawatan medis terbaik agar segera pulih seperti sediakala."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 344,
    "question": "Sebagai pimpinan proyek sosial, kriteria sukses bagi saya adalah...",
    "options": {
      "A": "Semua relawan merasa senang dan bangga terlibat dalam proyek tersebut.",
      "B": "Proyek berjalan dengan damai tanpa ada konflik antar relawan terlibat.",
      "C": "Jumlah bantuan yang terkumpul melebihi target yang telah ditentukan sebelumnya.",
      "D": "Penyaluran bantuan dilakukan dengan sangat teratur dan tercatat secara sangat rapi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 345,
    "question": "Jika saya merasa dicurangi dalam sebuah permainan, saya akan...",
    "options": {
      "A": "Menegur pelaku kecurangan tersebut secara tegas agar permainan berjalan adil jujur.",
      "B": "Tertawa dan membiarkannya saja asalkan permainannya tetap berjalan sangat seru.",
      "C": "Mencatat kecurangannya dan mungkin tidak mau bermain lagi dengannya di masa depan.",
      "D": "Diam saja demi menjaga suasana agar tidak menjadi kaku dan tegang."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 346,
    "question": "Saat melihat berita tentang keberhasilan orang lain, saya merasa...",
    "options": {
      "A": "Tersenyum bangga dan mendoakan agar keberhasilannya memberikan kebaikan bagi banyak orang.",
      "B": "Ikut senang dan segera menceritakannya kepada teman-teman sebagai inspirasi baru.",
      "C": "Termotivasi untuk bekerja lebih keras lagi agar bisa meraih kesuksesan serupa.",
      "D": "Menganalisis strategi keberhasilannya untuk saya terapkan dalam kehidupan pribadi saya."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 347,
    "question": "Dalam mengambil keputusan investasi masa depan, saya mengutamakan...",
    "options": {
      "A": "Investasi yang risikonya sudah terukur secara matang berdasarkan data pasar akurat.",
      "B": "Investasi yang sedang tren dan menjanjikan gaya hidup yang lebih menyenangkan.",
      "C": "Investasi yang memiliki potensi keuntungan tinggi meskipun risikonya juga cukup besar.",
      "D": "Investasi yang paling aman dan memberikan rasa tenang bagi masa tua."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 348,
    "question": "Kebiasaan saya saat sedang memasak di dapur adalah...",
    "options": {
      "A": "Mengikuti resep secara sangat teliti dan menjaga kebersihan dapur dengan baik.",
      "B": "Memasak dengan efisien agar makanan siap saji dalam waktu yang singkat.",
      "C": "Memasak dengan tenang dan menikmati setiap proses pembuatan masakan tersebut sendiri.",
      "D": "Memasak sambil mencoba berbagai bumbu baru agar rasanya jadi lebih seru."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 349,
    "question": "Cara saya menanggapi teman yang lupa membalas chat saya...",
    "options": {
      "A": "Berpikir apakah kata-kata dalam chat saya sebelumnya menyinggung perasaan teman tersebut.",
      "B": "Meneleponnya jika hal tersebut sangat penting dan harus segera diputuskan tuntas.",
      "C": "Menunggu saja sampai dia memiliki waktu luang untuk membalas chat saya.",
      "D": "Mengirimkan chat lucu atau meme agar dia segera membalas chat saya."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 350,
    "question": "Mengenai asuransi kendaraan, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang preminya murah dan pendaftarannya bisa dilakukan secara online sangat cepat.",
      "B": "Yang memberikan jaminan ganti rugi paling besar dan layanannya sangat profesional.",
      "C": "Yang sudah biasa digunakan oleh banyak orang dan layanannya sangat ramah.",
      "D": "Yang memiliki kredibilitas perusahaan sangat tinggi dan rincian klaim sangat jelas."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 351,
    "question": "Jika teman mengajak pergi naik gunung mendadak, saya...",
    "options": {
      "A": "Mempersiapkan fisik dengan olahraga keras agar tidak merepotkan tim saat mendaki.",
      "B": "Mengecek daftar perlengkapan mendaki dengan sangat teliti agar tidak ada kurang.",
      "C": "Ikut saja asalkan ada yang menjamin keamanan dan kenyamanan selama pendakian.",
      "D": "Sangat antusias karena suka petualangan dan momen kebersamaan dengan teman."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 352,
    "question": "Saat menghadapi atasan yang sangat perfeksionis, sikap saya...",
    "options": {
      "A": "Tetap ceria dan mencoba memberikan yang terbaik dengan suasana tetap menyenangkan.",
      "B": "Berusaha tenang dan mengerjakan tugas sesuai arahan tanpa banyak membela diri.",
      "C": "Memperhatikan setiap detail pekerjaan saya agar tidak ada kesalahan sekecil apa pun.",
      "D": "Bekerja lebih keras untuk memenuhi standarnya agar karier saya cepat meningkat."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 353,
    "question": "Bagaimana reaksi saya jika ada saudara yang ingin menumpang hidup?",
    "options": {
      "A": "Menyambutnya dengan gembira karena rumah akan menjadi lebih ramai dan seru.",
      "B": "Memikirkan dampak finansial dan privasi keluarga secara mendalam sebelum saya mengizinkannya.",
      "C": "Memberikan syarat agar dia tetap produktif dan tidak bergantung selamanya kepada saya.",
      "D": "Menerimanya dengan tulus demi menjaga hubungan baik antar anggota keluarga besar."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 354,
    "question": "Sebagai pimpinan organisasi, visi utama saya adalah...",
    "options": {
      "A": "Membawa organisasi mencapai prestasi tertinggi yang diakui oleh dunia luar sana.",
      "B": "Membangun sistem organisasi yang sangat solid, teratur, dan memiliki administrasi rapi.",
      "C": "Menjadikan organisasi sebagai tempat yang penuh dengan keceriaan dan semangat persaudaraan.",
      "D": "Menciptakan stabilitas organisasi agar semua anggota merasa aman dan nyaman bekerja."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 355,
    "question": "Jika saya merasa dihina oleh orang yang tidak dikenal, saya...",
    "options": {
      "A": "Mencoba menanggapinya dengan santai dan tidak memasukkannya ke dalam hati saya.",
      "B": "Merasa sedih sebentar dan bertanya-tanya apa yang salah dengan diri saya.",
      "C": "Menegurnya secara tegas agar dia tidak semena-mena terhadap orang lain tersebut.",
      "D": "Membiarkannya saja karena saya tidak ingin membuang energi untuk hal negatif."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 356,
    "question": "Saat melihat orang lain sedang dalam kesulitan, saya akan...",
    "options": {
      "A": "Mendampinginya dengan sabar dan memberikan dukungan emosional yang menenangkan bagi dia.",
      "B": "Mencari cara praktis untuk membantunya menyelesaikan masalahnya tersebut secepat mungkin.",
      "C": "Menghiburnya agar bebannya terasa lebih ringan dan dia bisa tersenyum kembali.",
      "D": "Menganalisis permasalahannya dan memberikan saran yang logis berdasarkan pengalaman saya sendiri."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 357,
    "question": "Dalam mengambil keputusan memilih asuransi perjalanan, saya memilih...",
    "options": {
      "A": "Yang preminya terjangkau dan memberikan rasa aman selama perjalanan liburan saya.",
      "B": "Yang memiliki rincian polis paling jelas dan proses klaim yang sangat transparan.",
      "C": "Yang memberikan jaminan perlindungan paling lengkap selama saya berada di luar negeri.",
      "D": "Yang banyak direkomendasikan oleh travel blogger populer yang saya ikuti harian."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 358,
    "question": "Kebiasaan saya saat sedang mencuci piring di dapur adalah...",
    "options": {
      "A": "Mencuci piring dengan tenang dan menikmati setiap aliran air pada tangan saya.",
      "B": "Mencuci piring sambil mendengarkan musik atau menonton video yang sangat lucu.",
      "C": "Memastikan tidak ada sisa lemak yang menempel pada peralatan makan tersebut tuntas.",
      "D": "Mencuci piring dengan cepat agar dapur segera bersih dan terlihat sangat rapi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 359,
    "question": "Cara saya menanggapi teman yang ingkar janji adalah dengan...",
    "options": {
      "A": "Memaafkannya dan berharap dia tidak akan mengulanginya lagi di masa yang mendatang.",
      "B": "Menjelaskan secara tegas bahwa tindakannya tersebut sangat merugikan waktu berharga saya.",
      "C": "Mengingatkannya dengan cara yang santai agar dia tidak merasa sedang saya salahkan.",
      "D": "Merasa kecewa secara mendalam dan mulai mempertanyakan tingkat kejujuran teman tersebut sendiri."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 360,
    "question": "Mengenai asuransi kebakaran rumah, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memberikan ganti rugi paling besar dan layanannya sangat profesional sekali.",
      "B": "Yang sudah terbukti terpercaya dan memberikan layanan yang sangat ramah sekali.",
      "C": "Yang preminya terjangkau dan proses pendaftarannya bisa dilakukan secara online cepat.",
      "D": "Yang memiliki reputasi perusahaan sangat baik dan rincian klaim sangat jelas."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 361,
    "question": "Jika teman mengajak pergi ke taman hiburan, saya akan...",
    "options": {
      "A": "Memilih wahana yang paling menantang untuk membuktikan keberanian saya kepada teman.",
      "B": "Langsung setuju karena sangat suka wahana permainan yang memacu adrenalin tinggi.",
      "C": "Menikmati suasana taman dan wahana yang tidak terlalu berbahaya bagi saya.",
      "D": "Mempelajari peta taman hiburan agar kunjungan kami berjalan sangat efisien sekali."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 362,
    "question": "Saat menghadapi rekan kerja yang suka terlambat rapat, saya...",
    "options": {
      "A": "Mencatat keterlambatannya sebagai bahan evaluasi kinerja tim secara sangat profesional sekali.",
      "B": "Menegurnya agar menghargai waktu orang lain demi kelancaran pekerjaan tim kami.",
      "C": "Menunggu dengan sabar dan tidak mau memicu perdebatan di depan anggota lain.",
      "D": "Menyambutnya dengan candaan agar suasana rapat tidak menjadi kaku dan tegang."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 363,
    "question": "Bagaimana reaksi saya jika ada saudara yang sukses besar?",
    "options": {
      "A": "Merayakannya dengan antusiasme yang sangat tinggi dan ikut merasa sangat bangga.",
      "B": "Menjadikannya motivasi untuk bekerja lebih keras lagi agar bisa meraih sukses serupa.",
      "C": "Mengucapkan selamat dan menanyakan rahasia di balik kesuksesannya secara sangat detail.",
      "D": "Tersenyum tulus dan mendoakan agar kesuksesannya memberikan kebahagiaan bagi keluarga besar."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 364,
    "question": "Sebagai pimpinan proyek riset, fokus utama saya adalah pada...",
    "options": {
      "A": "Metodologi riset yang sangat terstruktur dan data yang tercatat secara detail.",
      "B": "Keakuratan hasil riset yang bisa memberikan kontribusi nyata bagi ilmu pengetahuan.",
      "C": "Kreativitas ide riset yang bisa menarik perhatian banyak orang di dunia.",
      "D": "Kerja sama tim peneliti yang harmonis tanpa adanya konflik internal peneliti."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 365,
    "question": "Jika saya merasa dikhianati oleh sahabat karib saya sendiri, saya...",
    "options": {
      "A": "Merenungkan hubungan kami dan memikirkan segala konsekuensi di masa depan nanti.",
      "B": "Mencoba memaafkan dan memberikan kesempatan kedua demi keutuhan persahabatan kami tersebut.",
      "C": "Menghadapinya secara langsung dan menuntut penjelasan yang jujur atas pengkhianatannya tersebut.",
      "D": "Mengutarakan kekecewaan saya sambil menangis agar dia menyadari kesalahannya tersebut segera."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 366,
    "question": "Saat melihat berita tentang penderitaan orang lain, saya merasa...",
    "options": {
      "A": "Berdoa dengan tulus agar penderitaan mereka segera berakhir dan diberikan ketabahan.",
      "B": "Menganalisis penyebab penderitaan mereka dan merenungi nasib manusia di dunia ini.",
      "C": "Sangat sedih dan segera membagikan berita tersebut agar banyak yang membantu.",
      "D": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepat mungkin."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 367,
    "question": "Dalam mengambil keputusan memilih asuransi pendidikan anak, saya memilih...",
    "options": {
      "A": "Yang memberikan banyak bonus tambahan seperti tabungan liburan keluarga yang seru.",
      "B": "Yang memiliki rincian polis paling transparan dan terpercaya secara hukum administrasi.",
      "C": "Yang sudah terbukti terpercaya oleh banyak orang tua lainnya selama bertahun-tahun.",
      "D": "Yang memberikan jaminan dana pendidikan paling besar di masa depan nanti."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 368,
    "question": "Kebiasaan saya saat sedang merawat tanaman di kebun adalah...",
    "options": {
      "A": "Menikmati ketenangan di kebun sambil menyiram tanaman dengan penuh rasa sabar.",
      "B": "Memperhatikan kondisi setiap daun dan akar tanaman dengan tingkat ketelitian tinggi.",
      "C": "Merawat tanaman sambil mengajak mereka bicara agar tumbuh dengan sangat ceria.",
      "D": "Menata tanaman agar terlihat sangat rapi dan memberikan kesan rumah berkelas."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 369,
    "question": "Cara saya menanggapi teman yang berbuat salah kepada saya...",
    "options": {
      "A": "Merasa sedih secara mendalam dan butuh waktu lama untuk memulihkan kepercayaan saya.",
      "B": "Menegurnya agar dia menyadari kesalahannya dan tidak mengulanginya lagi di masa mendatang.",
      "C": "Memaafkannya dengan cepat agar pertemanan kami tetap berjalan dengan sangat asyik.",
      "D": "Mencoba memaklumi kesalahannya demi menjaga keharmonisan dalam hubungan pertemanan kami tersebut."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 370,
    "question": "Mengenai asuransi gadget, pertimbangan utama saya dalam memilih adalah...",
    "options": {
      "A": "Yang memiliki rincian perlindungan paling lengkap dan transparan secara administrasi hukum.",
      "B": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya.",
      "C": "Yang memberikan jaminan ganti rugi total jika gadget saya hilang atau rusak.",
      "D": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 371,
    "question": "Jika teman mengajak pergi ke museum seni, saya akan...",
    "options": {
      "A": "Mempelajari sejarah senimannya agar saya bisa memahami makna karya seninya tersebut.",
      "B": "Antusias karena bisa berfoto dengan latar belakang karya seni yang sangat estetik.",
      "C": "Memperhatikan setiap detail teknik lukisan atau patung dengan tingkat ketelitian tinggi.",
      "D": "Menikmati ketenangan suasana museum dan meresapi setiap karya seni secara perlahan."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 372,
    "question": "Saat menghadapi rekan kerja yang suka menyela pembicaraan, saya...",
    "options": {
      "A": "Menegurnya agar mendengarkan saya dulu sampai selesai demi kelancaran komunikasi tim.",
      "B": "Menunggu dia selesai bicara baru kemudian saya menyampaikan poin penting saya tersebut.",
      "C": "Tertawa dan membiarkannya bicara dulu lalu saya lanjut bicara lagi nanti.",
      "D": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja saya."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 373,
    "question": "Bagaimana reaksi saya jika saudara saya gagal dalam ujian?",
    "options": {
      "A": "Ikut merasa sedih dan memberikan semangat secara emosional yang mendalam bagi dia.",
      "B": "Menghiburnya agar tidak terlalu larut dalam kesedihan dan segera semangat belajar lagi.",
      "C": "Mendoakannya agar diberikan kesabaran dan tetap tekun belajar demi masa depannya nanti.",
      "D": "Membantunya menganalisis kekurangan belajarnya agar bisa lulus di ujian berikutnya nanti."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 374,
    "question": "Sebagai pimpinan komunitas hobi, fokus utama saya adalah pada...",
    "options": {
      "A": "Rasa kekeluargaan antar anggota agar komunitas tetap solid dan penuh kedamaian.",
      "B": "Sistem pengelolaan komunitas yang rapi dan terdokumentasi secara sangat baik sekali.",
      "C": "Keahlian anggota yang terus meningkat melalui pelatihan yang diadakan komunitas kami.",
      "D": "Keseruan acara komunitas yang bisa menarik minat banyak anggota baru bergabung."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 375,
    "question": "Jika saya merasa dibicarakan di belakang oleh teman sendiri, saya...",
    "options": {
      "A": "Mencoba mengklarifikasinya dengan cara yang santai agar tidak merusak pertemanan kami.",
      "B": "Membiarkannya saja karena saya yakin kebenaran pada akhirnya akan terungkap dengan sendirinya.",
      "C": "Merasa sangat kecewa dan mulai menjaga jarak dengan teman-teman tersebut sementara waktu.",
      "D": "Menghadapi pembuat gosip tersebut dan menuntut penjelasan yang jujur darinya segera."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 376,
    "question": "Saat melihat orang lain melakukan kebaikan secara diam-diam, saya...",
    "options": {
      "A": "Merasa terharu dan ingin segera meniru perbuatan baiknya tersebut dalam hidup.",
      "B": "Menghargai tindakannya sebagai bukti bahwa masih banyak orang baik di dunia.",
      "C": "Tersenyum bangga dan mendoakan agar kebaikannya mendapatkan balasan yang setimpal kelak.",
      "D": "Merenungi makna kebaikan tersebut bagi kehidupan manusia secara sangat mendalam sekali."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 377,
    "question": "Dalam mengambil keputusan memilih asuransi syariah, saya mengutamakan...",
    "options": {
      "A": "Yang memberikan jaminan perlindungan sesuai dengan prinsip-prinsip ekonomi syariah yang tegas.",
      "B": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "C": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga.",
      "D": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 378,
    "question": "Kebiasaan saya saat sedang merawat hewan peliharaan harian adalah...",
    "options": {
      "A": "Mengajak hewan peliharaan bermain agar mereka selalu merasa senang dan sangat ceria.",
      "B": "Memberikan pakan dan vitamin terbaik agar kesehatan hewan peliharaan tetap terjaga prima.",
      "C": "Memperhatikan setiap detail kebersihan kandang dan tubuh hewan peliharaan dengan sangat teliti.",
      "D": "Menyayangi hewan peliharaan dengan penuh kesabaran dan ketenangan di waktu luang saya."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 379,
    "question": "Cara saya menanggapi teman yang berbuat curang dalam bisnis...",
    "options": {
      "A": "Menghentikan kerja sama sambil berharap dia akan menyadari kesalahannya tersebut di kemudian.",
      "B": "Merasa sangat kecewa dan mulai mempertanyakan integritas moral teman tersebut secara mendalam.",
      "C": "Menuntut pertanggungjawaban yang jelas dan segera mengakhiri hubungan bisnis secara sangat tegas.",
      "D": "Mencoba membicarakannya baik-baik demi menjaga kedamaian dalam hubungan bisnis kami tersebut."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 380,
    "question": "Mengenai asuransi tenaga kerja, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memberikan jaminan perlindungan paling lengkap selama saya bekerja di perusahaan tersebut.",
      "B": "Yang sudah terbukti terpercaya oleh banyak karyawan lainnya selama bertahun-tahun lamanya.",
      "C": "Yang memberikan banyak manfaat tambahan seperti pelatihan keahlian yang sangat seru sekali.",
      "D": "Yang memiliki rincian polis paling jelas dan transparan secara administrasi hukum perusahaan."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 381,
    "question": "Jika teman mengajak pergi ke festival kuliner mendadak, saya...",
    "options": {
      "A": "Mempelajari daftar stand makanan agar kunjungan kami berjalan secara sangat efisien sekali.",
      "B": "Menikmati suasana festival dan mencoba makanan yang tidak terlalu aneh bagi saya.",
      "C": "Sangat antusias karena suka mencoba berbagai makanan baru yang sangat enak sekali.",
      "D": "Memilih makanan yang paling populer untuk membuktikan rasa penasarannya saya kepada teman."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 382,
    "question": "Saat menghadapi rekan kerja yang suka memaksakan kehendak, saya...",
    "options": {
      "A": "Mencoba mengalihkan pembicaraan dengan candaan agar suasana tidak menjadi kaku tegang.",
      "B": "Mendengarkan pendapatnya dengan sabar dan mencoba mencari titik temu yang cukup adil.",
      "C": "Menegurnya agar menghargai pendapat anggota lain demi kelancaran pekerjaan tim kami.",
      "D": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja saya."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 383,
    "question": "Bagaimana reaksi saya jika ada saudara yang menang lomba?",
    "options": {
      "A": "Mengucapkan selamat dan menanyakan tips kemenangannya secara sangat detail dan mendalam.",
      "B": "Tersenyum tulus dan mendoakan agar kemenangannya memberikan kebahagiaan bagi keluarga besar.",
      "C": "Menjadikannya motivasi untuk mengasah kemampuan saya lagi agar bisa menang lomba serupa.",
      "D": "Merayakannya dengan antusiasme yang sangat tinggi dan ikut merasa sangat bangga."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 384,
    "question": "Sebagai pimpinan proyek konstruksi, fokus utama saya adalah pada...",
    "options": {
      "A": "Kekuatan bangunan yang bisa menjamin keamanan seluruh penghuni bangunan tersebut nantinya.",
      "B": "Desain bangunan yang unik dan bisa menarik perhatian banyak orang dunia.",
      "C": "Anggaran biaya yang sangat terinci dan pengerjaan yang sesuai jadwal ketat.",
      "D": "Kerja sama antar pekerja yang harmonis tanpa adanya konflik internal pekerja."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 385,
    "question": "Jika saya merasa disingkirkan oleh teman-teman dalam pergaulan, saya...",
    "options": {
      "A": "Menanyakan langsung alasan mengapa mereka menjauhi saya agar masalah segera selesai.",
      "B": "Merasa sangat sedih dan mulai mempertanyakan kualitas pertemanan kami selama ini.",
      "C": "Mencoba mencari perhatian mereka kembali dengan cara yang menyenangkan dan sangat seru.",
      "D": "Membiarkannya saja karena saya yakin akan menemukan teman baru yang lebih baik."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 386,
    "question": "Saat melihat berita tentang bencana kemanusiaan di dunia, saya...",
    "options": {
      "A": "Menganalisis penyebab bencana tersebut dan merenungi nasib manusia di dunia ini.",
      "B": "Sangat sedih dan segera membagikan berita tersebut agar banyak yang membantu.",
      "C": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepat mungkin.",
      "D": "Berdoa dengan tulus agar penderitaan mereka segera berakhir dan diberikan ketabahan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 387,
    "question": "Dalam mengambil keputusan memilih asuransi syariah pendidikan, saya memilih...",
    "options": {
      "A": "Yang memberikan jaminan dana pendidikan sesuai dengan prinsip-prinsip ekonomi syariah.",
      "B": "Yang sudah terbukti memberikan rasa tenang dan keberkahan bagi masa depan.",
      "C": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "D": "Yang memberikan banyak bonus tambahan seperti tabungan umroh keluarga yang seru."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 388,
    "question": "Kebiasaan saya saat sedang merawat rambut di salon adalah...",
    "options": {
      "A": "Memilih jenis perawatan rambut yang paling efektif untuk kesehatan rambut saya.",
      "B": "Mengajak bicara kapsternya agar proses perawatan rambut terasa lebih sangat menyenangkan.",
      "C": "Menikmati proses perawatan rambut dengan tenang dan merasa sangat rileks batin saya.",
      "D": "Memperhatikan setiap langkah perawatan rambut dengan tingkat ketelitian sangat tinggi sekali."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 389,
    "question": "Cara saya menanggapi teman yang berbohong demi kebaikan saya...",
    "options": {
      "A": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga perasaan saya.",
      "B": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan pertemanan kami tersebut.",
      "C": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan pertemanan yang kuat.",
      "D": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada sekadar menjaga perasaan."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 390,
    "question": "Mengenai asuransi kecelakaan kerja, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum.",
      "B": "Yang memberikan jaminan ganti rugi paling besar bagi seluruh karyawan yang ada.",
      "C": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat.",
      "D": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 391,
    "question": "Jika teman mengajak pergi ke pertunjukan sirkus, saya akan...",
    "options": {
      "A": "Memperhatikan setiap detail gerakan pemain sirkus dengan tingkat ketelitian sangat tinggi.",
      "B": "Menikmati pertunjukan sirkus dengan tenang dan merasa kagum atas kemampuan mereka.",
      "C": "Memilih posisi duduk paling depan untuk melihat atraksi secara lebih nyata jelas.",
      "D": "Sangat antusias karena suka atraksi yang unik dan menghibur hati saya."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 392,
    "question": "Saat menghadapi rekan kerja yang suka mengadu domba, saya...",
    "options": {
      "A": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua orang tertawa.",
      "B": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja saya.",
      "C": "Menghadapi rekan tersebut secara langsung agar tidak memecah belah persatuan tim kami.",
      "D": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik yang diciptakannya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 393,
    "question": "Bagaimana reaksi saya jika ada saudara yang melahirkan anak?",
    "options": {
      "A": "Mengucapkan selamat dan memperhatikan setiap rincian kebutuhan ibu dan bayi tersebut tuntas.",
      "B": "Tersenyum bahagia dan mendoakan agar ibu dan bayi selalu diberikan kesehatan penuh.",
      "C": "Memberikan saran perawatan bayi yang paling efektif berdasarkan informasi medis yang akurat.",
      "D": "Sangat gembira dan segera menjenguknya dengan membawa kado yang sangat menarik sekali."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 394,
    "question": "Sebagai pimpinan organisasi kepemudaan, fokus utama saya adalah pada...",
    "options": {
      "A": "Pengembangan karakter pemuda yang sangat terstruktur melalui pelatihan yang sangat disiplin.",
      "B": "Kemandirian pemuda yang bisa memberikan kontribusi nyata bagi kemajuan bangsa kita.",
      "C": "Kerukunan antar pemuda agar organisasi tetap solid dan penuh kedamaian batin.",
      "D": "Kegiatan yang inovatif dan bisa meningkatkan eksistensi pemuda di mata dunia."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 395,
    "question": "Jika saya merasa dikritik habis-habisan oleh atasan saya sendiri, saya...",
    "options": {
      "A": "Menerimanya dengan senyuman dan berjanji akan memberikan performa yang lebih ceria.",
      "B": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan bersama tim.",
      "C": "Memikirkan kritik tersebut secara mendalam dan merasa sangat terpukul oleh kata-katanya.",
      "D": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja yang baik."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 396,
    "question": "Saat melihat orang lain melakukan perbuatan curang secara diam-diam...",
    "options": {
      "A": "Merenungi makna kejujuran tersebut bagi kehidupan manusia secara sangat mendalam sekali.",
      "B": "Merasa geram dan ingin segera melaporkan perbuatannya agar dia mendapatkan sanksi.",
      "C": "Menghargai kejujuran sebagai bukti bahwa masih banyak orang baik di dunia.",
      "D": "Berdoa agar dia segera menyadari kesalahannya dan kembali ke jalan yang benar."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 397,
    "question": "Dalam mengambil keputusan memilih asuransi syariah kesehatan, saya memilih...",
    "options": {
      "A": "Yang memberikan jaminan perlindungan sesuai dengan prinsip-prinsip ekonomi syariah yang tegas.",
      "B": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "C": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga.",
      "D": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 398,
    "question": "Kebiasaan saya saat sedang merawat wajah di klinik kecantikan...",
    "options": {
      "A": "Mengajak bicara perawatnya agar proses perawatan wajah terasa lebih sangat menyenangkan.",
      "B": "Memilih jenis perawatan wajah yang paling efektif untuk kesehatan kulit wajah saya.",
      "C": "Memperhatikan setiap langkah perawatan wajah dengan tingkat ketelitian sangat tinggi sekali.",
      "D": "Menikmati proses perawatan wajah dengan tenang dan merasa sangat rileks batin saya."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 399,
    "question": "Cara saya menanggapi teman yang berbuat salah di kantor...",
    "options": {
      "A": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada sekadar menjaga prestasi.",
      "B": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga prestasi kerjanya.",
      "C": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan kerja kami tersebut.",
      "D": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan kerja yang kuat."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 400,
    "question": "Mengenai asuransi jiwa berjangka, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat.",
      "B": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya.",
      "C": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga yang ada.",
      "D": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 401,
    "question": "Saat rekan kerja tidak setuju dengan usulan saya...",
    "options": {
      "A": "Saya menyajikan data pendukung yang sangat akurat sekali.",
      "B": "Saya bercanda agar suasana kembali cair dan santai.",
      "C": "Saya memberikan argumen tegas agar ide saya diterima.",
      "D": "Saya mendengarkan keberatannya demi menjaga kedamaian di kantor."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 402,
    "question": "Jika teman membatalkan janji main secara mendadak...",
    "options": {
      "A": "Saya memaklumi dan memilih untuk istirahat di rumah.",
      "B": "Saya segera mencari teman lain untuk diajak pergi.",
      "C": "Saya menanyakan alasan logis kenapa dia membatalkan janji.",
      "D": "Saya merasa kecewa karena jadwal saya jadi berantakan."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 403,
    "question": "Saat anak melakukan kesalahan kecil di rumah...",
    "options": {
      "A": "Saya langsung memberitahu kesalahannya agar tidak terulang lagi.",
      "B": "Saya menjelaskan mengapa tindakannya salah secara sangat logis.",
      "C": "Saya menegurnya sambil tersenyum agar dia tidak takut.",
      "D": "Saya memaafkannya dengan lembut agar suasana tetap tenang."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 404,
    "question": "Cara saya membagi tugas dalam sebuah tim...",
    "options": {
      "A": "Berdasarkan beban kerja yang paling adil bagi semua orang.",
      "B": "Berdasarkan kecepatan kerja masing-masing anggota agar efisien.",
      "C": "Berdasarkan siapa yang paling asyik diajak bekerja sama.",
      "D": "Berdasarkan kompetensi teknis yang paling sesuai dan akurat."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 405,
    "question": "Jika terjadi kesalahpahaman dengan tetangga, saya akan...",
    "options": {
      "A": "Membiarkan situasi mendingin dulu demi menghindari pertengkaran terbuka.",
      "B": "Menjelaskan duduk perkara secara langsung agar masalah cepat selesai.",
      "C": "Mengajak mereka mengobrol santai untuk mencairkan ketegangan tersebut.",
      "D": "Merenungkan penyebab masalah sebelum saya memutuskan untuk bicara."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 406,
    "question": "Reaksi saya saat menghadapi tumpukan pekerjaan rumah...",
    "options": {
      "A": "Menyelesaikannya secepat mungkin agar bisa segera melakukan lainnya.",
      "B": "Menyusun urutan pengerjaan agar semuanya bersih secara sempurna.",
      "C": "Mengerjakannya perlahan tanpa mau merasa terlalu terbebani hari.",
      "D": "Mengerjakannya sambil mendengarkan radio atau bernyanyi dengan riang."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 407,
    "question": "Saat memilih menu di restoran baru, saya...",
    "options": {
      "A": "Membaca komposisi bahan makanannya secara sangat teliti sekali.",
      "B": "Memilih yang paling unik atau sering dipesan orang.",
      "C": "Memilih yang paling cepat disajikan agar tidak menunggu.",
      "D": "Meminta rekomendasi pelayan agar pilihan saya terasa aman."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "ringan"
  },
  {
    "id": 408,
    "question": "Kebiasaan saya sebelum memulai aktivitas pagi hari...",
    "options": {
      "A": "Menentukan target utama yang harus saya capai hari ini.",
      "B": "Merapikan tempat tidur dan perlengkapan kerja dengan teliti.",
      "C": "Menikmati segelas air atau kopi dengan tenang dan santai.",
      "D": "Memeriksa media sosial untuk melihat kabar seru dari teman."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 409,
    "question": "Gaya bicara saya dalam rapat resmi adalah...",
    "options": {
      "A": "Sopan dan lebih banyak menunggu giliran untuk bicara.",
      "B": "To the point dan menekankan pada hasil yang nyata.",
      "C": "Penuh semangat dan sering menyisipkan cerita yang menarik.",
      "D": "Sangat terstruktur dan selalu berdasarkan data yang akurat."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 410,
    "question": "Visi saya tentang rumah idaman adalah rumah...",
    "options": {
      "A": "Yang megah dan menunjukkan kesuksesan hasil kerja keras saya.",
      "B": "Yang tertata sangat rapi dan memiliki sistem yang efisien.",
      "C": "Yang sering dikunjungi teman-teman untuk acara kumpul bersama.",
      "D": "Yang tenang, sejuk, dan memberikan kenyamanan bagi keluarga."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 411,
    "question": "Jika harus bekerja dengan mitra yang sangat lamban...",
    "options": {
      "A": "Saya bersabar dan menemaninya bekerja sesuai ritme yang ada.",
      "B": "Saya mengambil alih tugasnya agar target kami segera tercapai.",
      "C": "Saya memberikan panduan detail agar dia tidak melakukan kesalahan.",
      "D": "Saya mencoba menghiburnya agar dia lebih bersemangat bekerja lagi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 412,
    "question": "Saat teman saya sedang sedih karena putus cinta...",
    "options": {
      "A": "Saya mendengarkan semua ceritanya dengan penuh simpati yang dalam.",
      "B": "Saya mengajaknya jalan-jalan ke tempat ramai agar dia lupa.",
      "C": "Saya hanya menemaninya duduk diam agar dia merasa tenang.",
      "D": "Saya memberitahunya untuk segera bangkit dan mencari yang baru."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 413,
    "question": "Dalam mengatur acara reuni keluarga, saya biasanya...",
    "options": {
      "A": "Menjadi penggerak utama agar banyak anggota keluarga yang hadir.",
      "B": "Membuat daftar rincian biaya dan konsumsi secara sangat detail.",
      "C": "Menentukan lokasi dan waktu yang paling efisien bagi semua.",
      "D": "Membantu apa saja yang diminta oleh panitia pelaksana reuni."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 414,
    "question": "Jika bawahan saya melakukan kesalahan yang sama berulang kali...",
    "options": {
      "A": "Saya mencoba lebih sabar dalam membimbingnya sampai dia bisa.",
      "B": "Saya memberikan peringatan tegas agar dia segera berubah perilaku.",
      "C": "Saya menganalisis penyebab kesalahannya dan memberikan instruksi baru.",
      "D": "Saya menegurnya sambil memberikan motivasi agar dia tidak sedih."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 415,
    "question": "Saat berdebat tentang pilihan hobi dengan pasangan...",
    "options": {
      "A": "Saya bersikeras bahwa pilihan hobi saya lebih bermanfaat nyata.",
      "B": "Saya mempertimbangkan hobi yang memiliki nilai seni atau ketelitian.",
      "C": "Saya mengalah dan mengikuti hobi pasangan demi keharmonisan rumah.",
      "D": "Saya mencari hobi yang bisa dilakukan bersama agar seru."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 416,
    "question": "Jika saya menghadapi situasi yang sangat tidak pasti...",
    "options": {
      "A": "Saya mengumpulkan informasi sebanyak mungkin sebelum melangkah lebih jauh.",
      "B": "Saya menunggu sampai keadaan lebih stabil baru saya beraksi.",
      "C": "Saya segera bertindak untuk mengambil kendali atas situasi tersebut.",
      "D": "Saya tetap optimis dan mencari sisi menyenangkan dari ketidakpastian."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 417,
    "question": "Dalam mengambil keputusan membeli kendaraan, saya mengutamakan...",
    "options": {
      "A": "Model yang keren dan warna yang menarik perhatian orang.",
      "B": "Fitur keamanan yang lengkap dan efisiensi bahan bakar akurat.",
      "C": "Kenyamanan kursi dan suspensi yang lembut saat dikendarai santai.",
      "D": "Performa mesin yang tangguh dan nilai jual kembali tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 418,
    "question": "Kegiatan favorit saya di hari Minggu sore adalah...",
    "options": {
      "A": "Pergi ke taman atau mal untuk melihat keramaian orang.",
      "B": "Membaca buku atau menulis jurnal tentang perasaan saya sendiri.",
      "C": "Duduk di teras rumah sambil menikmati suasana sore tenang.",
      "D": "Menyiapkan rencana kerja untuk hari Senin agar lebih produktif."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 419,
    "question": "Cara saya menanggapi teman yang berbicara terlalu keras...",
    "options": {
      "A": "Saya merasa tidak nyaman dan mencoba menjauh secara perlahan.",
      "B": "Saya memintanya untuk mengecilkan suara karena mengganggu orang lain.",
      "C": "Saya ikut berbicara keras dengan nada yang penuh candaan.",
      "D": "Saya hanya mendengarkan dan tetap bersikap sopan kepadanya saja."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 420,
    "question": "Tujuan utama hidup saya di masa depan adalah...",
    "options": {
      "A": "Hidup damai bersama keluarga dan terhindar dari segala konflik.",
      "B": "Menjadi sosok yang berpengaruh dan sukses dalam karier saya.",
      "C": "Memiliki banyak relasi dan hidup penuh dengan kesenangan harian.",
      "D": "Memiliki kehidupan yang teratur dan bermanfaat bagi banyak orang."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 421,
    "question": "Saat sedang berbelanja pakaian, saya lebih sering...",
    "options": {
      "A": "Membeli baju yang menunjukkan kewibawaan dan kesuksesan saya pribadi.",
      "B": "Membeli baju dengan bahan berkualitas yang jahitannya sangat rapi.",
      "C": "Membeli baju yang paling nyaman dipakai meski modelnya sederhana.",
      "D": "Membeli baju yang modelnya unik agar tampil beda sendiri."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 422,
    "question": "Jika teman meminta tolong menjaga anaknya sebentar, saya...",
    "options": {
      "A": "Mengajak anak tersebut bermain game yang seru dan ramai.",
      "B": "Meminta anak tersebut disiplin dan mengikuti aturan main saya.",
      "C": "Menyiapkan berbagai buku cerita dan mainan edukatif secara rapi.",
      "D": "Menjaganya dengan penuh kesabaran agar dia merasa aman tenang."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 423,
    "question": "Saat ada saudara yang meminjam barang berharga saya...",
    "options": {
      "A": "Meminjamkannya langsung dengan senang hati karena percaya kepada mereka.",
      "B": "Memberikan syarat waktu pengembalian yang sangat tegas dan jelas.",
      "C": "Memastikan dia tahu cara merawat barang tersebut dengan teliti.",
      "D": "Merasa sungkan menolak meski sebenarnya saya agak khawatir barangnya rusak."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 424,
    "question": "Sebagai pimpinan, gaya saya dalam mengevaluasi tim adalah...",
    "options": {
      "A": "Melakukannya dengan lembut agar tidak ada anggota tim merasa tertekan.",
      "B": "Membahas setiap poin keberhasilan dan kegagalan secara sangat mendalam.",
      "C": "Menitikberatkan pada target yang tidak tercapai agar segera diperbaiki.",
      "D": "Memberikan apresiasi besar agar semangat mereka terus terjaga baik."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 425,
    "question": "Jika saya merasa dicurangi oleh penjual di pasar...",
    "options": {
      "A": "Saya mengeluh sebentar lalu melupakannya karena malas merasa sedih.",
      "B": "Saya membiarkannya saja demi menghindari keributan di tempat umum.",
      "C": "Saya langsung menuntut penjelasan dan meminta uang saya kembali.",
      "D": "Saya mencatat kejadian itu agar tidak belanja di sana lagi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 426,
    "question": "Reaksi saya saat melihat rencana liburan batal mendadak...",
    "options": {
      "A": "Menerima keadaan dan menikmati waktu santai di rumah saja.",
      "B": "Mencari aktivitas lain yang tetap seru dilakukan di rumah.",
      "C": "Merasa sedih karena saya sudah membayangkan setiap detail liburannya.",
      "D": "Marah kepada penyebab pembatalan karena sudah merugikan waktu saya."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 427,
    "question": "Dalam mengambil keputusan investasi masa depan, saya memilih...",
    "options": {
      "A": "Investasi yang memberikan kendali penuh dan keuntungan sangat besar.",
      "B": "Investasi yang sedang tren dan menjanjikan gaya hidup seru.",
      "C": "Investasi yang memiliki profil risiko sangat rendah dan terencana.",
      "D": "Investasi yang paling aman dan memberikan ketenangan jangka panjang."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 428,
    "question": "Cara saya menata isi tas atau dompet saya...",
    "options": {
      "A": "Tertata sangat rapi berdasarkan jenis dan ukuran barang tersebut.",
      "B": "Hanya berisi barang yang benar-benar saya butuhkan secara rutin.",
      "C": "Agak berantakan tapi saya tahu letak barang-barang yang penting.",
      "D": "Apa adanya selama barang-barang tersebut masih bisa masuk tas."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 429,
    "question": "Gaya komunikasi saya saat sedang marah besar adalah...",
    "options": {
      "A": "To the point, tegas, dan mungkin terdengar agak menakutkan.",
      "B": "Berusaha bicara lembut meskipun dalam hati merasa sangat kesal.",
      "C": "Memilih diam dan baru bicara setelah emosi saya stabil.",
      "D": "Berbicara banyak dengan nada tinggi namun cepat reda kembali."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "dalam"
  },
  {
    "id": 430,
    "question": "Harapan saya terhadap anak-anak saya di masa depan...",
    "options": {
      "A": "Mereka memiliki karakter yang kuat, disiplin, dan berintegritas tinggi.",
      "B": "Mereka memiliki kehidupan yang damai, bahagia, dan cinta keluarga.",
      "C": "Mereka menjadi sosok yang ceria dan memiliki banyak teman.",
      "D": "Mereka menjadi sosok yang tangguh, sukses, dan mandiri penuh."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 431,
    "question": "Saat menghadapi tantangan baru dalam pekerjaan, sikap saya...",
    "options": {
      "A": "Mengikuti arahan atasan dan mengerjakannya sesuai kemampuan saya saja.",
      "B": "Mempelajari segala risiko tantangan itu dengan sangat teliti dahulu.",
      "C": "Sangat antusias karena menyukai pengalaman baru yang menantang adrenalin.",
      "D": "Fokus pada cara tercepat untuk menaklukkan tantangan tersebut segera."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 432,
    "question": "Jika ada teman yang sering datang terlambat, saya...",
    "options": {
      "A": "Menunggu dengan sabar tanpa ingin memicu perdebatan yang panjang.",
      "B": "Menegurnya agar dia lebih menghargai waktu saya yang berharga.",
      "C": "Menyambutnya dengan candaan agar dia tidak merasa merasa sungkan.",
      "D": "Merasa kesal dalam hati dan mulai memikirkan keseriusan pertemanan."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 433,
    "question": "Bagaimana sikap saya jika orang tua sedang sakit?",
    "options": {
      "A": "Mencari dokter terbaik agar mereka segera mendapat penanganan medis.",
      "B": "Menjaga mereka dengan teliti dan mencatat jadwal minum obat.",
      "C": "Mencoba menghibur mereka dengan cerita lucu agar tetap semangat.",
      "D": "Mendampingi mereka dengan penuh kasih sayang dan kesabaran ekstra."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 434,
    "question": "Sebagai pimpinan proyek, jika ada perubahan anggaran...",
    "options": {
      "A": "Memotong pengeluaran tidak penting agar target utama tetap tercapai.",
      "B": "Mendiskusikan dengan tim untuk mencari solusi yang paling nyaman.",
      "C": "Menghitung ulang rincian biaya dengan sangat teliti dan akurat.",
      "D": "Tetap optimis dan mencari sumber dana lain dengan antusias."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 435,
    "question": "Jika ada orang yang mengkritik pilihan hidup saya...",
    "options": {
      "A": "Menertawakannya dan mengatakan setiap orang berhak punya selera berbeda.",
      "B": "Merenungkan kritiknya dan memikirkan kebenaran dari apa yang dikatakannya.",
      "C": "Menjelaskan alasan saya secara tegas agar dia paham posisi saya.",
      "D": "Mendengarkannya saja tanpa mau mendebat demi menjaga hubungan baik."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 436,
    "question": "Reaksi saya saat menghadapi situasi macet di jalan...",
    "options": {
      "A": "Terus mencari celah jalan pintas agar cepat sampai tujuan.",
      "B": "Bernyanyi mengikuti musik radio agar perjalanan tidak membosankan sekali.",
      "C": "Pasrah menikmati suasana dan menunggu sampai kemacetan tersebut terurai.",
      "D": "Mengevaluasi waktu keterlambatan dan mengatur ulang jadwal kegiatan saya."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 437,
    "question": "Dalam mengambil keputusan memilih asuransi, saya mengutamakan...",
    "options": {
      "A": "Cakupan perlindungan yang luas dan proses klaim yang cepat.",
      "B": "Rincian polis yang transparan dan reputasi perusahaan yang solid.",
      "C": "Pelayanan yang ramah dan banyak direkomendasikan oleh teman dekat.",
      "D": "Premi yang terjangkau dan memberikan rasa aman bagi keluarga."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 438,
    "question": "Apa yang saya lakukan di waktu luang sore hari?",
    "options": {
      "A": "Keluar rumah untuk sekadar mengobrol dengan tetangga atau teman.",
      "B": "Membersihkan atau merapikan sudut rumah yang masih terlihat berantakan.",
      "C": "Duduk santai sambil menonton televisi atau sekadar beristirahat tenang.",
      "D": "Mengerjakan hobi yang bisa menghasilkan uang tambahan bagi saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 439,
    "question": "Gaya komunikasi saya saat sedang mempresentasikan ide adalah...",
    "options": {
      "A": "Teratur, menggunakan data pendukung, dan menjelaskan secara sangat detail.",
      "B": "Lugas, menekankan poin penting, dan fokus pada manfaat ide.",
      "C": "Tenang, sopan, dan memberikan ruang bagi audiens untuk bertanya.",
      "D": "Penuh energi, ekspresif, dan sering membuat penonton tertawa riang."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 440,
    "question": "Pandangan saya mengenai investasi properti masa depan...",
    "options": {
      "A": "Sebagai tempat berkumpul keluarga besar dalam acara-acara yang meriah.",
      "B": "Sebagai aset berharga yang bisa memberikan keuntungan finansial besar.",
      "C": "Sebagai hunian yang tenang untuk menikmati masa tua bersama keluarga.",
      "D": "Sebagai jaminan masa depan yang harus direncanakan secara sangat matang."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 441,
    "question": "Saat makan malam bersama rekan bisnis, saya...",
    "options": {
      "A": "Memperhatikan tata krama meja makan dengan sangat teliti dan rapi.",
      "B": "Menjadi pencair suasana dengan cerita-cerita yang sangat menghibur sekali.",
      "C": "Lebih banyak mendengarkan dan mencoba menyesuaikan diri dengan situasi.",
      "D": "Fokus pada pembicaraan bisnis yang bisa menguntungkan kerja sama."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 442,
    "question": "Jika teman saya memuji gaya berpakaian saya, saya...",
    "options": {
      "A": "Sangat senang dan menceritakan di mana saya membelinya tadi.",
      "B": "Mengucapkan terima kasih singkat dan kembali ke topik pembicaraan.",
      "C": "Tersenyum ramah dan merasa sangat dihargai oleh teman tersebut.",
      "D": "Merasa agak malu dan berpikir apakah pakaiannya benar-benar cocok."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 443,
    "question": "Saat merayakan hari ulang tahun anak, saya ingin...",
    "options": {
      "A": "Acara sederhana yang penuh kehangatan dan rasa kekeluargaan dalam.",
      "B": "Acara yang tertata rapi dan memiliki jadwal yang jelas.",
      "C": "Pesta yang meriah dengan banyak tamu dan hiburan seru.",
      "D": "Acara yang berkesan dan menunjukkan prestasi anak selama ini."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 444,
    "question": "Gaya saya saat memimpin rapat organisasi adalah...",
    "options": {
      "A": "Inspiratif, penuh semangat, dan mendorong semua anggota berpartisipasi aktif.",
      "B": "Sangat terstruktur, membahas setiap rincian teknis dengan teliti sekali.",
      "C": "Demokratis, mendengarkan semua masukan sebelum mengambil kesepakatan bersama.",
      "D": "Efektif, fokus pada agenda, dan memastikan keputusan diambil cepat."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 445,
    "question": "Jika saya merasa disalahkan secara tidak adil, saya...",
    "options": {
      "A": "Memilih untuk diam agar tidak memperbesar konflik yang terjadi.",
      "B": "Menanggapinya dengan candaan namun tetap membela diri secara halus.",
      "C": "Menuntut penjelasan dan membuktikan kebenaran dengan argumen yang kuat.",
      "D": "Memikirkan alasan orang tersebut menyalahkan saya dan merasa sedih."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 446,
    "question": "Reaksi saya saat menghadapi kegagalan kecil dalam hidup...",
    "options": {
      "A": "Merenungi kegagalan tersebut secara mendalam dan merasa sangat kecewa.",
      "B": "Cepat melupakannya dan mencari hal lain yang lebih menyenangkan.",
      "C": "Menerima kenyataan dengan sabar dan mencoba tetap tenang menghadapinya.",
      "D": "Mengevaluasi kesalahan dan segera mencoba lagi dengan strategi baru."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 447,
    "question": "Dalam mengambil keputusan memilih tempat liburan, saya memilih...",
    "options": {
      "A": "Lokasi yang tenang dan memiliki nilai sejarah atau edukasi.",
      "B": "Tempat yang sedang populer dan menawarkan banyak hiburan seru.",
      "C": "Tempat yang nyaman untuk bersantai bersama seluruh anggota keluarga.",
      "D": "Destinasi yang menantang dan bisa membuktikan keberanian diri saya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 448,
    "question": "Kebiasaan saya saat merapikan meja kerja di kantor...",
    "options": {
      "A": "Membiarkan barang tetap pada tempatnya selama saya masih merasa nyaman.",
      "B": "Menata semua perlengkapan kerja berdasarkan fungsi dan ukuran tertentu.",
      "C": "Merapikan seadanya saja yang penting masih terlihat menyenangkan mata.",
      "D": "Membuang barang tidak penting agar ruang kerja lebih efisien."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 449,
    "question": "Gaya komunikasi saya saat sedang memberikan pengarahan...",
    "options": {
      "A": "Menjelaskan urutan langkah kerja secara logis dan sangat rinci.",
      "B": "Tegas, singkat, dan langsung menunjuk pada tugas yang ada.",
      "C": "Penuh dengan kiasan menarik agar instruksi saya mudah diingat.",
      "D": "Berbicara pelan dan memastikan semua orang memahami instruksi saya."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 450,
    "question": "Pandangan saya mengenai pengembangan karier jangka panjang...",
    "options": {
      "A": "Menjadi tenaga ahli yang diakui karena kualitas hasil kerjanya.",
      "B": "Bekerja di tempat yang selalu menawarkan tantangan sosial seru.",
      "C": "Mencapai posisi puncak pimpinan dengan pengaruh kekuasaan yang kuat.",
      "D": "Memiliki pekerjaan yang stabil dan menjamin kesejahteraan keluarga terus."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 451,
    "question": "Jika saya harus belajar bahasa asing baru, saya...",
    "options": {
      "A": "Fokus menghafal kosakata yang paling penting untuk komunikasi bisnis saja.",
      "B": "Senang berbicara langsung dengan orang asli meskipun tata bahasanya berantakan.",
      "C": "Mempelajari tata bahasa dan struktur kalimat secara sangat teliti dahulu.",
      "D": "Belajar secara perlahan melalui lagu atau film yang saya sukai."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 452,
    "question": "Saat teman saya menceritakan kesuksesannya, saya merasa...",
    "options": {
      "A": "Sangat antusias dan ikut merayakannya dengan penuh kegembiraan bersama.",
      "B": "Tersenyum bangga dan memberikan apresiasi tulus atas kerja kerasnya tersebut.",
      "C": "Termotivasi untuk bekerja lebih keras lagi agar bisa sukses serupa.",
      "D": "Ikut senang namun mulai menganalisis bagaimana dia mencapai kesuksesan tersebut."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 453,
    "question": "Bagaimana sikap saya jika saudara saya berbuat curang?",
    "options": {
      "A": "Merasa sedih secara mendalam dan merenungi mengapa dia melakukan itu.",
      "B": "Mencoba memaklumi alasannya demi menjaga keharmonisan hubungan keluarga kami.",
      "C": "Langsung menasihatinya secara tegas bahwa kejujuran adalah hal utama.",
      "D": "Menegurnya sambil bercanda agar dia tidak merasa sedang saya adili."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 454,
    "question": "Sebagai pimpinan, gaya saya dalam menyelesaikan konflik tim...",
    "options": {
      "A": "Berusaha menjembatani perbedaan agar semua pihak merasa dihargai dan tenang.",
      "B": "Mendengarkan semua pihak dan mengambil keputusan yang paling adil tegas.",
      "C": "Menganalisis akar masalah secara logis sebelum memberikan solusi yang tepat.",
      "D": "Mengajak tim makan bersama untuk mencairkan suasana yang sedang tegang."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 455,
    "question": "Jika saya merasa dibohongi oleh orang terdekat, saya...",
    "options": {
      "A": "Merenungkan hubungan kami dan butuh waktu lama untuk memaafkannya.",
      "B": "Mencoba memaafkan dan berharap dia tidak akan mengulanginya lagi nanti.",
      "C": "Menghadapinya langsung dan menuntut penjelasan yang jujur darinya segera.",
      "D": "Mengutarakan kekecewaan saya sambil menangis agar dia merasa kasihan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 456,
    "question": "Reaksi saya saat menghadapi kemacetan parah di jalanan...",
    "options": {
      "A": "Mengevaluasi waktu keterlambatan dan mengatur ulang jadwal kegiatan harian saya.",
      "B": "Menelepon teman untuk sekadar mengobrol agar waktu tunggu tidak membosankan.",
      "C": "Pasrah menikmati suasana dan menunggu sampai kemacetan tersebut terurai tuntas.",
      "D": "Menggerutu dan terus mencari celah jalan pintas agar cepat sampai."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 457,
    "question": "Dalam mengambil keputusan membeli asuransi kesehatan, saya memilih...",
    "options": {
      "A": "Premi yang terjangkau dan memberikan rasa aman bagi keluarga saya.",
      "B": "Pelayanan yang ramah dan banyak direkomendasikan oleh teman dekat saya.",
      "C": "Rincian polis yang transparan dan reputasi perusahaan yang sangat solid.",
      "D": "Cakupan perlindungan yang luas dan proses klaim yang cepat tuntas."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 458,
    "question": "Apa yang saya lakukan di waktu luang sore hari...",
    "options": {
      "A": "Mengerjakan hobi yang bisa menghasilkan uang tambahan bagi saya harian.",
      "B": "Duduk santai sambil menonton televisi atau sekadar beristirahat tenang saja.",
      "C": "Membersihkan atau merapikan sudut rumah yang masih terlihat agak berantakan.",
      "D": "Keluar rumah untuk sekadar mengobrol dengan tetangga atau teman dekat."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 459,
    "question": "Gaya komunikasi saya saat sedang mempresentasikan ide kerja...",
    "options": {
      "A": "Tenang, sopan, dan memberikan ruang bagi audiens untuk bertanya langsung.",
      "B": "Teratur, menggunakan data pendukung, dan menjelaskan secara sangat detail sekali.",
      "C": "Lugas, menekankan poin penting, dan fokus pada manfaat ide tersebut.",
      "D": "Penuh energi, ekspresif, dan sering membuat penonton tertawa riang gembira."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 460,
    "question": "Pandangan saya mengenai investasi properti di masa depan...",
    "options": {
      "A": "Sebagai aset berharga yang bisa memberikan keuntungan finansial yang besar.",
      "B": "Sebagai tempat berkumpul keluarga besar dalam acara-acara yang sangat meriah.",
      "C": "Sebagai jaminan masa depan yang harus direncanakan secara sangat matang.",
      "D": "Sebagai hunian yang tenang untuk menikmati masa tua bersama keluarga."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 461,
    "question": "Saat sedang berlibur, hal yang paling saya nikmati...",
    "options": {
      "A": "Melakukan aktivitas menantang yang belum pernah saya coba sebelumnya sendiri.",
      "B": "Bertemu dengan penduduk lokal dan mempelajari budaya mereka yang asyik.",
      "C": "Duduk santai sambil menikmati pemandangan alam yang tenang dan damai.",
      "D": "Melihat detail arsitektur atau seni bangunan bersejarah dengan teliti sekali."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 462,
    "question": "Jika teman saya meminta bantuan untuk mengecat rumah...",
    "options": {
      "A": "Mengoordinasi teman lain agar pengecatan rumah berjalan lebih cepat tuntas segera.",
      "B": "Membantu sebisanya dengan sabar sampai seluruh tembok rumah selesai dicat.",
      "C": "Membantunya sambil bernyanyi agar pekerjaan tidak terasa membosankan sekali harian.",
      "D": "Mengecat dengan sangat teliti agar hasilnya terlihat sangat sempurna dan rapi."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 463,
    "question": "Bagaimana sikap saya jika saudara saya memenangkan beasiswa?",
    "options": {
      "A": "Sangat gembira dan segera merayakannya dengan pesta keluarga yang meriah.",
      "B": "Mengucapkan selamat dan menanyakan rincian proses seleksi beasiswa secara detail.",
      "C": "Menjadikannya motivasi untuk mengasah kemampuan saya lagi agar menang beasiswa.",
      "D": "Tersenyum tulus dan mendoakan agar studinya lancar dan memberikan kebahagiaan."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 464,
    "question": "Sebagai pimpinan, fokus utama saya dalam membina anggota...",
    "options": {
      "A": "Mendorong kemandirian anggota agar mereka bisa memberikan kontribusi nyata bagi tim.",
      "B": "Menjaga kerukunan antar anggota agar tim tetap solid dan penuh kedamaian.",
      "C": "Menciptakan suasana kerja yang penuh dengan keceriaan dan semangat harian.",
      "D": "Membangun karakter anggota yang disiplin melalui pelatihan yang sangat terencana matang."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 465,
    "question": "Jika saya merasa dicurangi oleh rekan kerja saya...",
    "options": {
      "A": "Mencoba mengklarifikasinya dengan cara yang santai agar tidak merusak pertemanan.",
      "B": "Menghadapi rekan tersebut secara langsung dan menuntut penjelasan yang sangat jujur.",
      "C": "Membiarkannya saja karena saya yakin kebenaran pada akhirnya akan terungkap sendiri.",
      "D": "Merasa sangat kecewa dan mulai menjaga jarak dengan rekan tersebut sementara."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 466,
    "question": "Saat melihat orang lain melakukan kebaikan secara diam-diam...",
    "options": {
      "A": "Tersenyum bangga dan mendoakan agar kebaikannya mendapatkan balasan yang setimpal nanti.",
      "B": "Merasa terharu dan ingin segera meniru perbuatan baiknya tersebut dalam hidup.",
      "C": "Menghargai tindakannya sebagai bukti nyata bahwa masih banyak orang baik dunia.",
      "D": "Merenungi makna kebaikan tersebut bagi kehidupan manusia secara sangat mendalam sekali."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 467,
    "question": "Dalam mengambil keputusan memilih asuransi syariah pendidikan anak...",
    "options": {
      "A": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga.",
      "B": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan.",
      "C": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "D": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah yang tegas."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 468,
    "question": "Kebiasaan saya saat sedang merawat hewan peliharaan harian...",
    "options": {
      "A": "Memberikan pakan dan vitamin terbaik agar kesehatan hewan peliharaan tetap terjaga.",
      "B": "Memperhatikan setiap detail kebersihan kandang dan tubuh hewan peliharaan dengan teliti.",
      "C": "Mengajak hewan peliharaan bermain agar mereka selalu merasa senang dan ceria.",
      "D": "Menyayangi hewan peliharaan dengan penuh kesabaran dan ketenangan di waktu luang."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 469,
    "question": "Cara saya menanggapi teman yang ingkar janji bisnis...",
    "options": {
      "A": "Mencoba membicarakannya baik-baik demi menjaga kedamaian dalam hubungan bisnis kami tersebut.",
      "B": "Menuntut pertanggungjawaban yang jelas dan segera mengakhiri hubungan bisnis secara tegas.",
      "C": "Merasa sangat kecewa dan mulai mempertanyakan integritas moral teman tersebut mendalam.",
      "D": "Menghentikan kerja sama sambil berharap dia akan menyadari kesalahannya tersebut nanti."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 470,
    "question": "Mengenai asuransi kebakaran gedung, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memiliki reputasi perusahaan sangat baik dan rincian klaim sangat jelas.",
      "B": "Yang memberikan ganti rugi paling besar dan layanannya sangat profesional sekali.",
      "C": "Yang sudah terbukti terpercaya dan memberikan layanan yang sangat ramah sekali.",
      "D": "Yang preminya terjangkau dan pendaftarannya bisa dilakukan secara online cepat tuntas."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 471,
    "question": "Jika teman mengajak pergi ke pertunjukan sirkus, saya...",
    "options": {
      "A": "Memilih posisi duduk paling depan untuk melihat atraksi secara lebih nyata.",
      "B": "Sangat antusias karena suka atraksi yang unik dan menghibur hati saya.",
      "C": "Menikmati pertunjukan sirkus dengan tenang dan merasa kagum atas kemampuan mereka.",
      "D": "Memperhatikan setiap detail gerakan pemain sirkus dengan tingkat ketelitian sangat tinggi."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 472,
    "question": "Saat menghadapi rekan kerja yang suka mengadu domba...",
    "options": {
      "A": "Menghadapi rekan tersebut secara langsung agar tidak memecah belah persatuan tim.",
      "B": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua orang tertawa.",
      "C": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja.",
      "D": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik diciptakannya."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 473,
    "question": "Bagaimana reaksi saya jika ada saudara yang melahirkan anak...",
    "options": {
      "A": "Tersenyum bahagia dan mendoakan agar ibu dan bayi selalu diberikan kesehatan.",
      "B": "Sangat gembira dan segera menjenguknya dengan membawa kado yang sangat menarik.",
      "C": "Mengucapkan selamat dan memperhatikan setiap rincian kebutuhan ibu dan bayi tersebut.",
      "D": "Memberikan saran perawatan bayi yang paling efektif berdasarkan informasi medis yang akurat."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 474,
    "question": "Sebagai pimpinan organisasi pemuda, fokus utama saya adalah...",
    "options": {
      "A": "Kemandirian pemuda yang bisa memberikan kontribusi nyata bagi kemajuan bangsa kita.",
      "B": "Kegiatan yang inovatif dan bisa meningkatkan eksistensi pemuda di mata dunia.",
      "C": "Pengembangan karakter pemuda yang sangat terstruktur melalui pelatihan yang sangat disiplin.",
      "D": "Kerukunan antar pemuda agar organisasi tetap solid dan penuh kedamaian batin."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 475,
    "question": "Jika saya merasa dikritik habis-habisan oleh atasan saya...",
    "options": {
      "A": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan bersama tim.",
      "B": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja yang baik.",
      "C": "Memikirkan kritik tersebut secara mendalam dan merasa sangat terpukul oleh kata-katanya.",
      "D": "Menerimanya dengan senyuman dan berjanji akan memberikan performa yang lebih ceria."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 476,
    "question": "Saat melihat orang lain melakukan perbuatan curang diam-diam...",
    "options": {
      "A": "Menghargai kejujuran sebagai bukti nyata bahwa masih banyak orang baik dunia.",
      "B": "Berdoa agar dia segera menyadari kesalahannya dan kembali ke jalan benar.",
      "C": "Merasa geram dan ingin segera melaporkan perbuatannya agar dia mendapatkan sanksi.",
      "D": "Merenungi makna kejujuran tersebut bagi kehidupan manusia secara sangat mendalam sekali."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 477,
    "question": "Dalam mengambil keputusan memilih asuransi kesehatan syariah...",
    "options": {
      "A": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah yang tegas.",
      "B": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan.",
      "C": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "D": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 478,
    "question": "Kebiasaan saya saat sedang merawat wajah di klinik kecantikan...",
    "options": {
      "A": "Mengajak bicara perawatnya agar proses perawatan wajah terasa lebih sangat menyenangkan.",
      "B": "Memperhatikan setiap langkah perawatan wajah dengan tingkat ketelitian sangat tinggi.",
      "C": "Menikmati proses perawatan wajah dengan tenang dan merasa sangat rileks batin.",
      "D": "Memilih jenis perawatan wajah yang paling efektif untuk kesehatan kulit wajah."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 479,
    "question": "Cara saya menanggapi teman yang berbuat salah di kantor...",
    "options": {
      "A": "Merasa kecewa karena kejujuran adalah dasar dari hubungan kerja yang kuat.",
      "B": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga prestasi kerja.",
      "C": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga prestasi.",
      "D": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan kerja kami tersebut."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 480,
    "question": "Mengenai asuransi jiwa jangka pendek, pertimbangan utama saya...",
    "options": {
      "A": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga yang ada.",
      "B": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum.",
      "C": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat.",
      "D": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 481,
    "question": "Jika teman mengajak pergi ke pameran komputer, saya...",
    "options": {
      "A": "Antusias karena bisa melihat gadget baru yang keren dan sangat canggih.",
      "B": "Mempelajari spesifikasi teknis setiap perangkat dengan tingkat ketelitian yang sangat tinggi.",
      "C": "Menikmati suasana pameran dan mencoba perangkat yang fungsinya saya butuhkan saja.",
      "D": "Mencari perangkat yang bisa menunjang produktivitas kerja saya agar lebih efisien."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 482,
    "question": "Saat menghadapi rekan kerja yang suka menunda pekerjaan...",
    "options": {
      "A": "Menegurnya agar segera menyelesaikan tugasnya demi kelancaran pekerjaan tim kami bersama.",
      "B": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja.",
      "C": "Sabar menunggunya dan mencoba membantu seperlunya agar tugas kami cepat selesai.",
      "D": "Mengajaknya bercanda agar dia merasa semangat untuk mulai bekerja aktif lagi."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 483,
    "question": "Bagaimana reaksi saya jika ada saudara yang mendapat promosi?",
    "options": {
      "A": "Mengucapkan selamat dan menanyakan rincian tanggung jawab barunya secara sangat detail.",
      "B": "Sangat gembira dan segera merayakannya dengan pesta keluarga yang meriah.",
      "C": "Tersenyum tulus dan mendoakan agar posisinya yang baru memberikan kebahagiaan batin.",
      "D": "Menjadikannya motivasi untuk bekerja lebih keras lagi agar bisa sukses serupa."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 484,
    "question": "Sebagai pimpinan, fokus utama saya dalam membangun tim...",
    "options": {
      "A": "Sistem kerja tim yang sangat solid, teratur, dan memiliki administrasi rapi.",
      "B": "Kemandirian anggota tim agar mereka bisa memberikan kontribusi nyata bagi perusahaan.",
      "C": "Suasana kerja yang penuh dengan keceriaan dan semangat persaudaraan harian.",
      "D": "Keharmonisan antar anggota tim agar semua merasa aman dan nyaman bekerja."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 485,
    "question": "Jika saya merasa dihianati oleh pasangan hidup saya...",
    "options": {
      "A": "Mengutarakan kekecewaan saya sambil menangis agar dia menyadari kesalahannya tersebut segera.",
      "B": "Mencoba memaafkan dan memberikan kesempatan kedua demi keutuhan rumah tangga kami.",
      "C": "Menghadapinya secara langsung dan menuntut penjelasan yang jujur atas tindakannya tersebut.",
      "D": "Merenungkan hubungan kami dan memikirkan segala konsekuensi di masa depan nanti."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 486,
    "question": "Saat melihat berita tentang kemajuan teknologi dunia, saya...",
    "options": {
      "A": "Sangat antusias dan segera membagikan berita tersebut agar banyak yang tahu.",
      "B": "Mencari cara praktis untuk menerapkan teknologi tersebut dalam pekerjaan saya segera.",
      "C": "Berdoa agar kemajuan teknologi tersebut memberikan kebaikan bagi seluruh umat manusia.",
      "D": "Menganalisis dampak teknologi tersebut bagi kehidupan manusia secara sangat mendalam sekali."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 487,
    "question": "Dalam mengambil keputusan memilih asuransi syariah jiwa, saya memilih...",
    "options": {
      "A": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "B": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga.",
      "C": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan.",
      "D": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah yang tegas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 488,
    "question": "Kebiasaan saya saat sedang merawat taman di rumah harian...",
    "options": {
      "A": "Memperhatikan setiap detail kebersihan pot dan daun tanaman dengan sangat teliti.",
      "B": "Mengajak tanaman bicara agar mereka selalu merasa senang dan tumbuh ceria.",
      "C": "Memberikan pupuk terbaik agar kesehatan tanaman tetap terjaga dengan sangat prima.",
      "D": "Menyayangi tanaman dengan penuh kesabaran dan ketenangan di waktu luang saya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 489,
    "question": "Cara saya menanggapi teman yang berbohong demi kebaikan...",
    "options": {
      "A": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan pertemanan kuat.",
      "B": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga perasaan saya.",
      "C": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan pertemanan kami.",
      "D": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga perasaan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 490,
    "question": "Mengenai asuransi kecelakaan diri, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum.",
      "B": "Yang memberikan jaminan ganti rugi paling besar bagi seluruh anggota keluarga.",
      "C": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya.",
      "D": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 491,
    "question": "Jika teman mengajak pergi ke tempat bowling, saya...",
    "options": {
      "A": "Berusaha mendapatkan skor tertinggi untuk membuktikan kemampuan saya di depan teman.",
      "B": "Sangat antusias karena suka olahraga yang santai dan penuh dengan keseruan.",
      "C": "Menikmati permainan bowling dengan tenang dan merasa senang berkumpul bersama teman.",
      "D": "Mempelajari teknik lemparan bola yang benar agar lemparan saya selalu akurat tuntas."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 492,
    "question": "Saat menghadapi rekan kerja yang suka mencari kesalahan orang...",
    "options": {
      "A": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja.",
      "B": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua orang tertawa.",
      "C": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik diciptakannya.",
      "D": "Menghadapi rekan tersebut secara langsung agar tidak mengganggu ketenangan kerja tim."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 493,
    "question": "Bagaimana reaksi saya jika ada saudara yang mendapat masalah?",
    "options": {
      "A": "Sangat sedih dan segera memberikan semangat emosional agar dia kuat menghadapinya.",
      "B": "Menemaninya dengan sabar dan memberikan dukungan emosional yang menenangkan bagi dia.",
      "C": "Mencari cara praktis untuk membantunya menyelesaikan masalah tersebut secepat mungkin.",
      "D": "Menganalisis penyebab masalahnya secara logis untuk mencari jalan keluar yang tepat."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 494,
    "question": "Sebagai pimpinan, fokus utama saya dalam membangun budaya tim...",
    "options": {
      "A": "Kreativitas ide yang inovatif dan bisa menarik perhatian banyak orang dunia.",
      "B": "Kemandirian anggota tim yang bisa memberikan kontribusi nyata bagi kesuksesan bersama.",
      "C": "Kerukunan antar anggota tim agar tim tetap solid dan penuh kedamaian.",
      "D": "Kedisiplinan anggota tim yang sangat tinggi melalui penerapan aturan yang sangat tegas."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 495,
    "question": "Jika saya merasa dikritik oleh rekan kerja saya sendiri...",
    "options": {
      "A": "Menerimanya dengan senyuman dan berjanji akan memberikan performa yang lebih ceria.",
      "B": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan bersama tim.",
      "C": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja yang baik.",
      "D": "Memikirkan kritik tersebut secara mendalam dan merasa sangat terpukul oleh kata-katanya."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 496,
    "question": "Saat melihat orang lain melakukan perbuatan curang secara terang...",
    "options": {
      "A": "Berdoa agar dia segera menyadari kesalahannya dan kembali ke jalan benar.",
      "B": "Menghargai kejujuran sebagai bukti nyata bahwa masih banyak orang baik dunia.",
      "C": "Merasa geram dan ingin segera menegur perbuatannya agar dia berhenti melakukannya.",
      "D": "Merenungi makna kejujuran tersebut bagi kehidupan manusia secara sangat mendalam sekali."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 497,
    "question": "Dalam mengambil keputusan memilih asuransi syariah pendidikan tinggi...",
    "options": {
      "A": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "B": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah yang tegas.",
      "C": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan.",
      "D": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 498,
    "question": "Kebiasaan saya saat sedang merawat kesehatan tubuh harian...",
    "options": {
      "A": "Menikmati proses olahraga dengan tenang dan merasa sangat rileks batin saya.",
      "B": "Mengajak teman berolahraga bersama agar prosesnya terasa lebih sangat menyenangkan sekali.",
      "C": "Memilih jenis olahraga yang paling efektif untuk menjaga kebugaran tubuh saya.",
      "D": "Memperhatikan setiap detail asupan nutrisi dan jadwal olahraga dengan sangat teliti."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 499,
    "question": "Cara saya menanggapi teman yang berbuat salah di lingkungan...",
    "options": {
      "A": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga hubungan.",
      "B": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga hubungannya.",
      "C": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan sosial kami.",
      "D": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan sosial kuat."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 500,
    "question": "Mengenai asuransi kematian berjangka, pertimbangan utama saya...",
    "options": {
      "A": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya.",
      "B": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga yang ada.",
      "C": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat.",
      "D": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 501,
    "question": "Saat menghadapi tugas yang menumpuk di kantor, saya biasanya...",
    "options": {
      "A": "Mengerjakannya sambil mengobrol agar suasana tetap terasa menyenangkan.",
      "B": "Tetap tenang dan mengerjakan apa yang sanggup saya selesaikan.",
      "C": "Segera membagi tugas dan menyelesaikannya dengan kecepatan penuh.",
      "D": "Menyusun daftar prioritas yang sangat detail sebelum mulai bekerja."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 502,
    "question": "Ketika teman memuji keberhasilan saya, reaksi saya adalah...",
    "options": {
      "A": "Merasa bangga namun segera mengevaluasi apa yang masih kurang.",
      "B": "Merasa sangat senang dan menceritakan perjuangan saya dengan antusias.",
      "C": "Menerimanya sebagai bukti bahwa target saya telah berhasil dicapai.",
      "D": "Tersenyum ramah dan mengucapkan terima kasih atas dukungannya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 503,
    "question": "Dalam diskusi keluarga mengenai anggaran, saya cenderung...",
    "options": {
      "A": "Mencatat setiap rincian pengeluaran dengan sangat teliti dan akurat.",
      "B": "Mengusulkan pengeluaran untuk hal yang menyenangkan bagi seluruh anggota.",
      "C": "Mendorong pengalokasian dana pada investasi yang memberikan hasil nyata.",
      "D": "Menyetujui kesepakatan bersama demi menjaga kedamaian di dalam rumah."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 504,
    "question": "Jika saya menjadi pemimpin sebuah organisasi baru, saya akan...",
    "options": {
      "A": "Menentukan target besar yang harus dicapai dalam waktu singkat.",
      "B": "Membangun sistem operasional yang sangat teratur dan minim kesalahan.",
      "C": "Fokus membangun atmosfer kerja yang penuh semangat dan ceria.",
      "D": "Menjamin kenyamanan dan rasa aman bagi setiap anggota organisasi."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 505,
    "question": "Bagaimana reaksi saya jika rencana akhir pekan diganggu mendadak?",
    "options": {
      "A": "Tidak masalah, saya bisa segera menemukan alternatif kegiatan seru.",
      "B": "Merasa kesal karena hal itu menghambat produktivitas yang direncanakan.",
      "C": "Menerimanya dengan pasrah dan mengikuti alur keadaan yang ada.",
      "D": "Kecewa karena saya sudah menyiapkan segala detail rencana sebelumnya."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 506,
    "question": "Saat terjadi perselisihan pendapat dengan pasangan, saya cenderung...",
    "options": {
      "A": "Menyatakan keberatan saya secara tegas hingga masalah benar-benar tuntas.",
      "B": "Menganalisis penyebab perbedaan tersebut sebelum memberikan argumen logis.",
      "C": "Memilih untuk mengalah demi menjaga keharmonisan hubungan kami berdua.",
      "D": "Mencoba melucu agar ketegangan segera mereda dan suasana mencair."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 507,
    "question": "Dalam mengambil keputusan investasi, pertimbangan utama saya adalah...",
    "options": {
      "A": "Apakah investasi ini sedang populer dan banyak disukai orang.",
      "B": "Seberapa cepat investasi ini memberikan keuntungan yang sangat besar.",
      "C": "Analisis data historis dan laporan keuangan yang sangat lengkap.",
      "D": "Keamanan dana agar saya tetap merasa tenang di masa depan."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 508,
    "question": "Gaya bicara saya dalam pertemuan resmi biasanya adalah...",
    "options": {
      "A": "Singkat, padat, dan langsung menuju pada inti permasalahan.",
      "B": "Ekspresif, penuh semangat, dan seringkali menggunakan ilustrasi menarik.",
      "C": "Sangat terstruktur, logis, dan selalu didukung oleh fakta akurat.",
      "D": "Sopan, tenang, dan lebih banyak memberikan ruang bagi lainnya."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 509,
    "question": "Apa yang paling saya cari saat merencanakan masa depan?",
    "options": {
      "A": "Kedamaian batin dan kebahagiaan sederhana bersama keluarga tercinta.",
      "B": "Stabilitas hidup yang terencana matang dan minim risiko kegagalan.",
      "C": "Pengalaman baru yang penuh warna dan petualangan yang menyenangkan.",
      "D": "Kesuksesan karier dan pencapaian target hidup yang membanggakan diri."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 510,
    "question": "Kebiasaan saya saat sedang berbelanja kebutuhan bulanan adalah...",
    "options": {
      "A": "Langsung menuju rak barang yang dibutuhkan agar waktu lebih efisien.",
      "B": "Membeli merek langganan yang sudah biasa saya gunakan sehari-hari.",
      "C": "Membandingkan harga dan kualitas produk dengan sangat teliti dahulu.",
      "D": "Sering membeli barang yang menarik perhatian meskipun tidak direncanakan."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 511,
    "question": "Jika rekan kerja tidak mencapai targetnya, saya akan...",
    "options": {
      "A": "Menghiburnya agar dia tidak terlalu sedih dan kembali semangat.",
      "B": "Membantunya menganalisis di mana letak kesalahannya secara sangat mendalam.",
      "C": "Mendukungnya dengan sabar dan memberikan waktu tambahan bagi dia.",
      "D": "Menegurnya agar dia bekerja lebih keras demi kemajuan tim."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 512,
    "question": "Saat menghadiri pesta yang ramai, saya cenderung...",
    "options": {
      "A": "Mencari teman baru dan menjadi pusat perhatian dalam percakapan.",
      "B": "Mengamati suasana pesta dan hanya bicara dengan orang tertentu.",
      "C": "Menikmati suasana pesta dengan tenang di sudut yang nyaman.",
      "D": "Mencari orang penting yang bisa memperluas jaringan koneksi saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 513,
    "question": "Dalam menghadapi konflik antara saudara, sikap saya adalah...",
    "options": {
      "A": "Cenderung diam dan menunggu emosi mereka mereda dengan sendirinya.",
      "B": "Mencoba mengalihkan topik pembicaraan agar suasana kembali terasa damai.",
      "C": "Langsung menengahi dan memberikan solusi yang menurut saya paling adil.",
      "D": "Mendengarkan kedua belah pihak secara teliti sebelum memberikan saran logis."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 514,
    "question": "Gaya saya dalam memotivasi bawahan biasanya dengan...",
    "options": {
      "A": "Memberikan rasa aman dan dukungan emosional yang sangat stabil.",
      "B": "Memberikan pujian yang tulus dan semangat yang berapi-api.",
      "C": "Menantang mereka untuk melampaui kemampuan terbaik yang mereka miliki.",
      "D": "Memberikan contoh kerja yang sempurna agar mereka tergerak menirunya."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 515,
    "question": "Ketika beban stres mulai terasa berat, saya melakukan...",
    "options": {
      "A": "Menyendiri dan menuliskan perasaan saya agar pikiran lebih teratur.",
      "B": "Mencari hiburan atau berkumpul dengan teman-teman agar merasa senang.",
      "C": "Beristirahat total di rumah sambil melakukan hobi yang menenangkan.",
      "D": "Bekerja lebih keras untuk mengalihkan pikiran dari masalah tersebut."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 516,
    "question": "Dalam mengambil keputusan besar yang berisiko, saya memilih...",
    "options": {
      "A": "Melakukan riset mendalam untuk meminimalisir segala kemungkinan kesalahan fatal.",
      "B": "Mengikuti insting saya yang biasanya membawa pada hasil menyenangkan.",
      "C": "Mengambil risiko jika peluang untuk menang terasa sangat besar.",
      "D": "Memilih jalan yang paling aman demi menjaga kestabilan hidup."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 517,
    "question": "Cara saya menata meja kerja biasanya terlihat...",
    "options": {
      "A": "Hanya ada peralatan penting yang mendukung kecepatan kerja saya.",
      "B": "Sederhana, bersih, dan memberikan suasana yang cukup tenang bekerja.",
      "C": "Penuh dengan barang berwarna-warni meskipun tidak terlalu rapi tertata.",
      "D": "Sangat rapi, teratur, dan setiap barang memiliki tempatnya masing-masing."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 518,
    "question": "Saat harus menyampaikan kritik kepada teman, saya...",
    "options": {
      "A": "Menyampaikannya secara langsung agar dia segera memperbaiki kesalahannya tersebut.",
      "B": "Berbicara dengan sangat lembut demi menjaga perasaan teman saya.",
      "C": "Menyusun kata-kata dengan logis agar kritik saya mudah diterima.",
      "D": "Membungkusnya dengan humor agar dia tidak merasa sedang dikritik."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 519,
    "question": "Harapan terbesar saya untuk masa tua adalah...",
    "options": {
      "A": "Hidup bahagia bersama cucu dalam suasana yang damai tenteram.",
      "B": "Menikmati ketenangan hidup dengan rencana keuangan yang sangat matang.",
      "C": "Dihormati karena pencapaian besar yang telah saya raih sebelumnya.",
      "D": "Tetap aktif bersosialisasi dan melakukan banyak kegiatan yang menyenangkan."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 520,
    "question": "Sikap saya saat harus menunggu antrean panjang adalah...",
    "options": {
      "A": "Menunggu dengan tenang sambil mengamati suasana di sekitar saya.",
      "B": "Merasa tidak sabar dan terus memperhatikan jam dengan kesal.",
      "C": "Menggunakan waktu untuk mengecek kembali rencana tugas-tugas harian.",
      "D": "Mencoba mengajak bicara orang di sekitar agar tidak bosan."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 521,
    "question": "Jika harus mengerjakan proyek secara tim, saya lebih suka...",
    "options": {
      "A": "Menjadi pengawas kualitas yang memeriksa setiap rincian pekerjaan tim.",
      "B": "Menjadi anggota pelaksana yang menjaga keharmonisan antar sesama rekan.",
      "C": "Menjadi pemberi ide kreatif yang membuat tim selalu bersemangat.",
      "D": "Menjadi pengarah utama yang memastikan semua target tercapai segera."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 522,
    "question": "Dalam sebuah pertemanan, saya paling menghargai sosok yang...",
    "options": {
      "A": "Sabar, pengertian, dan mampu menjaga kedamaian dalam hubungan pertemanan.",
      "B": "Loyal, ambisius, dan selalu mendukung saya untuk mencapai kesuksesan.",
      "C": "Jujur, teliti, dan memiliki pemikiran yang sangat mendalam sekali.",
      "D": "Humoris, ceria, dan selalu asyik diajak pergi ke mana saja."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 523,
    "question": "Bagaimana sikap saya jika orang tua membutuhkan bantuan?",
    "options": {
      "A": "Memberikan solusi praktis yang paling efektif untuk menyelesaikan masalah mereka.",
      "B": "Melayani mereka dengan sabar dan penuh rasa hormat yang tulus.",
      "C": "Segera membantu dengan penuh keceriaan agar mereka merasa senang.",
      "D": "Membantu dengan sangat hati-hati dan memperhatikan setiap kebutuhan detailnya."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 524,
    "question": "Gaya kepemimpinan saya saat mengoordinasi acara besar adalah...",
    "options": {
      "A": "Sistematis, detail dalam perencanaan, dan sangat mematuhi jadwal acara.",
      "B": "Antusias, fleksibel, dan sangat melibatkan setiap anggota dalam keceriaan.",
      "C": "Disiplin, berorientasi hasil, dan memberikan instruksi yang sangat tegas.",
      "D": "Tenang, akomodatif, dan selalu mengutamakan mufakat dalam setiap keputusan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 525,
    "question": "Saat menghadapi kemacetan parah di jalan, saya biasanya...",
    "options": {
      "A": "Bernyanyi atau mendengarkan radio yang lucu agar tidak bosan.",
      "B": "Terus mencari jalan alternatif agar lebih cepat sampai ke tujuan.",
      "C": "Menganalisis rute yang paling efisien untuk perjalanan saya berikutnya.",
      "D": "Pasrah mengikuti alur kemacetan sambil menikmati waktu tenang sendiri."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 526,
    "question": "Jika terjadi perdebatan di grup percakapan, saya akan...",
    "options": {
      "A": "Menyampaikan pendapat saya secara kuat agar masalah segera diputuskan.",
      "B": "Mengirimkan stiker lucu untuk mencairkan suasana yang sedang tegang.",
      "C": "Menjadi pendengar yang netral demi menjaga keutuhan grup tersebut.",
      "D": "Memberikan argumen yang didukung fakta-fakta logis agar perdebatan berakhir."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 527,
    "question": "Dalam memilih hunian masa depan, prioritas utama saya adalah...",
    "options": {
      "A": "Suasana yang tenang, asri, dan memberikan rasa nyaman penuh.",
      "B": "Lokasi yang strategis, ramai, dan dekat dengan pusat hiburan.",
      "C": "Rumah yang megah dan mencerminkan status kesuksesan hidup saya.",
      "D": "Lingkungan yang aman, teratur, dan memiliki fasilitas yang lengkap."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 528,
    "question": "Cara saya menanggapi teman yang telat menjemput saya...",
    "options": {
      "A": "Menegurnya agar lebih menghargai waktu saya yang sangat berharga.",
      "B": "Bercanda bahwa dia harus mentraktir saya karena sudah menunggu lama.",
      "C": "Merasa kesal dalam hati dan mulai memikirkan ketepatwaktuan dia.",
      "D": "Menunggu dengan sabar dan tidak mempermasalahkannya asalkan dia datang."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 529,
    "question": "Apa yang paling memotivasi saya untuk bekerja setiap hari?",
    "options": {
      "A": "Keamanan finansial dan lingkungan kerja yang penuh rasa kekeluargaan.",
      "B": "Interaksi sosial yang menyenangkan dan pertemuan dengan banyak rekan baru.",
      "C": "Kesempatan untuk menciptakan hasil karya yang sempurna dan sangat rapi.",
      "D": "Peluang untuk meraih prestasi dan kenaikan jabatan yang lebih tinggi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 530,
    "question": "Kebiasaan saya sebelum memulai hari libur biasanya adalah...",
    "options": {
      "A": "Spontan merencanakan kegiatan seru bersama teman-teman terdekat saya.",
      "B": "Menyiapkan daftar tugas produktif yang ingin saya selesaikan segera.",
      "C": "Menikmati waktu bangun tidur yang lebih santai tanpa jadwal kaku.",
      "D": "Merapikan rumah agar suasana liburan terasa lebih teratur dan bersih."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 531,
    "question": "Saat menghadapi perubahan teknologi di kantor, sikap saya...",
    "options": {
      "A": "Sangat antusias mencobanya meskipun saya belum mahir cara menggunakannya.",
      "B": "Cenderung menunggu orang lain mahir dulu baru saya mengikuti perlahan.",
      "C": "Mempelajari manualnya secara mendalam sebelum saya mulai menggunakannya secara resmi.",
      "D": "Hanya menggunakan teknologi tersebut jika benar-benar meningkatkan efisiensi kerja."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 532,
    "question": "Jika teman saya bercerita tentang rahasianya, saya akan...",
    "options": {
      "A": "Sangat antusias mendengarkannya dan terkadang sulit menjaga agar tetap rahasia.",
      "B": "Memberikan saran praktis agar rahasia tersebut tidak menjadi beban baginya.",
      "C": "Menyimpannya dengan sangat rapat karena menghargai kepercayaan yang diberikan.",
      "D": "Mendengarkannya saja tanpa menghakimi dan tetap menjadi teman setia."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 533,
    "question": "Dalam merayakan hari besar keluarga, saya lebih suka...",
    "options": {
      "A": "Kebersamaan sederhana yang penuh kehangatan dan rasa kasih sayang.",
      "B": "Pesta yang meriah dengan banyak hiburan dan tawa bersama.",
      "C": "Acara yang menunjukkan kesuksesan dan kebanggaan seluruh anggota keluarga.",
      "D": "Acara yang khidmat, teratur, dan memperhatikan setiap tradisi keluarga."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 534,
    "question": "Sebagai pimpinan, gaya saya dalam mengevaluasi bawahan adalah...",
    "options": {
      "A": "Memberikan masukan yang sangat detail berdasarkan data kinerja yang ada.",
      "B": "Memberikan apresiasi yang tinggi agar semangat mereka terus terjaga.",
      "C": "Menitikberatkan pada target pencapaian agar performa mereka segera meningkat.",
      "D": "Melakukannya dengan lembut agar tidak ada anggota merasa tertekan batin."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 535,
    "question": "Reaksi saya saat melihat rencana bisnis saya gagal adalah...",
    "options": {
      "A": "Mengevaluasi kesalahan strategi dan segera mencoba lagi dengan semangat baru.",
      "B": "Menerima kenyataan dengan sabar dan mencoba tetap tenang menghadapinya.",
      "C": "Segera mencari peluang bisnis lain yang mungkin lebih menyenangkan dijalankan.",
      "D": "Merenungi kegagalan tersebut dan butuh waktu lama untuk mulai lagi."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 536,
    "question": "Jika saya merasa disalahkan secara tidak adil, saya...",
    "options": {
      "A": "Memilih untuk diam agar tidak memperbesar konflik yang sedang terjadi.",
      "B": "Memikirkan alasan orang tersebut menyalahkan saya dan merasa sedih batin.",
      "C": "Menuntut penjelasan dan membuktikan kebenaran dengan argumen yang kuat.",
      "D": "Menanggapinya dengan candaan namun tetap membela diri secara sangat halus."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 537,
    "question": "Dalam mengambil keputusan membeli kendaraan baru, saya mengutamakan...",
    "options": {
      "A": "Warna dan model yang trendi agar terlihat menarik di jalanan.",
      "B": "Performa mesin yang tangguh dan nilai jual kembali yang tinggi.",
      "C": "Keamanan fitur dan rincian spesifikasi teknis yang sangat jelas sekali.",
      "D": "Kenyamanan suspensi dan ruang kabin yang memberikan rasa sangat santai."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 538,
    "question": "Cara saya memperkenalkan produk baru dalam sebuah presentasi...",
    "options": {
      "A": "Penuh semangat, ekspresif, dan sering membuat audiens tertawa gembira.",
      "B": "Terstruktur, menggunakan data akurat, dan menjelaskan secara sangat detail sekali.",
      "C": "Tenang, sopan, dan memberikan ruang bagi audiens untuk bertanya langsung.",
      "D": "Lugas, menekankan poin penting, dan fokus pada manfaat produk tersebut."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 539,
    "question": "Tujuan utama saya menabung uang dalam jangka panjang adalah...",
    "options": {
      "A": "Memiliki modal besar untuk membangun bisnis atau memperluas kekuasaan finansial.",
      "B": "Mendapatkan rasa aman dan ketenangan pikiran secara finansial jangka panjang.",
      "C": "Persiapan dana darurat jika terjadi hal-hal yang tidak direncanakan nantinya.",
      "D": "Agar bisa menikmati liburan mewah dan acara senang-senang di masa depan."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 540,
    "question": "Kebiasaan saya saat sedang merawat diri di salon atau klinik...",
    "options": {
      "A": "Memilih jenis perawatan yang paling efektif untuk hasil yang terlihat nyata.",
      "B": "Memperhatikan setiap langkah perawatan dengan tingkat ketelitian yang sangat tinggi.",
      "C": "Menikmati proses perawatan dengan tenang dan merasa sangat rileks batin.",
      "D": "Mengajak bicara perawatnya agar proses perawatan terasa lebih menyenangkan sekali."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 541,
    "question": "Saat rekan kerja mengeluh tentang gaji, respons saya biasanya...",
    "options": {
      "A": "Mendengarkan keluhannya dengan sabar tanpa memberikan komentar yang menyinggung perasaan.",
      "B": "Mengajaknya bercanda agar dia tidak terlalu larut dalam kesedihan tersebut.",
      "C": "Memintanya bekerja lebih giat agar prestasinya layak mendapatkan kenaikan gaji.",
      "D": "Menganalisis perbandingan gaji di pasar agar dia memahami posisinya tersebut."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 542,
    "question": "Jika teman mengajak pergi konser musik secara mendadak, saya...",
    "options": {
      "A": "Memikirkan apakah besok saya ada tugas penting yang harus dikerjakan.",
      "B": "Ikut saja jika teman-teman yang lain juga semuanya pergi bersama.",
      "C": "Sangat antusias karena sangat suka keramaian dan suasana konser seru.",
      "D": "Melihat dulu siapa artisnya apakah sepadan dengan biaya yang dikeluarkan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 543,
    "question": "Bagaimana reaksi saya jika saudara saya melahirkan anak pertama?",
    "options": {
      "A": "Sangat gembira dan segera menjenguknya dengan membawa kado yang menarik.",
      "B": "Mengucapkan selamat dan memperhatikan setiap rincian kebutuhan ibu dan bayi.",
      "C": "Memberikan saran perawatan bayi yang paling efektif berdasarkan informasi medis akurat.",
      "D": "Tersenyum bahagia dan mendoakan agar ibu dan bayi selalu sehat."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 544,
    "question": "Sebagai pimpinan proyek sosial, kriteria sukses bagi saya adalah...",
    "options": {
      "A": "Jumlah bantuan yang terkumpul melebihi target yang telah ditentukan sebelumnya.",
      "B": "Proyek berjalan dengan damai tanpa ada konflik antar relawan terlibat.",
      "C": "Semua relawan merasa senang dan bangga terlibat dalam proyek tersebut.",
      "D": "Penyaluran bantuan dilakukan dengan sangat teratur dan tercatat secara rapi."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 545,
    "question": "Jika saya merasa dicurangi dalam sebuah permainan kartu, saya...",
    "options": {
      "A": "Menegur pelaku kecurangan tersebut secara tegas agar permainan berjalan adil jujur.",
      "B": "Diam saja demi menjaga suasana agar tidak menjadi kaku dan tegang.",
      "C": "Tertawa dan membiarkannya saja asalkan permainannya tetap berjalan sangat seru.",
      "D": "Mencatat kecurangannya dan mungkin tidak mau bermain lagi dengannya nanti."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 546,
    "question": "Saat melihat berita tentang keberhasilan orang lain, saya merasa...",
    "options": {
      "A": "Tersenyum bangga dan mendoakan agar keberhasilannya memberikan kebaikan bagi banyak orang.",
      "B": "Menganalisis strategi keberhasilannya untuk saya terapkan dalam kehidupan pribadi saya.",
      "C": "Termotivasi untuk bekerja lebih keras lagi agar bisa meraih kesuksesan serupa.",
      "D": "Ikut senang dan segera menceritakannya kepada teman-teman sebagai inspirasi baru."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 547,
    "question": "Dalam mengambil keputusan investasi rumah, saya lebih mementingkan...",
    "options": {
      "A": "Keamanan konstruksi bangunan dan rincian legalitas yang sangat jelas sekali.",
      "B": "Kenyamanan tetangga dan suasana asri yang memberikan rasa ketenangan batin.",
      "C": "Lingkungan yang ramai dan dekat dengan banyak tempat nongkrong seru.",
      "D": "Potensi kenaikan harga properti yang sangat pesat di masa depan nanti."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 548,
    "question": "Kebiasaan saya saat sedang mencuci piring di dapur rumah...",
    "options": {
      "A": "Memastikan tidak ada sisa lemak yang menempel pada peralatan makan tersebut.",
      "B": "Mencuci piring sambil mendengarkan musik atau menonton video yang lucu.",
      "C": "Mencuci piring dengan tenang dan menikmati setiap aliran air pada tangan.",
      "D": "Mencuci piring dengan cepat agar dapur segera bersih dan terlihat rapi."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 549,
    "question": "Cara saya menanggapi teman yang lupa membalas chat saya...",
    "options": {
      "A": "Menunggu saja sampai dia memiliki waktu luang untuk membalas chat saya.",
      "B": "Meneleponnya jika hal tersebut sangat penting dan harus segera diputuskan.",
      "C": "Berpikir apakah kata-kata dalam chat saya sebelumnya menyinggung perasaan teman tersebut.",
      "D": "Mengirimkan chat lucu atau meme agar dia segera membalas chat saya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 550,
    "question": "Mengenai asuransi jiwa, pertimbangan utama saya dalam memilih...",
    "options": {
      "A": "Yang preminya terjangkau dan pendaftarannya bisa dilakukan lewat aplikasi cepat.",
      "B": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum.",
      "C": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga yang ada.",
      "D": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 551,
    "question": "Jika tugas kantor saya tiba-tiba ditolak oleh atasan, saya...",
    "options": {
      "A": "Segera memperbaiki kesalahan tersebut agar tidak membuang waktu lebih lama lagi.",
      "B": "Tetap ceria dan berjanji akan memberikan hasil yang lebih menarik lagi.",
      "C": "Menerima keputusan tersebut dengan tenang dan mengerjakannya ulang sesuai arahan baru.",
      "D": "Menganalisis setiap bagian yang ditolak agar saya paham betul letak kesalahannya."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 552,
    "question": "Saat teman saya sedang merasa sangat kesepian, saya akan...",
    "options": {
      "A": "Mendengarkan keluh kesahnya dengan penuh empati dan perhatian yang sangat mendalam.",
      "B": "Memberikan saran kepadanya untuk mencari hobi baru yang lebih produktif harian.",
      "C": "Menemaninya dengan sabar di rumah agar dia tidak merasa sendirian lagi.",
      "D": "Mengajaknya ke acara pesta atau tempat ramai agar dia kembali ceria."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 553,
    "question": "Dalam mengatur pembagian warisan keluarga, sikap saya cenderung...",
    "options": {
      "A": "Mendorong agar pembagian dilakukan secara efisien sesuai dengan kontribusi masing-masing anggota.",
      "B": "Berusaha menjadi penengah agar tidak terjadi pertengkaran antar anggota keluarga besar.",
      "C": "Menginginkan rincian aset yang sangat jelas dan tertulis secara sangat hukum.",
      "D": "Mengusulkan pembagian yang bisa membuat semua orang merasa senang dan adil."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 554,
    "question": "Sebagai pimpinan sebuah proyek renovasi, fokus utama saya adalah...",
    "options": {
      "A": "Menjaga hubungan baik dengan para tetangga agar renovasi tidak menimbulkan konflik.",
      "B": "Menciptakan suasana kerja para tukang yang penuh semangat dan juga ceria.",
      "C": "Memastikan renovasi selesai tepat waktu sesuai dengan target yang sudah ditentukan.",
      "D": "Memperhatikan setiap detail material bangunan agar hasilnya terlihat sangat sempurna sekali."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 555,
    "question": "Jika saya merasa tertekan karena masalah keuangan, saya akan...",
    "options": {
      "A": "Mencari hiburan yang murah meriah bersama teman agar stres sedikit berkurang.",
      "B": "Mencatat setiap pengeluaran dan membuat rencana penghematan yang sangat ketat sekali.",
      "C": "Berusaha tetap tenang dan percaya bahwa rezeki akan datang di waktu tepat.",
      "D": "Bekerja lebih keras dan mencari penghasilan tambahan secepat mungkin tanpa menunda."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 556,
    "question": "Saat terjadi perdebatan politik di lingkungan rumah, saya cenderung...",
    "options": {
      "A": "Menyampaikan pendapat saya secara tegas berdasarkan keyakinan dan prinsip yang kuat.",
      "B": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua orang tertawa.",
      "C": "Memilih untuk tidak terlibat dalam perdebatan tersebut demi menjaga keharmonisan bertetangga.",
      "D": "Menganalisis argumen setiap pihak secara logis berdasarkan fakta-fakta yang ada saat itu."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 557,
    "question": "Dalam mengambil keputusan memilih asuransi pendidikan anak, saya memilih...",
    "options": {
      "A": "Yang memberikan banyak bonus tambahan seperti tabungan liburan keluarga yang seru.",
      "B": "Yang sudah terbukti terpercaya oleh banyak orang tua lainnya selama bertahun-tahun.",
      "C": "Yang memberikan jaminan dana pendidikan paling besar di masa depan nanti.",
      "D": "Yang memiliki rincian polis paling transparan dan terpercaya secara administrasi hukum."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 558,
    "question": "Kebiasaan saya saat sedang merawat taman di sore hari...",
    "options": {
      "A": "Memperhatikan kondisi setiap daun dan akar tanaman dengan tingkat ketelitian tinggi.",
      "B": "Merawat tanaman sambil mengajak mereka bicara agar tumbuh dengan sangat ceria.",
      "C": "Menata tanaman agar terlihat sangat rapi dan memberikan kesan rumah berkelas.",
      "D": "Menikmati ketenangan di kebun sambil menyiram tanaman dengan penuh rasa sabar."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 559,
    "question": "Cara saya menanggapi teman yang berbuat salah kepada saya...",
    "options": {
      "A": "Merasa sedih secara mendalam dan butuh waktu lama untuk memulihkan kepercayaan.",
      "B": "Menegurnya agar dia menyadari kesalahannya dan tidak mengulanginya lagi di mendatang.",
      "C": "Memaafkannya dengan cepat agar pertemanan kami tetap berjalan dengan sangat asyik.",
      "D": "Mencoba memaklumi kesalahannya demi menjaga keharmonisan dalam hubungan pertemanan kami tersebut."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 560,
    "question": "Mengenai asuransi gadget, pertimbangan utama saya dalam memilih adalah...",
    "options": {
      "A": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat.",
      "B": "Yang memberikan jaminan ganti rugi total jika gadget saya hilang rusak.",
      "C": "Yang memiliki rincian perlindungan paling lengkap dan transparan secara administrasi hukum.",
      "D": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 561,
    "question": "Jika teman mengajak pergi ke museum seni, saya akan...",
    "options": {
      "A": "Mempelajari sejarah senimannya agar saya bisa memahami makna karya seninya tersebut.",
      "B": "Antusias karena bisa berfoto dengan latar belakang karya seni sangat estetik.",
      "C": "Menikmati ketenangan suasana museum dan meresapi setiap karya seni secara perlahan.",
      "D": "Memperhatikan setiap detail teknik lukisan atau patung dengan tingkat ketelitian tinggi."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 562,
    "question": "Saat menghadapi rekan kerja yang suka menyela pembicaraan, saya...",
    "options": {
      "A": "Menunggu dia selesai bicara baru kemudian saya menyampaikan poin penting saya.",
      "B": "Tertawa dan membiarkannya bicara dulu lalu saya lanjut bicara lagi nanti.",
      "C": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja.",
      "D": "Menegurnya agar mendengarkan saya dulu sampai selesai demi kelancaran komunikasi tim."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 563,
    "question": "Bagaimana reaksi saya jika saudara saya gagal dalam ujian?",
    "options": {
      "A": "Membantunya menganalisis kekurangan belajarnya agar bisa lulus di ujian berikutnya nanti.",
      "B": "Ikut merasa sedih dan memberikan semangat secara emosional yang mendalam bagi.",
      "C": "Mendoakannya agar diberikan kesabaran dan tetap tekun belajar demi masa depan.",
      "D": "Menghiburnya agar tidak terlalu larut dalam kesedihan dan segera semangat belajar."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 564,
    "question": "Sebagai pimpinan komunitas hobi, fokus utama saya adalah pada...",
    "options": {
      "A": "Keahlian anggota yang terus meningkat melalui pelatihan yang diadakan komunitas kami.",
      "B": "Sistem pengelolaan komunitas yang rapi dan terdokumentasi secara sangat baik sekali.",
      "C": "Rasa kekeluargaan antar anggota agar komunitas tetap solid dan penuh kedamaian.",
      "D": "Keseruan acara komunitas yang bisa menarik minat banyak anggota baru bergabung."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 565,
    "question": "Jika saya merasa dibicarakan di belakang oleh teman sendiri, saya...",
    "options": {
      "A": "Merasa sangat kecewa dan mulai menjaga jarak dengan teman tersebut sementara.",
      "B": "Mencoba mengklarifikasinya dengan cara yang santai agar tidak merusak pertemanan kami.",
      "C": "Membiarkannya saja karena saya yakin kebenaran pada akhirnya akan terungkap sendiri.",
      "D": "Menghadapi pembuat gosip tersebut dan menuntut penjelasan yang jujur darinya segera."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 566,
    "question": "Saat melihat orang lain melakukan kebaikan secara diam-diam, saya...",
    "options": {
      "A": "Menghargai tindakannya sebagai bukti bahwa masih banyak orang baik di dunia.",
      "B": "Merenungi makna kebaikan tersebut bagi kehidupan manusia secara sangat mendalam sekali.",
      "C": "Tersenyum bangga dan mendoakan agar kebaikannya mendapatkan balasan yang setimpal kelak.",
      "D": "Merasa terharu dan ingin segera meniru perbuatan baiknya tersebut dalam hidup."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 567,
    "question": "Dalam mengambil keputusan memilih asuransi syariah, saya mengutamakan...",
    "options": {
      "A": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "B": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah yang tegas.",
      "C": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan.",
      "D": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 568,
    "question": "Kebiasaan saya saat sedang merawat hewan peliharaan harian adalah...",
    "options": {
      "A": "Menyayangi hewan peliharaan dengan penuh kesabaran dan ketenangan di waktu luang.",
      "B": "Mengajak hewan peliharaan bermain agar mereka selalu merasa senang dan ceria.",
      "C": "Memberikan pakan dan vitamin terbaik agar kesehatan hewan peliharaan tetap terjaga.",
      "D": "Memperhatikan setiap detail kebersihan kandang dan tubuh hewan peliharaan dengan teliti."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 569,
    "question": "Cara saya menanggapi teman yang berbuat curang dalam bisnis...",
    "options": {
      "A": "Merasa sangat kecewa dan mulai mempertanyakan integritas moral teman tersebut mendalam.",
      "B": "Menuntut pertanggungjawaban yang jelas dan segera mengakhiri hubungan bisnis secara tegas.",
      "C": "Mencoba membicarakannya baik-baik demi menjaga kedamaian dalam hubungan bisnis kami.",
      "D": "Menghentikan kerja sama sambil berharap dia akan menyadari kesalahannya tersebut nanti."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 570,
    "question": "Mengenai asuransi tenaga kerja, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memiliki rincian polis paling jelas dan transparan secara administrasi hukum.",
      "B": "Yang memberikan banyak manfaat tambahan seperti pelatihan keahlian yang sangat seru.",
      "C": "Yang memberikan jaminan perlindungan paling lengkap selama saya bekerja di perusahaan.",
      "D": "Yang sudah terbukti terpercaya oleh banyak karyawan lainnya selama bertahun-tahun."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 571,
    "question": "Jika teman mengajak pergi ke festival kuliner mendadak, saya...",
    "options": {
      "A": "Menikmati suasana festival dan mencoba makanan yang tidak terlalu aneh bagi.",
      "B": "Memilih makanan yang paling populer untuk membuktikan rasa penasaran saya kepada.",
      "C": "Sangat antusias karena suka mencoba berbagai makanan baru yang sangat enak.",
      "D": "Mempelajari daftar stand makanan agar kunjungan kami berjalan secara sangat efisien."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 572,
    "question": "Saat menghadapi rekan kerja yang suka memaksakan kehendak, saya...",
    "options": {
      "A": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja.",
      "B": "Menegurnya agar menghargai pendapat anggota lain demi kelancaran pekerjaan tim kami.",
      "C": "Mencoba mengalihkan pembicaraan dengan candaan agar suasana tidak menjadi kaku.",
      "D": "Mendengarkan pendapatnya dengan sabar dan mencoba mencari titik temu yang adil."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 573,
    "question": "Bagaimana reaksi saya jika ada saudara yang menang lomba?",
    "options": {
      "A": "Tersenyum tulus dan mendoakan agar kemenangannya memberikan kebahagiaan bagi keluarga besar.",
      "B": "Mengucapkan selamat dan menanyakan tips kemenangannya secara sangat detail dan mendalam.",
      "C": "Merayakannya dengan antusiasme yang sangat tinggi dan ikut merasa sangat bangga.",
      "D": "Menjadikannya motivasi untuk mengasah kemampuan saya lagi agar bisa menang serupa."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 574,
    "question": "Sebagai pimpinan proyek konstruksi, fokus utama saya adalah pada...",
    "options": {
      "A": "Anggaran biaya yang sangat terinci dan pengerjaan yang sesuai jadwal ketat.",
      "B": "Kekuatan bangunan yang bisa menjamin keamanan seluruh penghuni bangunan tersebut nantinya.",
      "C": "Kerja sama antar pekerja yang harmonis tanpa adanya konflik internal pekerja.",
      "D": "Desain bangunan yang unik dan bisa menarik perhatian banyak orang dunia."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 575,
    "question": "Jika saya merasa disingkirkan oleh teman-teman dalam pergaulan, saya...",
    "options": {
      "A": "Membiarkannya saja karena saya yakin akan menemukan teman baru yang lebih.",
      "B": "Menanyakan langsung alasan mengapa mereka menjauhi saya agar masalah segera selesai.",
      "C": "Mencoba mencari perhatian mereka kembali dengan cara yang menyenangkan dan sangat seru.",
      "D": "Merasa sangat sedih dan mulai mempertanyakan kualitas pertemanan kami selama ini."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 576,
    "question": "Saat melihat berita tentang bencana kemanusiaan di dunia, saya...",
    "options": {
      "A": "Berdoa dengan tulus agar penderitaan mereka segera berakhir dan diberikan ketabahan.",
      "B": "Menganalisis penyebab bencana tersebut dan merenungi nasib manusia di dunia ini.",
      "C": "Sangat sedih dan segera membagikan berita tersebut agar banyak yang membantu.",
      "D": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepat mungkin."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 577,
    "question": "Dalam mengambil keputusan memilih asuransi syariah pendidikan, saya memilih...",
    "options": {
      "A": "Yang memberikan jaminan dana pendidikan sesuai dengan prinsip-prinsip ekonomi syariah.",
      "B": "Yang memberikan banyak bonus tambahan seperti tabungan umroh keluarga yang seru.",
      "C": "Yang sudah terbukti memberikan rasa tenang dan keberkahan bagi masa depan.",
      "D": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 578,
    "question": "Kebiasaan saya saat sedang merawat rambut di salon adalah...",
    "options": {
      "A": "Memperhatikan setiap langkah perawatan rambut dengan tingkat ketelitian sangat tinggi sekali.",
      "B": "Mengajak bicara kapsternya agar proses perawatan rambut terasa lebih sangat menyenangkan.",
      "C": "Menikmati proses perawatan rambut dengan tenang dan merasa sangat rileks batin.",
      "D": "Memilih jenis perawatan rambut yang paling efektif untuk kesehatan rambut saya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 579,
    "question": "Cara saya menanggapi teman yang berbohong demi kebaikan saya...",
    "options": {
      "A": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan pertemanan kami.",
      "B": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan pertemanan kuat.",
      "C": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada sekadar menjaga perasaan.",
      "D": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga perasaan saya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 580,
    "question": "Mengenai asuransi kecelakaan kerja, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya.",
      "B": "Yang memberikan jaminan ganti rugi paling besar bagi seluruh karyawan yang ada.",
      "C": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat.",
      "D": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 581,
    "question": "Jika teman mengajak pergi ke pertunjukan sirkus, saya akan...",
    "options": {
      "A": "Memilih posisi duduk paling depan untuk melihat atraksi secara lebih nyata.",
      "B": "Sangat antusias karena suka atraksi yang unik dan menghibur hati.",
      "C": "Menikmati pertunjukan sirkus dengan tenang dan merasa kagum atas kemampuan mereka.",
      "D": "Memperhatikan setiap detail gerakan pemain sirkus dengan tingkat ketelitian sangat tinggi."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 582,
    "question": "Saat menghadapi rekan kerja yang suka mengadu domba, saya...",
    "options": {
      "A": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua orang tertawa.",
      "B": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja.",
      "C": "Menghadapi rekan tersebut secara langsung agar tidak memecah belah persatuan tim.",
      "D": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik diciptakannya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 583,
    "question": "Bagaimana reaksi saya jika ada saudara yang melahirkan anak?",
    "options": {
      "A": "Tersenyum bahagia dan mendoakan agar ibu dan bayi selalu diberikan kesehatan.",
      "B": "Sangat gembira dan segera menjenguknya dengan membawa kado yang sangat menarik.",
      "C": "Mengucapkan selamat dan memperhatikan setiap rincian kebutuhan ibu dan bayi tersebut.",
      "D": "Memberikan saran perawatan bayi yang paling efektif berdasarkan informasi medis yang akurat."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 584,
    "question": "Sebagai pimpinan organisasi kepemudaan, fokus utama saya adalah pada...",
    "options": {
      "A": "Pengembangan karakter pemuda yang sangat terstruktur melalui pelatihan yang sangat disiplin.",
      "B": "Kemandirian pemuda yang bisa memberikan kontribusi nyata bagi kemajuan bangsa kita.",
      "C": "Kerukunan antar pemuda agar organisasi tetap solid dan penuh kedamaian batin.",
      "D": "Kegiatan yang inovatif dan bisa meningkatkan eksistensi pemuda di mata dunia."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 585,
    "question": "Jika saya merasa dikritik habis-habisan oleh atasan saya sendiri, saya...",
    "options": {
      "A": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja yang baik.",
      "B": "Menerimanya dengan senyuman dan berjanji akan memberikan performa yang lebih ceria.",
      "C": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan bersama tim.",
      "D": "Memikirkan kritik tersebut secara mendalam dan merasa sangat terpukul oleh kata-katanya."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 586,
    "question": "Saat melihat orang lain melakukan perbuatan curang secara diam-diam...",
    "options": {
      "A": "Berdoa agar dia segera menyadari kesalahannya dan kembali ke jalan yang benar.",
      "B": "Menghargai kejujuran sebagai bukti bahwa masih banyak orang baik di dunia.",
      "C": "Merasa geram dan ingin segera melaporkan perbuatannya agar dia mendapatkan sanksi.",
      "D": "Merenungi makna kejujuran tersebut bagi kehidupan manusia secara sangat mendalam sekali."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 587,
    "question": "Dalam mengambil keputusan memilih asuransi syariah kesehatan, saya memilih...",
    "options": {
      "A": "Yang memberikan jaminan perlindungan sesuai dengan prinsip-prinsip ekonomi syariah yang tegas.",
      "B": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga.",
      "C": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan.",
      "D": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 588,
    "question": "Kebiasaan saya saat sedang merawat wajah di klinik kecantikan...",
    "options": {
      "A": "Memilih jenis perawatan wajah yang paling efektif untuk kesehatan kulit wajah saya.",
      "B": "Mengajak bicara perawatnya agar proses perawatan wajah terasa lebih sangat menyenangkan.",
      "C": "Memperhatikan setiap langkah perawatan wajah dengan tingkat ketelitian sangat tinggi sekali.",
      "D": "Menikmati proses perawatan wajah dengan tenang dan merasa sangat rileks batin."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 589,
    "question": "Cara saya menanggapi teman yang berbuat salah di kantor...",
    "options": {
      "A": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan kerja kami tersebut.",
      "B": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada sekadar menjaga prestasi.",
      "C": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan kerja yang kuat.",
      "D": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga prestasi kerjanya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 590,
    "question": "Mengenai asuransi jiwa berjangka, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga yang ada.",
      "B": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum.",
      "C": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya.",
      "D": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 591,
    "question": "Jika teman mengajak pergi ke pameran buku, saya...",
    "options": {
      "A": "Antusias karena bisa melihat buku baru yang menarik dan bertemu teman.",
      "B": "Menikmati suasana pameran dan mencari buku yang ceritanya menenangkan bagi batin.",
      "C": "Mempelajari daftar penerbit dan jadwal acara dengan tingkat ketelitian yang tinggi.",
      "D": "Mencari buku yang bisa menunjang produktivitas kerja saya agar lebih efisien."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 592,
    "question": "Saat menghadapi rekan kerja yang suka menyalahkan orang lain, saya...",
    "options": {
      "A": "Menghadapi rekan tersebut secara langsung agar tidak merusak keharmonisan tim kami.",
      "B": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik diciptakannya.",
      "C": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua orang tertawa.",
      "D": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 593,
    "question": "Bagaimana reaksi saya jika ada saudara yang tertimpa musibah?",
    "options": {
      "A": "Mencari cara praktis untuk membantunya menyelesaikan masalah tersebut secepat mungkin.",
      "B": "Menganalisis penyebab masalahnya secara logis untuk mencari jalan keluar yang tepat.",
      "C": "Menemaninya dengan sabar dan memberikan dukungan emosional yang menenangkan bagi dia.",
      "D": "Sangat sedih dan segera memberikan semangat emosional agar dia kuat menghadapinya."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 594,
    "question": "Sebagai pimpinan, fokus utama saya dalam membangun budaya tim...",
    "options": {
      "A": "Kreativitas ide yang inovatif dan bisa menarik perhatian banyak orang dunia.",
      "B": "Kedisiplinan anggota tim yang sangat tinggi melalui penerapan aturan yang sangat tegas.",
      "C": "Kerukunan antar anggota tim agar tim tetap solid dan penuh kedamaian.",
      "D": "Kemandirian anggota tim yang bisa memberikan kontribusi nyata bagi kesuksesan bersama."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 595,
    "question": "Jika saya merasa dikritik secara pedas oleh rekan kerja saya...",
    "options": {
      "A": "Menerimanya dengan senyuman dan berjanji akan memberikan performa yang lebih ceria.",
      "B": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja yang baik.",
      "C": "Memikirkan kritik tersebut secara mendalam dan merasa sangat terpukul oleh kata-katanya.",
      "D": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan bersama tim."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 596,
    "question": "Saat melihat orang lain melakukan perbuatan curang secara diam-diam...",
    "options": {
      "A": "Berdoa agar dia segera menyadari kesalahannya dan kembali ke jalan yang benar.",
      "B": "Merasa geram dan ingin segera melaporkan perbuatannya agar dia mendapatkan sanksi.",
      "C": "Menghargai kejujuran sebagai bukti nyata bahwa masih banyak orang baik dunia.",
      "D": "Merenungi makna kejujuran tersebut bagi kehidupan manusia secara sangat mendalam sekali."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 597,
    "question": "Dalam mengambil keputusan memilih asuransi syariah pendidikan tinggi, saya memilih...",
    "options": {
      "A": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah yang tegas.",
      "B": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan.",
      "C": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "D": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 598,
    "question": "Kebiasaan saya saat sedang merawat kesehatan tubuh harian adalah...",
    "options": {
      "A": "Menikmati proses olahraga dengan tenang dan merasa sangat rileks batin saya.",
      "B": "Memperhatikan setiap detail asupan nutrisi dan jadwal olahraga dengan sangat teliti.",
      "C": "Mengajak teman berolahraga bersama agar prosesnya terasa lebih sangat menyenangkan sekali.",
      "D": "Memilih jenis olahraga yang paling efektif untuk menjaga kebugaran tubuh saya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 599,
    "question": "Cara saya menanggapi teman yang berbuat salah di lingkungan sosial...",
    "options": {
      "A": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga hubungannya.",
      "B": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan sosial kuat.",
      "C": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan sosial kami.",
      "D": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga hubungan."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 600,
    "question": "Mengenai asuransi kematian berjangka, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat.",
      "B": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum.",
      "C": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya.",
      "D": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga yang ada."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 601,
    "question": "Saat harus merapikan file di komputer, saya cenderung...",
    "options": {
      "A": "Membiarkan apa adanya selama file masih bisa saya temukan.",
      "B": "Menghapus file lama agar ruang penyimpanan lebih efisien.",
      "C": "Menumpuknya saja yang penting desktop terlihat meriah.",
      "D": "Menyusun file dalam folder-folder dengan nama yang sangat spesifik."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 602,
    "question": "Jika teman dekat sedang curhat masalah yang sangat berat...",
    "options": {
      "A": "Menanyakan solusi apa yang sudah dia siapkan agar masalah tuntas.",
      "B": "Memberikan pelukan dan mengajak tertawa agar bebannya berkurang.",
      "C": "Mendengarkan dengan serius dan mencoba merasakan penderitaannya.",
      "D": "Menemaninya dalam diam agar dia merasa tidak sendiri."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 603,
    "question": "Ketika orang tua mendikte pilihan hidup saya, reaksi saya...",
    "options": {
      "A": "Mengalah demi menjaga keharmonisan dan kedamaian di rumah.",
      "B": "Merasa sedih mendalam dan merenungi setiap kata-kata mereka.",
      "C": "Berargumen secara terbuka untuk mempertahankan prinsip pribadi saya.",
      "D": "Mencoba merayu mereka dengan cara yang manis dan menyenangkan."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 604,
    "question": "Cara saya membangun rasa percaya diri anggota tim adalah...",
    "options": {
      "A": "Memberikan pujian terbuka di depan orang banyak setiap saat.",
      "B": "Memberikan tanggung jawab besar agar mereka merasa tertantang.",
      "C": "Mendengarkan masukan mereka dengan penuh kesabaran dan empati.",
      "D": "Memberikan bimbingan teknis yang sangat detail dan terarah."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 605,
    "question": "Saat berebut tempat parkir dengan orang asing, saya akan...",
    "options": {
      "A": "Mengalah saja dan mencari tempat parkir lain yang tersedia.",
      "B": "Tetap maju jika merasa saya yang sampai lebih dulu.",
      "C": "Mencoba melucu agar suasana tidak menjadi tegang.",
      "D": "Merasa kesal dalam hati atas ketidakteraturan orang tersebut."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "ringan"
  },
  {
    "id": 606,
    "question": "Menghadapi kegagalan dalam meraih cita-cita membuat saya merasa...",
    "options": {
      "A": "Menerimanya sebagai takdir yang harus saya jalani dengan sabar.",
      "B": "Marah pada keadaan dan ingin mencoba lagi lebih keras.",
      "C": "Segera ingin mencari kesibukan baru agar tidak larut sedih.",
      "D": "Sangat terpukul dan terus mempertanyakan kekurangan diri saya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 607,
    "question": "Dalam memilih asuransi jiwa, pertimbangan saya biasanya adalah...",
    "options": {
      "A": "Seberapa besar nilai pertanggungan yang akan saya terima nanti.",
      "B": "Ketenangan pikiran karena keluarga saya akan terjamin aman.",
      "C": "Rincian manfaat dan transparansi klausul kontrak secara mendalam.",
      "D": "Apakah agennya ramah dan asyik diajak berdiskusi."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 608,
    "question": "Cara saya mencuci baju sendiri di rumah adalah...",
    "options": {
      "A": "Memisahkan baju berdasarkan warna dan bahan secara teliti.",
      "B": "Mencucinya dengan santai mengikuti rutinitas harian yang biasa.",
      "C": "Mencuci sambil bernyanyi atau menelepon teman agar asyik.",
      "D": "Melakukannya secepat mungkin agar bisa segera beristirahat."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 609,
    "question": "Menjawab pertanyaan sulit saat wawancara kerja, saya cenderung...",
    "options": {
      "A": "Menjawab secara tegas untuk menunjukkan rasa percaya diri saya.",
      "B": "Menjawab dengan tenang dan berusaha tetap bersikap sopan.",
      "C": "Menjawab dengan antusias dan gaya bicara yang menarik perhatian.",
      "D": "Menjawab secara logis didukung data atau pengalaman nyata."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 610,
    "question": "Visi saya tentang kesuksesan 10 tahun ke depan adalah...",
    "options": {
      "A": "Memiliki kekuasaan atau jabatan tinggi dalam bidang saya.",
      "B": "Hidup stabil, nyaman, dan terhindar dari segala kesulitan.",
      "C": "Mencapai standar hidup yang sempurna dan tertata rapi.",
      "D": "Menjadi orang populer yang disukai oleh banyak relasi baru."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 611,
    "question": "Jika harus lembur menyelesaikan tugas administratif, saya akan...",
    "options": {
      "A": "Memeriksa setiap angka dan huruf agar tidak ada salah.",
      "B": "Mengajak teman lembur bersama agar suasana terasa ceria.",
      "C": "Mengerjakannya perlahan mengikuti alur instruksi yang sudah ada.",
      "D": "Fokus menyelesaikan secepatnya tanpa mau banyak beristirahat."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 612,
    "question": "Saat melihat teman baru yang terlihat pendiam, saya...",
    "options": {
      "A": "Memperhatikan kemampuannya bekerja sebelum saya memutuskan mendekatinya.",
      "B": "Langsung menyapa dan mengajaknya mengobrol tentang banyak hal.",
      "C": "Menunggu dia yang memulai pembicaraan agar suasana tetap tenang.",
      "D": "Mencoba mencari tahu kepribadiannya secara hati-hati terlebih dahulu."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 613,
    "question": "Kebiasaan saya saat ada tamu keluarga datang adalah...",
    "options": {
      "A": "Menceritakan banyak pengalaman seru untuk menghibur mereka semua.",
      "B": "Duduk mendengarkan sambil sesekali tersenyum ramah kepada mereka.",
      "C": "Memperhatikan kerapian sajian dan kenyamanan tempat duduk tamu.",
      "D": "Membantu melayani tamu agar acara berjalan sangat efisien."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "keluarga",
    "level": "ringan"
  },
  {
    "id": 614,
    "question": "Sebagai pemimpin, jika visi saya diragukan anggota, saya...",
    "options": {
      "A": "Meyakinkan mereka kembali dengan semangat dan energi positif.",
      "B": "Memberikan bukti keberhasilan nyata untuk membungkam keraguan tersebut.",
      "C": "Menjelaskan detail strategi secara logis berdasarkan data faktual.",
      "D": "Mendengarkan keberatan mereka dan mencari jalan tengah bersama."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 615,
    "question": "Reaksi saya saat dikritik pedas oleh orang asing...",
    "options": {
      "A": "Memikirkannya secara mendalam dan merasa sangat sedih mendengarnya.",
      "B": "Mencoba menertawakannya dan tidak mau terlalu ambil pusing.",
      "C": "Diam saja dan berharap dia segera berhenti berbicara kasar.",
      "D": "Menjawab secara tegas untuk melindungi harga diri saya sendiri."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 616,
    "question": "Ketika sedang merasa tertekan karena banyak tagihan, saya...",
    "options": {
      "A": "Mencari cara menambah penghasilan dengan bekerja lebih giat.",
      "B": "Membuat rincian pengeluaran yang sangat ketat untuk berhemat.",
      "C": "Mencari teman untuk berbagi cerita agar hati lebih lega.",
      "D": "Berusaha tetap tenang dan percaya masalah akan selesai perlahan."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 617,
    "question": "Mengambil keputusan untuk pindah rumah, saya mengutamakan...",
    "options": {
      "A": "Kedekatan dengan tempat hiburan dan keramaian yang asyik.",
      "B": "Kondisi lingkungan yang sangat aman, bersih, dan teratur.",
      "C": "Kemudahan akses yang mendukung kecepatan mobilisasi kerja harian.",
      "D": "Suasana yang tenang dan memberikan rasa damai bagi keluarga."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 618,
    "question": "Cara saya menata barang-barang di dalam dompet adalah...",
    "options": {
      "A": "Membiarkannya terisi seadanya selama saya merasa tetap nyaman.",
      "B": "Apa adanya saja selama masih bisa tertutup dengan rapat.",
      "C": "Hanya berisi kartu dan uang yang paling sering digunakan.",
      "D": "Menyusun uang berdasarkan nominal dan kartu secara sangat rapi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 619,
    "question": "Jika harus memberikan pengarahan dalam situasi darurat, saya...",
    "options": {
      "A": "Berusaha bicara dengan tenang agar suasana tidak menjadi panik.",
      "B": "Berbicara penuh semangat agar orang-orang tidak merasa ketakutan.",
      "C": "Memberikan instruksi singkat, padat, dan sangat tegas sekali.",
      "D": "Menyampaikan langkah-langkah yang logis untuk menyelamatkan diri bersama."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 620,
    "question": "Mengenai investasi masa tua, prinsip hidup saya adalah...",
    "options": {
      "A": "Investasi yang aman memberikan ketenangan di masa tua nanti.",
      "B": "Investasi adalah senjata untuk mencapai kebebasan finansial secara cepat.",
      "C": "Investasi harus terasa menyenangkan dan memberikan hasil yang seru.",
      "D": "Investasi memerlukan perhitungan risiko yang sangat akurat dan teliti."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 621,
    "question": "Saat ada teman yang membatalkan janji pergi nonton...",
    "options": {
      "A": "Saya merasa sedih karena sudah mempersiapkan diri dengan baik.",
      "B": "Saya menanyakan alasan jelas kenapa dia membatalkan janji tersebut.",
      "C": "Saya tidak keberatan dan memilih untuk istirahat saja.",
      "D": "Saya langsung mengajak teman lain yang bisa ikut pergi."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 622,
    "question": "Di kantor, jika saya mendapatkan kenaikan jabatan, saya...",
    "options": {
      "A": "Segera menyusun strategi baru untuk mencapai target lebih tinggi.",
      "B": "Menerimanya dengan rasa syukur dan tetap bersikap rendah hati.",
      "C": "Memikirkan tanggung jawab baru yang harus saya kerjakan sempurna.",
      "D": "Mengajak seluruh tim merayakan keberhasilan tersebut dengan pesta."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 623,
    "question": "Jika melihat saudara melakukan hal yang kurang sopan, saya...",
    "options": {
      "A": "Menegurnya sambil bercanda agar dia tidak merasa tersinggung.",
      "B": "Merasa malu dan merenungi mengapa dia bisa bertindak begitu.",
      "C": "Memberitahunya secara langsung bahwa tindakannya itu tidak benar.",
      "D": "Memilih untuk diam agar tidak terjadi perselisihan dalam keluarga."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 624,
    "question": "Cara saya memimpin rapat tim yang anggotanya berselisih...",
    "options": {
      "A": "Menganalisis penyebab selisih secara logis dan memberikan jalan keluar.",
      "B": "Menyelesaikan perselisihan dengan mengambil keputusan yang sangat tegas.",
      "C": "Melempar lelucon untuk mencairkan suasana yang sedang tegang.",
      "D": "Meminta semua pihak bersabar dan saling memaafkan demi kedamaian."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 625,
    "question": "Saat dituduh mengambil hak orang lain, reaksi saya...",
    "options": {
      "A": "Tetap tenang dan mencoba menjelaskan kebenaran dengan suara lembut.",
      "B": "Merasa sangat terpukul dan menangis karena merasa tidak dihargai.",
      "C": "Membela diri dengan bercerita banyak alasan secara ekspresif.",
      "D": "Menantang orang tersebut memberikan bukti nyata atas tuduhannya tersebut."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 626,
    "question": "Jika rencana liburan impian gagal total, saya akan...",
    "options": {
      "A": "Merasa sangat sedih dan merenungi kegagalan tersebut sendirian.",
      "B": "Cepat mencari aktivitas lain yang tetap terasa sangat seru.",
      "C": "Menerima keadaan dan menikmati waktu santai di rumah saja.",
      "D": "Mengevaluasi kesalahan rencana agar tidak terulang di masa depan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 627,
    "question": "Dalam mengambil keputusan membeli barang elektronik, saya...",
    "options": {
      "A": "Membaca ulasan dan spesifikasi teknis secara sangat teliti dahulu.",
      "B": "Memilih merek yang sudah biasa saya gunakan agar terasa aman.",
      "C": "Memilih yang spesifikasinya paling mendukung performa kerja saya.",
      "D": "Memilih yang modelnya paling trendi dan menarik perhatian mata."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 628,
    "question": "Kebiasaan saya saat sedang makan sendirian di rumah...",
    "options": {
      "A": "Makan sambil menonton video yang lucu atau menelepon teman.",
      "B": "Makan dengan cepat agar bisa segera mengerjakan hal lainnya.",
      "C": "Menikmati makanan dengan tenang tanpa ada gangguan apa pun.",
      "D": "Menata makanan di piring agar terlihat rapi dan menggugah selera."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 629,
    "question": "Cara saya menolak ajakan teman untuk pergi nongkrong...",
    "options": {
      "A": "Meminta maaf dengan suara lembut agar dia tidak merasa tersinggung.",
      "B": "Menjelaskan rincian agenda saya agar dia paham alasan penolakan.",
      "C": "Memberikan banyak alasan yang terdengar seru tapi tetap menolak.",
      "D": "Mengatakan secara langsung bahwa saya sedang ada urusan penting."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 630,
    "question": "Pandangan saya mengenai kegagalan dalam hidup adalah...",
    "options": {
      "A": "Kegagalan adalah tantangan yang harus saya taklukkan lebih keras.",
      "B": "Kegagalan adalah pelajaran pahit yang harus dianalisis secara mendalam.",
      "C": "Kegagalan adalah bagian dari proses hidup yang harus saya terima.",
      "D": "Kegagalan adalah hal biasa yang bisa segera dilupakan saja."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 631,
    "question": "Saat harus bekerja dengan atasan yang tidak kompeten...",
    "options": {
      "A": "Mencatat setiap kesalahan atasan sebagai bahan evaluasi kerja nanti.",
      "B": "Menunjukkan kemampuan saya agar atasan menyadari kelemahannya secara langsung.",
      "C": "Mencoba tetap ceria dan membantu menutupi kekurangan atasan tersebut.",
      "D": "Mengerjakan tugas saya sebaik mungkin tanpa mau mengeluh kepadanya."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 632,
    "question": "Jika teman dekat saya melakukan kesalahan fatal, saya...",
    "options": {
      "A": "Mencoba memaklumi kesalahannya demi menjaga kedamaian hubungan kami.",
      "B": "Merasa sangat kecewa dan butuh waktu lama untuk memaafkan.",
      "C": "Memaafkannya segera agar hubungan pertemanan tetap berjalan asyik.",
      "D": "Menegurnya dengan tegas agar dia segera memperbaiki kesalahannya tersebut."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 633,
    "question": "Sikap saya saat ada anggota keluarga yang sedang marah...",
    "options": {
      "A": "Memintanya bersikap logis dan segera menyelesaikan masalah yang ada.",
      "B": "Mencoba menghiburnya agar amarahnya cepat reda dan kembali tertawa.",
      "C": "Membiarkannya menyendiri sampai dia merasa lebih tenang dan stabil.",
      "D": "Mendengarkannya dengan penuh kesabaran tanpa mau memancing keributan baru."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 634,
    "question": "Sebagai pimpinan, bagaimana saya menghadapi bawahan yang membangkang?",
    "options": {
      "A": "Mencoba bersabar dan berharap sikapnya akan berubah secara perlahan.",
      "B": "Menganalisis alasan di balik pembangkangannya sebelum saya bertindak lanjut.",
      "C": "Mengajaknya bicara dari hati ke hati dalam suasana santai.",
      "D": "Memberikan sanksi tegas sesuai aturan agar dia menjadi disiplin."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 635,
    "question": "Jika saya merasa dibohongi oleh pasangan saya, saya...",
    "options": {
      "A": "Merenungkan hubungan kami dan memikirkan segala konsekuensi masa depan.",
      "B": "Meminta penjelasan sambil menangis agar dia merasa kasihan pada.",
      "C": "Menghadapinya langsung dengan bukti kuat agar dia tidak mengelak.",
      "D": "Mencoba memaafkan dan memberikan kesempatan kedua demi keutuhan hubungan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 636,
    "question": "Saat menghadapi kemacetan parah di hari kerja, saya...",
    "options": {
      "A": "Menunggu dengan tenang sambil beristirahat sejenak di dalam mobil.",
      "B": "Mendengarkan musik yang ceria agar tetap merasa sangat semangat.",
      "C": "Mengatur kembali jadwal harian agar keterlambatan tidak merusak segalanya.",
      "D": "Merasa kesal dan mencoba mencari jalan tikus agar cepat sampai."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 637,
    "question": "Dalam mengambil keputusan investasi pendidikan, saya mengutamakan...",
    "options": {
      "A": "Sekolah yang lingkungannya nyaman dan memberikan ketenangan bagi anak.",
      "B": "Sekolah yang lulusannya terbukti sukses dan memiliki daya saing.",
      "C": "Sekolah yang memiliki kurikulum sangat terstruktur dan kedisiplinan kuat.",
      "D": "Sekolah yang populer dan memberikan banyak pengalaman sosial seru."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 638,
    "question": "Kebiasaan saya saat sedang mencuci piring harian adalah...",
    "options": {
      "A": "Mencucinya dengan ritme yang stabil sambil menikmati ketenangan dapur.",
      "B": "Mencuci sambil melamunkan hal-hal yang menyenangkan dan penuh tawa.",
      "C": "Mencuci secepat mungkin agar dapur terlihat bersih secara instan.",
      "D": "Memastikan tidak ada setitik pun noda yang tersisa pada piring."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 639,
    "question": "Cara saya menanggapi teman yang tidak menjawab panggilan saya...",
    "options": {
      "A": "Mengirimkan pesan tegas agar dia segera menghubungi saya kembali nanti.",
      "B": "Menunggu saja sampai dia memiliki waktu untuk menghubungi saya kembali.",
      "C": "Berpikir apakah saya melakukan kesalahan yang membuat dia menghindari saya.",
      "D": "Meneleponnya berkali-kali sampai dia menjawab telepon saya secara langsung."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 640,
    "question": "Tujuan utama saya menabung dana pensiun adalah untuk...",
    "options": {
      "A": "Memiliki modal untuk tetap berbisnis meskipun sudah tidak produktif.",
      "B": "Menjamin kehidupan hari tua yang sangat aman dan terencana matang.",
      "C": "Bisa hidup tenang tanpa harus merepotkan anak dan cucu nanti.",
      "D": "Bisa berwisata keliling dunia dengan teman-teman di masa tua."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 641,
    "question": "Jika harus bekerja dalam tim yang anggotanya sangat pasif...",
    "options": {
      "A": "Mengambil kendali tim agar target pekerjaan tetap tercapai tepat waktu.",
      "B": "Bekerja sebisanya dan berharap suasana tim akan membaik secara perlahan.",
      "C": "Mencoba memotivasi mereka dengan cara-cara yang sangat menyenangkan sekali.",
      "D": "Membuat pembagian tugas yang sangat rinci agar setiap orang bergerak."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 642,
    "question": "Saat ada teman yang tiba-tiba curhat tentang kesedihannya, saya...",
    "options": {
      "A": "Menanyakan solusi apa yang sudah dia lakukan untuk mengatasi sedihnya.",
      "B": "Menemaninya dengan tenang agar dia merasa tidak menghadapi masalah sendirian.",
      "C": "Duduk mendengarkan dengan penuh empati dan ikut merasakan rasa sedihnya.",
      "D": "Memberikan hiburan dan mencoba membuat dia tertawa kembali saat itu."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 643,
    "question": "Kebiasaan saya saat ada pesta ulang tahun keluarga adalah...",
    "options": {
      "A": "Mengatur jalannya acara agar berjalan sesuai dengan rencana yang efisien.",
      "B": "Memperhatikan setiap detail dekorasi dan kenyamanan tamu yang hadir nanti.",
      "C": "Menjadi pembawa acara atau pusat perhatian agar pesta terasa meriah.",
      "D": "Menikmati acara dengan tenang dan bercengkerama santai dengan saudara dekat."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "ringan"
  },
  {
    "id": 644,
    "question": "Sebagai pimpinan, apa yang saya lakukan jika target tidak tercapai?",
    "options": {
      "A": "Menganalisis penyebab kegagalan secara sangat detail dan mendalam sekali harian.",
      "B": "Mengevaluasi strategi secara tegas dan segera menyusun rencana baru segera.",
      "C": "Menerima hasil tersebut dengan tenang dan mencoba memperbaiki diri perlahan.",
      "D": "Tetap memberikan semangat agar anggota tim tidak merasa terlalu terpukul."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 645,
    "question": "Jika saya merasa dihina oleh rekan kerja di depan umum...",
    "options": {
      "A": "Menanggapinya dengan candaan agar saya tidak terlihat merasa sangat malu.",
      "B": "Merasa sangat sedih dan butuh waktu lama untuk memaafkan hinaannya.",
      "C": "Menghadapinya secara langsung dan menuntut penjelasan yang sangat jujur darinya.",
      "D": "Memilih untuk diam agar tidak memperbesar konflik di depan orang."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 646,
    "question": "Reaksi saya saat menghadapi tekanan pekerjaan yang tiada henti...",
    "options": {
      "A": "Tetap tenang dan mengerjakan apa yang sanggup saya selesaikan harian.",
      "B": "Mencari teman mengobrol agar beban pikiran saya terasa lebih ringan.",
      "C": "Bekerja lebih keras dan fokus penuh agar semua pekerjaan tuntas.",
      "D": "Membuat jadwal kerja yang sangat ketat untuk menyelesaikan satu-persatu tugas."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 647,
    "question": "Dalam mengambil keputusan investasi kendaraan, prioritas saya adalah...",
    "options": {
      "A": "Model yang paling keren dan warna yang sangat menarik perhatian.",
      "B": "Fitur keamanan yang lengkap dan efisiensi bahan bakar yang sangat akurat.",
      "C": "Kenyamanan kursi dan suara mesin yang halus saat sedang dikendarai.",
      "D": "Performa mesin yang tangguh dan nilai jual kembali yang tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 648,
    "question": "Kebiasaan saya sebelum tidur setiap malam biasanya adalah...",
    "options": {
      "A": "Menyiapkan daftar tugas yang harus saya selesaikan di esok pagi.",
      "B": "Merenungkan kejadian hari ini dan memikirkan perbaikan untuk besok pagi.",
      "C": "Menonton film yang ringan atau langsung tidur untuk beristirahat tenang.",
      "D": "Melihat media sosial untuk melihat kabar seru dari teman-teman saya."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 649,
    "question": "Cara saya menanggapi teman yang berbicara kasar kepada saya...",
    "options": {
      "A": "Merasa sedih dalam hati dan merenungi kata-katanya yang sangat menyakitkan.",
      "B": "Tetap diam dan menghindari perdebatan demi menjaga kedamaian hubungan kami.",
      "C": "Mencoba membalasnya dengan candaan agar suasana tidak menjadi terlalu kaku.",
      "D": "Menegurnya secara langsung agar dia menghormati saya sebagai teman sejawatnya."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 650,
    "question": "Visi saya mengenai kesuksesan finansial adalah memiliki...",
    "options": {
      "A": "Tabungan yang sangat aman dan terencana untuk jangka waktu panjang.",
      "B": "Banyak uang untuk bisa menikmati hidup dengan penuh kesenangan harian.",
      "C": "Keuangan yang stabil agar hidup saya tetap tenang dan damai.",
      "D": "Kekayaan yang bisa memberikan pengaruh besar bagi kehidupan orang lain."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 651,
    "question": "Saat menghadapi klien yang tidak puas, saya cenderung...",
    "options": {
      "A": "Mendengarkan keluhannya dengan sangat teliti untuk memperbaiki kualitas layanan saya.",
      "B": "Memberikan alasan logis dan solusi praktis agar masalah segera selesai.",
      "C": "Tetap ramah dan berusaha menghibur klien agar kemarahannya segera reda.",
      "D": "Menghadapi keluhannya dengan sabar dan mencoba memberikan ketenangan bagi klien."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 652,
    "question": "Jika teman saya memuji keberhasilan saya, reaksi saya...",
    "options": {
      "A": "Merasa agak malu dan berpikir apakah hasilnya sudah benar-benar sempurna.",
      "B": "Menerimanya sebagai tanda bahwa kerja keras saya telah berhasil nyata.",
      "C": "Tersenyum ramah dan mengucapkan terima kasih atas apresiasi tulus temanku.",
      "D": "Sangat senang dan menceritakan perjuangan saya dengan penuh semangat tinggi."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 653,
    "question": "Sikap saya saat ada perbedaan pendapat dalam keluarga besar...",
    "options": {
      "A": "Menganalisis argumen setiap pihak secara logis untuk mencari jalan keluar.",
      "B": "Memilih untuk diam agar tidak memperbesar konflik antar anggota keluarga.",
      "C": "Menyampaikan pendapat saya secara tegas agar masalah keluarga segera diputuskan.",
      "D": "Mencoba mencairkan ketegangan dengan candaan agar semua orang kembali tertawa."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 654,
    "question": "Sebagai pimpinan, apa prioritas saya dalam membangun tim kerja?",
    "options": {
      "A": "Membangun sistem kerja yang sangat rapi dan minim tingkat kesalahan.",
      "B": "Menciptakan suasana kerja yang menyenangkan dan penuh dengan semangat harian.",
      "C": "Menjaga keharmonisan antar anggota tim agar semua merasa aman bekerja.",
      "D": "Memastikan setiap anggota tim bekerja secara efisien untuk mencapai target."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 655,
    "question": "Jika saya merasa dicurangi oleh rekan bisnis saya sendiri...",
    "options": {
      "A": "Menghentikan kerja sama saat itu juga dan menuntut pertanggungjawaban jelas.",
      "B": "Mencoba membicarakannya baik-baik demi menjaga perdamaian dalam hubungan bisnis tersebut.",
      "C": "Mengutarakan kekecewaan saya sambil berharap hubungan bisnis tetap bisa berlanjut.",
      "D": "Mengumpulkan bukti kecurangannya sebelum saya mengambil tindakan hukum yang tegas."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 656,
    "question": "Reaksi saya saat melihat berita tentang kemiskinan di dunia...",
    "options": {
      "A": "Merasa sedih dan segera membagikan berita tersebut agar banyak membantu.",
      "B": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepatnya.",
      "C": "Berdoa dengan tulus agar mereka segera diberikan kemudahan dan kelapangan rezeki.",
      "D": "Menganalisis penyebab kemiskinan tersebut dan merenungi nasib manusia di dunia."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 657,
    "question": "Dalam mengambil keputusan investasi masa tua, saya memilih...",
    "options": {
      "A": "Investasi yang memberikan kendali penuh dan keuntungan sangat besar bagiku.",
      "B": "Investasi yang memiliki profil risiko sangat rendah dan terencana matang.",
      "C": "Investasi yang paling aman dan memberikan ketenangan jangka panjang nanti.",
      "D": "Investasi yang sedang tren dan menjanjikan gaya hidup menyenangkan sekali."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 658,
    "question": "Kebiasaan saya saat sedang merapikan lemari pakaian harian...",
    "options": {
      "A": "Melipat pakaian dengan rapi tanpa harus mengaturnya secara berlebihan sekali.",
      "B": "Merapikan sambil bernyanyi agar pekerjaan tidak terasa membosankan bagi saya.",
      "C": "Menyusun pakaian berdasarkan kategori warna dan jenisnya secara sangat teliti.",
      "D": "Menyingkirkan pakaian yang tidak terpakai agar lemari terlihat sangat rapi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 659,
    "question": "Cara saya menanggapi teman yang ingkar janji temu...",
    "options": {
      "A": "Menunggunya dengan sabar dan tidak mempermasalahkan keterlambatannya asalkan dia datang.",
      "B": "Bercanda bahwa dia harus mentraktir saya karena sudah membuat menunggu.",
      "C": "Menegurnya secara langsung dan menjelaskan bahwa waktu saya sangat berharga.",
      "D": "Merasa kesal dalam hati dan mulai memikirkan ketepatan waktu teman."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 660,
    "question": "Visi saya mengenai masa depan rumah tangga adalah memiliki...",
    "options": {
      "A": "Rumah tangga yang tenang, damai, dan penuh dengan kasih sayang.",
      "B": "Keluarga yang harmonis dengan nilai-nilai moral yang sangat kuat sekali.",
      "C": "Rumah yang selalu ramai dengan keceriaan anak-anak dan juga teman.",
      "D": "Keluarga yang sukses secara finansial dan prestasi sosial di masyarakat."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 661,
    "question": "Jika teman mengajak pergi ke pameran seni, saya...",
    "options": {
      "A": "Menikmati ketenangan suasana museum dan meresapi setiap karya seni perlahan.",
      "B": "Antusias karena bisa berfoto dengan latar belakang karya seni estetik.",
      "C": "Memperhatikan setiap detail teknik lukisan atau patung dengan tingkat ketelitian.",
      "D": "Mempelajari sejarah senimannya agar saya memahami makna karya seninya tersebut."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 662,
    "question": "Saat menghadapi rekan kerja yang suka menyela pembicaraan harian...",
    "options": {
      "A": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas.",
      "B": "Tertawa dan membiarkannya bicara dulu lalu saya lanjut bicara kembali.",
      "C": "Menunggu dia selesai bicara baru kemudian saya menyampaikan poin penting saya.",
      "D": "Menegurnya agar mendengarkan saya dulu sampai selesai demi kelancaran komunikasi."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 663,
    "question": "Bagaimana reaksi saya jika ada saudara saya yang sakit?",
    "options": {
      "A": "Mendoakannya agar diberikan kesabaran dan tetap tenang selama proses penyembuhannya.",
      "B": "Menghiburnya agar tidak terlalu larut dalam kesedihan dan segera sembuh.",
      "C": "Ikut merasa sedih dan memberikan semangat secara emosional yang mendalam.",
      "D": "Mencarikan dokter terbaik agar dia segera mendapatkan penanganan medis tepat."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 664,
    "question": "Sebagai pimpinan organisasi, apa yang saya lakukan jika ada konflik?",
    "options": {
      "A": "Mengajak semua pihak makan bersama agar suasana kembali menjadi cair.",
      "B": "Mendengarkan semua pihak dan mengambil keputusan yang paling adil tegas.",
      "C": "Berusaha menjembatani perbedaan agar semua pihak merasa dihargai dan tenang.",
      "D": "Menganalisis akar masalah secara logis sebelum memberikan solusi yang tepat."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 665,
    "question": "Jika saya merasa dibicarakan di belakang oleh rekan kerja...",
    "options": {
      "A": "Membiarkannya saja karena saya yakin kebenaran pada akhirnya akan terungkap sendiri.",
      "B": "Merasa sangat kecewa dan mulai menjaga jarak dengan rekan tersebut sementara.",
      "C": "Mencoba mengklarifikasinya dengan cara yang santai agar tidak merusak pertemanan.",
      "D": "Menghadapi pembuat gosip tersebut dan menuntut penjelasan yang sangat jujur."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 666,
    "question": "Saat melihat orang lain melakukan kebaikan secara diam-diam harian...",
    "options": {
      "A": "Merasa terharu dan ingin segera meniru perbuatan baiknya tersebut hidup.",
      "B": "Tersenyum bangga dan mendoakan agar kebaikannya mendapatkan balasan yang setimpal.",
      "C": "Menghargai tindakannya sebagai bukti nyata bahwa masih banyak orang baik.",
      "D": "Merenungi makna kebaikan tersebut bagi kehidupan manusia secara sangat mendalam."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 667,
    "question": "Dalam mengambil keputusan investasi pendidikan anak, kriteria saya adalah...",
    "options": {
      "A": "Sekolah yang memberikan jaminan masa depan cerah dan daya saing tinggi.",
      "B": "Sekolah yang memiliki rincian biaya paling transparan dan terpercaya harian.",
      "C": "Sekolah yang lingkungannya ramah dan anak bisa memiliki banyak teman.",
      "D": "Sekolah yang memberikan rasa aman dan ketenangan bagi perkembangan batin anak."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 668,
    "question": "Kebiasaan saya saat sedang merawat taman di pagi hari...",
    "options": {
      "A": "Mengajak tanaman bicara agar mereka selalu merasa senang dan tumbuh ceria.",
      "B": "Memperhatikan setiap detail kebersihan pot dan daun tanaman dengan sangat teliti.",
      "C": "Memberikan pupuk terbaik agar kesehatan tanaman tetap terjaga dengan prima.",
      "D": "Menyayangi tanaman dengan penuh kesabaran dan ketenangan di waktu luang."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 669,
    "question": "Cara saya menanggapi teman yang berbohong demi kebaikan saya harian...",
    "options": {
      "A": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan pertemanan kuat.",
      "B": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga perasaan saya.",
      "C": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga perasaan.",
      "D": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan pertemanan kami."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 670,
    "question": "Mengenai asuransi kebakaran rumah, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya.",
      "B": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat.",
      "C": "Yang memberikan jaminan ganti rugi paling besar bagi seluruh isi rumah.",
      "D": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 671,
    "question": "Jika teman mengajak pergi ke tempat bermain bowling, saya...",
    "options": {
      "A": "Mempelajari teknik lemparan bola yang benar agar lemparan saya selalu akurat.",
      "B": "Menikmati permainan bowling dengan tenang dan merasa senang berkumpul bersama teman.",
      "C": "Berusaha mendapatkan skor tertinggi untuk membuktikan kemampuan saya di depan teman.",
      "D": "Sangat antusias karena suka olahraga yang santai dan penuh keseruan harian."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 672,
    "question": "Saat menghadapi rekan kerja yang suka mencari kesalahan orang harian...",
    "options": {
      "A": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja.",
      "B": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua orang tertawa.",
      "C": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik diciptakannya.",
      "D": "Menghadapi rekan tersebut secara langsung agar tidak mengganggu ketenangan kerja tim."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 673,
    "question": "Bagaimana reaksi saya jika ada saudara yang mendapat masalah hukum harian?",
    "options": {
      "A": "Mencari cara praktis untuk membantunya menyelesaikan masalah tersebut secepat mungkin.",
      "B": "Menemaninya dengan sabar dan memberikan dukungan emosional yang menenangkan bagi dia.",
      "C": "Menganalisis penyebab masalahnya secara logis untuk mencari jalan keluar yang tepat.",
      "D": "Sangat sedih dan segera memberikan semangat emosional agar dia kuat menghadapinya."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 674,
    "question": "Sebagai pimpinan, apa yang saya utamakan dalam membangun tim?",
    "options": {
      "A": "Kemandirian anggota tim yang bisa memberikan kontribusi nyata bagi kesuksesan bersama.",
      "B": "Kedisiplinan anggota tim yang sangat tinggi melalui penerapan aturan yang tegas.",
      "C": "Kreativitas ide yang inovatif dan bisa menarik perhatian banyak orang dunia.",
      "D": "Kerukunan antar anggota tim agar tim tetap solid dan penuh kedamaian."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 675,
    "question": "Jika saya merasa dihina secara terang-terangan oleh rekan kerja harian...",
    "options": {
      "A": "Merasa sangat terpukul dan menangis karena merasa tidak dihargai oleh rekan.",
      "B": "Menanggapinya dengan candaan agar saya tidak terlihat merasa sangat malu sekali.",
      "C": "Tetap tenang dan mencoba menjelaskan kebenaran dengan suara yang sangat lembut.",
      "D": "Menghadapinya secara langsung dan menuntut penjelasan yang sangat jujur darinya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 676,
    "question": "Reaksi saya saat melihat berita tentang bencana alam di dunia harian...",
    "options": {
      "A": "Menganalisis penyebab bencana tersebut dan merenungi nasib manusia di dunia.",
      "B": "Berdoa dengan tulus agar penderitaan mereka segera berakhir dan diberikan ketabahan.",
      "C": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepat mungkin.",
      "D": "Sangat sedih dan segera membagikan berita tersebut agar banyak yang membantu."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 677,
    "question": "Dalam mengambil keputusan investasi kesehatan, pertimbangan utama saya adalah harian...",
    "options": {
      "A": "Pelayanan yang ramah dan banyak direkomendasikan oleh teman dekat saya harian.",
      "B": "Rincian polis yang transparan dan reputasi perusahaan yang sangat solid sekali.",
      "C": "Premi yang terjangkau dan memberikan rasa aman bagi keluarga saya nantinya.",
      "D": "Cakupan perlindungan yang luas dan proses klaim yang sangat cepat tuntas."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 678,
    "question": "Kebiasaan saya saat sedang merawat kesehatan tubuh harian harian...",
    "options": {
      "A": "Memilih jenis olahraga yang paling efektif untuk menjaga kebugaran tubuh saya.",
      "B": "Mengajak teman berolahraga bersama agar prosesnya terasa lebih sangat menyenangkan sekali.",
      "C": "Memperhatikan setiap detail asupan nutrisi dan jadwal olahraga dengan sangat teliti.",
      "D": "Menikmati proses olahraga dengan tenang dan merasa sangat rileks batin saya."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 679,
    "question": "Cara saya menanggapi teman yang berbuat salah di lingkungan kerja harian...",
    "options": {
      "A": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan kerja kuat.",
      "B": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga prestasi.",
      "C": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan kerja kami.",
      "D": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga prestasi kerja."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 680,
    "question": "Mengenai asuransi kematian, pertimbangan utama saya adalah harian...",
    "options": {
      "A": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya.",
      "B": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat.",
      "C": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi hukum.",
      "D": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga yang ada."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 681,
    "question": "Saat menghadapi klien yang sangat tidak ramah, sikap saya harian...",
    "options": {
      "A": "Menghadapi keluhannya dengan sabar dan mencoba memberikan ketenangan bagi klien harian.",
      "B": "Mendengarkan keluhannya dengan sangat teliti untuk memperbaiki kualitas layanan saya harian.",
      "C": "Tetap ramah dan berusaha menghibur klien agar kemarahannya segera reda harian.",
      "D": "Memberikan alasan logis dan solusi praktis agar masalah segera selesai segera."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 682,
    "question": "Jika teman saya memuji gaya rambut saya, reaksi saya harian...",
    "options": {
      "A": "Mengucapkan terima kasih singkat dan kembali ke topik pembicaraan harian kami.",
      "B": "Merasa agak malu dan berpikir apakah gaya rambutnya benar-benar cocok harian.",
      "C": "Tersenyum ramah dan merasa sangat dihargai oleh teman tersebut harian saya.",
      "D": "Sangat senang dan menceritakan di mana saya memotong rambut saya harian."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 683,
    "question": "Sikap saya saat ada anggota keluarga yang menikah harian...",
    "options": {
      "A": "Mengucapkan selamat dan memperhatikan setiap rincian kebutuhan pengantin tersebut harian tuntas.",
      "B": "Sangat gembira dan segera merayakannya dengan pesta keluarga yang sangat meriah.",
      "C": "Memberikan saran persiapan pernikahan yang paling efektif berdasarkan pengalaman saya harian.",
      "D": "Tersenyum bahagia dan mendoakan agar pengantin selalu diberikan kesehatan dan kebahagiaan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 684,
    "question": "Sebagai pimpinan, apa prioritas saya dalam membangun budaya kerja tim harian?",
    "options": {
      "A": "Menjaga keharmonisan antar anggota tim agar semua merasa aman bekerja harian.",
      "B": "Menciptakan suasana kerja yang menyenangkan dan penuh dengan semangat harian harian.",
      "C": "Memastikan setiap anggota tim bekerja secara efisien untuk mencapai target harian.",
      "D": "Membangun sistem kerja yang sangat rapi dan minim tingkat kesalahan harian."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 685,
    "question": "Jika saya merasa dicurangi oleh rekan bisnis saya sendiri harian...",
    "options": {
      "A": "Mengumpulkan bukti kecurangannya sebelum saya mengambil tindakan hukum yang sangat tegas.",
      "B": "Mencoba membicarakannya baik-baik demi menjaga perdamaian dalam hubungan bisnis tersebut harian.",
      "C": "Mengutarakan kekecewaan saya sambil berharap hubungan bisnis tetap bisa berlanjut harian.",
      "D": "Menghentikan kerja sama saat itu juga dan menuntut pertanggungjawaban yang sangat jelas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 686,
    "question": "Reaksi saya saat melihat berita tentang kelaparan di dunia harian...",
    "options": {
      "A": "Berdoa dengan tulus agar mereka segera diberikan kemudahan dan kelapangan rezeki harian.",
      "B": "Merasa sedih dan segera membagikan berita tersebut agar banyak membantu harian.",
      "C": "Menganalisis penyebab kelaparan tersebut dan merenungi nasib manusia di dunia harian.",
      "D": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepat mungkin harian."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 687,
    "question": "Dalam mengambil keputusan investasi pendidikan menengah, kriteria saya adalah harian...",
    "options": {
      "A": "Sekolah yang memberikan rasa aman dan ketenangan bagi perkembangan batin anak harian.",
      "B": "Sekolah yang memberikan jaminan masa depan cerah dan daya saing tinggi harian.",
      "C": "Sekolah yang lingkungannya ramah dan anak bisa memiliki banyak teman harian.",
      "D": "Sekolah yang memiliki rincian biaya paling transparan dan terpercaya harian harian."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 688,
    "question": "Kebiasaan saya saat sedang merawat taman di sore hari harian harian...",
    "options": {
      "A": "Mengajak tanaman bicara agar mereka selalu merasa senang dan tumbuh ceria harian.",
      "B": "Memperhatikan kondisi setiap daun dan akar tanaman dengan tingkat ketelitian harian.",
      "C": "Menata tanaman agar terlihat sangat rapi dan memberikan kesan rumah berkelas harian.",
      "D": "Menikmati ketenangan di kebun sambil menyiram tanaman dengan penuh rasa sabar harian."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 689,
    "question": "Cara saya menanggapi teman yang berbuat salah kepada saya harian harian...",
    "options": {
      "A": "Menegurnya agar dia menyadari kesalahannya dan tidak mengulanginya lagi di masa harian.",
      "B": "Mencoba memaklumi kesalahannya demi menjaga keharmonisan dalam hubungan pertemanan kami harian.",
      "C": "Memaafkannya dengan cepat agar pertemanan kami tetap berjalan dengan sangat asyik harian.",
      "D": "Merasa sedih secara mendalam dan butuh waktu lama untuk memulihkan kepercayaan harian."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 690,
    "question": "Mengenai asuransi gadget harian, pertimbangan utama saya dalam memilih harian harian...",
    "options": {
      "A": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi cepat harian.",
      "B": "Yang memberikan jaminan ganti rugi total jika gadget saya hilang atau rusak harian.",
      "C": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap pelanggannya harian.",
      "D": "Yang memiliki rincian perlindungan paling lengkap dan transparan secara administrasi hukum harian."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 691,
    "question": "Jika teman mengajak pergi ke museum seni harian, saya akan harian...",
    "options": {
      "A": "Memperhatikan setiap detail teknik lukisan atau patung dengan tingkat ketelitian harian.",
      "B": "Antusias karena bisa berfoto dengan latar belakang karya seni yang sangat estetik harian.",
      "C": "Menikmati ketenangan suasana museum dan meresapi setiap karya seni secara perlahan harian.",
      "D": "Mempelajari sejarah senimannya agar saya bisa memahami makna karya seninya tersebut harian."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 692,
    "question": "Saat menghadapi rekan kerja yang suka menyela pembicaraan harian harian harian...",
    "options": {
      "A": "Menunggu dia selesai bicara baru kemudian saya menyampaikan poin penting saya harian harian.",
      "B": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas kerja harian.",
      "C": "Menegurnya agar mendengarkan saya dulu sampai selesai demi kelancaran komunikasi harian.",
      "D": "Tertawa dan membiarkannya bicara dulu lalu saya lanjut bicara kembali harian harian."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 693,
    "question": "Bagaimana reaksi saya jika ada saudara saya yang gagal ujian harian harian?",
    "options": {
      "A": "Menghiburnya agar tidak terlalu larut dalam kesedihan dan segera semangat belajar harian.",
      "B": "Ikut merasa sedih dan memberikan semangat secara emosional yang mendalam bagi harian.",
      "C": "Membantunya menganalisis kekurangan belajarnya agar bisa lulus di ujian berikutnya harian.",
      "D": "Mendoakannya agar diberikan kesabaran dan tetap tekun belajar demi masa depannya harian."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 694,
    "question": "Sebagai pimpinan komunitas hobi harian, fokus utama saya adalah pada harian harian...",
    "options": {
      "A": "Keahlian anggota yang terus meningkat melalui pelatihan yang diadakan komunitas kami harian.",
      "B": "Keseruan acara komunitas yang bisa menarik minat banyak anggota baru bergabung harian.",
      "C": "Sistem pengelolaan komunitas yang rapi dan terdokumentasi secara sangat baik harian harian.",
      "D": "Rasa kekeluargaan antar anggota agar komunitas tetap solid dan penuh kedamaian harian."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 695,
    "question": "Jika saya merasa dibicarakan di belakang oleh teman sendiri harian harian harian...",
    "options": {
      "A": "Menghadapi pembuat gosip tersebut dan menuntut penjelasan yang jujur darinya segera harian.",
      "B": "Merasa sangat kecewa dan mulai menjaga jarak dengan teman tersebut sementara harian.",
      "C": "Mencoba mengklarifikasinya dengan cara yang santai agar tidak merusak pertemanan kami harian.",
      "D": "Membiarkannya saja karena saya yakin kebenaran pada akhirnya akan terungkap sendiri harian."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 696,
    "question": "Saat melihat orang lain melakukan kebaikan secara diam-diam harian harian harian...",
    "options": {
      "A": "Tersenyum bangga dan mendoakan agar kebaikannya mendapatkan balasan yang setimpal harian kelak.",
      "B": "Merenungi makna kebaikan tersebut bagi kehidupan manusia secara sangat mendalam harian harian.",
      "C": "Menghargai tindakannya sebagai bukti bahwa masih banyak orang baik di dunia harian.",
      "D": "Merasa terharu dan ingin segera meniru perbuatan baiknya tersebut dalam hidup harian."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 697,
    "question": "Dalam mengambil keputusan memilih asuransi syariah harian, saya mengutamakan harian harian...",
    "options": {
      "A": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum harian.",
      "B": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah yang tegas harian.",
      "C": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan harian.",
      "D": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga harian."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 698,
    "question": "Kebiasaan saya saat sedang merawat hewan peliharaan harian adalah harian harian harian...",
    "options": {
      "A": "Mengajak hewan peliharaan bermain agar mereka selalu merasa senang dan ceria harian.",
      "B": "Memperhatikan setiap detail kebersihan kandang dan tubuh hewan peliharaan dengan teliti harian.",
      "C": "Menyayangi hewan peliharaan dengan penuh kesabaran dan ketenangan di waktu luang harian.",
      "D": "Memberikan pakan dan vitamin terbaik agar kesehatan hewan peliharaan tetap terjaga harian."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 699,
    "question": "Cara saya menanggapi teman yang berbuat curang dalam bisnis harian harian harian...",
    "options": {
      "A": "Menuntut pertanggungjawaban yang jelas dan segera mengakhiri hubungan bisnis secara tegas harian.",
      "B": "Menghentikan kerja sama sambil berharap dia akan menyadari kesalahannya tersebut harian nanti.",
      "C": "Merasa sangat kecewa dan mulai mempertanyakan integritas moral teman tersebut mendalam harian.",
      "D": "Mencoba membicarakannya baik-baik demi menjaga kedamaian dalam hubungan bisnis kami harian."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 700,
    "question": "Mengenai asuransi tenaga kerja harian, pertimbangan utama saya adalah harian harian...",
    "options": {
      "A": "Yang sudah terbukti terpercaya oleh banyak karyawan lainnya selama bertahun-tahun harian.",
      "B": "Yang memiliki rincian polis paling jelas dan transparan secara administrasi hukum harian.",
      "C": "Yang memberikan banyak manfaat tambahan seperti pelatihan keahlian yang sangat seru harian.",
      "D": "Yang memberikan jaminan perlindungan paling lengkap selama saya bekerja di perusahaan harian."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 701,
    "question": "Saat diminta memberikan ide di rapat pagi, saya...",
    "options": {
      "A": "Menyiapkan catatan detail dan menyampaikannya secara sangat terstruktur.",
      "B": "Langsung bicara antusias agar suasana rapat jadi lebih hidup.",
      "C": "Menunggu orang lain bicara baru saya memberikan pendapat seimbang.",
      "D": "Memberikan ide yang fokus pada hasil nyata dan pencapaian."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 702,
    "question": "Jika teman dekat saya membatalkan janji secara mendadak...",
    "options": {
      "A": "Merasa kecewa dan memikirkan apakah ada kesalahan di pihak.",
      "B": "Menanyakan alasan logis dan merasa waktu saya sangat berharga.",
      "C": "Menerimanya dengan tenang dan menikmati waktu istirahat di rumah.",
      "D": "Tidak masalah, saya segera mencari teman lain untuk mengobrol."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 703,
    "question": "Saat anak menolak makan sayur, tindakan saya adalah...",
    "options": {
      "A": "Menjelaskan kandungan vitamin dalam sayur secara rinci dan logis.",
      "B": "Memberitahunya secara tegas pentingnya kesehatan bagi tubuhnya.",
      "C": "Membujuknya pelan-pelan tanpa mau memaksanya jika dia menolak.",
      "D": "Membuat permainan seru agar dia mau mencoba sayur tersebut."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 704,
    "question": "Jika proyek tim terhambat, langkah saya adalah...",
    "options": {
      "A": "Memotivasi tim agar kembali ceria dan tidak merasa tertekan.",
      "B": "Mengevaluasi rencana kerja dan mencari celah teknis yang salah.",
      "C": "Mendengarkan keluhan setiap anggota untuk menjaga keharmonisan tim.",
      "D": "Mencari penyebab hambatan dan mengambil kendali penyelesaian masalah."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 705,
    "question": "Saat dikritik rekan kerja di depan pimpinan, saya...",
    "options": {
      "A": "Menganalisis kritik tersebut dan memikirkannya secara mendalam nanti.",
      "B": "Mendengarkan dengan tenang demi menghindari perdebatan yang panjang.",
      "C": "Menanggapinya dengan candaan agar suasana tidak terasa kaku.",
      "D": "Membela diri dengan argumen kuat untuk melindungi reputasi saya."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 706,
    "question": "Menghadapi deadline yang tinggal hitungan jam, saya...",
    "options": {
      "A": "Berusaha tetap teliti meski waktu terasa sangat mencekam batin.",
      "B": "Tetap optimis dan mengerjakannya sambil mengobrol ringan sesekali.",
      "C": "Bekerja sangat cepat dan mendesak orang lain membantu saya.",
      "D": "Menjaga ketenangan batin agar pekerjaan bisa selesai sebisanya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 707,
    "question": "Saat memilih asuransi rumah, pertimbangan saya adalah...",
    "options": {
      "A": "Reputasi perusahaan yang memberikan rasa aman jangka panjang.",
      "B": "Rincian klausul polis yang sangat transparan dan masuk akal.",
      "C": "Cakupan perlindungan yang luas dan proses administrasi yang efisien.",
      "D": "Kemudahan proses klaim yang banyak direkomendasikan oleh teman."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 708,
    "question": "Rutinitas saya saat baru sampai di rumah adalah...",
    "options": {
      "A": "Langsung mencari keluarga untuk bercerita tentang kejadian hari ini.",
      "B": "Duduk santai sejenak untuk melepas penat sebelum mulai beraktivitas.",
      "C": "Merapikan barang bawaan dan menaruhnya kembali pada tempatnya.",
      "D": "Segera mandi dan menyiapkan jadwal untuk kegiatan malam nanti."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 709,
    "question": "Gaya saya saat mengirim pesan teks adalah...",
    "options": {
      "A": "Menggunakan tata bahasa yang rapi dan penjelasan yang lengkap.",
      "B": "Berusaha menggunakan kata-kata yang lembut dan tidak menyinggung.",
      "C": "Sering menggunakan emoji lucu agar pesan terasa lebih ekspresif.",
      "D": "Singkat, padat, dan langsung menuju pokok tujuan pesan tersebut."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 710,
    "question": "Mengenai investasi pendidikan anak, pandangan saya adalah...",
    "options": {
      "A": "Memberikan jaminan ketenangan bagi masa depan keluarga kami.",
      "B": "Direncanakan secara matang berdasarkan simulasi biaya di masa depan.",
      "C": "Sebagai modal agar anak memiliki daya saing tinggi.",
      "D": "Agar anak bisa menikmati fasilitas sekolah yang menyenangkan."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 711,
    "question": "Ketika rekan kerja melakukan kesalahan teknis, sikap saya...",
    "options": {
      "A": "Menerima keadaan tersebut dan mencoba membantu sebisanya tanpa mengeluh.",
      "B": "Memintanya untuk segera memperbaiki kesalahan tersebut agar tidak menghambat.",
      "C": "Mencoba menenangkannya dengan candaan agar dia tidak merasa bersalah.",
      "D": "Membantunya mencari letak kesalahan dengan sangat teliti dan rinci."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 712,
    "question": "Dalam sebuah kelompok diskusi, saya biasanya berperan sebagai...",
    "options": {
      "A": "Orang yang mengarahkan diskusi agar mencapai kesimpulan dengan cepat.",
      "B": "Orang yang menghidupkan suasana dengan banyak cerita menarik.",
      "C": "Orang yang memastikan semua peserta merasa nyaman dalam berdiskusi.",
      "D": "Orang yang memberikan data dan fakta untuk mendukung argumen."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 713,
    "question": "Bagaimana reaksi saya jika saudara meminjam uang mendadak?",
    "options": {
      "A": "Merasa sungkan menolak meski saya sebenarnya juga sedang membutuhkan.",
      "B": "Menganalisis urgensi kebutuhannya dan mencatat transaksi tersebut secara rapi.",
      "C": "Menanyakan kepastian waktu pengembaliannya agar tidak mengganggu rencana saya.",
      "D": "Langsung meminjamkan jika ada, tanpa terlalu banyak pertimbangan."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 714,
    "question": "Sebagai pimpinan, gaya saya dalam mengambil keputusan adalah...",
    "options": {
      "A": "Memilih opsi yang paling menguntungkan bagi kemajuan organisasi saya.",
      "B": "Mempertimbangkan setiap risiko berdasarkan data yang sudah saya kumpulkan.",
      "C": "Mencari kesepakatan bersama agar tidak ada pihak yang merasa dirugikan.",
      "D": "Mengikuti insting yang saya rasa akan membuat tim senang."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 715,
    "question": "Saat menghadapi tetangga yang kurang menjaga kebersihan, saya...",
    "options": {
      "A": "Merasa sangat terganggu dan mulai membuat rencana aksi kebersihan.",
      "B": "Membiarkannya saja karena tidak ingin memicu pertengkaran antar tetangga.",
      "C": "Menegurnya sambil bercanda agar suasana lingkungan tidak menjadi kaku.",
      "D": "Menyampaikan keberatan secara langsung demi ketertiban dan kesehatan bersama."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 716,
    "question": "Reaksi saya saat menghadapi tumpukan cucian pakaian adalah...",
    "options": {
      "A": "Mengerjakannya sambil mendengarkan musik kencang agar terasa sangat menyenangkan.",
      "B": "Menyelesaikan semuanya secepat mungkin agar bisa segera mengerjakan lainnya.",
      "C": "Mengerjakannya perlahan tanpa mau merasa terlalu terbebani oleh cucian.",
      "D": "Menyusun cucian berdasarkan warna dan bahan secara sangat teliti."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 717,
    "question": "Dalam mengambil keputusan membeli alat elektronik, saya...",
    "options": {
      "A": "Memilih yang spesifikasinya paling mendukung efisiensi kerja harian saya.",
      "B": "Memilih merek yang sudah biasa digunakan agar merasa tetap aman.",
      "C": "Memilih yang modelnya paling trendi dan menarik perhatian mata.",
      "D": "Membaca ulasan teknis secara mendalam sebelum saya memutuskan membeli."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 718,
    "question": "Kegiatan saya saat sedang menunggu transportasi umum adalah...",
    "options": {
      "A": "Mencoba memulai obrolan ringan dengan sesama penumpang di sekitar.",
      "B": "Menunggu dengan sabar sambil melihat pemandangan di sekitar saya.",
      "C": "Melihat jadwal keberangkatan secara teliti agar tidak ada kesalahan.",
      "D": "Memeriksa daftar tugas di ponsel agar waktu tunggu tetap produktif."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 719,
    "question": "Cara saya menanggapi kritikan dari bawahan saya adalah...",
    "options": {
      "A": "Mendengarkan dengan sabar dan mencoba melakukan perbaikan demi tim.",
      "B": "Menganalisis kritik tersebut dan membuktikannya salah lewat prestasi kerja.",
      "C": "Menerimanya dengan senyuman dan berjanji akan menjadi atasan asyik.",
      "D": "Merenungkan kritik tersebut secara mendalam dan merasai setiap poinnya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 720,
    "question": "Apa cita-cita terbesar saya mengenai tempat tinggal?",
    "options": {
      "A": "Memiliki hunian mewah yang menunjukkan status kesuksesan hasil kerja.",
      "B": "Memiliki rumah yang sangat teratur dan sistemnya berjalan efisien.",
      "C": "Memiliki rumah yang tenang, asri, dan memberikan rasa nyaman.",
      "D": "Memiliki rumah yang sering digunakan untuk berkumpul bersama teman."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 721,
    "question": "Jika harus bekerja dalam lingkungan yang sangat berisik...",
    "options": {
      "A": "Saya ikut dalam keramaian tersebut jika topiknya menarik bagi.",
      "B": "Saya meminta orang lain untuk tenang karena mengganggu konsentrasi.",
      "C": "Saya memakai penutup telinga agar bisa tetap fokus pada detail.",
      "D": "Saya berusaha menyesuaikan diri dan tetap bekerja dengan tenang."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 722,
    "question": "Saat teman saya menceritakan rahasia pribadinya, reaksi saya...",
    "options": {
      "A": "Menyimak dengan penuh rasa empati dan menjaga kerahasiaannya sangat ketat.",
      "B": "Memberikan saran praktis agar masalah rahasia tersebut segera bisa selesai.",
      "C": "Duduk mendengarkan tanpa menghakimi dan memberikan rasa aman padanya.",
      "D": "Sangat antusias mendengarkannya namun terkadang sulit menjaganya tetap rahasia."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 723,
    "question": "Bagaimana sikap saya jika pasangan melupakan hari penting kami?",
    "options": {
      "A": "Mencoba memaklumi kesibukannya tanpa berniat menjadikannya masalah besar rumah.",
      "B": "Sedikit merajuk namun cepat memaafkan setelah diajak pergi jalan.",
      "C": "Merasa sedih secara mendalam dan meragukan kepedulian pasangan saya.",
      "D": "Menegurnya agar hal tersebut tidak terulang di masa depan nanti."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 724,
    "question": "Sebagai pimpinan, apa prioritas saya dalam mengelola tim?",
    "options": {
      "A": "Menyusun sistem kerja yang sangat rapi dan terdokumentasi dengan baik.",
      "B": "Menjaga stabilitas tim agar terhindar dari segala jenis konflik internal.",
      "C": "Membangun atmosfer kerja yang penuh dengan kegembiraan dan semangat.",
      "D": "Memastikan setiap anggota tim memberikan kontribusi maksimal bagi organisasi."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 725,
    "question": "Jika saya merasa dirugikan oleh layanan publik, tindakan saya...",
    "options": {
      "A": "Menceritakan kekecewaan saya di media sosial dengan gaya ekspresif.",
      "B": "Menerima keadaan tersebut dengan sabar dan berharap ada perbaikan nanti.",
      "C": "Menyampaikan komplain resmi agar pihak pengelola segera melakukan perbaikan.",
      "D": "Mencatat rincian kerugian saya dan mencari dasar hukum yang logis."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 726,
    "question": "Menghadapi perubahan cuaca yang merusak rencana, reaksi saya...",
    "options": {
      "A": "Mencari cara lain untuk tetap bersenang-senang di dalam ruangan.",
      "B": "Berpikir cepat mencari solusi agar target kegiatan tetap bisa tercapai.",
      "C": "Merasa sangat kecewa karena rencana detail saya menjadi berantakan total.",
      "D": "Menerima keadaan dengan tenang dan memilih untuk beristirahat di rumah."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 727,
    "question": "Dalam mengambil keputusan investasi kendaraan, prioritas saya adalah...",
    "options": {
      "A": "Fitur keamanan lengkap dan efisiensi bahan bakar yang sangat akurat.",
      "B": "Kenyamanan suspensi dan ruang kabin yang memberikan rasa sangat santai.",
      "C": "Model yang keren dan warna yang sangat menarik perhatian orang.",
      "D": "Performa mesin yang tangguh dan nilai jual kembali yang tinggi."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 728,
    "question": "Cara saya menata isi tas kerja saya biasanya...",
    "options": {
      "A": "Agak berantakan tapi saya tahu letak barang-barang yang sangat penting.",
      "B": "Hanya berisi barang yang menunjang produktivitas kerja harian saya saja.",
      "C": "Apa adanya selama barang-barang tersebut masih bisa masuk ke tas.",
      "D": "Sangat rapi dan barang disusun berdasarkan kategori serta ukuran tertentu."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 729,
    "question": "Gaya bicara saya saat sedang memotivasi orang lain...",
    "options": {
      "A": "Penuh semangat, ekspresif, dan menggunakan banyak kata yang sangat menginspirasi.",
      "B": "Sistematis, berdasarkan data nyata, dan memberikan arahan yang sangat jelas.",
      "C": "Sangat menenangkan, penuh empati, dan memberikan rasa aman bagi pendengar.",
      "D": "Tegas, lugas, dan menekankan pada pentingnya meraih keberhasilan masa depan."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 730,
    "question": "Harapan saya mengenai masa pensiun saya nanti adalah...",
    "options": {
      "A": "Dihormati karena pencapaian besar yang telah saya raih sebelumnya di.",
      "B": "Hidup bahagia bersama keluarga dalam suasana yang penuh kedamaian batin.",
      "C": "Tetap aktif bersosialisasi dan melakukan banyak kegiatan yang sangat menyenangkan.",
      "D": "Menikmati ketenangan hidup dengan rencana keuangan yang sudah sangat matang."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 731,
    "question": "Jika saya harus belajar keahlian baru di kantor...",
    "options": {
      "A": "Saya senang mencobanya langsung meskipun instruksinya belum saya baca tuntas.",
      "B": "Saya belajar perlahan-lahan sesuai dengan ritme yang paling membuat nyaman.",
      "C": "Saya fokus menguasai bagian yang paling meningkatkan efisiensi kerja saya.",
      "D": "Saya mempelajari setiap langkah teknis dengan tingkat ketelitian sangat tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 732,
    "question": "Saat teman memuji hasil karya saya, reaksi saya...",
    "options": {
      "A": "Merasa sangat senang dan menceritakan perjuangan saya dengan antusiasme tinggi.",
      "B": "Tersenyum ramah dan mengucapkan terima kasih atas apresiasi tulus tersebut.",
      "C": "Merasa bangga namun segera menganalisis bagian mana yang bisa ditingkatkan.",
      "D": "Menerimanya sebagai bukti bahwa target hasil kerja saya sudah tercapai."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 733,
    "question": "Kebiasaan saya saat ada kerabat yang merayakan keberhasilan...",
    "options": {
      "A": "Ikut merayakannya dengan sangat heboh agar suasana menjadi sangat meriah.",
      "B": "Menyampaikan apresiasi dan menanyakan rincian strategi keberhasilan kerabat saya tersebut.",
      "C": "Memberikan selamat dan menjadikannya motivasi untuk meraih sukses yang serupa.",
      "D": "Memberikan ucapan selamat yang hangat dan ikut merasa bahagia tenang."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "ringan"
  },
  {
    "id": 734,
    "question": "Sebagai pimpinan, apa tindakan saya jika anggota malas?",
    "options": {
      "A": "Mencari tahu penyebab kemalasannya secara personal sebelum saya bertindak lanjut.",
      "B": "Berusaha bersabar dan memberikan motivasi lembut agar dia mau bergerak.",
      "C": "Memberikan sanksi tegas sesuai aturan agar dia menjadi disiplin bekerja.",
      "D": "Mengajaknya bercanda agar dia merasa semangat untuk mulai bekerja lagi."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 735,
    "question": "Jika saya merasa dicurangi oleh rekan kerja saya...",
    "options": {
      "A": "Merasa sangat kecewa dan mulai menjaga jarak dengan rekan tersebut sementara.",
      "B": "Menghadapi rekan tersebut secara langsung dan menuntut penjelasan yang sangat jujur.",
      "C": "Mencoba mengklarifikasinya dengan cara yang santai agar tidak merusak pertemanan.",
      "D": "Membiarkannya saja karena saya yakin kebenaran pada akhirnya akan terungkap sendiri."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 736,
    "question": "Menghadapi situasi keuangan yang sedang tidak stabil, saya...",
    "options": {
      "A": "Mencatat setiap pengeluaran dan membuat rencana penghematan yang sangat ketat.",
      "B": "Berusaha tetap tenang dan percaya bahwa rezeki akan datang tepat waktu.",
      "C": "Bekerja lebih keras dan mencari penghasilan tambahan secepat mungkin tanpa.",
      "D": "Mencari hiburan murah meriah bersama teman agar stres sedikit berkurang."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 737,
    "question": "Dalam mengambil keputusan investasi masa tua, saya memilih...",
    "options": {
      "A": "Investasi yang memiliki profil risiko sangat rendah dan terencana matang.",
      "B": "Investasi yang sedang populer dan menjanjikan gaya hidup menyenangkan sekali.",
      "C": "Investasi yang memberikan kendali penuh dan keuntungan sangat besar bagiku.",
      "D": "Investasi yang paling aman dan memberikan ketenangan jangka panjang nanti."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 738,
    "question": "Cara saya merapikan koleksi barang pribadi saya adalah...",
    "options": {
      "A": "Menatanya dengan tingkat ketelitian tinggi berdasarkan kategori tertentu dan ukuran.",
      "B": "Memastikan koleksi tersebut terorganisir agar mudah saya tunjukkan pada orang.",
      "C": "Menaruhnya di tempat yang aman dan rapi tanpa harus terlalu berlebihan.",
      "D": "Membiarkannya seadanya selama saya masih merasa senang melihat koleksi tersebut."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 739,
    "question": "Gaya komunikasi saya dalam sebuah presentasi biasanya adalah...",
    "options": {
      "A": "Penuh dengan cerita menarik yang bisa menghibur seluruh audiens presentasi.",
      "B": "Tenang, sopan, dan memastikan semua audiens memahami pesan yang saya sampaikan.",
      "C": "To the point dan menekankan pada hasil nyata yang didapat kerja.",
      "D": "Sangat rapi, menggunakan data akurat, dan sangat sistematis sekali saya."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 740,
    "question": "Visi saya mengenai masa depan keluarga saya adalah memiliki...",
    "options": {
      "A": "Keluarga yang harmonis, tenang, dan saling mengasihi dalam segala situasi.",
      "B": "Keluarga yang sukses, mandiri, dan dihormati oleh lingkungan sosial sekitar.",
      "C": "Keluarga yang memiliki nilai-nilai moral sangat kuat dan disiplin tinggi.",
      "D": "Keluarga yang sangat ceria dan sering melakukan perjalanan bersama teman."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 741,
    "question": "Saat rekan kerja merayakan ulang tahun, sikap saya...",
    "options": {
      "A": "Menjadi orang yang paling heboh dalam memberikan ucapan dan kejutan.",
      "B": "Memberikan kado yang berguna untuk menunjang aktivitas kerjanya di kantor.",
      "C": "Ikut merayakan dengan tenang dan memberikan doa yang tulus padanya.",
      "D": "Mengingat tanggalnya dengan teliti dan memberikan ucapan yang sangat sopan."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 742,
    "question": "Jika teman saya meminjam barang dan merusaknya, saya...",
    "options": {
      "A": "Menanggapinya dengan santai dan mengatakan barang tersebut bisa diperbaiki lagi.",
      "B": "Merasa sangat kecewa secara internal dan butuh waktu untuk percaya.",
      "C": "Memaafkannya dengan tulus dan tidak ingin memperpanjang masalah demi pertemanan.",
      "D": "Memintanya bertanggung jawab untuk mengganti atau memperbaiki barang tersebut segera."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 743,
    "question": "Bagaimana reaksi saya jika ada saudara yang sedang bersedih?",
    "options": {
      "A": "Mengajaknya jalan-jalan agar dia bisa melupakan kesedihannya sejenak hari.",
      "B": "Membantunya mencari jalan keluar agar masalahnya cepat selesai secara tuntas.",
      "C": "Hadir di sisinya tanpa perlu banyak bicara untuk memberikan ketenangan.",
      "D": "Mendengarkan semua curhatannya dengan penuh simpati yang sangat dalam sekali."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 744,
    "question": "Sebagai pimpinan, apa prioritas saya dalam merekrut anggota?",
    "options": {
      "A": "Mencari orang yang kompeten, ambisius, dan berorientasi pada hasil kerja.",
      "B": "Mencari orang yang memiliki kepribadian ceria dan mudah bergaul tim.",
      "C": "Mencari orang yang sabar, penurut, dan bisa menjaga keharmonisan tim.",
      "D": "Mencari orang yang sangat teliti, jujur, dan memiliki integritas tinggi."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 745,
    "question": "Jika saya merasa dibohongi oleh orang terdekat, saya...",
    "options": {
      "A": "Menghadapinya langsung dan menuntut penjelasan yang jujur darinya saat itu.",
      "B": "Merenungkan hubungan kami dan butuh waktu lama untuk memaafkan kebohongannya.",
      "C": "Mencoba memaafkan dan berharap dia tidak akan mengulanginya lagi nanti.",
      "D": "Mengutarakan kekecewaan saya sambil menangis agar dia merasa kasihan pada."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 746,
    "question": "Reaksi saya saat menghadapi tekanan pekerjaan yang menumpuk...",
    "options": {
      "A": "Tetap tenang dan mengerjakan apa yang sanggup saya selesaikan harian.",
      "B": "Mencari teman mengobrol agar beban pikiran saya terasa lebih ringan.",
      "C": "Membuat jadwal kerja yang sangat ketat untuk menyelesaikan tugas satu-persatu.",
      "D": "Bekerja lebih keras dan fokus penuh agar semua pekerjaan tuntas."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 747,
    "question": "Dalam mengambil keputusan investasi masa depan, pertimbangan utama saya...",
    "options": {
      "A": "Investasi yang memiliki profil risiko sangat rendah dan terencana matang.",
      "B": "Investasi yang sedang populer dan menjanjikan gaya hidup menyenangkan sekali.",
      "C": "Investasi yang memberikan kendali penuh dan keuntungan sangat besar bagiku.",
      "D": "Investasi yang paling aman dan memberikan ketenangan jangka panjang nanti."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 748,
    "question": "Cara saya menata isi tas kerja saya harian biasanya...",
    "options": {
      "A": "Sangat rapi dan barang disusun berdasarkan kategori serta ukuran tertentu.",
      "B": "Agak berantakan tapi saya tahu letak barang-barang yang sangat penting.",
      "C": "Hanya berisi barang yang menunjang produktivitas kerja harian saya saja.",
      "D": "Apa adanya selama barang-barang tersebut masih bisa masuk ke tas."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 749,
    "question": "Gaya komunikasi saya saat sedang memotivasi orang lain...",
    "options": {
      "A": "Tegas, lugas, dan menekankan pada pentingnya meraih keberhasilan masa depan.",
      "B": "Penuh semangat, ekspresif, dan menggunakan banyak kata yang sangat menginspirasi.",
      "C": "Sistematis, berdasarkan data nyata, dan memberikan arahan yang sangat jelas.",
      "D": "Sangat menenangkan, penuh empati, dan memberikan rasa aman bagi pendengar."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 750,
    "question": "Visi saya mengenai masa depan rumah tangga adalah memiliki...",
    "options": {
      "A": "Keluarga yang harmonis dengan nilai-nilai moral yang sangat kuat sekali.",
      "B": "Keluarga yang sukses secara finansial dan prestasi sosial di masyarakat.",
      "C": "Rumah yang selalu ramai dengan keceriaan anak-anak dan juga teman.",
      "D": "Rumah tangga yang tenang, damai, dan penuh dengan kasih sayang."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 751,
    "question": "Jika teman mengajak pergi ke festival kuliner mendadak, saya...",
    "options": {
      "A": "Sangat antusias karena suka mencoba berbagai makanan baru yang enak.",
      "B": "Mempelajari daftar stand makanan agar kunjungan kami berjalan secara efisien.",
      "C": "Memilih makanan yang paling populer untuk membuktikan rasa penasaran saya.",
      "D": "Menikmati suasana festival dan mencoba makanan yang tidak terlalu aneh."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 752,
    "question": "Saat menghadapi rekan kerja yang memaksakan kehendak, saya...",
    "options": {
      "A": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas.",
      "B": "Menegurnya agar menghargai pendapat anggota lain demi kelancaran pekerjaan tim.",
      "C": "Mendengarkan pendapatnya dengan sabar dan mencoba mencari titik temu adil.",
      "D": "Mencoba mengalihkan pembicaraan dengan candaan agar suasana tidak kaku."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 753,
    "question": "Bagaimana reaksi saya jika ada saudara yang menang lomba?",
    "options": {
      "A": "Merayakannya dengan antusiasme sangat tinggi dan ikut merasa sangat bangga.",
      "B": "Mengucapkan selamat dan menanyakan tips kemenangannya secara sangat detail mendalam.",
      "C": "Menjadikannya motivasi untuk mengasah kemampuan saya lagi agar bisa menang.",
      "D": "Tersenyum tulus dan mendoakan agar kemenangannya memberikan kebahagiaan bagi keluarga."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 754,
    "question": "Sebagai pimpinan proyek konstruksi, fokus utama saya adalah...",
    "options": {
      "A": "Anggaran biaya yang sangat terinci dan pengerjaan yang sesuai jadwal.",
      "B": "Desain bangunan yang unik dan bisa menarik perhatian banyak orang.",
      "C": "Kerja sama antar pekerja yang harmonis tanpa adanya konflik internal.",
      "D": "Kekuatan bangunan yang bisa menjamin keamanan seluruh penghuni bangunan nantinya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 755,
    "question": "Jika saya merasa disingkirkan oleh teman-teman pergaulan, saya...",
    "options": {
      "A": "Mencoba mencari perhatian mereka kembali dengan cara menyenangkan sangat seru.",
      "B": "Menanyakan langsung alasan mengapa mereka menjauhi saya agar masalah selesai.",
      "C": "Membiarkannya saja karena saya yakin akan menemukan teman baru lebih.",
      "D": "Merasa sangat sedih dan mulai mempertanyakan kualitas pertemanan kami ini."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 756,
    "question": "Saat melihat berita bencana kemanusiaan di dunia, saya...",
    "options": {
      "A": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepatnya.",
      "B": "Menganalisis penyebab bencana tersebut dan merenungi nasib manusia di dunia.",
      "C": "Berdoa dengan tulus agar penderitaan mereka segera berakhir dan diberikan.",
      "D": "Sangat sedih dan segera membagikan berita tersebut agar banyak membantu."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 757,
    "question": "Dalam mengambil keputusan asuransi syariah pendidikan, saya memilih...",
    "options": {
      "A": "Yang memberikan jaminan dana pendidikan sesuai prinsip-prinsip ekonomi syariah.",
      "B": "Yang sudah terbukti memberikan rasa tenang dan keberkahan bagi masa.",
      "C": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi.",
      "D": "Yang memberikan banyak bonus tambahan seperti tabungan umroh keluarga seru."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 758,
    "question": "Kebiasaan saya saat sedang merawat rambut di salon...",
    "options": {
      "A": "Memperhatikan setiap langkah perawatan rambut dengan tingkat ketelitian sangat tinggi.",
      "B": "Menikmati proses perawatan rambut dengan tenang dan merasa sangat rileks.",
      "C": "Mengajak bicara kapsternya agar proses perawatan rambut terasa lebih menyenangkan.",
      "D": "Memilih jenis perawatan rambut yang paling efektif untuk kesehatan rambut."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 759,
    "question": "Cara saya menanggapi teman yang berbohong demi kebaikan...",
    "options": {
      "A": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan pertemanan kami.",
      "B": "Memaafkannya karena saya tahu dia bermaksud baik menjaga perasaan saya.",
      "C": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga.",
      "D": "Merasa kecewa karena kejujuran adalah dasar sebuah hubungan pertemanan kuat."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 760,
    "question": "Mengenai asuransi kecelakaan kerja, pertimbangan utama saya...",
    "options": {
      "A": "Yang memberikan jaminan ganti rugi paling besar bagi seluruh karyawan.",
      "B": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi.",
      "C": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi.",
      "D": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 761,
    "question": "Jika teman mengajak pergi ke pertunjukan sirkus, saya...",
    "options": {
      "A": "Sangat antusias karena suka atraksi yang unik dan menghibur hati.",
      "B": "Memperhatikan setiap detail gerakan pemain sirkus dengan tingkat ketelitian tinggi.",
      "C": "Menikmati pertunjukan sirkus dengan tenang dan merasa kagum atas kemampuan.",
      "D": "Memilih posisi duduk paling depan untuk melihat atraksi secara nyata."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 762,
    "question": "Saat menghadapi rekan kerja yang suka mengadu domba tim...",
    "options": {
      "A": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua tertawa.",
      "B": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas.",
      "C": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik.",
      "D": "Menghadapi rekan tersebut secara langsung agar tidak memecah belah persatuan."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 763,
    "question": "Bagaimana reaksi saya jika ada saudara yang melahirkan?",
    "options": {
      "A": "Mengucapkan selamat dan memperhatikan setiap rincian kebutuhan ibu dan bayi.",
      "B": "Sangat gembira dan segera menjenguknya dengan membawa kado sangat menarik.",
      "C": "Tersenyum bahagia dan mendoakan agar ibu dan bayi selalu sehat.",
      "D": "Memberikan saran perawatan bayi yang paling efektif berdasarkan informasi medis."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 764,
    "question": "Sebagai pimpinan organisasi kepemudaan, fokus utama saya adalah...",
    "options": {
      "A": "Kemandirian pemuda yang bisa memberikan kontribusi nyata bagi kemajuan bangsa.",
      "B": "Pengembangan karakter pemuda yang sangat terstruktur melalui pelatihan sangat disiplin.",
      "C": "Kegiatan yang inovatif dan bisa meningkatkan eksistensi pemuda di dunia.",
      "D": "Kerukunan antar pemuda agar organisasi tetap solid dan penuh kedamaian."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 765,
    "question": "Jika merasa dikritik habis-habisan oleh atasan saya sendiri...",
    "options": {
      "A": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja baik.",
      "B": "Menerimanya dengan senyuman dan berjanji akan memberikan performa lebih ceria.",
      "C": "Memikirkan kritik tersebut secara mendalam dan merasa sangat terpukul kata-katanya.",
      "D": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan tim."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 766,
    "question": "Saat melihat orang lain melakukan perbuatan curang diam-diam...",
    "options": {
      "A": "Merasa geram dan ingin segera melaporkan perbuatannya agar dia disanksi.",
      "B": "Berdoa agar dia segera menyadari kesalahannya dan kembali ke jalan.",
      "C": "Menghargai kejujuran sebagai bukti nyata bahwa masih banyak orang baik.",
      "D": "Merenungi makna kejujuran tersebut bagi kehidupan manusia secara sangat mendalam."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 767,
    "question": "Dalam mengambil keputusan asuransi syariah kesehatan, saya memilih...",
    "options": {
      "A": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh menyenangkan.",
      "B": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi.",
      "C": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial.",
      "D": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah tegas."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 768,
    "question": "Kebiasaan saya saat merawat wajah di klinik kecantikan...",
    "options": {
      "A": "Mengajak bicara perawatnya agar proses perawatan wajah terasa lebih menyenangkan.",
      "B": "Menikmati proses perawatan wajah dengan tenang dan merasa sangat rileks.",
      "C": "Memperhatikan setiap langkah perawatan wajah dengan tingkat ketelitian sangat tinggi.",
      "D": "Memilih jenis perawatan wajah yang paling efektif untuk kesehatan kulit."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 769,
    "question": "Cara saya menanggapi teman yang berbuat salah kantor...",
    "options": {
      "A": "Merasa kecewa karena kejujuran adalah dasar sebuah hubungan kerja kuat.",
      "B": "Memaafkannya karena saya tahu dia bermaksud baik menjaga prestasi kerjanya.",
      "C": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan kerja kami.",
      "D": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 770,
    "question": "Mengenai asuransi jiwa berjangka, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi.",
      "B": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi.",
      "C": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap.",
      "D": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga ada."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 771,
    "question": "Jika teman mengajak pergi ke pameran buku, saya...",
    "options": {
      "A": "Menikmati suasana pameran dan mencari buku ceritanya menenangkan bagi batin.",
      "B": "Mempelajari daftar penerbit dan jadwal acara dengan tingkat ketelitian tinggi.",
      "C": "Mencari buku yang bisa menunjang produktivitas kerja saya agar efisien.",
      "D": "Antusias karena bisa melihat buku baru menarik dan bertemu teman."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 772,
    "question": "Saat menghadapi rekan kerja suka menyalahkan orang lain...",
    "options": {
      "A": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas.",
      "B": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik.",
      "C": "Menghadapi rekan tersebut secara langsung agar tidak merusak keharmonisan tim.",
      "D": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua tertawa."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 773,
    "question": "Bagaimana reaksi saya jika ada saudara tertimpa musibah?",
    "options": {
      "A": "Menemaninya dengan sabar dan memberikan dukungan emosional menenangkan bagi dia.",
      "B": "Menganalisis penyebab masalahnya secara logis untuk mencari jalan keluar tepat.",
      "C": "Sangat sedih dan segera memberikan semangat emosional agar dia kuat.",
      "D": "Mencari cara praktis untuk membantunya menyelesaikan masalah tersebut secepat mungkin."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 774,
    "question": "Sebagai pimpinan, fokus utama membangun budaya tim adalah...",
    "options": {
      "A": "Kedisiplinan anggota tim yang sangat tinggi melalui penerapan aturan tegas.",
      "B": "Kemandirian anggota tim yang bisa memberikan kontribusi nyata bagi kesuksesan.",
      "C": "Kreativitas ide yang inovatif dan bisa menarik perhatian banyak orang.",
      "D": "Kerukunan antar anggota tim agar tim tetap solid dan penuh."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 775,
    "question": "Jika saya merasa dikritik secara pedas rekan kerja...",
    "options": {
      "A": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja baik.",
      "B": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan tim.",
      "C": "Menerimanya dengan senyuman dan berjanji akan memberikan performa lebih ceria.",
      "D": "Memikirkan kritik tersebut secara mendalam dan merasa sangat terpukul kata-katanya."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 776,
    "question": "Saat melihat orang melakukan perbuatan curang diam-diam harian...",
    "options": {
      "A": "Merasa geram dan ingin segera melaporkan perbuatannya agar dia disanksi.",
      "B": "Merenungi makna kejujuran tersebut bagi kehidupan manusia secara sangat mendalam.",
      "C": "Berdoa agar dia segera menyadari kesalahannya dan kembali ke jalan.",
      "D": "Menghargai kejujuran sebagai bukti nyata bahwa masih banyak orang baik."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 777,
    "question": "Dalam mengambil keputusan asuransi syariah pendidikan tinggi, saya...",
    "options": {
      "A": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi.",
      "B": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial.",
      "C": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh menyenangkan.",
      "D": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah tegas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 778,
    "question": "Kebiasaan saya saat merawat kesehatan tubuh harian adalah...",
    "options": {
      "A": "Mengajak teman berolahraga bersama agar prosesnya terasa lebih sangat menyenangkan.",
      "B": "Memperhatikan setiap detail asupan nutrisi dan jadwal olahraga sangat teliti.",
      "C": "Menikmati proses olahraga dengan tenang dan merasa sangat rileks batin.",
      "D": "Memilih jenis olahraga yang paling efektif menjaga kebugaran tubuh saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 779,
    "question": "Cara saya menanggapi teman berbuat salah lingkungan sosial...",
    "options": {
      "A": "Memaafkannya karena saya tahu dia bermaksud baik menjaga hubungannya.",
      "B": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga.",
      "C": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan sosial kami.",
      "D": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan sosial."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 780,
    "question": "Mengenai asuransi kematian berjangka, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap.",
      "B": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga ada.",
      "C": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi.",
      "D": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 781,
    "question": "Jika rekan kerja baru bergabung di divisi saya...",
    "options": {
      "A": "Saya langsung mengajaknya berkeliling kantor dan memperkenalkan ke semua orang.",
      "B": "Saya memberikan arahan tugas utama agar dia bisa segera produktif.",
      "C": "Saya menyambutnya dengan ramah dan membiarkannya beradaptasi secara perlahan.",
      "D": "Saya memberikan dokumen prosedur kerja yang lengkap untuk dia pelajari."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 782,
    "question": "Saat menghadapi kemacetan panjang di akhir pekan, saya...",
    "options": {
      "A": "Terus memantau aplikasi navigasi untuk mencari jalur alternatif tercepat.",
      "B": "Menunggu dengan tenang sambil menikmati udara di dalam kendaraan saja.",
      "C": "Mengevaluasi efisiensi waktu perjalanan saya dan merencanakan jadwal ulang.",
      "D": "Menikmati musik kencang atau mengajak penumpang lain bernyanyi bersama."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 783,
    "question": "Bagaimana sikap saya jika ada anggota keluarga berbeda pendapat?",
    "options": {
      "A": "Menganalisis setiap pendapat secara logis sebelum saya memberikan tanggapan resmi.",
      "B": "Mencoba mencairkan suasana dengan humor agar pembicaraan tetap terasa asyik.",
      "C": "Menjelaskan posisi saya secara kuat agar mereka memahami keuntungan ide.",
      "D": "Mendengarkan semua pihak demi menjaga kerukunan dan kedamaian dalam keluarga."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 784,
    "question": "Sebagai pimpinan, apa prioritas saya dalam mengoordinasi kegiatan?",
    "options": {
      "A": "Memastikan semua anggota merasa senang dan bersemangat selama kegiatan berlangsung.",
      "B": "Memastikan pembagian tugas adil sehingga tidak ada anggota merasa terbebani.",
      "C": "Memastikan semua target kegiatan tercapai sesuai dengan jadwal yang ditetapkan.",
      "D": "Memastikan setiap rincian teknis pengerjaan dilakukan dengan standar kualitas tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 785,
    "question": "Jika saya merasa dicurangi oleh penjual di toko daring...",
    "options": {
      "A": "Melaporkan akun tersebut ke pihak pengelola platform agar segera ditindak.",
      "B": "Mengumpulkan semua bukti transaksi dan rincian chat untuk proses klaim.",
      "C": "Menerima kejadian tersebut sebagai pelajaran dan tidak akan belanja di sana.",
      "D": "Mengutarakan kekecewaan saya di kolom komentar dengan gaya bahasa ekspresif."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 786,
    "question": "Reaksi saya saat melihat berita tentang kesenjangan ekonomi dunia...",
    "options": {
      "A": "Merasa sedih dan ingin segera melakukan penggalangan dana sosial besar.",
      "B": "Berpikir tentang cara meningkatkan produktivitas agar saya tidak mengalami kesulitan.",
      "C": "Berdoa agar sistem ekonomi menjadi lebih adil dan merata bagi semua.",
      "D": "Menganalisis faktor penyebab kesenjangan tersebut secara mendalam berdasarkan teori ekonomi."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 787,
    "question": "Dalam mengambil keputusan investasi pendidikan, pertimbangan utama saya...",
    "options": {
      "A": "Sekolah yang menjamin kesuksesan karier dan kemandirian finansial di masa.",
      "B": "Sekolah yang populer dan memberikan banyak pengalaman interaksi sosial seru.",
      "C": "Sekolah yang memberikan lingkungan belajar yang tenang dan nyaman bagi.",
      "D": "Sekolah yang memiliki standar akademik tinggi dan kurikulum sangat terencana."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 788,
    "question": "Kebiasaan saya saat merapikan dokumen di meja kerja...",
    "options": {
      "A": "Menyusun dokumen dalam map berwarna-warni sesuai dengan kategori dan abjad.",
      "B": "Menata dokumen seperlunya saja sesuai dengan urutan yang paling sering.",
      "C": "Membuang dokumen yang sudah tidak diperlukan agar meja tetap efisien.",
      "D": "Menumpuknya saja yang penting meja masih terlihat menyenangkan bagi saya."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 789,
    "question": "Cara saya menanggapi teman yang lupa membalas pesan saya...",
    "options": {
      "A": "Menanyakan langsung alasan kenapa dia belum membalas pesan penting saya.",
      "B": "Menunggu dengan sabar sampai dia memiliki waktu luang untuk membalas.",
      "C": "Berpikir apakah ada kata-kata saya yang menyinggung atau kurang tepat.",
      "D": "Mengirimkan pesan lucu atau meme agar dia segera ingat membalas."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 790,
    "question": "Mengenai asuransi properti, pertimbangan utama saya dalam memilih...",
    "options": {
      "A": "Yang memberikan rasa aman jangka panjang bagi seluruh aset keluarga.",
      "B": "Yang memberikan jaminan perlindungan total jika terjadi kerusakan pada bangunan.",
      "C": "Yang memiliki reputasi perusahaan solid dan rincian klaim yang transparan.",
      "D": "Yang preminya terjangkau dan proses pendaftarannya bisa dilakukan lewat daring."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 791,
    "question": "Jika teman mengajak pergi ke tempat bermain trampolin...",
    "options": {
      "A": "Berusaha melakukan gerakan tersulit untuk membuktikan ketangkasan saya di depan.",
      "B": "Menikmati permainan dengan hati-hati agar tidak terjadi cedera yang tidak.",
      "C": "Memperhatikan instruksi keamanan dengan sangat teliti sebelum saya mulai melompat.",
      "D": "Sangat antusias karena suka aktivitas fisik yang seru dan menyenangkan."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 792,
    "question": "Saat menghadapi rekan kerja yang suka menyela diskusi...",
    "options": {
      "A": "Tertawa dan membiarkannya bicara dulu lalu saya lanjut bicara kembali.",
      "B": "Menegurnya agar mendengarkan saya dulu sampai selesai demi kelancaran diskusi.",
      "C": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas.",
      "D": "Menunggu dia selesai bicara baru kemudian saya menyampaikan poin penting."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 793,
    "question": "Bagaimana reaksi saya jika ada saudara yang menang kompetisi?",
    "options": {
      "A": "Tersenyum tulus dan mendoakan agar kemenangannya memberikan kebahagiaan bagi keluarga.",
      "B": "Mengucapkan selamat dan menanyakan tips kemenangannya secara sangat detail.",
      "C": "Merayakannya dengan antusiasme yang tinggi dan ikut merasa sangat bangga.",
      "D": "Menjadikannya motivasi untuk mengasah kemampuan saya lagi agar bisa menang."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 794,
    "question": "Sebagai pimpinan proyek riset alam, fokus utama saya...",
    "options": {
      "A": "Keakuratan hasil riset yang bisa memberikan kontribusi nyata bagi ilmu.",
      "B": "Kreativitas ide riset yang bisa menarik perhatian banyak orang di.",
      "C": "Metodologi riset yang sangat terstruktur dan data yang tercatat secara.",
      "D": "Kerja sama tim peneliti yang harmonis tanpa adanya konflik internal."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 795,
    "question": "Jika saya merasa dikhianati oleh sahabat karib sendiri...",
    "options": {
      "A": "Menghadapinya secara langsung dan menuntut penjelasan yang jujur atas pengkhianatannya.",
      "B": "Mengutarakan kekecewaan saya sambil menangis agar dia menyadari kesalahannya segera.",
      "C": "Merenungkan hubungan kami dan memikirkan segala konsekuensi di masa depan.",
      "D": "Mencoba memaafkan dan memberikan kesempatan kedua demi keutuhan persahabatan kami."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 796,
    "question": "Saat melihat berita tentang penderitaan orang lain, saya...",
    "options": {
      "A": "Sangat sedih dan segera membagikan berita tersebut agar banyak membantu.",
      "B": "Berdoa dengan tulus agar penderitaan mereka segera berakhir dan diberikan.",
      "C": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepat.",
      "D": "Menganalisis penyebab penderitaan mereka dan merenungi nasib manusia di dunia."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 797,
    "question": "Dalam mengambil keputusan asuransi jiwa pendidikan, saya memilih...",
    "options": {
      "A": "Yang sudah terbukti terpercaya oleh banyak orang tua lainnya selama.",
      "B": "Yang memberikan jaminan dana pendidikan paling besar di masa depan.",
      "C": "Yang memiliki rincian polis paling transparan dan terpercaya secara administrasi.",
      "D": "Yang memberikan banyak bonus tambahan seperti tabungan liburan keluarga seru."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 798,
    "question": "Kebiasaan saya saat merawat tanaman di kebun rumah...",
    "options": {
      "A": "Merawat tanaman sambil mengajak mereka bicara agar tumbuh dengan sangat.",
      "B": "Memperhatikan kondisi setiap daun dan akar tanaman dengan tingkat ketelitian.",
      "C": "Menikmati ketenangan di kebun sambil menyiram tanaman dengan penuh rasa.",
      "D": "Menata tanaman agar terlihat sangat rapi dan memberikan kesan rumah."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 799,
    "question": "Cara saya menanggapi teman yang berbuat salah kepada...",
    "options": {
      "A": "Menegurnya agar dia menyadari kesalahannya dan tidak mengulanginya lagi di.",
      "B": "Merasa sedih secara mendalam dan butuh waktu lama untuk memulihkan.",
      "C": "Mencoba memaklumi kesalahannya demi menjaga keharmonisan dalam hubungan pertemanan kami.",
      "D": "Memaafkannya dengan cepat agar pertemanan kami tetap berjalan sangat asyik."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 800,
    "question": "Mengenai asuransi gadget harian, pertimbangan utama saya dalam...",
    "options": {
      "A": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap.",
      "B": "Yang memiliki rincian perlindungan paling lengkap dan transparan secara administrasi.",
      "C": "Yang memberikan jaminan ganti rugi total jika gadget saya hilang.",
      "D": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 801,
    "question": "Saat baru masuk kantor setelah libur panjang, saya biasanya...",
    "options": {
      "A": "Merapikan jadwal agar transisi kerja berjalan dengan sempurna.",
      "B": "Langsung memeriksa daftar pekerjaan yang harus segera diselesaikan.",
      "C": "Bercerita heboh tentang pengalaman liburan kepada rekan kerja.",
      "D": "Menikmati suasana kantor yang tenang sebelum mulai bekerja."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 802,
    "question": "Jika saya harus bekerja di luar ruangan, saya...",
    "options": {
      "A": "Sangat senang karena bisa melihat suasana baru yang segar.",
      "B": "Fokus menyelesaikan tugas agar bisa segera kembali ke kantor.",
      "C": "Menjalankannya dengan santai selama cuaca mendukung kenyamanan saya.",
      "D": "Menyiapkan perlengkapan pelindung diri dengan sangat lengkap dan teliti."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 803,
    "question": "Bagaimana reaksi saya saat mendapat pujian atas ide saya?",
    "options": {
      "A": "Tersenyum sopan dan merasa tenang karena kontribusi saya dihargai.",
      "B": "Merasa bangga dan menceritakan ide-ide menarik lainnya kepada mereka.",
      "C": "Menerimanya sebagai dorongan untuk mencapai target yang lebih besar.",
      "D": "Berterima kasih sambil memikirkan bagaimana cara menyempurnakan ide tersebut."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 804,
    "question": "Saat terjadi gangguan teknis saat presentasi, saya akan...",
    "options": {
      "A": "Menunggu dengan sabar sampai teknisi berhasil memperbaiki gangguan tersebut.",
      "B": "Segera mencari solusi atau bantuan teknis dengan sangat tegas.",
      "C": "Mencoba bercanda agar audiens tidak merasa bosan menunggu perbaikan.",
      "D": "Merasa cemas karena urutan presentasi saya menjadi kurang sempurna."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 805,
    "question": "Apa yang saya lakukan jika rekan kerja meminta bantuan?",
    "options": {
      "A": "Membantunya secepat mungkin agar dia bisa kembali produktif bekerja.",
      "B": "Membantunya dengan penuh kesabaran sampai dia benar-benar mengerti maksudnya.",
      "C": "Memberikan panduan langkah demi langkah agar dia tidak salah lagi.",
      "D": "Membantunya dengan semangat sambil mengobrol tentang banyak hal seru."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 806,
    "question": "Sikap saya terhadap pelatihan keterampilan baru di kantor adalah...",
    "options": {
      "A": "Antusias karena bisa berinteraksi dengan peserta dari divisi lain.",
      "B": "Fokus pada materi yang bisa meningkatkan daya saing karier saya.",
      "C": "Mengikuti pelatihan dengan tenang sesuai jadwal yang telah ditentukan.",
      "D": "Mencatat setiap teori dengan sangat detail untuk dipelajari kembali."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 807,
    "question": "Jika saya melihat sistem kerja yang tidak efisien, saya...",
    "options": {
      "A": "Menunggu instruksi perubahan dari atasan demi menjaga struktur organisasi.",
      "B": "Menganalisis letak kegagalan sistem berdasarkan data yang sangat akurat.",
      "C": "Mengusulkan ide-ide kreatif yang mungkin bisa membuat kerja asyik.",
      "D": "Langsung mengambil inisiatif untuk memperbaiki sistem tersebut secara tegas."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "dalam"
  },
  {
    "id": 808,
    "question": "Saat menghadapi klien yang sangat ragu-ragu, saya akan...",
    "options": {
      "A": "Mendengarkan semua kekhawatirannya dengan sabar tanpa mau mendesak klien.",
      "B": "Memberikan data perbandingan yang sangat lengkap agar klien yakin.",
      "C": "Menjelaskan keuntungan produk secara tegas agar klien segera memutuskan.",
      "D": "Membangun hubungan akrab agar klien merasa nyaman dengan saya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "dalam"
  },
  {
    "id": 809,
    "question": "Cara saya menghadapi mutasi jabatan ke divisi baru adalah...",
    "options": {
      "A": "Melihatnya sebagai kesempatan untuk mendapatkan banyak teman-teman baru lagi.",
      "B": "Berusaha beradaptasi perlahan tanpa ingin menimbulkan banyak konflik baru.",
      "C": "Mengevaluasi risiko dan prosedur kerja di divisi baru tersebut dahulu.",
      "D": "Mempelajari tantangan jabatan baru agar saya bisa segera berprestasi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "dalam"
  },
  {
    "id": 810,
    "question": "Mengenai target kerja bulanan, prinsip hidup saya adalah...",
    "options": {
      "A": "Target harus terencana matang agar hasilnya sesuai standar kualitas.",
      "B": "Target yang realistis memberikan ketenangan dalam bekerja setiap harinya.",
      "C": "Target adalah tantangan utama yang harus saya taklukkan segera.",
      "D": "Target harus dicapai dengan cara yang menyenangkan dan ceria."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "dalam"
  },
  {
    "id": 811,
    "question": "Jika teman mengajak patungan bisnis kecil-kecilan, saya biasanya...",
    "options": {
      "A": "Tertarik karena bisa bekerja sambil bermain bersama teman dekat.",
      "B": "Menilai potensi keuntungan dan seberapa cepat modal akan kembali.",
      "C": "Ikut saja asalkan modalnya kecil dan tidak terlalu berisiko.",
      "D": "Meminta proposal bisnis tertulis dan juga rincian riset pasar."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 812,
    "question": "Saat melihat teman mengenakan pakaian yang kurang cocok, saya...",
    "options": {
      "A": "Memberitahunya sambil sedikit bercanda agar suasana tetap terasa asyik.",
      "B": "Mempertimbangkan apakah komentar saya akan menyinggung perasaannya secara mendalam.",
      "C": "Memilih untuk tidak berkomentar demi menjaga kedamaian dan keharmonisan.",
      "D": "Menyarankan gaya lain yang lebih menonjolkan keunggulannya secara tegas."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 813,
    "question": "Bagaimana reaksi saya jika teman tidak mengundang saya ke acaranya?",
    "options": {
      "A": "Merenungkan apakah saya telah melakukan kesalahan yang membuat dia menjauh.",
      "B": "Awalnya sedih tapi segera mencari kesibukan lain bersama teman lainnya.",
      "C": "Menanyakan langsung padanya kenapa saya tidak disertakan dalam undangan tersebut.",
      "D": "Memaklumi keadaannya dan menganggap hal tersebut bukan masalah besar bagi."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 814,
    "question": "Apa yang saya lakukan saat ada teman yang sedang bergosip?",
    "options": {
      "A": "Ikut mendengarkan dengan antusias asalkan ceritanya sangat menarik bagi saya.",
      "B": "Mendengarkan saja tanpa berniat ikut campur atau menyebarkan cerita tersebut.",
      "C": "Menghentikan pembicaraan tersebut karena dirasa tidak produktif bagi siapa pun.",
      "D": "Menganalisis kebenaran cerita tersebut sebelum saya memutuskan untuk ikut bicara."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 815,
    "question": "Jika teman meminta saran mengenai masalah pribadinya, saya...",
    "options": {
      "A": "Memberikan kata-kata motivasi yang penuh dengan aura positif dan semangat.",
      "B": "Memberikan langkah-langkah konkret yang harus dia lakukan segera tanpa menunda.",
      "C": "Menjadi pendengar yang baik dan mendukung apa pun pilihannya nanti.",
      "D": "Menanyakan banyak pertanyaan untuk memahami akar permasalahannya secara sangat utuh."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 816,
    "question": "Saat teman saya sedang merasa sangat percaya diri, saya...",
    "options": {
      "A": "Menilai apakah kepercayaan dirinya tersebut didukung oleh fakta dan data.",
      "B": "Tersenyum ramah dan merasa tenang melihatnya sedang merasa bahagia batin.",
      "C": "Mendorongnya untuk menggunakan kepercayaan dirinya itu guna mencapai prestasi besar.",
      "D": "Ikut memujinya dengan sangat heboh agar dia merasa semakin senang."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 817,
    "question": "Jika teman saya tiba-tiba menjauh tanpa alasan jelas, saya...",
    "options": {
      "A": "Menunggu sampai dia siap bercerita sambil tetap bersikap baik kepadanya.",
      "B": "Mencoba menghubunginya sesekali dengan candaan agar dia kembali mendekat lagi.",
      "C": "Menanyakan alasannya secara langsung agar masalah di antara kami tuntas.",
      "D": "Menganalisis riwayat percakapan kami untuk mencari tahu di mana letak kesalahan."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 818,
    "question": "Sikap saya saat melihat teman sukses dalam kariernya adalah...",
    "options": {
      "A": "Mengucapkan selamat sambil menanyakan strategi apa yang telah dia lakukan.",
      "B": "Merayakannya dengan antusiasme yang tinggi dan ikut merasa sangat bangga.",
      "C": "Memberikan apresiasi tulus dan merasa tenang melihat teman sudah hidup bahagia.",
      "D": "Menjadikannya motivasi agar saya bisa mengejar kesuksesan yang serupa dengannya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 819,
    "question": "Dalam kelompok pertemanan, saya biasanya dikenal sebagai...",
    "options": {
      "A": "Si pendengar setia yang selalu ada di saat teman butuh.",
      "B": "Si pemikir yang selalu memberikan saran logis dan sangat matang.",
      "C": "Si pengambil keputusan yang menentukan ke mana tim akan pergi.",
      "D": "Si penceria suasana yang selalu punya cerita lucu setiap saat."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 820,
    "question": "Apa yang paling saya hindari dalam sebuah hubungan pertemanan?",
    "options": {
      "A": "Konflik dan perdebatan yang bisa merusak keharmonisan hubungan pertemanan kami.",
      "B": "Teman yang tidak bisa diandalkan atau tidak memiliki ambisi hidup.",
      "C": "Orang yang sering melanggar janji atau tidak memiliki integritas moral.",
      "D": "Situasi yang membosankan dan teman yang terlalu kaku sikapnya."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "dalam"
  },
  {
    "id": 821,
    "question": "Saat makan malam bersama keluarga besar, posisi saya adalah...",
    "options": {
      "A": "Membahas rencana atau kesuksesan keluarga di masa yang akan datang.",
      "B": "Menceritakan banyak lelucon agar suasana meja makan menjadi sangat meriah.",
      "C": "Memperhatikan apakah semua peralatan makan sudah tertata dengan sangat rapi.",
      "D": "Duduk tenang sambil menikmati makanan dan mendengarkan percakapan anggota lain."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "keluarga",
    "level": "ringan"
  },
  {
    "id": 822,
    "question": "Bagaimana reaksi saya jika ada anggota keluarga yang sakit?",
    "options": {
      "A": "Menjaga jadwal minum obatnya dengan sangat teliti dan juga disiplin.",
      "B": "Membawakan makanan kesukaannya dan menghiburnya agar dia cepat merasa senang.",
      "C": "Mencari pengobatan terbaik agar anggota keluarga saya segera mendapatkan kesembuhan.",
      "D": "Menemaninya dengan penuh kesabaran dan menjaga ketenangan di sekitar tempatnya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 823,
    "question": "Jika terjadi perselisihan pembagian tugas di rumah, saya...",
    "options": {
      "A": "Mengerjakan bagian saya dengan tenang dan berharap anggota lain juga menyadarinya.",
      "B": "Mencoba mengajak anggota keluarga bercanda agar ketegangan segera menghilang kembali.",
      "C": "Membuat daftar rincian tugas yang harus diselesaikan setiap anggota keluarga.",
      "D": "Memberikan instruksi pembagian tugas yang adil menurut pandangan saya secara."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 824,
    "question": "Sikap saya terhadap tradisi keluarga yang sudah turun-temurun adalah...",
    "options": {
      "A": "Memperbaikinya jika tradisi tersebut dirasa tidak lagi memberikan manfaat nyata.",
      "B": "Menghormatinya karena tradisi tersebut memiliki makna sejarah yang sangat mendalam.",
      "C": "Mengikutinya dengan gembira karena momen tersebut sangat seru dilakukan bersama.",
      "D": "Menjalankannya dengan setia demi menjaga keutuhan dan kedamaian tali persaudaraan."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 825,
    "question": "Jika orang tua saya sedang merasa sedih, tindakan saya...",
    "options": {
      "A": "Mendengarkan keluh kesah mereka dengan penuh empati dan perhatian yang dalam.",
      "B": "Mencoba menghibur mereka dengan cerita-cerita yang bisa memancing tawa mereka.",
      "C": "Menemani mereka dalam diam agar mereka tidak merasa sendirian menghadapi masalah.",
      "D": "Mencari solusi praktis agar masalah yang membuat mereka sedih segera tuntas."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 826,
    "question": "Saat ada saudara yang meminta nasihat pernikahan, saya akan...",
    "options": {
      "A": "Menyarankan agar mereka menjaga nilai-nilai moral dan keteraturan di dalam rumah.",
      "B": "Menyarankan agar mereka selalu menciptakan suasana yang ceria dalam rumah tangga.",
      "C": "Menyarankan agar mereka fokus pada kemandirian ekonomi dan pencapaian target keluarga.",
      "D": "Menyarankan agar mereka selalu mengedepankan kesabaran dan juga kerukunan antar pasangan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 827,
    "question": "Bagaimana gaya saya saat merencanakan liburan bersama keluarga?",
    "options": {
      "A": "Menyusun anggaran biaya dan rencana aktivitas harian secara sangat detail sekali.",
      "B": "Menentukan jadwal keberangkatan dan rute perjalanan yang paling cepat sampai tujuan.",
      "C": "Mengusulkan tempat yang paling populer dan menawarkan banyak hiburan yang seru.",
      "D": "Menunggu kesepakatan anggota keluarga lain baru kemudian saya ikut saja nanti."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 828,
    "question": "Jika ada anak di keluarga yang melakukan kesalahan, saya...",
    "options": {
      "A": "Memaafkannya dengan kasih sayang dan membimbingnya agar tidak mengulanginya di masa.",
      "B": "Mendiskusikan kesalahan tersebut secara logis agar dia paham letak salah tindakannya.",
      "C": "Menegurnya dengan cara yang menyenangkan agar dia tidak merasa takut lagi.",
      "D": "Memberikan pengertian tegas tentang konsekuensi dari kesalahan yang telah dia perbuat."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 829,
    "question": "Apa prioritas utama saya dalam membangun sebuah rumah tangga?",
    "options": {
      "A": "Menjamin kemapanan ekonomi dan juga masa depan yang sukses bagi keluarga.",
      "B": "Menciptakan kedamaian dan kerukunan antar seluruh anggota keluarga di dalam rumah.",
      "C": "Mendidik anggota keluarga dengan kedisiplinan dan nilai-nilai moral yang tinggi.",
      "D": "Menciptakan suasana rumah yang penuh dengan keceriaan dan tawa setiap harinya."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 830,
    "question": "Sikap saya saat menghadapi perdebatan tentang urusan keluarga...",
    "options": {
      "A": "Menjelaskan posisi saya secara kuat agar mereka memahami sudut pandang saya.",
      "B": "Mencoba mencari topik lain agar suasana rumah tidak menjadi kaku tegang.",
      "C": "Berusaha menjembatani perbedaan tersebut agar kerukunan keluarga tetap terjaga dengan baik.",
      "D": "Menganalisis mana pendapat yang paling benar berdasarkan fakta-fakta yang ada saat."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 831,
    "question": "Gaya saya saat memimpin tim yang sedang menghadapi krisis...",
    "options": {
      "A": "Memberikan semangat kepada semua orang agar tetap merasa optimis dan ceria.",
      "B": "Berpikir keras mencari solusi yang paling aman dan memiliki risiko kecil.",
      "C": "Menenangkan semua orang agar tidak terjadi kepanikan massal di dalam tim.",
      "D": "Mengambil kendali penuh dan memberikan instruksi yang sangat cepat dan tegas."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 832,
    "question": "Sebagai pemimpin, apa yang paling saya harapkan dari anggota?",
    "options": {
      "A": "Ketelitian mereka dalam pengerjaan tugas agar hasilnya selalu sempurna dan rapi.",
      "B": "Kecepatan kerja mereka dalam menyelesaikan tugas sesuai dengan target yang ada.",
      "C": "Keceriaan mereka dalam bekerja dan loyalitas yang sangat tinggi kepada tim.",
      "D": "Kepatuhan mereka dalam mengikuti arahan demi menjaga keharmonisan di dalam tim."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 833,
    "question": "Jika bawahan saya melakukan prestasi kerja yang luar biasa...",
    "options": {
      "A": "Memberinya pujian publik agar dia merasa bangga dan seluruh tim mengetahuinya.",
      "B": "Tersenyum bangga dan mengucapkan terima kasih secara personal yang sangat hangat.",
      "C": "Memberinya bonus atau kenaikan posisi sebagai bentuk penghargaan nyata atas kerja.",
      "D": "Mengucapkan selamat dan memintanya mempertahankan kualitas kerja yang sudah sangat baik."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 834,
    "question": "Cara saya menghadapi anggota tim yang memiliki karakter dominan...",
    "options": {
      "A": "Menegurnya secara tegas jika tindakannya mulai mengganggu efisiensi kerja tim kami.",
      "B": "Mengajaknya mengobrol santai agar dia merasa dihargai tanpa harus mendominasi lagi.",
      "C": "Memberikannya ruang untuk berkreasi namun tetap dalam pengawasan arahan dari saya.",
      "D": "Menganalisis cara terbaik untuk memanfaatkan energinya demi kemajuan tujuan organisasi kita."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 835,
    "question": "Bagaimana reaksi saya jika ide kepemimpinan saya ditolak tim?",
    "options": {
      "A": "Merasa kecewa dan mulai mempertanyakan di mana letak kesalahan ide tersebut.",
      "B": "Menerima keputusan kelompok tanpa rasa sakit hati demi menjaga persatuan tim.",
      "C": "Berusaha keras meyakinkan mereka mengapa ide saya adalah yang terbaik saat.",
      "D": "Segera mencari ide lain yang mungkin lebih menarik minat mereka kembali."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 836,
    "question": "Sikap saya terhadap pembagian keuntungan dalam tim adalah...",
    "options": {
      "A": "Mengusulkan pembagian yang bisa membuat semua anggota merasa senang dan bahagia.",
      "B": "Membuat rincian perhitungan yang sangat adil dan terbuka bagi seluruh anggota.",
      "C": "Menyetujui sistem pembagian yang paling aman dan tidak memicu konflik internal.",
      "D": "Membaginya secara efisien sesuai dengan kontribusi nyata dari masing-masing anggota tim."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 837,
    "question": "Sebagai pimpinan, fokus utama saya dalam membangun budaya tim...",
    "options": {
      "A": "Menjaga kerukunan antar anggota agar tim tetap solid dan penuh kedamaian.",
      "B": "Mendorong kemandirian anggota agar mereka bisa memberikan kontribusi nyata bagi tim.",
      "C": "Membangun karakter anggota yang disiplin melalui pelatihan yang sangat terencana matang.",
      "D": "Menciptakan suasana kerja yang penuh dengan keceriaan dan juga semangat harian."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 838,
    "question": "Cara saya memperkenalkan visi misi baru kepada organisasi...",
    "options": {
      "A": "Memberikan penjelasan teknis yang mendalam disertai dengan data-data yang sangat akurat.",
      "B": "Presentasi yang penuh antusiasme agar seluruh anggota merasa sangat tertarik sekali.",
      "C": "Menonjolkan manfaat praktis dan keunggulan visi tersebut dibandingkan dengan yang sebelumnya.",
      "D": "Memberikan pendekatan personal yang sopan dan memberikan rasa aman bagi seluruh anggota."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 839,
    "question": "Apa tindakan saya jika ada anggota tim yang melanggar aturan?",
    "options": {
      "A": "Saya mencoba lebih sabar dalam membimbingnya sampai dia benar-benar bisa disiplin.",
      "B": "Menganalisis penyebab kesalahannya dan memberikan instruksi baru yang jauh lebih jelas.",
      "C": "Menegurnya sambil memberikan motivasi agar dia tidak sedih dan kembali semangat.",
      "D": "Memberikan peringatan tegas agar dia segera berubah perilaku dan mematuhi aturan."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 840,
    "question": "Gaya bicara saya saat sedang memimpin rapat yang alot...",
    "options": {
      "A": "Tegas dalam mengarahkan pembicaraan agar segera mencapai keputusan yang sangat final.",
      "B": "Menjadi fasilitator yang sabar dalam mendengarkan setiap masukan dari seluruh peserta rapat.",
      "C": "Mencoba mencairkan suasana dengan berbagai cerita lucu dan penuh semangat tinggi.",
      "D": "Membedah setiap argumen secara logis dan sangat detail untuk mencari solusi tepat."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 841,
    "question": "Ketika merasa diperlakukan tidak adil oleh atasan, saya...",
    "options": {
      "A": "Menganalisis letak kesalahan saya berdasarkan aturan perusahaan secara sangat mendalam.",
      "B": "Memilih diam dan mengerjakan tugas sebaik-baiknya agar suasana kantor tetap damai.",
      "C": "Curhat ke teman kantor agar beban hati saya sedikit berkurang hari.",
      "D": "Menghadapinya langsung untuk menanyakan alasan perlakuan tersebut kepada saya secara."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 842,
    "question": "Jika teman saya membatalkan janji main secara mendadak...",
    "options": {
      "A": "Saya merasa sangat kecewa karena jadwal saya jadi berantakan saat itu.",
      "B": "Saya segera mencari teman lain untuk diajak pergi bersenang-senang lagi.",
      "C": "Saya memaklumi dan memilih untuk beristirahat dengan tenang di rumah saja.",
      "D": "Saya menanyakan alasan logis kenapa dia sampai membatalkan janji temu tersebut."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "konflik",
    "level": "ringan"
  },
  {
    "id": 843,
    "question": "Jika terjadi kesalahpahaman dengan tetangga sekitar rumah, saya...",
    "options": {
      "A": "Menjelaskan duduk perkara secara langsung agar masalah cepat selesai secara tuntas.",
      "B": "Membiarkan situasi mendingin dulu demi menghindari pertengkaran terbuka yang tidak perlu.",
      "C": "Mengajak mereka mengobrol santai untuk mencairkan ketegangan yang sedang terjadi.",
      "D": "Merenungkan penyebab masalah tersebut sebelum saya memutuskan untuk bicara dengan mereka."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 844,
    "question": "Jika ada orang yang mengkritik pilihan hidup saya, reaksi...",
    "options": {
      "A": "Menjelaskan alasan saya secara tegas agar dia paham posisi keputusan saya.",
      "B": "Mendengarkannya saja tanpa mau mendebat demi menjaga hubungan baik dengan mereka.",
      "C": "Menertawakannya dan mengatakan bahwa setiap orang berhak punya selera yang berbeda.",
      "D": "Merenungkan kritiknya dan memikirkan kebenaran dari apa yang telah dikatakannya tersebut."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 845,
    "question": "Jika saya merasa dicurangi oleh penjual di pasar tradisional...",
    "options": {
      "A": "Saya membiarkannya saja demi menghindari keributan di tempat umum yang ramai.",
      "B": "Saya mengeluh sebentar lalu melupakannya karena malas merasa sedih batin.",
      "C": "Saya langsung menuntut penjelasan dan meminta uang saya kembali saat itu.",
      "D": "Saya mencatat kejadian tersebut agar tidak belanja di toko itu lagi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 846,
    "question": "Bagaimana reaksi saya jika mendapat kritik dari bawahan saya?",
    "options": {
      "A": "Menerimanya dengan senyuman dan berjanji akan menjadi atasan yang lebih asyik.",
      "B": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan bersama tim.",
      "C": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja yang baik.",
      "D": "Merenungkan kritik tersebut secara mendalam dan merasa sangat terpukul oleh kata-katanya."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 847,
    "question": "Jika saya merasa dihina secara terang-terangan di kantor...",
    "options": {
      "A": "Tetap tenang dan mencoba menjelaskan kebenaran dengan suara yang sangat lembut.",
      "B": "Menghadapinya secara langsung dan menuntut penjelasan yang sangat jujur darinya segera.",
      "C": "Merasa sangat terpukul dan menangis karena merasa tidak dihargai oleh rekan.",
      "D": "Menanggapinya dengan candaan agar saya tidak terlihat merasa sangat malu sekali."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 848,
    "question": "Cara saya menanggapi teman yang berbuat salah di lingkungan...",
    "options": {
      "A": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan sosial kami berdua.",
      "B": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada sekadar menjaga hubungan.",
      "C": "Memaafkannya karena saya tahu dia bermaksud baik untuk menjaga hubungannya tersebut.",
      "D": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan sosial yang."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 849,
    "question": "Jika saya merasa dicurangi dalam sebuah permainan kartu...",
    "options": {
      "A": "Menegur pelaku kecurangan tersebut secara tegas agar permainan berjalan adil dan jujur.",
      "B": "Tertawa dan membiarkannya saja asalkan permainannya tetap berjalan sangat seru sekali.",
      "C": "Diam saja demi menjaga suasana agar tidak menjadi kaku dan juga tegang.",
      "D": "Mencatat kecurangannya dan mungkin tidak mau bermain lagi dengannya di masa depan."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 850,
    "question": "Bagaimana reaksi saya saat menghadapi fitnah dari rekan kerja?",
    "options": {
      "A": "Menghadapi pembuat fitnah tersebut dan menuntut penjelasan yang sangat jujur darinya.",
      "B": "Meresponsnya dengan bukti-bukti yang kuat agar fitnah tersebut terbukti salah total.",
      "C": "Membiarkannya saja karena saya yakin kebenaran pada akhirnya akan terungkap dengan sendirinya.",
      "D": "Mencoba mengklarifikasinya dengan cara yang santai agar tidak memperkeruh suasana kantor."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 851,
    "question": "Reaksi saya saat menghadapi tekanan pekerjaan tiada henti...",
    "options": {
      "A": "Membuat jadwal kerja yang sangat ketat untuk menyelesaikan tugas satu-persatu tugas.",
      "B": "Bekerja lebih keras dan fokus penuh agar semua pekerjaan tuntas segera.",
      "C": "Tetap tenang dan mengerjakan apa yang sanggup saya selesaikan hari ini.",
      "D": "Mencari teman mengobrol agar beban pikiran saya terasa lebih ringan hari."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 852,
    "question": "Reaksi saya saat melihat rencana besar saya gagal total...",
    "options": {
      "A": "Menerima kegagalan sebagai bagian hidup dan tetap berusaha tenang dalam menghadapinya.",
      "B": "Segera mencari hiburan dan mencoba bangkit kembali dengan rencana baru lainnya.",
      "C": "Merasa sangat sedih dan butuh waktu lama untuk merenungi kegagalan tersebut.",
      "D": "Mengevaluasi kegagalan tersebut dan segera menyusun strategi tempur yang baru lagi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 853,
    "question": "Reaksi saya saat melihat rencana bisnis saya gagal...",
    "options": {
      "A": "Merenungi kegagalan tersebut dan butuh waktu lama untuk mulai bekerja lagi.",
      "B": "Menerima kenyataan dengan sabar dan mencoba tetap tenang saat menghadapi kegagalannya.",
      "C": "Segera mencari peluang bisnis lain yang mungkin lebih menyenangkan dijalankan kembali.",
      "D": "Mengevaluasi kesalahan strategi dan segera mencoba lagi dengan semangat yang baru."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 854,
    "question": "Apa yang saya lakukan saat lingkungan kerja sangat berisik?",
    "options": {
      "A": "Memakai headphone dan berusaha fokus pada detail pekerjaan saya sendiri segera.",
      "B": "Tetap bekerja dengan tenang meskipun suasana di sekitar saya sedang gaduh.",
      "C": "Ikut dalam keramaian tersebut jika topiknya menarik bagi saya hari ini.",
      "D": "Meminta orang lain untuk tenang karena itu sangat mengganggu kerja harian."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 855,
    "question": "Reaksi saya saat melihat berita tentang kemiskinan dunia...",
    "options": {
      "A": "Berdoa dengan tulus agar mereka segera diberikan kemudahan dan kelapangan rezeki.",
      "B": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepat mungkin.",
      "C": "Merasa sedih dan segera membagikan berita tersebut agar banyak orang membantu.",
      "D": "Menganalisis penyebab kemiskinan tersebut dan merenungi nasib manusia di dunia ini."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 856,
    "question": "Reaksi saya saat menghadapi tumpukan cucian pakaian harian...",
    "options": {
      "A": "Menyusun cucian berdasarkan warna dan bahan secara sangat teliti dan rapi.",
      "B": "Mengerjakannya sambil mendengarkan musik kencang agar terasa sangat menyenangkan sekali.",
      "C": "Menyelesaikan semuanya secepat mungkin agar bisa segera mengerjakan tugas lainnya nanti.",
      "D": "Mengerjakannya perlahan tanpa mau merasa terlalu terbebani oleh cucian tersebut saja."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 857,
    "question": "Reaksi saya saat menghadapi tekanan pekerjaan yang menumpuk...",
    "options": {
      "A": "Membuat jadwal kerja yang sangat ketat untuk menyelesaikan tugas satu-persatu tugas.",
      "B": "Mencari teman mengobrol agar beban pikiran saya terasa lebih ringan hari.",
      "C": "Bekerja lebih keras dan fokus penuh agar semua pekerjaan tuntas segera.",
      "D": "Tetap tenang dan mengerjakan apa yang sanggup saya selesaikan harian ini."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 858,
    "question": "Reaksi saya saat melihat berita tentang bencana alam...",
    "options": {
      "A": "Sangat sedih dan segera membagikan berita tersebut agar banyak yang membantu.",
      "B": "Berdoa dengan tulus agar penderitaan mereka segera berakhir dan diberikan ketabahan.",
      "C": "Menganalisis penyebab bencana tersebut dan merenungi nasib manusia di dunia.",
      "D": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepat mungkin."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 859,
    "question": "Reaksi saya saat menghadapi kegagalan kecil dalam hidup...",
    "options": {
      "A": "Mengevaluasi kesalahan dan segera mencoba lagi dengan strategi baru yang segar.",
      "B": "Menerima kenyataan dengan sabar dan mencoba tetap tenang saat menghadapinya nanti.",
      "C": "Cepat melupakannya dan mencari hal lain yang lebih menyenangkan bagi saya.",
      "D": "Merenungi kegagalan tersebut secara mendalam dan merasa sangat kecewa batin saya."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 860,
    "question": "Reaksi saya saat menghadapi kemacetan parah di jalanan...",
    "options": {
      "A": "Pasrah menikmati suasana dan menunggu sampai kemacetan tersebut urai tuntas nanti.",
      "B": "Mengevaluasi waktu keterlambatan dan mengatur ulang jadwal kegiatan harian saya nanti.",
      "C": "Menggerutu dan terus mencari celah jalan pintas agar cepat sampai tujuan.",
      "D": "Menelepon teman untuk sekadar mengobrol agar waktu tunggu tidak membosankan harian."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 861,
    "question": "Dalam mengambil keputusan investasi, pertimbangan utama saya adalah...",
    "options": {
      "A": "Analisis data historis dan laporan keuangan yang sangat lengkap dan akurat.",
      "B": "Apakah investasi ini sedang populer dan banyak disukai orang-orang banyak.",
      "C": "Keamanan dana agar saya tetap merasa tenang di masa depan nanti.",
      "D": "Seberapa cepat investasi ini memberikan keuntungan yang sangat besar bagi saya."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 862,
    "question": "Dalam mengambil keputusan besar yang berisiko, saya memilih...",
    "options": {
      "A": "Mengikuti insting saya yang biasanya membawa pada hasil yang sangat menyenangkan.",
      "B": "Melakukan riset mendalam untuk meminimalisir segala kemungkinan kesalahan fatal nanti.",
      "C": "Memilih jalan yang paling aman demi menjaga kestabilan hidup saya pribadi.",
      "D": "Mengambil risiko jika peluang untuk menang terasa sangat besar bagi saya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 863,
    "question": "Dalam mengambil keputusan memilih asuransi jiwa pendidikan anak...",
    "options": {
      "A": "Yang sudah terbukti terpercaya oleh banyak orang tua lainnya selama bertahun-tahun.",
      "B": "Yang memberikan banyak bonus tambahan seperti tabungan liburan keluarga yang seru.",
      "C": "Yang memiliki rincian polis paling transparan dan terpercaya secara administrasi hukum.",
      "D": "Yang memberikan jaminan dana pendidikan paling besar di masa depan nanti."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 864,
    "question": "Dalam mengambil keputusan investasi rumah, saya lebih pentingkan...",
    "options": {
      "A": "Potensi kenaikan harga properti yang sangat pesat di masa depan nanti.",
      "B": "Lingkungan yang ramai dan dekat dengan banyak tempat nongkrong seru sekali.",
      "C": "Keamanan konstruksi bangunan dan rincian legalitas yang sangat jelas sekali saat.",
      "D": "Kenyamanan tetangga dan suasana asri yang memberikan rasa ketenangan batin saya."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 865,
    "question": "Dalam mengambil keputusan membeli kendaraan, saya mengutamakan...",
    "options": {
      "A": "Kenyamanan kursi dan suspensi yang lembut saat dikendarai secara santai harian.",
      "B": "Model yang keren dan warna yang sangat menarik perhatian orang-orang banyak.",
      "C": "Fitur keamanan yang lengkap dan efisiensi bahan bakar yang sangat akurat.",
      "D": "Performa mesin yang tangguh dan nilai jual kembali yang tinggi nantinya."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 866,
    "question": "Dalam mengambil keputusan memilih tempat tinggal, kriteria utama...",
    "options": {
      "A": "Lingkungan yang aman, bersih, teratur, dan memiliki sistem keamanan yang baik.",
      "B": "Memiliki nilai investasi tinggi dan menunjang status sosial saya di masyarakat.",
      "C": "Dekat dengan pusat keramaian dan tempat berkumpul teman-teman terdekat saya harian.",
      "D": "Daerah yang tenang, asri, sejuk, dan memberikan rasa nyaman yang maksimal."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 867,
    "question": "Dalam mengambil keputusan asuransi syariah pendidikan, saya memilih...",
    "options": {
      "A": "Yang memberikan jaminan dana pendidikan sesuai dengan prinsip-prinsip ekonomi syariah.",
      "B": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "C": "Yang sudah terbukti memberikan rasa tenang dan keberkahan bagi masa depannya.",
      "D": "Yang memberikan banyak bonus tambahan seperti tabungan umroh keluarga yang seru."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 868,
    "question": "Dalam mengambil keputusan investasi kesehatan, pertimbangan utama...",
    "options": {
      "A": "Rincian polis yang transparan dan reputasi perusahaan yang sangat solid sekali.",
      "B": "Premi yang terjangkau dan memberikan rasa aman bagi keluarga saya nantinya.",
      "C": "Pelayanan yang ramah dan banyak direkomendasikan oleh teman dekat saya harian.",
      "D": "Cakupan perlindungan yang luas dan proses klaim yang sangat cepat tuntas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 869,
    "question": "Dalam mengambil keputusan membeli alat elektronik harian, saya...",
    "options": {
      "A": "Membaca ulasan teknis secara mendalam sebelum saya memutuskan membeli produk tersebut.",
      "B": "Memilih yang modelnya paling trendi dan menarik perhatian mata saya sendiri.",
      "C": "Memilih merek yang sudah biasa digunakan agar merasa tetap aman batin.",
      "D": "Memilih yang spesifikasinya paling mendukung efisiensi kerja harian saya di kantor."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "menengah"
  },
  {
    "id": 870,
    "question": "Dalam mengambil keputusan memilih asuransi syariah kesehatan, saya...",
    "options": {
      "A": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi hukum.",
      "B": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial keluarga.",
      "C": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh lebih menyenangkan.",
      "D": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah yang tegas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 871,
    "question": "Saat sedang mencuci tangan di wastafel umum, saya biasanya...",
    "options": {
      "A": "Sesekali melihat cermin dan merapikan rambut saya dengan sangat riang.",
      "B": "Memastikan air tidak menciprat ke baju saya dengan sangat teliti sekali.",
      "C": "Melakukannya dengan tenang sambil menikmati aliran air yang bersih tersebut saja.",
      "D": "Mencuci secepat mungkin agar bisa segera lanjut beraktivitas kembali nanti."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 872,
    "question": "Kebiasaan saya saat merapikan meja kerja biasanya terlihat...",
    "options": {
      "A": "Penuh dengan barang berwarna-warni meskipun tidak terlalu rapi tertata rapi.",
      "B": "Sangat rapi, teratur, dan setiap barang memiliki tempatnya masing-masing secara.",
      "C": "Sederhana, bersih, dan memberikan suasana yang cukup tenang bekerja setiap harinya.",
      "D": "Hanya ada peralatan penting yang mendukung kecepatan kerja saya harian ini."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 873,
    "question": "Kebiasaan saya saat sedang berbelanja harian di mal harian...",
    "options": {
      "A": "Membeli merek langganan yang sudah biasa saya gunakan sehari-hari di rumah.",
      "B": "Langsung menuju rak barang yang dibutuhkan agar waktu belanja lebih efisien.",
      "C": "Sering membeli barang yang menarik perhatian meskipun tidak direncanakan sebelumnya.",
      "D": "Membandingkan harga dan kualitas produk dengan sangat teliti dahulu sebelum membeli."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 874,
    "question": "Kebiasaan saya saat sedang mencuci mobil atau motor harian...",
    "options": {
      "A": "Mencucinya sambil bercanda atau mengobrol dengan orang-orang di rumah harian.",
      "B": "Mencuci dengan santai sebagai pengisi waktu luang yang cukup tenang hari.",
      "C": "Mencuci dengan cepat namun memastikan kendaraan terlihat mengkilap dan gagah sekali.",
      "D": "Membersihkan setiap sela kecil yang kotor dengan sangat detail sekali tuntas."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 875,
    "question": "Kebiasaan saya sebelum tidur setiap malam biasanya adalah...",
    "options": {
      "A": "Menonton film yang ringan atau langsung tidur untuk beristirahat tenang saja.",
      "B": "Melihat media sosial untuk melihat kabar seru dari teman-teman saya harian.",
      "C": "Merenungkan kejadian hari ini dan memikirkan perbaikan untuk besok pagi hari.",
      "D": "Menyiapkan daftar tugas yang harus saya selesaikan di esok pagi nanti."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 876,
    "question": "Kebiasaan saya saat sedang merawat taman di pagi hari harian...",
    "options": {
      "A": "Mengajak tanaman bicara agar mereka selalu merasa senang dan tumbuh ceria.",
      "B": "Menyayangi tanaman dengan penuh kesabaran dan ketenangan di waktu luang saya.",
      "C": "Memperhatikan setiap detail kebersihan pot dan daun tanaman dengan sangat teliti.",
      "D": "Memberikan pupuk terbaik agar kesehatan tanaman tetap terjaga dengan sangat prima."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 877,
    "question": "Kebiasaan saya saat sedang merawat kesehatan tubuh harian...",
    "options": {
      "A": "Menikmati proses olahraga dengan tenang dan merasa sangat rileks batin saya.",
      "B": "Mengajak teman berolahraga bersama agar prosesnya terasa lebih sangat menyenangkan sekali.",
      "C": "Memilih jenis olahraga yang paling efektif untuk menjaga kebugaran tubuh saya.",
      "D": "Memperhatikan setiap detail asupan nutrisi dan jadwal olahraga dengan sangat teliti."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 878,
    "question": "Kebiasaan saya saat sedang merawat rambut di salon harian...",
    "options": {
      "A": "Memilih jenis perawatan rambut yang paling efektif untuk kesehatan rambut saya.",
      "B": "Mengajak bicara kapsternya agar proses perawatan rambut terasa lebih sangat menyenangkan.",
      "C": "Memperhatikan setiap langkah perawatan rambut dengan tingkat ketelitian sangat tinggi sekali.",
      "D": "Menikmati proses perawatan rambut dengan tenang dan merasa sangat rileks batin."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 879,
    "question": "Kebiasaan saya saat sedang merawat wajah di klinik harian...",
    "options": {
      "A": "Mengajak bicara perawatnya agar proses perawatan wajah terasa lebih sangat menyenangkan.",
      "B": "Menikmati proses perawatan wajah dengan tenang dan merasa sangat rileks batin.",
      "C": "Memilih jenis perawatan wajah yang paling efektif untuk kesehatan kulit wajah.",
      "D": "Memperhatikan setiap langkah perawatan wajah dengan tingkat ketelitian sangat tinggi sekali."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 880,
    "question": "Kebiasaan saya saat merapikan meja kerja di kantor harian...",
    "options": {
      "A": "Membiarkan barang tetap pada tempatnya selama saya masih merasa nyaman saja.",
      "B": "Membuang barang tidak penting agar ruang kerja lebih efisien setiap harinya.",
      "C": "Merapikan seadanya saja yang penting masih terlihat menyenangkan mata saya harian.",
      "D": "Menata semua perlengkapan kerja berdasarkan fungsi dan ukuran tertentu secara rapi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 881,
    "question": "Gaya bicara saya dalam pertemuan resmi biasanya adalah...",
    "options": {
      "A": "Singkat, padat, dan langsung menuju pada inti permasalahan yang ada.",
      "B": "Sangat terstruktur, logis, dan selalu didukung oleh fakta-fakta yang akurat.",
      "C": "Ekspresif, penuh semangat, dan seringkali menggunakan ilustrasi yang sangat menarik.",
      "D": "Sopan, tenang, dan lebih banyak memberikan ruang bagi peserta rapat lainnya."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "S",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 882,
    "question": "Gaya bicara saya saat sedang memotivasi orang lain harian...",
    "options": {
      "A": "Penuh semangat, ekspresif, dan menggunakan banyak kata yang sangat menginspirasi.",
      "B": "Tegas, lugas, dan menekankan pada pentingnya meraih keberhasilan masa depan nanti.",
      "C": "Sistematis, berdasarkan data nyata, dan memberikan arahan yang sangat jelas sekali.",
      "D": "Sangat menenangkan, penuh empati, dan memberikan rasa aman bagi pendengar."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 883,
    "question": "Gaya bicara saya saat sedang marah besar adalah harian harian...",
    "options": {
      "A": "Berusaha bicara lembut meskipun dalam hati merasa sangat kesal sekali saya.",
      "B": "Memilih diam dan baru bicara setelah emosi saya stabil kembali nanti.",
      "C": "To the point, tegas, dan mungkin terdengar agak menakutkan bagi orang.",
      "D": "Berbicara banyak dengan nada tinggi namun cepat reda kembali nantinya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "dalam"
  },
  {
    "id": 884,
    "question": "Gaya bicara saya saat berkenalan dengan orang baru harian...",
    "options": {
      "A": "Sangat ramah, penuh energi, dan banyak bercerita tentang diri saya harian.",
      "B": "Lembut, lebih banyak mendengarkan, dan menunggu mereka bertanya dahulu kepada saya.",
      "C": "Sopan, sedikit formal, dan berhati-hati dalam memilih kata bicara saya nanti.",
      "D": "Tegas, singkat, dan langsung menanyakan profesi atau kesibukan mereka harian itu."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 885,
    "question": "Cara saya menyampaikan usulan dalam sebuah forum diskusi harian...",
    "options": {
      "A": "Dengan gaya bicara yang menarik dan penuh dengan contoh seru sekali.",
      "B": "Langsung pada inti usulan dan apa keuntungan yang didapatkan tim kami.",
      "C": "Menyampaikan dengan nada rendah dan sangat menghargai pendapat orang lain tersebut.",
      "D": "Menjelaskan latar belakang usulan tersebut secara sangat logis sekali saat itu."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 886,
    "question": "Cara saya menanggapi teman yang lupa membalas pesan saya...",
    "options": {
      "A": "Berpikir apakah ada kata-kata saya yang menyinggung atau kurang tepat padanya.",
      "B": "Menanyakan langsung alasan kenapa dia belum membalas pesan penting saya tadi.",
      "C": "Menunggu dengan sabar sampai dia memiliki waktu luang untuk membalas pesan.",
      "D": "Mengirimkan pesan lucu atau meme agar dia segera ingat membalas pesan."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 887,
    "question": "Cara saya menanggapi teman yang berbicara kasar kepada saya...",
    "options": {
      "A": "Tetap diam dan menghindari perdebatan demi menjaga kedamaian hubungan kami berdua.",
      "B": "Mencoba membalasnya dengan candaan agar suasana tidak menjadi terlalu kaku saja.",
      "C": "Menegurnya secara langsung agar dia menghormati saya sebagai teman sejawatnya nanti.",
      "D": "Merasa sedih dalam hati dan merenungi kata-katanya yang sangat menyakitkan batin."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 888,
    "question": "Gaya komunikasi saya dalam sebuah presentasi biasanya harian...",
    "options": {
      "A": "Tenang, sopan, dan memastikan semua audiens memahami pesan yang saya sampaikan.",
      "B": "Sangat rapi, menggunakan data akurat, dan sangat sistematis sekali saya harian.",
      "C": "Penuh dengan cerita menarik yang bisa menghibur seluruh audiens presentasi harian.",
      "D": "To the point dan menekankan pada hasil nyata yang didapat kerja tim."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 889,
    "question": "Cara saya menyampaikan kritik kepada teman harian saya...",
    "options": {
      "A": "Menyampaikannya secara langsung agar dia segera memperbaiki kesalahannya tersebut segera nanti.",
      "B": "Menyusun kata-kata dengan logis agar kritik saya mudah diterima secara rasional.",
      "C": "Berbicara dengan sangat lembut demi menjaga perasaan teman saya tersebut harian.",
      "D": "Membungkusnya dengan humor agar dia tidak merasa sedang dikritik oleh saya."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 890,
    "question": "Cara saya memperkenalkan diri di lingkungan baru biasanya adalah...",
    "options": {
      "A": "Bicara seperlunya dengan bahasa yang sopan dan memperhatikan tata krama sosial.",
      "B": "Menunggu orang lain menyapa duluan dan membalasnya dengan senyuman ramah saja.",
      "C": "Tampil dengan penuh percaya diri dan langsung menyapa semua orang sekitar.",
      "D": "Menonjolkan keahlian atau posisi saya agar orang lain merasa segan nantinya."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "ringan"
  },
  {
    "id": 891,
    "question": "Arti kebahagiaan sejati di masa tua bagi saya adalah...",
    "options": {
      "A": "Menikmati hidup tenang tanpa ada beban pikiran apa pun bersama keluarga.",
      "B": "Berhasil mewariskan kerajaan bisnis yang sukses dan juga sangat berpengaruh besar.",
      "C": "Hidup dalam keteraturan dan kecukupan yang sudah terencana secara matang harian.",
      "D": "Tetap memiliki banyak teman dan tidak pernah merasa sendirian setiap hari."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 892,
    "question": "Visi saya mengenai kesuksesan finansial harian adalah memiliki...",
    "options": {
      "A": "Keuangan yang stabil agar hidup saya tetap tenang dan juga damai.",
      "B": "Banyak uang untuk bisa menikmati hidup dengan penuh kesenangan harian setiap.",
      "C": "Kekayaan yang bisa memberikan pengaruh besar bagi kehidupan orang-orang lain sekitarku.",
      "D": "Tabungan yang sangat aman dan terencana untuk jangka waktu panjang nanti."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 893,
    "question": "Visi saya mengenai masa depan rumah tangga adalah memiliki...",
    "options": {
      "A": "Rumah yang selalu ramai dengan keceriaan anak-anak dan juga teman akrab.",
      "B": "Keluarga yang sukses secara finansial dan prestasi sosial di masyarakat luas.",
      "C": "Rumah tangga yang tenang, damai, dan penuh dengan kasih sayang tulus.",
      "D": "Keluarga yang harmonis dengan nilai-nilai moral yang sangat kuat sekali nantinya."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 894,
    "question": "Harapan saya mengenai masa pensiun saya nanti adalah harian...",
    "options": {
      "A": "Hidup bahagia bersama keluarga dalam suasana yang penuh kedamaian batin harian.",
      "B": "Menikmati ketenangan hidup dengan rencana keuangan yang sudah sangat matang sekali.",
      "C": "Dihormati karena pencapaian besar yang telah saya raih sebelumnya di kantor.",
      "D": "Tetap aktif bersosialisasi dan melakukan banyak kegiatan yang sangat menyenangkan sekali."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 895,
    "question": "Tujuan utama saya menabung dana pensiun adalah untuk harian...",
    "options": {
      "A": "Bisa berwisata keliling dunia dengan teman-teman di masa tua nanti harian.",
      "B": "Memiliki modal untuk tetap berbisnis meskipun sudah tidak produktif lagi bekerja.",
      "C": "Menjamin kehidupan hari tua yang sangat aman dan terencana matang harian.",
      "D": "Bisa hidup tenang tanpa harus merepotkan anak dan cucu nanti harian."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 896,
    "question": "Pandangan saya mengenai pengembangan karier jangka panjang harian...",
    "options": {
      "A": "Mencapai posisi puncak pimpinan dengan pengaruh kekuasaan yang sangat kuat sekali.",
      "B": "Memiliki pekerjaan yang stabil dan menjamin kesejahteraan keluarga terus secara konsisten.",
      "C": "Bekerja di tempat yang selalu menawarkan tantangan sosial seru bagi saya.",
      "D": "Menjadi tenaga ahli yang diakui karena kualitas hasil kerjanya secara internasional."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 897,
    "question": "Tujuan utama hidup saya di masa depan nanti adalah...",
    "options": {
      "A": "Hidup damai bersama keluarga dan terhindar dari segala konflik sosial harian.",
      "B": "Memiliki kehidupan yang teratur dan bermanfaat bagi banyak orang-orang di sekitar.",
      "C": "Memiliki banyak relasi dan hidup penuh dengan kesenangan harian setiap hari.",
      "D": "Menjadi sosok yang berpengaruh dan sukses dalam karier saya pribadi nantinya."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 898,
    "question": "Visi saya tentang rumah idaman adalah rumah yang harian...",
    "options": {
      "A": "Sering dikunjungi teman-teman untuk acara kumpul bersama yang sangat meriah sekali.",
      "B": "Rumah yang tenang, sejuk, dan memberikan kenyamanan bagi keluarga saya tulus.",
      "C": "Rumah yang megah dan menunjukkan kesuksesan hasil kerja keras saya harian.",
      "D": "Rumah yang tertata sangat rapi dan memiliki sistem yang sangat efisien."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 899,
    "question": "Mengenai asuransi pendidikan anak harian, pemikiran utama saya...",
    "options": {
      "A": "Agar anak bisa sekolah di tempat paling seru dan populer harian.",
      "B": "Memberikan rasa aman dan tenang bagi masa depan keluarga kami nanti.",
      "C": "Sebagai jaminan agar anak sukses dan punya daya saing tinggi nantinya.",
      "D": "Melindungi masa depan anak dengan perhitungan biaya yang sangat tepat harian."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 900,
    "question": "Mengenai tabungan masa tua harian, prinsip hidup saya adalah...",
    "options": {
      "A": "Menabung secukupnya asalkan hidup tetap tenang dan damai sentosa nanti harian.",
      "B": "Investasi sebanyak mungkin agar hari tua penuh kemandirian harian bagi saya.",
      "C": "Nikmati hidup sekarang harian, rezeki pasti akan datang nanti harian harian.",
      "D": "Menyusun anggaran yang sangat ketat untuk jaminan masa depan yang terukur."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 901,
    "question": "Saat menghadapi revisi pekerjaan yang banyak, saya...",
    "options": {
      "A": "Memeriksa setiap poin kesalahan secara mendalam agar tidak terulang.",
      "B": "Menerimanya dengan tenang dan mengerjakan sesuai kemampuan saya.",
      "C": "Menyelesaikan revisi secepat mungkin agar bisa lanjut tugas lain.",
      "D": "Mengerjakannya sambil mengobrol agar tidak merasa bosan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 902,
    "question": "Jika teman mengajak mencoba makanan ekstrim, respons saya...",
    "options": {
      "A": "Ikut saja jika teman-teman lain juga berani mencobanya.",
      "B": "Mencobanya jika makanan itu memberikan pengalaman yang menantang.",
      "C": "Sangat antusias karena suka mencoba hal baru yang seru.",
      "D": "Berpikir dua kali dan mencari tahu keamanan makanan tersebut."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 903,
    "question": "Bagaimana saya menyikapi anggota keluarga yang kurang disiplin?",
    "options": {
      "A": "Berusaha maklum dan menghindari perdebatan yang melelahkan batin.",
      "B": "Menegurnya secara langsung demi ketertiban di dalam rumah.",
      "C": "Merasa tidak nyaman dan membuat aturan tertulis yang jelas.",
      "D": "Mengingatkannya dengan cara lucu agar dia tidak merasa tersinggung."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 904,
    "question": "Sebagai pemimpin diskusi, jika terjadi perdebatan buntu, saya...",
    "options": {
      "A": "Mengambil keputusan akhir secara tegas agar diskusi segera berakhir.",
      "B": "Mencairkan suasana dengan cerita menarik agar peserta kembali ceria.",
      "C": "Menganalisis argumen kedua pihak secara logis untuk mencari solusi.",
      "D": "Meminta semua pihak tenang dan saling mengalah demi mufakat."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 905,
    "question": "Saat merasa dituduh melakukan kesalahan yang tidak benar...",
    "options": {
      "A": "Diam sejenak dan menjelaskan kebenaran dengan suara tenang.",
      "B": "Merasa terpukul dan menganalisis mengapa orang itu menuduh saya.",
      "C": "Menghadapi penuduh dan menuntut bukti nyata atas ucapannya.",
      "D": "Membela diri dengan bercerita banyak alasan secara ekspresif."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 906,
    "question": "Reaksi saya jika laptop tiba-tiba rusak saat bekerja...",
    "options": {
      "A": "Tetap tenang dan menunggu perbaikan dengan penuh kesabaran.",
      "B": "Segera mencari cara memperbaikinya agar pekerjaan tidak tertunda.",
      "C": "Merasa cemas karena file penting saya menjadi tidak teratur.",
      "D": "Mengeluh heboh ke teman sebelum mencari bantuan teknisi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 907,
    "question": "Dalam mengambil keputusan investasi pendidikan, saya memilih...",
    "options": {
      "A": "Sertifikasi yang memiliki standar kurikulum resmi dan sangat terstruktur.",
      "B": "Program yang menjamin peningkatan karir dan gaji secara cepat.",
      "C": "Pendidikan yang memberikan rasa aman dan tidak terlalu membebani.",
      "D": "Kursus yang memiliki banyak jaringan pertemanan dan komunitas seru."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 908,
    "question": "Kebiasaan saya saat menggunakan aplikasi media sosial adalah...",
    "options": {
      "A": "Menggunakannya untuk memantau tren perkembangan bisnis atau karir.",
      "B": "Menjadi pengamat saja tanpa berniat banyak berinteraksi secara digital.",
      "C": "Hanya mencari informasi bermanfaat dan berbagi pemikiran yang mendalam.",
      "D": "Aktif mengunggah kegiatan harian agar tetap terhubung dengan teman."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 909,
    "question": "Gaya komunikasi saya saat sedang memimpin rapat adalah...",
    "options": {
      "A": "Efektif, fokus pada agenda, dan memastikan keputusan diambil cepat.",
      "B": "Inspiratif, penuh energi, dan mendorong semua anggota berpartisipasi.",
      "C": "Demokratis, mendengarkan semua masukan sebelum mengambil kesepakatan bersama.",
      "D": "Sangat terstruktur, membahas setiap rincian teknis dengan teliti."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 910,
    "question": "Mengenai asuransi properti, pertimbangan utama saya adalah...",
    "options": {
      "A": "Rincian klausul yang transparan dan reputasi perusahaan solid.",
      "B": "Cakupan ganti rugi yang besar dan proses klaim efisien.",
      "C": "Pelayanan yang ramah dan banyak direkomendasikan oleh teman.",
      "D": "Premi yang terjangkau dan memberikan ketenangan jangka panjang."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 911,
    "question": "Jika saya harus mengajar kelas anak-anak, saya akan...",
    "options": {
      "A": "Mengajak mereka bermain dan bercanda agar suasana kelas ceria.",
      "B": "Menjaga kenyamanan mereka dan mendengarkan keluhan mereka dengan sabar.",
      "C": "Menyusun materi belajar yang sangat sistematis dan mudah dipahami.",
      "D": "Memberikan target belajar yang jelas agar mereka disiplin mengerjakan."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 912,
    "question": "Saat teman merayakan ulang tahun, sikap saya adalah...",
    "options": {
      "A": "Mengingat tanggalnya dengan teliti dan memberikan ucapan sangat sopan.",
      "B": "Memberikan kado yang berguna untuk mendukung kemajuan karir teman.",
      "C": "Ikut merayakan dengan tenang dan memberikan doa yang tulus.",
      "D": "Menjadi orang paling heboh dalam memberikan kejutan dan ucapan."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 913,
    "question": "Bagaimana sikap saya jika saudara saya memenangkan lomba?",
    "options": {
      "A": "Sangat gembira dan segera merayakannya dengan pesta keluarga meriah.",
      "B": "Tersenyum tulus dan mendoakan agar kemenangannya memberikan kebahagiaan batin.",
      "C": "Menjadikannya motivasi untuk mengasah kemampuan saya agar menang serupa.",
      "D": "Mengucapkan selamat dan menanyakan tips kemenangannya secara sangat detail."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 914,
    "question": "Sebagai pimpinan proyek konstruksi, fokus utama saya adalah...",
    "options": {
      "A": "Kekuatan bangunan yang menjamin keamanan seluruh penghuni bangunan nantinya.",
      "B": "Desain bangunan yang unik dan menarik perhatian banyak orang.",
      "C": "Anggaran biaya yang sangat terinci dan pengerjaan sesuai jadwal.",
      "D": "Kerja sama antar pekerja yang harmonis tanpa adanya konflik."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 915,
    "question": "Jika saya merasa disingkirkan oleh teman-teman pergaulan, saya...",
    "options": {
      "A": "Merasa sedih dan mulai mempertanyakan kualitas pertemanan kami ini.",
      "B": "Membiarkannya saja karena saya yakin akan menemukan teman baru.",
      "C": "Mencoba mencari perhatian mereka kembali dengan cara yang menyenangkan.",
      "D": "Menanyakan langsung alasan mengapa mereka menjauhi saya agar tuntas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 916,
    "question": "Saat melihat berita bencana kemanusiaan di dunia, saya...",
    "options": {
      "A": "Menganalisis penyebab bencana tersebut dan merenungi nasib manusia dunia.",
      "B": "Berdoa dengan tulus agar penderitaan mereka segera berakhir diberikan.",
      "C": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka.",
      "D": "Sangat sedih dan segera membagikan berita tersebut agar dibantu."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 917,
    "question": "Dalam mengambil keputusan asuransi pendidikan, saya memilih...",
    "options": {
      "A": "Yang memiliki rincian polis transparan dan terpercaya secara administrasi.",
      "B": "Yang sudah terbukti memberikan rasa tenang bagi masa depan.",
      "C": "Yang memberikan banyak bonus tambahan seperti tabungan liburan keluarga.",
      "D": "Yang memberikan jaminan dana pendidikan paling besar di masa depan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 918,
    "question": "Kebiasaan saya saat sedang merawat rambut di salon adalah...",
    "options": {
      "A": "Mengajak bicara kapsternya agar proses perawatan terasa lebih menyenangkan.",
      "B": "Menikmati proses perawatan dengan tenang dan merasa sangat rileks.",
      "C": "Memilih jenis perawatan rambut yang paling efektif untuk kesehatan rambut.",
      "D": "Memperhatikan setiap langkah perawatan dengan tingkat ketelitian sangat tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 919,
    "question": "Cara saya menanggapi teman yang berbohong demi kebaikan...",
    "options": {
      "A": "Merasa kecewa karena kejujuran adalah dasar hubungan pertemanan kuat.",
      "B": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan pertemanan.",
      "C": "Memaafkannya karena saya tahu dia bermaksud baik menjaga perasaan.",
      "D": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 920,
    "question": "Mengenai asuransi kecelakaan kerja, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang preminya terjangkau dan proses klaimnya bisa lewat aplikasi.",
      "B": "Yang sudah terbukti memberikan layanan sangat ramah kepada setiap.",
      "C": "Yang memberikan jaminan ganti rugi besar bagi seluruh karyawan.",
      "D": "Yang memiliki rincian polis lengkap dan transparan secara administrasi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 921,
    "question": "Jika harus bekerja dalam satu ruangan yang sangat sunyi...",
    "options": {
      "A": "Senang karena bisa menyelesaikan pekerjaan dengan kecepatan maksimal.",
      "B": "Merasa gelisah karena tidak ada teman yang bisa diajak bicara.",
      "C": "Fokus pada ketelitian tugas tanpa terganggu oleh suara berisik.",
      "D": "Merasa tenang dan bisa bekerja dengan ritme yang lebih stabil."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 922,
    "question": "Saat teman lupa hari ulang tahun saya, reaksi saya...",
    "options": {
      "A": "Tetap ceria dan mengingatkannya dengan candaan yang sangat lucu.",
      "B": "Sedikit kesal namun menuntut dia mentraktir saya sebagai gantinya.",
      "C": "Merasa sedih secara mendalam karena merasa kurang diperhatikan lagi.",
      "D": "Memaklumi kesibukannya dan menganggap hal tersebut bukan masalah besar."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 923,
    "question": "Sikap saya jika anggota keluarga merusak barang kesayangan saya...",
    "options": {
      "A": "Memintanya bertanggung jawab untuk memperbaiki atau menggantinya segera.",
      "B": "Memaafkannya dengan cepat dan mengatakan barang itu bisa diganti.",
      "C": "Menerima keadaan tersebut demi menjaga kedamaian di dalam rumah.",
      "D": "Merasa sangat kecewa dan butuh waktu lama untuk memulihkan hati."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 924,
    "question": "Sebagai pimpinan, bagaimana saya menghadapi bawahan yang pasif?",
    "options": {
      "A": "Memintanya secara langsung untuk memberikan pendapatnya terhadap topik diskusi.",
      "B": "Mengajaknya bercanda agar dia merasa nyaman untuk mulai bicara.",
      "C": "Mencoba mendekatinya secara personal untuk mengetahui hambatan kerjanya.",
      "D": "Memberinya waktu untuk berkembang tanpa memaksanya untuk segera menonjol."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 925,
    "question": "Jika merasa dicurangi oleh rekan kerja di depan umum...",
    "options": {
      "A": "Memilih untuk diam agar tidak memperbesar konflik di depan orang.",
      "B": "Merasa sangat sedih dan butuh waktu lama untuk memaafkan.",
      "C": "Menghadapinya secara langsung dan menuntut penjelasan yang jujur darinya.",
      "D": "Menanggapinya dengan candaan agar saya tidak terlihat merasa malu."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 926,
    "question": "Reaksi saya saat menghadapi tekanan pekerjaan tiada henti...",
    "options": {
      "A": "Membuat jadwal kerja yang sangat ketat untuk menyelesaikan satu-persatu tugas.",
      "B": "Mencari teman mengobrol agar beban pikiran saya terasa lebih ringan.",
      "C": "Tetap tenang dan mengerjakan apa yang sanggup saya selesaikan saja.",
      "D": "Bekerja lebih keras dan fokus penuh agar semua pekerjaan tuntas."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 927,
    "question": "Dalam mengambil keputusan investasi, pertimbangan utama saya adalah...",
    "options": {
      "A": "Keamanan dana agar saya tetap merasa tenang di masa depan.",
      "B": "Seberapa cepat investasi ini memberikan keuntungan sangat besar bagi saya.",
      "C": "Apakah investasi ini sedang populer dan banyak disukai orang banyak.",
      "D": "Analisis data historis dan laporan keuangan yang sangat lengkap akurat."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 928,
    "question": "Cara saya merapikan koleksi barang pribadi saya adalah...",
    "options": {
      "A": "Membiarkannya seadanya selama saya masih merasa senang melihat koleksi tersebut.",
      "B": "Menatanya dengan tingkat ketelitian tinggi berdasarkan kategori tertentu dan ukuran.",
      "C": "Menaruhnya di tempat yang aman dan rapi tanpa berlebihan.",
      "D": "Memastikan koleksi tersebut terorganisir agar mudah saya tunjukkan pada orang."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 929,
    "question": "Gaya komunikasi saya dalam sebuah presentasi biasanya adalah...",
    "options": {
      "A": "Tenang, sopan, dan memastikan semua audiens memahami pesan yang disampaikan.",
      "B": "Penuh dengan cerita menarik yang bisa menghibur seluruh audiens presentasi.",
      "C": "Sangat rapi, menggunakan data akurat, dan sistematis sekali bagi saya.",
      "D": "To the point dan menekankan pada hasil nyata yang didapat kerja."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "M",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 930,
    "question": "Visi saya mengenai masa depan keluarga saya adalah memiliki...",
    "options": {
      "A": "Keluarga yang sangat ceria dan sering melakukan perjalanan bersama teman.",
      "B": "Keluarga yang harmonis, tenang, dan saling mengasihi dalam segala situasi.",
      "C": "Keluarga yang sukses, mandiri, dan dihormati oleh lingkungan sosial sekitar.",
      "D": "Keluarga yang memiliki nilai-nilai moral sangat kuat dan disiplin tinggi."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 931,
    "question": "Saat rekan kerja merayakan ulang tahun, sikap saya adalah...",
    "options": {
      "A": "Mengingat tanggalnya dengan teliti dan memberikan ucapan yang sangat sopan.",
      "B": "Memberikan kado yang berguna untuk menunjang aktivitas kerjanya di kantor.",
      "C": "Menjadi orang yang paling heboh dalam memberikan ucapan dan kejutan.",
      "D": "Ikut merayakan dengan tenang dan memberikan doa yang tulus padanya."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 932,
    "question": "Jika teman meminjam barang dan merusaknya, saya...",
    "options": {
      "A": "Memaafkannya dengan tulus dan tidak ingin memperpanjang masalah demi pertemanan.",
      "B": "Menanggapinya dengan santai dan mengatakan barang tersebut bisa diperbaiki lagi.",
      "C": "Memintanya bertanggung jawab untuk mengganti atau memperbaiki barang tersebut segera.",
      "D": "Merasa kecewa secara internal dan butuh waktu untuk percaya kembali."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "menengah"
  },
  {
    "id": 933,
    "question": "Bagaimana reaksi saya jika ada saudara yang sedang bersedih?",
    "options": {
      "A": "Mengajaknya jalan-jalan agar dia bisa melupakan kesedihannya sejenak hari.",
      "B": "Hadir di sisinya tanpa perlu banyak bicara untuk memberikan ketenangan.",
      "C": "Membantunya mencari jalan keluar agar masalahnya cepat selesai secara tuntas.",
      "D": "Mendengarkan semua curhatannya dengan penuh simpati yang sangat dalam sekali."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 934,
    "question": "Sebagai pimpinan, apa prioritas saya dalam merekrut anggota tim?",
    "options": {
      "A": "Mencari orang yang kompeten, ambisius, dan berorientasi pada hasil kerja.",
      "B": "Mencari orang yang memiliki kepribadian ceria dan mudah bergaul lingkungan.",
      "C": "Mencari orang yang sangat teliti, jujur, dan memiliki integritas tinggi.",
      "D": "Mencari orang yang sabar, penurut, dan bisa menjaga keharmonisan tim."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 935,
    "question": "Jika saya merasa dibohongi oleh orang terdekat, saya akan...",
    "options": {
      "A": "Menghadapinya langsung dan menuntut penjelasan yang jujur darinya saat itu.",
      "B": "Mengutarakan kekecewaan saya sambil menangis agar dia merasa kasihan pada.",
      "C": "Merenungkan hubungan kami dan butuh waktu lama untuk memaafkan kebohongannya.",
      "D": "Mencoba memaafkan dan berharap dia tidak akan mengulanginya lagi nanti."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 936,
    "question": "Reaksi saya saat menghadapi tekanan pekerjaan yang menumpuk hari...",
    "options": {
      "A": "Mencari teman mengobrol agar beban pikiran saya terasa lebih ringan.",
      "B": "Tetap tenang dan mengerjakan apa yang sanggup saya selesaikan saja.",
      "C": "Bekerja lebih keras dan fokus penuh agar semua pekerjaan tuntas.",
      "D": "Membuat jadwal kerja yang sangat ketat untuk menyelesaikan tugas satu-persatu."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 937,
    "question": "Dalam mengambil keputusan investasi masa depan, pertimbangan utama saya...",
    "options": {
      "A": "Investasi yang memiliki profil risiko sangat rendah dan terencana matang.",
      "B": "Investasi yang paling aman dan memberikan ketenangan jangka panjang nanti.",
      "C": "Investasi yang sedang populer dan menjanjikan gaya hidup menyenangkan sekali.",
      "D": "Investasi yang memberikan kendali penuh dan keuntungan sangat besar bagiku."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 938,
    "question": "Cara saya menata isi tas kerja saya harian biasanya...",
    "options": {
      "A": "Sangat rapi dan barang disusun berdasarkan kategori serta ukuran tertentu.",
      "B": "Hanya berisi barang yang menunjang produktivitas kerja harian saya saja.",
      "C": "Agak berantakan tapi saya tahu letak barang-barang yang sangat penting.",
      "D": "Apa adanya selama barang-barang tersebut masih bisa masuk ke tas."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 939,
    "question": "Gaya komunikasi saya saat sedang memotivasi orang lain harian...",
    "options": {
      "A": "Penuh semangat, ekspresif, dan menggunakan banyak kata yang sangat menginspirasi.",
      "B": "Sangat menenangkan, penuh empati, dan memberikan rasa aman bagi pendengar.",
      "C": "Tegas, lugas, dan menekankan pada pentingnya meraih keberhasilan masa depan.",
      "D": "Sistematis, berdasarkan data nyata, dan memberikan arahan yang sangat jelas."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 940,
    "question": "Visi saya mengenai masa depan rumah tangga adalah memiliki...",
    "options": {
      "A": "Keluarga yang harmonis dengan nilai-nilai moral yang sangat kuat sekali.",
      "B": "Keluarga yang sukses secara finansial dan prestasi sosial di masyarakat.",
      "C": "Rumah yang selalu ramai dengan keceriaan anak-anak dan juga teman.",
      "D": "Rumah tangga yang tenang, damai, dan penuh dengan kasih sayang."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 941,
    "question": "Jika teman mengajak pergi ke festival kuliner mendadak, saya...",
    "options": {
      "A": "Menikmati suasana festival dan mencoba makanan yang tidak terlalu aneh.",
      "B": "Memilih makanan yang paling populer untuk membuktikan rasa penasaran saya.",
      "C": "Sangat antusias karena suka mencoba berbagai makanan baru yang enak.",
      "D": "Mempelajari daftar stand makanan agar kunjungan kami berjalan secara efisien."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 942,
    "question": "Saat menghadapi rekan kerja yang memaksakan kehendak, saya...",
    "options": {
      "A": "Mencoba mengalihkan pembicaraan dengan candaan agar suasana tidak kaku.",
      "B": "Mendengarkan pendapatnya dengan sabar dan mencoba mencari titik temu adil.",
      "C": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas.",
      "D": "Menegurnya agar menghargai pendapat anggota lain demi kelancaran pekerjaan tim."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 943,
    "question": "Bagaimana reaksi saya jika ada saudara yang menang lomba?",
    "options": {
      "A": "Menjadikannya motivasi untuk mengasah kemampuan saya lagi agar bisa menang.",
      "B": "Tersenyum tulus dan mendoakan agar kemenangannya memberikan kebahagiaan bagi keluarga.",
      "C": "Mengucapkan selamat dan menanyakan tips kemenangannya secara sangat detail.",
      "D": "Merayakannya dengan antusiasme sangat tinggi dan ikut merasa sangat bangga."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 944,
    "question": "Sebagai pimpinan proyek konstruksi, fokus utama saya adalah...",
    "options": {
      "A": "Desain bangunan yang unik dan bisa menarik perhatian banyak orang.",
      "B": "Anggaran biaya yang sangat terinci dan pengerjaan yang sesuai jadwal.",
      "C": "Kerja sama antar pekerja yang harmonis tanpa adanya konflik internal.",
      "D": "Kekuatan bangunan yang bisa menjamin keamanan seluruh penghuni bangunan nantinya."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 945,
    "question": "Jika saya merasa disingkirkan oleh teman-teman pergaulan, saya...",
    "options": {
      "A": "Mencoba mencari perhatian mereka kembali dengan cara menyenangkan sangat seru.",
      "B": "Menanyakan langsung alasan mengapa mereka menjauhi saya agar masalah selesai.",
      "C": "Merasa sangat sedih dan mulai mempertanyakan kualitas pertemanan kami ini.",
      "D": "Membiarkannya saja karena saya yakin akan menemukan teman baru lebih."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 946,
    "question": "Saat melihat berita bencana kemanusiaan di dunia, saya...",
    "options": {
      "A": "Sangat sedih dan segera membagikan berita tersebut agar banyak membantu.",
      "B": "Mencari cara praktis untuk memberikan bantuan materi kepada mereka secepatnya.",
      "C": "Menganalisis penyebab bencana tersebut dan merenungi nasib manusia di dunia.",
      "D": "Berdoa dengan tulus agar penderitaan mereka segera berakhir dan diberikan."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 947,
    "question": "Dalam mengambil keputusan asuransi syariah pendidikan, saya memilih...",
    "options": {
      "A": "Yang memberikan banyak bonus tambahan seperti tabungan umroh keluarga seru.",
      "B": "Yang memberikan jaminan dana pendidikan sesuai prinsip-prinsip ekonomi syariah.",
      "C": "Yang sudah terbukti memberikan rasa tenang dan keberkahan bagi masa.",
      "D": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 948,
    "question": "Kebiasaan saya saat sedang merawat rambut di salon...",
    "options": {
      "A": "Memperhatikan setiap langkah perawatan rambut dengan tingkat ketelitian sangat tinggi.",
      "B": "Memilih jenis perawatan rambut yang paling efektif untuk kesehatan rambut.",
      "C": "Menikmati proses perawatan rambut dengan tenang dan merasa sangat rileks.",
      "D": "Mengajak bicara kapsternya agar proses perawatan rambut terasa lebih menyenangkan."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 949,
    "question": "Cara saya menanggapi teman yang berbohong demi kebaikan...",
    "options": {
      "A": "Memaafkannya karena saya tahu dia bermaksud baik menjaga perasaan saya.",
      "B": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan pertemanan kami.",
      "C": "Merasa kecewa karena kejujuran adalah dasar sebuah hubungan pertemanan kuat.",
      "D": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 950,
    "question": "Mengenai asuransi kecelakaan kerja, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memberikan jaminan ganti rugi paling besar bagi seluruh karyawan.",
      "B": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi.",
      "C": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi.",
      "D": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 951,
    "question": "Jika teman mengajak pergi ke pertunjukan sirkus, saya akan...",
    "options": {
      "A": "Memperhatikan setiap detail gerakan pemain sirkus dengan tingkat ketelitian tinggi.",
      "B": "Memilih posisi duduk paling depan untuk melihat atraksi secara nyata.",
      "C": "Menikmati pertunjukan sirkus dengan tenang dan merasa kagum atas kemampuan.",
      "D": "Sangat antusias karena suka atraksi yang unik dan menghibur hati."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "P",
      "D": "S"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 952,
    "question": "Saat menghadapi rekan kerja yang suka mengadu domba tim...",
    "options": {
      "A": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik.",
      "B": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas.",
      "C": "Menghadapi rekan tersebut secara langsung agar tidak memecah belah persatuan.",
      "D": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua tertawa."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "K",
      "D": "S"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 953,
    "question": "Bagaimana reaksi saya jika ada saudara yang melahirkan?",
    "options": {
      "A": "Mengucapkan selamat dan memperhatikan setiap rincian kebutuhan ibu dan bayi.",
      "B": "Sangat gembira dan segera menjenguknya dengan membawa kado sangat menarik.",
      "C": "Memberikan saran perawatan bayi yang paling efektif berdasarkan informasi medis.",
      "D": "Tersenyum bahagia dan mendoakan agar ibu dan bayi selalu sehat."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 954,
    "question": "Sebagai pimpinan organisasi kepemudaan, fokus utama saya adalah...",
    "options": {
      "A": "Kegiatan yang inovatif dan bisa meningkatkan eksistensi pemuda di dunia.",
      "B": "Pengembangan karakter pemuda yang sangat terstruktur melalui pelatihan sangat disiplin.",
      "C": "Kemandirian pemuda yang bisa memberikan kontribusi nyata bagi kemajuan bangsa.",
      "D": "Kerukunan antar pemuda agar organisasi tetap solid dan penuh kedamaian."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 955,
    "question": "Jika saya merasa dikritik habis-habisan oleh atasan saya sendiri...",
    "options": {
      "A": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan tim.",
      "B": "Memikirkan kritik tersebut secara mendalam dan merasa sangat terpukul kata-katanya.",
      "C": "Menerimanya dengan senyuman dan berjanji akan memberikan performa lebih ceria.",
      "D": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja baik."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 956,
    "question": "Saat melihat orang lain melakukan perbuatan curang diam-diam...",
    "options": {
      "A": "Merasa geram dan ingin segera melaporkan perbuatannya agar dia disanksi.",
      "B": "Merenungi makna kejujuran tersebut bagi kehidupan manusia secara sangat mendalam.",
      "C": "Menghargai kejujuran sebagai bukti nyata bahwa masih banyak orang baik.",
      "D": "Berdoa agar dia segera menyadari kesalahannya dan kembali ke jalan."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 957,
    "question": "Dalam mengambil keputusan asuransi syariah kesehatan, saya memilih...",
    "options": {
      "A": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi.",
      "B": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial.",
      "C": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah tegas.",
      "D": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh menyenangkan."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "K",
      "D": "S"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 958,
    "question": "Kebiasaan saya saat merawat wajah di klinik kecantikan...",
    "options": {
      "A": "Memperhatikan setiap langkah perawatan wajah dengan tingkat ketelitian sangat tinggi.",
      "B": "Memilih jenis perawatan wajah yang paling efektif untuk kesehatan kulit.",
      "C": "Mengajak bicara perawatnya agar proses perawatan wajah terasa lebih menyenangkan.",
      "D": "Menikmati proses perawatan wajah dengan tenang dan merasa sangat rileks."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 959,
    "question": "Cara saya menanggapi teman yang berbuat salah kantor...",
    "options": {
      "A": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga.",
      "B": "Merasa kecewa karena kejujuran adalah dasar sebuah hubungan kerja kuat.",
      "C": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan kerja kami.",
      "D": "Memaafkannya karena saya tahu dia bermaksud baik menjaga prestasi kerjanya."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 960,
    "question": "Mengenai asuransi jiwa berjangka, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi.",
      "B": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap.",
      "C": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi.",
      "D": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga ada."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 961,
    "question": "Jika teman mengajak pergi ke pameran buku, saya...",
    "options": {
      "A": "Menikmati suasana pameran dan mencari buku ceritanya menenangkan bagi batin.",
      "B": "Mencari buku yang bisa menunjang produktivitas kerja saya agar efisien.",
      "C": "Antusias karena bisa melihat buku baru menarik dan bertemu teman.",
      "D": "Mempelajari daftar penerbit dan jadwal acara dengan tingkat ketelitian tinggi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 962,
    "question": "Saat menghadapi rekan kerja suka menyalahkan orang lain...",
    "options": {
      "A": "Merasa kesal dalam hati namun tetap diam demi menjaga profesionalitas.",
      "B": "Menghadapi rekan tersebut secara langsung agar tidak merusak keharmonisan tim.",
      "C": "Mencoba mencairkan ketegangan dengan candaan yang netral agar semua tertawa.",
      "D": "Menghindari rekan tersebut agar saya tidak ikut terlibat dalam konflik."
    },
    "mapping": {
      "A": "M",
      "B": "K",
      "C": "S",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 963,
    "question": "Bagaimana reaksi saya jika ada saudara tertimpa musibah?",
    "options": {
      "A": "Menemaninya dengan sabar dan memberikan dukungan emosional menenangkan bagi dia.",
      "B": "Sangat sedih dan segera memberikan semangat emosional agar dia kuat.",
      "C": "Mencari cara praktis untuk membantunya menyelesaikan masalah tersebut secepat mungkin.",
      "D": "Menganalisis penyebab masalahnya secara logis untuk mencari jalan keluar tepat."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 964,
    "question": "Sebagai pimpinan, fokus utama membangun budaya tim adalah...",
    "options": {
      "A": "Kreativitas ide yang inovatif dan bisa menarik perhatian banyak orang.",
      "B": "Kerukunan antar anggota tim agar tim tetap solid dan penuh.",
      "C": "Kedisiplinan anggota tim yang sangat tinggi melalui penerapan aturan tegas.",
      "D": "Kemandirian anggota tim yang bisa memberikan kontribusi nyata bagi kesuksesan."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 965,
    "question": "Jika saya merasa dikritik secara pedas rekan kerja...",
    "options": {
      "A": "Menerimanya dengan senyuman dan berjanji akan memberikan performa lebih ceria.",
      "B": "Menganalisis kritik tersebut dan membuktikannya salah melalui prestasi kerja baik.",
      "C": "Memikirkan kritik tersebut secara mendalam dan merasa sangat terpukul kata-katanya.",
      "D": "Mendengarkannya dengan sabar dan mencoba melakukan perbaikan demi kebaikan tim."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 966,
    "question": "Saat melihat orang melakukan perbuatan curang diam-diam harian...",
    "options": {
      "A": "Merenungi makna kejujuran tersebut bagi kehidupan manusia secara sangat mendalam.",
      "B": "Merasa geram dan ingin segera melaporkan perbuatannya agar dia disanksi.",
      "C": "Menghargai kejujuran sebagai bukti nyata bahwa masih banyak orang baik.",
      "D": "Berdoa agar dia segera menyadari kesalahannya dan kembali ke jalan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 967,
    "question": "Dalam mengambil keputusan asuransi syariah pendidikan tinggi, saya...",
    "options": {
      "A": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial.",
      "B": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi.",
      "C": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh menyenangkan.",
      "D": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah tegas."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 968,
    "question": "Kebiasaan saya saat merawat kesehatan tubuh harian adalah...",
    "options": {
      "A": "Mengajak teman berolahraga bersama agar prosesnya terasa lebih sangat menyenangkan.",
      "B": "Menikmati proses olahraga dengan tenang dan merasa sangat rileks batin.",
      "C": "Memilih jenis olahraga yang paling efektif menjaga kebugaran tubuh saya.",
      "D": "Memperhatikan setiap detail asupan nutrisi dan jadwal olahraga sangat teliti."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "K",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 969,
    "question": "Cara saya menanggapi teman berbuat salah lingkungan sosial...",
    "options": {
      "A": "Menjelaskan secara tegas bahwa kejujuran jauh lebih penting daripada menjaga.",
      "B": "Memaafkannya karena saya tahu dia bermaksud baik menjaga hubungannya.",
      "C": "Mencoba memaklumi alasannya demi menjaga keharmonisan dalam hubungan sosial kami.",
      "D": "Merasa kecewa karena kejujuran adalah dasar dari sebuah hubungan sosial."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 970,
    "question": "Mengenai asuransi kematian berjangka, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang memiliki rincian polis paling lengkap dan transparan secara administrasi.",
      "B": "Yang preminya terjangkau dan proses klaimnya bisa dilakukan lewat aplikasi.",
      "C": "Yang sudah terbukti memberikan layanan yang sangat ramah kepada setiap.",
      "D": "Yang memberikan santunan paling besar bagi seluruh anggota keluarga ada."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "P",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 971,
    "question": "Saat memilih aktivitas liburan akhir pekan bersama teman...",
    "options": {
      "A": "Memilih tempat yang tenang dan memberikan rasa nyaman bagi semua.",
      "B": "Memilih tempat yang memberikan tantangan fisik atau mental yang seru.",
      "C": "Memilih tempat yang sedang hits dan ramai dikunjungi banyak orang.",
      "D": "Memilih tempat yang memiliki nilai sejarah atau edukasi yang tinggi."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "S",
      "D": "M"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 972,
    "question": "Dalam hal memilih karir profesional, saya mengutamakan...",
    "options": {
      "A": "Pekerjaan yang memungkinkan saya berinteraksi dengan banyak orang baru.",
      "B": "Pekerjaan yang memberikan peluang untuk naik jabatan dengan cepat.",
      "C": "Pekerjaan yang menuntut ketelitian tinggi dan sistem kerja teratur.",
      "D": "Pekerjaan yang stabil dan memberikan keseimbangan hidup yang baik."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 973,
    "question": "Sikap saya jika pasangan sedang memiliki masalah pekerjaan...",
    "options": {
      "A": "Memberikan dukungan moral dan menjaga ketenangan suasana di rumah.",
      "B": "Membantunya mencari solusi praktis agar masalahnya segera selesai.",
      "C": "Mendengarkan keluh kesahnya dengan penuh empati dan perhatian mendalam.",
      "D": "Menghiburnya dengan mengajak jalan-jalan agar dia merasa lebih ceria."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 974,
    "question": "Sebagai pemimpin, apa prioritas saya dalam menghadapi kegagalan tim?",
    "options": {
      "A": "Menyemangati anggota agar tetap optimis dan tidak patah semangat.",
      "B": "Menjaga stabilitas emosi tim agar tetap tenang menghadapi situasi sulit.",
      "C": "Menganalisis penyebab kegagalan secara mendalam untuk pembelajaran masa depan.",
      "D": "Mengevaluasi strategi secara tegas dan menyusun rencana perbaikan segera."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 975,
    "question": "Jika saya merasa dikritik secara tidak adil oleh rekan...",
    "options": {
      "A": "Menanggapinya dengan candaan namun tetap membela diri secara halus.",
      "B": "Menuntut penjelasan dan membuktikan kebenaran dengan argumen yang kuat.",
      "C": "Memilih untuk diam agar tidak memperbesar konflik yang sedang terjadi.",
      "D": "Merenungkan alasan orang tersebut menyalahkan saya dan merasa sedih."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "konflik",
    "level": "dalam"
  },
  {
    "id": 976,
    "question": "Reaksi saya saat menghadapi perubahan mendadak dalam jadwal...",
    "options": {
      "A": "Tetap santai dan mencari sisi positif dari perubahan tersebut.",
      "B": "Merasa cemas karena persiapan matang saya menjadi berantakan saat.",
      "C": "Berpikir cepat untuk menyesuaikan rencana agar tetap produktif harian.",
      "D": "Menerima keadaan dengan tenang dan mengikuti alur perubahan yang ada."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "K",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "menengah"
  },
  {
    "id": 977,
    "question": "Dalam mengambil keputusan investasi masa tua, kriteria utama...",
    "options": {
      "A": "Investasi yang sedang tren dan menjanjikan gaya hidup menyenangkan.",
      "B": "Investasi yang memberikan kendali penuh dan keuntungan sangat besar.",
      "C": "Investasi yang paling aman dan memberikan ketenangan jangka panjang.",
      "D": "Investasi yang memiliki profil risiko sangat rendah dan terencana matang."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "P",
      "D": "M"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 978,
    "question": "Kebiasaan saya saat merapikan isi tas harian adalah...",
    "options": {
      "A": "Hanya menyisakan barang yang benar-benar dibutuhkan agar tas lebih ringan.",
      "B": "Mengeluarkan semua barang sambil bernyanyi agar tidak terasa membosankan.",
      "C": "Menyusun barang berdasarkan kategori dan ukuran agar terlihat sangat rapi.",
      "D": "Hanya merapikan barang yang berantakan tanpa harus mengaturnya berlebihan."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 979,
    "question": "Cara saya menanggapi kritikan pedas dari orang asing...",
    "options": {
      "A": "Memikirkannya secara mendalam dan merasa sangat sedih mendengarnya batin.",
      "B": "Mencoba menertawakannya dan tidak mau terlalu ambil pusing hari.",
      "C": "Menjawab secara tegas untuk melindungi harga diri saya sendiri segera.",
      "D": "Diam saja dan berharap dia segera berhenti berbicara kasar padaku."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 980,
    "question": "Mengenai asuransi jiwa jangka panjang, pertimbangan utama saya...",
    "options": {
      "A": "Yang memberikan jaminan perlindungan total bagi seluruh anggota keluarga.",
      "B": "Yang preminya terjangkau dan memberikan banyak bonus liburan keluarga.",
      "C": "Yang memberikan rasa aman dan ketenangan pikiran bagi masa depan.",
      "D": "Yang memiliki reputasi perusahaan solid dan rincian klaim yang transparan."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "P",
      "D": "M"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 981,
    "question": "Saat menghadapi tantangan teknis di kantor, saya biasanya...",
    "options": {
      "A": "Menunggu bantuan dari ahli IT dengan sabar tanpa banyak mengeluh.",
      "B": "Menganalisis setiap kemungkinan penyebab kerusakan secara sangat detail sekali.",
      "C": "Bertanya pada teman sambil bercanda agar suasana tidak terasa kaku.",
      "D": "Segera mencari solusi di internet atau buku agar masalah tuntas."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pekerjaan",
    "level": "menengah"
  },
  {
    "id": 982,
    "question": "Jika teman mengajak mendaki gunung secara mendadak, respons...",
    "options": {
      "A": "Ikut saja asalkan ada jaminan keamanan dan kenyamanan selama pendakian.",
      "B": "Mengecek daftar perlengkapan mendaki dengan sangat teliti agar tidak kurang.",
      "C": "Sangat antusias karena suka petualangan alam yang menantang adrenalin.",
      "D": "Mempersiapkan fisik dengan olahraga keras agar kuat mendaki sampai puncak."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "pertemanan",
    "level": "ringan"
  },
  {
    "id": 983,
    "question": "Bagaimana reaksi saya jika ada saudara yang sedang sakit?",
    "options": {
      "A": "Memastikan dia mendapat perawatan medis terbaik agar segera pulih sediakala.",
      "B": "Mendoakannya dengan tulus dan menjaga ketenangan suasana rumah agar nyaman.",
      "C": "Mempelajari tentang penyakitnya secara mendalam untuk membantu proses kesembuhan nanti.",
      "D": "Menemaninya setiap hari dengan penuh keceriaan agar dia tetap semangat."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "keluarga",
    "level": "menengah"
  },
  {
    "id": 984,
    "question": "Sebagai pimpinan, apa visi saya dalam membangun komunitas?",
    "options": {
      "A": "Menciptakan stabilitas komunitas agar semua anggota merasa aman dan nyaman.",
      "B": "Membangun sistem komunitas yang sangat solid, teratur, dan administrasi rapi.",
      "C": "Menjadikan komunitas tempat yang penuh keceriaan dan semangat persaudaraan harian.",
      "D": "Membawa komunitas mencapai prestasi tertinggi yang diakui oleh dunia luar."
    },
    "mapping": {
      "A": "P",
      "B": "M",
      "C": "S",
      "D": "K"
    },
    "category": "kepemimpinan",
    "level": "dalam"
  },
  {
    "id": 985,
    "question": "Jika saya merasa dihina oleh orang asing, respons...",
    "options": {
      "A": "Merasa sedih sebentar dan bertanya-tanya apa yang salah dengan diri.",
      "B": "Mencoba menanggapinya dengan santai dan tidak memasukkannya ke dalam hati.",
      "C": "Menegurnya secara tegas agar dia tidak semena-mena terhadap orang lain.",
      "D": "Membiarkannya saja karena saya tidak ingin membuang energi hal negatif."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 986,
    "question": "Saat melihat orang lain sedang dalam kesulitan besar, saya...",
    "options": {
      "A": "Menghiburnya agar bebannya terasa lebih ringan dan dia bisa tersenyum.",
      "B": "Mendampinginya dengan sabar dan memberikan dukungan emosional menenangkan bagi dia.",
      "C": "Menganalisis permasalahannya dan memberikan saran logis berdasarkan pengalaman saya sendiri.",
      "D": "Mencari cara praktis untuk membantunya menyelesaikan masalah tersebut secepat mungkin."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 987,
    "question": "Dalam mengambil keputusan asuransi syariah kesehatan, saya memilih...",
    "options": {
      "A": "Yang memiliki rincian akad paling transparan dan terpercaya secara administrasi.",
      "B": "Yang memberikan rasa tenang dan keberkahan bagi masa depan finansial.",
      "C": "Yang banyak digunakan oleh komunitas saya karena dirasa jauh menyenangkan.",
      "D": "Yang memberikan jaminan perlindungan sesuai dengan prinsip ekonomi syariah tegas."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 988,
    "question": "Kebiasaan saya saat mencuci piring di dapur rumah adalah...",
    "options": {
      "A": "Memastikan tidak ada sisa lemak yang menempel pada peralatan makan tersebut.",
      "B": "Mencuci piring dengan tenang dan menikmati setiap aliran air pada tangan.",
      "C": "Mencuci piring sambil mendengarkan musik atau menonton video sangat lucu.",
      "D": "Mencuci piring dengan cepat agar dapur segera bersih dan terlihat rapi."
    },
    "mapping": {
      "A": "M",
      "B": "P",
      "C": "S",
      "D": "K"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 989,
    "question": "Cara saya menanggapi teman yang ingkar janji temu adalah...",
    "options": {
      "A": "Menjelaskan secara tegas bahwa tindakannya tersebut sangat merugikan waktu berharga.",
      "B": "Merasa kecewa secara mendalam dan mulai mempertanyakan tingkat kejujuran teman.",
      "C": "Memaafkannya dan berharap dia tidak akan mengulanginya lagi di masa mendatang.",
      "D": "Mengingatkannya dengan cara santai agar dia tidak merasa sedang saya."
    },
    "mapping": {
      "A": "K",
      "B": "M",
      "C": "P",
      "D": "S"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 990,
    "question": "Mengenai asuransi kebakaran rumah, pertimbangan utama saya adalah...",
    "options": {
      "A": "Yang preminya terjangkau dan proses pendaftarannya dilakukan secara online cepat.",
      "B": "Yang memiliki reputasi perusahaan baik dan rincian klaim sangat jelas.",
      "C": "Yang sudah terbukti terpercaya dan memberikan layanan sangat ramah sekali.",
      "D": "Yang memberikan ganti rugi besar dan layanannya sangat profesional sekali."
    },
    "mapping": {
      "A": "S",
      "B": "M",
      "C": "P",
      "D": "K"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  },
  {
    "id": 991,
    "question": "Jika rekan kerja baru bergabung di divisi saya harian...",
    "options": {
      "A": "Saya memberikan dokumen prosedur kerja yang lengkap untuk dia pelajari.",
      "B": "Saya langsung mengajaknya berkeliling kantor dan memperkenalkan ke semua orang.",
      "C": "Saya memberikan arahan tugas utama agar dia bisa segera produktif.",
      "D": "Saya menyambutnya dengan ramah dan membiarkannya beradaptasi secara perlahan."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "pekerjaan",
    "level": "ringan"
  },
  {
    "id": 992,
    "question": "Saat menghadapi kemacetan panjang di akhir pekan, saya harian...",
    "options": {
      "A": "Menunggu dengan tenang sambil menikmati udara di dalam kendaraan saja harian.",
      "B": "Terus memantau aplikasi navigasi untuk mencari jalur alternatif tercepat harian.",
      "C": "Mengevaluasi efisiensi waktu perjalanan saya dan merencanakan jadwal ulang harian.",
      "D": "Menikmati musik kencang atau mengajak penumpang lain bernyanyi bersama harian."
    },
    "mapping": {
      "A": "P",
      "B": "K",
      "C": "M",
      "D": "S"
    },
    "category": "tekanan / stres",
    "level": "ringan"
  },
  {
    "id": 993,
    "question": "Bagaimana sikap saya jika ada anggota keluarga berbeda pendapat?",
    "options": {
      "A": "Mendengarkan semua pihak demi menjaga kerukunan dan kedamaian dalam keluarga.",
      "B": "Mencoba mencairkan suasana dengan humor agar pembicaraan tetap terasa asyik.",
      "C": "Menjelaskan posisi saya secara kuat agar mereka memahami keuntungan ide.",
      "D": "Menganalisis setiap pendapat secara logis sebelum saya memberikan tanggapan resmi."
    },
    "mapping": {
      "A": "P",
      "B": "S",
      "C": "K",
      "D": "M"
    },
    "category": "keluarga",
    "level": "dalam"
  },
  {
    "id": 994,
    "question": "Sebagai pimpinan, apa prioritas saya dalam mengoordinasi kegiatan tim?",
    "options": {
      "A": "Memastikan semua target kegiatan tercapai sesuai dengan jadwal yang ditetapkan.",
      "B": "Memastikan pembagian tugas adil sehingga tidak ada anggota merasa terbeban.",
      "C": "Memastikan setiap rincian teknis pengerjaan dilakukan dengan standar kualitas tinggi.",
      "D": "Memastikan semua anggota merasa senang dan bersemangat selama kegiatan berlangsung."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "M",
      "D": "S"
    },
    "category": "kepemimpinan",
    "level": "menengah"
  },
  {
    "id": 995,
    "question": "Jika saya merasa dicurangi oleh penjual di toko daring...",
    "options": {
      "A": "Mengutarakan kekecewaan saya di kolom komentar dengan gaya bahasa ekspresif.",
      "B": "Melaporkan akun tersebut ke pihak pengelola platform agar segera ditindak.",
      "C": "Mengumpulkan semua bukti transaksi dan rincian chat untuk proses klaim.",
      "D": "Menerima kejadian tersebut sebagai pelajaran dan tidak akan belanja di sana."
    },
    "mapping": {
      "A": "S",
      "B": "K",
      "C": "M",
      "D": "P"
    },
    "category": "konflik",
    "level": "menengah"
  },
  {
    "id": 996,
    "question": "Reaksi saya saat melihat berita kesenjangan ekonomi dunia harian...",
    "options": {
      "A": "Berpikir tentang cara meningkatkan produktivitas agar saya tidak mengalami kesulitan.",
      "B": "Merasa sedih dan ingin segera melakukan penggalangan dana sosial besar.",
      "C": "Menganalisis faktor penyebab kesenjangan tersebut secara mendalam berdasarkan teori ekonomi.",
      "D": "Berdoa agar sistem ekonomi menjadi lebih adil dan merata bagi semua."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "tekanan / stres",
    "level": "dalam"
  },
  {
    "id": 997,
    "question": "Dalam mengambil keputusan investasi pendidikan harian, kriteria saya harian...",
    "options": {
      "A": "Sekolah yang menjamin kesuksesan karier dan kemandirian finansial di masa.",
      "B": "Sekolah yang populer dan memberikan banyak pengalaman interaksi sosial seru.",
      "C": "Sekolah yang memiliki standar akademik tinggi dan kurikulum sangat terencana.",
      "D": "Sekolah yang memberikan lingkungan belajar yang tenang dan nyaman bagi."
    },
    "mapping": {
      "A": "K",
      "B": "S",
      "C": "M",
      "D": "P"
    },
    "category": "pengambilan keputusan",
    "level": "dalam"
  },
  {
    "id": 998,
    "question": "Kebiasaan saya saat merapikan dokumen di meja kerja harian harian...",
    "options": {
      "A": "Membuang dokumen yang sudah tidak diperlukan agar meja tetap efisien.",
      "B": "Menata dokumen seperlunya saja sesuai dengan urutan yang paling sering.",
      "C": "Menumpuknya saja yang penting meja masih terlihat menyenangkan bagi saya.",
      "D": "Menyusun dokumen dalam map berwarna-warni sesuai dengan kategori dan abjad."
    },
    "mapping": {
      "A": "K",
      "B": "P",
      "C": "S",
      "D": "M"
    },
    "category": "kebiasaan harian",
    "level": "ringan"
  },
  {
    "id": 999,
    "question": "Cara saya menanggapi teman yang lupa membalas pesan harian saya...",
    "options": {
      "A": "Mengirimkan pesan lucu atau meme agar dia segera ingat membalas.",
      "B": "Menunggu dengan sabar sampai dia memiliki waktu luang untuk membalas.",
      "C": "Berpikir apakah ada kata-kata saya yang menyinggung atau kurang tepat.",
      "D": "Menanyakan langsung alasan kenapa dia belum membalas pesan penting saya."
    },
    "mapping": {
      "A": "S",
      "B": "P",
      "C": "M",
      "D": "K"
    },
    "category": "komunikasi",
    "level": "menengah"
  },
  {
    "id": 1000,
    "question": "Mengenai asuransi properti harian, pertimbangan utama saya dalam harian...",
    "options": {
      "A": "Yang memiliki reputasi perusahaan solid dan rincian klaim yang transparan.",
      "B": "Yang preminya terjangkau dan proses pendaftarannya bisa dilakukan lewat daring.",
      "C": "Yang memberikan jaminan perlindungan total jika terjadi kerusakan pada bangunan.",
      "D": "Yang memberikan rasa aman jangka panjang bagi seluruh aset keluarga."
    },
    "mapping": {
      "A": "M",
      "B": "S",
      "C": "K",
      "D": "P"
    },
    "category": "perencanaan masa depan",
    "level": "dalam"
  }
];


export const RESULT_PROFILES: Record<string, ResultProfile> = {
  "S-K": {
    title: "Sanguinis–Koleris (Penggerak yang Penuh Semangat)",
    summary: "Anda adalah sosok yang 'cepat menyala': mudah membangun keakraban, selalu optimis, dan berani mengambil langkah pertama. Di sekolah, kampus, maupun tempat kerja, Anda bisa menghidupkan suasana sekaligus mendorong kelompok untuk mencapai tujuan. Kekuatan Anda paling terasa saat dibutuhkan ide segar, kecepatan, dan keberanian mengambil risiko. Namun, ingatlah bahwa gaya Anda yang dominan bisa berubah sesuai situasi; saat sedang santai, Anda sangat hangat, tapi saat ada target atau tugas mendesak, Anda bisa berubah menjadi sangat tegas dan menuntut.",
    decisionStyle: [
      "Fokus pada peluang dan solusi; lebih suka prinsip 'jalan dulu, perbaiki nanti' daripada menunggu semuanya sempurna.",
      "Mampu menangkap gambaran besar dari sebuah situasi dengan sangat cepat.",
      "Terkadang saking cepatnya merasa yakin, Anda rawan melewatkan detail-detail kecil yang sebenarnya penting."
    ],
    decisionGuide: [
      "Tentukan satu tujuan utama (tulis dalam 1 kalimat pendek).",
      "Pikirkan batas risikonya (apa hal terburuk yang mungkin terjadi?).",
      "Pilih langkah pertama yang paling mudah dikerjakan hari ini.",
      "Evaluasi ulang setelah beberapa hari berjalan, lalu perbaiki jika ada yang kurang."
    ],
    emotionalDynamics: [
      "Selalu berusaha tampil positif dan ceria. Saat merasa kecewa, Anda cenderung menutupinya dan tetap berusaha terlihat kuat.",
      "Sangat sensitif jika merasa tidak punya kendali, atau jika melihat rencana berjalan terlalu lambat.",
      "Terkadang bisa kelelahan tanpa sadar karena terus memaksakan diri untuk bergerak maju."
    ],
    stressSigns: [
      "Mudah tersinggung dan bicara dengan nada tinggi", 
      "Sulit untuk duduk diam", 
      "Ingin mengambil alih dan mengendalikan semua pekerjaan", 
      "Impulsif (seperti tiba-tiba belanja atau mengambil hobi/tugas baru)"
    ],
    interactionStyle: [
      "Pintar membujuk dan sangat nyaman menjadi pusat perhatian; mudah menggerakkan semangat orang lain.",
      "Saking antusiasnya, Anda sering tanpa sadar mendominasi percakapan dan memotong ucapan orang.",
      "Sangat efektif ketika Anda mulai mau meluangkan lebih banyak waktu untuk mendengarkan."
    ],
    interactionTips: [
      "Saya ingin dengar pendapat kamu dulu sebelum kita putuskan bersama.",
      "Menurut kamu, apa hal yang paling penting untuk kita perhatikan di situasi ini?"
    ],
    challenges: [
      "Mengambil keputusan terlalu cepat tanpa pikir panjang",
      "Semangat di awal, tapi sering kehabisan energi sebelum tugas benar-benar selesai",
      "Kurang teliti pada hal-hal kecil",
      "Terkadang terkesan terlalu menekan atau mendikte orang lain"
    ],
    conflictTrigger: "Orang yang bergerak terlalu lambat, aturan yang terlalu kaku, tugas yang membosankan, atau jika dikritik di depan banyak orang.",
    conflictStress: "Anda akan memberikan tekanan, menyederhanakan masalah secara berlebihan, atau mencari jalan pintas agar masalah cepat beres.",
    conflictSolution: [
      "Sepakati tujuan akhirnya bersama-sama (cukup 1 kalimat).",
      "Bagikan tugas dengan sangat jelas: siapa mengerjakan apa, dan kapan harus selesai.",
      "Tutup perdebatan dengan langkah nyata yang disepakati bersama."
    ],
    recommendations: [
      "Hari 1–3 (Rem Keputusan): Sebelum mengambil keputusan besar (atau belanja mahal), tahan dulu. Tulis 3 risikonya.",
      "Hari 4–6 (Fokus Satu Hal): Pilih 1 prioritas tugas. Jangan mulai tugas atau kegiatan baru sebelum yang ini selesai.",
      "Hari 7–10 (Beri Perhatian pada Detail): Gunakan catatan kecil atau daftar periksa (checklist) agar tidak ada barang/tugas yang tertinggal.",
      "Hari 11–14 (Perbaiki Relasi): Lakukan 2 obrolan santai dengan teman/keluarga. Tantang diri Anda untuk mendengarkan 70% waktu tanpa memotong."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan tetap menjadi sosok yang cepat dan berani, namun keputusan Anda akan lebih aman, tugas-tugas lebih tuntas, dan hubungan dengan orang lain menjadi jauh lebih hangat.",
    checklist: [
      "Bulan 1: Tentukan 1 target/kegiatan utama yang ingin diselesaikan, jangan mengambil semuanya.",
      "Bulan 1: Belajar meluangkan waktu 15 menit setiap minggu untuk mengevaluasi apa yang sudah dikerjakan.",
      "Bulan 2: Biasakan mencatat tugas di buku/HP agar tidak hanya mengandalkan ingatan.",
      "Bulan 2: Jika bekerja dalam kelompok, cobalah percayakan 1 tugas penting kepada teman tanpa ikut campur.",
      "Bulan 3: Hentikan kegiatan atau hobi yang hanya membuang waktu dan tidak memberi manfaat nyata.",
      "Bulan 3: Evaluasi cara bicara Anda. Kurangi kebiasaan merespons dengan emosi saat sedang terburu-buru."
    ],
    suitableCareers: [
      "Pemimpin Kelompok / Ketua Kelas",
      "Humas, Negosiator, atau Pemasaran",
      "Presenter, Youtuber, atau Pembicara",
      "Perintis Kegiatan atau Pengusaha (Tahap Awal)",
      "Pekerjaan yang menuntut pergerakan cepat dan banyak interaksi"
    ]
  },
  "S-M": {
    title: "Sanguinis–Melankolis (Pencerita yang Mendalam)",
    summary: "Anda adalah sosok yang hangat dan mudah nyambung dengan orang lain, namun di saat yang sama, Anda adalah seorang pemikir yang mendalam. Teman-teman suka bercerita pada Anda karena ucapan Anda tidak hanya menghibur, tapi juga masuk akal. Catatan penting: saat suasana sedang mendukung, Anda akan tampil sangat ceria (Sanguinis). Namun, saat Anda sedang merasa dikritik atau tertekan, sisi Melankolis Anda akan muncul, membuat Anda lebih sensitif, pendiam, dan banyak memikirkan segalanya.",
    decisionStyle: [
      "Selalu melihat sesuatu dari banyak sisi; logika dan perasaan berjalan secara bersamaan.",
      "Terkadang Anda terlalu banyak memikirkan pilihan (overthinking) sehingga sangat sulit mengambil keputusan akhir.",
      "Sangat membutuhkan batas waktu (deadline) agar tidak terjebak dalam keraguan."
    ],
    decisionGuide: [
      "Tulis masalah yang sedang Anda hadapi dalam 1 kalimat pendek.",
      "Beri diri Anda maksimal 2 pilihan saja, jangan terlalu banyak.",
      "Tetapkan batas waktu kapan Anda harus memilih (misalnya: 'Malam ini harus sudah ada keputusan').",
      "Pilih salah satu, jalankan, dan ingat bahwa tidak ada keputusan yang 100% sempurna."
    ],
    emotionalDynamics: [
      "Di luar Anda bisa tampak sangat ceria, tetapi di dalam hati Anda mudah memikirkan komentar atau pandangan orang lain.",
      "Sangat membutuhkan apresiasi dan pujian yang tulus, bukan sekadar kata 'bagus' yang basa-basi.",
      "Saat lelah hati, Anda cenderung menarik diri dari pergaulan dan memutar kembali masalah di pikiran Anda berulang-ulang."
    ],
    stressSigns: [
      "Sulit fokus pada satu hal", 
      "Sangat sensitif dan mudah tersinggung", 
      "Sengaja menghindari balas pesan/chat dari orang lain", 
      "Tiba-tiba menjadi sangat perfeksionis pada hal sepele"
    ],
    interactionStyle: [
      "Sangat natural dalam membangun kedekatan, rasa percaya, dan empati dengan orang lain.",
      "Terkadang sering menunda membicarakan hal yang penting karena takut akan menyinggung perasaan teman.",
      "Sangat hebat jika diminta menjadi fasilitator, penengah, atau pendengar yang baik."
    ],
    interactionTips: [
      "Aku butuh kejelasan di bagian ini supaya kita sama-sama nyaman ke depannya.",
      "Aku setuju dengan ide kamu, tapi mungkin bagian yang ini perlu kita rapikan lagi."
    ],
    challenges: [
      "Terlalu banyak berpikir dan sering meragukan diri sendiri (Overthinking)",
      "Terlalu ingin menyenangkan semua orang (People-pleasing)",
      "Sangat sensitif terhadap kritikan atau penolakan",
      "Punya standar yang tinggi tapi sering dipendam sendiri, sehingga akhirnya merasa lelah batin"
    ],
    conflictTrigger: "Kesalahpahaman dengan teman, menerima kritik yang kasar, atau dikejar tugas dengan waktu yang sangat mepet.",
    conflictStress: "Anda akan mencoba menghindar, mengurung diri, terus memikirkan masalahnya semalaman, lalu kehabisan energi (drop).",
    conflictSolution: [
      "Minta waktu jeda sejenak untuk menenangkan diri dan pikiran Anda.",
      "Sampaikan apa yang Anda rasakan dengan jujur menggunakan formula: 'Saat kamu begini... aku merasa begini... aku butuh...'.",
      "Akhiri obrolan dengan satu kesepakatan kecil agar perasaan kembali lega."
    ],
    recommendations: [
      "Hari 1–3 (Batas Berpikir): Pasang alarm 30 menit. Jika waktunya habis, Anda harus membuat keputusan sementara tanpa boleh berpikir lagi.",
      "Hari 4–6 (Latihan Menolak): Cobalah 2 kali bilang 'Maaf aku belum bisa' pada permintaan yang memang memberatkan Anda.",
      "Hari 7–10 (Menerima Kritik): Berlatih meminta masukan yang sehat dari teman tepercaya ('Apa satu hal yang bisa aku perbaiki?').",
      "Hari 11–14 (Selesai > Sempurna): Ingatkan diri Anda bahwa tugas yang 'Selesai' jauh lebih baik daripada tugas 'Sempurna tapi tidak pernah dikumpulkan'."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan menjadi sosok yang jauh lebih berani mengambil keputusan tanpa kehilangan kehangatan, serta memiliki tameng hati yang lebih kuat saat menerima kritikan.",
    checklist: [
      "Bulan 1: Tentukan 3 batasan pribadi Anda (kapan waktu istirahat, kapan boleh diganggu).",
      "Bulan 1: Latih kemampuan mengambil keputusan cepat pada hal-hal kecil (seperti memilih menu makanan).",
      "Bulan 2: Selesaikan 1 tugas/karya dengan prinsip 'Cukup Baik' tanpa harus merevisinya berkali-kali.",
      "Bulan 2: Cari teman atau mentor yang bisa memberi Anda masukan positif setiap minggu.",
      "Bulan 3: Belajar membela diri sendiri: praktikkan menolak ajakan dengan sopan jika sedang lelah.",
      "Bulan 3: Evaluasi hal-hal apa saja yang sering membuat Anda overthinking, lalu kurangi paparan terhadap hal tersebut."
    ],
    suitableCareers: [
      "Pendidik, Mentor, atau Guru yang penyayang",
      "Penulis, Kreator Konten, atau Pembuat Strategi",
      "Pekerjaan di bidang Psikologi, Konseling, atau SDM",
      "Pembawa acara (MC) yang membutuhkan kedalaman pesan",
      "Peran yang menghubungkan empati dan komunikasi"
    ]
  },
  "S-P": {
    title: "Sanguinis–Plegmatis (Sahabat yang Menenangkan)",
    summary: "Anda adalah pribadi yang hangat, santai, dan selalu bisa membuat orang di sekitar merasa diterima. Anda sangat tidak suka keributan dan pandai menjaga suasana agar tetap damai. Orang lain menyukai Anda karena Anda adalah 'sahabat' yang asyik diajak bercanda, sekaligus pendengar yang sabar. Namun, ketika berhadapan dengan konflik atau tekanan, sisi Plegmatis Anda akan membuat Anda lebih memilih diam dan menghindar ketimbang menyelesaikannya.",
    decisionStyle: [
      "Selalu memilih jalan yang paling aman dan minim gesekan dengan orang lain.",
      "Sering menunda-nunda mengambil keputusan karena takut ada pihak yang kecewa.",
      "Sangat membutuhkan dorongan atau rutinitas yang sederhana agar tidak terbawa arus teman."
    ],
    decisionGuide: [
      "Tentukan 1 hal yang paling penting bagi ANDA hari ini (bukan bagi orang lain).",
      "Untuk keputusan kecil, paksa diri Anda untuk memilih dalam waktu kurang dari 5 menit.",
      "Untuk keputusan besar, beri batas waktu, dan pilihlah yang paling realistis untuk Anda jalani."
    ],
    emotionalDynamics: [
      "Kelihatan sangat tenang dan stabil, tetapi di dalam hati sering menahan perasaan agar tidak terjadi ribut-ribut.",
      "Sangat cepat kehabisan energi bila berada di lingkungan yang kasar, penuh tekanan, atau saling bersaing.",
      "Sering merasa 'dimanfaatkan' karena Anda terlalu sering mengalah demi kebaikan bersama."
    ],
    stressSigns: [
      "Menunda-nunda pekerjaan (Prokrastinasi)", 
      "Menghilang tiba-tiba (Susah dihubungi)", 
      "Menjadi sangat pasif", 
      "Bilang 'Iya' di depan, tapi kesal dan menggerutu di belakang"
    ],
    interactionStyle: [
      "Pendengar yang sangat enak, tulus, dan tidak suka menghakimi orang lain.",
      "Tempat curhat nomor satu bagi teman-teman dan keluarga.",
      "Sangat perlu melatih ketegasan agar Anda tidak kebanjiran menampung masalah/beban orang lain."
    ],
    interactionTips: [
      "Aku mau bantu, tapi kemampuanku cuma sampai sini ya, sisanya kamu yang teruskan.",
      "Aku kurang nyaman dengan pilihan itu. Aku lebih setuju kalau kita coba jalan yang ini."
    ],
    challenges: [
      "Kebiasaan menunda-nunda pekerjaan sampai mepet waktu (Suka menggampangkan)",
      "Sangat sulit berkata 'Tidak' pada permintaan orang lain",
      "Memilih memendam masalah sampai akhirnya meledak atau menjadi stres sendiri",
      "Tujuan hidup pribadi sering kabur karena terlalu sering mengikuti arus orang banyak"
    ],
    conflictTrigger: "Pertengkaran yang bising, orang yang agresif/memaksa, atau ditagih tugas secara mendadak.",
    conflictStress: "Anda akan memilih untuk diam, menghindar, mencari alasan, atau 'menghilang' agar terhindar dari konfrontasi.",
    conflictSolution: [
      "Ajak bicara empat mata, bukan di depan banyak orang.",
      "Bicarakan intinya dengan santai: apa yang membuat tidak nyaman dan apa yang diharapkan.",
      "Sepakati satu aturan sederhana agar masalah tersebut tidak terulang lagi."
    ],
    recommendations: [
      "Hari 1–3 (Otot Keputusan): Berhentilah berkata 'Terserah'. Paksakan diri memilih 1 hal setiap hari secara tegas.",
      "Hari 4–6 (Tembok Pertahanan): Tulis 3 hal yang tidak ingin Anda lakukan, lalu praktikkan menolak permintaan tersebut dengan sopan.",
      "Hari 7–10 (Prinsip 10 Menit): Jangan tunggu mood. Paksakan diri memulai tugas selama 10 menit saja setiap harinya.",
      "Hari 11–14 (Arah Pribadi): Tulis 1 impian yang murni keinginan Anda sendiri, bukan titipan dari orang tua atau teman."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan menjadi sosok yang jauh lebih tegas dan teratur, tidak lagi mudah dimanfaatkan orang lain, namun tetap menjadi sosok sahabat yang hangat dan menyenangkan.",
    checklist: [
      "Bulan 1: Buat daftar '3 Prioritas Saya' yang harus didahulukan sebelum membantu orang lain.",
      "Bulan 1: Latih otot ketegasan: Praktikkan berkata 'Tidak' minimal 2 kali dalam minggu ini.",
      "Bulan 2: Selesaikan 1 tugas, hobi, atau proyek sederhana sampai benar-benar tuntas.",
      "Bulan 2: Berlatih menghadapi konflik sehat. Jangan dipendam; tegur teman dengan baik jika ia salah.",
      "Bulan 3: Rapikan jadwal sehari-hari. Batasi waktu rebahan, tentukan jam untuk benar-benar fokus mengerjakan tugas.",
      "Bulan 3: Seleksi pertemanan Anda. Perkuat pertemanan yang saling mendukung, dan kurangi waktu dengan teman yang hanya memanfaatkan kebaikan Anda."
    ],
    suitableCareers: [
      "Layanan Pelanggan (Customer Service) atau Humas",
      "Pekerjaan Sosial atau Tenaga Medis (Perawat/Pendamping)",
      "Dukungan Administrasi yang tidak penuh tekanan",
      "Pekerjaan di bidang perhotelan atau pariwisata",
      "Pekerjaan yang berfokus pada melayani dan menolong sesama"
    ]
  },
  "M-S": {
    title: "Melankolis–Sanguinis (Si Pemikir yang Ramah)",
    summary: "Anda memiliki kombinasi yang unik: di satu sisi Anda punya standar yang sangat tinggi dan ketelitian yang tajam (Melankolis), namun di sisi lain Anda mampu menyampaikannya dengan gaya yang ramah dan menarik (Sanguinis). Anda bisa menjadi 'penjaga kualitas' yang hebat, sekaligus menjadi orang yang dipercaya untuk membimbing teman-teman agar paham. Anda kuat dalam mengatur, menganalisa, sekaligus berkomunikasi.",
    decisionStyle: [
      "Menginginkan keputusan yang benar, rapi, dan terbukti, bukan sekadar asal cepat selesai.",
      "Sering mengulang atau memperbaiki (revisi) sesuatu berkali-kali demi mencapai hasil yang paling sempurna.",
      "Sangat butuh batas toleransi agar tidak kehabisan waktu dan tenaga untuk hal yang sebenarnya sudah cukup bagus."
    ],
    decisionGuide: [
      "Tentukan target akhirnya seperti apa, dan kapan batas waktunya (deadline).",
      "Batasi jumlah perbaikan/revisi (misalnya: 'Aku hanya akan mengedit tugas ini maksimal 2 kali').",
      "Kerjakan draft atau coret-coretan dasarnya dengan cepat dulu, baru dirapikan sedikit demi sedikit."
    ],
    emotionalDynamics: [
      "Di luar Anda terlihat ramah dan mudah bergaul, tapi batin Anda mudah tersentuh jika kerja keras Anda tidak dihargai.",
      "Sangat keras pada diri sendiri dan mudah merasa 'Saya masih kurang bagus'.",
      "Saat kelelahan, suara kritik di kepala Anda akan menjadi sangat keras dan mengganggu."
    ],
    stressSigns: [
      "Menjadi sangat perfeksionis pada hal yang tidak penting", 
      "Sangat sulit merasa puas", 
      "Mudah kesal atau marah pada hal-hal kecil yang tidak sesuai rencana",
      "Merasa pesimis"
    ],
    interactionStyle: [
      "Sangat hebat dalam menjelaskan hal-hal yang rumit menjadi cerita yang menarik dan mudah dipahami.",
      "Bisa memberikan kritikan yang sangat akurat, namun terkadang terdengar tajam bagi orang yang perasa.",
      "Akan sangat luar biasa jika Anda menyeimbangkan antara memuji dan mengoreksi teman."
    ],
    interactionTips: [
      "Aku sangat menghargai usahamu di bagian ini. Supaya hasilnya lebih sempurna, yuk kita rapikan bagian yang satunya lagi.",
      "Aku lagi bahas tugas/masalahnya ya, bukan bermaksud menyalahkan kamu secara pribadi."
    ],
    challenges: [
      "Rasa ingin sempurna (perfeksionisme) yang membuat pekerjaan tidak pernah selesai",
      "Kritikan Anda kadang terdengar seperti serangan bagi orang lain",
      "Terlalu banyak menimbang antara ingin kualitas yang bagus vs waktu yang mepet",
      "Mudah lelah secara mental karena terlalu memikirkan detail"
    ],
    conflictTrigger: "Melihat orang yang bekerja asal-asalan, teman yang tidak peduli pada detail, atau waktu yang terlalu sempit untuk menyelesaikan tugas.",
    conflictStress: "Anda akan menjadi semakin kaku, sangat kritis terhadap orang sekitar, dan mulai sulit mempercayai orang lain untuk membantu Anda.",
    conflictSolution: [
      "Sepakati dulu standar minimalnya bersama kelompok (tidak harus 100% sempurna).",
      "Fokus perbaiki 1 atau 2 hal yang paling penting saja, biarkan hal kecil lainnya.",
      "Buat rencana kerja yang jelas agar semua orang tahu apa yang harus diperbaiki."
    ],
    recommendations: [
      "Hari 1–3 (Belajar Menerima 'Cukup'): Buat 3 level kualitas: 'Cukup', 'Baik', dan 'Sempurna'. Mulailah menerima kenyataan bahwa banyak hal di dunia ini hanya butuh level 'Cukup'.",
      "Hari 4–6 (Batas Toleransi): Berlatihlah menahan diri. Berikan maksimal 2 kali revisi untuk 1 tugas, setelah itu harus Anda lepaskan/kumpulkan.",
      "Hari 7–10 (Mengkritik dengan Elegan): Biasakan selalu memulai kalimat dengan 1 pujian spesifik sebelum Anda memberikan koreksi kepada teman.",
      "Hari 11–14 (Rawat Pikiran): Luangkan waktu 30 menit setiap hari tanpa memegang HP atau memikirkan tugas, demi ketenangan batin Anda."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan tetap menjadi sosok yang cerdas dan teliti, namun pekerjaan Anda akan lebih cepat selesai, pikiran lebih ringan, dan orang-orang akan lebih nyaman bekerja dengan Anda.",
    checklist: [
      "Bulan 1: Tetapkan standar 'Minimal Selesai' untuk tugas sehari-hari agar Anda tidak kehabisan waktu.",
      "Bulan 1: Siapkan template atau daftar periksa (checklist) agar Anda tidak perlu mengingat semuanya di kepala.",
      "Bulan 2: Berlatih pola komunikasi: Puji dulu, baru beri masukan, lalu tutup dengan kalimat penyemangat.",
      "Bulan 2: Belajar menyelesaikan satu tugas/karya tanpa harus merevisinya sampai sempurna.",
      "Bulan 3: Belajar membagi tugas. Delegasikan hal-hal kecil kepada orang lain dan percayakan pada mereka.",
      "Bulan 3: Evaluasi jam tidur dan waktu istirahat Anda. Jangan korbankan kesehatan hanya demi hasil yang sempurna."
    ],
    suitableCareers: [
      "Editor, Pengawas Kualitas (Quality Control), atau Peneliti",
      "Guru, Dosen, atau Pelatih yang butuh ketelitian",
      "Pembuat Konten Strategis atau Desainer",
      "Manajer Proyek (Terutama dalam mengelola komunikasi kelompok)",
      "Pekerjaan yang memadukan analisa data dan presentasi (Bussiness Analyst)"
    ]
  },
  "M-K": {
    title: "Melankolis–Koleris (Si Pengatur yang Teliti)",
    summary: "Anda adalah perpaduan luar biasa antara ketelitian dan ketegasan. Di mata orang lain, Anda adalah sosok yang selalu bisa diandalkan untuk 'membereskan kekacauan'. Anda tidak hanya suka bekerja dengan cepat, tapi juga memastikannya rapi dan terukur. Jika ada tugas kelompok atau proyek yang berantakan, Anda adalah orang pertama yang tahu cara memperbaikinya dan memimpin yang lain untuk bergerak.",
    decisionStyle: [
      "Sangat percaya pada prinsip, aturan yang jelas, dan data atau fakta yang ada.",
      "Selalu memikirkan 'apa hal terburuk yang bisa terjadi' agar semuanya tetap aman terkendali.",
      "Lebih suka mengambil keputusan yang tegas daripada harus berdebat dan membuang waktu."
    ],
    decisionGuide: [
      "Tentukan dulu hasil akhirnya harus seperti apa (bayangkan hasil yang diinginkan).",
      "Buat standar minimal yang wajib dicapai, dan standar ideal sebagai bonus jika ada waktu sisa.",
      "Pilih satu rute terbaik dan langsung jalankan tanpa banyak keraguan.",
      "Evaluasi hasilnya di akhir, jangan terlalu banyak mengubah arah di tengah jalan."
    ],
    emotionalDynamics: [
      "Jarang memperlihatkan emosi secara langsung; Anda lebih suka menyalurkannya lewat tindakan atau bekerja lebih keras.",
      "Sangat mudah merasa gemas atau frustrasi jika melihat teman mengulang kesalahan yang sama atau tidak serius.",
      "Terkadang bisa merasa sangat kelelahan secara batin karena merasa harus mengurus semuanya sendirian 'agar hasilnya aman'."
    ],
    stressSigns: [
      "Nada bicara menjadi lebih tajam dan ketus", 
      "Sulit tidur karena memikirkan tugas yang belum sempurna", 
      "Menjadi sinis (merasa 'percuma dijelaskan, mending kerjakan sendiri')", 
      "Mulai mengatur hal-hal kecil dari pekerjaan orang lain"
    ],
    interactionStyle: [
      "Bicara sangat jelas, tegas, dan tidak suka bertele-tele.",
      "Pintar memberikan arahan sehingga orang tahu persis apa yang harus mereka lakukan.",
      "Kadang lupa memberikan apresiasi/pujian karena terlalu fokus pada apa yang belum sempurna."
    ],
    interactionTips: [
      "Ini standar minimal yang kita butuhkan ya, supaya aman. Nanti kalau ada waktu, baru kita buat lebih bagus lagi.",
      "Aku lagi bahas cara kerja kita, bukan bermaksud menyalahkan kamu secara pribadi ya."
    ],
    challenges: [
      "Terkadang terlihat terlalu kaku dan sulit diajak kompromi",
      "Sikap perfeksionis yang membuat pekerjaan malah lambat selesai",
      "Terlalu kritis (baik kepada diri sendiri maupun kepada orang lain)",
      "Sulit percaya pada orang lain sehingga selalu ingin mengatur cara kerja mereka"
    ],
    conflictTrigger: "Ketidakadilan, orang yang kerja asal-asalan, teman yang tidak disiplin, atau aturan yang tiba-tiba diubah tanpa alasan jelas.",
    conflictStress: "Anda akan mengambil alih kendali, memperketat aturan, dan cenderung memotong pembicaraan orang lain yang dianggap hanya alasan.",
    conflictSolution: [
      "Sampaikan fakta dari masalah tersebut tanpa melabeli atau menyerang karakter orangnya.",
      "Jelaskan dampaknya (misalnya: 'Kalau begini, waktu kita jadi terbuang...').",
      "Berikan solusi langsung: 1 tindakan jelas, siapa yang mengerjakan, dan kapan harus selesai."
    ],
    recommendations: [
      "Hari 1–3 (Pilah Prioritas): Pisahkan mana tugas yang 'Wajib Selesai' dan mana yang 'Bagus Kalau Selesai'. Kerjakan yang wajib dulu.",
      "Hari 4–6 (Latihan Memuji): Gunakan pola ini saat mengkritik teman: Beri 1 pujian → Beri koreksi → Beri semangat.",
      "Hari 7–10 (Belajar Percaya): Berikan 1 tugas kepada teman/anggota keluarga. Jelaskan hasil yang Anda mau, tapi biarkan mereka mengerjakannya dengan cara mereka sendiri.",
      "Hari 11–14 (Waktu Jeda): Buat 'Jam Tenang' 30 menit setiap hari tanpa menyentuh pekerjaan atau layar HP."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan tetap menjadi sosok yang tegas dan menghasilkan karya berkualitas, namun Anda akan lebih cepat selesai, lebih jarang berdebat, dan energi mental Anda jauh lebih stabil.",
    checklist: [
      "Bulan 1: Tentukan 3 target utama yang paling penting untuk kehidupan/pendidikan Anda saat ini.",
      "Bulan 1: Buat daftar periksa (checklist) sederhana agar Anda tidak perlu mengingat semuanya.",
      "Bulan 2: Belajar percaya pada orang lain dengan mendelegasikan 1 tugas rutin kepada teman atau saudara.",
      "Bulan 2: Berlatih memimpin rapat/diskusi yang lebih ramah dengan menyisipkan sedikit senyum dan apresiasi.",
      "Bulan 3: Evaluasi beban kerja Anda: apa 20% tugas yang sebenarnya bisa Anda kurangi agar tidak terlalu stres?",
      "Bulan 3: Rapikan kembali waktu tidur dan istirahat yang sering terkorbankan."
    ],
    suitableCareers: [
      "Manajer Operasional atau Pengawas Kualitas (QA/QC)",
      "Auditor, Akuntan, atau Analis Risiko",
      "Pemimpin Proyek atau Ketua Organisasi",
      "Konsultan Sistem dan Perbaikan",
      "Pekerjaan yang menuntut ketertiban, logika, dan penyelesaian masalah"
    ]
  },
  "M-P": {
    title: "Melankolis–Plegmatis (Pemikir yang Tenang)",
    summary: "Anda adalah pribadi yang tenang, teliti, dan cenderung memproses segala sesuatu dengan sangat mendalam. Anda bukan tipe orang yang mencari panggung atau sorotan; Anda lebih suka memastikan semuanya berjalan aman, rapi, dan tidak ada yang tersakiti. Di lingkungan Anda, Anda adalah 'penjaga' yang konsisten, penganalisa yang matang, dan sangat menyukai kedamaian.",
    decisionStyle: [
      "Selalu memikirkan risiko dan dampak panjang sebelum bertindak.",
      "Sangat butuh waktu dan data yang cukup untuk merasa yakin.",
      "Sering terjebak dalam pemikiran 'Tunggu aku siap dulu ya', sampai akhirnya malah tidak jadi memulai."
    ],
    decisionGuide: [
      "Tentukan batas waktu untuk mengambil keputusan (misalnya: 'Besok pagi harus sudah ada jawaban').",
      "Pilih pilihan yang menurut Anda 'cukup aman' untuk saat ini.",
      "Jalankan langkah pertama yang paling kecil dan paling ringan.",
      "Evaluasi setelah berjalan (biasanya, setelah dicoba, rasa takut Anda akan hilang dengan sendirinya)."
    ],
    emotionalDynamics: [
      "Sangat perasa dan sensitif, tetapi Anda sangat jarang memperlihatkannya kepada orang lain.",
      "Sering memendam kekecewaan, lalu pelan-pelan menjauh dari orang yang menyakiti Anda tanpa berniat ribut.",
      "Kebiasaan 'Overthinking' (memikirkan hal secara berlebihan) sering muncul saat Anda kelelahan atau merasa kurang aman."
    ],
    stressSigns: [
      "Menunda-nunda hal kecil", 
      "Sulit fokus pada saat diajak bicara", 
      "Badan terasa sangat lelah tapi pikiran tidak bisa berhenti berputar", 
      "Mengurung diri dari keramaian"
    ],
    interactionStyle: [
      "Pendengar yang sangat kuat; orang lain merasa aman dan nyaman saat bercerita pada Anda.",
      "Cenderung menghindari keributan, bahkan sering diam saja meskipun sebenarnya Anda tidak setuju.",
      "Sering terlihat 'baik-baik saja' dari luar, padahal di dalam hati sedang memikirkan banyak beban."
    ],
    interactionTips: [
      "Beri aku waktu sebentar untuk memikirkan hal ini ya, nanti aku kabari lagi.",
      "Aku kurang nyaman sama pilihan itu. Menurutku lebih baik begini karena..."
    ],
    challenges: [
      "Sering menunda pekerjaan karena terlalu lama mempertimbangkan banyak hal",
      "Sangat sulit menyampaikan kebutuhan diri sendiri atau rasa tidak setuju",
      "Mudah kehabisan energi mental karena terlalu banyak overthinking",
      "Terlalu sering mengalah yang akhirnya membuat diri sendiri kecewa"
    ],
    conflictTrigger: "Perubahan rencana yang serba mendadak, suasana yang kasar, pertengkaran terbuka, atau waktu (deadline) yang terlalu mepet.",
    conflictStress: "Anda akan memilih untuk diam, menghindar, mencari tempat sepi, dan menumpuk semua beban tersebut di kepala Anda sendiri.",
    conflictSolution: [
      "Jangan langsung menghindar, bicaralah berdua saja di tempat yang tenang (bukan di depan banyak orang).",
      "Sampaikan 1 hal yang paling mengganjal di hati Anda (jangan bahas semua masalah sekaligus).",
      "Buatlah kesepakatan kecil yang jelas dan realistis agar Anda kembali merasa aman."
    ],
    recommendations: [
      "Hari 1–3 (Anti Menunda): Ambil 1 tugas yang paling sering Anda tunda, lalu pecah menjadi langkah kecil. Kerjakan 10 menit saja hari ini.",
      "Hari 4–6 (Latihan Bersuara): Ucapkan 1 pilihan Anda tiap hari (misalnya: 'Hari ini aku mau makan ini', jangan jawab 'Terserah').",
      "Hari 7–10 (Kelola Pikiran): Saat overthinking, tuliskan di kertas: Mana yang 'Fakta' dan mana yang cuma 'Ketakutan di kepala saya'.",
      "Hari 11–14 (Batas Lembut): Sampaikan 1 batasan Anda kepada teman (misalnya: 'Maaf ya, aku kalau malam sudah tidak buka tugas')."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan lebih berani untuk memulai sesuatu, lebih jelas dalam menyuarakan keinginan, dan tidak lagi mudah terkuras oleh pikiran yang berputar-putar.",
    checklist: [
      "Bulan 1: Bangun kebiasaan harian yang stabil (waktu tidur yang cukup, bergerak santai, dan fokus tugas 30 menit).",
      "Bulan 1: Latih otot keputusan cepat untuk hal-hal sepele (maksimal 1 menit untuk memilih).",
      "Bulan 2: Sampaikan 1 hal yang Anda butuhkan kepada orang terdekat Anda setiap minggu.",
      "Bulan 2: Ambil 1 proyek/tugas kelompok dan tantang diri Anda untuk menyelesaikannya tepat waktu tanpa menunggu 'sempurna'.",
      "Bulan 3: Belajar trik komunikasi: 'Menolak atau tidak setuju dengan wajah tersenyum dan nada sopan'.",
      "Bulan 3: Amati apa saja yang memicu Anda overthinking, dan kurangi hal tersebut (misal: kurangi main media sosial di malam hari)."
    ],
    suitableCareers: [
      "Analis (Data/Bisnis/Sistem) atau Peneliti",
      "Admin, Keuangan, atau Editor",
      "Penulis atau Pembuat Dokumentasi",
      "Layanan Pelanggan tingkat lanjut (yang butuh penyelesaian masalah)",
      "Pekerjaan yang butuh ketelitian tinggi dan ketenangan"
    ]
  },
  "K-S": {
    title: "Koleris–Sanguinis (Penggerak yang Karismatik)",
    summary: "Anda adalah sosok penggerak sejati: berani, bertindak cepat, tegas, namun juga memiliki energi sosial yang sangat kuat dan ceria. Anda sangat nyaman saat diminta memimpin kelompok, merancang target, dan menyemangati teman-teman untuk bergerak. Di mana ada Anda, di situ ada momentum. Saat orang lain masih ragu-ragu, Anda adalah orang pertama yang berani melangkah maju.",
    decisionStyle: [
      "Sangat fokus pada hasil: 'Tujuannya apa? Kapan harus selesai?'.",
      "Suka mencari jalan paling efisien dan cepat.",
      "Sangat tidak sabar menghadapi proses yang lambat atau orang yang terlalu banyak berteori tanpa tindakan."
    ],
    decisionGuide: [
      "Tetapkan target yang sangat jelas (kondisi atau angkanya harus pasti).",
      "Pilih cara yang paling cepat memberikan dampak terbesar.",
      "Langsung jalankan langkah pertama.",
      "Lakukan pengecekan rutin (evaluasi) untuk memastikan tidak ada yang terlewat."
    ],
    emotionalDynamics: [
      "Mudah merasa gemas atau frustrasi saat menghadapi teman/orang yang lambat atau tidak kompeten.",
      "Sangat gengsi untuk terlihat lemah, sehingga Anda jarang mau menunjukkan rasa capek atau sedih.",
      "Terkadang bisa merasa menyesal setelah marah atau berbicara terlalu keras kepada orang lain."
    ],
    stressSigns: [
      "Sering memotong pembicaraan orang", 
      "Nada suara otomatis meninggi", 
      "Mulai mengambil keputusan dengan nekat", 
      "Terlihat terburu-buru dan tidak sabaran"
    ],
    interactionStyle: [
      "Punya karisma yang kuat dan mudah mendominasi ruang obrolan.",
      "Sangat jago membuat orang lain 'terbawa suasana' dan mengikuti ide Anda.",
      "Akan jauh lebih disukai jika Anda mau memberikan sedikit ruang agar orang lain juga merasa idenya didengar."
    ],
    interactionTips: [
      "Aku pengen denger masukan kalian dulu nih, sebelum kita putusin bareng-bareng.",
      "Menurut kamu, kira-kira ada risiko apa yang mungkin kita lewatin?"
    ],
    challenges: [
      "Terlalu mendominasi sehingga sering lupa mendengarkan ide dari orang lain",
      "Kadang mengorbankan perasaan teman demi mencapai target yang diinginkan",
      "Sering melewatkan hal-hal kecil dan detail penting",
      "Cepat marah (meskipun sebenarnya Anda juga sangat cepat memaafkan/lupa)"
    ],
    conflictTrigger: "Orang yang lamban, kerja yang bertele-tele, teman yang banyak alasan, atau orang yang tidak mau bertanggung jawab.",
    conflictStress: "Anda akan mempercepat segalanya dengan memberikan tekanan keras. Akibatnya, sebagian orang mungkin menjadi takut dan justru menutup diri dari Anda.",
    conflictSolution: [
      "Turunkan volume suara Anda. Anda tetap bisa tegas, tapi gunakan nada yang lebih tenang.",
      "Pastikan lawan bicara mengulang kesepakatan agar Anda tahu mereka benar-benar paham.",
      "Tutup obrolan dengan langkah nyata dan batas waktu yang disepakati."
    ],
    recommendations: [
      "Hari 1–3 (Latihan Mendengar): Cobalah ajukan minimal 2 pertanyaan kepada teman/kelompok sebelum Anda memberikan pendapat Anda sendiri.",
      "Hari 4–6 (Jeda Emosi): Saat merasa emosi mulai naik, tarik napas 10 detik dan biasakan berkata, 'Sebentar, aku pikir-pikir dulu ya'.",
      "Hari 7–10 (Amankan Detail): Karena Anda tidak suka detail, tugaskan satu teman di kelompok untuk jadi 'si pengingat detail', atau buat daftar cek (checklist).",
      "Hari 11–14 (Sentuhan Personal): Lakukan obrolan berdua saja dengan teman. Fokuslah menanyakan kabar mereka, bukan soal tugas/pekerjaan."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan tetap menjadi sosok yang cepat dan kuat, tetapi Anda akan jauh lebih dihargai, keributan akan berkurang, dan kekompakan teman-teman Anda akan semakin stabil.",
    checklist: [
      "Bulan 1: Tentukan 1 target besar yang ingin Anda capai, dan fokuskan energi ke sana.",
      "Bulan 1: Biasakan melakukan ulasan (review) mingguan selama 15 menit agar tidak ada langkah yang melenceng.",
      "Bulan 2: Belajar mendelegasikan tugas: bagikan peran sesuai kelebihan teman-teman Anda.",
      "Bulan 2: Latih komunikasi 'Tegas tapi Hangat' (Puji dulu usaha mereka, baru berikan koreksi/kritik).",
      "Bulan 3: Audit emosi Anda: Sadari apa yang sering membuat Anda marah, dan belajarlah tersenyum saat itu terjadi.",
      "Bulan 3: Mulai percayai sistem. Biarkan kelompok Anda berjalan mandiri sesekali, jangan atur semuanya sendiri."
    ],
    suitableCareers: [
      "Pengusaha atau Pendiri Bisnis (Founder)",
      "Pemimpin Tim, Ketua Organisasi, atau Manajer",
      "Pemasaran, Negosiator, atau Hubungan Masyarakat",
      "Pembicara Publik atau Pelatih (Trainer)",
      "Pekerjaan yang butuh target, kompetisi, dan tampil di depan"
    ]
  },
  "K-M": {
    title: "Koleris–Melankolis (Pemimpin yang Disiplin)",
    summary: "Anda adalah gabungan yang sangat tangguh: bekerja dengan cepat, tegas, sangat rapi, dan terukur. Anda sangat nyaman jika harus memimpin, menetapkan standar tugas, dan memastikan semuanya berjalan sesuai rencana. Anda adalah sosok yang dicari saat sebuah kelompok membutuhkan ketertiban, kedisiplinan, dan hasil karya yang berkualitas tinggi.",
    decisionStyle: [
      "Sangat terstruktur: Punya Target → Buat Rencana → Susun Langkah-langkah.",
      "Sangat menyukai indikator keberhasilan, aturan main, dan kerapian data.",
      "Cenderung tidak sabar melihat orang yang suka 'asal jalan' tanpa memikirkan rencana matang."
    ],
    decisionGuide: [
      "Tetapkan hasil akhir dan standar minimalnya dengan sangat jelas di awal.",
      "Tentukan batas toleransi (bagian mana yang boleh fleksibel, mana yang wajib sama).",
      "Putuskan 1 cara yang menurut Anda paling baik dan jalankan.",
      "Pantau kemajuannya melalui hasil kerja (data), bukan dengan terus-terusan mengawasi orangnya."
    ],
    emotionalDynamics: [
      "Merasa sangat tenang dan damai jika semuanya berjalan sesuai rencana dan terukur.",
      "Sangat mudah kesal jika melihat teman mengulang kesalahan yang sama atau tidak disiplin.",
      "Bisa menahan stres dan kekesalan dalam waktu lama, lalu tiba-tiba meledak menjadi sangat keras."
    ],
    stressSigns: [
      "Mulai mengontrol semua hal secara berlebihan", 
      "Komentar dan kritikan menjadi semakin tajam", 
      "Menjadi sangat sulit untuk percaya pada kemampuan teman/kelompok",
      "Mengerjakan semuanya sendiri"
    ],
    interactionStyle: [
      "Bicara dengan sangat jelas, tegas, dan berfokus pada efisiensi waktu.",
      "Pintar memberi arahan sehingga orang selalu tahu apa yang harus mereka kerjakan.",
      "Perlu memperbanyak memberikan pujian/apresiasi agar teman-teman tidak merasa 'selalu salah' di mata Anda."
    ],
    interactionTips: [
      "Ini standar minimalnya ya. Kamu bebas mau pakai cara apa, yang penting hasilnya sesuai kesepakatan.",
      "Aku mengoreksi bagian ini supaya nilainya bagus, bukan bermaksud menyalahkan kamu ya."
    ],
    challenges: [
      "Suka mengatur hal-hal kecil (Micromanage) yang membuat orang lain merasa terkekang",
      "Terkadang terlalu kaku pada aturan yang ada",
      "Memberikan kritik yang terlalu tajam",
      "Kurang memberikan ruang dan waktu bagi orang lain untuk belajar dari kesalahan"
    ],
    conflictTrigger: "Ketidakjelasan tugas, ketidakdisiplinan, orang yang mengulang kesalahan yang sama, atau orang yang suka membela diri dengan alasan dibuat-buat.",
    conflictStress: "Anda akan semakin mengatur detail terkecil, menjadi lebih kaku, dan membuat anggota kelompok lainnya malah menjadi diam/pasif ketakutan.",
    conflictSolution: [
      "Fokus pada masalahnya, jangan menyerang karakter orangnya.",
      "Gunakan pertanyaan memancing solusi: 'Kira-kira apa penyebab kita gagal di sini?' dibanding 'Siapa yang salah?'.",
      "Buat perbaikan rencana dan beri mereka sedikit bimbingan."
    ],
    recommendations: [
      "Hari 1–3: Kurangi kebiasaan terlalu mengatur. Mulailah cek 'Hasil akhirnya', bukan memarahi 'Cara mereka mengerjakannya'.",
      "Hari 4–6: Buat daftar tugas yang sangat ringkas (1 halaman saja) untuk kelompok Anda agar mereka mudah paham.",
      "Hari 7–10: Wajibkan diri Anda untuk memberikan 1 pujian spesifik kepada teman/saudara setiap harinya.",
      "Hari 11–14: Saat ada yang berbuat salah, jangan langsung marah. Jadikan itu momen untuk memperbaiki sistem kerja kelompok."
    ],
    direction: "Dalam 2–4 minggu ke depan, teman atau kelompok Anda akan menjadi lebih mandiri, pekerjaan akan lebih rapi, dan Anda tidak perlu merasa kelelahan karena harus mengontrol semuanya sendirian.",
    checklist: [
      "Bulan 1: Tentukan 3 indikator keberhasilan (target) paling sederhana untuk tugas/kehidupan Anda saat ini.",
      "Bulan 1: Catat cara atau langkah kerja yang sering Anda lakukan agar bisa diikuti orang lain dengan mudah.",
      "Bulan 2: Latihan membagi tugas. Ajari 1 orang teman agar bisa menjadi penanggung jawab tugas tersebut.",
      "Bulan 2: Rapikan gaya berdiskusi Anda: Buat agenda yang jelas agar obrolan tidak melenceng ke mana-mana.",
      "Bulan 3: Evaluasi beban pikiran Anda. Coba lepaskan 20% hal yang tidak perlu Anda urusi.",
      "Bulan 3: Kurangi standar kesempurnaan pada hal-hal kecil yang dampaknya tidak terlalu besar."
    ],
    suitableCareers: [
      "Manajer Operasional atau Pembuat Sistem",
      "Auditor, Pengawas Kualitas (QC), atau Ahli Risiko",
      "Pemimpin Tim Teknis atau Kepala Proyek",
      "Konsultan Manajemen Terpadu",
      "Pekerjaan yang menuntut keteraturan, analisa, dan kepemimpinan"
    ]
  },
  "K-P": {
    title: "Koleris–Plegmatis (Pemimpin yang Tenang)",
    summary: "Anda adalah sosok pengambil keputusan yang tegas namun sangat stabil. Anda tidak menyukai drama, tidak mudah panik, dan selalu bisa berpikir jernih saat orang lain kebingungan. Dari luar, Anda tampak santai dan diam, tetapi di dalam, Anda sangat fokus pada penyelesaian tugas. Kombinasi ini membuat Anda sering dijadikan 'pilar sandaran' yang kuat oleh teman-teman maupun keluarga.",
    decisionStyle: [
      "Sangat praktis: selalu fokus pada 'apa yang benar-benar bisa dijalankan'.",
      "Tidak suka banyak berteori, berdebat panjang, atau rapat yang tidak ada isinya.",
      "Bisa mengambil keputusan besar di dalam kepala tanpa banyak bicara, lalu langsung bertindak."
    ],
    decisionGuide: [
      "Sampaikan secara terbuka apa tujuan Anda dan apa hambatannya (waktu/uang).",
      "Ambil keputusan yang paling masuk akal dan realistis untuk situasi saat itu.",
      "Beri tahu orang lain alasan Anda secara singkat, lalu bagikan siapa mengerjakan apa."
    ],
    emotionalDynamics: [
      "Sangat jarang menunjukkan wajah stres; Anda lebih memilih memikul beban pikiran itu sendirian.",
      "Bisa terlihat sangat 'dingin' atau cuek, padahal sebenarnya Anda sangat peduli pada keluarga/tim.",
      "Jika beban sudah terlalu menumpuk, biasanya tubuh Anda yang akan memberikan sinyal (seperti jatuh sakit) sebelum Anda mengeluh."
    ],
    stressSigns: [
      "Diam berhari-hari", 
      "Menjawab pertanyaan dengan sangat singkat, ketus, dan kaku", 
      "Mengambil keputusan besar secara mendadak tanpa diskusi"
    ],
    interactionStyle: [
      "Orang merasa sangat aman di dekat Anda karena sifat Anda yang stabil dan tegas.",
      "Tidak mudah terpancing emosi, sehingga sangat cocok menengahi situasi yang sedang memanas.",
      "Namun, Anda harus belajar untuk lebih sering mengekspresikan senyum dan pujian agar tidak dianggap kaku."
    ],
    interactionTips: [
      "Harapanku untuk tugas ini begini ya, biar nanti kita nggak salah arah dan kerja dua kali.",
      "Terima kasih banyak ya, bantuan kamu di bagian tadi benar-benar bikin urusan cepat selesai."
    ],
    challenges: [
      "Sering dianggap kurang ramah, dingin, atau tidak punya empati",
      "Sering menahan atau mendiamkan masalah terlalu lama sampai menumpuk",
      "Kurang banyak mengomunikasikan isi kepala Anda, sehingga teman/tim sering bingung arahnya ke mana",
      "Sangat gengsi untuk meminta bantuan (lebih suka capek sendirian)"
    ],
    conflictTrigger: "Drama yang berlebihan, orang yang banyak omong tapi tidak ada kerja nyata, perdebatan berlarut-larut, dan sikap malas.",
    conflictStress: "Anda akan memilih menarik diri, memotong pembicaraan orang dengan tajam, atau langsung memutuskan sepihak tanpa peduli yang lain.",
    conflictSolution: [
      "Bicarakan faktanya dan apa harapan Anda dengan sangat singkat dan jelas.",
      "Ajak orang tersebut bicara empat mata, jangan menegurnya di depan orang banyak.",
      "Sepakati aturan mainnya, dan pastikan mereka benar-benar paham langkah selanjutnya."
    ],
    recommendations: [
      "Hari 1–3: Belajarlah transparan. Jika ada rencana, tulis 1 kalimat tujuan agar teman Anda tahu apa isi kepala Anda.",
      "Hari 4–6: Mulailah memberi apresiasi. Paksakan diri untuk memuji usaha kecil teman/keluarga setiap hari.",
      "Hari 7–10: Cari 1 masalah kecil yang selama ini Anda diamkan, lalu selesaikan lewat obrolan 10 menit hari ini.",
      "Hari 11–14: Paksakan diri meminta tolong pada orang lain. Ucapkan jujur jika Anda sedang lelah."
    ],
    direction: "Dalam 2–4 minggu ke depan, jalan pikiran Anda akan lebih mudah dipahami orang lain, masalah tidak lagi menumpuk, dan beban mental Anda jauh lebih ringan karena Anda sudah mau berbagi tugas.",
    checklist: [
      "Bulan 1: Buat aturan komunikasi yang jelas untuk diri sendiri: biasakan menjelaskan 'Tujuan' sebelum memberi tugas.",
      "Bulan 1: Buat rutinitas obrolan santai 10 menit dengan kelompok/keluarga setiap minggu untuk menyamakan frekuensi.",
      "Bulan 2: Identifikasi 1 masalah atau kesalahpahaman yang sering terulang, lalu cari solusinya segera.",
      "Bulan 2: Lepaskan 20% pekerjaan yang sebenarnya bukan tanggung jawab Anda. Mintalah orang lain mengerjakannya.",
      "Bulan 3: Latih senyum dan apresiasi: usahakan memberikan 3 pujian spesifik per minggu kepada teman.",
      "Bulan 3: Evaluasi jam kerja dan istirahat Anda. Ingat, Anda bukan robot yang tidak bisa lelah."
    ],
    suitableCareers: [
      "Manajer Lapangan atau Pengawas Produksi",
      "Pembuat Strategi, Penasihat, atau Perencana",
      "Pemimpin Keamanan, Safety Lead, atau Manajer Krisis",
      "Pekerjaan Operasional yang membutuhkan kestabilan mental",
      "Pemilik Usaha yang fokus pada hasil nyata"
    ]
  },
  "P-S": {
    title: "Plegmatis–Sanguinis (Sahabat yang Ramah)",
    summary: "Anda adalah sosok pribadi yang sangat hangat, santai, ceria, dan selalu membuat suasana terasa menyenangkan. Anda paling tidak suka melihat orang bertengkar dan pandai mencairkan suasana. Kelebihan terbesar Anda ada pada kebaikan hati dan kemampuan bersosialisasi yang membuat semua orang merasa memiliki 'teman sejati'.",
    decisionStyle: [
      "Cenderung selalu memilih opsi yang paling aman dan tidak memicu perdebatan.",
      "Sering menunda mengambil keputusan karena takut pilihan Anda membuat orang lain kecewa.",
      "Membutuhkan teman yang bisa memandu, jika tidak Anda mudah terbawa arus orang banyak."
    ],
    decisionGuide: [
      "Setiap pagi, tentukan 1 tugas yang paling penting untuk diri ANDA sendiri.",
      "Biasakan memutuskan hal-hal kecil (seperti menu makan) dengan cepat, maksimal 3 menit.",
      "Untuk masalah besar, buat batasan waktu. Pilih opsi yang paling menenangkan pikiran Anda."
    ],
    emotionalDynamics: [
      "Stabil dan murah senyum, namun bisa merasa sangat terkuras jika orang terus-menerus memanfaatkan kebaikan Anda.",
      "Sering bilang 'Oh, tidak apa-apa', padahal di dalam hati sebenarnya Anda merasa kurang nyaman.",
      "Mudah kelelahan jika seharian berada di lingkungan yang terlalu berisik dan banyak tuntutan."
    ],
    stressSigns: [
      "Sengaja menghindari buka HP, chat, atau telepon dari orang", 
      "Menunda-nunda pekerjaan sampai benar-benar mepet", 
      "Merasa 'ingin kabur' ke tempat sepi atau banyak tidur"
    ],
    interactionStyle: [
      "Sangat ramah, mudah beradaptasi, dan tidak suka menghakimi orang lain.",
      "Suasana yang tegang bisa langsung mencair jika Anda datang membawa senyuman.",
      "Anda perlu sekali melatih ketegasan agar kebaikan Anda tidak dijadikan alat untuk menginjak Anda."
    ],
    interactionTips: [
      "Aku bisa aja sih bantu kamu, tapi aku baru ada waktu luang nanti sore ya.",
      "Wah, aku belum bisa janji ikut. Nanti aku kabarin lagi ya kalau jadwalku aman."
    ],
    challenges: [
      "Sangat sulit untuk berkata 'Tidak' pada permintaan teman",
      "Mudah ikut-ikutan tren atau pilihan orang lain sampai melupakan keinginan diri sendiri",
      "Menunda-nunda pekerjaan (Prokrastinasi) karena terlalu santai",
      "Tidak berani menyuarakan kebutuhan atau rasa sakit hati Anda"
    ],
    conflictTrigger: "Pertengkaran terbuka, ditekan untuk serba cepat, suasana drama, dan dipaksa memilih belah pihak.",
    conflictStress: "Anda akan diam, menghindar, mencari banyak alasan, atau merespons dengan sikap pasif-agresif (sengaja menunda/pura-pura lupa).",
    conflictSolution: [
      "Gunakan batasan waktu yang jelas, misalnya: 'Maaf ya, tugasku yang ini harus selesai jam 2'.",
      "Bicarakan masalahnya berdua saja sambil duduk santai.",
      "Sepakati jalan keluar kecil yang paling mudah dijalankan bersama hari itu juga."
    ],
    recommendations: [
      "Hari 1–3: Latihlah cara menolak dengan halus. Coba katakan, 'Maaf ya, kali ini aku belum bisa gabung'.",
      "Hari 4–6: Tuliskan 3 hal yang murni ingin Anda capai (bukan impian orang tua/teman) untuk bulan ini.",
      "Hari 7–10: Setiap pagi, tulis 3 tugas saja. Fokus selesaikan itu tanpa terganggu ajakan main.",
      "Hari 11–14: Beranikan diri menyampaikan 1 hal yang membuat Anda kurang nyaman kepada teman terdekat."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan tetap menjadi sosok yang hangat dan disukai, namun Anda akan lebih dihormati karena berani tegas dan tidak lagi gampang dimanfaatkan orang.",
    checklist: [
      "Bulan 1: Latih otot ketegasan. Praktikkan menolak permintaan ringan minimal 2 kali seminggu.",
      "Bulan 1: Cobalah rutinitas 'Fokus 3 Tugas Sehari' selama dua minggu berturut-turut.",
      "Bulan 2: Pilih 1 hobi, tugas, atau kursus pendek, dan komitmen selesaikan sampai akhir tanpa putus di tengah jalan.",
      "Bulan 2: Mulai biasakan berkomunikasi jujur: ungkapkan perasaan Anda jika ada teman yang bicaranya menyakitkan.",
      "Bulan 3: Audit lingkaran pertemanan: Siapa yang selalu menyedot energi Anda? Mulai batasi interaksi dengan mereka.",
      "Bulan 3: Evaluasi tujuan hidup Anda. Pastikan langkah yang Anda ambil adalah untuk kebahagiaan Anda sendiri."
    ],
    suitableCareers: [
      "Layanan Pelanggan (Customer Service) atau Pekerja Perhotelan",
      "Penasihat, Konselor Remaja, atau Pengurus Komunitas",
      "Staf Administrasi yang membutuhkan koordinasi ramah",
      "Pekerjaan Event Organizer atau Pendukung Acara",
      "Peran yang berpusat pada kepedulian dan melayani orang lain"
    ]
  },
  "P-M": {
    title: "Plegmatis–Melankolis (Penjaga yang Setia)",
    summary: "Anda adalah sosok yang sangat lembut, setia, dan punya kepekaan yang luar biasa terhadap perasaan orang lain. Anda sangat menyukai ketenangan, suasana yang stabil, dan persahabatan yang tulus. Dalam lingkungan mana pun, Anda sering menjadi 'penjaga yang tak terlihat': Anda selalu ada untuk mendukung, merawat, dan sangat jarang banyak menuntut.",
    decisionStyle: [
      "Selalu memikirkan perasaan orang lain: 'Apakah keputusanku ini akan menyakiti hatinya?'.",
      "Sering menunda keputusan penting agar tidak salah langkah dan membuat orang kecewa.",
      "Membutuhkan dorongan semangat untuk berani memutuskan sesuatu sebelum merasa '100% yakin'."
    ],
    decisionGuide: [
      "Tanyakan pada diri sendiri: 'Apa yang sebenarnya AKU butuhkan?', jangan cuma memikirkan orang lain.",
      "Pilih pilihan yang paling sesuai dengan prinsip dan hati nurani Anda.",
      "Sampaikan keputusan Anda dengan bahasa yang lembut tapi jelas maknanya."
    ],
    emotionalDynamics: [
      "Sering memendam rasa sedih atau kecewa sendirian karena tidak ingin memicu pertengkaran.",
      "Sangat mudah merasa bersalah (bahkan sering meminta maaf untuk hal yang bukan salah Anda).",
      "Jika Anda sudah memendam luka terlalu lama, Anda bisa tiba-tiba 'hilang' atau menjauhi orang tersebut secara perlahan."
    ],
    stressSigns: [
      "Menarik diri dari obrolan sosial atau grup", 
      "Sangat mudah menangis atau merasa tersentuh", 
      "Mengurung diri di kamar terlalu lama",
      "Mulai memikirkan kenangan buruk masa lalu"
    ],
    interactionStyle: [
      "Sangat setia, penyabar, dan punya niat yang tulus.",
      "Orang merasa sangat nyaman di dekat Anda karena Anda jarang marah dan tidak meledak-ledak.",
      "Sangat perlu melatih keberanian untuk mengungkapkan rasa tidak setuju sejak awal."
    ],
    interactionTips: [
      "Aku sangat menghargai niat baikmu, tapi aku kurang nyaman kalau caranya begini.",
      "Biar aku bisa bantu kamu dengan maksimal, aku butuh waktu istirahat juga ya."
    ],
    challenges: [
      "Sering merasa rendah diri atau merasa 'tidak cukup pintar/hebat' dibanding orang lain",
      "Kebiasaan memendam masalah sampai hati hancur, lalu menjauh",
      "Sulit bersikap tegas karena terlalu takut dibenci atau dimusuhi",
      "Terlalu banyak berpikir berlebihan (Overthinking) dan menyalahkan diri sendiri"
    ],
    conflictTrigger: "Kritikan yang tajam dan kasar, bentakan, merasa diabaikan, atau lingkungan yang penuh tekanan dan persaingan ketat.",
    conflictStress: "Anda akan memilih untuk diam, menghindar sejauh mungkin, dan menangis atau memproses masalah tersebut sendirian dalam waktu yang lama.",
    conflictSolution: [
      "Ambil waktu untuk menyendiri sejenak, katakan: 'Aku butuh waktu tenang, nanti malam kita bahas ya'.",
      "Gunakan rumus curhat: Sampaikan 1 inti masalah + apa yang Anda rasakan + apa yang Anda butuhkan.",
      "Buat satu kesepakatan kecil dengan teman agar kejadian serupa tidak terulang dan hati kembali aman."
    ],
    recommendations: [
      "Hari 1–3 (Sadari Nilai Anda): Tulis 5 hal kecil yang membuat Anda merasa berharga dan bahagia. Lakukan salah satunya.",
      "Hari 4–6 (Latihan Memilih): Paksakan diri untuk memilih 1 hal setiap hari (misal: 'Hari ini aku mau baju warna ini').",
      "Hari 7–10 (Hentikan Rasa Bersalah): Jika ada masalah, tulis di kertas: Mana yang 'Kesalahan Saya' dan mana yang 'Bukan Kendali Saya'.",
      "Hari 11–14 (Batasan Tegas): Sampaikan 1 batasan nyata kepada teman (misal: 'Tolong jangan chat urusan tugas di atas jam 9 malam ya')."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan tumbuh menjadi pribadi yang lebih berani bersuara, batin Anda akan jauh lebih tenang, dan orang-orang akan belajar lebih menghargai batas kesabaran Anda.",
    checklist: [
      "Bulan 1: Kenali diri Anda. Tulis 3 hal yang paling tidak Anda sukai, dan berjanjilah untuk menolak jika diminta.",
      "Bulan 1: Latih keberanian untuk memberitahu teman apa yang Anda inginkan minggu ini.",
      "Bulan 2: Jadwalkan 'Waktu Sendiri' (Me Time) yang berkualitas secara rutin, jangan dihabiskan untuk memikirkan masalah.",
      "Bulan 2: Selesaikan 1 kesalahpahaman kecil dengan seseorang melalui obrolan santai berdua.",
      "Bulan 3: Audit orang-orang di sekitar Anda: Siapa yang selalu menyalahkan Anda? Kurangi waktu dengan mereka.",
      "Bulan 3: Evaluasi diri: Catat setiap pujian atau keberhasilan kecil yang telah Anda lakukan agar rasa percaya diri tumbuh."
    ],
    suitableCareers: [
      "Administrasi, Editor, atau Penjaga Dokumen Penting",
      "Konselor, Pendamping Psikologi, atau Pekerja Sosial",
      "Layanan Pelanggan yang butuh tingkat empati dan kesabaran ekstra",
      "Keuangan, Back Office, atau Penata Data",
      "Pekerjaan yang memadukan analisa tenang dan melayani sesama"
    ]
  },
  "P-K": {
    title: "Plegmatis–Koleris (Pelaksana yang Tangguh)",
    summary: "Anda tampak tenang, murah senyum, dan santai dari luar, namun di dalam, Anda adalah sosok yang punya kemauan keras dan tahan banting. Anda tidak suka mencari ribut, tapi Anda juga tidak akan mundur jika prinsip Anda dilanggar. Anda sering menjadi tulang punggung dalam sebuah kelompok: stabil, konsisten, mandiri, dan sangat bisa diandalkan untuk membereskan pekerjaan diam-diam.",
    decisionStyle: [
      "Tidak suka terburu-buru; lebih suka memastikan semuanya aman, rasional, dan realistis.",
      "Lebih suka langsung bekerja (eksekusi) daripada terlalu banyak rapat atau berdebat kosong.",
      "Kadang menahan keputusan sampai dirasa 'buktinya sudah kuat', baru memberi keputusan final."
    ],
    decisionGuide: [
      "Hitung dengan jujur berapa banyak tenaga dan waktu luang yang Anda miliki saat ini.",
      "Berikan batas tegas: apa yang masih sanggup Anda bantu, dan apa yang sudah di luar batas.",
      "Sampaikan batasan tersebut lebih awal, jangan menunggu sampai Anda benar-benar kelelahan."
    ],
    emotionalDynamics: [
      "Sangat jarang terlihat marah, tetapi jika Anda marah, itu berarti Anda sudah menahan perasaan terlalu lama.",
      "Sering merasa sendirian karena orang mengira Anda 'bisa mengatasi segalanya', padahal Anda juga butuh bantuan.",
      "Saat sangat capek, Anda cenderung mendadak diam seribu bahasa dan menarik diri dari lingkungan."
    ],
    stressSigns: [
      "Sangat cepat lelah dan malas diajak berbicara", 
      "Menunda-nunda pekerjaan rumah atau tugas yang sebenarnya mudah", 
      "Ingin marah atau putus hubungan kerja secara tiba-tiba karena merasa jenuh"
    ],
    interactionStyle: [
      "Pembawaan stabil, tidak mudah panik, dan selalu bisa dipercaya.",
      "Orang merasa sangat aman menitipkan tugas berat kepada Anda karena tahu pasti akan selesai.",
      "Anda harus banyak berlatih untuk berani meminta bantuan tanpa merasa menjadi beban bagi orang lain."
    ],
    interactionTips: [
      "Aku bisa mengerjakan bagian yang ini, tapi sisanya aku butuh bantuan dari kalian ya.",
      "Supaya hasilnya maksimal, aku butuh waktu tambahan sampai besok sore."
    ],
    challenges: [
      "Terlalu sering memikul beban sendirian karena merasa sungkan untuk menolak atau minta tolong",
      "Baru mau bicara atau protes saat diri sudah benar-benar kelelahan dan kehabisan kesabaran",
      "Sering dianggap terlalu pasif atau 'terserah', padahal di dalam hati sedang menahan pendapat",
      "Terkadang bisa meledak mengambil keputusan nekat saat sedang merasa stres berat"
    ],
    conflictTrigger: "Dipaksa dan disuruh-suruh terus menerus, aturan yang berubah dadakan, atau orang yang komunikasinya kasar dan tidak menghargai.",
    conflictStress: "Anda akan memilih diam menahan amarah, lalu secara tiba-tiba mengambil keputusan putus hubungan yang mengagetkan semua orang.",
    conflictSolution: [
      "Sampaikan secara jujur kapasitas Anda dengan angka yang jelas (misal: 'Aku cuma punya waktu 2 jam').",
      "Berikan mereka pilihan (A atau B) supaya masalah tetap ada jalan keluarnya.",
      "Jika mereka terus melanggar, berikan konsekuensi atau peringatan yang tegas secara perlahan."
    ],
    recommendations: [
      "Hari 1–3 (Ukur Kekuatan): Lihat jadwal Anda minggu ini. Beri tanda merah pada waktu istirahat, dan jangan biarkan orang mengganggu waktu itu.",
      "Hari 4–6 (Latihan Menolak): Beranikan diri menolak 1 ajakan atau tugas tambahan yang sebenarnya bukan tanggung jawab Anda.",
      "Hari 7–10 (Minta Tolong): Jangan jadi pahlawan super. Mintalah teman atau saudara untuk membantu 1 tugas kecil Anda hari ini.",
      "Hari 11–14 (Atur Syarat): Sampaikan 1 syarat cara komunikasi kepada teman (misalnya: 'Kalau butuh bantuan mendadak, telepon aja ya, jangan chat')."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan merasa bahu Anda lebih ringan, orang lain akan lebih sungkan dan menghormati Anda, dan Anda tidak lagi gampang stres karena kelelahan.",
    checklist: [
      "Bulan 1: Tetapkan batas jam kerja/belajar Anda. Jangan korbankan waktu tidur untuk tugas.",
      "Bulan 1: Kuatkan mental Anda untuk menolak minimal 2 pekerjaan yang bukan tanggung jawab Anda.",
      "Bulan 2: Belajar bekerja sama. Bagikan 1 tugas berat yang selama ini Anda pikul sendirian kepada teman sekelompok.",
      "Bulan 2: Buat daftar periksa (checklist) sederhana untuk rutinitas harian agar tidak ada yang menumpuk di akhir minggu.",
      "Bulan 3: Amati lingkungan Anda: Siapa yang selalu menghargai bantuan Anda, dan siapa yang hanya memanfaatkan? Buat jarak.",
      "Bulan 3: Latih kebiasaan baru: Jangan menunggu sampai stres untuk bercerita; bicarakan sedikit-sedikit setiap hari."
    ],
    suitableCareers: [
      "Manajer Operasional Harian atau Bagian Logistik",
      "Teknisi, Produksi, atau Pemeliharaan (Maintenance)",
      "Wakil Pemimpin (Second-in-Command) yang menjaga stabilitas tim",
      "Koordinator Lapangan",
      "Pekerjaan yang membutuhkan ketegasan dan konsistensi tinggi tanpa banyak drama"
    ]
  },
  "S-S": {
    title: "Sanguinis Murni (Si Bintang Panggung Sejati)",
    summary: "Anda adalah definisi nyata dari energi, tawa, dan antusiasme! Kehadiran Anda di mana pun selalu berhasil menghidupkan suasana dan mengubah hari yang sepi menjadi meriah. Anda sangat ekspresif, spontan, dan seolah memiliki daya tarik alami yang membuat banyak orang ingin berteman dengan Anda. Bagi Anda, hidup ini terlalu singkat jika tidak dinikmati seperti sebuah perayaan.",
    decisionStyle: [
      "Sangat impulsif; sering mengambil keputusan spontan berdasarkan 'mood' atau perasaan saat itu juga.",
      "Terlalu optimis bahwa semua hal akan berjalan baik, sehingga sering mengabaikan risiko di masa depan.",
      "Sangat cepat dalam memutuskan sesuatu, tapi sayangnya juga sangat cepat untuk berubah pikiran keesokan harinya."
    ],
    decisionGuide: [
      "Tarik napas dalam-dalam. Beri waktu 1 jam sebelum mengiyakan sebuah ajakan atau membeli barang mahal.",
      "Tanyakan pada teman dekat yang lebih logis, 'Kira-kira rencanaku ini masuk akal nggak ya?'.",
      "Tuliskan rencana keputusan Anda, karena seringkali setelah ditulis, Anda akan sadar bahwa ide tersebut terlalu berlebihan."
    ],
    emotionalDynamics: [
      "Emosi Anda seperti wahana roller coaster: bisa sangat gembira, lalu sangat sedih, dan kembali tertawa dalam hitungan menit.",
      "Sulit untuk menyimpan dendam terlalu lama; Anda cepat marah, tapi hitungan menit kemudian sudah lupa alasannya.",
      "Sangat bergantung pada perhatian, dukungan, dan pengakuan positif (validasi) dari lingkaran sosial Anda."
    ],
    stressSigns: [
      "Bicara tanpa jeda dan nadanya makin kencang", 
      "Terlihat gelisah dan mondar-mandir", 
      "Sering memotong omongan orang", 
      "Berbelanja atau jajan makanan secara berlebihan untuk pelarian"
    ],
    interactionStyle: [
      "Paling suka memegang kendali percakapan dan menceritakan pengalaman seru dengan sangat heboh.",
      "Sangat hangat secara fisik dan emosional (suka merangkul, menepuk pundak, mudah tersenyum lebar).",
      "Sering tanpa sadar mendominasi obrolan sehingga lupa memberikan waktu bagi orang lain untuk ikut bercerita."
    ],
    interactionTips: [
      "Wah, ceritaku kepanjangan ya? Maaf, sekarang gantian deh, kamu gimana kabarnya?",
      "Aku bakal dengerin cerita kamu dulu sampai selesai, baru nanti aku kasih komentarku."
    ],
    challenges: [
      "Sangat tidak terorganisir (kamar, meja belajar, atau jadwal harian sering berantakan)",
      "Penyakit lupa kronis; sering lupa akan janji, barang bawaan, atau detail tugas penting",
      "Sering berbicara spontan tanpa dipikir panjang, yang kadang membuat orang perasa menjadi tersinggung",
      "Semangat memulai 100 hal baru, tapi sangat sulit menyelesaikan walau hanya 1 hal sampai tuntas"
    ],
    conflictTrigger: "Dicuekin, ditinggal sendirian, lingkungan yang terlalu sepi dan kaku, atau tidak diizinkan untuk memberikan pendapat.",
    conflictStress: "Anda akan bertindak sangat dramatis (berlebihan), mencari pembenaran dari teman lain, atau lari mencari hiburan untuk melupakan masalah.",
    conflictSolution: [
      "Ambil waktu 10 menit menjauh dari keramaian untuk menurunkan emosi sebelum merespons.",
      "Dengarkan lawan bicara sampai kalimatnya titik, jangan menyela sebelum dia selesai.",
      "Gunakan catatan saat berdebat agar Anda tidak keluar dari topik (tidak membahas kejadian masa lalu)."
    ],
    recommendations: [
      "Hari 1-3: Biasakan mencatat. Jangan percayai ingatan Anda; masukkan semua tugas atau janji ke alarm HP/buku catatan.",
      "Hari 4-6: Latih kemampuan mendengar aktif. Dalam 1 percakapan hari ini, paksa diri Anda tutup mulut selama 5 menit penuh.",
      "Hari 7-10: Berhentilah memulai proyek/hobi baru sebelum tugas/hobi yang ada saat ini sudah Anda bereskan tuntas.",
      "Hari 11-14: Cobalah untuk menahan hasrat jajan/belanja impulsif selama beberapa hari ke depan demi kesehatan dompet."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan tetap menjadi sosok yang ceria dan penuh warna, namun Anda akan lebih bisa dipercaya oleh teman-teman karena janji dan tugas Anda lebih banyak yang terselesaikan dengan baik.",
    checklist: [
      "Bulan 1: Gunakan buku agenda atau kalender HP dengan disiplin untuk mencatat setiap janji temu/jadwal tugas.",
      "Bulan 1: Praktikkan kebiasaan 'Dengar sampai Selesai' setiap kali teman Anda sedang mencurahkan isi hatinya.",
      "Bulan 2: Targetkan penyelesaian tugas. Beri hadiah pada diri sendiri HANYA jika tugas tersebut sudah selesai 100%.",
      "Bulan 2: Rapikan satu titik fisik di hidup Anda (misalnya laci meja atau kasur) secara rutin setiap akhir pekan.",
      "Bulan 3: Buat daftar belanja sebelum keluar rumah dan disiplin patuhi daftar tersebut untuk mengerem keinginan impulsif.",
      "Bulan 3: Luangkan waktu 10 menit malam hari untuk duduk diam tanpa HP, dan evaluasi ucapan Anda hari ini."
    ],
    suitableCareers: [
      "Aktor, Musisi, atau Entertainer Panggung",
      "Pembicara Publik, Youtuber, atau Kreator Konten",
      "Penyelenggara Acara (Event Organizer) atau Pemasaran",
      "Pemandu Wisata, Penyiar Radio, atau Duta Merek (Brand Ambassador)",
      "Pekerjaan yang membebaskan ekspresi dan mengharuskan banyak bergaul"
    ]
  },
  "K-K": {
    title: "Koleris Murni (Si Komandan yang Tegas)",
    summary: "Anda memiliki kemauan keras yang sekeras baja dan fokus yang jarang bisa digoyahkan. Anda seolah dilahirkan untuk mengambil alih kendali, memimpin barisan, dan memastikan segala sesuatu mencapai garis akhir. Hambatan besar di mata orang lain, bagi Anda hanyalah tantangan seru yang harus dihancurkan. Anda sangat mandiri, percaya diri, dan selalu penuh dengan keyakinan.",
    decisionStyle: [
      "Berpikir sangat cepat, logis, praktis, dan jarang membiarkan keraguan menguasai pikiran.",
      "Sangat berani mengambil risiko besar jika yakin hal tersebut akan mendatangkan hasil yang sepadan.",
      "Paling benci membuang waktu untuk rapat berjam-jam atau berdebat hanya untuk hal sepele."
    ],
    decisionGuide: [
      "Ambil waktu jeda sejenak (minimal 10 menit) sebelum menjatuhkan keputusan fatal.",
      "Pertimbangkan dampak emosional dari keputusan Anda terhadap teman atau anggota tim lainnya.",
      "Pastikan Anda meminta pendapat 1 orang kepercayaan agar Anda melihat sudut pandang yang berbeda."
    ],
    emotionalDynamics: [
      "Sangat anti memperlihatkan kelemahan, air mata, atau kesedihan di hadapan orang lain.",
      "Amarah bisa sangat cepat meledak (seperti gunung berapi) apabila otoritas Anda ditantang atau merasa diremehkan.",
      "Terkadang saking fokusnya pada target, Anda menjadi kurang peka terhadap kelelahan batin dan perasaan orang di sekitar Anda."
    ],
    stressSigns: [
      "Bicara menjadi kasar, ketus, dan memerintah", 
      "Tidak bisa diam dan mulai memarahi orang-orang yang kerjanya lelet", 
      "Sangat mudah tersulut emosi pada hal sekecil apa pun",
      "Menjadi diktator yang memaksakan kehendak"
    ],
    interactionStyle: [
      "Pembawaan yang sangat mendominasi, selalu to the point, dan kadang auranya membuat orang lain merasa terintimidasi.",
      "Bahasa Anda seringkali berupa instruksi atau perintah, bukan permintaan tolong.",
      "Anda jujur secara brutal; jika ada yang salah, Anda akan langsung mengatakannya tanpa banyak saringan."
    ],
    interactionTips: [
      "Aku butuh tolong kamu untuk ngerjain bagian ini ya. Terima kasih banyak sebelumnya.",
      "Menurut pendapat kalian gimana? Kalau ada usulan yang lebih baik, aku siap mendengarkan."
    ],
    challenges: [
      "Sering terjebak menjadi workaholic ekstrem; lupa bahwa hidup bukan cuma soal kerja/tugas",
      "Sering disalahpahami sebagai sosok yang arogan, bossy (suka menyuruh), atau kasar",
      "Tingkat kesabaran yang sangat tipis terhadap orang-orang yang menurut Anda 'lambat' atau banyak mengeluh",
      "Gengsi yang terlalu tinggi membuat Anda paling sulit untuk mengakui kesalahan atau meminta maaf"
    ],
    conflictTrigger: "Situasi yang di luar kendali Anda, menghadapi orang yang pemalas, ketidaktegasan aturan, atau ketika ada yang meremehkan kemampuan Anda.",
    conflictStress: "Anda akan bertindak seperti mesin pendorong; Anda menyingkirkan siapa pun yang menghalangi jalan Anda dan mengambil alih semuanya secara sepihak.",
    conflictSolution: [
      "Tarik napas panjang. Pelankan nada bicara Anda agar orang lain tidak merasa sedang diserang secara fisik.",
      "Fokus pada akar masalahnya, jangan menggunakan kata-kata yang menjatuhkan harga diri orang tersebut.",
      "Dengarkan penjelasan mereka walau hanya 1 menit. Jangan langsung memotong atau menghakimi."
    ],
    recommendations: [
      "Hari 1-3: Praktikkan sihir kata sopan. Paksakan diri Anda menambah kata 'Tolong' dan 'Terima Kasih' dalam setiap percakapan.",
      "Hari 4-6: Latih kesabaran telinga Anda. Dengarkan pendapat teman atau kelompok tanpa boleh menyela sedikit pun.",
      "Hari 7-10: Beri waktu jeda untuk otak. Jadwalkan 1 jam bersantai tanpa memikirkan target, tugas, atau pekerjaan apa pun.",
      "Hari 11-14: Belajar menundukkan ego. Akui satu kesalahan kecil di depan teman/keluarga, dan lihatlah bahwa itu tidak membuat Anda terlihat lemah."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan tetap menjadi komandan yang disegani, namun orang-orang akan mulai mengikuti Anda karena rasa hormat dan cinta, bukan karena rasa takut.",
    checklist: [
      "Bulan 1: Tetapkan zona 'Tanpa Tugas/Kerja' di waktu libur akhir pekan untuk mengisi energi kebahagiaan Anda.",
      "Bulan 1: Latihlah sisi kemanusiaan Anda. Biasakan menyapa 'Apa kabar?' atau 'Gimana harimu?' sebelum membahas tugas.",
      "Bulan 2: Berlatih memercayai orang lain. Delegasikan 1 tugas kepada teman, dan jangan ikut campur dengan cara kerjanya.",
      "Bulan 2: Tantang gengsi Anda: Mintalah maaf dengan tulus hari ini kepada satu orang yang pernah Anda sakiti lewat kata-kata.",
      "Bulan 3: Lakukan aktivitas relaksasi ringan yang sama sekali tidak membutuhkan kompetisi (menang-kalah) seperti jalan sore atau mendengarkan musik.",
      "Bulan 3: Setiap malam, biasakan menulis 1 atau 2 hal yang Anda syukuri hari itu, agar hati menjadi lebih lembut."
    ],
    suitableCareers: [
      "Pengusaha, Pendiri Perusahaan (CEO), atau Pemimpin Eksekutif",
      "Manajer Tingkat Atas atau Direktur Perencanaan",
      "Komandan Militer, Polisi, atau Pemimpin Strategis Lapangan",
      "Pengacara Litigasi atau Penasihat Hukum",
      "Pekerjaan yang menuntut ketangguhan mental, pengambilan keputusan, dan arahan kuat"
    ]
  },
  "M-M": {
    title: "Melankolis Murni (Si Perfeksionis Sejati)",
    summary: "Anda memiliki kedalaman pemikiran dan standar kualitas yang sangat luar biasa tinggi, seringkali bahkan melebihi apa yang orang lain harapkan. Anda adalah pemikir yang sejati, serius, jeli melihat hal yang terlewatkan, dan seringkali memiliki bakat jenius di bidang yang Anda senangi. Bagi Anda, hidup ini harus memiliki arti, keteraturan, dan berjalan menuju titik ideal yang sempurna.",
    decisionStyle: [
      "Sangat hati-hati dan penuh perhitungan; pantang melangkah jika data atau buktinya belum lengkap.",
      "Sering mengalami 'kelumpuhan akibat terlalu banyak menganalisa' (overthinking) hingga kesulitan memulai.",
      "Selalu menggunakan acuan standar idealisme tertinggi setiap kali membuat keputusan hidup."
    ],
    decisionGuide: [
      "Batasi waktu pencarian data. Jika Anda sudah punya 70% informasi yang dibutuhkan, berhentilah mencari dan mulailah bertindak.",
      "Buat daftar untung dan rugi secara tertulis, jangan hanya diputar-putar di dalam kepala.",
      "Berhentilah menunggu momen yang '100% Sempurna', karena momen itu tidak akan pernah datang."
    ],
    emotionalDynamics: [
      "Sangat peka, sensitif, dan mudah menangkap perubahan emosi (baik dari diri sendiri maupun orang lain).",
      "Sangat rawan terjebak dalam rasa murung, pesimis, atau sedih yang mendalam jika realita tidak seindah ekspektasi.",
      "Punya memori yang sangat tajam; cenderung mengingat kesalahan atau luka di hati dalam waktu yang sangat lama."
    ],
    stressSigns: [
      "Menarik diri dari kehidupan sosial (mengurung diri)", 
      "Menjadi sangat murung dan pesimis", 
      "Sangat kritis dan mulai mencari-cari kesalahan orang lain yang sepele",
      "Menghukum dan menyalahkan diri sendiri secara terus-menerus"
    ],
    interactionStyle: [
      "Biasanya berbicara dengan formal, sangat sopan, dan menjaga jarak untuk melindungi diri.",
      "Sangat kritis saat mendengarkan, selalu bisa menangkap jika ada detail cerita yang tidak sinkron.",
      "Pilih-pilih dalam berteman, namun jika sudah menganggap seseorang sahabat, Anda akan sangat setia selamanya."
    ],
    interactionTips: [
      "Mungkin hasilnya belum 100% sempurna, tapi progres kita hari ini sudah sangat luar biasa.",
      "Aku menghargai masukanmu yang detail, tapi untuk sekarang kita pakai cara yang sederhana ini dulu ya."
    ],
    challenges: [
      "Memiliki standar kesempurnaan yang tidak realistis (baik untuk menyiksa diri sendiri maupun menekan orang lain)",
      "Cepat merasa pesimis, mudah curiga, dan sering memikirkan skenario terburuk",
      "Sangat sulit melupakan dan memaafkan kesalahan (mendendam)",
      "Menghabiskan energi dan waktu terlalu banyak hanya untuk tahap 'Persiapan', sehingga eksekusinya telat"
    ],
    conflictTrigger: "Kekacauan yang berisik, aturan yang dilanggar, melihat ketidakadilan, atau jika Anda dikritik atas hal yang sudah Anda kerjakan dengan sungguh-sungguh.",
    conflictStress: "Anda akan mendirikan 'tembok' tebal, menjauhi sumber masalah, menyimpan amarah di dalam hati, dan menghukum diri sendiri dengan pikiran negatif.",
    conflictSolution: [
      "Keluarkan isi pikiran Anda melalui tulisan terlebih dahulu sebelum Anda membicarakannya langsung.",
      "Sampaikan perasaan Anda dengan menggunakan fakta-fakta, hindari menyudutkan dengan kata-kata tajam.",
      "Berikan ruang maaf. Sadarilah bahwa orang lain (dan diri Anda sendiri) adalah manusia biasa yang wajar jika berbuat salah."
    ],
    recommendations: [
      "Hari 1-3: Praktikkan toleransi. Turunkan standar 'Harus Sempurna' menjadi 'Selesai dan Cukup Baik'.",
      "Hari 4-6: Lakukan diet hal negatif. Hindari membaca gosip, berita sedih, atau menonton hal-hal yang memicu kemurungan.",
      "Hari 7-10: Latihan melepaskan. Pilih satu kesalahan masa lalu (diri sendiri atau orang lain), maafkan, dan berhentilah membahasnya.",
      "Hari 11-14: Gerakkan fisik Anda. Saat pikiran mulai ruwet, berdirilah dan lakukan olahraga ringan atau sekadar berjalan kaki."
    ],
    direction: "Dalam 2–4 minggu ke depan, karya Anda akan tetap berkualitas luar biasa tinggi, namun pikiran Anda akan terasa jauh lebih ringan dan hati Anda terbebas dari siksaan 'keinginan tampil sempurna'.",
    checklist: [
      "Bulan 1: Tetapkan batas waktu mengambil keputusan. Paksakan diri untuk memutus hal-hal kecil dalam waktu kurang dari 15 menit.",
      "Bulan 1: Ubah pandangan pikiran Anda. Mulailah berlatih menerima hasil karya/tugas yang berada di level 80% sempurna.",
      "Bulan 2: Berlatih meminta pendapat teman pada draft tugas Anda, jangan menunggunya sampai benar-benar sempurna baru ditunjukkan.",
      "Bulan 2: Jadwalkan olahraga rutin mingguan; keringat dan gerakan fisik sangat ampuh menekan overthinking dan memperbaiki mood Anda.",
      "Bulan 3: Hentikan suara negatif di kepala. Jika pikiran mulai membisikkan 'Aku bodoh', segera ganti dengan 'Aku sedang belajar'.",
      "Bulan 3: Paksakan diri bergaul keluar rumah setidaknya sekali seminggu tanpa harus ada agenda spesifik, sekadar bersantai."
    ],
    suitableCareers: [
      "Ilmuwan, Analis Data, atau Peneliti Tingkat Lanjut",
      "Seniman Murni, Musisi, atau Komposer Kreatif",
      "Akuntan, Auditor, atau Ahli Keuangan",
      "Dokter Spesialis, Ahli Bedah, atau Arsitek",
      "Pekerjaan yang membebaskan waktu untuk berpikir mendalam dan berkarya di belakang layar"
    ]
  },
  "P-P": {
    title: "Plegmatis Murni (Si Pencinta Damai Mutlak)",
    summary: "Anda adalah simbol dari ketenangan yang sesungguhnya. Anda sangat santai, mengalir, mudah bergaul tanpa menuntut syarat, dan sepertinya hampir tidak pernah sengaja mencari masalah dengan siapa pun. Di mata orang lain, Anda adalah teman atau anggota keluarga yang paling nyaman karena Anda mendamaikan suasana dan menerima orang lain apa adanya. Anda ibarat air yang tenang dan menyejukkan.",
    decisionStyle: [
      "Sangat sulit mengambil keputusan sendiri (terlalu banyak keraguan atau bingung memilih).",
      "Paling sering menggunakan kata 'Terserah' dan lebih suka mengekor pada pilihan mayoritas teman.",
      "Sangat waspada dan selalu berusaha menghindari risiko sekecil apa pun yang bisa merubah zona nyaman."
    ],
    decisionGuide: [
      "Kurangi jumlah pilihan. Jika Anda harus memilih, jangan siapkan lebih dari 2 opsi.",
      "Tanyakan pada hati kecil Anda sendiri: 'Kalau aku lagi sendirian dan nggak ada siapa-siapa, aku mau pilih apa?'.",
      "Segera ambil langkah kecil setelah memilih agar Anda tidak terjebak dalam kebingungan lagi."
    ],
    emotionalDynamics: [
      "Memiliki emosi yang paling stabil di antara yang lain; jarang sekali menunjukkan rasa marah besar atau kesedihan yang heboh.",
      "Sangat pintar meredam emosi diri sendiri hanya demi melihat orang-orang di sekitarnya tetap rukun dan damai.",
      "Bisa berubah menjadi sangat keras kepala (secara diam-diam dan pasif) jika terus-terusan dipaksa atau didikte."
    ],
    stressSigns: [
      "Hanya mau tidur seharian atau rebahan untuk menghindari masalah", 
      "Sikap masa bodoh atau cuek terhadap kewajiban", 
      "Menonton atau bermain game terus-menerus sebagai bentuk pelarian diri",
      "Lebih banyak diam saat ditanya"
    ],
    interactionStyle: [
      "Adalah pendengar yang sangat sabar, tenang, dan bersedia menampung cerita apa pun tanpa memotong.",
      "Tidak terlalu banyak berbicara, tapi Anda sangat jeli mengamati karakter orang di sekitar Anda.",
      "Sangat menghindari gaya bahasa berdebat, menyindir tajam, atau konfrontasi terbuka (ribut mulut)."
    ],
    interactionTips: [
      "Aku ikut aja sih apa kata kalian, tapi kalau menurutku pribadi opsi A juga lumayan bagus.",
      "Bisa tolong bantu ingatkan aku nanti? Soalnya aku kadang suka nunda-nunda kalau ngerjain ini sendirian."
    ],
    challenges: [
      "Sangat pasif, kurang memiliki inisiatif (selalu menunggu disuruh baru bergerak)",
      "Penyakit menunda-nunda tugas (Prokrastinasi) yang sudah mencapai tahap sangat parah",
      "Takut yang berlebihan terhadap perubahan atau hal-hal baru di luar rutinitas sehari-hari",
      "Terlalu sering dimanfaatkan oleh orang yang lebih dominan karena Anda jarang berani menolak"
    ],
    conflictTrigger: "Diberi beban kerja yang terlalu tinggi, menghadapi orang yang marah-marah, konflik yang terbuka, atau jika ketenangan waktu istirahatnya dirampas.",
    conflictStress: "Anda akan memilih untuk mengundurkan diri dari perdebatan, pura-pura tidak dengar, pergi tidur, atau bersikap masa bodoh dengan keadaan.",
    conflictSolution: [
      "Mintalah waktu untuk berbicara dengan santai, tanpa menggunakan nada tinggi atau emosi.",
      "Sampaikan perasaan Anda secara sederhana dan jangan menutupi masalah dengan kata 'Aku nggak apa-apa kok'.",
      "Ajak orang tersebut mencari kompromi yang paling tidak mengganggu kenyamanan satu sama lain."
    ],
    recommendations: [
      "Hari 1-3: Berhentilah bilang 'Terserah'. Buat sendiri keputusan Anda untuk hal-hal kecil seperti menu makan siang atau rute jalan.",
      "Hari 4-6: Lawan kemalasan pagi hari. Selesaikan 1 tugas yang paling Anda benci di jam-jam pertama Anda bangun.",
      "Hari 7-10: Berlatihlah untuk menolak dengan sopan. Katakan 'Tidak' pada satu permintaan teman yang sebenarnya memberatkan Anda.",
      "Hari 11-14: Rancang satu tujuan yang murni egois untuk kebahagiaan Anda sendiri, lalu kejar hal tersebut minggu ini."
    ],
    direction: "Dalam 2–4 minggu ke depan, Anda akan tetap menjadi sosok sahabat yang mendamaikan hati, tetapi Anda akan jauh lebih teratur, tidak lagi suka menunda-nunda, dan lebih tegas membela diri sendiri.",
    checklist: [
      "Bulan 1: Paksa diri Anda untuk mengambil minimal 3 keputusan kecil setiap harinya tanpa harus meminta saran dari siapa pun.",
      "Bulan 1: Belajar mengutarakan isi kepala. Suarakan satu rasa tidak setuju Anda dengan bahasa yang santun pada sebuah obrolan.",
      "Bulan 2: Terapkan prinsip 'Kerjakan yang Sulit Dulu'. Bereskan tugas terberat Anda di pagi hari agar sisa hari Anda terasa bebas.",
      "Bulan 2: Tetapkan minimal 1 ambisi atau tujuan hidup jangka panjang yang harus Anda kejar dengan konsisten.",
      "Bulan 3: Latih inisiatif bersosial Anda: Jangan cuma menunggu diajak. Kali ini Anda yang harus berinisiatif mengajak teman kumpul.",
      "Bulan 3: Evaluasi kemampuan Anda membuat batas diri (Boundaries). Jangan pernah biarkan orang lain menggunakan waktu istirahat Anda untuk kepentingan mereka."
    ],
    suitableCareers: [
      "Pekerjaan Administrasi Rutin, Kearsipan, atau Pengolahan Data Statis",
      "Staf Diplomat, Penengah, atau Humas (Public Relations)",
      "Guru Anak-anak, Pengajar, atau Perawat (Caregiver)",
      "Teknisi Laboratorium, Pustakawan, atau Penulis Transkrip",
      "Pekerjaan stabil yang minim risiko, minim drama, dan terjamin keamanannya"
    ]
  }
};
