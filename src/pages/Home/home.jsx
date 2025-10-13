import React from 'react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-gray-100 ${styles.customBg}`}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Restaurant</h1>
      <p className="text-lg text-gray-600">Enjoy delicious food and great ambiance!</p>
    </div>
  );
};

export default Home;
