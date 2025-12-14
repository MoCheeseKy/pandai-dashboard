import Head from 'next/head';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { ChevronDown } from 'lucide-react';

// --- COMPONENTS ---

// 1. Kartu Performa Guru (Untuk bagian Atas)
const PerformanceCard = ({ teacher, type = 'good' }) => {
  const isGood = type === 'good';
  const progressColor = isGood ? 'text-[#0055D4]' : 'text-orange-500';
  const progressBg = isGood ? 'text-indigo-50' : 'text-orange-50';
  const badgeColor = isGood
    ? 'text-green-600 bg-green-50'
    : 'text-red-600 bg-red-50';

  return (
    <div className='bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6'>
      {/* Kolom Kiri: Profil */}
      <div className='flex flex-col gap-4 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4'>
        <div className='flex items-center gap-4'>
          <div className='w-16 h-16 rounded-full bg-pink-100 overflow-hidden'>
            <img
              src={teacher.image}
              alt={teacher.name}
              className='w-full h-full object-cover'
            />
          </div>
          <div>
            <h4 className='font-bold text-lg text-slate-800'>{teacher.name}</h4>
            <p className='text-xs text-slate-500 font-medium'>
              NIP: {teacher.nip}
            </p>
          </div>
        </div>

        <div className='space-y-3'>
          <div>
            <p className='text-[10px] uppercase font-bold text-slate-400 mb-1'>
              Mapel Diampu
            </p>
            <span className='inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600'>
              {teacher.mapel}
            </span>
          </div>
          <div>
            <p className='text-[10px] uppercase font-bold text-slate-400 mb-1'>
              Wali kelas
            </p>
            <span className='inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600'>
              {teacher.waliKelas}
            </span>
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Chart & Evaluasi */}
      <div className='flex-1 flex flex-col gap-4'>
        {/* Header Chart */}
        <div className='flex items-center gap-4'>
          {/* SVG Donut Chart */}
          <div className='relative w-16 h-16'>
            <svg
              className='w-full h-full transform -rotate-90'
              viewBox='0 0 36 36'
            >
              <path
                className={progressBg}
                d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                fill='none'
                stroke='currentColor'
                strokeWidth='4'
              />
              <path
                className={progressColor}
                strokeDasharray={`${teacher.percentage}, 100`}
                d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                fill='none'
                stroke='currentColor'
                strokeWidth='4'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div>
            <div className='text-2xl font-bold text-slate-700'>
              {teacher.done}
              <span className='text-sm text-slate-400 font-normal'>
                /{teacher.total}
              </span>{' '}
              <span className='text-sm font-normal text-slate-500'>
                murid sudah paham
              </span>
            </div>
            <div
              className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mt-1 ${badgeColor}`}
            >
              {isGood ? '↗ 10%' : '↘ 6%'}
            </div>
          </div>
        </div>

        {/* Text Box Evaluasi */}
        <div
          className={`p-4 rounded-xl border ${
            isGood
              ? 'bg-indigo-50/50 border-indigo-100'
              : 'bg-red-50/50 border-red-100'
          }`}
        >
          <h5
            className={`text-sm font-bold mb-1 ${
              isGood ? 'text-indigo-900' : 'text-red-900'
            }`}
          >
            Evaluasi Guru
          </h5>
          <p className='text-xs text-slate-600 leading-relaxed'>
            {teacher.eval}
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. Kartu Guru Biasa (Reuse dari Dashboard Home)
const SimpleTeacherCard = ({ teacher }) => (
  <div className='bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 group'>
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
    <div className='space-y-3'>
      <div>
        <p className='text-[10px] uppercase font-bold text-slate-400 mb-1'>
          Mapel Diampu
        </p>
        <span className='inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600'>
          {teacher.mapel}
        </span>
      </div>
      <div>
        <p className='text-[10px] uppercase font-bold text-slate-400 mb-1'>
          Wali kelas
        </p>
        <span className='inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600'>
          {teacher.waliKelas}
        </span>
      </div>
    </div>
  </div>
);

// --- DATA ---
const bestTeachers = [
  {
    name: 'Budi Gunawan',
    nip: '12345678',
    mapel: 'Matematika Wajib XII',
    waliKelas: 'Walikelas XII MIPA 6',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
    percentage: 75,
    done: 24,
    total: 32,
    eval: 'Budi Gunawan dianggap kompeten sebagai guru Matematika karena telah meningkatkan tingkat pemahaman siswa di kelas Matematika Wajib XII.',
  },
  {
    name: 'Siti Aminah',
    nip: '87654321',
    mapel: 'Fisika XII',
    waliKelas: 'Walikelas XII MIPA 5',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti',
    percentage: 75,
    done: 24,
    total: 32,
    eval: 'Siti Aminah dianggap kompeten karena metode pengajarannya yang interaktif dan mudah dipahami siswa.',
  },
];

const badTeachers = [
  {
    name: 'Sulistio',
    nip: '12345678',
    mapel: 'IPA XII',
    waliKelas: 'Walikelas XII MIPA 6',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sulistio',
    percentage: 25,
    done: 8,
    total: 32,
    eval: 'Sulistio dianggap kurang kompeten dalam mengajar di mata pelajaran IPA karena sebagian siswa merasa belum paham, nilai siswa terus menurun.',
  },
];

const allTeachers = Array(5).fill({
  name: 'Budi Gunawan',
  nip: '12345678',
  mapel: 'Matematika Wajib XII',
  waliKelas: 'Walikelas XII MIPA 6',
  image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
});

export default function StatistikGuru() {
  return (
    <DashboardLayout role='waka'>
      <Head>
        <title>Statistik Guru - Pandai</title>
      </Head>

      <div className='flex flex-col gap-8 max-w-[1400px]'>
        <h1 className='text-2xl font-bold text-slate-800'>
          Dashboard WAKA / Statistik Guru
        </h1>

        {/* 1. Guru Terbaik */}
        <div>
          <h2 className='text-lg font-bold text-indigo-900 mb-4'>
            Guru Terbaik
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {bestTeachers.map((t, i) => (
              <PerformanceCard key={i} teacher={t} type='good' />
            ))}
          </div>
        </div>

        {/* 2. Butuh Evaluasi */}
        <div>
          <h2 className='text-lg font-bold text-indigo-900 mb-4'>
            Butuh Evaluasi
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {badTeachers.map((t, i) => (
              <PerformanceCard key={i} teacher={t} type='bad' />
            ))}
          </div>
        </div>

        {/* 3. Daftar Guru */}
        <div>
          <h2 className='text-lg font-bold text-indigo-900 mb-4'>
            Daftar Guru
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
            {allTeachers.map((t, i) => (
              <SimpleTeacherCard key={i} teacher={t} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
