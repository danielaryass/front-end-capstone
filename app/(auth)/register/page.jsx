import Image from 'next/image';
import Link from 'next/link';
import herosection from '@/public/herosection.webp';
import LOGO from '@/public/LOGO.png';
import FormRegister from '@/app/(auth)/register/client/formRegister';
export default function Page() {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-slate-200 '>
      <div className='w-3/5 bg-primary rounded-xl overflow-hidden h-[600px] flex flex-row-reverse'>
        <div className='w-1/2 h-full'>
          <Image
            src={herosection}
            width={500}
            height={500}
            alt='doctor'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='w-1/2 flex justify-center flex-col items-center'>
         
          <h2 className='text-2xl text-slate-50 font-semibold mb-4'>
            Please Sign Up
          </h2>
          <FormRegister />
        </div>
      </div>
    </div>
  );
}
