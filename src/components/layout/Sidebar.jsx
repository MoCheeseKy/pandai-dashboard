import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiBarChart2,
  FiGrid,
  FiUser,
} from 'react-icons/fi'; // Menggunakan React Icons standar
import { cn } from '@/lib/utils';

const Sidebar = ({ role }) => {
  const router = useRouter();

  // Menu Config berdasarkan Role
  const menus = {
    guru: [
      { name: 'Home', icon: FiHome, path: '/guru' },
      { name: 'Daftar Siswa', icon: FiUsers, path: '/guru/daftar-siswa' },
      { name: 'Evaluasi', icon: FiFileText, path: '/guru/evaluasi' },
    ],
    waka: [
      { name: 'Home', icon: FiHome, path: '/waka' },
      { name: 'Statistik Guru', icon: FiUsers, path: '/waka/statistik-guru' },
      {
        name: 'Statistik Kelas',
        icon: FiBarChart2,
        path: '/waka/statistik-kelas',
      },
    ],
    orang_tua: [
      { name: 'Home', icon: FiHome, path: '/orang-tua' },
      { name: 'Profil Anak', icon: FiUsers, path: '/orang-tua/profile-anak' },
    ],
  };

  const activeMenu = menus[role] || [];

  return (
    <aside className='w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-100 flex flex-col justify-between z-50'>
      {/* Logo Section */}
      <div className='p-8'>
        <div className='flex items-center gap-2 mb-8'>
          {/* Placeholder Logo Panda */}
          <div className='w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-xl'>
            🐼
          </div>
          <span className='text-xl font-bold text-slate-800'>Pandai</span>
        </div>

        {/* Navigation */}
        <nav className='space-y-2'>
          {activeMenu.map((item, index) => {
            const isActive = router.pathname === item.path;
            return (
              <Link
                key={index}
                href={item.path}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium',
                  isActive
                    ? 'bg-slate-50 text-indigo-600'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                )}
              >
                <item.icon
                  className={cn(
                    'text-xl',
                    isActive ? 'text-green-600' : 'text-slate-400'
                  )}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Profile Footer (Logout) */}
      <div className='p-6 border-t border-gray-50'>
        <div className='bg-slate-50 p-3 rounded-xl flex items-center gap-3 mb-3 cursor-pointer'>
          <div className='w-10 h-10 rounded-full bg-gray-200 overflow-hidden'>
            {/* Placeholder Avatar */}
            <img
              src='https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
              alt='User'
            />
          </div>
          <div className='flex-1'>
            <h4 className='text-sm font-bold text-slate-800 capitalize'>
              {role === 'orang_tua'
                ? 'Richard'
                : role === 'waka'
                ? 'Yanto'
                : 'Budi'}
            </h4>
            <p className='text-xs text-slate-500 capitalize'>
              {role.replace('_', ' ')}
            </p>
          </div>
        </div>

        <button className='w-full flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors font-medium'>
          <span>Log-Out</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
            <polyline points='16 17 21 12 16 7' />
            <line x1='21' x2='9' y1='12' y2='12' />
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
