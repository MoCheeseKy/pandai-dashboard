import Head from 'next/head';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Users, Calendar, MoreHorizontal } from 'lucide-react'; // Menggunakan Lucide (Shadcn standard)

// --- MOCK DATA ---
const stats = [
  { label: 'Total Guru', value: '45', icon: Users },
  { label: 'Total Kelas', value: '120', icon: Calendar },
];

const teachers = [
  // Saya duplikasi data agar terlihat banyak seperti di desain (Grid)
  ...Array(7).fill({
    name: 'Budi Gunawan',
    nip: '12345678',
    mapel: 'Matematika Wajib XII',
    kelas: 'IPA XII',
    waliKelas: 'Walikelas XII MIPA 6',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi', // Placeholder
    bgGradient: false,
  }),
];

// --- REUSABLE COMPONENTS (Mini Shadcn-like Components) ---

// 1. Component Card Sederhana
const StatCard = ({ label, value, icon: Icon }) => (
  <div className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between'>
    <div>
      <h3 className='text-slate-500 font-medium text-lg mb-2'>{label}</h3>
      <p className='text-4xl font-bold text-slate-800'>{value}</p>
    </div>
    <div className='w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-800'>
      <Icon size={32} strokeWidth={2} />
    </div>
  </div>
);

// 2. Component Teacher Card (Kartu Guru)
const TeacherCard = ({ teacher }) => (
  <div className='bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 group'>
    {/* Profile Header */}
    <div className='flex flex-col gap-3'>
      <div className='w-16 h-16 rounded-full bg-pink-100 overflow-hidden mx-auto md:mx-0'>
        <img
          src={teacher.image}
          alt={teacher.name}
          className='w-full h-full object-cover'
        />
      </div>
      <div>
        <h4 className='font-bold text-lg text-slate-800'>{teacher.name}</h4>
        <p className='text-xs text-slate-500 font-medium'>NIP: {teacher.nip}</p>
      </div>
    </div>

    {/* Info Block */}
    <div className='space-y-3'>
      {/* Mapel */}
      <div>
        <p className='text-[10px] uppercase font-bold text-slate-400 mb-1'>
          Mapel Diampu
        </p>
        <div className='flex flex-wrap gap-2'>
          <span className='inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600'>
            {teacher.mapel}
          </span>
          <span className='inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600'>
            {teacher.kelas}
          </span>
        </div>
      </div>

      {/* Wali Kelas */}
      <div>
        <p className='text-[10px] uppercase font-bold text-slate-400 mb-1'>
          Wali kelas
        </p>
        <span className='inline-block px-3 py-1 bg-blue-50 border border-blue-100 rounded-lg text-xs font-semibold text-blue-600'>
          {teacher.waliKelas}
        </span>
      </div>
    </div>
  </div>
);

// --- MAIN PAGE ---

export default function DashboardWaka() {
  return (
    <DashboardLayout role='waka'>
      <Head>
        <title>Dashboard Waka - Pandai</title>
      </Head>

      <div className='flex flex-col gap-8 max-w-[1400px]'>
        {/* Header Title */}
        <h1 className='text-2xl font-bold text-slate-800'>Dashboard WAKA</h1>

        {/* 1. Stats Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* 2. Daftar Guru Section */}
        <div>
          <h2 className='text-lg font-bold text-slate-800 mb-6'>
            Daftar Sekilas Guru
          </h2>

          {/* Grid Layout untuk Kartu Guru */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {teachers.map((t, i) => (
              <TeacherCard key={i} teacher={t} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
