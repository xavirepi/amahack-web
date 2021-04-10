import React, { useState } from 'react';
import SideMenu from './SideMenu';

const Home = () => {
  const [category, setCategory] = useState('')

  return (
    <div className="Home">
      <SideMenu activeCategory={category} setCategory={setCategory} />
    </div>
  );
};

export default Home;