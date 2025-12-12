import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import {
  ChevronRight,
  Calculator,
  ChevronDown,
  MoreHorizontal,
} from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy Data untuk Chart
const chartData = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 55 },
  { name: 'Mar', value: 40 },
  { name: 'Apr', value: 25 },
  { name: 'May', value: 60 },
  { name: 'Jun', value: 50 },
];

export default function GuruDashboard() {
  return (
    <DashboardLayout role='guru'>
      <div className='flex flex-col gap-8'>
        {/* === TOP SECTION (Hero + Mapel) === */}
        <div className='flex flex-col xl:flex-row gap-6'>
          {/* Hero Card (Kiri) */}
          <div className='flex-[2] relative rounded-3xl overflow-hidden bg-gradient-to-r from-[var(--color-guru-start)] to-[var(--color-guru-end)] text-white p-8 flex items-center shadow-lg min-h-[200px]'>
            <div className='z-10 relative max-w-lg'>
              <div className='inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium mb-3 border border-white/10'>
                22 November 2025
              </div>
              <h1 className='text-3xl font-bold mb-2'>Halo Pak Budi!</h1>
              <p className='text-blue-100 text-sm leading-relaxed max-w-md'>
                LMS adalah tempat untuk guru melihat progress siswa dan
                mendapatkan evaluasi pembelajaran
              </p>
            </div>

            {/* 3D Illustration Avatar */}
            <div className='absolute right-0 bottom-0 h-full w-1/3 flex items-end justify-end pointer-events-none'>
              <div className='w-[180px] h-[180px] bg-[#A5F3FC] rounded-full mr-10 mb-[-20px] relative border-4 border-white/20'>
                <img
                  src='https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?w=740'
                  alt='Pak Budi'
                  className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] object-contain drop-shadow-2xl'
                />
              </div>
            </div>
          </div>

          {/* Mata Pelajaran Cards (Kanan) */}
          <div className='flex-1 flex flex-row xl:flex-row gap-4'>
            <div className='flex-1 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center hover:shadow-md transition-all'>
              <div className='w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl'>
                📘
              </div>
              <h3 className='font-bold text-gray-800 text-sm'>
                Matematika Wajib
              </h3>
            </div>
            <div className='flex-1 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center hover:shadow-md transition-all'>
              <div className='w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center text-3xl'>
                🧮
              </div>
              <h3 className='font-bold text-gray-800 text-sm'>Fisika</h3>
            </div>
          </div>
        </div>

        {/* === MIDDLE SECTION (Chart + Sentimen + Mapel Minat) === */}
        <div className='grid grid-cols-1 xl:grid-cols-4 gap-6'>
          {/* Chart Section */}
          <div className='xl:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='font-bold text-gray-800'>Rasio Pemahaman Siswa</h3>
              <button className='text-xs bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 flex items-center gap-1 text-gray-600'>
                MTK - XII IPA 5 <ChevronDown size={14} />
              </button>
            </div>
            <div className='h-[180px] w-full'>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
                      <stop offset='5%' stopColor='#3B82F6' stopOpacity={0.3} />
                      <stop offset='95%' stopColor='#3B82F6' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip />
                  <Area
                    type='monotone'
                    dataKey='value'
                    stroke='#3B82F6'
                    strokeWidth={3}
                    fillOpacity={1}
                    fill='url(#colorValue)'
                  />
                  <XAxis
                    dataKey='name'
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: '#9CA3AF' }}
                    dy={10}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sentiment Card */}
          <div className='bg-[#EFF6FF] p-6 rounded-3xl border border-blue-100 flex flex-col items-center justify-center text-center gap-2'>
            {/* Panda Icon */}
            <div className='text-6xl mb-2'>🐼</div>
            <h3 className='font-bold text-gray-800 text-lg'>
              Sentiment Kelas:
            </h3>
            <p className='text-green-600 font-extrabold text-xl'>
              Antusias (70%)
            </p>
          </div>

          {/* Mapel Minat (Single Card in grid) */}
          <div className='bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-3 text-center'>
            <div className='w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-3xl'>
              📐
            </div>
            <h3 className='font-bold text-gray-800 text-sm'>
              Matematika Minat
            </h3>
          </div>
        </div>

        {/* === BOTTOM SECTION (Table + Task List) === */}
        <div className='flex flex-col xl:flex-row gap-6'>
          {/* Table Section */}
          <div className='flex-[3] bg-white p-6 rounded-3xl border border-gray-100 shadow-sm overflow-hidden'>
            <div className='flex justify-between items-center mb-6'>
              <h3 className='font-bold text-xl text-gray-900'>
                Daftar Nilai Siswa
              </h3>
              <div className='flex gap-2'>
                <button className='text-xs bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 flex items-center gap-1 text-gray-600'>
                  XII - IPA 5 <ChevronDown size={14} />
                </button>
                <button className='text-xs bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200 flex items-center gap-1 text-gray-600'>
                  Matematika <ChevronDown size={14} />
                </button>
              </div>
            </div>

            <div className='overflow-x-auto'>
              <table className='w-full text-sm text-left'>
                <thead className='bg-gray-50 text-gray-600 font-semibold border-b border-gray-100'>
                  <tr>
                    <th className='px-4 py-3 rounded-tl-xl'>Nama</th>
                    <th className='px-4 py-3'>Materi</th>
                    <th className='px-4 py-3 text-right rounded-tr-xl'>
                      Scor Quiz
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-50'>
                  {[
                    {
                      name: 'Fanan Agfian Mozart',
                      materi: 'Bab 1 - Aljabar I',
                      score: '98,56',
                      img: 'https://i.pravatar.cc/150?u=1',
                    },
                    {
                      name: 'Fanan Agfian Mozart',
                      materi: 'Bab 1 - Aljabar I',
                      score: '98,56',
                      img: 'https://i.pravatar.cc/150?u=1',
                    },
                    {
                      name: 'Fanan Agfian Mozart',
                      materi: 'Bab 1 - Aljabar I',
                      score: '98,56',
                      img: 'https://i.pravatar.cc/150?u=1',
                    },
                    {
                      name: 'Fanan Agfian Mozart',
                      materi: 'Bab 1 - Aljabar I',
                      score: '98,56',
                      img: 'https://i.pravatar.cc/150?u=1',
                    },
                    {
                      name: 'Michale Kevin Sanjaya',
                      materi: 'Bab 1 - Aljabar I',
                      score: '97,83',
                      img: 'https://i.pravatar.cc/150?u=2',
                    },
                    {
                      name: 'Richard Santoso',
                      materi: 'Bab 1 - Aljabar I',
                      score: '94,32',
                      img: 'https://i.pravatar.cc/150?u=3',
                    },
                    {
                      name: 'Clara Puspita Sari',
                      materi: 'Bab 1 - Aljabar I',
                      score: '93,45',
                      img: 'https://i.pravatar.cc/150?u=4',
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className='hover:bg-gray-50 transition-colors'
                    >
                      <td className='px-4 py-3 font-medium text-gray-900 flex items-center gap-3'>
                        <span className='text-blue-500 font-bold w-4'>
                          {idx + 1}
                        </span>
                        <img
                          src={row.img}
                          className='w-8 h-8 rounded-full bg-gray-200'
                          alt=''
                        />
                        {row.name}
                      </td>
                      <td className='px-4 py-3 text-gray-600 font-bold'>
                        {row.materi}
                      </td>
                      <td className='px-4 py-3 text-right'>
                        <span className='bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-bold'>
                          {row.score}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Sidebar: Tugas Perlu Dikoreksi */}
          <div className='flex-1 min-w-[300px] flex flex-col gap-4'>
            <h3 className='font-bold text-lg text-gray-900'>
              Tugas Perlu Dikoreksi
            </h3>

            {/* List Items */}
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className='bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer hover:border-blue-300 transition-all group'
              >
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-xl'>
                    📝
                  </div>
                  <div>
                    <h4 className='font-bold text-gray-900 text-sm group-hover:text-blue-600'>
                      Matematika Wajib Pos Tes...
                    </h4>
                    <span className='text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium'>
                      16 November 2022
                    </span>
                  </div>
                </div>
                <ChevronRight size={20} className='text-gray-400' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
