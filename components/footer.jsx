'use client'

export default function Footer(){
    return (
      <footer className='w-full flex flex-col items-center bg-primary text-slate-50'>
        <div className='grid grid-cols-3 px-20 gap-96 py-10 border-b border-slate-100'>
          <div className='w-full'>
            <h2 className='text-xl font-bold'>Contact Us</h2>
            <div className=''>
              <p className='text-xl'>Address</p>
              <p className='text-xl'>Phone</p>
              <p className='text-xl'>Email</p>
            </div>
          </div>
          <div className='w-full'>
            <h2 className='text-xl font-bold'>Contact Us</h2>
            <div className='w-full'>
              <p className='text-xl'>Address</p>
              <p className='text-xl'>Phone</p>
              <p className='text-xl'>Email</p>
            </div>
          </div>
          <div className='w-full'>
            <h2 className='text-xl font-bold'>Contact Us</h2>
            <div className=''>
              <p className='text-xl'>Address</p>
              <p className='text-xl'>Phone</p>
              <p className='text-xl'>Email</p>
            </div>
          </div>
        </div>
        <div className='w-full text-center font-medium py-4'>
          <p>&copy; 2023 Mediqueue Design by Capstone team 1</p>
        </div>
      </footer>
    );
}