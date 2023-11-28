'use client'
import useSWR from 'swr';
export default function Page({params}){
    const {appointment_code} = params;
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data, error, isLoading} = useSWR(`/api/appointment/${appointment_code}`, fetcher);
    return(
        <section className="w-full py-20 flex justify-center">
            <div className="max-w-4xl w-full bg-alternatif rounded-xl p-4">
               <h2 className="text-xl font-semibold text-center text-primary">Selamat Appointment Berhasil Dibuat</h2>
               <div className="p-2">
                <p>Appointment Code: {appointment_code}</p>
                <p>Dokter: Dr. Ramdaniel Arya</p>
                <p>Pasien: Dadang</p>
                <p>Tanggal Appointment: 23 November 2023</p>
                <p>No Antrian: 1</p>
                <p>Anda disarankan datang sebelum jam :12.00</p>
               </div>
            </div>
        </section>
    )
}