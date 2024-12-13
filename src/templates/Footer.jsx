import React from 'react';

export const Footer = () => {
  return (
      <footer className="position: absolute w-full bg-neutral-900 text-white py-4">
        <div className="max-w-screen-xl mx-auto flex justify-center items-center">
          <p>&copy; {new Date().getFullYear()} TOKOBOOKKU. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
