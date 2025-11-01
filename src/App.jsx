import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/home';
import Menu from './pages/Menu/menu';
import './App.css';

function App() {
  return (
    <Router>
      <header className="w-full">
        <navbar className="w-full max-w-screen flex h-[17vh] sm:h-[18vh] md:h-[19vh] lg:h-[20vh] xl:h-[21vh] 2xl:h-[22vh] justify-between bg-[#2B1E1A] items-center ">
          <div className="flex justify-center items-center flex-shrink-0 pl-[3%] md:pl-[4%] sm:pl-[5%] lg:pl-[6%]">
            <img
              src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1760812231/Intersect_1_kspfba.jpg"
              className="h-[9vh] sm:h-[10vh] md:h-[11vh] lg:h-[12vh] flex justify-center items-center rounded-[50%] bg-[#D9D9D9]"
            ></img>
          </div>

          <div className="w-full max-w-full flex justify-center pl-[6%] md:pl-[8.5%] sm:pl-[9%] lg:pl-[10.5%] xl:pl-[11%] 2xl:pl-[12%] items-center flex-nowrap space-x-[2.5%] md:space-x-[4%] lg:space-x-[5%] xl:space-x-[7%] 2xl:space-x-[9%] text-[#EBCCB4] text-[clamp(80%, xl, 100%)] font-lily 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-xs">
            <div>
              <Link to="/Home" className=" hover:underline">
                Home
              </Link>
            </div>

            <div>
              <Link to="/menu" className="hover:underline">
                Menu
              </Link>
            </div>

            <div>
              <Link
                to="#"
                onClick={() => {
                  document.getElementById('visit')?.scrollIntoView({ behaviour: 'smooth' });
                }}
                className="hover:underline"
              >
                VisitUs
              </Link>
            </div>

            <div>
              <Link
                to="#"
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behaviour: 'smooth' });
                }}
                className=" hover:underline"
              >
                Services
              </Link>
            </div>

            <div>
              <Link to="/Review" className="hover:underline">
                Review
              </Link>
            </div>
          </div>
        </navbar>
      </header>

      <herosection>
        <firstbar>
          <div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1760897898/89628d4c2e2e9745a409008fe1aa0c6d1ca7c9d4_rb4xn8.jpg"
                className="bg-cover w-screen h-[100vh]"
              />
            </div>

            <div className="absolute mt-[59vh] sm:mt-[56vh] md:mt-[56vh] lg:mt-[58vh] ml-[-4vw] sm:ml-[-8vw] md:ml-[-8vw] lg:ml-[-20vw] inset-0 flex flex-col text-center leading-none text-[16vw] md:text-[15vw] lg:text-[9vw] w-full h-[10vh]">
              <p className="text-[#861D1D] [-webkit-text-stroke:0.008em_#E8E2D1] playfair">
                Welcome To <br /> Hogsmede
              </p>
            </div>
          </div>

          <div className="absolute gap-[4vw] mt-[-30vh] ml-[4vw] md:pt-[9vh] lg:pt-[7vh] flex flex-row">
            <div className="bg-[#BF6F31] w-[34vw] h-[5.02vh] md:w-[40vw] md:h-[9vh] lg:w-[34vw] lg:h-[11vh] rounded-full">
              <p>
                <Link
                  to="#"
                  onClick={() => {
                    document.getElementById('items')?.scrollIntoView({ behaviour: 'smooth' });
                  }}
                  className="text-[#FFFFFF] hover:underline instrument-serif font-medium text-[5vw] md:text-[5vw] lg:text-[4vw] flex items-center justify-center"
                >
                  View Menu
                </Link>
              </p>
            </div>

            <div className="bg-[#BF6F31] w-[34vw] h-[5.02vh] md:w-[40vw] md:h-[9vh] lg:w-[34vw] lg:h-[11vh] rounded-full">
              <p>
                <Link
                  to="#"
                  onClick={() => {
                    document.getElementById('book-table')?.scrollIntoView({ behaviour: 'smooth' });
                  }}
                  className="text-[#FFFFFF] hover:underline instrument-serif font-medium text-[5vw] md:text-[5vw] lg:text-[4vw] flex items-center justify-center"
                >
                  Book a table
                </Link>
              </p>
            </div>
          </div>
        </firstbar>
      </herosection>

      <thirdsection>
        <div className="w-full h-[13vh] md:h-[20vh] lg:h-[25vh] overflow-hidden bg-[#2B1E1A]">
          <p className="text-[#861D1D] itelianno flex justify-center pt-[2vh] items-center font-normal text-[10vw] md:text-[8vw]">
            Serving taste since 1990
          </p>
        </div>
      </thirdsection>

      <fourthsection id="items" className="w-full h-auto">
        <div className="w-full h-auto">
          <img
            src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1762010306/Frame_13__3_-removebg-preview_joddbo.png"
            className="bg-[#E8E2D1] w-full h-auto"
          ></img>
        </div>
      </fourthsection>

      <fifthsection id="visit">
        <div className="w-full h-[13vh] md:h-[20vh] lg:h-[25vh] overflow-hidden bg-[#2B1E1A]">
          <p className="text-[#861D1D] itelianno flex justify-center pt-[2vh] items-center font-normal text-[10vw] md:text-[8vw]">
            Visit Us
          </p>
        </div>
      </fifthsection>

      <sixthsection className="w-full">
        <div className="flex bg-[#E8E2D1] px-[4vw] py-[4vh] items-stretch flex-row gap-[3vw] h-full">
          <div id="book-table" className="w-[50vw] bg-[#F4B34C] px-[4vw] py-[2vh]">
            <div className="instrument-serif text-[3vh] sm:text-[5vh] md:text-[6vh] lg:text-[7vh]">
              <p className="flex flex-row gap-[1vh]">Opening Hours</p>
            </div>

            <p className="text-[1vh] sm:text-[2vh] md:text-[3vh] lg:text-[4vh] font-mukta">
              Mon - Thu: 11:00 AM - 9:00 PM
              <br />
              Fri - Sat: 11:00 AM - 10:00 PM
              <br />
              Sun: 12:00 PM - 8:00 PM
              <br />
              *Bookings Available
            </p>

            <div className="instrument-serif mt-[2vh] md:mt-[0] text-[3vh] sm:text-[5vh] md:text-[6vh] lg:text-[7vh]">
              <p className="flex flex-row gap-[1vh]">Book a table</p>
            </div>

            <div className=" text-[#861D1D] mb-[2vh]">
              <form
                action="https://formsubmit.co/muskanagarwala01@gmail.com"
                method="POST"
                class="md:gap-[1vh] mt-[1.5vh] md:mt-[0]"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Fill your Name"
                  class="w-full text-[2vh] md:text-[4vh] lg:text-[5vh] bg-[#EBCCB4] h-[3vh] sm:h-[6vh] md:h-[7vh] lg:h-[9vh] px-2 py-2 rounded-sm lg:rounded-lg border"
                  required
                />
                <input
                  type="text"
                  name="date"
                  placeholder="DD-MM-YYYY"
                  class="w-full md:mt-[1.5vh] text-[2vh] md:text-[4vh] lg:text-[5vh] bg-[#EBCCB4] h-[3vh] sm:h-[6vh] md:h-[7vh] lg:h-[9vh] px-2 py-2 rounded-sm lg:rounded-lg border"
                  required
                />

                <div class="flex gap-[2vw] mt-[1vh] md:gap-[1vw]">
                  <select
                    name="hour"
                    class="bg-[#EBCCB4] h-[4vh] w-[20vw] md:px-[2vw] md:h-[6vh] md:w-[24vw] lg:h-[7vh] lg:w-[26vw] text-[1.5vh] md:text-[2.5vh] lg:text-[3.5vh] rounded-md border"
                    required
                  >
                    <option value="">Hour</option>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>

                  <select
                    name="minute"
                    class="bg-[#EBCCB4] h-[4vh] w-[20vw] md:px-[2vw] md:h-[6vh] md:w-[24vw] lg:h-[7vh] lg:w-[26vw] md:text-[2.5vh] lg:text-[3.5vh] text-[1.5vh] rounded-md border"
                    required
                  >
                    <option value="">Min</option>
                    <option>00</option>
                    <option>15</option>
                    <option>30</option>
                    <option>45</option>
                  </select>

                  <select
                    name="ampm"
                    class="bg-[#EBCCB4] h-[4vh] w-[20vw] md:px-[2vw] md:h-[6vh] md:w-[24vw] lg:h-[7vh] lg:w-[26vw] md:text-[2.5vh] lg:text-[3.5vh] text-[1.5vh] rounded-md border"
                    required
                  >
                    <option value="">AM/PM</option>
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>

                <button
                  type="submit"
                  class="mt-[1vh] font-bold bg-[#EBCCB4] h-[4vh] w-full md:px-[2vw] md:h-[6vh] md:w-[24vw] lg:h-[7vh] lg:w-[26vw] text-[1.5vh] md:text-[3vh] lg:text-[4vh] rounded-md border"
                  required
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>

          <div className="w-[50vw] h-full">
            <div className="">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761162337/Frame_20_yktd4a.jpg"
                className="w-full sm:h-[48vh] md:h-[55vh] lg:h-[62vh] h-[35vh]"
              ></img>
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761940959/Frame_22_1_tihnuq.jpg"
                className="w-full"
              ></img>
            </div>
          </div>
        </div>
      </sixthsection>

      <seventhsection id="services">
        <div className="w-full h-[13vh] md:h-[20vh] lg:h-[25vh] overflow-hidden bg-[#2B1E1A]">
          <p className="text-[#861D1D] itelianno flex justify-center pt-[2vh] items-center font-normal text-[10vw] md:text-[8vw]">
            Our Services
          </p>
        </div>
      </seventhsection>

      <eightsection>
        <div className="w-full h-[40vh] md:h-[75vh] lg:h-[100vh] bg-[#E8E2D1]">
          <div className="flex justify-center items-top flex-row py-[1vh] px-[3vw] gap-[7vw]">
            <p className="itelianno font-normal text-[10vw]">Birthdays</p>
            <p className="itelianno font-normal text-[10vw]">Weddings</p>
            <p className="itelianno font-normal text-[10vw]">Events</p>
          </div>

          <div className="flex justify-center items-top flex-row px-[4vw] gap-[6vw]">
            <div className="">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761943873/3c90ed204fd9f7a31c3c75e352136cd5879096da_hyb4ot.jpg"
                className=""
              ></img>
            </div>

            <div className="">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761944255/950c3e821b60df696936740bb9032ca712a159cb_olcng4.jpg"
                className=""
              ></img>
            </div>

            <div className="">
              <img
                src="https://res.cloudinary.com/dw3n9vflw/image/upload/v1761944265/0e0fdcf2f4457eb77883ff7ee28517edea39506a_jku6tr.jpg"
                className=""
              ></img>
            </div>
          </div>

          <div className="flex justify-center items-top leading-none flex-row py-[4vh] px-[4vw] gap-[6vw]">
            <p className="itelianno  text-[#861D1D] font-normal text-[3vw]">
              Pizza ipsum dolor meat lovers buffalo. Party chicken chicken lovers Bianca ipsum
              spinach crust buffalo spinach.
            </p>
            <p className="itelianno text-[#861D1D] font-normal text-[3vw]">
              Pizza ipsum dolor meat lovers buffalo. Party chicken chicken lovers Bianca ipsum
              spinach crust buffalo spinach.
            </p>
            <p className="itelianno text-[#861D1D] font-normal text-[3vw]">
              Pizza ipsum dolor meat lovers buffalo. Party chicken chicken lovers Bianca ipsum
              spinach crust buffalo spinach.
            </p>
          </div>
        </div>
      </eightsection>

      <ninesection>
        <div className="w-full h-[13vh] md:h-[20vh] lg:h-[25vh] overflow-hidden bg-[#2B1E1A]">
          <p className="text-[#861D1D] itelianno flex justify-center pt-[2vh] items-center font-normal text-[10vw] md:text-[8vw]">
            Thankyou
          </p>
        </div>
      </ninesection>
    </Router>
  );
}

export default App;
