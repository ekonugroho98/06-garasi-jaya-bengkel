export interface NavLink { label: string; href: string; }
export interface Stat { value: string; label: string; }
export interface FeaturePoint { icon: string; title: string; desc: string; }
export interface Service { icon: string; name: string; desc: string; price?: string; }
export interface Plan { name: string; price: string; unit?: string; desc: string; features: string[]; featured?: boolean; cta?: string; }
export interface GalleryImage { url: string; alt: string; }
export interface Testimonial { name: string; role: string; quote: string; rating: number; avatar?: string; }
export interface SiteData {
  brand: string; logoMark: string; tagline: string; whatsapp: string; phone: string; email: string; address: string; hours: string;
  social: { instagram?: string; facebook?: string; tiktok?: string };
  nav: NavLink[];
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; image: string; stats: Stat[] };
  about: { eyebrow: string; title: string; paragraphs: string[]; points: FeaturePoint[]; image: string };
  services: { eyebrow: string; title: string; subtitle: string; items: Service[] };
  pricing: { eyebrow: string; title: string; subtitle: string; plans: Plan[] };
  gallery: { eyebrow: string; title: string; subtitle: string; images: GalleryImage[] };
  testimonials: { eyebrow: string; title: string; subtitle: string; items: Testimonial[] };
  contact: { eyebrow: string; title: string; subtitle: string };
}

export const site: SiteData = {
  brand: 'Garasi Jaya',
  logoMark: 'GJ',
  tagline: 'Bengkel mobil terpercaya & transparan',
  whatsapp: '6281234567806',
  phone: '0812-3456-7806',
  email: 'servis@garasijaya.id',
  address: 'Jl. Raya Tajur No. 100, Bogor, Jawa Barat',
  hours: 'Senin – Sabtu 08.00 – 17.00',
  social: { instagram: '@garasijaya.id', facebook: 'Garasi Jaya Bengkel' },
  nav: [
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Harga', href: '#pricing' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Booking', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Mekanik bersertifikat & bergaransi',
    title: 'Mobil prima,',
    highlight: 'perjalanan tenang',
    subtitle:
      'Garasi Jaya menangani servis berkala hingga perbaikan besar dengan mekanik bersertifikat, sparepart asli, dan estimasi biaya yang transparan sebelum dikerjakan.',
    ctaPrimary: 'Booking Servis',
    ctaSecondary: 'Lihat Layanan',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { value: '20rb+', label: 'Mobil ditangani' },
      { value: 'Garansi', label: 'Tiap pengerjaan' },
      { value: '4.8/5', label: 'Rating pelanggan' },
    ],
  },
  about: {
    eyebrow: 'Tentang Garasi Jaya',
    title: 'Bengkel jujur yang bisa Anda andalkan',
    paragraphs: [
      'Sejak 2012, Garasi Jaya dikenal karena satu hal: kejujuran. Kami hanya mengganti yang memang perlu diganti, dengan estimasi biaya yang disetujui dulu sebelum dikerjakan.',
      'Mekanik kami bersertifikat dan terus dilatih untuk menangani berbagai merek mobil, dari servis ringan sampai overhaul mesin.',
    ],
    points: [
      { icon: 'wrench', title: 'Mekanik Bersertifikat', desc: 'Tim terlatih untuk semua merek mobil.' },
      { icon: 'shield', title: 'Garansi Pengerjaan', desc: 'Garansi servis hingga 30 hari.' },
      { icon: 'gauge', title: 'Estimasi Transparan', desc: 'Biaya disetujui dulu, tanpa kejutan.' },
      { icon: 'car', title: 'Sparepart Asli', desc: 'Suku cadang original & berkualitas.' },
    ],
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop',
  },
  services: {
    eyebrow: 'Layanan Servis',
    title: 'Solusi lengkap untuk mobil Anda',
    subtitle: 'Dari perawatan rutin sampai perbaikan berat.',
    items: [
      { icon: 'gauge', name: 'Servis Berkala', desc: 'Ganti oli, filter, tune up sesuai KM.', price: 'mulai Rp350.000' },
      { icon: 'wrench', name: 'Perbaikan Mesin', desc: 'Diagnosa & overhaul mesin profesional.', price: 'estimasi dulu' },
      { icon: 'car', name: 'Kaki-kaki & Rem', desc: 'Servis suspensi, ban, dan sistem rem.', price: 'mulai Rp250.000' },
      { icon: 'gauge', name: 'Scanner & Diagnosa', desc: 'Cek error kelistrikan dengan alat scan.', price: 'mulai Rp150.000' },
      { icon: 'leaf', name: 'AC Mobil', desc: 'Servis & isi freon agar dingin maksimal.', price: 'mulai Rp200.000' },
      { icon: 'sparkle', name: 'Detailing & Poles', desc: 'Cuci, poles, dan coating bodi mobil.', price: 'mulai Rp300.000' },
    ],
  },
  pricing: {
    eyebrow: 'Paket Servis',
    title: 'Paket perawatan hemat',
    subtitle: 'Harga jelas di awal, bisa konsultasi sebelum eksekusi.',
    plans: [
      { name: 'Servis Ringan', price: 'Rp350rb', unit: '/paket', desc: 'Perawatan rutin', features: ['Ganti oli mesin', 'Cek 20 titik', 'Bersih filter udara', 'Cek tekanan ban'], cta: 'Booking' },
      { name: 'Servis Komplit', price: 'Rp850rb', unit: '/paket', desc: 'Paling direkomendasikan', features: ['Semua servis ringan', 'Ganti filter oli & bensin', 'Tune up + scanner', 'Cek kaki-kaki & rem'], featured: true, cta: 'Booking' },
      { name: 'Paket Tahunan', price: 'Rp2.5jt', unit: '/thn', desc: '4x servis berkala', features: ['4x servis komplit', 'Diskon 15% sparepart', 'Prioritas pengerjaan', 'Free cek darurat'], cta: 'Konsultasi' },
    ],
  },
  gallery: {
    eyebrow: 'Galeri',
    title: 'Bengkel & proses kerja kami',
    subtitle: 'Fasilitas rapi dan pengerjaan yang teliti.',
    images: [
      { url: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?q=80&w=800&auto=format&fit=crop', alt: 'Mekanik memperbaiki mesin mobil' },
      { url: 'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?q=80&w=800&auto=format&fit=crop', alt: 'Mobil di lift bengkel' },
      { url: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=800&auto=format&fit=crop', alt: 'Peralatan bengkel tertata' },
      { url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop', alt: 'Mobil dalam perawatan' },
      { url: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop', alt: 'Detail mesin mobil' },
      { url: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?q=80&w=800&auto=format&fit=crop', alt: 'Proses servis kaki-kaki mobil' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimoni',
    title: 'Kata pelanggan Garasi Jaya',
    subtitle: 'Dipercaya menjaga mobil keluarga & armada usaha.',
    items: [
      { name: 'Hendra Gunawan', role: 'Pengguna harian', rating: 5, quote: 'Bengkel paling jujur yang pernah saya datangi. Dijelasin detail apa yang rusak dan estimasinya dulu.' },
      { name: 'Linda Sari', role: 'Ibu rumah tangga', rating: 5, quote: 'Sebagai perempuan yang nggak ngerti mesin, saya merasa aman. Nggak dibohongi soal harga.' },
      { name: 'CV Berkah Logistik', role: 'Pemilik armada', rating: 5, quote: 'Armada kami servis rutin di sini. Pengerjaan cepat dan bergaransi. Sangat membantu operasional.' },
    ],
  },
  contact: {
    eyebrow: 'Booking & Kontak',
    title: 'Jadwalkan servis mobil Anda',
    subtitle: 'Booking jadwal lewat WhatsApp agar tidak antre. Sebutkan keluhan mobil Anda.',
  },
};
