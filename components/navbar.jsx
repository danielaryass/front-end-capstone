'use client'
import Image from 'next/image';
import LOGO from '@/public/LOGO.png';
import Link from 'next/link';
export default function Navbar() {
    return (
      <header className='px-20 py-2 flex items-center justify-between bg-primary sticky top-0 border-b border-slate-100 w-full'>
        <Link href='/'>
          <Image
            src={LOGO}
            width={200}
            height={200}
            alt='logo'
            className='h-16 w-auto'
          />
        </Link>
        <nav className='flex items-center'>
          <ul className='flex gap-4 text-slate-100'>
            <li>
              <Link href={'/'} className='text-secondary'>
                Home
              </Link>
            </li>
            <li>
              <Link href={'/'}>Doctors</Link>
            </li>
            <li>
              <Link href={'/'}>Facilities</Link>
            </li>
            <li>
              <Link href={'/'}>Gallery</Link>
            </li>
            <li>
              <Link
                href={'login'}
                className='py-2 px-4 rounded-md border-white border'
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}