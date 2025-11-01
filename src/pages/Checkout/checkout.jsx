import React, { useState, useEffect } from 'react';
import Confirmation from './confirmation';
import logo from '../../assets/logo.png';

import { useNavigate } from 'react-router-dom';

function CheckoutMine() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/cartItems.json')
      .then((res) => {
        console.log('Response:', res);
        return res.json();
      })
      .then((data) => {
        console.log('Cart data loaded:', data);
        setCartItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading cart data:', err);
        setLoading(false);
      });
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

  const handleSubmit = () => {
    if (!name || !number) {
      alert('Please enter your details!!!');
      return;
    } else {
      navigate('/confirmation');
    }
  };

  if (loading) {
    return <p className="text-center text-2xl mt-10">Loading your cart...</p>;
  }

  return (
    <div className="w-full h-full bg-[#e8e2d1] flex flex-col items-center">
      {/* header */}
      <div className="bg-gradient-to-b from-[#f2ba8fff] to-[#e3d9d2] w-full h-25 flex items-center rounded-b-3xl shadow-2xl border-1">
        <img
          src={logo}
          alt="LOGO"
          className="w-16 h-16 object-cover border-blue-800 rounded-full bg-slate-600 m-2"
        />
        <h1 className="font-serif text-5xl m-4 mx-9 text-[hsl(0,64%,32%)]">Checkout</h1>
      </div>

      {/* main box */}
      <div className="w-[85vw] sm:w-[70vw] bg-[#f2ba8f4a] shadow-2xl border-1 rounded-[2.6rem] h-auto p-3 mt-8 ">
        {/*your Order */}
        <div>
          <div className="flex justify-between">
            <h3 className="text-4xl ml-3 mb-3 font-medium p-1">Your Order</h3>
            <h3 className="text-lg text-[hsl(0,64%,32%)]   font-medium p-1 pt-2 mr-4 mb-3 rounded-3xl">
              Amount
            </h3>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2 text-blue-950">
              <div className="flex justify-between items-center mx-3 p-2 rounded-2xl w-full bg-gradient-to-r from-[#f8dcc7] to-[#fffdfa] border-1 border-b-blue-800">
                <div>
                  <p className="font-medium text-lg">{item.name}</p>
                  <p className="text-lg text-gray-500 px-2">
                    Qty: {item.qty} × ₹{item.price}
                  </p>
                </div>
                <p className="font-semibold">₹{item.qty * item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* total amount */}
        <div className="flex justify-between font-semibold text-2xl m-3">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>

        <hr className="my-10 border-t-2 border-[#861D1D]" />

        {/*details fill */}
        <div>
          <h1 className="text-3xl py-2 font-serif">Enter Your Details:</h1>
          <div className="m-2">
            <label htmlFor="name" className="font-semibold text-xl">
              Name:
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="m-1 ml-4 p-2 rounded-xl w-[60%] border-[#861D1D] border-1"
            />
          </div>

          <div className="m-2">
            <label htmlFor="number" className="font-semibold text-xl">
              Number:
            </label>
            <input
              id="number"
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Contact No."
              className="m-1 ml-4 p-2 rounded-xl w-[60%] border-[#861D1D] border-1"
            />
          </div>

          <div className="flex justify-center py-4">
            <button
              onClick={handleSubmit}
              className="w-[16rem] h-[4rem] font-serif p-1 rounded-full text-white bg-gradient-to-b from-[#861d1d] to-[#f3ac5c] text-4xl hover:bg-amber-800"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutMine;
