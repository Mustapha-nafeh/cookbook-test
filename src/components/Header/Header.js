import React from 'react';
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <SearchForm />
        <h1 className='text-white header-title ls-2'>What are your favorite cuisines?</h1>
      </div>
    </header>
  )
}

export default Header