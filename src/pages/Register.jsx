import React, { useState } from 'react';
import background from "../assets/Background.jpg";
import p from '../assets/Buku.jpg';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={{ 
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }} className='w-full h-screen flex justify-center items-center text-white'>
      <div className='w-full h-3/4 lg:w-1/4 lg:h-2/3 rounded-3xl bg-neutral-900 shadow-2xl'>
        <div className='flex flex-col justify-center items-center pt-10'>
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
              type="text"
              id="name"
              placeholder='Name Lengkap'
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
              placeholder='Kata Sandi'
              className='w-full h-12 rounded-lg text-sm font-medium text-gray-700 p-2 mt-2'
              required
            />
          </div>
          <div className='flex flex-col pb-4'>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Konfirmasi Kata Sandi'
              className='w-full h-12 rounded-lg text-sm font-medium text-gray-700 p-2 mt-2'
              required
            />
          </div>

          <button
            type="submit"
            className='w-full h-10 bg-neutral-800 text-white rounded-lg font-semibold mt-4'
          >
            Daftar
          </button>

          <div className="flex pt-4 justify-center items-center gap-1">
            <h1 className="">Sudah punya akun?</h1>
            <a href="/Login" className="underline hover:text-blue-500">Masuk</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
