import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Users, Calendar, Search } from 'lucide-react';

export default function WakaDashboard() {
  // Data Dummy untuk Guru (Diulang sesuai gambar)
  const teachers = Array(6).fill({
    name: 'Pak Budi',
    nip: '12345678',
    avatar:
      'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?w=740', // Placeholder 3D
    subjects: ['Mat Wajib XII', 'Fisika X', 'Mat Minat XI'],
  });

  return (
    <DashboardLayout role='waka'>
      <div className='space-y-8'>
        {/* === Header === */}
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Dashboard WAKA</h1>
        </div>

        {/* === Stats Cards === */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Card Total Guru */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between'>
            <div>
              <p className='text-gray-500 font-medium text-lg mb-1'>
                Total Guru
              </p>
              <h2 className='text-4xl font-bold text-gray-900'>45</h2>
            </div>
            <div className='w-16 h-16 flex items-center justify-center'>
              <Users size={48} className='text-gray-900' />
            </div>
          </div>

          {/* Card Total Kelas */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between'>
            <div>
              <p className='text-gray-500 font-medium text-lg mb-1'>
                Total Kelas
              </p>
              <h2 className='text-4xl font-bold text-gray-900'>120</h2>
            </div>
            <div className='w-16 h-16 flex items-center justify-center'>
              <Calendar size={48} className='text-gray-900' />
            </div>
          </div>
        </div>

        {/* === Daftar Guru Section === */}
        <div>
          <div className='flex items-center justify-between mb-6'>
            <h2 className='text-xl font-bold text-gray-900'>
              Daftar Guru & Kelas
            </h2>
            {/* Optional: Search Bar (Bonus UI) */}
            {/* <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18}/>
                <input type="text" placeholder="Cari guru..." className="pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
             </div> */}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {teachers.map((teacher, index) => (
              <div
                key={index}
                className='bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center'
              >
                {/* Avatar Circle */}
                <div className='w-24 h-24 rounded-full bg-[#A5F3FC] mb-4 overflow-hidden border-4 border-white shadow-sm'>
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className='w-full h-full object-cover object-top'
                  />
                </div>

                {/* Info Guru */}
                <h3 className='text-xl font-bold text-gray-900'>
                  {teacher.name}
                </h3>
                <p className='text-sm text-gray-500 font-medium mb-4'>
                  NIP: {teacher.nip}
                </p>

                {/* List Pelajaran (Tags) */}
                <div className='w-full mb-6'>
                  <p className='text-xs text-gray-400 font-semibold mb-2 text-left w-full'>
                    Mengajar
                  </p>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {teacher.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-xs font-bold'
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className='w-full py-3 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold text-sm shadow-md hover:opacity-90 transition-opacity'>
                  Daftar Kelas dan Siswa
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
