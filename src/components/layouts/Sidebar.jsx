import React from 'react';
import Link from 'next/link';
import {
  Home,
  User,
  FileText,
  Users,
  BarChart2,
  LogOut,
  ChevronUp,
} from 'lucide-react';
import { cn } from '@/libs/utils';

// Konfigurasi Menu berdasarkan Role
const MENUS = {
  'orang-tua': [
    { label: 'Home', icon: Home, href: '/orang-tua', active: true },
    { label: 'Nilai Anak', icon: BarChart2, href: '#' },
    { label: 'Profil Anak', icon: User, href: '#' },
  ],
  'guru': [
    { label: 'Home', icon: Home, href: '/guru', active: true },
    { label: 'Siswa', icon: Users, href: '#' },
    { label: 'Evaluasi', icon: FileText, href: '#' },
  ],
  'waka': [
    { label: 'Home', icon: Home, href: '/waka', active: true },
    { label: 'Data Guru', icon: Users, href: '#' },
    { label: 'Data Kelas', icon: FileText, href: '#' },
    { label: 'Statistik', icon: BarChart2, href: '#' },
  ],
};

const PROFILES = {
  'orang-tua': {
    name: 'Richard',
    role: 'Orang tua',
    img: 'https://i.pravatar.cc/150?u=richard',
  },
  'guru': {
    name: 'Julian',
    role: 'Guru',
    img: 'https://i.pravatar.cc/150?u=julian',
  },
  'waka': {
    name: 'Yanto',
    role: 'Kesiswaan',
    img: 'https://i.pravatar.cc/150?u=yanto',
  },
};

export default function Sidebar({ role }) {
  const menus = MENUS[role] || MENUS['orang-tua'];
  const profile = PROFILES[role] || PROFILES['orang-tua'];

  return (
    <div className='flex flex-col h-full justify-between py-6 px-4'>
      {/* Header Logo */}
      <div>
        <div className='flex items-center gap-2 mb-10 px-2'>
          {/* Logo Placeholder (Panda) */}
          <div className='text-2xl font-bold flex items-center gap-2 text-indigo-900'>
            🐼 <span className='text-[#3b3b98]'>Pandai</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className='space-y-2'>
          {menus.map((menu, idx) => (
            <Link
              key={idx}
              href={menu.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                menu.active
                  ? 'bg-white text-green-600 shadow-sm border border-gray-100'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              <menu.icon
                size={20}
                className={menu.active ? 'text-green-600' : 'text-gray-400'}
              />
              {menu.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer Profile */}
      <div>
        <div className='bg-white border border-gray-100 rounded-2xl p-3 flex items-center justify-between shadow-sm mb-4 cursor-pointer hover:shadow-md transition-shadow'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-full bg-gray-200 overflow-hidden'>
              {/* Gunakan img placeholder untuk demo */}
              <img
                src={profile.img}
                alt={profile.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div>
              <p className='text-sm font-bold text-gray-900'>{profile.name}</p>
              <p className='text-xs text-gray-500'>{profile.role}</p>
            </div>
          </div>
          <ChevronUp size={16} className='text-gray-400' />
        </div>

        <button className='w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-sm font-medium text-gray-700 transition-colors'>
          <span>Log-Out</span>
          <LogOut size={18} className='text-gray-500' />
        </button>
      </div>
    </div>
  );
}
