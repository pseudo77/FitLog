import Banner from '@/components/homepage/Banner';
import Library from '@/components/homepage/Library';
import React from 'react';

const HomePage = () => {
  return (
    <div className='container mx-auto'>
        <Banner></Banner>
        <Library></Library>
    </div>
  );
};

export default HomePage;