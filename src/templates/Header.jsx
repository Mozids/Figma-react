import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaAngleDown } from 'react-icons/fa';
import pp from '../assets/Buku.jpg';

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false); // State untuk kontrol dropdown
  const userMenuRef = useRef(null); // Referensi untuk dropdown menu

  // Fungsi untuk menangani klik di luar dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setIsUserMenuOpen(false); // Menutup dropdown jika klik di luar dropdown
      }
    };

    // Menambahkan event listener untuk mendeteksi klik di luar dropdown
    document.addEventListener('mousedown', handleClickOutside);

    // Membersihkan event listener saat komponen dibersihkan
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen); // Toggle antara tampilkan menu login atau tidak
  };

  const handleMenuItemClick = () => {
    setIsUserMenuOpen(false); // Menutup dropdown setelah klik pada item menu
  };

  return (
    <header className="flex flex-col justify-center items-center w-full bg-neutral-900 text-white shadow-md">
      <div className="w-full sm:max-w-screen py-5 flex flex-col justify-between items-center lg:flex-row sm:gap-4 md:gap-4 lg:gap-0">
        <div className="flex sm:justify-center items-center space-x-3 mb-4 sm:mb-0 sm:pr-0 lg:pl-20">
          <img src={pp} alt="Logo" className="w-12 h-12" />
          <h1 className='font-extrabold'>TOKOBOOKKU</h1>
        </div>

        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center space-x-2 w-96 lg:w-full max-w-3xl px-2 mb-4 sm:mb-0"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="w-full px-4 py-2 bg-neutral-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="text-white">
            <FaSearch size={20} />
          </button>
        </form>

        <div className="flex items-center space-x-8">
          <button className="text-white">
            <FaShoppingCart size={20} />
          </button>

          {/* Tombol untuk membuka menu dropdown */}
          <button className="text-white" onClick={toggleUserMenu}>
            <div className='flex gap-3 items-center sm:pr-0 lg:pr-20'>
              <div className='flex items-center gap-1'>
                <FaAngleDown />
                <h1>Users</h1>
              </div>
              <FaUser size={20} />
            </div>
          </button>

          {/* Dropdown menu yang muncul ketika tombol 'Users' ditekan */}
          {isUserMenuOpen && (
            <div 
              ref={userMenuRef} 
              className="absolute bg-neutral-800 text-white rounded-lg mt-2 py-2 w-32 shadow-lg"
            >
              <a 
                href="/login" 
                className="block px-4 py-2 hover:bg-neutral-700"
                onClick={handleMenuItemClick} // Menutup dropdown saat item dipilih
              >
                Login
              </a>
              <a 
                href="/register" 
                className="block px-4 py-2 hover:bg-neutral-700"
                onClick={handleMenuItemClick} // Menutup dropdown saat item dipilih
              >
                Register
              </a>
            </div>
          )}
        </div>
      </div>

      <div className='pb-2 w-full flex justify-center items-center'>
        <nav className='flex items-center gap-6'>
          <a href="" className='flex items-center gap-2'>
            <FaAngleDown className='flex' /> Categories
          </a>
          <a href="#Home">Home</a>
          <a href="#Book">Book</a>
          <a href="">Promo</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
