'use client';
import Image from 'next/image';
import { DatePicker } from '@/components/datepicker';
import { useRef, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { parseISO,format } from 'date-fns';
import { useRouter } from 'next/navigation';

export default function Page({ params }) {
  const { id } = params;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`/api/doctor/${id}`, fetcher);
  const [date, setDate] = useState();
  const onDateChange = (date) => setDate(date);
  const nameRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();
  const doctor = data?.data;
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;
    if(!date) return alert('Pilih tanggal appointment');
    const data = {
      name,
      phone,
      address,
      appointment_date : format(date, 'yyyy-MM-dd'),
      doctor_id: id,
    };
    const response = await axios.post('/api/appointment', data);
    console.log(response);
    if(response.data.status === 201) {
      alert('Appointment berhasil dibuat');
      router.push(`/appointment/detail/${response.data.data.data.appointment_code}`);
    }
    if(response.data.status != 201) alert('Appointment gagal dibuat');
  }
  return (
    <section className='py-20 w-full flex justify-center'>
      <div className='max-w-3xl flex rounded-md overflow-hidden w-full h-fit shadow-lg shadow-black'>
        <div className='w-2/5 bg-primary overflow-hidden flex flex-col'>
          <div className='w-full h-full'>
            <Image
              src={`http://127.0.0.1:8000/storage/${doctor?.image_url}`}
              width={500}
              height={500}
              alt='doctor'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-full p-2 text-center text-slate-50 py-4 flex flex-col justify-center'>
            <h3 className='text-xl font-semibold'>{doctor?.name}</h3>
            <p className='text-sm mb-1'>
              Jam Buka Praktek :{' '}
              {doctor?.start_time.split(':').slice(0, 2).join(':')}
            </p>
            <p className='text-sm mb-4'>
              Jam Tutup Praktek :{' '}
              {doctor?.end_time.split(':').slice(0, 2).join(':')}
            </p>
          </div>
        </div>
        <div className='w-3/5 bg-alternatif overflow-hidden px-4  flex flex-col items-center py-8'>
          <h2 className='text-center text-xl font-semibold mb-4'>
            {' '}
            Data Diri:
          </h2>
          <form onSubmit={handleSubmit} className='flex flex-col w-full items-center'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Nama Lengkap'
              className='w-96 p-2 rounded-md my-2 border'
              ref={nameRef}
              required
            />
            <input
              type='text'
              name='phone'
              id='phone'
              placeholder='Nomor Telepon'
              className='w-96 p-2 rounded-md my-2 border'
              ref={phoneRef}
              required
            />
            <DatePicker date={date} onDateChange={onDateChange} />

            <textarea
              type='text'
              name='address'
              id='address'
              placeholder='Alamat'
              className='w-96 p-2 rounded-md my-2 border'
              ref={addressRef}
            ></textarea>
            <button type='submit' className='bg-secondary text-white font-semibold py-3 px-5 rounded-md mt-4'>
              Buat Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
