import React, { useState, useEffect } from 'react';
import confirmLogo from './confirm.png';

function Confirmation() {
  const [tokenNo, setTokenNo] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    fetch('/token.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTokenNo(data.token);
        setTime(data.time);
      })
      .catch((err) => {
        console.error('Error fetching order confirmation:', err);
      });
  }, []);

  return (
    <div className="bg-[#e8e2d1] h-full">
      {/* circles */}
      <div className="flex justify-center py-4">
        <div className="h-52 w-52 border-1 border-black rounded-full flex justify-center items-center bg-[#ecb45a]">
          <div>
            <img src={confirmLogo} alt="SUCCESS" className="w-40 h-40 object-cover rounded-full" />
          </div>
        </div>
      </div>

      {/* thank you */}
      <div className="flex justify-center items-center flex-col my-3">
        <h1 className="text-8xl font-serif text-[#861D1D] my-1">Thank You!</h1>
        <h2 className="text-2xl font-serif text-[#861D1D] my-1">Your order is confirmed</h2>
        <hr className="border-1 border-[#861D1D] w-[400px] my-3" />
        <div className="flex items-center justify-center w-[16rem] h-[4rem] bg-[#f4b44c7b] my-5 border-1 border-[#a9731d] rounded-3xl p-2">
          <h2 className="text-2xl text-amber-950">Token No : {tokenNo || 'Loading...'}</h2>
        </div>

        <h3 className="text-2xl font-semibold font-cormorant text-[#861D1D]">Hang Tight!</h3>
        <h3 className="text-2xl text-[#861D1D] font-cormorant py-2">
          Your Order Will Ready In About {time || '...'} minutes
        </h3>
      </div>

      {/* status btn */}
      <div className="flex justify-center items-center mt-8">
        <button className="w-[16rem] h-[4rem] font-serif p-1 rounded-full text-white hover:bg-[#b41717] transition-all text-4xl bg-gradient-to-b from-[#861d1d] to-[#f3ac5c]">
          Track Order
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
