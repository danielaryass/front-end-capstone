'use client';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function FormLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const [error, setError] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const data = {
      email,
      password,
    };
    const response = await axios.post('/api/login', data);
    console.log(response.data);
    if (!response.data.status) {
      setError(response.data.message);
    } else {
      localStorage.setItem('token', response.data.data.token);
      localStorage.setItem('roles', response.data.data.roles);
      router.push('/');
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <div className='mb-4'>
        <label className='text-slate-100 text-md' htmlFor='email'>
          Email address
        </label>
        <br />
        <input
          id='email'
          name='email'
          type='email'
          ref={emailRef}
          className='w-full md:w-60 text-md border-2 border-black p-2 text-black rounded-md font-semibold'
        />
      </div>
      <div className='mb-4'>
        <label className='text-slate-100 text-md' htmlFor='password'>
          Password
        </label>
        <br />
        <input
          id='password'
          name='password'
          type='password'
          ref={passwordRef}
          className='w-full md:w-60 text-md border-2 border-black p-2 text-black rounded-md font-semibold'
        />
      </div>
      <button
        className='py-2 w-full rounded-xl text-md font-bold text-slate-100 bg-secondary'
        type='submit'
      >
        Login
      </button>
    </form>
  );
}
