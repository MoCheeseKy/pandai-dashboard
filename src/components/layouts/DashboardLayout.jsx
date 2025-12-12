import React from 'react';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children, role = 'orang-tua' }) {
  return (
    <div className='flex min-h-screen bg-[#F8F9FB] font-sans'>
      {/* Sidebar Fixed Width */}
      <aside className='w-64 flex-shrink-0 fixed h-full bg-white border-r border-gray-100 z-10'>
        <Sidebar role={role} />
      </aside>

      {/* Main Content Area */}
      <main className='flex-1 ml-64 p-8 overflow-y-auto'>{children}</main>
    </div>
  );
}
