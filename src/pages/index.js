import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';

const InterFont = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/guru');
  }, [router]);

  return (
    <div
      className={`${InterFont.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <div className='flex flex-col items-center gap-4'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white'></div>
          <p className='text-sm text-gray-600 dark:text-gray-300'>
            Mengalihkan ke halaman Guru...
          </p>
        </div>
      </main>
    </div>
  );
}
