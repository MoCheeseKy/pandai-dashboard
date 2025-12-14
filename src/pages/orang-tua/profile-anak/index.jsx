import Head from 'next/head';
import DashboardLayout from '@/components/layout/DashboardLayout';

export default function ProfilAnak() {
  return (
    <DashboardLayout role='orang_tua'>
      <Head>
        <title>Profil Anak - Pandai</title>
      </Head>

      <div className='flex flex-col gap-6 max-w-[1000px]'>
        {/* Header Title */}
        <h1 className='text-2xl font-bold text-slate-800'>
          Dashboard Orang Tua / Profil Anak
        </h1>

        {/* 1. Profile Header Card */}
        <div className='bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6'>
          <div className='w-20 h-20 rounded-full bg-pink-100 overflow-hidden border-2 border-white shadow-sm'>
            {/* Gunakan placeholder yang sama dengan desain */}
            <img
              src='https://api.dicebear.com/7.x/avataaars/svg?seed=Fanan'
              alt='Fanan Agfian Mozart'
              className='w-full h-full object-cover'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold text-slate-800'>
              Fanan Agfian Mozart
            </h2>
            <p className='text-slate-500 font-medium'>Murid Kelas XII Mipa 6</p>
          </div>
        </div>

        {/* 2. Basic Information Form Card */}
        <div className='bg-white p-8 rounded-2xl border border-gray-100 shadow-sm'>
          <h3 className='text-lg font-bold text-slate-800 mb-8'>
            Basic Information
          </h3>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6'>
            {/* NIS */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-slate-500 font-medium'>NIS</label>
              <div className='w-full bg-[#F9FAFB] border border-gray-100 rounded-xl px-4 py-3 text-slate-600 font-medium text-sm'>
                12789372
              </div>
            </div>

            {/* NISN */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-slate-500 font-medium'>NISN</label>
              <div className='w-full bg-[#F9FAFB] border border-gray-100 rounded-xl px-4 py-3 text-slate-600 font-medium text-sm'>
                12789372
              </div>
            </div>

            {/* Jenis Kelamin */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-slate-500 font-medium'>
                Jenis Kelamin
              </label>
              <div className='w-full bg-[#F9FAFB] border border-gray-100 rounded-xl px-4 py-3 text-slate-600 font-medium text-sm'>
                Laki-laki
              </div>
            </div>

            {/* Tanggal Lahir */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-slate-500 font-medium'>
                Tanggal Lahir
              </label>
              <div className='w-full bg-[#F9FAFB] border border-gray-100 rounded-xl px-4 py-3 text-slate-600 font-medium text-sm'>
                19 Mei 2007
              </div>
            </div>

            {/* Email */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-slate-500 font-medium'>
                Email
              </label>
              <div className='w-full bg-[#F9FAFB] border border-gray-100 rounded-xl px-4 py-3 text-slate-600 font-medium text-sm'>
                fananagfian@gmail.com
              </div>
            </div>

            {/* Nomor Telepon */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-slate-500 font-medium'>
                Nomor Telepon
              </label>
              <div className='w-full bg-[#F9FAFB] border border-gray-100 rounded-xl px-4 py-3 text-slate-600 font-medium text-sm'>
                089669730759
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className='mt-10'>
            <button className='bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold py-3 px-8 rounded-full shadow-md shadow-indigo-200 transition-all active:scale-95'>
              Ajukan perubahan
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
