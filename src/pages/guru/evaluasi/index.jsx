import { useState } from 'react';
import Head from 'next/head';
import DashboardLayout from '@/components/layout/DashboardLayout';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChevronDown, ChevronRight, Calculator, BookOpen } from 'lucide-react';

// --- DUMMY DATA ---
const chartData = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 45 },
  { name: 'Mar', value: 50 },
  { name: 'Apr', value: 55 },
  { name: 'May', value: 60 },
  { name: 'Jun', value: 65 },
  { name: 'Jul', value: 85 },
  { name: 'Aug', value: 95 },
  { name: 'Sep', value: 80 },
  { name: 'Oct', value: 82 },
  { name: 'Nov', value: 78 },
  { name: 'Dec', value: 75 },
];

const studentsEvalData = [
  {
    id: 1,
    name: 'Fanan Agfian Mozart',
    chapter: 'Bab 1 - Aljabar I',
    score: 45,
    img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fanan',
  },
  {
    id: 2,
    name: 'Richard Santoso',
    chapter: 'Bab 1 - Aljabar I',
    score: 32,
    img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Richard',
  },
  {
    id: 3,
    name: 'Clara Puspita Sari',
    chapter: 'Bab 1 - Aljabar I',
    score: 25,
    img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Clara',
  },
];

const tasksData = [
  { id: 1, title: 'Matematika Wajib Pos Test', date: '16 November 2022' },
  { id: 2, title: 'Matematika Wajib Pos Test', date: '16 November 2022' },
  { id: 3, title: 'Matematika Wajib Pos Test', date: '16 November 2022' },
];

export default function EvaluasiGuru() {
  const [selectedClassChart, setSelectedClassChart] =
    useState('MTK - XII IPA 5');
  const [selectedClassTable, setSelectedClassTable] = useState('XII - IPA 5');
  const [selectedMateri, setSelectedMateri] = useState('Matematika');

  return (
    <DashboardLayout role='guru'>
      <Head>
        <title>Evaluasi - Pandai</title>
      </Head>

      <div className='flex flex-col gap-6 max-w-[1400px]'>
        {/* Header Title */}
        <h1 className='text-2xl font-bold text-slate-800'>
          Dashboard Guru / Evaluasi
        </h1>

        <div className='grid grid-cols-12 gap-8'>
          {/* LEFT COLUMN */}
          <div className='col-span-12 lg:col-span-8 flex flex-col gap-6'>
            {/* 1. Evaluasi & Sentimen Section */}
            <div>
              <h3 className='text-lg font-bold text-slate-800 mb-4'>
                Evaluasi & Sentimen
              </h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {/* Chart: Rasio Pemahaman Siswa */}
                <div className='md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 relative'>
                  <div className='flex justify-between items-start mb-4'>
                    <h4 className='font-bold text-slate-700'>
                      Rasio Pemahaman Siswa
                    </h4>
                    <div className='flex items-center gap-1 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-xs font-medium text-slate-600 cursor-pointer hover:bg-slate-100 transition'>
                      <span>{selectedClassChart}</span>
                      <ChevronDown size={14} />
                    </div>
                  </div>

                  <div className='h-[200px] w-full text-xs'>
                    <ResponsiveContainer width='100%' height='100%'>
                      <LineChart data={chartData}>
                        <CartesianGrid
                          vertical={false}
                          stroke='#f1f5f9'
                          strokeDasharray='3 3'
                        />
                        <XAxis
                          dataKey='name'
                          axisLine={false}
                          tickLine={false}
                          tick={{ fill: '#94a3b8', fontSize: 10 }}
                          dy={10}
                        />
                        <YAxis hide={true} domain={[0, 100]} />
                        <Tooltip
                          contentStyle={{
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                          }}
                        />
                        <Line
                          type='monotone'
                          dataKey='value'
                          stroke='#22c55e'
                          strokeWidth={3}
                          dot={{ r: 0 }}
                          activeDot={{
                            r: 6,
                            fill: '#22c55e',
                            stroke: '#fff',
                            strokeWidth: 2,
                          }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart: Pemahaman Murid (Donut) */}
                <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between'>
                  <h4 className='font-bold text-slate-700 mb-2'>
                    Pemahaman Murid
                  </h4>

                  <div className='flex items-center gap-4'>
                    <div className='relative w-24 h-24'>
                      <svg
                        className='w-full h-full transform -rotate-90'
                        viewBox='0 0 36 36'
                      >
                        <path
                          className='text-indigo-50'
                          d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='4'
                        />
                        <path
                          className='text-[#0055D4]'
                          strokeDasharray='75, 100'
                          d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='4'
                          strokeLinecap='round'
                        />
                      </svg>
                    </div>

                    <div className='flex flex-col'>
                      <span className='text-4xl font-bold text-slate-700'>
                        24
                        <span className='text-xl text-slate-400 font-normal'>
                          /32
                        </span>
                      </span>
                      <div className='inline-flex items-center gap-1 text-green-600 bg-green-50 px-2 py-0.5 rounded-md text-xs font-bold w-max mt-1'>
                        <ChevronRight
                          className='rotate-[-90deg]'
                          size={12}
                          strokeWidth={4}
                        />
                        10%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Rangkuman Panduan Mengajar */}
            <div className='bg-[#F4F6FA] border border-indigo-100 rounded-xl p-5'>
              <h4 className='text-indigo-800 font-bold text-sm mb-1'>
                Rangkuman panduan mengajar
              </h4>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Sebagian besar siswa di kelas ini telah memahami pelajaran
                matematika, namun anda juga perlu untuk memperhatikan murid yang
                belum paham.
              </p>
            </div>

            {/* 3. Siswa Yang Perlu Dievaluasi Table */}
            <div className='bg-white rounded-2xl border border-gray-100 shadow-sm p-6'>
              <div className='flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4'>
                <h2 className='text-xl font-bold text-slate-800'>
                  Siswa Yang Perlu Dievaluasi
                </h2>

                <div className='flex gap-3'>
                  {/* Class Selector */}
                  <div className='relative group'>
                    <select
                      value={selectedClassTable}
                      onChange={(e) => setSelectedClassTable(e.target.value)}
                      className='appearance-none bg-slate-50 border border-gray-200 text-slate-600 py-1.5 pl-4 pr-10 rounded-full text-xs font-bold cursor-pointer hover:border-gray-300 transition focus:outline-none'
                    >
                      <option>XII - IPA 5</option>
                      <option>XII - IPA 6</option>
                    </select>
                    <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400'>
                      <ChevronDown size={14} />
                    </div>
                  </div>

                  {/* Subject Selector */}
                  <div className='relative group'>
                    <select
                      value={selectedMateri}
                      onChange={(e) => setSelectedMateri(e.target.value)}
                      className='appearance-none bg-slate-50 border border-gray-200 text-slate-600 py-1.5 pl-4 pr-10 rounded-full text-xs font-bold cursor-pointer hover:border-gray-300 transition focus:outline-none'
                    >
                      <option>Matematika</option>
                      <option>Fisika</option>
                    </select>
                    <div className='absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400'>
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className='overflow-hidden rounded-xl border border-blue-50'>
                <table className='w-full text-left border-collapse'>
                  <thead>
                    <tr className='bg-blue-50/50 border-b border-blue-100 text-slate-600 text-sm'>
                      <th className='py-3 px-6 font-bold w-12'>No</th>
                      <th className='py-3 px-6 font-bold'>Nama</th>
                      <th className='py-3 px-6 font-bold'>Materi</th>
                      <th className='py-3 px-6 font-bold text-right'>
                        Scor Quiz
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-50'>
                    {studentsEvalData.map((student, idx) => (
                      <tr
                        key={student.id}
                        className='hover:bg-slate-50 transition-colors group'
                      >
                        <td className='py-3 px-6'>
                          <span className='text-blue-600 font-bold text-sm'>
                            {idx + 1}
                          </span>
                        </td>
                        <td className='py-3 px-6'>
                          <div className='flex items-center gap-3'>
                            <div className='w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100'>
                              <img
                                src={student.img}
                                alt={student.name}
                                className='w-full h-full object-cover'
                              />
                            </div>
                            <span className='font-bold text-slate-700 text-sm group-hover:text-blue-600 transition-colors'>
                              {student.name}
                            </span>
                          </div>
                        </td>
                        <td className='py-3 px-6'>
                          <span className='text-indigo-900 font-bold text-sm'>
                            {student.chapter}
                          </span>
                        </td>
                        <td className='py-3 px-6 text-right'>
                          <div className='inline-flex justify-center items-center w-8 h-8 rounded-full bg-gray-100 text-slate-500 font-bold text-sm'>
                            {student.score}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Sidebar Widgets) */}
          <div className='col-span-12 lg:col-span-4 flex flex-col gap-8'>
            {/* Widget 1: Mata Pelajaran */}
            <div>
              <h3 className='text-lg font-bold text-slate-800 mb-4'>
                Mata Pelajaran Diampu
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-indigo-100 group'>
                  <div className='w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform'>
                    <Calculator size={24} />
                  </div>
                  <span className='text-slate-700 font-bold text-center text-sm'>
                    Matematika Wajib
                  </span>
                </div>
                <div className='bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-indigo-100 group'>
                  <div className='w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform'>
                    <BookOpen size={24} />
                  </div>
                  <span className='text-slate-700 font-bold text-center text-sm'>
                    Fisika
                  </span>
                </div>
                <div className='bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-indigo-100 group col-span-1'>
                  <div className='w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform'>
                    <Calculator size={24} />
                  </div>
                  <span className='text-slate-700 font-bold text-center text-sm'>
                    Matematika Minat
                  </span>
                </div>
              </div>
            </div>

            {/* Widget 2: Tugas */}
            <div>
              <h3 className='text-lg font-bold text-slate-800 mb-4'>
                Tugas Perlu Dikoreksi
              </h3>
              <div className='flex flex-col gap-3'>
                {tasksData.map((task, i) => (
                  <div
                    key={i}
                    className='bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors group'
                  >
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600'>
                        <Calculator size={18} />
                      </div>
                      <div>
                        <h5 className='text-sm font-bold text-indigo-900 group-hover:text-indigo-700'>
                          {task.title}
                        </h5>
                        <p className='text-xs text-green-600 bg-green-50 inline-block px-1.5 py-0.5 rounded mt-1 font-medium'>
                          {task.date}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className='text-slate-300 group-hover:text-slate-500'
                      size={20}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
