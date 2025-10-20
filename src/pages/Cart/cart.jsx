import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Undo2, ShoppingCart } from 'lucide-react';
import Logo from './logo.png';
import './cart.module.css';

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [lastRemoved, setLastRemoved] = useState(null);

  useEffect(() => {
    fetch('/cartItems.json')
      .then((res) => res.json())
      .then((data) =>
        setCartItems(data.map((item) => ({ ...item, qty: 1, price: Number(item.price) })))
      )
      .catch((err) => console.error('Failed to load cart items:', err));
  }, []);

  useEffect(() => {
    if (lastRemoved) {
      const timer = setTimeout(() => setLastRemoved(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [lastRemoved]);

  const incrementQty = (id) =>
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );

  const decrementQty = (id) =>
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );

  const removeItem = (id) => {
    const removedItem = cartItems.find((item) => item.id === id);
    setLastRemoved(removedItem);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const undoRemove = () => {
    if (lastRemoved) {
      setCartItems((prev) => [...prev, lastRemoved]);
      setLastRemoved(null);
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const taxes = parseFloat((subtotal * 0.05).toFixed(2));
  const total = subtotal + taxes;

  return (
    <div className="min-h-screen bg-[var(--page-bg)] font-serif-body flex flex-col items-center p-6 relative">
      {/* Page Heading */}
      <div className="w-full max-w-7xl mb-8 sticky top-0 z-50">
        <div className="relative bg-gradient-to-b from-[var(--card-bg)] to-[var(--page-bg)] rounded-b-[5rem] shadow-md px-8 py-6 flex items-center gap-8 border-t-4 border-[var(--border-dark)]">
          <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
            <img src={Logo} alt="Logo" className="object-cover w-full h-full rounded-full" />
          </div>
          <h1
            className="text-5xl text-[var(--heading-text)]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
          >
            My Cart
          </h1>
        </div>
      </div>

      {/* Cart */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8">
        <div
          className="flex-1 bg-[var(--card-bg)] p-6 rounded-3xl shadow-2xl border-2 border-[var(--border-dark)]"
          style={{ boxShadow: `0 4px 10px var(--shadow-light)` }}
        >
          <div
            className="hidden sm:flex mb-4 text-[var(--heading-text)] border-b pb-2 border-[var(--border-dark)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <div className="flex-[3] flex items-center font-bold">Items</div>
            <div className="flex-[4] flex justify-center font-bold">Quantity</div>
            <div className="flex-[1] flex justify-center font-bold">Price</div>
          </div>

          <div className="pr-2">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center py-10 gap-4 text-[var(--text-dark)]">
                <ShoppingCart size={80} className="text-[var(--heading-text)]" />
                <p className="text-3xl font-semibold text-center">Cart is empty</p>
                <button
                  onClick={() => navigate('/menu')} //To be navigated to MENU page
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-[var(--button-primary)] to-[var(--button-accent)] 
                             text-[var(--page-bg)] font-bold rounded-2xl hover:from-[#a35a29] hover:to-[#d99b2f] 
                             transition-all duration-200 shadow-md"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4 p-4 rounded-xl bg-[var(--page-bg)]/90 shadow-md border border-[var(--border-dark)]/20 hover:shadow-lg hover:scale-[1.01] transition-all duration-200"
                  style={{ boxShadow: `0 4px 10px var(--shadow-light)` }}
                >
                  <div className="flex-[3] flex items-center gap-3 w-full sm:w-auto min-w-0">
                    <img
                      src={Logo}
                      alt={item.name}
                      className="w-12 sm:w-16 h-12 sm:h-16 object-cover rounded-x flex-shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                      <span
                        className="text-[var(--heading-text)]"
                        style={{ fontFamily: "'Instrumental Serif', serif", fontWeight: 600 }}
                      >
                        {item.name}
                      </span>
                      {/* <span className="text-sm italic text-[var(--text-dark)]/50 line-clamp-2 sm:line-clamp-none">
                        {item.desc}
                      </span>
                      <span className="text-sm font-bold mt-1 text-[var(--text-dark)]/80">
                        ₹{item.price}
                      </span> */}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-[2] items-center sm:items-center mt-2 sm:mt-0 w-full">
                    <div className="flex items-center justify-center flex-nowrap gap-3 sm:gap-6">
                      <div className="flex items-center">
                        <button
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="w-10 h-8 bg-[var(--page-bg)] border border-[var(--border-dark)] text-[var(--text-dark)] hover:bg-[var(--text-dark)] hover:text-[var(--page-bg)]"
                          onClick={() =>
                            item.qty === 1 ? removeItem(item.id) : decrementQty(item.id)
                          }
                        >
                          –
                        </button>
                        <span className="w-16 h-8 border border-[var(--border-dark)] text-center text-[var(--text-dark)]">
                          {item.qty}
                        </span>
                        <button
                          aria-label={`Increase quantity of ${item.name}`}
                          className="w-10 h-8 bg-[var(--page-bg)] border border-[var(--border-dark)] text-[var(--text-dark)] hover:bg-[var(--text-dark)] hover:text-[var(--page-bg)]"
                          onClick={() => incrementQty(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        aria-label={`Remove ${item.name} from cart`}
                        className="text-[var(--heading-text)] hover:text-[var(--text-dark)] flex-shrink-0"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex-[1] flex items-center justify-end text-[var(--text-dark)] text-lg mt-2 sm:mt-0 w-full sm:w-auto truncate"
                    style={{ fontFamily: "'Instrumental Serif', serif", fontWeight: 600 }}
                  >
                    ₹{(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div
          className="lg:w-80 w-full bg-gradient-to-b from-[var(--card-bg)] to-[var(--page-bg)] rounded-3xl p-6 flex flex-col border-2 border-[var(--border-dark)] shadow-lg hover:scale-[1.01] hover:shadow-xl transition-all duration-200 h-fit lg:sticky lg:top-40 shadow-var[(--shadow-light)]"
          style={{ boxShadow: `0 4px 10px var(--shadow-light)` }}
        >
          <h2
            className="text-3xl text-[var(--heading-text)] pb-3 mb-6 border-b-2 border-[var(--border-dark)] text-center"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          >
            Order Summary
          </h2>

          <div
            className="space-y-3 text-[var(--text-dark)] font-medium text-lg"
            style={{ fontFamily: "'Instrumental Serif', serif", fontWeight: 700 }}
          >
            <div className="flex justify-between border-b border-[var(--border-dark)]/20 pb-2">
              <span>Subtotal</span>
              <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-[var(--border-dark)]/20 pb-2">
              <span>Taxes</span>
              <span className="font-semibold">₹{taxes}</span>
            </div>

            <div className="flex justify-between text-2xl font-bold pt-4 text-[var(--heading-text)] drop-shadow-sm">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            className={`w-full py-4 rounded-2xl mt-8 text-[var(--page-bg)] font-bold text-xl transition-all duration-200 shadow-md ${
              cartItems.length === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[var(--button-primary)] to-[var(--button-accent)] hover:from-[#a35a29] hover:to-[#d99b2f] hover:scale-[1.02] hover:shadow-lg cursor-pointer'
            }`}
            disabled={cartItems.length === 0}
            onClick={() => cartItems.length > 0 && navigate()} //To be navigated to CHECKOUT
            style={{ fontFamily: "'Instrumental Serif', serif", fontWeight: 700 }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>

      {/* Undo Snackbar */}
      {lastRemoved && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
                bg-gradient-to-r from-[var(--button-primary)] to-[var(--button-accent)] 
                text-[var(--page-bg)] px-4 py-3 rounded-xl shadow-lg
                flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 max-w-[90vw] sm:max-w-sm animate-slide-in z-50"
          style={{ fontFamily: "'Instrumental Serif', serif", fontWeight: 700 }}
        >
          <span className="text-center sm:text-left">Removed "{lastRemoved.name}"</span>
          <button
            aria-label={`Undo remove ${lastRemoved.name}`}
            onClick={undoRemove}
            className="flex items-center justify-center gap-1 bg-[var(--page-bg)] text-[var(--button-primary)] 
                       px-3 py-1 rounded-full font-semibold hover:bg-gradient-to-r hover:from-[var(--button-primary)] hover:to-[var(--button-accent)] hover:text-[var(--page-bg)] transition-all duration-200 mt-2 sm:mt-0"
          >
            <Undo2 size={16} /> Undo
          </button>
        </div>
      )}

      <style>
        {`
        @keyframes slide-in {
          0% { transform: translateX(-50%) translateY(100%); opacity: 0; }
          100% { transform: translateX(-50%) translateY(0%); opacity: 1; }
        }
        .animate-slide-in { animation: slide-in 0.3s ease-out forwards; }
        `}
      </style>
    </div>
  );
};

export default CartPage;
