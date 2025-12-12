import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { ChevronRight, Calculator, FileText, Plus } from 'lucide-react';

export default function OrangTuaDashboard() {
  return (
    <DashboardLayout role='orang-tua'>
      <div className='flex flex-col xl:flex-row gap-8'>
        {/* Left Content Column (Main) */}
        <div className='flex-1 space-y-8'>
          {/* Header */}
          <h1 className='text-2xl font-bold text-gray-900'>
            Dashboard Orang Tua
          </h1>

          {/* Progress Belajar Anak - Hero Card */}
          <section>
            <h2 className='text-lg font-bold text-gray-900 mb-4'>
              Progress Belajar Anak
            </h2>
            <div className='relative w-full rounded-3xl overflow-hidden shadow-lg bg-gradient-to-r from-[#4F46E5] to-[#A855F7] p-8 text-white flex justify-between items-center min-h-[220px]'>
              {/* Text Content */}
              <div className='z-10 relative space-y-2'>
                <div className='inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-2 border border-white/10'>
                  22 November 2025
                </div>
                <h3 className='text-2xl font-bold'>
                  Profil Anak: Fanan Agfian Mozart
                </h3>
                <div className='space-y-1 text-sm text-indigo-100 mt-2'>
                  <p>Kelas: XII MIPA 6</p>
                  <p>NISN: 1312342342</p>
                  <p>NIS: 1312313</p>
                </div>
              </div>

              {/* 3D Avatar Image (Placeholder styling to match) */}
              <div className='absolute right-10 bottom-0 md:right-16 md:-bottom-4 h-[250px] w-[250px] bg-[#9ce4e3] rounded-full flex items-end justify-center overflow-visible border-4 border-white/20'>
                {/* Dalam real implementation, ini adalah gambar PNG transparan */}
                <img
                  src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1709483000~exp=1709483600~hmac=...'
                  alt='Avatar'
                  className='w-48 mb-[-20px] object-cover drop-shadow-xl'
                />
              </div>
            </div>
          </section>

          {/* Mata Pelajaran & Nilai */}
          <section>
            <h2 className='text-lg font-bold text-gray-900 mb-4'>
              Mata Pelajaran & Nilai
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {/* Card Item - Reusable mock map */}
              {Array(8)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className='bg-[#EBF3FE] p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 border border-blue-50 hover:shadow-md transition-shadow cursor-pointer group'
                  >
                    <div className='relative'>
                      {/* Icon Book/Calculator Illustration */}
                      <div className='w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-2xl'>
                        📚
                      </div>
                    </div>
                    <div className='space-y-0.5'>
                      <h4 className='font-bold text-gray-800 text-sm'>
                        Matematika Wajib
                      </h4>
                      <p className='text-[10px] text-gray-500 font-medium'>
                        Nilai Rata Rata: 87
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar Column (History) */}
        <aside className='w-full xl:w-[320px] flex-shrink-0 pt-16'>
          <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full min-h-[500px]'>
            <h3 className='text-lg font-bold text-gray-900 mb-6'>
              Riwayat Quiz Terbaru
            </h3>

            <div className='space-y-4'>
              {/* Quiz Item 1 */}
              <div className='group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-colors cursor-pointer shadow-sm'>
                <div className='flex items-center gap-3'>
                  <div className='hidden'>Icon</div> {/* Placeholder layout */}
                  <div>
                    <p className='text-xs font-bold text-gray-800'>
                      Quiz Fungsi (Matematika)
                    </p>
                    <p className='text-[10px] text-gray-500'>Nilai: 95</p>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className='text-gray-400 group-hover:text-blue-500'
                />
              </div>

              {/* Quiz Item 2 - With Blue Icon */}
              <div className='group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-colors cursor-pointer shadow-sm'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-500 relative'>
                    <FileText size={16} />
                    <div className='absolute -bottom-1 -right-1 bg-green-400 rounded-full p-[2px] border border-white'>
                      <Plus size={8} className='text-white' />
                    </div>
                  </div>
                  <div>
                    <p className='text-xs font-bold text-gray-800'>
                      Quiz Fungsi (Matematika)
                    </p>
                    <p className='text-[10px] text-gray-500'>Nilai: 95</p>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className='text-gray-400 group-hover:text-blue-500'
                />
              </div>

              {/* Quiz Item 3 */}
              <div className='group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-colors cursor-pointer shadow-sm'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-500 relative'>
                    <FileText size={16} />
                    <div className='absolute -bottom-1 -right-1 bg-green-400 rounded-full p-[2px] border border-white'>
                      <Plus size={8} className='text-white' />
                    </div>
                  </div>
                  <div>
                    <p className='text-xs font-bold text-gray-800'>
                      Quiz Fungsi (Matematika)
                    </p>
                    <p className='text-[10px] text-gray-500'>Nilai: 95</p>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className='text-gray-400 group-hover:text-blue-500'
                />
              </div>

              {/* Quiz Item 4 */}
              <div className='group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-colors cursor-pointer shadow-sm'>
                <div className='flex items-center gap-3'>
                  <div className='w-8 h-8 rounded bg-blue-100 flex items-center justify-center text-blue-500 relative'>
                    <FileText size={16} />
                    <div className='absolute -bottom-1 -right-1 bg-green-400 rounded-full p-[2px] border border-white'>
                      <Plus size={8} className='text-white' />
                    </div>
                  </div>
                  <div>
                    <p className='text-xs font-bold text-gray-800'>
                      Quiz Fungsi (Matematika)
                    </p>
                    <p className='text-[10px] text-gray-500'>Nilai: 95</p>
                  </div>
                </div>
                <ChevronRight
                  size={20}
                  className='text-gray-400 group-hover:text-blue-500'
                />
              </div>
            </div>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
