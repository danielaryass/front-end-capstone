'use client'
import { useRef } from 'react';

export default function FormRegister(){
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef(); 
  const confirmPasswordRef = useRef();
  const [error, setError] = useState('');
  const handleRegister = (e) => {
    e.preventDefault();
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setError('Password do not match');
      return;
    }

    const data = {
      fullName,
      email,
      password,
    };
    console.log(data);
  }

    return (
      <form onSubmit={handleRegister}>
        <div className='mb-4'>
          <label className='text-slate-100 text-md' htmlFor='name'>
            Full Name
          </label>
          <br />
          <input
            id='name'
            name='name'
            type='name'
            ref={fullNameRef}
            className='w-full md:w-60 text-md border-2 border-black p-2 text-black rounded-md font-semibold'
          />
        </div>
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
        <div className='mb-4'>
          <label className='text-slate-100 text-md' htmlFor='password'>
            Password
          </label>
          <br />
          <input
            id='confirm_password'
            type='password'
            ref={confirmPasswordRef}
            className='w-full md:w-60 text-md border-2 border-black p-2 text-black rounded-md font-semibold'
          />
          {error && <div className='text-red-500'>{error}</div>}
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