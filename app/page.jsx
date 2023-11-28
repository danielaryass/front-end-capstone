'use client'
import Image from 'next/image';
import herosection from '@/public/herosection.webp';
import doctor from '@/public/doctor1.jpg';
import doctor2 from '@/public/doctor2.jpg';
import doctor3 from '@/public/doctor3.jpg';
import facility from '@/public/facility.png';
import facility2 from '@/public/facility2.jpg';
import Link from 'next/link';
export default function Home() {
  return (
    <main className='flex flex-col w-full items-center'>
      <section className='bg-primary w-full flex justify-center items-center'>
        <div className='max-w-5xl w-full py-44 flex gap-2'>
          <div className='w-1/2 flex justify-center flex-col p-2 font-bold text-white'>
            <h2 className='text-7xl mb-6'>
              Lorem ipsum{' '}
              <span className='text-tertiery'>dolor sit. amet.</span>
            </h2>
            <div className=''>
              <Link href={'/appointment'} className='bg-secondary text-white font-semibold py-3 px-5  rounded-md'>
                Book Appointment
              </Link>
            </div>
          </div>
          <div className='w-1/2 rounded-3xl overflow-hidden'>
            <Image
              src={herosection}
              width={500}
              height={500}
              alt='hero'
              className='w-full h-full'
            />
          </div>
        </div>
      </section>
      <section className='max-w-6xl w-full flex flex-col items-center py-20'>
        <h2 className='text-3xl font-semibold mb-8'>Doctors</h2>
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-slate-100 rounded-xl overflow-hidden'>
            <div className='w-full h-60'>
              <Image
                src={doctor}
                width={500}
                height={500}
                alt='doctor'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full p-4 text-center'>
              <h3 className='text-xl font-semibold'>Dr. John Doe</h3>
              <p className='text-sm '>Dentist</p>
            </div>
          </div>
          <div className='bg-slate-100 rounded-xl overflow-hidden'>
            <div className='w-full h-60'>
              <Image
                src={doctor2}
                width={500}
                height={500}
                alt='doctor'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full p-4 text-center'>
              <h3 className='text-xl font-semibold'>Dr. John Doe</h3>
              <p className='text-sm '>Dentist</p>
            </div>
          </div>
          <div className='bg-slate-100 rounded-xl overflow-hidden'>
            <div className='w-full h-60'>
              <Image
                src={doctor3}
                width={500}
                height={500}
                alt='doctor'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='w-full p-4 text-center'>
              <h3 className='text-xl font-semibold'>Dr. John Doe</h3>
              <p className='text-sm '>Dentist</p>
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 w-full flex flex-col  items-center '>
        <div className='max-w-6xl w-full flex flex-col gap-12 px-4'>
          <h2 className='text-3xl font-semibold mb-8 text-center'>
            Facilities
          </h2>

          <div className='flex gap-4 items-center max-w-3xl '>
            <Image
              src={facility}
              width={200}
              height={200}
              alt='asasda'
              className='w-72 h-96 rounded-xl object-cover'
            />
            <div className='mr-12'>
              <h2 className='text-xl font-bold mb-4'>Facility</h2>
              <p className=''>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto alias reprehenderit quibusdam cum laudantium optio
                eligendi dicta repellat ducimus ipsam?
              </p>
            </div>
          </div>
          <div className='ml-auto flex flex-row-reverse gap-4 items-center max-w-3xl '>
            <Image
              src={facility2}
              width={200}
              height={200}
              alt='asasda'
              className='w-72 h-96 rounded-xl object-cover'
            />
            <div className='ml-12'>
              <h2 className='text-xl font-bold mb-4'>Facility</h2>
              <p className=''>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto alias reprehenderit quibusdam cum laudantium optio
                eligendi dicta repellat ducimus ipsam?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='min-h-screen flex items-center justify-center'>
        <div className='max-w-7xl'>
          <h2 className='text-4xl font-bold text-center mb-12'>Gallery</h2>
          <div className='grid grid-cols-2 gap-4'>
            <Image
              src={doctor}
              width={200}
              height={200}
              alt='asasda'
              className='w-full h-72 rounded-xl'
            />
            <Image
              src={doctor}
              width={200}
              height={200}
              alt='asasda'
              className='w-full h-72 rounded-xl'
            />
            <Image
              src={doctor}
              width={200}
              height={200}
              alt='asasda'
              className='w-full h-72 rounded-xl'
            />
            <Image
              src={doctor}
              width={200}
              height={200}
              alt='asasda'
              className='w-full h-72 rounded-xl'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
