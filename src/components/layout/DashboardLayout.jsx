import Sidebar from './Sidebar';

const DashboardLayout = ({ children, role = 'guru' }) => {
  return (
    <div className='min-h-screen bg-[#F8F9FA]'>
      <Sidebar role={role} />
      <main className='ml-64 p-8'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
