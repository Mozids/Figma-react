import React, { useState } from 'react';
import p from '../assets/Buku.jpg';
import g from '../assets/Gooogle.svg';
import { FaArrowLeft } from 'react-icons/fa';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div id='Home' className='w-full h-screen flex justify-center items-center text-white'>
      <div className='w-full h-3/4 lg:w-1/4 lg:h-2/3 rounded-3xl bg-neutral-900 shadow-2xl'>
        <div className='flex items-center pl-10 pt-7 pb-2'>
          <a href="/Home" className='flex items-center gap-1 hover:text-gray-400'>
            <FaArrowLeft />Back
          </a>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={p} alt="TokoBookKu" className='w-16 pt-5' />
          <h1 className='pt-2 text-xl font-extrabold '>TOKOBOOKKU</h1>
        </div>
        <form onSubmit={handleSubmit} className='px-10 pt-8 '>
          <div className='flex flex-col pb-4'>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className='w-full h-12 rounded-lg text-sm font-medium text-gray-700 p-2 mt-2'
              required
            />
          </div>

          <div className='flex flex-col pb-4'>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className='w-full h-12 rounded-lg text-sm font-medium text-gray-700 p-2 mt-2'
              required
            />
          </div>

          <div className='flex justify-end pb-4'>
            <a href="" className=' hover:text-blue-500 underline'>
              Lupa kata sandi?
            </a>
          </div>

          <button
            type="submit"
            className='w-full h-10 bg-neutral-800 text-white rounded-lg font-semibold mt-4'
          >
            Login
          </button>

          <div className='flex justify-center pt-4'>Atau</div>

          <div className='flex pb-4 pt-5'>
            <button className='border w-full h-12 rounded-lg flex justify-center items-center gap-1'>
              <img src={g} alt="" className='w-8' />
              <h1>Masuk dengan Google</h1>
            </button>
          </div>

          <div className="flex pt-1 justify-center items-center gap-1">
            <h1 className="">Belom punya akun?</h1>
            <a href="/Register" className="underline hover:text-blue-500">Daftar</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

