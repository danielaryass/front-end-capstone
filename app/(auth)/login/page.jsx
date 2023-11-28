import Image from 'next/image';
import Link from 'next/link';
import herosection from '@/public/herosection.webp';
import LOGO from '@/public/LOGO.png';
import FormLogin from '@/app/(auth)/login/client/formLogin';
export default function Page() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-slate-200 '>
      <div className='w-3/5 bg-primary rounded-xl overflow-hidden h-[600px] flex'>
        <div className='w-1/2 h-full'>
          <Image
            src={herosection}
            width={500}
            height={500}
            alt='doctor'
            className='w-full h-full object-cover'
            priority
          />
        </div>
        <div className='w-1/2 flex justify-center flex-col items-center'>
          <Image
            src={LOGO}
            width={200}
            height={200}
            alt='logo'
            className='w-60 mb-4'
          />
          <h2 className='text-2xl text-slate-50 font-semibold mb-4'>
            Please Sign In
          </h2>
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
