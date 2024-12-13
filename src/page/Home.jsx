import React from 'react';
import { FaFireAlt } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p from '../assets/B1.jpeg';
import pp from '../assets/B2.jpeg';
import ppp from '../assets/B3.jpeg';
import pppp from '../assets/B4.jpeg';
import BookImage from '../assets/Book.jpg'; 

export const Main = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const bestSellingBooks = [
    {
      title: "Buku 1",
      description: "Deskripsi",
      price: "Rp 100.000",
      image: BookImage,
    },
    {
      title: "Buku 2",
      description: "Deskripsi",
      price: "Rp 150.000",
      image: BookImage,
    },
    {
      title: "Buku 3",
      description: "Deskripsi",
      price: "Rp 200.000",
      image: BookImage,
    },
    {
      title: "Buku 4",
      description: "Deskripsi",
      price: "Rp 250.000",
      image: BookImage,
    },
  ];

  const generalBooks = [
    {
      title: "Buku 1",
      description: "Deskripsi",
      price: "Rp 80.000",
      image: BookImage,
    },
    {
      title: "Buku 2",
      description: "Deskripsi",
      price: "Rp 120.000",
      image: BookImage,
    },
    {
      title: "Buku 3",
      description: "Deskripsi",
      price: "Rp 170.000",
      image: BookImage,
    },
    {
      title: "Buku 4",
      description: "Deskripsi",
      price: "Rp 220.000",
      image: BookImage,
    },
  ];

  return (
    <>
      <div>
        <div className='flex justify-center'>
          <div id='Home' className="h-2/4 w-full lg:w-2/4 pt-10">
            <Slider {...settings}>
              <div className="flex justify-center items-center">
                <img
                  src={p}
                  alt="Banner 1"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={pp}
                  alt="Banner 2"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={ppp}
                  alt="Banner 3"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={pppp}
                  alt="Banner 4"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </Slider>
          </div>
        </div>

        <div id="Book" className=''>
          <div className='px-4 lg:px-20 pb-20'>
            <div className='flex items-center gap-1 pt-24 font-medium text-xl underline lg:text-2xl pb-5'>
              Buku Terlaris <FaFireAlt />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {bestSellingBooks.map((book, idx) => (
                <div key={idx} className="border w-full h-auto bg-white p-4 shadow-lg rounded-lg">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full object-cover rounded-md"
                  />
                  <h3 className="mt-4 font-semibold text-lg">{book.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{book.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold">{book.price}</span>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                      Beli
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className='flex items-center gap-1 pt-24 font-medium text-xl underline lg:text-2xl pb-5'>
              Buku Umum
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {generalBooks.map((book, idx) => (
                <div key={idx} className="border w-full h-auto bg-white p-4 shadow-lg rounded-lg">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full object-cover rounded-md"
                  />
                  <h3 className="mt-4 font-semibold text-lg">{book.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{book.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold">{book.price}</span>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                      Beli
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .slick-slider {
          position: relative;
        }
        .slick-dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          justify-content: center;
        }
        .slick-dots li button:before {
          font-size: 20px;
          color: white;
          opacity: 0.7;
        }
        .slick-dots li.slick-active button:before {
          color: grey;
        }
      `}</style>
    </>
  );
};

export default Main;
