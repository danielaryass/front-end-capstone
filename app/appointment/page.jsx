'use client';
import Image from 'next/image';
import doctor from '@/public/doctor1.jpg';
import Link from 'next/link';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());
const Home = () => {
  const { data, error, isLoading } = useSWR('/api/doctor', fetcher);
  console.log(data);
  return (
    <section className='py-8 flex justify-center'>
      <div className='max-w-6xl w-full'>
        <h2 className='text-2xl font-bold pb-2 border-b-2 border-black'>
          Silahkan Pilih Dokter
        </h2>
        <div className='grid grid-cols-4 gap-4 py-4'>
          {data?.data.map((doctor) => (
            <div
              className='w-full bg-primary rounded-md overflow-hidden shadow-md shadow-primary flex flex-col'
              key={doctor.id}
            >
              <div className='w-full h-full'>
                <Image
                  src={`http://127.0.0.1:8000/storage/${doctor.image_url}`}
                  width={500}
                  height={500}
                  alt='doctor'
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='w-full px-2 py-4 text-center text-slate-50'>
                <h3 className='text-xl font-semibold'>{doctor.name}</h3>
                <p className='text-sm mb-1'>
                  Jam Buka Praktek :{' '}
                  {doctor.start_time.split(':').slice(0, 2).join(':')}
                </p>
                <p className='text-sm mb-4'>
                  Jam Tutup Praktek :{' '}
                  {doctor.end_time.split(':').slice(0, 2).join(':')}
                </p>
                <div className=''>
                  <Link
                    href={`/appointment/${doctor.id}`}
                    className='bg-secondary  py-2 px-4 rounded-md'
                  >
                    Buat Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
